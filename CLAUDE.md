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
- `/src/app/case-studies/page.tsx` - Case studies listing
- `/src/app/api/contact/route.ts` - Contact form API
- `/src/app/globals.css` - Global styles and Tailwind theme
- `/src/app/layout.tsx` - Root layout with fonts and metadata

---

## Design System

### Color Palette (Pin-inspired)

All colors are defined in `/src/app/globals.css` under `@theme inline`:

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Primary Green | `#006747` | `text-primary`, `bg-primary` | CTAs, accents, links |
| Light Green | `#2D8659` | `text-primary-light`, `bg-primary-light` | Hover states |
| Cream | `#E8E3DB` | `bg-cream` | Alternating section backgrounds (warm beige) |
| Dark | `#3D3D3D` | `text-dark`, `bg-dark` | Headings (warm dark gray) |
| Gold | `#B8860B` | `text-gold`, `bg-gold` | Prices, key metrics, accents |
| Text | `#3D3D3D` | `text-text` | Body text |
| Text Light | `#6B6B6B` | `text-text-light` | Secondary text, descriptions |
| Border | `#D4CFC7` | `border-border` | Card borders, dividers (subtle beige) |

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
- **Section vertical padding**: `py-20 lg:py-28` (standard), `py-24 lg:py-32` (hero/CTA)
- **Card padding**: `p-8` or `p-10`
- **Grid gaps**: `gap-8` (cards), `gap-6` (smaller items)

### Section Pattern

Sections alternate between white and cream backgrounds:
```tsx
{/* White background */}
<section className="py-20 lg:py-28">
  <div className="mx-auto max-w-7xl px-6 lg:px-10">
    {/* content */}
  </div>
</section>

{/* Cream background with film grain texture */}
<section className="bg-cream-textured py-20 lg:py-28">
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
- `nav-link` - Navigation links with animated gold underline on hover
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
├── Header.tsx          # Site navigation
├── Footer.tsx          # Site footer
├── Button.tsx          # CTA buttons
├── Card.tsx            # Card variants
├── ContactForm.tsx     # Contact form with validation
├── ProblemSelector.tsx # Interactive split-screen problem selector
└── index.ts            # Barrel exports
```

### Import Pattern

Always import from the barrel file:
```tsx
import { Header, Footer, Button, ServiceCard, ProblemSelector } from "@/components";
```

### Component Details

#### Header (`Header.tsx`)
- Fixed navigation that starts transparent, transitions to white bar on scroll
- Smooth 500ms transition with subtle shadow and backdrop blur when scrolled
- Compact height (h-16 / 64px)
- Mobile hamburger menu (slides down)
- Nav links use `nav-link` class with animated gold underline on hover
- Logo has easter egg: triple-click triggers wiggle animation
- Logo turns green on hover

#### Footer (`Footer.tsx`)
- Simple centered footer with copyright
- Auto-updates year

#### Button (`Button.tsx`)
Props:
- `href: string` - Link destination
- `variant: "primary" | "secondary" | "outline"` - Style variant
- `className?: string` - Additional classes

```tsx
<Button href="#contact">Book a Discovery Call</Button>
<Button href="/case-studies" variant="outline">View Case Studies</Button>
```

#### Card Components (`Card.tsx`)

**Base Card**:
```tsx
<Card hover={true}>Content</Card>
```

**ServiceCard** - For service offerings (What We Build section):
```tsx
<ServiceCard
  title="Work Automation"
  description="Main description text"
  example="Single example use case"
  impact="5-10 hours per person per week reclaimed"
  supportingText="Additional context"
/>
```
The card displays with "Typical Impact" badge prominently featured.

**InvestmentCard** - For pricing:
```tsx
<InvestmentCard
  title="Full Build"
  price="$15-25K"
  note="Minus $5K credit if you did Discovery"
  description="What's included"
  payback="Typical payback: 3-6 months"
  featured={true}  // Adds green border highlight
/>
```

#### ContactForm (`ContactForm.tsx`)
- Client component with form validation
- Submits to `/api/contact`
- Shows success/error states
- Fields: name, email, company, companySize, message

---

## Homepage Structure

The homepage (`/src/app/page.tsx`) follows this section order:

| # | Section | Background | ID |
|---|---------|------------|-----|
| 1 | Hero (with pennant logo) | white | - |
| 2 | Problems We Solve (with stats lead-in) | cream | - |
| 3 | What We Build | white | `#solutions` |
| 4 | Why Our Systems Get Used | cream | - |
| 5 | Testimonials | white | - |
| 6 | Investment | cream | `#investment` |
| 7 | Final CTA | white | `#contact` |
| 8 | Contact Form | cream | `#contact-form` |

### Problems We Solve Section

This section uses an **interactive split-screen layout** (similar to Pin's product page):

**Stats Bar** (above the split-screen):
Horizontal strip with 3 stats in a white card with dividers:
| Label | Stat |
|-------|------|
| TIME SAVED | Cut reporting time 80% in 4 weeks |
| TIME SAVED | 40 hours/week of status updates automated |
| MONEY PROTECTED | Flagged 3 at-risk accounts before they churned |

**Interactive Split-Screen** (`ProblemSelector` component):
- **Left side (40%)**: Clickable list of 6 problems with headline + brief description
- **Right side (60%)**: Detailed content for selected problem (What we find, What we build, Result)
- First problem selected by default
- Green left border indicates active selection
- Smooth fade transitions between selections

**Mobile**: Horizontal scrollable pill tabs at top, content below

**Component location**: `/src/components/ProblemSelector.tsx`

**Current problems** (in order):
1. The Reporting Treadmill - Manual data gathering
2. The "Are We Profitable?" Problem - Margin visibility issues
3. The "It's All in Their Head" Problem - Undocumented tribal knowledge
4. The Invisible Work - Hidden employee workloads
5. The Fire Drill Culture - Constant emergencies
6. The Coordination Tax - Meeting overhead

### Why Our Systems Get Used Section

Explains why implementations stick with 3 pillars matching the What We Build section:
- **Automation** - Systems that run themselves reduce adoption burden
- **Visibility** - If people aren't using it, we know immediately
- **Accountability** - Clear metrics mean clear expectations

---

## Development Guidelines

### Adding a New Section

1. Add section to `/src/app/page.tsx` in the `<main>` element
2. Follow the alternating background pattern (white/cream)
3. Use consistent container and padding classes
4. Add `id` attribute for anchor links if needed

Example:
```tsx
{/* New Section */}
<section id="new-section" className="bg-cream py-20 lg:py-28">
  <div className="mx-auto max-w-7xl px-6 lg:px-10">
    <h2 className="mb-6 text-3xl font-bold tracking-tight text-dark md:text-4xl lg:text-5xl">
      Section Title
    </h2>
    <p className="mb-12 text-xl text-text-light">
      Section intro text
    </p>
    {/* Section content */}
  </div>
</section>
```

### Adding Navigation Links

Update `navLinks` array in `/src/components/Header.tsx`:
```tsx
const navLinks = [
  { href: "#solutions", label: "Solutions" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "#new-section", label: "New Section" },  // Add here
  { href: "#contact", label: "Contact" },
];
```

### Creating New Components

1. Create file in `/src/components/`
2. Export from `/src/components/index.ts`
3. Use TypeScript interfaces for props
4. Follow existing naming conventions

---

## Common Tasks

### Updating Testimonials

In `/src/app/page.tsx`, find the `{/* Testimonials */}` section. Each testimonial card follows this structure:

```tsx
<div className="grid overflow-hidden rounded-xl border border-border bg-white md:grid-cols-[200px_1fr]">
  {/* Gradient color block - change colors as needed */}
  <div className="hidden bg-gradient-to-br from-violet-500 to-purple-600 md:block" />
  <div className="p-10">
    <p className="mb-8 text-lg leading-relaxed text-text">
      "Quote text here"
    </p>
    <div>
      <h4 className="text-lg font-semibold text-dark">Client Name</h4>
      <p className="text-text-light">Role, Company</p>
    </div>
  </div>
</div>
```

Replace `[CLIENT NAME]`, `[ROLE]`, `[COMPANY]` placeholders with real data.

### Updating Services

Services are in the `{/* What We Build */}` section. Modify the `ServiceCard` components:

```tsx
<ServiceCard
  title="Service Name"
  description="What this service does"
  example="Example use case"
  impact="Typical impact metric"
  supportingText="Why this matters"
/>
```

**Current services** (What We Build):
1. Work Automation - 5-10 hours per person per week reclaimed
2. Real-Time Visibility - 10+ hours/week saved on reporting
3. Evidence-Based Accountability - 10-20% productivity improvement

### Updating Pricing

The Investment section has two parts:

**1. Discovery Workshop** (standalone tier):
- $6K one-time
- $5K credit toward partnership if they proceed

**2. Monthly Partnerships** (3 tiers):

| Tier | Price | Hours/Week |
|------|-------|------------|
| Starter | $4,000/mo | 4 hours |
| Standard (featured) | $10,000/mo | 10 hours |
| Premium | $18,000/mo | 20 hours |

All partnerships have a 4-month minimum commitment.

**ICP note** appears centered above pricing: "For $1M-$50M companies with 10-200 employees"

### Updating ROI Calculator

The ROI example is an array of stats in the Investment section:
```tsx
{[
  { label: "Current capacity", value: "1,000hrs" },
  { label: "Additional capacity", value: "200hrs" },
  // ... modify values as needed
].map((stat, index) => (
  // rendered stats
))}
```

### Adding Case Studies

In `/src/app/case-studies/page.tsx`, modify the `placeholderCaseStudies` array:

```tsx
const placeholderCaseStudies = [
  {
    industry: "Industry Name",
    challenge: "Problem statement",
    results: ["Result 1", "Result 2", "Result 3"],
    gradient: "from-blue-500 to-indigo-600",  // Tailwind gradient classes
  },
  // Add more...
];
```

### Adding Logo

1. Place logo file at `/public/images/logos/script-inline.png`
2. Update `/src/components/Header.tsx`:

```tsx
// Replace the text span:
<span className="text-xl font-bold text-dark">Good Company</span>

// With the Image component:
<Image
  src="/images/logos/script-inline.png"
  alt="Good Company"
  width={180}
  height={40}
  className="h-8 w-auto"
  priority
/>
```

The Image import is already in the file.

---

## Environment Variables

Required for contact form functionality. Create `.env.local` from `.env.example`:

```bash
# Resend.com API key for sending emails
RESEND_API_KEY=re_xxxxxxxx

# Email address to receive form submissions
CONTACT_EMAIL=hello@goodcompany.com
```

**Without these variables**: Form submissions are logged to console (useful for development).

**With these variables**: Submissions are emailed via Resend API.

---

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
4. Deploy (auto-deploys on push to main)

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

### Pre-deployment Checklist

- [ ] Logo files added to `/public/images/logos/`
- [ ] Testimonials updated with real client data
- [ ] Contact form tested (check email delivery)
- [ ] All placeholder `[CLIENT NAME]` text replaced
- [ ] Meta descriptions updated in `/src/app/layout.tsx`
- [ ] Favicon updated (replace `/src/app/favicon.ico`)

---

## File Reference

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Homepage - all main content sections |
| `src/app/layout.tsx` | Root layout, fonts, SEO metadata |
| `src/app/globals.css` | Tailwind theme, animations, global styles |
| `src/app/case-studies/page.tsx` | Case studies page |
| `src/app/api/contact/route.ts` | Contact form API endpoint |
| `src/components/Header.tsx` | Navigation (edit nav links here) |
| `src/components/Footer.tsx` | Footer content |
| `src/components/Button.tsx` | CTA button styles |
| `src/components/Card.tsx` | All card component variants |
| `src/components/ContactForm.tsx` | Form logic and validation |
| `.env.example` | Environment variable template |

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
1. Work Automation
2. Real-Time Visibility
3. Evidence-Based Accountability

---

## Troubleshooting

**Colors not applying**: Ensure you're using the Tailwind classes defined in globals.css (e.g., `text-primary` not `text-green-700`).

**Fonts not loading**: Check that the font imports in `layout.tsx` haven't been modified.

**Contact form not sending**: Verify `RESEND_API_KEY` and `CONTACT_EMAIL` are set in `.env.local` (development) or Vercel environment variables (production).

**Build errors**: Run `npm run lint` to check for TypeScript/ESLint issues.

**Smooth scrolling not working**: Ensure anchor links start with `#` and target elements have matching `id` attributes.
