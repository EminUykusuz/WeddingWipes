# 🎉 Wedding Wipes - Kişiselleştirilmiş Islak Mendiller

Next.js 16 ile oluşturulmuş premium kişiselleştirilmiş ıslak mendiller web sitesi. Düğünler, restoranlar, oteller ve etkinlikler için logonuzla lüks baskılı ıslak mendiller.

![Wedding Wipes](public/logo.jpg)

## ✨ Özellikler

- 🎨 **Tamamen Kişiselleştirilmiş** - Logonuzu yükleyin ve tasarlayın
- 🌐 **Tamamen Flemenkçe** - Komple Hollandaca/Flamanca yerelleştirme
- 📱 **WhatsApp Entegrasyonu** - WhatsApp üzerinden direkt iletişim
- 🎭 **Yumuşak Animasyonlar** - Framer Motion animasyonları
- 🔍 **SEO Optimize** - Robots.txt, Sitemap, Meta etiketleri
- 📊 **Responsive Tasarım** - Mobil ve masaüstü dostu
- 🎯 **Bölüm Navigasyonu** - Bölümlere yumuşak kaydırma
- 📄 **Yasal Sayfalar** - Gizlilik ve Şartlar sayfaları

## 🛠️ Teknolojiler

- **Framework:** Next.js 16.1.1 (React 19)
- **Stillendirme:** CSS Variables ile Inline CSS
- **Animasyonlar:** Framer Motion
- **TypeScript:** Tip güvenli geliştirme
- **Font:** Google Fonts (Geist Sans, Geist Mono)

## 📦 Kurulum

### Gereksinimler

- Node.js 18+ kurulu
- npm veya yarn paket yöneticisi

## Başlarken

İlk olarak, geliştirme sunucusunu çalıştırın:

```bash
npm run dev
# veya
yarn dev
# veya
pnpm dev
# veya
bun dev
```

Sonucu görmek için tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 🚀 Production Build

```bash
npm run build
npm run start
```

## 📁 Proje Yapısı

```
wedding-wypes/
├── public/
│   ├── logo.jpg                    # Şirket logosu
│   ├── robots.txt                  # SEO robots yapılandırması
│   └── whychooseus/               # Slayt gösterim görselleri
│       ├── wetwipes1.png
│       └── wetwipes2.png
├── src/
│   ├── app/
│   │   ├── layout.tsx             # SEO metadata ile root layout
│   │   ├── page.tsx               # Ana sayfa
│   │   ├── globals.css            # Global stiller + mobil yardımcılar
│   │   ├── sitemap.ts             # Dinamik sitemap oluşturucu
│   │   ├── privacy/               # Gizlilik politikası sayfası
│   │   │   └── page.tsx
│   │   └── voorwaarden/           # Şartlar ve koşullar
│   │       └── page.tsx
│   └── components/
│       ├── Navbar.tsx             # Hamburger menülü responsive navbar
│       ├── TopBar.tsx             # İletişim bilgi çubuğu
│       ├── Hero.tsx               # Hero bölümü
│       ├── ProductShowcase.tsx    # Ürün grid
│       ├── CustomizationSection.tsx # Özelleştirme bilgisi
│       ├── WhyChooseUs.tsx        # Avantajlar + slayt gösterimi
│       ├── SolutionsSection.tsx   # Çözümler grid
│       ├── UsageFeatures.tsx      # Kullanım sekmeleri
│       ├── FeaturesGrid.tsx       # Özellik kartları
│       ├── FAQSection.tsx         # Akordeon SSS
│       ├── Footer.tsx             # SVG ikonlu footer
│       ├── WhatsAppButton.tsx     # Sabit WhatsApp butonu
│       └── SmoothScroll.tsx       # Lenis scroll wrapper
├── next.config.ts                 # Next.js yapılandırması
├── tailwind.config.ts            # Tailwind yapılandırması
└── tsconfig.json                 # TypeScript yapılandırması
```

## 🎨 Renk Şeması

```css
:root {
  --color-gold: #cdac00      /* Ana altın renk */
  --color-purple: #2e2a5b    /* Koyu mor */
  --color-green: #a3c44c     /* Açık yeşil */
  --color-gray: #808080      /* Footer arka plan */
}
```

## 📞 İletişim Yapılandırması

WhatsApp numarası: `+31 6 27141526`
Email: `info@weddingwipes.nl`

### WhatsApp Linklerini Düzenleme

Tüm bileşenlerde arayın ve değiştirin:
```tsx
href="https://wa.me/31627141526?text=Hallo%20Wedding%20Wipes%20ik%20wil%20graag%20meer%20informatie"
```

## 🔧 Yapılandırma

### SEO & Metadata

`src/app/layout.tsx` dosyasını düzenleyin:
- Site başlığı
- Meta açıklaması
- Anahtar kelimeler
- Open Graph etiketleri
- Google doğrulama kodu

### Sitemap

`src/app/sitemap.ts` dosyasını düzenleyin:
- Base URL'yi ayarlayın
- Yeni sayfalar ekleyin
- Güncelleme sıklığını değiştirin

### Domain Ayarı

Aşağıdaki dosyalarda güncelleyin:
- `src/app/sitemap.ts` - baseUrl
- `public/robots.txt` - Sitemap URL

## 🎯 Özellikler Açıklaması

### Slayt Gösterimi (WhyChooseUs)
- Her 5 saniyede otomatik değişim
- Görseller arası fade animasyonları
- Beyaz flaşı önlemek için çift görsel overlay

### Akordeon SSS
- Yumuşak animasyonlar için AnimatePresence
- Height ve opacity geçişleri
- Açma/kapatmada ikon döndürme

### Yumuşak Kaydırma
- Lenis smooth scroll kütüphanesi
- Navbar linkleri section ID'lerine bağlı
- Yumuşak kullanıcı deneyimi

### WhatsApp Entegrasyonu
- Sağ altta sabit buton
- Site genelinde direkt iletişim butonları
- Önceden doldurulmuş mesaj

## 📝 Değişiklik Yapma

### Yeni Bölüm Ekleme

1. `src/components/` içinde bileşen oluşturun
2. `src/app/page.tsx` dosyasına ekleyin
3. Navigasyon için ID ekleyin
4. Navbar linklerini güncelleyin

### Renkleri Değiştirme

`src/app/globals.css` dosyasını düzenleyin:
```css
:root {
  --color-gold: #sizinrenginiz;
}
```

### Logo Değiştirme

`public/logo.jpg` dosyasını logonuzla değiştirin

## 🐛 Sorun Giderme

### Port 3000 zaten kullanımda mı?
```bash
# Başka bir port kullanın
npm run dev -- -p 3001
```

### Build hataları?
```bash
# Cache'i temizle ve yeniden derle
rm -rf .next
npm run build
```

## 📄 Lisans

© 2026 Wedding Wipes | Tüm Hakları Saklıdır

## 👨‍💻 Geliştirici

[Emin Uykusuz](https://github.com/EminUykusuz) tarafından geliştirildi

## 🤝 Katkıda Bulunma

Pull request'ler kabul edilir. Büyük değişiklikler için, lütfen önce neyi değiştirmek istediğinizi tartışmak için bir issue açın.

## 📞 Destek

Sorularınız veya destek için:
- 📧 Email: info@weddingwipes.nl
- 📱 WhatsApp: +31 6 27141526
- 🐙 GitHub Issues: [Issue oluştur](https://github.com/EminUykusuz/WeddingWipes/issues)

---

⭐ Bu proje faydalıysa, GitHub'da yıldız verin!

Bu proje, [Geist](https://vercel.com/font) adlı yeni Vercel font ailesini otomatik olarak optimize etmek ve yüklemek için [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) kullanır.

## Daha Fazla Bilgi

Next.js hakkında daha fazla bilgi edinmek için aşağıdaki kaynaklara göz atın:

- [Next.js Dokümantasyonu](https://nextjs.org/docs) - Next.js özellikleri ve API hakkında bilgi edinin.
- [Next.js Öğren](https://nextjs.org/learn) - interaktif Next.js eğitimi.

[Next.js GitHub deposuna](https://github.com/vercel/next.js) göz atabilirsiniz - geri bildirimleriniz ve katkılarınız memnuniyetle karşılanır!

## Vercel'de Deploy

Next.js uygulamanızı deploy etmenin en kolay yolu, Next.js'in yaratıcılarından [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)'u kullanmaktır.

Daha fazla bilgi için [Next.js deployment dokümantasyonuna](https://nextjs.org/docs/app/building-your-application/deploying) göz atın.
