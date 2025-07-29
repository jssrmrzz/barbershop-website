# requirements.md

# Barbershop Website Requirements

## Project Overview
Design and build a fast, modern, mobile-responsive website for a local barbershop. The site must provide essential business info, build trust with visitors, and support local SEO efforts. The solution should be lightweight, easy to maintain, and easy to replicate for similar small business clients.

---

## Core Features

### 1. Homepage
- Hero section with barbershop name, tagline, and call-to-action (CTA)
- Booking button or contact link
- Hours of operation (with visual clarity)
- Address and map embed (Google Maps)
- Brief "About Us" summary with shop photo or team picture

### 2. Services Page
- List of common services (haircut, fade, beard trim, etc.)
- Clear pricing for each service
- Optional service descriptions

### 3. FAQ Section
- Common customer questions (walk-ins, payments, parking, cancellations)
- Expandable/collapsible accordion layout
- Use schema markup for SEO rich snippets (optional for v1)

### 4. Reviews Section
- Highlight 2–4 real or placeholder customer testimonials
- Include reviewer name (or initials), quote, and optional photo/avatar
- Optional: link to Google Review profile

### 5. Contact Page
- Address + phone number (clickable on mobile)
- Embedded map
- Optional: contact form (Netlify Forms or Formspree)
- Links to social media if applicable

---

## Design Requirements
- Clean, professional aesthetic
- Fully responsive for mobile, tablet, and desktop
- Font pairing and color scheme that fit the brand (modern barbershop vibe)
- Icons for services or features (Lucide or similar)
- Consistent layout, spacing, and CTA hierarchy

---

## Technical Requirements

### Frontend
- Astro (latest stable)
- Tailwind CSS for styling
- Lucide Icons or Heroicons
- Markdown for services/FAQ content (to support easy reuse)

### Hosting & Deployment
- Deploy to Netlify or Vercel (CI/CD setup)
- Use custom domain or test domain
- Set up SEO meta tags and Open Graph tags per page

### Performance & SEO
- Pass Google Lighthouse with 90+ on mobile and desktop
- Use semantic HTML5 elements
- Include page titles, descriptions, and alt text
- Add structured data (JSON-LD) for Local Business schema (optional for v1)

---

## Content Requirements
- Photos of shop interior/exterior or team (placeholder acceptable for demo)
- Actual or placeholder text for all services, FAQ, testimonials
- Accurate business name, phone, address, hours
- Booking URL (can be external like Booksy or Square)

---

## MVP Scope
- Static content site (no backend or CMS for now)
- All core pages: Home, Services, FAQ, Contact
- Pre-built with placeholder or demo content
- Deploy to production via Netlify or Vercel

---

## Future Enhancements (Not Required for MVP)
- Google Reviews API integration
- CMS editing for text/images (TinaCMS, Sanity)
- Online booking widget embed
- Animated hero or subtle transitions
- Form handling with spam protection (Netlify Forms, hCaptcha)
- Analytics setup (Plausible, Google Analytics)

---

## Success Criteria
- The site loads fast (<1s initial render)
- Pages are easy to navigate and mobile-friendly
- SEO best practices are implemented
- Design feels clean and professional
- Info is accessible and easy to update by the developer
- Project is reusable for other local businesses