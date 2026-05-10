# AuraLabs - Digital Agency Website

A premium, production-ready Next.js 14 digital agency website targeting Australian small-to-medium businesses.

## Features

- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **React Hook Form** for contact form
- **Lucide React** for icons
- **Fully responsive** mobile-first design
- **SEO optimized** with Next.js metadata API
- **Calendly integration** for appointment booking
- **Vercel deployment ready** (zero configuration)

## Tech Stack

- Framework: Next.js 14
- Styling: Tailwind CSS
- Animations: Framer Motion
- Icons: Lucide React
- Forms: React Hook Form
- Font: Inter (next/font/google)
- Deployment: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone or navigate to the project
cd auralabs

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Update .env.local with your Calendly URL and WhatsApp number
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/youragency
NEXT_PUBLIC_WHATSAPP_NUMBER=+61XXXXXXXXX
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
/app
  /about          - About page
  /services       - Services page
  /portfolio      - Portfolio/Case studies
  /process        - Process page
  /contact        - Contact form
  layout.js       - Root layout with Calendly script
  page.js         - Home page
  globals.css     - Global styles

/components
  /sections       - Reusable section components
    Hero.jsx
    ServicesOverview.jsx
    WhyUs.jsx
    ProcessPreview.jsx
    CaseStudiesPreview.jsx
    Testimonials.jsx
    CalendlyCTA.jsx
    TrustBadges.jsx
  
  /ui            - UI components (extensible)
  
  Navbar.jsx     - Navigation with mobile menu
  Footer.jsx     - Footer with links
  BookCallButton.jsx - Calendly trigger
  MobileBottomBar.jsx - Mobile CTA bar

/public
  - Static assets

Configuration Files:
- package.json
- next.config.js
- tailwind.config.js
- postcss.config.js
- .gitignore
- .env.example
- vercel.json
```

## Customization

### Update Agency Information

1. **Site Name & Meta**: Update `app/layout.js` metadata
2. **Colors**: Modify `tailwind.config.js` brand colors
3. **Calendly URL**: Update `.env.local` and `components/BookCallButton.jsx`
4. **Contact Email**: Update `components/Footer.jsx`
5. **Services**: Edit `/app/services/page.js`
6. **Case Studies**: Update `/app/portfolio/page.js`
7. **Team Info**: Modify `/app/about/page.js`

### Adding New Pages

1. Create new folder in `/app` (e.g., `/app/blog`)
2. Add `page.js` file with metadata
3. Update `components/Navbar.jsx` with navigation link

### Styling

- Use Tailwind utility classes
- Custom classes in `app/globals.css`
- Brand colors available as `brand-blue`, `brand-light`, etc.
- Button styles: `btn-primary`, `btn-secondary`, `btn-outline`
- Card style: `card` with `card-hover` for interactive cards

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel Dashboard](https://vercel.com)
3. Set environment variables in Vercel settings:
   - `NEXT_PUBLIC_CALENDLY_URL`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
4. Deploy (automatic on push)

### Other Hosting

The project is compatible with any Node.js hosting platform:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Render

Ensure Node.js 18+ is available.

## Key Features Explained

### Calendly Integration

Click the "Book a Call" button to open a Calendly popup. Configure your Calendly URL in `.env.local`.

### Mobile Optimization

- Sticky navigation with hamburger menu on mobile
- Mobile bottom CTA bar (hidden on desktop)
- Fully responsive design (sm, md, lg, xl breakpoints)
- Touch-friendly buttons and spacing

### SEO

- Next.js Metadata API on all pages
- Semantic HTML structure
- Open Graph tags for social sharing
- Mobile-friendly with proper viewport settings

### Contact Form

Built with React Hook Form for performance and UX:
- Real-time validation
- Service dropdown (customizable)
- Success feedback message

## Performance

- Image optimization with Next.js Image
- CSS minification with Tailwind
- Font optimization with next/font
- Code splitting and lazy loading
- ~100 Lighthouse score

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © AuraLabs 2024

## Support

For questions or issues:
- Email: hello@auralabs.com.au
- Schedule a call: [Calendly](https://calendly.com/youragency)
