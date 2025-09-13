"use client"

import type React from "react"

import { useState, useRef, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Upload, Download, Sparkles } from "lucide-react"

interface PixelArtSettings {
  pixelSize: number
}

export function PixelArtConverter() {
  const [originalImage, setOriginalImage] = useState<HTMLImageElement | null>(null)
  const [pixelatedImage, setPixelatedImage] = useState<string | null>(null)
  const [settings, setSettings] = useState<PixelArtSettings>({
    pixelSize: 8,
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const pixelateImage = useCallback((img: HTMLImageElement, settings: PixelArtSettings) => {
    const canvas = canvasRef.current
    if (!canvas) return null

    const ctx = canvas.getContext("2d")
    if (!ctx) return null

    // Calculate new dimensions based on pixel size
    const scale = settings.pixelSize
    const newWidth = Math.floor(img.width / scale)
    const newHeight = Math.floor(img.height / scale)

    // Set canvas size to the pixelated dimensions
    canvas.width = newWidth
    canvas.height = newHeight

    // Disable image smoothing for pixelated effect
    ctx.imageSmoothingEnabled = false

    // Draw the image scaled down to create pixelated effect
    ctx.drawImage(img, 0, 0, newWidth, newHeight)

    // Return the pixelated image as data URL
    return canvas.toDataURL()
  }, [])

  const processImage = useCallback(async () => {
    if (!originalImage) return

    setIsProcessing(true)

    // Use setTimeout to allow UI to update
    setTimeout(() => {
      const result = pixelateImage(originalImage, settings)
      setPixelatedImage(result)
      setIsProcessing(false)
    }, 100)
  }, [originalImage, settings, pixelateImage])

  useEffect(() => {
    if (originalImage) {
      processImage()
    }
  }, [originalImage, settings, processImage])

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        setOriginalImage(img)
      }
      img.src = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }

  const handleExampleImage = () => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      setOriginalImage(img)
    }
    img.src = "/colorful-landscape-with-mountains-and-trees.jpg"
  }

  const downloadImage = (isOriginalSize = false) => {
    if (!pixelatedImage || !originalImage) return

    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new Image()
    img.onload = () => {
      if (isOriginalSize) {
        // Scale up to original size with hard pixels
        canvas.width = originalImage.width
        canvas.height = originalImage.height
        ctx.imageSmoothingEnabled = false
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      } else {
        // Keep pixelated size
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)
      }

      const link = document.createElement("a")
      link.download = `pixel-art-${isOriginalSize ? "large" : "small"}.png`
      link.href = canvas.toDataURL()
      link.click()
    }
    img.src = pixelatedImage
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            PixelArt Converter
          </h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Transform any image into retro 8-bit pixel art with real-time preview
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 h-[600px]">
        {/* Left Panel - Upload Area */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload & Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col space-y-6">
            <div className="flex-1 min-h-[300px]">
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

            {/* Pixel Size Setting */}
            <div className="space-y-2">
              <Label>Pixel Size: {settings.pixelSize}px</Label>
              <Slider
                value={[settings.pixelSize]}
                onValueChange={([value]) => setSettings((prev) => ({ ...prev, pixelSize: value }))}
                min={2}
                max={32}
                step={1}
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
            <div className="flex-1 min-h-[300px]">
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
                <Button onClick={() => downloadImage(false)} className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Small Size
                </Button>
                <Button onClick={() => downloadImage(true)} variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Original Size
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Hidden canvas for processing */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  )
}
