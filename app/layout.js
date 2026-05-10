import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'AuraLabs | Digital Growth for Australian Businesses',
  description: 'We build WordPress & Shopify stores, rank your website in Google, and automate your growth with AI. Dedicated account manager, Australian business hours.',
  keywords: 'WordPress development, Shopify development, SEO services, AI automation, Australia',
  openGraph: {
    title: 'AuraLabs | Digital Growth for Australian Businesses',
    description: 'We build, rank & automate — so you can grow.',
    url: 'https://auralabs.com.au',
    siteName: 'AuraLabs',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AuraLabs | Digital Growth for Australian Businesses',
    description: 'We build WordPress & Shopify stores, rank your website in Google, and automate your growth with AI.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-brand-white text-text-primary antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <MobileBottomBar />
        <Footer />
      </body>
    </html>
  );
}
