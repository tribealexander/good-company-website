# CLAUDE.md - Good Company Website

## Project Overview

This is the marketing website for **Good Company**, a boutique operational efficiency and automation consultancy serving $1M-$50M businesses. The site is designed to convert skeptical mid-market executives while maintaining approachability.

**Target audience**: Founders scaling their first business, PE-backed companies, second-generation owners, and service businesses with distributed teams.

**Tech stack**:
- Next.js 16+ (App Router)
- TypeScript
- Tailwind CSS v4
- Deployed on Vercel

**Key files**:
- `/src/app/page.tsx` - Homepage (main landing page)
- `/src/app/about/page.tsx` - About page with founder bio
- `/src/app/acquisitions/page.tsx` - Acquisitions & Partnerships page
- `/src/app/case-studies/page.tsx` - Case studies listing
- `/src/app/api/contact/route.ts` - Contact form API
- `/src/app/globals.css` - Global styles and Tailwind theme
- `/src/app/layout.tsx` - Root layout with fonts and metadata

---

## Design System

### Color Palette

All colors are defined in `/src/app/globals.css` under `@theme inline`:

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Primary Green | `#006747` | `text-primary`, `bg-primary` | CTAs, accents, links |
| Light Green | `#2D8659` | `text-primary-light`, `bg-primary-light` | Hover states |
| Deep Green (Hero) | `#004D36` | `bg-[#004D36]` | Hero section background |
| Cream | `#E8E3DB` | `bg-cream` | Alternating section backgrounds (warm beige) |
| Dark | `#3D3D3D` | `text-dark`, `bg-dark` | Headings (warm dark gray) |
| Gold | `#B8860B` | `text-gold`, `bg-gold` | Prices, key metrics, accents, hero underline |
| Text | `#3D3D3D` | `text-text` | Body text |
| Text Light | `#6B6B6B` | `text-text-light` | Secondary text, descriptions |
| Border | `#D4CFC7` | `border-border` | Card borders, dividers (subtle beige) |

### Dynamic Section Colors

Some sections change background color based on user interaction:

**What We Build Section** (earth tones):
- Default: `#FAF9F7` (warm white)
- Automate Manual Work: `#E8EDE9` (light sage)
- Create Better Visibility: `#E5E9E6` (soft green-gray)
- Improve Employee Performance: `#F5F2EA` (light gold tint)

**Problems We Solve Section** (earth tones):
- It's All in Their Head: `#E8EDE9` (light sage)
- The Reporting Treadmill: `#F0EBE3` (warm sand)
- Are We Profitable?: `#F5F2EA` (light gold tint)
- The Invisible Work: `#E5E9E6` (soft green-gray)
- Fire Drill Culture: `#EAEBE6` (muted olive)
- Flying Blind on Client Health: `#EBEDEF` (cool stone)

### Typography

Fonts are loaded in `/src/app/layout.tsx`:

| Purpose | Font | Weights | CSS Variable |
|---------|------|---------|--------------|
| Headings | Inter | 400, 500, 600, 700 | `--font-inter` |
| Body | Source Sans 3 | 400, 600 | `--font-source-sans` |
| Technical/Data | JetBrains Mono | 400, 600 | `--font-jetbrains-mono` |

**Usage**:
- `font-sans` - Default (Inter)
- `font-mono` - Monospace for stats, prices, labels

### Spacing Rules

- **Container max-width**: `max-w-7xl` (1280px)
- **Horizontal padding**: `px-6 lg:px-10`
- **Section vertical padding**: `py-12 lg:py-16` (standard), `py-12 lg:py-20` (larger sections)
- **Card padding**: `p-8` or `p-10`
- **Grid gaps**: `gap-8` (cards), `gap-6` (smaller items)

### Section Pattern

Sections alternate between white and cream backgrounds:
```tsx
{/* White background */}
<section className="py-12 lg:py-16">
  <div className="mx-auto max-w-7xl px-6 lg:px-10">
    {/* content */}
  </div>
</section>

{/* Cream background with film grain texture */}
<section className="bg-cream-textured py-12 lg:py-16">
  <div className="mx-auto max-w-7xl px-6 lg:px-10">
    {/* content */}
  </div>
</section>
```

### Animation Classes

Defined in `/src/app/globals.css`:
- `animate-fade-in-up` - Fade in and slide up
- `animate-fade-in` - Simple fade in
- `animation-delay-100` through `animation-delay-400` - Staggered delays
- `checkmark-animate` with `checkmark-delay-1/2/3` - Staggered checkmark pop animation
- `logo-wiggle` - Easter egg logo wiggle on triple-click
- `pennant-wave` - Pennant flag wave on hover
- `card-breathe` - Subtle scale on card hover
- `btn-press` - Button press-down effect on click
- `nav-link` - Navigation links with animated gold underline on hover (dark backgrounds)
- `nav-link-light` - Navigation links for light text on dark backgrounds (hero)
- `hover-lift` - Card lift with shadow on hover

### Film Grain Texture

The site uses a visible film grain effect on cream-colored sections:

```css
.bg-cream-textured {
  /* Heavy film grain overlay */
  background-image: url("data:image/svg+xml,...");
  opacity: 0.35;
  mix-blend-mode: overlay;
}
```

Apply with `bg-cream-textured` class on sections for the textured beige background with film grain.

---

## Component Architecture

### Component Location

All reusable components are in `/src/components/`:

```
src/components/
├── Header.tsx              # Site navigation (adapts to dark hero)
├── Footer.tsx              # Site footer
├── Button.tsx              # CTA buttons (primary, secondary, outline, hero variants)
├── Card.tsx                # Card variants
├── ContactForm.tsx         # Contact form with validation
├── ProblemSelector.tsx     # Interactive split-screen problem selector
├── ProblemsSectionWrapper.tsx # Problems section with dynamic backgrounds
├── WhatWeBuildSection.tsx  # Services section with dynamic backgrounds
├── HeroHeadline.tsx        # Hero headline with Rough Notation underline
├── RoughAnnotation.tsx     # Wrapper for rough-notation library
├── ScrollReveal.tsx        # Scroll-triggered fade-in animations
├── SectionHeading.tsx      # Consistent section headings with green underline
├── FloatingCTA.tsx         # Floating CTA button
├── InvestmentSection.tsx   # Pricing section
├── FAQ.tsx                 # FAQ accordion
└── index.ts                # Barrel exports
```

### Import Pattern

Always import from the barrel file:
```tsx
import { Header, Footer, Button, ServiceCard, ProblemSelector } from "@/components";
```

### Component Details

#### Header (`Header.tsx`)
- Fixed navigation with two visual states:
  - **Over hero (dark background)**: Transparent background, white logo, white text
  - **After scroll**: White background with blur, dark logo, dark text
- Uses `mounted` state to prevent hydration mismatch
- Smooth 500ms transition between states
- Compact height (h-16 / 64px)
- Mobile hamburger menu (slides down)
- Nav links use `nav-link` (scrolled) or `nav-link-light` (hero) classes
- Logo has easter egg: triple-click triggers wiggle animation
- Logo turns green on hover (when scrolled)

#### Button (`Button.tsx`)
Props:
- `href: string` - Link destination
- `variant: "primary" | "secondary" | "outline" | "hero"` - Style variant
- `size: "default" | "large"` - Button size
- `className?: string` - Additional classes

```tsx
<Button href="#contact">Book a Discovery Call</Button>
<Button href="#contact-form" variant="hero" size="large">Book a Discovery Call</Button>
```

**Hero variant**: White background, deep green text, turns gold on hover (for dark backgrounds)

#### RoughAnnotation (`RoughAnnotation.tsx`)
Wrapper for the rough-notation library to add hand-drawn annotations:
```tsx
<RoughAnnotation
  type="underline"
  color="#B8860B"
  strokeWidth={3}
  animationDuration={800}
  showOnScroll={false}
  delay={500}
>
  automate
</RoughAnnotation>
```

Used in hero headline to underline "automate" with a gold hand-drawn line.

#### ScrollReveal (`ScrollReveal.tsx`)
Wraps content for scroll-triggered fade-in animations:
```tsx
<ScrollReveal delay={100}>
  <SectionHeading>Title</SectionHeading>
</ScrollReveal>
```

---

## Homepage Structure

The homepage (`/src/app/page.tsx`) follows this section order:

| # | Section | Background | ID |
|---|---------|------------|-----|
| 1 | Hero | Deep Green (`#004D36`) | - |
| 2 | What We Build | White/Dynamic | `#solutions` |
| 3 | Problems We Solve | Dynamic (earth tones) | `#problems` |
| 4 | From Build to Buy-In | White | - |
| 5 | How We Work | Cream textured | `#how-we-work` |
| 6 | Testimonials | White | `#testimonials` |
| 7 | Investment | Cream textured | - |
| 8 | FAQ | White | `#faq` |
| 9 | Final CTA | Cream textured | `#contact` |
| 10 | Contact Form | White | `#contact-form` |

### Hero Section

- **Background**: Deep green (`#004D36`)
- **Padding**: Large vertical padding to fill viewport (`pt-32 pb-28` mobile, `pt-44 pb-40` desktop)
- **Badge**: Semi-transparent white pill ("Ideal for $1M+ revenue companies")
- **Headline**: White text with gold rough-notation underline on "automate"
- **Subhead**: Light green text (`#A8D5C2`) - concise version
- **CTA**: White button that turns gold on hover (`variant="hero"`)

### What We Build Section

Three service cards with dynamic background colors on hover:
1. **Automate Manual Work** - light sage
2. **Create Better Visibility** - soft green-gray
3. **Improve Employee Performance** - light gold tint

Each card shows:
- Title
- Description
- Example (monospace)
- Impact metric (gold accent)

### Problems We Solve Section

Interactive split-screen layout with dynamic backgrounds:
- **Intro**: "Every business is different, but these are the problems we see most often:"
- **6 problems** that users can select, each with a different earth-tone background
- **Value Framework**: Bold intro + two horizontal boxes showing "Saves Time" and "Protects & Grows Revenue"
- Smooth 400ms transition between background colors

### From Build to Buy-In Section

Explains why implementations stick:
- 3 pillars: Less to Adopt, Problems Surface Fast, Built-In Accountability
- Closing statement: "That's why our work sticks." (simple centered text, no box)

---

## About Page

The About page (`/src/app/about/page.tsx`) has 6 sections:

1. **Hero** - Photo integration with grayscale filter, "Hi, I'm Alex" with green underline
2. **Origin Story** - "Why I Started Good Company" with drop cap and highlight on "Technology is easy. Adoption is hard."
3. **What I Believe** - 3 numbered cards with green underlines on key phrases
4. **Background** - "Where I've Been" - single column prose (no quick facts sidebar)
5. **How I Think** - Newsletter cards (The Come Up, Five-Minute MBA, Personal Writing)
6. **CTA** - Dark green section "Want to Work Together?"

Photo is integrated into the hero with:
- Desktop: Right half of screen with gradient overlay fading into beige
- Mobile: Top half with gradient fading down
- Grayscale filter (85%) with slight contrast/brightness adjustments

Rough Notation placements:
- Hero: Green underline on "Alex"
- Origin Story: Light green highlight on "Technology is easy. Adoption is hard."
- Beliefs: Green underlines on "enforce themselves", "beats planning", "if you use it"

---

## Acquisitions & Partnerships Page

The Acquisitions page (`/src/app/acquisitions/page.tsx`) is a separate landing page for business acquisition/partnership inquiries. NOT linked in main nav - only in footer.

Sections:
1. **Hero** - Dark green, "Thinking About an Exit?"
2. **The Pitch** - 3 cards: You Want Out, You Want Help, You Want a Partner
3. **What I Look For** - Checklist of criteria (service businesses, $500K-$50M, etc.)
4. **CTA** - "Interested?" with email link (different from main site CTA)

Footer link: "Acquisitions & Partnerships" under Quick Links

---

## Development Guidelines

### Adding a New Section

1. Add section to `/src/app/page.tsx` in the `<main>` element
2. Follow the alternating background pattern (white/cream)
3. Use consistent container and padding classes
4. Add `id` attribute for anchor links if needed
5. Wrap content in `<ScrollReveal>` for animations

Example:
```tsx
{/* New Section */}
<section id="new-section" className="bg-cream-textured py-12 lg:py-16">
  <div className="mx-auto max-w-7xl px-6 lg:px-10">
    <ScrollReveal>
      <SectionHeading>Section Title</SectionHeading>
      <p className="mb-12 text-xl text-text-light">
        Section intro text
      </p>
    </ScrollReveal>
    {/* Section content */}
  </div>
</section>
```

### Adding Navigation Links

Update `navLinks` array in `/src/components/Header.tsx`:
```tsx
const navLinks = [
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
];
```

---

## Common Tasks

### Updating Services (What We Build)

Services are in `/src/components/WhatWeBuildSection.tsx`. Modify the `services` array:

```tsx
const services: ServiceCardData[] = [
  {
    id: 1,
    title: "Automate Manual Work",
    description: "...",
    example: "Intake → triage → assignment → follow-ups, fully automated",
    impact: "5-10 hours per person per week reclaimed",
    supportingText: "...",
    color: "#E8EDE9", // light sage
  },
  // ...
];
```

### Updating Problems Section Colors

Background colors are in `/src/components/ProblemsSectionWrapper.tsx`:

```tsx
const backgroundColors: Record<number, string> = {
  1: "#E8EDE9", // light sage
  2: "#F0EBE3", // warm sand
  // ...
};
```

### Adding Rough Notation Underlines

Use the `RoughAnnotation` component:
```tsx
import RoughAnnotation from "@/components/RoughAnnotation";

<RoughAnnotation
  type="underline"  // or "highlight", "box", "circle"
  color="#B8860B"   // gold for hero, #006747 for other sections
  strokeWidth={3}
  animationDuration={800}
  showOnScroll={true}  // false for hero (immediate)
  delay={500}
>
  word to underline
</RoughAnnotation>
```

---

## Environment Variables

Required for contact form functionality. Create `.env.local` from `.env.example`:

```bash
# Resend.com API key for sending emails
RESEND_API_KEY=re_xxxxxxxx

# Email address to receive form submissions
CONTACT_EMAIL=hello@goodcompany.com
```

---

## Analytics

The site uses Vercel Analytics and Speed Insights for tracking:

```tsx
// In layout.tsx
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Inside <body>
<Analytics />
<SpeedInsights />
```

Analytics are automatically enabled when deployed to Vercel.

---

## Deployment

### Build Commands

```bash
# Development
npm run dev

# Development on specific port
PORT=3001 npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

---

## File Reference

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Homepage - all main content sections |
| `src/app/about/page.tsx` | About page with founder bio |
| `src/app/layout.tsx` | Root layout, fonts, SEO metadata |
| `src/app/globals.css` | Tailwind theme, animations, global styles |
| `src/app/case-studies/page.tsx` | Case studies page |
| `src/app/api/contact/route.ts` | Contact form API endpoint |
| `src/components/Header.tsx` | Navigation (adapts to dark hero) |
| `src/components/Button.tsx` | CTA button styles (including hero variant) |
| `src/components/WhatWeBuildSection.tsx` | Services with dynamic backgrounds |
| `src/components/ProblemsSectionWrapper.tsx` | Problems with dynamic backgrounds |
| `src/components/HeroHeadline.tsx` | Hero headline with rough notation |
| `src/components/RoughAnnotation.tsx` | Rough notation wrapper |

---

## Terminology Guidelines

When writing or editing copy, follow these terminology rules:

| Don't Use | Use Instead |
|-----------|-------------|
| AI systems, AI agents | intelligent systems, automated systems |
| task automation (as service name) | work automation |
| specific tool names (Zapier, Make, etc.) | mechanism-agnostic language |
| "save $X" (cost savings) | "without adding headcount" (capacity language) |
| AI-ready | automation-ready |

**Key messaging principles**:
- Focus on **capacity and headcount** rather than dollar savings
- Use **"intelligent systems"** or **"automated systems"** instead of "AI"
- Keep language **mechanism-agnostic** - don't reference specific platforms
- Emphasize **scaling without adding headcount** over cost reduction

**Current service names** (What We Build section):
1. Automate Manual Work
2. Create Better Visibility
3. Improve Employee Performance

---

## Troubleshooting

**Header flashing/hydration error**: The header uses a `mounted` state to prevent hydration mismatch. The pattern is:
```tsx
const [mounted, setMounted] = useState(false);
useEffect(() => { setMounted(true); }, []);
const showScrolledStyles = mounted && isScrolled;
```

**Nav link underlines not showing**: Ensure you're using the correct class:
- `nav-link` for dark text on light backgrounds (scrolled state)
- `nav-link-light` for light text on dark backgrounds (hero state)

**Colors not applying**: Ensure you're using the Tailwind classes defined in globals.css (e.g., `text-primary` not `text-green-700`).

**Build errors**: Run `npm run lint` to check for TypeScript/ESLint issues.
