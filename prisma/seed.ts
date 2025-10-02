import { PrismaClient } from '@prisma/client'
import { addDays, setHours, setMinutes, startOfDay } from 'date-fns'

const prisma = new PrismaClient()

async function main() {
  // Create business hours
  const businessHours = [
    { dayOfWeek: 1, openTime: '09:00', closeTime: '21:00' }, // Monday
    { dayOfWeek: 2, openTime: '09:00', closeTime: '21:00' }, // Tuesday
    { dayOfWeek: 3, openTime: '09:00', closeTime: '21:00' }, // Wednesday
    { dayOfWeek: 4, openTime: '09:00', closeTime: '21:00' }, // Thursday
    { dayOfWeek: 5, openTime: '09:00', closeTime: '22:00' }, // Friday
    { dayOfWeek: 6, openTime: '10:00', closeTime: '22:00' }, // Saturday
    { dayOfWeek: 0, openTime: '10:00', closeTime: '20:00' }, // Sunday
  ]

  for (const hours of businessHours) {
    await prisma.businessHours.upsert({
      where: { dayOfWeek: hours.dayOfWeek },
      update: hours,
      create: hours,
    })
  }

  // Create lanes
  const lanes = [
    {
      name: 'Dráha 1 - Krátka vzdialenosť',
      description: 'Ideálna pre začiatočníkov, 10m dráha s pístoľami',
      capacity: 2,
      pricePerHour: 25.00,
    },
    {
      name: 'Dráha 2 - Stredná vzdialenosť',
      description: '25m dráha pre pokročilých strelcov',
      capacity: 1,
      pricePerHour: 30.00,
    },
    {
      name: 'Dráha 3 - Dlhá vzdialenosť',
      description: '50m dráha pre presnostné streľby s puškami',
      capacity: 1,
      pricePerHour: 35.00,
    },
    {
      name: 'VIP Dráha',
      description: 'Súkromná dráha s inštruktárom a kompletnou výbavou',
      capacity: 4,
      pricePerHour: 60.00,
    },
  ]

  for (const lane of lanes) {
    await prisma.lane.upsert({
      where: { name: lane.name },
      update: lane,
      create: lane,
    })
  }

  // Create add-ons
  const addOns = [
    {
      name: 'Glock 17 (9mm)',
      description: 'Spolehlivá služobná pištoľ',
      price: 15.00,
      category: 'weapon',
    },
    {
      name: 'CZ 75 (9mm)',
      description: 'Legendárna česká pištoľ',
      price: 18.00,
      category: 'weapon',
    },
    {
      name: 'AR-15 (.223)',
      description: 'Poloautomatická puška',
      price: 25.00,
      category: 'weapon',
    },
    {
      name: 'Ochranné okuliare',
      description: 'Ochrana zraku pri strelbe',
      price: 3.00,
      category: 'protection',
    },
    {
      name: 'Chrániče sluchu',
      description: 'Ochrana sluchu pri strelbe',
      price: 3.00,
      category: 'protection',
    },
    {
      name: 'Základný kurz strelby',
      description: '30 minút s inštruktorom pre začiatočníkov',
      price: 20.00,
      category: 'instruction',
    },
    {
      name: 'Pokročilý kurz presnosti',
      description: '60 minút pokročilého tréningu',
      price: 40.00,
      category: 'instruction',
    },
  ]

  for (const addOn of addOns) {
    await prisma.addOn.upsert({
      where: { name: addOn.name },
      update: addOn,
      create: addOn,
    })
  }

  // Create sample time slots for next 30 days
  const createdLanes = await prisma.lane.findMany()
  const startDate = startOfDay(new Date())

  for (let day = 0; day < 30; day++) {
    const currentDate = addDays(startDate, day)
    const dayOfWeek = currentDate.getDay()

    // Skip if business is closed
    const businessHour = await prisma.businessHours.findUnique({
      where: { dayOfWeek },
    })

    if (!businessHour || businessHour.isClosed) continue

    const [openHour, openMin] = businessHour.openTime.split(':').map(Number)
    const [closeHour, closeMin] = businessHour.closeTime.split(':').map(Number)

    for (const lane of createdLanes) {
      // Create hourly slots
      for (let hour = openHour; hour < closeHour; hour++) {
        const startTime = setMinutes(setHours(currentDate, hour), 0)
        const endTime = setMinutes(setHours(currentDate, hour + 1), 0)

        await prisma.timeSlot.upsert({
          where: {
            laneId_startTime: {
              laneId: lane.id,
              startTime,
            }
          },
          update: {},
          create: {
            laneId: lane.id,
            startTime,
            endTime,
          },
        })
      }
    }
  }

  // Create sample holidays
  const holidays = [
    { name: 'Nový rok', date: new Date(2024, 0, 1), isRecurring: true },
    { name: 'Zjavenie Pána', date: new Date(2024, 0, 6), isRecurring: true },
    { name: 'Veľkonočný pondelok', date: new Date(2024, 3, 1), isRecurring: false },
    { name: 'Sviatok práce', date: new Date(2024, 4, 1), isRecurring: true },
    { name: 'Deň víťazstva nad fašizmom', date: new Date(2024, 4, 8), isRecurring: true },
    { name: 'Sviatok sv. Cyrila a Metoda', date: new Date(2024, 6, 5), isRecurring: true },
    { name: 'SNP', date: new Date(2024, 7, 29), isRecurring: true },
    { name: 'Deň Ústavy SR', date: new Date(2024, 8, 1), isRecurring: true },
    { name: 'Sedembolestná Panna Mária', date: new Date(2024, 8, 15), isRecurring: true },
    { name: 'Sviatok všetkých svätých', date: new Date(2024, 10, 1), isRecurring: true },
    { name: 'Deň slobody a demokracie', date: new Date(2024, 10, 17), isRecurring: true },
    { name: 'Štedrý deň', date: new Date(2024, 11, 24), isRecurring: true },
    { name: 'Prvý sviatok vianočný', date: new Date(2024, 11, 25), isRecurring: true },
    { name: 'Druhý sviatok vianočný', date: new Date(2024, 11, 26), isRecurring: true },
  ]

  for (const holiday of holidays) {
    await prisma.holiday.upsert({
      where: { date: holiday.date },
      update: holiday,
      create: holiday,
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })