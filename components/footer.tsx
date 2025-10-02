import Link from 'next/link'
import { Target, Phone, Mail, MapPin, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Target className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Strelnica BB</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Moderná strelnica v srdci Banskej Bystrice. Bezpečnosť a kvalita na prvom mieste.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigácia</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/drahy" className="hover:text-primary transition-colors">Dráhy & Služby</Link></li>
              <li><Link href="/cennik" className="hover:text-primary transition-colors">Cenník</Link></li>
              <li><Link href="/pravidla" className="hover:text-primary transition-colors">Pravidlá</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Služby</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/firemne-akcie" className="hover:text-primary transition-colors">Firemné akcie</Link></li>
              <li><Link href="/darcekove-poukazy" className="hover:text-primary transition-colors">Darčekové poukazy</Link></li>
              <li><Link href="/rezervacia" className="hover:text-primary transition-colors">Online rezervácia</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Banská Bystrica, Slovensko</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+421 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@strelnicabb.sk</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Po-Ne: 9:00-21:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Strelnica BB. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  )
}