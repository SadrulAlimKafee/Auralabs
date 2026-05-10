# Deployment Guide

This guide covers deploying your AuraLabs Next.js website to Vercel (recommended) and other platforms.

## Quick Deployment to Vercel

Vercel is the optimal platform for Next.js applications and offers zero-configuration deployment.

### Step 1: Push Code to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: AuraLabs website"

# Create new repository on GitHub (https://github.com/new)

# Add remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [Vercel Dashboard](https://vercel.com)
2. Click "Add New..." → "Project"
3. Select your GitHub repository
4. Click "Import"
5. Configure project settings:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: ./
   - **Environment Variables**: Add the following:
     - `NEXT_PUBLIC_CALENDLY_URL`: Your Calendly URL
     - `NEXT_PUBLIC_WHATSAPP_NUMBER`: Your WhatsApp number (e.g., +61400000000)
6. Click "Deploy"

Vercel will automatically build and deploy your site. You'll get a deployment URL immediately.

### Step 3: Connect Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Enter your domain (e.g., auralabs.com.au)
4. Follow DNS configuration instructions
5. Vercel will auto-provision an SSL certificate

## Environment Variables Setup

### Local Development

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Update values:
```
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/youragency
NEXT_PUBLIC_WHATSAPP_NUMBER=+61400000000
```

### Production (Vercel)

1. Go to project "Settings" → "Environment Variables"
2. Add each variable from `.env.example`
3. Redeploy for changes to take effect

## Pre-Deployment Checklist

- [ ] Update all agency information
  - [ ] `.env.local` with Calendly URL
  - [ ] Company name in `layout.js`
  - [ ] Contact email in `Footer.jsx`
  - [ ] WhatsApp number
  
- [ ] Content customization
  - [ ] Update team bios in `app/about/page.js`
  - [ ] Update case studies in `app/portfolio/page.js`
  - [ ] Customize services in `app/services/page.js`
  - [ ] Update process timeline in `app/process/page.js`
  
- [ ] Branding
  - [ ] Add logo (update `Navbar.jsx`)
  - [ ] Add favicon to `/public/favicon.ico`
  - [ ] Add team photos to `/public/images/`
  - [ ] Add case study images
  
- [ ] SEO
  - [ ] Verify metadata on all pages
  - [ ] Update Open Graph images
  - [ ] Submit sitemap to Google Search Console
  
- [ ] Contact form
  - [ ] Configure email service (nodemailer, SendGrid, etc.)
  - [ ] Test form submission
  
- [ ] Testing
  - [ ] Test on mobile devices
  - [ ] Verify all links work
  - [ ] Test Calendly popup
  - [ ] Test contact form
  - [ ] Check performance with Lighthouse

## Alternative Deployment Options

### Netlify

1. Connect GitHub repository at [Netlify](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables in Site Settings → Build & Deploy
5. Deploy

### AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. "Create app" → Connect GitHub repository
3. Configure build settings (auto-detected for Next.js)
4. Add environment variables
5. Deploy

### DigitalOcean App Platform

1. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Create new app → Connect GitHub
3. Select repository and branch
4. Configure with:
   - Build command: `npm ci && npm run build`
   - Run command: `npm start`
   - HTTP port: 3000
5. Add environment variables
6. Deploy

### Self-Hosted (VPS)

```bash
# SSH into your server
ssh user@your-server.com

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone your repository
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
cd REPO_NAME

# Install dependencies
npm ci

# Build
npm run build

# Start with PM2 (process manager)
npm install -g pm2
pm2 start "npm start" --name "auralabs"
pm2 startup
pm2 save

# Setup Nginx as reverse proxy
# Configure /etc/nginx/sites-available/default
```

Nginx configuration example:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Post-Deployment

### Monitor Performance

- [Vercel Analytics](https://vercel.com/docs/analytics) - Enable in project settings
- [Google Search Console](https://search.google.com/search-console) - Verify and monitor
- [Google Analytics 4](https://analytics.google.com) - Setup tracking
- [Sentry](https://sentry.io) - Error tracking (optional)

### Set Up Contact Form Emails

The contact form currently logs data to console. For production, integrate an email service:

#### Option 1: Vercel Mail + SendGrid

```bash
npm install @sendgrid/mail
```

Update `app/api/contact/route.js`:

```javascript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  const data = await request.json();
  
  try {
    await sgMail.send({
      to: 'hello@auralabs.com.au',
      from: 'noreply@yourdomain.com',
      subject: `New inquiry from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Business:</strong> ${data.businessName}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
```

#### Option 2: Resend

```bash
npm install resend
```

#### Option 3: Nodemailer (for custom SMTP)

```bash
npm install nodemailer
```

### Enable HTTPS

If not using Vercel or Netlify, enable HTTPS with Let's Encrypt:

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Generate certificate
sudo certbot certonly --nginx -d yourdomain.com

# Auto-renewal
sudo certbot renew --dry-run
```

## Troubleshooting

### Build Fails on Vercel

Check build logs:
1. Go to project "Deployments"
2. Click failed deployment
3. Check "Build" tab for errors

Common issues:
- Missing environment variables → Add to project settings
- Broken imports → Check file paths and extensions
- TypeScript errors → Run `npm run build` locally

### Slow Performance

- Enable Image Optimization in `next.config.js`
- Use Vercel Analytics to identify slow pages
- Optimize images with [Squoosh](https://squoosh.app)
- Reduce bundle size: `npm run build && npm ls`

### 404 Errors in Production

- Verify all routes match folder structure
- Check for trailing slashes in links
- Ensure rewrites are correct in `next.config.js`

## Maintenance

### Regular Updates

```bash
# Check for outdated packages
npm outdated

# Update minor versions safely
npm update

# Update specific package
npm install next@latest

# Run build and test
npm run build
npm run dev
```

### Monitoring

- Weekly: Check Analytics for traffic and errors
- Monthly: Review Lighthouse scores
- Monthly: Update dependencies
- Quarterly: Security audit with `npm audit`

## Support

For Vercel-specific issues, refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Community](https://github.com/vercel/next.js/discussions)

For agency-specific help:
- Email: hello@auralabs.com.au
- Schedule consultation: [Calendly](https://calendly.com/youragency)
