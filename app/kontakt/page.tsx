import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MapPin, Phone, Mail, Clock, Car, Bus } from 'lucide-react'

export const metadata = {
  title: 'Kontakt - Strelnica BB | Banská Bystrica',
  description: 'Kontaktné údaje Strelnice BB v Banskej Bystrici. Adresa, telefón, e-mail, otváracie hodiny a mapa.',
}

export default function ContactPage() {
  const businessHours = [
    { day: 'Pondelok', hours: '9:00 - 21:00' },
    { day: 'Utorok', hours: '9:00 - 21:00' },
    { day: 'Streda', hours: '9:00 - 21:00' },
    { day: 'Štvrtok', hours: '9:00 - 21:00' },
    { day: 'Piatok', hours: '9:00 - 22:00' },
    { day: 'Sobota', hours: '10:00 - 22:00' },
    { day: 'Nedeľa', hours: '10:00 - 20:00' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
          <p className="text-xl text-muted-foreground">
            Nájdite nás v srdci Banskej Bystrice. Sme tu pre vás každý deň.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Kontaktné informácie */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Kontaktné údaje</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Adresa</h3>
                  <p className="text-muted-foreground">
                    Strelnica BB<br />
                    Placeholder ulica 123<br />
                    974 05 Banská Bystrica<br />
                    Slovensko
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    Telefón
                  </h3>
                  <p className="text-muted-foreground">+421 XXX XXX XXX</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    E-mail
                  </h3>
                  <p className="text-muted-foreground">info@strelnicabb.sk</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    Otváracie hodiny
                  </h3>
                  <div className="space-y-1">
                    {businessHours.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{item.day}</span>
                        <span className="font-medium">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Kontaktný formulár */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Napíšte nám</CardTitle>
                <CardDescription>
                  Máte otázky? Radi vám odpovieme do 24 hodín.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Meno a priezvisko *</Label>
                      <Input id="name" placeholder="Ján Novák" required />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input id="email" type="email" placeholder="jan.novak@email.sk" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefón</Label>
                    <Input id="phone" type="tel" placeholder="+421 XXX XXX XXX" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Predmet *</Label>
                    <Input id="subject" placeholder="O čom nám chcete napísať?" required />
                  </div>
                  <div>
                    <Label htmlFor="message">Správa *</Label>
                    <textarea
                      id="message"
                      className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Vaša správa..."
                      required
                    />
                  </div>
                  <Button type="submit" size="lg">
                    Odoslať správu
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mapa a doprava */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mapa placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>Ako sa k nám dostanete</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Mapa sa načítava...</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Placeholder ulica 123, Banská Bystrica
                  </p>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Otvoriť v Google Maps
              </Button>
            </CardContent>
          </Card>

          {/* Doprava */}
          <Card>
            <CardHeader>
              <CardTitle>Doprava a parkovanie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <Car className="h-4 w-4 mr-2 text-primary" />
                  Autom
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Bezplatné parkovanie pred budovou</li>
                  <li>• 15 minút pešo z centra BB</li>
                  <li>• Výjazd z dálnice A1 - 5 km</li>
                  <li>• GPS: 48.7370° N, 19.1410° E</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <Bus className="h-4 w-4 mr-2 text-primary" />
                  Verejnou dopravou
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Autobusová zastávka "Centrum" - 200m</li>
                  <li>• Linky: 12, 15, 23, 45</li>
                  <li>• Hlavná železničná stanica - 1,5 km</li>
                  <li>• Taxi služby dostupné 24/7</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Dôležité upozornenie</h4>
                <p className="text-sm text-muted-foreground">
                  Pri návšteve si prosím prineste platný doklad totožnosti.
                  Vstup do strelnice je povolený len osobám starším ako 18 rokov.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "SportsActivityLocation"],
              "name": "Strelnica BB",
              "description": "Moderná strelnica v Banskej Bystrici s profesionálnym vybavením a bezpečným prostredím.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Placeholder ulica 123",
                "addressLocality": "Banská Bystrica",
                "postalCode": "974 05",
                "addressCountry": "SK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.7370,
                "longitude": 19.1410
              },
              "telephone": "+421XXXXXXXXX",
              "email": "info@strelnicabb.sk",
              "openingHours": [
                "Mo-Th 09:00-21:00",
                "Fr 09:00-22:00",
                "Sa 10:00-22:00",
                "Su 10:00-20:00"
              ],
              "priceRange": "€€",
              "paymentAccepted": "Cash, Credit Card",
              "currenciesAccepted": "EUR"
            })
          }}
        />
      </div>
    </div>
  )
}