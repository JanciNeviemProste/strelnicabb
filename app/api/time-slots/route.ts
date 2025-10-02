import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { startOfDay, endOfDay } from 'date-fns'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const laneId = searchParams.get('laneId')
  const date = searchParams.get('date')

  if (!laneId || !date) {
    return NextResponse.json(
      { error: 'laneId a date sú povinné parametre' },
      { status: 400 }
    )
  }

  try {
    const selectedDate = new Date(date)
    const dayStart = startOfDay(selectedDate)
    const dayEnd = endOfDay(selectedDate)

    const timeSlots = await prisma.timeSlot.findMany({
      where: {
        laneId,
        startTime: {
          gte: dayStart,
          lte: dayEnd
        }
      },
      include: {
        bookings: {
          select: { id: true }
        }
      },
      orderBy: { startTime: 'asc' }
    })

    // Transform to include booking status
    const slotsWithStatus = timeSlots.map(slot => ({
      id: slot.id,
      startTime: slot.startTime.toISOString(),
      endTime: slot.endTime.toISOString(),
      isBooked: slot.bookings.length > 0,
      isBlocked: slot.isBlocked
    }))

    return NextResponse.json(slotsWithStatus)
  } catch (error) {
    console.error('Error fetching time slots:', error)
    return NextResponse.json(
      { error: 'Chyba pri načítavaní časových slotov' },
      { status: 500 }
    )
  }
}