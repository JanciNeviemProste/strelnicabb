import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const addOns = await prisma.addOn.findMany({
      where: { isActive: true },
      orderBy: [
        { category: 'asc' },
        { name: 'asc' }
      ]
    })

    return NextResponse.json(addOns)
  } catch (error) {
    console.error('Error fetching add-ons:', error)
    return NextResponse.json(
      { error: 'Chyba pri načítavaní doplnkov' },
      { status: 500 }
    )
  }
}