# AuraLabs - Complete Project Overview

A production-ready Next.js 14 digital agency website for Australian small-to-medium businesses.

## 📋 Project Summary

This is a fully functional, deployable Next.js 14 website that includes:
- **6 Pages**: Home, About, Services, Portfolio, Process, Contact
- **8 Section Components**: Hero, Services, Why Us, Process, Case Studies, Testimonials, CTA, Trust Badges
- **4 Global Components**: Navbar, Footer, Book Call Button, Mobile Bottom Bar
- **Complete Contact Form**: With validation using React Hook Form
- **Calendly Integration**: One-click booking popup on every page
- **Mobile-First Design**: Fully responsive with Tailwind CSS
- **Smooth Animations**: Subtle Framer Motion effects
- **SEO Optimized**: Metadata API, structured data, semantic HTML
- **Vercel Ready**: Zero-config deployment

## 🎯 Target Audience

Australian small-to-medium businesses that need:
- WordPress & Shopify website development
- SEO services
- AI automation (chatbots, workflow automation)
- A trustworthy, local-feeling agency partner

## 📁 Project Structure

```
auralabs/
├── app/                          # Next.js App Router
│   ├── about/page.js            # About page
│   ├── contact/page.js          # Contact form & booking
│   ├── services/page.js         # Services detail page
│   ├── portfolio/page.js        # Case studies & portfolio
│   ├── process/page.js          # Our process timeline
│   ├── page.js                  # Home page
│   ├── layout.js                # Root layout + Calendly script
│   ├── globals.css              # Global styles & components
│   ├── error.js                 # Error boundary
│   ├── not-found.js            # 404 page
│   └── global-not-found.js      # Root 404 fallback
│
├── components/                   # Reusable React components
│   ├── Navbar.jsx              # Navigation with mobile menu
│   ├── Footer.jsx              # Footer with links & social
│   ├── BookCallButton.jsx       # Calendly popup trigger
│   ├── MobileBottomBar.jsx      # Mobile sticky CTA
│   └── sections/                # Section components
│       ├── Hero.jsx            # Homepage hero section
│       ├── ServicesOverview.jsx # 4 service cards
│       ├── WhyUs.jsx           # Why choose us section
│       ├── ProcessPreview.jsx   # 4-step process timeline
│       ├── CaseStudiesPreview.jsx # Featured case studies
│       ├── Testimonials.jsx     # Client testimonials
│       ├── CalendlyCTA.jsx      # CTA with booking
│       └── TrustBadges.jsx      # Trust/credibility badges
│
├── public/                       # Static assets
│   └── README.md                # Instructions for adding images
│
├── Configuration Files
│   ├── package.json             # Dependencies
│   ├── next.config.js           # Next.js configuration
│   ├── tailwind.config.js       # Tailwind CSS theme
│   ├── postcss.config.js        # PostCSS config
│   ├── .eslintrc.json           # ESLint config
│   ├── vercel.json              # Vercel deployment config
│   ├── .gitignore               # Git ignore rules
│   └── .env.example             # Environment variables template
│
├── Documentation
│   ├── README.md                # Project overview & setup
│   ├── QUICKSTART.md            # Quick start checklist
│   ├── CUSTOMIZATION.md         # How to customize everything
│   ├── DEPLOYMENT.md            # Deployment instructions
│   └── PROJECT_OVERVIEW.md      # This file
```

## 🚀 Key Features

### Pages & Routes

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.js` | Homepage with hero, services, CTA |
| `/about` | `app/about/page.js` | Team, story, why work with us |
| `/services` | `app/services/page.js` | Detailed service descriptions |
| `/portfolio` | `app/portfolio/page.js` | Case studies with metrics |
| `/process` | `app/process/page.js` | 7-step process timeline |
| `/contact` | `app/contact/page.js` | Contact form + Calendly embed |

### Components Architecture

**Global Components** (used across multiple pages):
- `Navbar` - Sticky navigation with hamburger menu
- `Footer` - Links, contact info, social media
- `BookCallButton` - Triggers Calendly popup
- `MobileBottomBar` - Fixed CTA button on mobile

**Section Components** (reusable across pages):
- `Hero` - Large headline, subheading, CTA
- `ServicesOverview` - 4 service cards with icons
- `WhyUs` - 3 key differentiators
- `ProcessPreview` - 4-step process overview
- `CaseStudiesPreview` - Featured case studies
- `Testimonials` - Client testimonial cards
- `CalendlyCTA` - Call-to-action with booking
- `TrustBadges` - Credibility indicators

### Design System

**Colors** (defined in `tailwind.config.js`):
- Primary Brand: `#1A56DB` (deep blue)
- Dark Brand: `#1446B8` (hover state)
- Light Background: `#F8F9FA`
- Text Primary: `#111827` (dark gray)
- Text Secondary: `#6B7280` (medium gray)
- Border: `#E5E7EB` (light gray)

**Typography**:
- Font: Inter (via `next/font/google`)
- H1: `text-5xl md:text-6xl font-bold`
- H2: `text-4xl font-semibold`
- H3: `text-2xl font-semibold`
- Body: `text-base leading-relaxed`

**Spacing & Layout**:
- Section padding: `py-24` (96px top/bottom)
- Card padding: `p-8` (32px all sides)
- Max width: `max-w-7xl` (80rem)
- Border radius: `rounded-2xl` (cards), `rounded-lg` (buttons)

**Button Styles**:
- Primary: `.btn-primary` - Solid blue button
- Secondary: `.btn-secondary` - Bordered blue button
- Outline: `.btn-outline` - Bordered gray button

**Card Style**:
- `.card` - Standard card with border and shadow
- `.card-hover` - Adds hover effects (scale, border color)

### Animations

All animations use Framer Motion with:
- Fade-in on scroll (viewport: { once: true })
- Subtle Y-translate (20px)
- Smooth transitions (0.4-0.6s)
- Hover scale effects (1.02)
- Staggered children animations

Example:
```javascript
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
```

### Forms

Contact form (`app/contact/page.js`):
- Built with React Hook Form (high performance)
- Real-time validation
- Fields: Name, Email, Business Name, Service (dropdown), Message
- Success feedback message
- Ready for backend integration

### Integrations

**Calendly**:
- Script loaded in `layout.js`
- Popup triggered by "Book a Call" buttons
- URL configured via `NEXT_PUBLIC_CALENDLY_URL`
- Inline embed available on contact page

**WhatsApp**:
- Direct message button on contact page
- Number configured via `NEXT_PUBLIC_WHATSAPP_NUMBER`

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| Next.js | React framework + routing | 14.0+ |
| React | UI library | 18.2+ |
| TypeScript | Type safety | (optional) |
| Tailwind CSS | Styling | 3.3+ |
| Framer Motion | Animations | 10.16+ |
| React Hook Form | Form handling | 7.48+ |
| Lucide React | Icons | 0.292+ |
| Next.js Font | Font optimization | included |

## 📝 Key Files Explained

### app/layout.js
- Root layout for all pages
- Loads Inter font via `next/font/google`
- Loads Calendly script globally
- Sets up metadata for homepage
- Wraps app with Navbar, Footer, MobileBottomBar

### app/globals.css
- Tailwind imports
- Custom CSS components:
  - `.container-custom` - Max-width wrapper
  - `.section-padding` - Standard section spacing
  - `.btn-*` - Button styles
  - `.card` - Card component style

### tailwind.config.js
- Extends default Tailwind config
- Custom colors for brand
- Custom fonts via CSS variables
- Reusable component classes

### components/Navbar.jsx
- Sticky navigation
- Mobile hamburger menu (hidden on desktop)
- Links to all pages
- Book Call button
- Responsive design with Tailwind breakpoints

### components/sections/Hero.jsx
- Large headline with accent color
- Subheading with trust message
- Two CTA buttons (primary + secondary)
- Trust badges section (4 items)
- Subtle background blur effect

## 🎨 Customization Guide

See `CUSTOMIZATION.md` for detailed instructions on:
- Updating agency name & branding
- Changing colors
- Adding team members
- Updating services
- Adding case studies
- Customizing testimonials
- Changing process steps
- Updating contact info
- Adding images

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_CALENDLY_URL`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
4. Deploy (auto on push)

See `DEPLOYMENT.md` for:
- Step-by-step Vercel deployment
- Alternative hosting (Netlify, AWS, DigitalOcean, etc.)
- Post-deployment setup
- Email form handling
- Domain configuration

## 📊 Performance

Expected metrics:
- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

Optimizations included:
- Next.js image optimization
- Font optimization via `next/font`
- CSS minification with Tailwind
- Code splitting and lazy loading
- Minimal JavaScript bundle

## 🔍 SEO Features

- Metadata API on every page
- Semantic HTML structure
- Open Graph tags for social sharing
- Mobile-friendly responsive design
- Fast page load times
- Accessible color contrast
- Proper heading hierarchy
- Alt text support for images

## 📱 Responsive Design

Mobile-first approach using Tailwind breakpoints:
- `sm`: 640px (mobile landscape)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (large desktop)

Features:
- Hamburger menu on mobile
- Sticky bottom CTA on mobile
- Stack layout on small screens
- Grid layouts on larger screens

## 🔐 Security

Built-in security features:
- Environment variables for sensitive data
- No hardcoded API keys
- HTTPS/SSL ready
- Security headers in `next.config.js`
- Input validation in forms

## 🧪 Testing

To test locally:

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Update .env.local with your values

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Test checklist:
- All pages load without errors
- Navigation works
- Forms validate
- Calendly popup opens
- Mobile menu works
- Images load
- No console errors
- Responsive on mobile

## 📚 Documentation

- `README.md` - Project setup and overview
- `QUICKSTART.md` - Launch checklist
- `CUSTOMIZATION.md` - How to update everything
- `DEPLOYMENT.md` - Deployment guides
- Code comments - Technical explanations

## 🎯 Next Steps

1. **Review**: Read through this file and `README.md`
2. **Customize**: Follow `CUSTOMIZATION.md` to update content
3. **Test**: Run `npm run dev` and test all pages
4. **Deploy**: Follow `DEPLOYMENT.md` for Vercel setup
5. **Monitor**: Set up analytics and track metrics

## 💡 Pro Tips

- Use `.env.local` for sensitive data (never commit)
- Add team photos to `/public/images/team/`
- Update metadata on each page for SEO
- Test contact form with real email service before launch
- Monitor Vercel Analytics for traffic patterns
- Update case studies monthly with new work
- Refresh testimonials as you gain new clients

## 🐛 Troubleshooting

### Common Issues

**Issue**: "Module not found" error
- **Solution**: Run `npm install` again

**Issue**: Calendly popup won't open
- **Solution**: Check `.env.local` has correct `NEXT_PUBLIC_CALENDLY_URL`

**Issue**: Styles not applying
- **Solution**: Tailwind classes need to be in template strings, check class names

**Issue**: Build fails on Vercel
- **Solution**: Check environment variables are set in Vercel dashboard

**Issue**: Images not showing
- **Solution**: Verify image path in `/public/` folder and check alt text

## 📞 Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Hook Form Docs](https://react-hook-form.com/)
- [Vercel Support](https://vercel.com/support)

## 📄 License

All code and design patterns are provided for use in your business.

---

## Summary Statistics

| Metric | Count |
|--------|-------|
| Total Pages | 6 |
| Total Components | 12 |
| Total Files | 40+ |
| Lines of Code | 3000+ |
| Dependencies | 6 main |
| Mobile Responsive | ✅ Yes |
| SEO Optimized | ✅ Yes |
| Production Ready | ✅ Yes |
| Vercel Ready | ✅ Yes |
| Time to Deploy | ~5 minutes |

---

**Created**: May 2026  
**Framework**: Next.js 14 (App Router)  
**Target**: Australian SMBs  
**Status**: Production Ready ✅

For quick setup, start with `QUICKSTART.md`  
For detailed customization, see `CUSTOMIZATION.md`  
For deployment help, see `DEPLOYMENT.md`
