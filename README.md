# Good Company Website

A professional consulting website for Good Company - a boutique operational efficiency and automation consultancy.

## Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Fonts**: Inter, Source Sans 3, JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

Required for contact form functionality:
- `RESEND_API_KEY` - Get from [Resend](https://resend.com)
- `CONTACT_EMAIL` - Email address to receive form submissions

## Project Structure

```
src/
├── app/
│   ├── api/contact/     # Contact form API route
│   ├── case-studies/    # Case studies page
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles and Tailwind config
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── Button.tsx       # CTA button component
│   ├── Card.tsx         # Card components
│   ├── ContactForm.tsx  # Contact form
│   └── index.ts         # Component exports
└── hooks/
    └── useScrollAnimation.ts  # Scroll animation hook
```

## Design System

### Colors (Masters-inspired)

- Primary Green: `#006747`
- Light Green: `#2D8659`
- Cream: `#F5F5DC`
- Dark: `#1A1A1A`
- Gold Accent: `#B8860B`
- Text: `#2D2D2D`
- Text Light: `#6B6B6B`
- Border: `#E0E0E0`

### Typography

- **Headings**: Inter (400, 500, 600, 700)
- **Body**: Source Sans 3 (400, 600)
- **Technical/Data**: JetBrains Mono (400, 600)

## Adding Logo

1. Place your logo file at `public/images/logos/script-inline.png`
2. Update `src/components/Header.tsx` to use the Image component (see comments in file)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Build Commands

```bash
# Production build
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Pages

- `/` - Homepage with all sections (hero, services, testimonials, pricing, contact)
- `/case-studies` - Case studies page with placeholder content

## Features

- Responsive design (mobile, tablet, desktop)
- Smooth scrolling navigation
- Animated hero elements
- Hover effects on cards
- Contact form with validation
- SEO metadata
