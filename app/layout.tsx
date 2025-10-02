import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Strelnica BB - Banská Bystrica | Rezervácia streleckých dráh',
  description: 'Moderná strelnica v Banskej Bystrici. Rezervujte si online čas na streleckých dráhach. Bezpečnosť, kvalita a profesionálny prístup.',
  keywords: 'strelnica, Banská Bystrica, rezervácia, strelecké dráhy, streľba, kurzy strelby',
  openGraph: {
    title: 'Strelnica BB - Banská Bystrica',
    description: 'Moderná strelnica v Banskej Bystrici s online rezerváciou',
    type: 'website',
    locale: 'sk_SK',
    siteName: 'Strelnica BB',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  )
}