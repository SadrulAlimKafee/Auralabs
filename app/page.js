import Hero from '@/components/sections/Hero';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WhyUs from '@/components/sections/WhyUs';
import ProcessPreview from '@/components/sections/ProcessPreview';
import CaseStudiesPreview from '@/components/sections/CaseStudiesPreview';
import Testimonials from '@/components/sections/Testimonials';
import CalendlyCTA from '@/components/sections/CalendlyCTA';
import TrustBadges from '@/components/sections/TrustBadges';

export const metadata = {
  title: 'AuraLabs | Web Development, SEO & AI Automation for Australian Businesses',
  description: 'WordPress & Shopify development, SEO services, and AI automation for Australian small businesses. Fast turnaround, dedicated team.',
  openGraph: {
    title: 'AuraLabs | Web Development, SEO & AI Automation',
    description: 'We build, rank & automate — so you can grow.',
    url: 'https://auralabs.com.au',
    siteName: 'AuraLabs',
    locale: 'en_AU',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section-padding container-custom">
        <TrustBadges />
      </section>
      <ServicesOverview />
      <WhyUs />
      <ProcessPreview />
      <CaseStudiesPreview />
      <Testimonials />
      <CalendlyCTA />
    </>
  );
}
