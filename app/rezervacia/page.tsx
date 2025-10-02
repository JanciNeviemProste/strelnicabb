'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, Users, Target, Euro } from 'lucide-react'
import { format, addDays } from 'date-fns'
import { sk } from 'date-fns/locale'
import { useToast } from '@/hooks/use-toast'

interface Lane {
  id: string
  name: string
  description: string
  capacity: number
  pricePerHour: number
}

interface TimeSlot {
  id: string
  startTime: string
  endTime: string
  isBooked: boolean
}

interface AddOn {
  id: string
  name: string
  description: string
  price: number
  category: string
}

export default function ReservationPage() {
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [selectedLane, setSelectedLane] = useState<Lane | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null)
  const [selectedAddOns, setSelectedAddOns] = useState<Array<{id: string, quantity: number}>>([])
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    phone: '',
    numberOfPeople: 1,
    notes: ''
  })

  const [lanes, setLanes] = useState<Lane[]>([])
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])
  const [addOns, setAddOns] = useState<AddOn[]>([])
  const [loading, setLoading] = useState(false)

  // Mock data (replace with API calls)
  useEffect(() => {
    setLanes([
      {
        id: '1',
        name: 'Dráha 1 - Krátka vzdialenosť',
        description: 'Ideálna pre začiatočníkov, 10m dráha s pístoľami',
        capacity: 2,
        pricePerHour: 25
      },
      {
        id: '2',
        name: 'Dráha 2 - Stredná vzdialenosť',
        description: '25m dráha pre pokročilých strelcov',
        capacity: 1,
        pricePerHour: 30
      },
      {
        id: '3',
        name: 'VIP Dráha',
        description: 'Súkromná dráha s inštruktárom a kompletnou výbavou',
        capacity: 4,
        pricePerHour: 60
      }
    ])

    setAddOns([
      { id: '1', name: 'Glock 17 (9mm)', description: 'Spolehlivá služobná pištoľ', price: 15, category: 'weapon' },
      { id: '2', name: 'CZ 75 (9mm)', description: 'Legendárna česká pištoľ', price: 18, category: 'weapon' },
      { id: '3', name: 'Ochranné okuliare', description: 'Ochrana zraku pri strelbe', price: 3, category: 'protection' },
      { id: '4', name: 'Chrániče sluchu', description: 'Ochrana sluchu pri strelbe', price: 3, category: 'protection' },
      { id: '5', name: 'Základný kurz strelby', description: '30 minút s inštruktorom', price: 20, category: 'instruction' }
    ])
  }, [])

  useEffect(() => {
    if (selectedLane && selectedDate) {
      // Mock time slots - replace with API call
      const slots = Array.from({ length: 12 }, (_, i) => ({
        id: `slot-${i}`,
        startTime: `${9 + i}:00`,
        endTime: `${10 + i}:00`,
        isBooked: Math.random() > 0.7 // Random booking status
      }))
      setTimeSlots(slots)
    }
  }, [selectedLane, selectedDate])

  const handleLaneSelect = (lane: Lane) => {
    setSelectedLane(lane)
    setStep(2)
  }

  const handleTimeSlotSelect = (slot: TimeSlot) => {
    setSelectedTimeSlot(slot)
    setStep(3)
  }

  const handleAddOnToggle = (addOnId: string) => {
    setSelectedAddOns(prev => {
      const existing = prev.find(item => item.id === addOnId)
      if (existing) {
        return prev.filter(item => item.id !== addOnId)
      } else {
        return [...prev, { id: addOnId, quantity: 1 }]
      }
    })
  }

  const calculateTotal = () => {
    let total = selectedLane?.pricePerHour || 0

    selectedAddOns.forEach(selectedAddOn => {
      const addOn = addOns.find(a => a.id === selectedAddOn.id)
      if (addOn) {
        total += addOn.price * selectedAddOn.quantity
      }
    })

    return total
  }

  const handleSubmit = async () => {
    setLoading(true)

    try {
      // Mock API call - replace with actual booking API
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast({
        title: "Rezervácia úspešná!",
        description: "E-mail s potvrdením vám bol odoslaný.",
      })

      // Reset form
      setStep(1)
      setSelectedLane(null)
      setSelectedTimeSlot(null)
      setSelectedAddOns([])
      setCustomerData({
        name: '',
        email: '',
        phone: '',
        numberOfPeople: 1,
        notes: ''
      })

    } catch (error) {
      toast({
        title: "Chyba pri rezervácii",
        description: "Skúste to prosím znovu.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  const dates = Array.from({ length: 14 }, (_, i) => addDays(new Date(), i))

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Rezervácia dráhy</h1>
          <p className="text-muted-foreground">
            Jednoducho si rezervujte čas na streleckej dráhe v niekoľkých krokoch
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`flex items-center ${stepNumber < 4 ? 'flex-1' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= stepNumber
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div
                    className={`flex-1 h-0.5 mx-4 ${
                      step > stepNumber ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-4 text-sm text-muted-foreground">
            <div>Výber dráhy</div>
            <div>Dátum & čas</div>
            <div>Doplnky</div>
            <div>Údaje</div>
          </div>
        </div>

        {/* Step 1: Lane Selection */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Vyberte dráhu</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {lanes.map((lane) => (
                <Card
                  key={lane.id}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => handleLaneSelect(lane)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{lane.name}</CardTitle>
                    <CardDescription>{lane.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-2">
                        <Euro className="h-4 w-4 text-primary" />
                        <span className="font-semibold">{lane.pricePerHour}€/hod</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm">{lane.capacity} osôb</span>
                      </div>
                    </div>
                    <Button className="w-full">Vybrať</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Date & Time Selection */}
        {step === 2 && selectedLane && (
          <div>
            <div className="mb-6">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                className="mb-4"
              >
                ← Späť na výber dráhy
              </Button>
              <h2 className="text-2xl font-semibold">Vyberte dátum a čas</h2>
              <p className="text-muted-foreground">Dráha: {selectedLane.name}</p>
            </div>

            {/* Date Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Dátum</h3>
              <div className="grid grid-cols-7 gap-2">
                {dates.map((date) => (
                  <button
                    key={date.toISOString()}
                    onClick={() => setSelectedDate(date)}
                    className={`p-3 text-center rounded-lg border transition-colors ${
                      selectedDate.toDateString() === date.toDateString()
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'hover:bg-muted border-border'
                    }`}
                  >
                    <div className="text-xs text-muted-foreground">
                      {format(date, 'EEE', { locale: sk })}
                    </div>
                    <div className="font-medium">
                      {format(date, 'd.M')}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div>
              <h3 className="text-lg font-medium mb-4">Dostupné časy</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => !slot.isBooked && handleTimeSlotSelect(slot)}
                    disabled={slot.isBooked}
                    className={`p-3 text-center rounded-lg border transition-colors ${
                      slot.isBooked
                        ? 'bg-muted text-muted-foreground cursor-not-allowed'
                        : selectedTimeSlot?.id === slot.id
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'hover:bg-muted border-border'
                    }`}
                  >
                    {slot.startTime}
                    {slot.isBooked && <div className="text-xs">Obsadené</div>}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Add-ons Selection */}
        {step === 3 && (
          <div>
            <div className="mb-6">
              <Button
                variant="outline"
                onClick={() => setStep(2)}
                className="mb-4"
              >
                ← Späť na výber času
              </Button>
              <h2 className="text-2xl font-semibold mb-2">Vyberte doplnky</h2>
              <p className="text-muted-foreground">
                {selectedLane?.name} • {format(selectedDate, 'dd.MM.yyyy', { locale: sk })} • {selectedTimeSlot?.startTime}
              </p>
            </div>

            <div className="space-y-6">
              {['weapon', 'protection', 'instruction'].map((category) => (
                <div key={category}>
                  <h3 className="text-lg font-medium mb-4 capitalize">
                    {category === 'weapon' && 'Zbrane'}
                    {category === 'protection' && 'Ochranné pomôcky'}
                    {category === 'instruction' && 'Kurzy a inštruktáž'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {addOns
                      .filter(addOn => addOn.category === category)
                      .map((addOn) => {
                        const isSelected = selectedAddOns.some(item => item.id === addOn.id)
                        return (
                          <Card
                            key={addOn.id}
                            className={`cursor-pointer transition-all ${
                              isSelected ? 'ring-2 ring-primary' : 'hover:shadow-md'
                            }`}
                            onClick={() => handleAddOnToggle(addOn.id)}
                          >
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-medium">{addOn.name}</h4>
                                <Badge variant={isSelected ? 'default' : 'outline'}>
                                  {addOn.price}€
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {addOn.description}
                              </p>
                            </CardContent>
                          </Card>
                        )
                      })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-between items-center">
              <div className="text-lg font-semibold">
                Celkom: {calculateTotal()}€
              </div>
              <Button onClick={() => setStep(4)}>
                Pokračovať
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Customer Details */}
        {step === 4 && (
          <div>
            <div className="mb-6">
              <Button
                variant="outline"
                onClick={() => setStep(3)}
                className="mb-4"
              >
                ← Späť na doplnky
              </Button>
              <h2 className="text-2xl font-semibold mb-2">Kontaktné údaje</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Vaše údaje</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Meno a priezvisko *</Label>
                        <Input
                          id="name"
                          value={customerData.name}
                          onChange={(e) => setCustomerData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Ján Novák"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="numberOfPeople">Počet osôb</Label>
                        <Input
                          id="numberOfPeople"
                          type="number"
                          min="1"
                          max={selectedLane?.capacity}
                          value={customerData.numberOfPeople}
                          onChange={(e) => setCustomerData(prev => ({ ...prev, numberOfPeople: parseInt(e.target.value) }))}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={customerData.email}
                        onChange={(e) => setCustomerData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="jan.novak@email.sk"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefón *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={customerData.phone}
                        onChange={(e) => setCustomerData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+421 XXX XXX XXX"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="notes">Poznámky (voliteľné)</Label>
                      <Input
                        id="notes"
                        value={customerData.notes}
                        onChange={(e) => setCustomerData(prev => ({ ...prev, notes: e.target.value }))}
                        placeholder="Špeciálne požiadavky alebo poznámky"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Súhrn rezervácie</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Target className="h-4 w-4 text-primary" />
                        <span className="text-sm">{selectedLane?.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm">
                          {format(selectedDate, 'dd.MM.yyyy', { locale: sk })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm">
                          {selectedTimeSlot?.startTime} - {selectedTimeSlot?.endTime}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm">{customerData.numberOfPeople} osôb</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Dráha</span>
                          <span>{selectedLane?.pricePerHour}€</span>
                        </div>
                        {selectedAddOns.map(selectedAddOn => {
                          const addOn = addOns.find(a => a.id === selectedAddOn.id)
                          return addOn ? (
                            <div key={addOn.id} className="flex justify-between text-sm">
                              <span>{addOn.name}</span>
                              <span>{addOn.price}€</span>
                            </div>
                          ) : null
                        })}
                        <div className="border-t pt-2 flex justify-between font-semibold">
                          <span>Celkom</span>
                          <span>{calculateTotal()}€</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      className="w-full"
                      onClick={handleSubmit}
                      disabled={!customerData.name || !customerData.email || !customerData.phone || loading}
                    >
                      {loading ? 'Spracováva sa...' : 'Potvrdiť rezerváciu'}
                    </Button>

                    <p className="text-xs text-muted-foreground">
                      Potvrdenie rezervácie vám bude odoslané na e-mail
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}