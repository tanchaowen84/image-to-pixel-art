# 🎨 Image to Pixel Art Converter

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

Transform any image into stunning retro pixel art with our free, browser-based converter. No uploads, no registration - 100% private processing in your browser.

![Preview](https://raw.githubusercontent.com/tanchaowen84/image-to-pixel-art/main/public/og.png)

## ✨ Features

### 🚀 Core Functionality
- **Real-time Preview**: See changes instantly as you adjust pixel size
- **Adjustable Pixel Size**: Fine-tune from 2px to 32px for perfect results
- **Multiple Export Options**: Download in small size or original dimensions
- **No Watermarks**: Clean, professional results without branding

### 🔒 Privacy & Security
- **100% Browser-based**: All processing happens locally
- **No Server Uploads**: Your images never leave your device
- **No Registration Required**: Start converting immediately
- **Temporary Processing**: Images held in memory only during conversion

### 🎯 User Experience
- **Drag & Drop Support**: Easy image upload
- **Sample Image**: Try the converter instantly with our built-in sample
- **Mobile Responsive**: Works perfectly on all devices
- **Fast & Lightweight**: Instant results without loading delays

## 🚀 Getting Started

### Live Demo
Visit [imagetopixelart.co](https://imagetopixelart.co) to use the converter immediately.

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/tanchaowen84/image-to-pixel-art.git
   cd image-to-pixel-art
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Beautiful, accessible components
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- **Fonts**: Google Fonts (Silkscreen, VT323) - Retro gaming aesthetics

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Homepage
│   ├── privacy/           # Privacy policy page
│   ├── terms/             # Terms of use page
│   └── cookies/           # Cookie policy page
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   ├── header.tsx         # Navigation header
│   ├── footer.tsx         # Footer component
│   └── pixel-art-converter.tsx # Main converter component
├── content/               # Static content
│   └── homepage.en.json   # Homepage content
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/                # Additional styles
```

## 🎨 How It Works

1. **Image Upload**: Users can drag & drop or click to upload any image
2. **Pixel Processing**: The image is scaled down using canvas API
3. **Real-time Preview**: Changes are displayed instantly as users adjust settings
4. **Export Options**: Users can download the pixel art in two sizes:
   - Small: Optimized for avatars and thumbnails
   - Original: Full-size with pixel-perfect scaling

## 🔧 Configuration

Environment variables (`.env`):
```env
# Domain Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Analytics Configuration
NEXT_PUBLIC_GA_ID=your-ga-id
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.com
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
- Follow the existing code style
- Add TypeScript types for new features
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=tanchaowen84/image-to-pixel-art&type=Date)](https://star-history.com/#tanchaowen84/image-to-pixel-art&Date)

---

<p align="center">
  Made with ❤️ for pixel art enthusiasts
</p>