import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wedding Wipes - Gepersonaliseerde Vochtige Doekjes met Logo | Premium Kwaliteit",
  description: "Luxe bedrukte vochtige doekjes met uw logo voor bruiloften, restaurants, hotels en evenementen. Minimale bestelling 200 stuks. Gratis verzending boven €500. Maak nu uw ontwerp!",
  keywords: "vochtige doekjes bedrukken, gepersonaliseerde vochtige doekjes, logo doekjes, wedding wipes, bruiloft doekjes, restaurant doekjes, hotel doekjes, bedrijf doekjes, custom wet wipes",
  authors: [{ name: "Wedding Wipes" }],
  creator: "Wedding Wipes",
  publisher: "Wedding Wipes",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://www.weddingwipes.nl',
    title: 'Wedding Wipes - Gepersonaliseerde Vochtige Doekjes met Logo',
    description: 'Luxe bedrukte vochtige doekjes met uw logo voor bruiloften, restaurants en evenementen. Minimale bestelling 200 stuks.',
    siteName: 'Wedding Wipes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Wipes - Gepersonaliseerde Vochtige Doekjes',
    description: 'Luxe bedrukte vochtige doekjes met uw logo. Minimale bestelling 200 stuks.',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <SmoothScroll />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
