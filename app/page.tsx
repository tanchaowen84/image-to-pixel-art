import type { Metadata } from "next"
import { PixelArtConverter } from "@/components/pixel-art-converter"

export const metadata: Metadata = {
  title: "Image to Pixel Art Converter - Free Online Tool",
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <PixelArtConverter />
    </main>
  )
}
