import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, Target, Shield, Users, Clock } from 'lucide-react'
import Link from 'next/link'
import { formatPrice } from '@/lib/utils'

export const metadata = {
  title: 'Cenník - Strelnica BB | Ceny streleckých dráh a služieb',
  description: 'Aktuálny cenník Strelnice BB v Banskej Bystrici. Ceny dráh, zbraní, kurzov a ďalších služieb. Transparentné a férové ceny.',
}

export default function PricingPage() {
  const lanes = [
    {
      name: 'Dráha 1 - Krátka vzdialenosť',
      description: 'Ideálna pre začiatočníkov',
      distance: '10m',
      capacity: 2,
      pricePerHour: 25,
      features: [
        'Vhodná pre pistole',
        'Až 2 osoby súčasne',
        'Základné vybavenie',
        'Ideálna pre začiatočníkov'
      ]
    },
    {
      name: 'Dráha 2 - Stredná vzdialenosť',
      description: 'Pre pokročilých strelcov',
      distance: '25m',
      capacity: 1,
      pricePerHour: 30,
      features: [
        'Presnostná streľba',
        '1 osoba',
        'Pokročilé cielenie',
        'Pre skúsených strelcov'
      ]
    },
    {
      name: 'Dráha 3 - Dlhá vzdialenosť',
      description: 'Profesionálna dráha',
      distance: '50m',
      capacity: 1,
      pricePerHour: 35,
      features: [
        'Vhodná pre pušky',
        'Maximálna presnosť',
        'Profesionálne vybavenie',
        'Pre expertov'
      ]
    },
    {
      name: 'VIP Dráha',
      description: 'Exkluzívna dráha s inštruktorom',
      distance: 'Variabilná',
      capacity: 4,
      pricePerHour: 60,
      features: [
        'Súkromná dráha',
        'Až 4 osoby',
        'Osobný inštruktor',
        'Kompletná výbava',
        'Individuálny prístup'
      ],
      popular: true
    }
  ]

  const weapons = [
    { name: 'Glock 17 (9mm)', price: 15, description: 'Spolehlivá služobná pištoľ' },
    { name: 'CZ 75 (9mm)', price: 18, description: 'Legendárna česká pištoľ' },
    { name: 'Sig Sauer P226', price: 20, description: 'Profesionálna pištoľ' },
    { name: 'AR-15 (.223)', price: 25, description: 'Poloautomatická puška' },
    { name: 'AK-47 (7.62mm)', price: 28, description: 'Klasická útočná puška' },
    { name: 'Sniper puška (.308)', price: 35, description: 'Pre dlhé vzdialenosti' }
  ]

  const protection = [
    { name: 'Ochranné okuliare', price: 3, description: 'Ochrana zraku' },
    { name: 'Chrániče sluchu', price: 3, description: 'Ochrana sluchu' },
    { name: 'Kompletná ochrana', price: 5, description: 'Okuliare + chrániče' }
  ]

  const courses = [
    { name: 'Základný kurz strelby', price: 20, duration: '30 min', description: 'Pre úplných začiatočníkov' },
    { name: 'Pokročilý kurz presnosti', price: 40, duration: '60 min', description: 'Zlepšenie techniky' },
    { name: 'Taktický kurz', price: 60, duration: '90 min', description: 'Pokročilé techniky' },
    { name: 'Súkromná lekcia', price: 80, duration: '60 min', description: 'Individuálny prístup' }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Cenník služieb</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparentné a férové ceny pre všetky naše služby. Bez skrytých poplatkov.
          </p>
        </div>

        {/* Strelecké dráhy */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Strelecké dráhy</h2>
            <p className="text-muted-foreground">Ceny za hodinu prenájmu dráhy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lanes.map((lane, index) => (
              <Card key={index} className={`relative ${lane.popular ? 'ring-2 ring-primary' : ''}`}>
                {lane.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    Najpopulárnejšia
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{lane.name}</CardTitle>
                  <CardDescription>{lane.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary">
                    {formatPrice(lane.pricePerHour)}<span className="text-sm font-normal">/hod</span>
                  </div>
                  <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Target className="h-4 w-4 mr-1" />
                      {lane.distance}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {lane.capacity} osôb
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {lane.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/rezervacia">Rezervovať</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Zbrane */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Zbrane</h2>
            <p className="text-muted-foreground">Doplnkové poplatky za prenájom zbraní</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weapons.map((weapon, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{weapon.name}</h3>
                    <Badge variant="outline">{formatPrice(weapon.price)}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{weapon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Ochranné pomôcky */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ochranné pomôcky</h2>
            <p className="text-muted-foreground">Povinné ochranné vybavenie</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {protection.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <div className="text-2xl font-bold text-primary">{formatPrice(item.price)}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Kurzy a inštruktáž */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Kurzy a inštruktáž</h2>
            <p className="text-muted-foreground">Profesionálne kurzy strelby</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{course.name}</h3>
                      <p className="text-sm text-muted-foreground">{course.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{formatPrice(course.price)}</div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Dôležité informácie */}
        <section className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Dôležité informácie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Všeobecné podmienky</h3>
              <ul className="space-y-2 text-sm">
                <li>• Minimálny čas rezervácie: 1 hodina</li>
                <li>• Rezervácia je záväzná po potvrdení</li>
                <li>• Platba možná v hotovosti alebo kartou</li>
                <li>• Ochranné pomôcky sú povinné</li>
                <li>• Vlastné zbrane len po konzultácii</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Zrušenie rezervácie</h3>
              <ul className="space-y-2 text-sm">
                <li>• Bezplatné zrušenie do 24 hodín</li>
                <li>• Zrušenie do 2 hodín: 50% poplatku</li>
                <li>• Neskorší príchod: plná cena</li>
                <li>• Zmena termínu bez poplatku</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link href="/rezervacia">Rezervovať teraz</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}