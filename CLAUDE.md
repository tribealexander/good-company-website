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
- `/src/app/case-studies/page.tsx` - Case studies listing with video lightbox
- `/src/app/referrals/page.tsx` - Referrals program page
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
| Headings (h1, h2) | Lora | 400, 500, 600, 700 | `--font-lora` |
| Body/UI | Inter | 400, 500, 600, 700 | `--font-inter` |
| Body Text | Source Sans 3 | 400, 600 | `--font-source-sans` |
| Technical/Data | JetBrains Mono | 400, 600 | `--font-jetbrains-mono` |
| Handwritten | Caveat | 400-700 | `--font-caveat` |

**Usage**:
- `font-serif` - Lora serif for headings (applied globally to h1, h2 via CSS)
- `font-sans` - Default (Inter)
- `font-mono` - Monospace for stats, prices, labels

**Note**: All h1 and h2 elements automatically use Lora via global CSS rule in `globals.css`.

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
├── HeroSection.tsx         # Homepage hero with AnimeJS timeline animations
├── RoughAnnotation.tsx     # Wrapper for rough-notation library (supports padding prop)
├── ScrollReveal.tsx        # Scroll-triggered animations (AnimeJS v4) + StaggerContainer, TextReveal, CountUp
├── SectionHeading.tsx      # Consistent section headings with Lora font + green underline
├── FloatingCTA.tsx         # Floating CTA button
├── InvestmentSection.tsx   # Pricing section with collapsible Discovery & Automation Roadmap
├── FAQ.tsx                 # FAQ accordion
├── PageTransition.tsx      # Page transition animations (fade-in + scroll to top on navigation)
├── TestimonialsCarousel.tsx # 3-card carousel with navigation, touch/swipe support
└── index.ts                # Barrel exports

src/hooks/
└── useAnimations.ts        # AnimeJS v4 animation hooks
```

### Import Pattern

Always import from the barrel file:
```tsx
import { Header, Footer, Button, ServiceCard, ProblemSelector } from "@/components";
```

### Component Details

#### Header (`Header.tsx`)
- Fixed navigation with multiple visual states based on page and scroll:
  - **Homepage over hero (dark background)**: Transparent background, white logo, white text
  - **Homepage after scroll**: White background with blur, dark logo, dark text
  - **Inner pages (About, Case Studies, Referrals, etc.)**: Dark logo, dark text, green CTA button (no transparent state)
- Uses `usePathname()` to detect homepage vs inner pages
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
  padding={[0, 0, -8, 0]}  // Adjust underline position: [top, right, bottom, left]
>
  automate
</RoughAnnotation>
```

Used in hero headline to underline "automate" with a gold hand-drawn line. The `padding` prop can adjust the annotation position relative to the text.

#### ScrollReveal (`ScrollReveal.tsx`)
Wraps content for scroll-triggered fade-in animations using AnimeJS v4:
```tsx
<ScrollReveal delay={100}>
  <SectionHeading>Title</SectionHeading>
</ScrollReveal>
```

Also exports:
- `StaggerContainer` - Animates children with staggered delays
- `TextReveal` - Character-by-character text animation
- `CountUp` - Animated number counting

#### HeroSection (`HeroSection.tsx`)
Homepage hero with AnimeJS timeline animations for headline, subhead, and CTA. Uses RoughAnnotation for the gold underline on "automate".

#### PageTransition (`PageTransition.tsx`)
Provides smooth fade-in animations on page navigation. Uses `usePathname()` to detect route changes and re-trigger animation. Also scrolls to top on route change.
```tsx
export default function SomePage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main>
          {/* Page content */}
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
```

**Note**: Wrap the `<main>` element, not the entire page. Header and Footer should be outside the transition.

#### TestimonialsCarousel (`TestimonialsCarousel.tsx`)
A horizontal carousel displaying client testimonials with navigation:
- **Responsive layout**: 3 cards on desktop (lg+), 2 on tablet (sm-lg), 1 on mobile
- **Navigation arrows**: Left/right buttons with disabled states when at boundaries
- **Dot indicators**: Clickable dots showing current position
- **Touch/swipe support**: Drag to navigate on mobile and desktop
- **Avatar placeholders**: SVG silhouette icons (40x40px)
- **Accessibility**: ARIA labels, reduced motion support
- **Card design**: Quote mark decoration, left green border accent, subtle shadow

```tsx
import { TestimonialsCarousel } from "@/components";

<TestimonialsCarousel />
```

Testimonials are hardcoded in the component with placeholder names (`[CLIENT NAME]`, `[ROLE]`, `[COMPANY]`).

---

## Homepage Structure

The homepage (`/src/app/page.tsx`) follows this section order:

| # | Section | Background | ID |
|---|---------|------------|-----|
| 1 | Hero | Deep Green (`#004D36`) | - |
| 2 | Problems We Solve | White/Dynamic (earth tones) | `#problems` |
| 3 | What We Build | White/Dynamic | `#solutions` |
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
- **Default state**: White background, first problem content displayed (but no background color until clicked)
- **Intro**: "Every business is different, but these are the problems we see most often:"
- **6 problems** that users can select, each with a different earth-tone background
- **Value Framework**: Bold intro + two horizontal boxes showing "Saves Time" and "Protects & Grows Revenue"
- Smooth 400ms transition between background colors
- **Section order**: Appears before "What We Build" section

### From Build to Buy-In Section

Explains why implementations stick, addressing common objections:
- **Simple by Design**: "We build for non-technical teams"
- **Your Team Owns It**: "We train your people and document everything"
- **We Don't Disappear**: "60 days of support after launch, plus ongoing retainer options"
- Closing statement: "That's why our work sticks." (simple centered text, no box)

---

## About Page

The About page (`/src/app/about/page.tsx`) has 4 sections:

1. **Hero + Story** (unified) - Photo integration, "Hi, I'm Alex", subhead, story about working with founders, standalone closer
2. **If You Want to Go Deeper** - Prose with newsletter links + dinner series mention
3. **Got a Project in Mind?** - Transition section before CTA
4. **CTA** - Dark green section with just the button

Photo is integrated into the hero with:
- Desktop: Right half of screen with gradient overlay fading into beige
- Mobile: Top half with gradient fading down
- Grayscale filter (85%) with slight contrast/brightness adjustments

Rough Notation placements:
- Hero: Green underline on "Alex"
- Standalone statement: Green underline on "directly"
- Go Deeper: Green underline on "The Come Up", gold underline on "Five-Minute MBA", green underline on "essay", green underline on "reach out"

---

## Acquisitions & Partnerships Page

The Acquisitions page (`/src/app/acquisitions/page.tsx`) is a separate landing page for business acquisition/partnership inquiries. NOT linked in main nav - only in footer.

Sections:
1. **Hero** - Dark green, "Thinking About an Exit?"
2. **The Pitch** - 3 cards: You Want Out, You Want Help, You Want a Partner
3. **What I Look For** - Checklist of criteria (service businesses, $500K-$10M, etc.)
4. **CTA** - "Interested?" with email link (different from main site CTA)

Footer link: "Acquisitions & Partnerships" under Quick Links

---

## Referrals Page

The Referrals page (`/src/app/referrals/page.tsx`) explains the 10% lifetime referral program. NOT linked in main nav - only in footer.

Sections:
1. **Hero** - Dark green, "Know someone who could use our help?" with 10% highlighted (gold Rough Notation underline)
2. **How It Works** - 3 cards: Send an intro, We take it from there, You get paid
3. **That's it.** - Closing section with email CTA button

Footer link: "Referrals" under Quick Links

---

## Proposals (Private)

The Proposals system (`/proposals/[slug]`) is a private, unlisted section for sending scope-of-work documents to clients via direct link.

**Privacy Features**:
- NOT in navigation, footer, or sitemap
- `robots.txt` disallows `/proposals/`
- Pages have `noindex, nofollow` meta tags
- Only accessible via direct URL

**Architecture**:
- `/src/app/proposals/[slug]/page.tsx` - Server component fetching from Strapi
- `/src/app/proposals/[slug]/ProposalContent.tsx` - Client component with PDF generation
- `/src/app/proposals/[slug]/not-found.tsx` - Custom 404 for expired/invalid proposals
- `/src/app/robots.ts` - Robots.txt excluding `/proposals/`

**Page Structure**:
1. **Header** - "Scope of Work" eyebrow, project title, client name
2. **Summary Table** - Client, Consultant, Date, Project Fee, Monthly Hosting, Launch Target
3. **Sections** - Project Summary, Deliverables, What's Included, Not Included, Client Responsibilities, Ownership & Hosting
4. **Payment Schedule** - Table of milestones and amounts
5. **Signatures** - Visual signature lines (not e-signature)
6. **Footer** - Company name and website

**PDF Download**:
- Fixed "Download PDF" button in top-right corner
- Uses `html2canvas-pro` + `jsPDF` for generation
- Filename: `[clientName]-proposal-[date].pdf`

**Strapi Content Type**: See "Proposal Content Type" section below.

---

## Case Studies

### List Page (`/case-studies`)

The Case Studies listing page displays work examples organized by department.

**Architecture**:
- `page.tsx` - Server component that fetches data from Strapi CMS
- `CaseStudiesClient.tsx` - Client component with filters and card grid
- `loading.tsx` - Skeleton UI shown during navigation/loading

**Features**:
- **Department filters**: All, Operations, Sales, Customer Success, Finance, Marketing, HR, Field Services
- **Strapi CMS integration**: Fetches case studies from Strapi Cloud with ISR (60s revalidation)
- **Fallback data**: If Strapi is unavailable, falls back to hardcoded case studies
- **Card links**: Clicking a card navigates to `/case-studies/[slug]` detail page
- **Video badge**: Cards with videos show a "Video" indicator
- **Load More**: Shows 6 case studies initially, with button to load more
- **Page transitions**: Smooth fade-in animation via PageTransition component

### Detail Page (`/case-studies/[slug]`)

Individual case study pages with full content.

**Architecture**:
- `[slug]/page.tsx` - Server component with SEO metadata generation
- `[slug]/CaseStudyContent.tsx` - Client component with video embed and rich text
- `[slug]/loading.tsx` - Skeleton loading state

**Page Structure**:
1. **Hero** - Dark green (`#004D36`) background with decorative blur elements
   - Back link to Case Studies
   - Department tag (glass-style pill)
   - Large title (56px on desktop)
   - Description in light green text
2. **Video** (if exists) - Pulled up with negative margin, shadow/glow effect
   - Auto-detects YouTube/Loom from URL
   - Rounded corners with premium shadow
3. **Problem & Solution** - Side-by-side on desktop
   - Gold accent line for "The Problem" section
   - Green accent line for "What We Built" section
   - Icon badges for visual hierarchy
4. **Results** - Full-width beige background
   - "Measurable Impact" eyebrow text
   - Large stat numbers in monospace font
   - Cards with hover animations (lift + bottom accent line)
5. **CTA** - Dark green section
   - "Got a Similar Challenge?" heading
   - Book a Brainstorm button

**Video URL Detection**:
The detail page auto-detects video type from URL if `videoType` is set to "none":
- YouTube URLs → YouTube embed
- Loom URLs → Loom embed

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

Required environment variables. Create `.env.local` from `.env.example`:

```bash
# Resend.com API key for sending emails
RESEND_API_KEY=re_xxxxxxxx

# Email address to receive form submissions
CONTACT_EMAIL=hello@goodcompany.com

# Strapi CMS URL (optional - has hardcoded fallback)
STRAPI_URL=https://your-strapi-instance.strapiapp.com
```

**Vercel Environment Variables**: Make sure to add `STRAPI_URL` in Vercel project settings and link it to the production deployment.

---

## Strapi CMS

The site uses **Strapi Cloud** as a headless CMS for managing case studies content.

### Architecture

```
good-company-website/          # Next.js frontend (this repo)
├── src/lib/strapi.ts          # Strapi API client
├── src/app/case-studies/
│   ├── page.tsx               # Server component (fetches from Strapi)
│   ├── CaseStudiesClient.tsx  # Client component (UI/interactivity)
│   └── loading.tsx            # Skeleton loading state

good-company-cms/              # Separate repo for Strapi CMS
├── src/api/case-study/        # Case Study content type
└── ... (standard Strapi v5 structure)
```

### Strapi Cloud Dashboard

- **URL**: https://cloud.strapi.io/
- **CMS Admin**: Login via Strapi Cloud dashboard → Open admin panel
- **API Endpoint**: `https://supportive-blessing-06262181b8.strapiapp.com`

### Case Study Content Type

Fields in Strapi:
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | Text | Yes | Case study title |
| slug | UID (from title) | Yes | URL-friendly identifier |
| department | Enumeration | Yes | Operations, Sales, Customer Success, Finance, Marketing, HR, Field Services |
| description | Text (long) | Yes | Brief description |
| problem | Rich Text | No | "The Problem" section content |
| solution | Rich Text | No | "What We Built" section content |
| results | JSON | No | Array of `{ text, stat? }` objects |
| resultsTimeframe | Text | No | Timeframe for results (e.g., "first 60 days") |
| videoUrl | Text | No | YouTube or Loom URL |
| videoType | Enumeration | No | youtube, loom, or none (auto-detected if none) |
| thumbnail | Media (image) | No | Card thumbnail image |
| featured | Boolean | No | Featured case study flag |
| order | Integer | No | Sort order (lower = first) |

**Results format** in Strapi:
```json
[
  { "text": "reduction in reporting time", "stat": "80%" },
  { "text": "at-risk accounts flagged early", "stat": "3" }
]
```

**resultsTimeframe guidance**:
Case study results should always specify a timeframe to demonstrate speed to value. The timeframe appears in the section header as "Results in [timeframe]". Suggested timeframes by system type:
- **Dashboards/reporting**: "first 30 days" (immediate visibility)
- **Workflow automation**: "first 60 days" (process adoption)
- **Performance/incentive systems**: "first 90 days" (behavior change)
- **Complex integrations**: "first 6 months" (full rollout)

### Proposal Content Type

Fields in Strapi:
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| slug | UID | Yes | URL identifier (e.g., "acme-website-2026") |
| clientName | Text | Yes | Client company or person name |
| projectTitle | Text | Yes | Project title for header |
| date | Date | Yes | Proposal date |
| projectFee | Text | No | Total fee (e.g., "$15,000 CAD") |
| monthlyHosting | Text | No | Hosting cost (e.g., "~$20/month") |
| launchTarget | Date | No | Target launch date |
| summary | Rich Text | No | Project summary section |
| deliverables | JSON | No | Array of `{ category, items }` objects |
| whatsIncluded | Rich Text | No | What's included section |
| notIncluded | Rich Text | No | What's not included section |
| clientResponsibilities | Rich Text | No | Client responsibilities section |
| ownershipText | Rich Text | No | Ownership & hosting section |
| paymentMilestones | JSON | No | Array of `{ milestone, amount }` objects |
| signatureClientName | Text | No | Name for client signature line |
| signatureConsultantName | Text | No | Name for consultant signature (default: "Alex Tribe, Good Company") |

**Deliverables format** in Strapi:
```json
[
  { "category": "Design", "items": "<ul><li>Homepage design</li><li>Mobile responsive</li></ul>" },
  { "category": "Development", "items": "<ul><li>Next.js build</li><li>CMS integration</li></ul>" }
]
```

**Payment milestones format** in Strapi:
```json
[
  { "milestone": "Project kickoff", "amount": "$5,000" },
  { "milestone": "Design approval", "amount": "$5,000" },
  { "milestone": "Launch", "amount": "$5,000" }
]
```

### API Permissions

In Strapi Admin → Settings → Roles → Public:
- Enable `find` and `findOne` for Case Study
- Enable `find` and `findOne` for Proposal

### Data Fetching

The `src/lib/strapi.ts` file handles all Strapi API calls:

```typescript
// Fetch all case studies (with ISR caching)
const caseStudies = await getCaseStudies();

// Fetch single case study by slug
const caseStudy = await getCaseStudyBySlug('my-case-study');
```

**Caching**: Uses Next.js ISR with 60-second revalidation (`next: { revalidate: 60 }`).

### Adding/Editing Case Studies

1. Go to Strapi Cloud dashboard
2. Open admin panel
3. Navigate to Content Manager → Case Study
4. Create/edit entry
5. **Important**: Click "Publish" to make it live
6. Changes appear on website within 60 seconds (ISR revalidation)

### Local CMS Development (Optional)

The CMS code is in a separate repo (`good-company-cms`). To run locally:

```bash
cd good-company-cms
npm install
npm run develop
```

Local Strapi runs on `http://localhost:1337`

### Next.js Image Configuration

Strapi Cloud media URLs are configured in `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    { protocol: 'https', hostname: '*.strapiapp.com' },
    { protocol: 'https', hostname: '*.media.strapiapp.com' },
  ],
}
```

This allows Next.js `<Image>` components to load thumbnails from Strapi Cloud.

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
| `src/app/about/loading.tsx` | About page skeleton loading state |
| `src/app/layout.tsx` | Root layout, fonts, SEO metadata |
| `src/app/globals.css` | Tailwind theme, animations, global styles |
| `src/app/case-studies/page.tsx` | Case studies list server component (fetches from Strapi) |
| `src/app/case-studies/CaseStudiesClient.tsx` | Case studies list client component (UI/filters) |
| `src/app/case-studies/loading.tsx` | Case studies list skeleton loading state |
| `src/app/case-studies/[slug]/page.tsx` | Case study detail server component |
| `src/app/case-studies/[slug]/CaseStudyContent.tsx` | Case study detail client component (video/content) |
| `src/app/case-studies/[slug]/loading.tsx` | Case study detail skeleton loading state |
| `src/app/acquisitions/page.tsx` | Acquisitions & partnerships page |
| `src/app/referrals/page.tsx` | Referrals program page |
| `src/app/proposals/[slug]/page.tsx` | Proposal page server component (private, unlisted) |
| `src/app/proposals/[slug]/ProposalContent.tsx` | Proposal client component with PDF download |
| `src/app/robots.ts` | Robots.txt (disallows /proposals/) |
| `src/app/api/contact/route.ts` | Contact form API endpoint |
| `src/lib/strapi.ts` | Strapi CMS API client |
| `src/components/Header.tsx` | Navigation (adapts to dark hero) |
| `src/components/Button.tsx` | CTA button styles (including hero variant) |
| `src/components/WhatWeBuildSection.tsx` | Services with dynamic backgrounds |
| `src/components/ProblemsSectionWrapper.tsx` | Problems with dynamic backgrounds |
| `src/components/TestimonialsCarousel.tsx` | Testimonials carousel with navigation |
| `src/components/InvestmentSection.tsx` | Pricing section with collapsible Discovery & Automation Roadmap |
| `src/components/RoughAnnotation.tsx` | Rough notation wrapper |
| `src/components/PageTransition.tsx` | Page navigation fade-in animations |
| `src/components/ScrollReveal.tsx` | Scroll-triggered animations |

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
- **No em dashes** (—) in copy - use commas or reword instead

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
