import type { Metadata } from "next"
import { PixelArtConverter } from "@/components/pixel-art-converter"

export const metadata: Metadata = {
  title: "Image to Pixel Art Converter - Free Online Tool",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: "Image to Pixel Art Converter - Free Online Tool",
    description: "Convert images to pixel art instantly in your browser. 100% private with adjustable pixel size, instant preview, and downloads at small or original dimensions.",
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
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <PixelArtConverter />
    </main>
  )
}
