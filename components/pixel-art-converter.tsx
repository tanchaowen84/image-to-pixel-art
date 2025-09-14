"use client"

import type React from "react"

import { useState, useRef, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { 
  Upload, Download, Sparkles, ChevronRight, Eye, Palette, Monitor, 
  Shield, Zap, Users, Lightbulb, Gamepad2, Image as ImageIcon, FileImage as FileImageIcon,
  CheckCircle, ArrowRight, Circle, Square, Triangle, Brush, X, Check
} from "lucide-react"
import content from "@/content/homepage.en.json"
import { renderPixelArt, downloadCanvas } from "@/lib/pixel-art"

interface PixelArtSettings {
  pixelSize: number
}

export function PixelArtConverter() {
  const [originalImage, setOriginalImage] = useState<HTMLImageElement | null>(null)
  const [pixelatedImage, setPixelatedImage] = useState<string | null>(null)
  const [settings, setSettings] = useState<PixelArtSettings>({
    pixelSize: 3,
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const smallCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const largeCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const sizeDebounceRef = useRef<number | null>(null)

  // Steps data for "How to Use" section
  const howToSteps = [
    {
      icon: Upload,
      title: "Upload an image or start with the sample",
      description: "The image to pixel art preview appears immediately"
    },
    {
      icon: Sparkles,
      title: "Automatic pixel art styling",
      description: "We auto-pick grid size, quantize to 16 colors, and add tasteful dithering"
    },
    {
      icon: Download,
      title: "Download your favorite version",
      description: "Choose Large (Grid‑scaled) or Small (Pixel Grid)"
    }
  ]

  const pixelateImage = useCallback(async (img: HTMLImageElement, pixelSizeOverride?: number) => {
    const result = await renderPixelArt(img, pixelSizeOverride ? { pixelSize: pixelSizeOverride } : undefined)
    // store canvases for downloads
    smallCanvasRef.current = result.small
    largeCanvasRef.current = result.large
    setSettings((prev) =>
      prev.pixelSize === result.pixelSize ? prev : { pixelSize: result.pixelSize },
    )
    return result.large.toDataURL()
  }, [])

  const processImage = useCallback(async () => {
    if (!originalImage) return
    setIsProcessing(true)
    const resultUrl = await pixelateImage(originalImage, settings.pixelSize)
    setPixelatedImage(resultUrl)
    setIsProcessing(false)
  }, [originalImage, pixelateImage, settings.pixelSize])

  useEffect(() => {
    if (!originalImage) return
    // Only run when a new image is set; use current slider value
    ;(async () => {
      setIsProcessing(true)
      const url = await pixelateImage(originalImage, settings.pixelSize)
      setPixelatedImage(url)
      setIsProcessing(false)
    })()
    // Intentionally omit processImage/settings from deps to avoid re-renders while dragging slider
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originalImage])

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Guards: type and size (<=10MB)
    if (!file.type.startsWith("image/")) {
      alert("Unsupported file type. Please upload an image (PNG, JPG, WEBP).")
      return
    }
    const TEN_MB = 10 * 1024 * 1024
    if (file.size > TEN_MB) {
      alert("File too large. Please choose an image under 10MB.")
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new window.Image()
      img.onload = () => {
        setOriginalImage(img)
      }
      img.src = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }

  const handleExampleImage = () => {
    const img = new window.Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      setOriginalImage(img)
    }
    // Use the public asset path; absolute filesystem paths are not loadable in the browser
    img.src = "/display.webp"
  }

  const downloadImage = (isLarge = true) => {
    const canvas = isLarge ? largeCanvasRef.current : smallCanvasRef.current
    if (!canvas) return
    downloadCanvas(canvas, `pixel-art-${isLarge ? 'large' : 'small'}.png`)
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
          {content.hero.h1}
        </h1>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          {content.hero.subheading}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Panel - Upload Area */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col space-y-6">
            <div className="flex-1 min-h-[300px] max-h-[70vh]">
              {originalImage ? (
                <div className="h-full bg-muted rounded-lg overflow-hidden">
                  <img
                    src={originalImage.src || "/placeholder.svg"}
                    alt="Uploaded image"
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div
                  className="h-full border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="h-12 w-12 mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground">PNG, JPG, WEBP up to 10MB</p>
                </div>
              )}
            </div>

            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />

            {!originalImage && (
              <Button onClick={handleExampleImage} variant="outline" className="w-full bg-transparent">
                Try Example Image
              </Button>
            )}

            {originalImage && (
              <Button onClick={() => fileInputRef.current?.click()} variant="outline" className="w-full">
                Upload Different Image
              </Button>
            )}

            {/* Pixel Size Control */}
            <div className="mt-2">
              <div className="flex items-center justify-between mb-1">
                <Label>Pixel Size: {settings.pixelSize}px</Label>
                <span className="text-xs text-muted-foreground">drag to adjust</span>
              </div>
              <Slider
                value={[settings.pixelSize]}
                min={2}
                max={32}
                step={1}
                onValueChange={([value]) => {
                  setSettings({ pixelSize: value })
                  if (!originalImage) return
                  // debounce re-render to avoid thrash while dragging
                  if (sizeDebounceRef.current) {
                    window.clearTimeout(sizeDebounceRef.current)
                  }
                  setIsProcessing(true)
                  sizeDebounceRef.current = window.setTimeout(async () => {
                    const url = await pixelateImage(originalImage, value)
                    setPixelatedImage(url)
                    setIsProcessing(false)
                  }, 120) as unknown as number
                }}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>

        {/* Right Panel - Result Area */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Pixel Art Result</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col space-y-4">
            <div className="flex-1 min-h-[300px] max-h-[70vh]">
              {isProcessing ? (
                <div className="h-full bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                    <p className="text-sm text-muted-foreground">Processing...</p>
                  </div>
                </div>
              ) : pixelatedImage ? (
                <div className="h-full bg-muted rounded-lg overflow-hidden">
                  <img
                    src={pixelatedImage || "/placeholder.svg"}
                    alt="Pixelated result"
                    className="w-full h-full object-contain"
                    style={{ imageRendering: "pixelated" }}
                  />
                </div>
              ) : (
                <div className="h-full bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">Upload an image to see the pixel art result</p>
                </div>
              )}
            </div>

            {pixelatedImage && (
              <div className="text-xs text-muted-foreground text-center mb-4">Pixel size: {settings.pixelSize}px</div>
            )}

            {/* Download Buttons */}
            {pixelatedImage && (
              <div className="space-y-3">
                <Button onClick={() => downloadImage(true)} className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Large (Grid‑scaled)
                </Button>
                <Button onClick={() => downloadImage(false)} variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Small (Pixel Grid)
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Hidden canvas for processing */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Article Content */}
      <Separator className="my-8" />
      <section id="how-to-use" className="mb-8 max-w-5xl mx-auto">
        <div className="space-y-12">
          {content.article.sections.map((section, index) => {
            // Special handling for "How to Use" section
            if (section.heading === "How to Use the Image to Pixel Art Converter") {
              return (
                <article key={index} className="space-y-8">
                  <h2 className="text-2xl font-semibold">{section.heading}</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{section.body}</p>
                  
                  {/* Flow Steps */}
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    {howToSteps.map((step, stepIndex) => (
                      <div key={stepIndex} className="relative">
                        <Card className="h-full">
                          <CardHeader>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                                <step.icon className="h-6 w-6 text-primary" />
                              </div>
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                                {stepIndex + 1}
                              </div>
                            </div>
                            <CardTitle className="text-lg">{step.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground text-sm">{step.description}</p>
                          </CardContent>
                        </Card>
                        
                        {/* Arrow connector */}
                        {stepIndex < howToSteps.length - 1 && (
                          <div className="hidden md:flex items-center justify-center absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                            <ChevronRight className="h-8 w-8 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </article>
              )
            }
            
            // Special handling for "Tips" section
            if (section.heading === "Tips to Get Better Image to Pixel Art Results") {
              return (
                <article key={index} className="space-y-6">
                  <h2 className="text-2xl font-semibold flex items-center gap-2">
                    <Lightbulb className="h-6 w-6 text-primary" />
                    {section.heading}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{section.body}</p>
                  
                  {/* Tips grid */}
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <Card className="p-4 border-l-4 border-l-primary">
                      <div className="flex items-start gap-3">
                        <Eye className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-1">Start large, then refine</h3>
                          <p className="text-sm text-muted-foreground">Push pixels bigger to establish bold shapes, then lower the slider until the balance feels right</p>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-4 border-l-4 border-l-primary">
                      <div className="flex items-start gap-3">
                        <Palette className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-1">Favor contrast</h3>
                          <p className="text-sm text-muted-foreground">High-contrast photos with clear subjects translate to cleaner pixel art blocks</p>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-4 border-l-4 border-l-primary">
                      <div className="flex items-start gap-3">
                        <Square className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-1">Simplify composition</h3>
                          <p className="text-sm text-muted-foreground">Centered subjects and minimal backgrounds let pixel art read clearly at a glance</p>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-4 border-l-4 border-l-primary">
                      <div className="flex items-start gap-3">
                        <Download className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-1">Export both sizes</h3>
                          <p className="text-sm text-muted-foreground">Use small download for profiles, and original-size for banners or print</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </article>
              )
            }
            
            // Special handling for "Who Benefits" section
            if (section.heading === "Who Benefits from Image to Pixel Art") {
              return (
                <article key={index} className="space-y-6">
                  <h2 className="text-2xl font-semibold flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    {section.heading}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{section.body}</p>
                  
                  {/* User types grid */}
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    {[
                      { icon: Gamepad2, title: "Indie developers", desc: "Turn sketches into UI icons and sprites" },
                      { icon: ImageIcon, title: "Social creators", desc: "Make eye-catching avatars and thumbnails" },
                      { icon: Monitor, title: "Teachers", desc: "Demonstrate sampling and resolution visually" },
                      { icon: Brush, title: "Makers and crafters", desc: "Create patterns for cross-stitch and perler beads" }
                    ].map((user, userIndex) => (
                      <Card key={userIndex} className="p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3">
                          <user.icon className="h-5 w-5 text-primary" />
                          <div>
                            <h3 className="font-semibold">{user.title}</h3>
                            <p className="text-sm text-muted-foreground">{user.desc}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </article>
              )
            }
            
            // Special handling for "Pixel Art vs. Pixelation" section
            if (section.heading === "Pixel Art vs. Pixelation: The Key Difference") {
              return (
                <article key={index} className="space-y-6">
                  <h2 className="text-2xl font-semibold flex items-center gap-2">
                    <Triangle className="h-6 w-6 text-primary" />
                    {section.heading}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{section.body}</p>
                  
                  {/* Comparison table */}
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <Card className="border-2 border-green-500/20">
                      <CardHeader className="bg-green-500/10">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Check className="h-5 w-5 text-green-600" />
                            Image to Pixel Art
                            <Badge variant="secondary" className="bg-green-100 text-green-800">Aesthetic</Badge>
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Intentional style choice for retro look</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Preserves readability and shapes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Uses crisp edges and clear blocks</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Perfect for games, icons, posters</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-2 border-red-500/20">
                      <CardHeader className="bg-red-500/10">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <X className="h-5 w-5 text-red-600" />
                            Privacy Pixelation
                            <Badge variant="secondary" className="bg-red-100 text-red-800">Censorship</Badge>
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Used to hide information</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Goal is to obscure, not style</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Creates unclear, blurred blocks</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Used for faces, data protection</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </article>
              )
            }
            
            // Special handling for "Privacy" section
            if (section.heading === "Privacy, Speed, and Reliability") {
              return (
                <article key={index} className="space-y-6" id="features">
                  <h2 className="text-2xl font-semibold flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    {section.heading}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{section.body}</p>
                  
                  {/* Feature highlights */}
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <Card className="text-center p-6">
                      <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">100% Private</h3>
                      <p className="text-sm text-muted-foreground">All processing happens in your browser</p>
                    </Card>
                    <Card className="text-center p-6">
                      <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Instant Results</h3>
                      <p className="text-sm text-muted-foreground">No waiting for server processing</p>
                    </Card>
                    <Card className="text-center p-6">
                      <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Reliable</h3>
                      <p className="text-sm text-muted-foreground">Works offline, no paywalls</p>
                    </Card>
                  </div>
                </article>
              )
            }
            
            // Default rendering for other sections
            return (
              <article key={index} className="space-y-4">
                <h2 className="text-2xl font-semibold">{section.heading}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{section.body}</p>
              </article>
            )
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <Separator className="my-8" />
      <section id="faq" className="mb-8">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
          {content.faq.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA Section */}
      <Separator className="my-8" />
      <section className="text-center py-10 px-4 rounded-lg bg-muted/50">
        <h2 className="text-3xl font-bold mb-4">{content.cta.heading}</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          {content.cta.body}
        </p>
        <Button 
          size="lg" 
          onClick={() => {
            // Scroll to converter
            const converterElement = document.querySelector('.grid.lg\\:grid-cols-2');
            converterElement?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {content.cta.buttonText}
        </Button>
      </section>
    </div>
  )
}
