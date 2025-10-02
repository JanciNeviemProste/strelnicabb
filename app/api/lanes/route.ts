import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const lanes = await prisma.lane.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' }
    })

    return NextResponse.json(lanes)
  } catch (error) {
    console.error('Error fetching lanes:', error)
    return NextResponse.json(
      { error: 'Chyba pri načítavaní dráh' },
      { status: 500 }
    )
  }
}