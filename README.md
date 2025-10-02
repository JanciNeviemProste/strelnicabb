# Strelnica BB - Moderný rezervačný systém

Moderný webový systém pre rezervácie streleckých dráh Strelnice BB v Banskej Bystrici.

## 🚀 Technológie

- **Framework**: Next.js 14 (App Router)
- **Databáza**: Prisma (SQLite dev / PostgreSQL prod)
- **Styling**: Tailwind CSS + shadcn/ui
- **E-mail**: Resend API
- **Deployment**: Vercel
- **Rate Limiting**: Upstash Redis

## 📋 Funkcie

- ✅ Online rezervácie s konfliktnou kontrolou
- ✅ Responzívny design pre všetky zariadenia
- ✅ E-mail notifikácie s ICS kalendárom
- ✅ Admin panel pre správu rezervácií
- ✅ SEO optimalizácia a structured data
- ✅ GDPR compliance a bezpečnostné hlavičky
- ✅ WCAG 2.2 AA prístupnosť

## 🏃‍♂️ Lokálny vývoj

### Požiadavky
- Node.js 18+
- npm alebo yarn

### Inštalácia

1. **Klonuj repozitár**
```bash
git clone <repository-url>
cd strelnicabb
```

2. **Nainštaluj dependencies**
```bash
npm install
```

3. **Nastav environment variables**
```bash
cp .env.example .env
```

Edituj `.env` súbor:
```env
# Databáza (development)
DATABASE_URL="file:./dev.db"

# E-mail (voliteľné)
RESEND_API_KEY="your_resend_api_key"

# Rate limiting (voliteľné)
UPSTASH_REDIS_URL=""
UPSTASH_REDIS_TOKEN=""
```

4. **Nastav databázu (development)**
```bash
# Pre lokálny vývoj (SQLite)
npm run db:dev

# Naplň databázu seed dátami
npm run db:seed
```

5. **Spusti development server**
```bash
npm run dev
```

Aplikácia bude dostupná na `http://localhost:3000`

### Database Management

```bash
# Prisma Studio (GUI pre databázu)
npx prisma studio

# Reset databázy
npx prisma migrate reset

# Deploy migrácie (production)
npx prisma migrate deploy
```

## 🚀 Vercel Deployment

### Príprava

1. **Push kód do Git repozitára**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Vytvor projekt na Vercel**
- Choď na [vercel.com](https://vercel.com)
- "Import Project" → vyber svoj Git repozitár
- Vercel automaticky detekuje Next.js projekt

### Environment Variables na Vercel

V Vercel Dashboard → Settings → Environment Variables pridaj:

```env
# Production databáza
PRISMA_PROVIDER=postgresql
DATABASE_URL=postgresql://user:password@host:port/database

# E-mail
RESEND_API_KEY=your_resend_api_key

# Rate limiting (voliteľné)
UPSTASH_REDIS_URL=your_upstash_url
UPSTASH_REDIS_TOKEN=your_upstash_token
```

### Databáza (Production)

**Odporúčané možnosti:**
- [Vercel Postgres](https://vercel.com/storage/postgres) - integrované
- [Neon](https://neon.tech) - free tier dostupný
- [Supabase](https://supabase.com) - open source alternative

**Setup pre Vercel Postgres:**
1. Vercel Dashboard → Storage → Create Database → Postgres
2. Skopíruj `DATABASE_URL` do environment variables
3. Nastav `PRISMA_PROVIDER=postgresql`

### Deploy Process

1. **Push zmeny**
```bash
git push origin main
```

2. **Vercel automaticky:**
- Buildne projekt (`npm run build`)
- Spustí `npx prisma generate` (cez `postinstall`)
- Deploynutie

3. **Po prvom deployi spusti migrácie:**
```bash
# V Vercel CLI alebo cez Functions
npx prisma migrate deploy
npx prisma db seed
```

### Custom Domain

1. Vercel Dashboard → Domains
2. Pridaj `strelnicabb.sk`
3. Nastav DNS záznamy u domain providera:
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```

## 🔧 Konfigurácia

### E-mail notifikácie

1. Zaregistruj sa na [Resend](https://resend.com)
2. Vytvor API kľúč
3. Pridaj do environment variables: `RESEND_API_KEY`
4. Nastav dománu pre sending (produkcia)

### Rate Limiting

1. Zaregistruj sa na [Upstash](https://upstash.com)
2. Vytvor Redis databázu (free tier)
3. Pridaj credentials do env variables

## 📊 Monitoring & Testing

### Health Check
```bash
curl https://strelnicabb.sk/api/health
```

### Test rezervácie
```bash
curl -X POST https://strelnicabb.sk/api/book \
  -H "Content-Type: application/json" \
  -d '{
    "laneId": "lane_id",
    "timeSlotId": "slot_id",
    "customerName": "Test User",
    "customerEmail": "test@example.com",
    "customerPhone": "+421123456789",
    "numberOfPeople": 1
  }'
```

### Lighthouse Testing
```bash
npm install -g lighthouse
lighthouse https://strelnicabb.sk --view
```

## 🎯 SEO & Performance

- **Core Web Vitals**: Optimalizované pre LCP ≤ 2.5s, CLS ≤ 0.1
- **Sitemap**: Automaticky generovaný na `/sitemap.xml`
- **Robots.txt**: Konfigurácia pre search engines
- **Structured Data**: LocalBusiness + SportsActivityLocation

## 🔒 Bezpečnosť

- CSP (Content Security Policy)
- HSTS (HTTP Strict Transport Security)
- XSS Protection
- CSRF Protection cez Next.js
- Rate limiting na API endpoints
- Input sanitization a validation

## 🌐 Prístupnosť (WCAG 2.2 AA)

- Sémantické HTML štruktúry
- Keyboard navigation support
- Aria labels a opisky
- Vysoký kontrast (4.5:1)
- Focus indicators
- Screen reader friendly

## 📝 GDPR Compliance

- Minimalizácia zberu dát
- Transparentné privacy policy
- Cookie consent (len nevyhnutné cookies by default)
- Právo na výmaz a prístup k dátam

## 🛠 Rozšírenia

### Admin Panel
```bash
# Pridaj admin stránky do /app/admin/
/admin/dashboard
/admin/bookings
/admin/lanes
/admin/settings
```

### Platby
- Stripe integration
- PayPal integration
- Slovenské platobné brány

### Notifikácie
- SMS notifikácie (Twilio)
- Push notifikácie
- Slack/Discord integrácia

## 📞 Support

Pre otázky a podporu:
- **E-mail**: info@strelnicabb.sk
- **Issues**: GitHub Issues v repozitári

## 📄 Licencia

Proprietárny software pre Strelnicu BB.