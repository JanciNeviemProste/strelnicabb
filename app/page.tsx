import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Target, Shield, Users, Clock, Star, CheckCircle } from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: Target,
      title: 'Moderné dráhy',
      description: 'Najnovšie technológie a vybavenie pre maximálnu presnosť',
    },
    {
      icon: Shield,
      title: 'Bezpečnosť prvkom',
      description: 'Prísne bezpečnostné protokoly a profesionálny dozor',
    },
    {
      icon: Users,
      title: 'Pre všetkých',
      description: 'Od začiatočníkov po pokročilých strelcov',
    },
    {
      icon: Clock,
      title: 'Flexibilné hodiny',
      description: 'Otvorené 7 dní v týždni s dlhými otváracími hodinami',
    },
  ]

  const lanes = [
    {
      name: 'Dráha 1 - Krátka vzdialenosť',
      description: 'Ideálna pre začiatočníkov, 10m dráha s pístoľami',
      price: 'od 25€/hod',
      capacity: '2 osoby',
    },
    {
      name: 'Dráha 2 - Stredná vzdialenosť',
      description: '25m dráha pre pokročilých strelcov',
      price: 'od 30€/hod',
      capacity: '1 osoba',
    },
    {
      name: 'VIP Dráha',
      description: 'Súkromná dráha s inštruktárom a kompletnou výbavou',
      price: 'od 60€/hod',
      capacity: '4 osoby',
    },
  ]

  const testimonials = [
    {
      name: 'Ján Novák',
      text: 'Perfektná strelnica, profesionálny prístup a vynikajúce vybavenie.',
      rating: 5,
    },
    {
      name: 'Mária Svobodová',
      text: 'Ako začiatočníčka som sa tu cítila bezpečne. Skvelé kurzy.',
      rating: 5,
    },
    {
      name: 'Peter Kováč',
      text: 'Rezervácia online je super, všetko funguje bez problémov.',
      rating: 5,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Moderná strelnica v Banskej Bystrici
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Presnosť začína tu
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Profesionálna strelnica s najmodernejším vybavením. Online rezervácia,
              kvalitné kurzy a bezpečné prostredie pre všetkých nadšencov streľby.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/rezervacia">Rezervovať dráhu</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/drahy">Pozrieť dráhy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Prečo si vybrať Strelnicu BB?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kombinácia modernej technológie, bezpečnosti a profesionálneho prístupu
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lanes Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Naše dráhy</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rôzne typy dráh pre každú úroveň strelca
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lanes.map((lane, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{lane.name}</CardTitle>
                  <CardDescription>{lane.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold text-primary text-lg">{lane.price}</span>
                    <span className="text-sm text-muted-foreground">{lane.capacity}</span>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/rezervacia">Rezervovať</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/cennik">Pozrieť celý cenník</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Bezpečnosť a kvalita na prvom mieste
              </h2>
              <ul className="space-y-4">
                {[
                  'Certifikovaní inštruktori s dlhoročnými skúsenosťami',
                  'Moderné bezpečnostné systémy a protokoly',
                  'Pravidelné údržby a kontroly vybavenia',
                  'Komplexné kurzy pre začiatočníkov',
                  'Individuálny prístup ku každému klientovi',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/pravidla">Pravidlá bezpečnosti</Link>
                </Button>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="inline-block bg-muted/50 p-8 rounded-lg">
                <Target className="h-24 w-24 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">15+ rokov skúseností</h3>
                <p className="text-muted-foreground">
                  Tisíce spokojných klientov a úspešne absolvovaných kurzov
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Čo hovoria naši klienti
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Pripravení na prvú streľbu?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rezervujte si dráhu online a začnite svoju cestu k presnosti
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/rezervacia">Rezervovať teraz</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/kontakt">Kontaktovať nás</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}