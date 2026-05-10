import BookCallButton from '@/components/BookCallButton';
import CalendlyCTA from '@/components/sections/CalendlyCTA';
import { Code2, ShoppingCart, TrendingUp, MessageSquare, Zap, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Our Services | WordPress, Shopify, SEO & AI Automation',
  description: 'Website development, e-commerce stores, SEO ranking, and AI automation for Australian businesses.',
  openGraph: {
    title: 'Our Services',
    description: 'Everything you need to grow online.',
    url: 'https://auralabs.com.au/services',
  },
};

const serviceDetails = [
  {
    id: 'wordpress',
    icon: Code2,
    title: 'WordPress Development',
    description: 'Custom WordPress sites built for conversions and SEO.',
    painPoint: 'You need a website that converts visitors into customers, ranks in Google, and doesn\'t require constant technical support.',
    deliverables: [
      'Fully custom WordPress site (or Elementor/Divi if preferred)',
      'Mobile-responsive, fast-loading design',
      'SEO optimized structure and setup',
      'Contact forms, booking systems, or integration with tools you use',
      'Training and support for 30 days post-launch',
    ],
    pricing: 'Typically $3,000 - $8,000 depending on features. Fixed price, no surprises.',
  },
  {
    id: 'shopify',
    title: 'Shopify Development',
    icon: ShoppingCart,
    description: 'Beautiful Shopify stores that sell.',
    painPoint: 'You want to sell online but need a store that\'s easy to manage, looks professional, and handles payments smoothly.',
    deliverables: [
      'Custom Shopify theme design and development',
      'Product catalog setup',
      'Payment gateway integration (Stripe, PayPal, etc.)',
      'Shipping and tax setup',
      'App integrations (email, analytics, inventory)',
      'Training and 30-day support',
    ],
    pricing: 'Typically $2,500 - $6,000. We charge one price, you pay once.',
  },
  {
    id: 'seo',
    title: 'SEO Services',
    icon: TrendingUp,
    description: 'Rank higher in Google. Get more organic traffic.',
    painPoint: 'You\'re not showing up in Google when potential customers search for your services.',
    deliverables: [
      'Technical SEO audit and fixes',
      'Keyword research and strategy',
      'On-page optimization',
      'Content strategy and brief writing',
      'Link building outreach',
      'Monthly reports and optimization',
    ],
    pricing: '$800 - $2,500/month depending on competitiveness. 3-month minimum.',
  },
  {
    id: 'ai',
    title: 'AI Automation',
    icon: Zap,
    description: 'Chatbots, workflow automation, and AI integrations.',
    painPoint: 'You\'re spending too much time on repetitive tasks. Customer questions pile up. Leads slip through the cracks.',
    deliverables: [
      'AI chatbot for your website (answers questions 24/7)',
      'Workflow automation (Zapier, Make, or custom)',
      'AI-powered lead capture and qualification',
      'CRM integration and setup',
      'Auto-reporting dashboards',
      'Monthly optimization and updates',
    ],
    pricing: '$500 - $2,000/month depending on complexity. Saves 10+ hours per week.',
  },
];

export default function Services() {
  return (
    <main>
      {/* Hero */}
      <section className="section-padding bg-brand-light pt-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-text-primary mb-6">
              Services Built for Growth
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary">
              WordPress. Shopify. SEO. AI Automation. Pick one, or combine them all.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-12 sm:py-16">
        <div className="container-custom space-y-20">
          {serviceDetails.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Left: Icon and heading */}
                  <div>
                    <Icon className="w-16 h-16 text-brand-blue mb-6" />
                    <h2 className="text-4xl font-bold text-text-primary mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-text-secondary mb-8">
                      {service.description}
                    </p>

                    {/* Pain Point */}
                    <div className="bg-brand-light p-6 rounded-lg mb-8 border border-border-light">
                      <p className="text-sm font-medium text-brand-blue mb-2">
                        The Problem:
                      </p>
                      <p className="text-text-secondary">{service.painPoint}</p>
                    </div>

                    <BookCallButton />
                  </div>

                  {/* Right: Deliverables and pricing */}
                  <div>
                    <div className="card bg-brand-light">
                      <h3 className="text-xl font-semibold text-text-primary mb-6">
                        What You Get
                      </h3>
                      <ul className="space-y-3 mb-8">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="text-brand-blue font-bold flex-shrink-0">
                              ✓
                            </span>
                            <span className="text-text-secondary">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Pricing */}
                      <div className="border-t border-border-light pt-6">
                        <p className="text-sm font-medium text-brand-blue mb-2">
                          Pricing:
                        </p>
                        <p className="text-text-secondary mb-6">
                          {service.pricing}
                        </p>
                        <BookCallButton />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {service.id !== serviceDetails[serviceDetails.length - 1].id && (
                  <hr className="border-border-light my-16" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <CalendlyCTA />
    </main>
  );
}
