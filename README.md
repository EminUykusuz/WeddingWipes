# 🎉 Wedding Wipes - Gepersonaliseerde Vochtige Doekjes

Premium gepersonaliseerde vochtige doekjes website gebouwd met Next.js 16. Luxe bedrukte vochtige doekjes met uw logo voor bruiloften, restaurants, hotels en evenementen.

![Wedding Wipes](public/logo.jpg)

## ✨ Kenmerken

- 🎨 **Volledig Gepersonaliseerd** - Upload uw logo en ontwerp
- 🌐 **Volledig Nederlandstalig** - Complete Dutch/Flemish localisatie
- 📱 **WhatsApp Integratie** - Direct contact via WhatsApp
- 🎭 **Smooth Animaties** - Framer Motion animaties
- 🔍 **SEO Geoptimaliseerd** - Robots.txt, Sitemap, Meta tags
- 📊 **Responsive Design** - Mobiel en desktop vriendelijk
- 🎯 **Section Navigation** - Smooth scroll naar secties
- 📄 **Legal Pages** - Privacy en Voorwaarden pagina's

## 🛠️ Technologieën

- **Framework:** Next.js 16.1.1 (React 19)
- **Styling:** Inline CSS met CSS Variables
- **Animaties:** Framer Motion
- **TypeScript:** Type-safe development
- **Font:** Google Fonts (Geist Sans, Geist Mono)

## 📦 Installatie

### Vereisten

- Node.js 18+ geïnstalleerd
- npm of yarn package manager

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚀 Production Build

```bash
# Build voor productie
npm run build

# Start productie server
npm start
```

## 📁 Project Structuur

```
wedding-wypes/
├── public/
│   ├── logo.jpg
│   ├── robots.txt
│   └── images/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout met SEO
│   │   ├── page.tsx            # Homepage
│   │   ├── sitemap.ts          # Dynamic sitemap
│   │   ├── privacy/
│   │   │   └── page.tsx        # Privacy pagina
│   │   └── voorwaarden/
│   │       └── page.tsx        # Voorwaarden pagina
│   └── components/
│       ├── TopBar.tsx          # Top bar met aanbieding
│       ├── Navbar.tsx          # Navigation met smooth scroll
│       ├── Hero.tsx            # Hero sectie
│       ├── ProductShowcase.tsx # Product weergave
│       ├── SolutionsSection.tsx# Oplossingen
│       ├── UsageFeatures.tsx   # Gebruiksdoeleinden
│       ├── FeaturesGrid.tsx    # Features grid
│       ├── WhyChooseUs.tsx     # Waarom ons (slideshow)
│       ├── CustomizationSection.tsx
│       ├── FAQSection.tsx      # Accordion FAQ
│       ├── Footer.tsx          # Footer met links
│       └── WhatsAppButton.tsx  # Floating WhatsApp knop
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 🎨 Kleuren Schema

```css
--color-gold: #cdac00      /* Primary gold */
--color-purple: #2e2a5b    /* Secondary purple */
--color-green: #a3c44c     /* Accent green */
--color-gray: #808080      /* Footer background */
```

## 📞 Contact Configuratie

WhatsApp nummer: `+31 6 27141526`
Email: `info@weddingwipes.nl`

### WhatsApp Links Aanpassen

Zoek en vervang in alle componenten:
```tsx
href="https://wa.me/31627141526?text=Hallo%20Wedding%20Wipes%20ik%20wil%20graag%20meer%20informatie"
```

## 🔧 Configuratie

### SEO & Metadata

Edit `src/app/layout.tsx` voor:
- Site title
- Meta beschrijving
- Keywords
- Open Graph tags
- Google verificatie code

### Sitemap

Edit `src/app/sitemap.ts` voor:
- Base URL aanpassen
- Nieuwe pagina's toevoegen
- Update frequentie wijzigen

### Domain Instelling

Update in de volgende bestanden:
- `src/app/sitemap.ts` - baseUrl
- `public/robots.txt` - Sitemap URL

## 🎯 Features Uitleg

### Slideshow (WhyChooseUs)
- Auto-change elke 5 seconden
- Fade animaties tussen afbeeldingen
- Dual image overlay om white flash te voorkomen

### Accordion FAQ
- AnimatePresence voor smooth animations
- Height en opacity transitions
- Icon rotatie bij open/close

### Smooth Scroll
- Lenis smooth scroll library
- Navbar links naar section IDs
- Smooth user experience

### WhatsApp Integratie
- Floating button rechtsonder
- Direct contact buttons door heel de site
- Pre-filled message

## 📝 Aanpassingen Maken

### Nieuwe Section Toevoegen

1. Maak component in `src/components/`
2. Voeg toe aan `src/app/page.tsx`
3. Voeg ID toe voor navigation
4. Update Navbar links

### Kleuren Aanpassen

Edit `src/app/globals.css`:
```css
:root {
  --color-gold: #jouwkleur;
}
```

### Logo Vervangen

Replace `public/logo.jpg` met uw logo

## 🐛 Troubleshooting

### Port 3000 al in gebruik?
```bash
# Gebruik andere port
npm run dev -- -p 3001
```

### Build errors?
```bash
# Clear cache en rebuild
rm -rf .next
npm run build
```

## 📄 Licentie

© 2026 Wedding Wipes | Alle Rechten Voorbehouden

## 👨‍💻 Developer

Ontwikkeld door [Emin Uykusuz](https://github.com/EminUykusuz)

## 🤝 Contributing

Pull requests zijn welkom. Voor grote wijzigingen, open eerst een issue om te bespreken wat u wilt wijzigen.

## 📞 Support

Voor vragen of ondersteuning:
- 📧 Email: info@weddingwipes.nl
- 📱 WhatsApp: +31 6 27141526
- 🐙 GitHub Issues: [Create an issue](https://github.com/EminUykusuz/WeddingWipes/issues)

---

⭐ Als dit project nuttig is, geef het een ster op GitHub!

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
