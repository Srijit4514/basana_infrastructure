# Corporate Website

A modern, responsive corporate website built with Next.js, React, and Tailwind CSS. This project showcases a professional web presence with smooth animations, interactive components, and an optimized user experience.

## Tech Stack

- **Framework**: [Next.js 14.2](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Modern animation library
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library

## Features

- ✨ Smooth page transitions and animations with Framer Motion
- 📱 Fully responsive design optimized for all devices
- ♿ Accessible UI components built with Radix UI
- 🎨 Modern styling with Tailwind CSS
- ⚡ Fast performance with Next.js optimization
- 🔍 SEO-friendly structure
- 💬 WhatsApp floating contact button

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)

You can download Node.js from [nodejs.org](https://nodejs.org/).

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd corporate-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or with yarn:
   ```bash
   yarn install
   ```

## Running the Project

### Development Server

Start the development server with hot-reload:

```bash
npm run dev
```

or with yarn:
```bash
yarn dev
```

The website will be available at [http://localhost:3000](http://localhost:3000). The page will automatically reload when you make changes.

### Production Build

Build the project for production:

```bash
npm run build
```

or with yarn:
```bash
yarn build
```

### Start Production Server

After building, start the production server:

```bash
npm start
```

or with yarn:
```bash
yarn start
```

### Linting

Check and fix code issues:

```bash
npm run lint
```

or with yarn:
```bash
yarn lint
```

## Project Structure

```
corporate-website/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── not-found.tsx            # 404 page
│   ├── about/                   # About page
│   ├── services/                # Services page
│   ├── contact/                 # Contact page
│   └── supply-works/            # Supply works page
├── components/                  # React components
│   ├── ui/                      # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── about-section.tsx
│   ├── contact-section.tsx
│   ├── cta-section.tsx
│   ├── feature-grid.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── mission-vision-section.tsx
│   ├── motion-wrapper.tsx
│   ├── navbar.tsx
│   ├── section-heading.tsx
│   ├── services-grid.tsx
│   ├── supply-grid.tsx
│   └── whatsapp-floating-button.tsx
├── lib/                         # Utility functions
│   ├── site.ts
│   └── utils.ts
├── styles/                      # Global styles
│   └── globals.css
├── package.json                 # Project dependencies
├── next.config.mjs             # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.mjs          # PostCSS configuration
└── README.md                    # This file
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm start` | Run production server |
| `npm run lint` | Check code for issues |

## Pages

- **Home** (`/`) - Landing page with hero section and features
- **About** (`/about`) - Company information and mission/vision
- **Services** (`/services`) - Services offered
- **Contact** (`/contact`) - Contact form and information
- **Supply Works** (`/supply-works`) - Portfolio or supply works showcase

## Environment Variables

Create a `.env.local` file in the root directory if you need environment-specific variables:

```bash
# Example
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Troubleshooting

### Port already in use
If port 3000 is already in use, you can specify a different port:
```bash
npm run dev -- -p 3001
```

### Clear cache and reinstall
If you encounter dependency issues:
```bash
rm -rf node_modules
npm install
npm run dev
```

### TypeScript errors
Ensure your TypeScript version is up to date:
```bash
npm install typescript@latest
```

## Browser Support

This website supports all modern browsers:
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The website includes optimizations for:
- Image optimization via Next.js Image component
- Code splitting and lazy loading
- CSS-in-JS optimization with Tailwind CSS
- SEO-friendly meta tags

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is private and proprietary.

## Support

For issues and questions, please reach out through the contact page or contact information provided.

---

**Happy coding! 🚀**