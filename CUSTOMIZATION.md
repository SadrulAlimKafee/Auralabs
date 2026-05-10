# Customization Guide

Quick reference for updating the site with your agency information.

## 1. Agency Branding

### Update Site Metadata

**File:** `app/layout.js`

```javascript
export const metadata = {
  title: 'YourAgency | Your Tagline',
  description: 'Your agency description',
  openGraph: {
    siteName: 'YourAgency',
    url: 'https://yourdomain.com.au',
  },
};
```

### Update Logo

**File:** `components/Navbar.jsx`

Replace this:
```javascript
<div className="text-2xl font-bold text-brand-blue">AuraLabs</div>
```

With your logo:
```javascript
<img src="/logo.png" alt="Agency Logo" className="h-8" />
```

### Update Colors

**File:** `tailwind.config.js`

```javascript
colors: {
  brand: {
    blue: '#YOUR_COLOR', // Change primary color
    'blue-dark': '#YOUR_DARKER_COLOR',
    light: '#F8F9FA',
    white: '#FFFFFF',
  },
  // ... rest of colors
},
```

## 2. Contact Information

### Email

**Files:**
- `components/Footer.jsx` - Update email link and display
- `app/contact/page.js` - Update email in contact section

Replace `hello@auralabs.com.au` with your email.

### Phone/WhatsApp

**Files:**
- `.env.local` - Set WhatsApp number
- `components/sections/CalendlyCTA.jsx` - WhatsApp button
- `app/contact/page.js` - WhatsApp button

### Calendly URL

**Files:**
- `.env.local` - Update `NEXT_PUBLIC_CALENDLY_URL`
- This automatically updates all "Book a Call" buttons

## 3. Services

### Edit Service Details

**File:** `app/services/page.js`

Update the `serviceDetails` array:

```javascript
const serviceDetails = [
  {
    id: 'wordpress',
    title: 'Your Service Name',
    description: 'Your description',
    painPoint: 'What problem does it solve?',
    deliverables: [
      'Item 1',
      'Item 2',
    ],
    pricing: 'Your pricing',
  },
  // ... more services
];
```

### Update Service Cards on Homepage

**File:** `components/sections/ServicesOverview.jsx`

Update the `services` array with your services.

## 4. Team Information

### Update Team Members

**File:** `app/about/page.js`

Update the `teamMembers` array:

```javascript
const teamMembers = [
  {
    name: 'Your Name',
    role: 'Your Role',
    bio: 'Your bio',
  },
  // ... more members
];
```

### Add Team Photos

1. Add photos to `/public/images/team/`
2. Update Navbar/Footer with images

Replace placeholder initials with:
```javascript
<img 
  src="/images/team/your-name.jpg" 
  alt="Team Member"
  className="w-24 h-24 rounded-full object-cover"
/>
```

## 5. Case Studies / Portfolio

### Add Case Study

**File:** `app/portfolio/page.js`

Add to `caseStudies` array:

```javascript
{
  title: 'Project Name',
  industry: 'Industry',
  client: 'Client Name',
  location: 'City, State',
  challenge: 'What was the problem?',
  solution: 'How did you solve it?',
  results: [
    'Result 1',
    'Result 2',
    'Result 3',
  ],
  timeline: '4 weeks',
  services: ['Service 1', 'Service 2'],
}
```

### Add to Case Studies Preview

**File:** `components/sections/CaseStudiesPreview.jsx`

Update the `caseStudies` array (shows 3 featured on homepage).

## 6. Testimonials

### Add Testimonial

**File:** `components/sections/Testimonials.jsx`

Update the `testimonials` array:

```javascript
{
  quote: 'Client testimonial here...',
  author: 'Client Name',
  role: 'Their Role',
  location: 'City, State',
}
```

## 7. Process/Timeline

### Update Process Steps

**File:** `app/process/page.js`

Update the `processSteps` array:

```javascript
{
  number: '01',
  title: 'Step Name',
  duration: 'Week 1',
  description: 'What happens in this step?',
  deliverables: [
    'Deliverable 1',
    'Deliverable 2',
  ],
}
```

## 8. Trust Badges

### Customize Badges

**File:** `components/sections/TrustBadges.jsx`

Update the `badges` array:

```javascript
const badges = [
  'Your badge 1',
  'Your badge 2',
  // ... more
];
```

### Update Stats on Hero

**File:** `components/sections/Hero.jsx`

Update the trust badges section:

```javascript
<div>
  <p className="text-2xl font-bold text-brand-blue">YOUR_NUMBER</p>
  <p className="text-sm text-text-secondary">Your stat label</p>
</div>
```

## 9. Navigation & Links

### Add New Page

1. Create folder: `app/new-page/`
2. Add file: `page.js`
3. Update `Navbar.jsx`:

```javascript
const navItems = [
  // ... existing
  { href: '/new-page', label: 'New Page' },
];
```

4. Update `Footer.jsx` if relevant

### Update Footer Links

**File:** `components/Footer.jsx`

Update all link sections:
- Quick Links
- Services
- Connect / Social Media

## 10. Images & Media

### Add Images to Public Folder

```
/public
  /images
    /hero
    /case-studies
    /team
    /services
```

### Use Images

```javascript
<img 
  src="/images/your-image.jpg" 
  alt="Description" 
  className="w-full h-auto rounded-lg"
/>
```

Or with Next.js Image (optimized):

```javascript
import Image from 'next/image';

<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

## 11. SEO & Metadata

### Update Page Metadata

Each page has an `export const metadata` object at the top:

```javascript
export const metadata = {
  title: 'Page Title | AuraLabs',
  description: 'Page description for search results',
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
    url: 'https://yourdomain.com/page',
  },
};
```

### Add Open Graph Images

Add social share images:

```javascript
openGraph: {
  images: [
    {
      url: 'https://yourdomain.com/og-image.jpg',
      width: 1200,
      height: 630,
    },
  ],
},
```

## 12. Copy & Text Updates

### Homepage Hero

**File:** `components/sections/Hero.jsx`

Update:
- Main headline
- Subheadline
- Button text

### Service Cards Text

**File:** `components/sections/ServicesOverview.jsx`

Update each card:
- Title
- Description
- Icon (if changing)

### Why Us Section

**File:** `components/sections/WhyUs.jsx`

Update the `reasons` array with your key differentiators.

## 13. Contact Form

### Configure Form Submission

**File:** `app/contact/page.js`

The form currently has `handleSubmit` that logs data. To actually send emails:

```javascript
const onSubmit = async (data) => {
  // Send to your backend API
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (response.ok) {
    setSubmitted(true);
  }
};
```

Create `app/api/contact/route.js` to handle email sending.

### Update Service Dropdown

**File:** `app/contact/page.js`

Update the select options:

```javascript
<option value="your-service">Your Service Name</option>
```

## 14. Environment Variables

### Local Development

**File:** `.env.local`

```
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-url
NEXT_PUBLIC_WHATSAPP_NUMBER=+61XXXXXXXXX
```

### Vercel Production

Set in Vercel Dashboard:
1. Project Settings → Environment Variables
2. Add same variables
3. Redeploy

## 15. Styling & Design

### Button Styles

Use these classes:
- `.btn-primary` - Main action (blue)
- `.btn-secondary` - Secondary (bordered blue)
- `.btn-outline` - Outlined (bordered gray)

### Card Styling

- `.card` - Standard card
- `.card-hover` - Adds hover effect

### Spacing Classes

- `.section-padding` - Standard section padding
- `.container-custom` - Max-width container with padding

### Text Classes

- `.text-primary` - Primary text color
- `.text-secondary` - Secondary text color
- `.text-brand-blue` - Brand accent color

## 16. Mobile Menu (Hamburger)

The mobile menu is already built in `Navbar.jsx`. It:
- Shows on screens < 768px (md breakpoint)
- Closes when you click a link
- Shows/hides with hamburger button

No customization needed unless you want to change the menu structure.

## 17. Animations

All animations use Framer Motion and are subtle:

- Fade in on scroll
- Slight Y-axis movement
- Scale on hover (1.02)
- No animations over 0.4s

To adjust:

**File:** Individual component files in `/components/sections/`

```javascript
initial={{ opacity: 0, y: 20 }}        // Start state
whileInView={{ opacity: 1, y: 0 }}     // Animate to
transition={{ duration: 0.6 }}          // Animation duration
viewport={{ once: true }}               // Only animate once
```

## Testing Changes Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open browser to http://localhost:3000

# Test all pages:
# / (home)
# /about
# /services
# /portfolio
# /process
# /contact
```

## Deployment After Changes

```bash
# Commit changes
git add .
git commit -m "Update agency info and content"

# Push to GitHub
git push origin main

# Vercel auto-deploys from GitHub
# Check deployment status in Vercel dashboard
```

## Common Quick Edits

### Change Primary Color

1. `tailwind.config.js` → `brand.blue`
2. `tailwind.config.js` → `brand.blue-dark` (hover state)

### Change Contact Email

1. `components/Footer.jsx`
2. `app/contact/page.js`
3. `.env.local` (for form submission)

### Change Calendly URL

1. `.env.local` → `NEXT_PUBLIC_CALENDLY_URL`

### Update Phone Number

1. `.env.local` → `NEXT_PUBLIC_WHATSAPP_NUMBER`

### Change Homepage Services

1. `components/sections/ServicesOverview.jsx` → `services` array
2. Also update full descriptions in `app/services/page.js`

## Need Help?

Refer to:
- `README.md` - Project overview
- `DEPLOYMENT.md` - Deployment instructions
- Component comments - Technical details
- Next.js Docs - Framework features
