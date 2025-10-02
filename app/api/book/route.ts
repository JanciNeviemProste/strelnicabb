import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const bookingSchema = z.object({
  laneId: z.string(),
  timeSlotId: z.string(),
  customerName: z.string().min(1),
  customerEmail: z.string().email(),
  customerPhone: z.string().min(1),
  numberOfPeople: z.number().min(1),
  addOns: z.array(z.object({
    id: z.string(),
    quantity: z.number().min(1)
  })).default([]),
  notes: z.string().optional()
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = bookingSchema.parse(body)

    // Check if time slot is still available
    const timeSlot = await prisma.timeSlot.findUnique({
      where: { id: validatedData.timeSlotId },
      include: {
        lane: true,
        bookings: true
      }
    })

    if (!timeSlot) {
      return NextResponse.json(
        { error: 'Časový slot neexistuje' },
        { status: 404 }
      )
    }

    if (timeSlot.bookings.length > 0) {
      return NextResponse.json(
        { error: 'Časový slot je už obsadený' },
        { status: 409 }
      )
    }

    if (timeSlot.isBlocked) {
      return NextResponse.json(
        { error: 'Časový slot je zablokovaný' },
        { status: 409 }
      )
    }

    // Check capacity
    if (validatedData.numberOfPeople > timeSlot.lane.capacity) {
      return NextResponse.json(
        { error: 'Prekročená kapacita dráhy' },
        { status: 400 }
      )
    }

    // Calculate total price
    let totalPrice = Number(timeSlot.lane.pricePerHour)

    // Add add-ons price
    for (const addOnItem of validatedData.addOns) {
      const addOn = await prisma.addOn.findUnique({
        where: { id: addOnItem.id }
      })
      if (addOn) {
        totalPrice += Number(addOn.price) * addOnItem.quantity
      }
    }

    // Create booking transaction
    const booking = await prisma.$transaction(async (tx) => {
      // Create the booking
      const newBooking = await tx.booking.create({
        data: {
          laneId: validatedData.laneId,
          timeSlotId: validatedData.timeSlotId,
          customerName: validatedData.customerName,
          customerEmail: validatedData.customerEmail,
          customerPhone: validatedData.customerPhone,
          numberOfPeople: validatedData.numberOfPeople,
          totalPrice,
          notes: validatedData.notes,
          status: 'CONFIRMED'
        }
      })

      // Add add-ons
      for (const addOnItem of validatedData.addOns) {
        await tx.bookingAddOn.create({
          data: {
            bookingId: newBooking.id,
            addOnId: addOnItem.id,
            quantity: addOnItem.quantity
          }
        })
      }

      return newBooking
    })

    // Send confirmation email
    if (process.env.RESEND_API_KEY) {
      try {
        // Create ICS calendar event
        const startDateTime = new Date(timeSlot.startTime)
        const endDateTime = new Date(timeSlot.endTime)

        const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Strelnica BB//Booking//SK
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
UID:booking-${booking.id}@strelnicabb.sk
DTSTART:${startDateTime.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}
DTEND:${endDateTime.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}
SUMMARY:Rezervácia - ${timeSlot.lane.name}
DESCRIPTION:Rezervácia streleckej dráhy v Strelnici BB
LOCATION:Strelnica BB, Banská Bystrica
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`

        await resend.emails.send({
          from: 'rezervacie@strelnicabb.sk',
          to: validatedData.customerEmail,
          subject: 'Potvrdenie rezervácie - Strelnica BB',
          html: `
            <h1>Potvrdenie rezervácie</h1>
            <p>Dobrý deň ${validatedData.customerName},</p>
            <p>Vaša rezervácia bola úspešne vytvorená.</p>

            <h2>Detaily rezervácie:</h2>
            <ul>
              <li><strong>Dráha:</strong> ${timeSlot.lane.name}</li>
              <li><strong>Dátum a čas:</strong> ${startDateTime.toLocaleString('sk-SK')}</li>
              <li><strong>Počet osôb:</strong> ${validatedData.numberOfPeople}</li>
              <li><strong>Celková cena:</strong> ${totalPrice}€</li>
            </ul>

            <p>Tešíme sa na vašu návštevu!</p>
            <p>Strelnica BB</p>
          `,
          attachments: [
            {
              filename: 'rezervacia.ics',
              content: Buffer.from(icsContent).toString('base64')
            }
          ]
        })
      } catch (emailError) {
        console.error('Email sending failed:', emailError)
        // Don't fail the booking if email fails
      }
    }

    return NextResponse.json({
      success: true,
      bookingId: booking.id,
      message: 'Rezervácia bola úspešne vytvorená'
    })

  } catch (error) {
    console.error('Booking error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Neplatné údaje', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Chyba pri vytváraní rezervácie' },
      { status: 500 }
    )
  }
}