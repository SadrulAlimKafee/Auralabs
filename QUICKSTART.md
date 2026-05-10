# Quick Start Checklist

Use this checklist to get your AuraLabs website live in minutes.

## Before Launch (Do These First)

### 1. Setup & Installation
- [ ] Clone/download the project
- [ ] Run `npm install`
- [ ] Copy `.env.example` to `.env.local`
- [ ] Fill in `.env.local` with your details:
  - [ ] `NEXT_PUBLIC_CALENDLY_URL` - Your Calendly booking link
  - [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` - Your WhatsApp number (e.g., +61400000000)

### 2. Basic Information
- [ ] [ ] Update site name in `app/layout.js` metadata
- [ ] [ ] Update company name in `components/Navbar.jsx`
- [ ] [ ] Update footer email in `components/Footer.jsx`
- [ ] [ ] Update contact email in `app/contact/page.js`

### 3. Brand & Design
- [ ] [ ] Update primary color in `tailwind.config.js` (find `brand.blue`)
- [ ] [ ] Add logo to `Navbar.jsx` (replace text logo with image)
- [ ] [ ] Add favicon to `/public/favicon.ico`
- [ ] [ ] Update social media links in `Footer.jsx`

### 4. Content - Most Important!
- [ ] [ ] **About Page** - Update founder story and team bios in `app/about/page.js`
- [ ] [ ] **Services** - Update your services in `app/services/page.js`
- [ ] [ ] **Services Overview** - Update 4 service cards in `components/sections/ServicesOverview.jsx`
- [ ] [ ] **Case Studies** - Add your case studies in `app/portfolio/page.js`
- [ ] [ ] **Testimonials** - Add client testimonials in `components/sections/Testimonials.jsx`
- [ ] [ ] **Process** - Update your process steps in `app/process/page.js`
- [ ] [ ] **Hero Section** - Update main headline and subheading in `components/sections/Hero.jsx`
- [ ] [ ] **Why Us** - Update your key differentiators in `components/sections/WhyUs.jsx`

### 5. Trust & Social Proof
- [ ] [ ] Update trust badges in `components/sections/TrustBadges.jsx`
- [ ] [ ] Add team member photos to `/public/images/team/`
- [ ] [ ] Update team member names and roles in `app/about/page.js`

### 6. Images & Media
- [ ] [ ] Add case study images to `/public/images/`
- [ ] [ ] Add team photos to `/public/images/team/`
- [ ] [ ] Add service/hero images if desired

### 7. SEO
- [ ] [ ] Update metadata on all pages (title, description)
- [ ] [ ] Update Open Graph images for social sharing
- [ ] [ ] Create Open Graph image (1200x630px) and add to `/public/`

### 8. Testing
- [ ] [ ] Run `npm run dev` and test locally
- [ ] [ ] Test on mobile device (use browser dev tools)
- [ ] [ ] Click all navigation links
- [ ] [ ] Test Calendly popup (click "Book a Call")
- [ ] [ ] Test contact form submission
- [ ] [ ] Test WhatsApp button
- [ ] [ ] Check Lighthouse score (`npm run build` then check in browser)

### 9. Deployment Setup
- [ ] [ ] Create GitHub repository
- [ ] [ ] Push code to GitHub
- [ ] [ ] Create Vercel account (https://vercel.com)
- [ ] [ ] Import GitHub repo to Vercel
- [ ] [ ] Add environment variables in Vercel settings
- [ ] [ ] Configure custom domain in Vercel
- [ ] [ ] Update DNS records (if using custom domain)
- [ ] [ ] Enable SSL certificate (Vercel does this automatically)

### 10. Post-Launch
- [ ] [ ] Test live website (not just localhost)
- [ ] [ ] Set up Google Analytics (optional but recommended)
- [ ] [ ] Submit sitemap to Google Search Console
- [ ] [ ] Configure contact form email handling
- [ ] [ ] Set up email notifications for form submissions
- [ ] [ ] Monitor performance with Vercel Analytics

## File-by-File Customization Checklist

### Essential Files (MUST Update)

- [ ] `.env.local`
  - Calendly URL
  - WhatsApp number

- [ ] `app/layout.js`
  - Site title
  - Site description
  - Open Graph settings

- [ ] `components/Navbar.jsx`
  - Company logo

- [ ] `components/Footer.jsx`
  - Email address
  - Social links

- [ ] `app/about/page.js`
  - Founder story
  - Team member names, roles, bios
  - Work philosophy
  - Why offshore section

- [ ] `app/services/page.js`
  - All 4 service descriptions
  - Pain points
  - Deliverables
  - Pricing

- [ ] `app/portfolio/page.js`
  - Case study details
  - Client names and locations
  - Results and metrics

- [ ] `app/process/page.js`
  - Your actual process steps
  - Timeline for each step
  - Deliverables per step

- [ ] `components/sections/Hero.jsx`
  - Main headline
  - Subheadline
  - Hero image (if using)

- [ ] `components/sections/ServicesOverview.jsx`
  - 4 main services and descriptions

- [ ] `components/sections/WhyUs.jsx`
  - 3 reasons to work with you

- [ ] `components/sections/Testimonials.jsx`
  - 2-3 client testimonials

- [ ] `components/sections/CaseStudiesPreview.jsx`
  - 3 featured case studies for homepage

### Nice-to-Have (Optional)

- [ ] `tailwind.config.js`
  - Custom color scheme

- [ ] Images in `/public/images/`
  - Hero background
  - Case study images
  - Team photos

- [ ] `app/contact/page.js`
  - Email service configuration

- [ ] Analytics setup
  - Google Analytics
  - Vercel Analytics

## Common Mistakes to Avoid

❌ **DON'T:**
- [ ] Forget to update `.env.local` with your Calendly URL
- [ ] Leave "AuraLabs" as the company name
- [ ] Use fake testimonials without real attribution
- [ ] Use stock photos without proper licensing
- [ ] Deploy without testing all forms locally
- [ ] Forget to update contact email
- [ ] Leave example case studies without customization

✅ **DO:**
- [ ] Use real client names and locations in testimonials
- [ ] Keep copy authentic and human-sounding
- [ ] Test on mobile before deploying
- [ ] Update all metadata for SEO
- [ ] Verify Calendly integration works
- [ ] Set up contact form email handling
- [ ] Monitor analytics after launch

## Testing Checklist

### Navigation & Links
- [ ] All nav links work
- [ ] Footer links work
- [ ] Internal links navigate correctly
- [ ] External links open in new tab

### Forms
- [ ] Contact form validates required fields
- [ ] Contact form submission works
- [ ] Calendly popup opens from all "Book a Call" buttons
- [ ] WhatsApp button works (opens WhatsApp)

### Responsive Design
- [ ] Mobile menu hamburger works
- [ ] Mobile layout looks good (test with dev tools)
- [ ] Images scale properly on mobile
- [ ] Text is readable on all sizes

### Performance
- [ ] Page loads in <3 seconds
- [ ] No console errors (F12 → Console)
- [ ] Images are optimized
- [ ] Lighthouse score > 90

### SEO
- [ ] Title tags are unique
- [ ] Meta descriptions present
- [ ] Images have alt text
- [ ] No duplicate content

## Deployment Quick Commands

```bash
# Setup
npm install
cp .env.example .env.local

# Development
npm run dev

# Testing
npm run build
npm start

# Deployment
git add .
git commit -m "Initial launch"
git push origin main
# Vercel auto-deploys from GitHub
```

## Post-Launch Maintenance

### Weekly
- [ ] Monitor Vercel for errors
- [ ] Check Calendly for bookings
- [ ] Monitor contact form submissions

### Monthly
- [ ] Update case studies with new projects
- [ ] Refresh testimonials
- [ ] Review Analytics metrics
- [ ] Update team/service information if changed

### Quarterly
- [ ] Security audit (`npm audit`)
- [ ] Update dependencies (`npm update`)
- [ ] Check Google Search Console
- [ ] Review and update SEO content

## Emergency Contacts / Resources

- **Vercel Support**: https://vercel.com/support
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **React Hook Form**: https://react-hook-form.com
- **Framer Motion**: https://www.framer.com/motion/

## Success Metrics

Track these KPIs after launch:

- [ ] Page load speed < 3 seconds
- [ ] Mobile traffic > 60%
- [ ] Calendly bookings per week
- [ ] Contact form submissions per week
- [ ] Lighthouse score > 90
- [ ] Bounce rate < 50%
- [ ] Average session duration > 2 minutes

## Need Help?

If something isn't working:

1. Check the `README.md` for setup help
2. Check `CUSTOMIZATION.md` for how to update content
3. Check `DEPLOYMENT.md` for deployment issues
4. Review the component comments in the code
5. Google the error message + "Next.js 14"
6. Check [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions)

---

**Launch Status**: [ ] Not Started [ ] In Progress [ ] Complete ✅

**Launch Date**: _______________

**Live URL**: _______________

**Calendly URL**: _______________

**Contact Email**: _______________
