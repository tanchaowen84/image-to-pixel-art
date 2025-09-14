// Utilities for zero‑config, high‑quality pixel‑art rendering in the browser.
// Uses image-q (MIT) for palette quantization + dithering. No UI options exposed.

export interface PixelArtResult {
  small: HTMLCanvasElement
  large: HTMLCanvasElement
  pixelSize: number
}

export interface RenderOptions {
  /** Target pixel cells along the short side (auto grid). */
  targetCells?: number
  /** Number of colors for quantization. */
  colors?: number
}

/** Compute an automatic pixel size based on image short side and target cell count. */
export function autoPixelSize(
  img: HTMLImageElement,
  targetCells = 96,
  min = 3,
  max = 24,
): number {
  const shortSide = Math.max(1, Math.min(img.naturalWidth, img.naturalHeight))
  const p = Math.round(shortSide / targetCells)
  return Math.max(min, Math.min(max, p || min))
}

/** Downsample an image onto a small canvas using smoothing for average block colors. */
function downsampleToGrid(
  img: HTMLImageElement,
  pixelSize: number,
): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D; w: number; h: number } {
  const p = Math.max(2, Math.floor(pixelSize))
  const w = Math.max(1, Math.floor(img.naturalWidth / p))
  const h = Math.max(1, Math.floor(img.naturalHeight / p))
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d', { willReadFrequently: true })!
  ctx.imageSmoothingEnabled = true
  ctx.drawImage(img, 0, 0, w, h)
  return { canvas, ctx, w, h }
}

/** Apply palette quantization + Floyd–Steinberg dithering via image-q, in-place on the given small canvas. */
async function quantizeWithImageQ(
  smallCtx: CanvasRenderingContext2D,
  w: number,
  h: number,
  colors = 16,
) {
  // Dynamic import to keep initial bundle lean and optional.
  let iq: any
  try {
    iq = await import('image-q')
  } catch (e) {
    // If the lib can't be loaded, skip quantization; caller will still upscale the small canvas.
    return
  }

  const imageData = smallCtx.getImageData(0, 0, w, h)

  // image-q supports both `PointContainer` and `utils.PointContainer`; use whichever exists.
  const PointContainer = iq.PointContainer ?? iq.utils?.PointContainer
  const fromImageData = PointContainer?.fromImageData
  if (!PointContainer || !fromImageData) {
    return
  }

  const inPoint = fromImageData.call(PointContainer, imageData)

  // Prefer the concise Basic API if available (v4 docs): buildPaletteSync/applyPaletteSync.
  const buildPaletteSync = iq.buildPaletteSync ?? iq.buildPalette
  const applyPaletteSync = iq.applyPaletteSync ?? iq.applyPalette

  // Build palette (WuQuant + PNGQuant distance) and apply with Floyd–Steinberg dithering.
  // If only async versions exist, await them; otherwise run sync.
  const palette = buildPaletteSync.length >= 2
    ? buildPaletteSync([inPoint], {
        colors,
        colorDistanceFormula: 'pngquant',
        paletteQuantization: 'wuquant',
      })
    : await buildPaletteSync([inPoint], {
        colors,
        colorDistanceFormula: 'pngquant',
        paletteQuantization: 'wuquant',
      })

  const outPoint = applyPaletteSync.length >= 3
    ? applyPaletteSync(inPoint, palette, {
        colorDistanceFormula: 'pngquant',
        imageQuantization: 'floyd-steinberg',
      })
    : await applyPaletteSync(inPoint, palette, {
        colorDistanceFormula: 'pngquant',
        imageQuantization: 'floyd-steinberg',
      })

  if (!outPoint || !outPoint.toUint8Array) return
  const rgba: Uint8Array = outPoint.toUint8Array()
  const clamped = new Uint8ClampedArray(rgba.length)
  clamped.set(rgba)
  const outImageData = new ImageData(clamped, w, h)
  smallCtx.putImageData(outImageData, 0, 0)
}

/** Render zero‑config pixel art from an HTMLImageElement. */
export async function renderPixelArt(
  img: HTMLImageElement,
  opts: RenderOptions = {},
): Promise<PixelArtResult> {
  const pixelSize = autoPixelSize(img, opts.targetCells ?? 96)

  // 1) Downsample to small grid
  const { canvas: small, ctx: sctx, w, h } = downsampleToGrid(img, pixelSize)

  // 2) Quantize + Dither (best effort; if dynamic import fails, we keep the small canvas as-is)
  await quantizeWithImageQ(sctx, w, h, opts.colors ?? 16)

  // 3) Upscale to exact integer grid blocks with nearest-neighbor
  const large = document.createElement('canvas')
  large.width = w * pixelSize
  large.height = h * pixelSize
  const lctx = large.getContext('2d')!
  lctx.imageSmoothingEnabled = false
  lctx.drawImage(small, 0, 0, large.width, large.height)

  return { small, large, pixelSize }
}

/** Helper to download a canvas as PNG using toBlob. */
export function downloadCanvas(canvas: HTMLCanvasElement, filename: string) {
  canvas.toBlob((blob) => {
    if (!blob) return
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
  }, 'image/png')
}

