"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">PixelArt Converter</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#how-to-use" className="text-sm font-medium hover:text-primary transition-colors">
            How to Use
          </Link>
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </Link>
        </nav>
        
        <Button size="sm" onClick={() => {
          const converterElement = document.querySelector('.grid.lg\\:grid-cols-2');
          converterElement?.scrollIntoView({ behavior: 'smooth' });
        }}>
          Convert Image
        </Button>
      </div>
    </header>
  )
}