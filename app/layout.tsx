import type React from "react"
import type { Metadata } from "next"
import { Silkscreen, VT323 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import content from "@/content/homepage.en.json"
import "./globals.css"

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pixel",
})

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  generator: "v0.app",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Image to Pixel Art Converter',
    title: content.meta.title,
    description: content.meta.description,
    locale: 'en_US',
    url: '/',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Image to Pixel Art Converter - Transform photos into retro pixel art',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: content.meta.title,
    description: content.meta.description,
    images: ['/og.png'],
    creator: '@pixelartconverter',
    site: '@pixelartconverter',
  },
  verification: {
    google: 'G-8C4191WWWN',
  },
  other: {
    'twitter:image:alt': 'Image to Pixel Art Converter - Transform photos into retro pixel art',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8C4191WWWN"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8C4191WWWN');
            `,
          }}
        />
        
        {/* Plausible Analytics */}
        <script
          defer
          data-domain="imagetopixelart.co"
          src="https://myplausible.app/js/script.js"
        ></script>
      </head>
      <body className={`font-pixel ${silkscreen.variable} ${vt323.variable} bg-background text-foreground`}>
        <Header />
        <main className="min-h-screen">
          <Suspense fallback={null}>{children}</Suspense>
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
