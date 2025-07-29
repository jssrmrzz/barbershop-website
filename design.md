# design.md

# Barbershop Website Design System

## Brand Identity
- **Aesthetic**: Modern, clean, professional barbershop vibe
- **Target Audience**: Local community, working professionals, style-conscious customers
- **Brand Personality**: Trustworthy, skilled, contemporary, approachable

## Color Palette
- **Primary**: Deep charcoal or rich black (#1a1a1a, #000000)
- **Secondary**: Warm gold or brass accent (#d4af37, #b8860b)
- **Neutral**: Light grays for backgrounds (#f5f5f5, #e5e5e5)
- **Text**: Dark gray for readability (#333333, #666666)
- **Background**: Clean white (#ffffff) and off-white (#fafafa)

## Typography
- **Primary Font**: Modern sans-serif (Inter, Poppins, or system fonts)
- **Heading Font**: Bold, clean sans-serif for impact
- **Body Text**: Readable, professional font at 16px+ base size
- **Font Weights**: Regular (400), Medium (500), Bold (700)

## Layout & Spacing
- **Grid System**: Mobile-first responsive design
- **Breakpoints**: 
  - Mobile: 320px-768px
  - Tablet: 768px-1024px  
  - Desktop: 1024px+
- **Spacing Scale**: 4px, 8px, 16px, 24px, 32px, 48px, 64px
- **Container Max Width**: 1200px for desktop content

## Component Design

### Hero Section
- Full-width background image or video
- Centered content with barbershop name
- Clear, compelling tagline
- Prominent booking CTA button
- Overlay for text readability

### Navigation
- Clean, minimal header
- Sticky navigation on scroll
- Mobile hamburger menu
- Clear visual hierarchy

### Buttons & CTAs
- **Primary Button**: Gold/brass background with dark text
- **Secondary Button**: Outlined style with hover effects
- **Size**: Generous padding for mobile touch targets
- **States**: Hover, active, and focus styles

### Cards & Sections
- **Service Cards**: Clean borders, consistent spacing
- **Testimonial Cards**: Subtle shadows, quote styling
- **Content Sections**: Clear separation with whitespace

### Icons & Imagery
- **Icons**: Lucide or Heroicons in consistent style
- **Service Icons**: Scissors, razor, comb, beard trimmer
- **Image Style**: Professional, high-quality photos
- **Image Treatment**: Consistent aspect ratios and filters

## Mobile-First Approach
- Touch-friendly button sizes (44px minimum)
- Readable text without zooming
- Fast loading images and assets
- Simplified navigation for mobile

## Accessibility
- **Color Contrast**: WCAG AA compliant ratios
- **Focus States**: Clear keyboard navigation
- **Alt Text**: Descriptive image alternatives
- **Semantic HTML**: Proper heading hierarchy

## Animation & Interactions
- **Subtle Transitions**: 200-300ms easing
- **Hover Effects**: Color changes, subtle transforms
- **Scroll Animations**: Optional fade-ins and parallax
- **Loading States**: Smooth content loading

## Page-Specific Design

### Homepage Layout
1. Hero section with booking CTA
2. Services preview with "View All" link
3. About section with team photo
4. Hours and location information
5. Customer testimonials
6. Contact information and map

### Services Page Layout
- Service grid with pricing
- Clear service descriptions
- Booking CTA for each service
- Professional service imagery

### Contact Page Layout
- Split layout: form and business info
- Embedded map
- Social media links
- Clear contact hierarchy

## Content Guidelines
- **Headlines**: Clear, benefit-focused
- **Copy**: Conversational but professional tone
- **CTAs**: Action-oriented language ("Book Now", "Call Today")
- **Business Info**: Prominent, easy to find

## Performance Considerations
- **Image Optimization**: WebP format, proper sizing
- **Font Loading**: System fonts or optimized web fonts  
- **CSS**: Minimal, utility-first approach with Tailwind
- **JavaScript**: Minimal client-side code with Astro