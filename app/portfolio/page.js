import BookCallButton from '@/components/BookCallButton';
import CalendlyCTA from '@/components/sections/CalendlyCTA';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Portfolio | Case Studies & Past Projects',
  description: 'See real results from real Australian businesses we\'ve helped.',
  openGraph: {
    title: 'Portfolio',
    description: 'Work we\'re proud of.',
    url: 'https://auralabs.com.au/portfolio',
  },
};

const caseStudies = [
  {
    title: 'E-Commerce Transformation for Fashion Retailer',
    industry: 'Fashion & Retail',
    client: 'LocalThread Co.',
    location: 'Sydney, NSW',
    challenge: 'Small fashion brand with outdated website, no online sales channel, invisible in Google search.',
    solution: 'Built custom Shopify store with product photography guidelines, integrated email marketing, implemented SEO strategy.',
    results: [
      'Online sales channel launched',
      '+340% increase in monthly online revenue within 6 months',
      'Ranked #1 for 8 key product terms in Sydney',
      'Monthly repeat customer rate: 35%',
    ],
    timeline: '8 weeks',
    services: ['Shopify Development', 'SEO', 'Content Strategy'],
  },
  {
    title: 'Lead Generation System for Home Services',
    industry: 'Home Services',
    client: 'Right Angle Plumbing',
    location: 'Melbourne, VIC',
    challenge: 'Plumbing company losing leads to bigger competitors, no system for capturing inquiry details.',
    solution: 'Rebuilt website with clear service pages, AI chatbot to capture emergency calls 24/7, integrated with existing CRM.',
    results: [
      '3x more qualified leads per month',
      'AI chatbot handles 60% of initial inquiries',
      'Average response time: 2 hours (vs 24 hours before)',
      '+220% improvement in quote-to-job conversion',
    ],
    timeline: '4 weeks',
    services: ['WordPress Development', 'AI Chatbot', 'CRM Integration'],
  },
  {
    title: 'SaaS Onboarding Automation',
    industry: 'Software / SaaS',
    client: 'DataVault Solutions',
    location: 'Brisbane, QLD',
    challenge: 'Support team overwhelmed with repetitive onboarding questions, scaling hitting ceiling.',
    solution: 'Built AI-powered knowledge base and chatbot, integrated with Zendesk, created auto-response workflows.',
    results: [
      '60% reduction in support tickets',
      'Avg time-to-onboarding: 6 hours (vs 48 hours)',
      'Customer satisfaction score: 9.2/10',
      'Support team can now focus on complex issues',
    ],
    timeline: '6 weeks',
    services: ['AI Automation', 'Workflow Integration', 'Support Optimization'],
  },
  {
    title: 'Local Service Business Growth Strategy',
    industry: 'Landscaping & Maintenance',
    client: 'GreenScape Design',
    location: 'Perth, WA',
    challenge: 'Seasonal business with inconsistent bookings, no online presence beyond Facebook.',
    solution: 'Built WordPress site with booking system, Google Business Profile optimization, local SEO campaign, email newsletter.',
    results: [
      'Year-round bookings increased 50%',
      'Google 5-star reviews increased from 8 to 42',
      'Email newsletter: 600+ subscribers, 25% open rate',
      'Estimated 18-month ROI on website investment',
    ],
    timeline: '5 weeks',
    services: ['WordPress Development', 'SEO', 'Booking System', 'Automation'],
  },
];

export default function Portfolio() {
  return (
    <main>
      {/* Hero */}
      <section className="section-padding bg-brand-light pt-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-text-primary mb-6">
              Work We're Proud Of
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary">
              Real results from real Australian businesses. No fake metrics, just honest case studies.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                {/* Alternating layout */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="card bg-brand-light h-full">
                    <p className="text-sm font-medium text-brand-blue mb-2">
                      {study.industry}
                    </p>
                    <h2 className="text-3xl font-bold text-text-primary mb-4">
                      {study.title}
                    </h2>
                    <p className="font-semibold text-text-primary mb-1">
                      {study.client}
                    </p>
                    <p className="text-text-secondary mb-6">{study.location}</p>

                    {/* Challenge */}
                    <div className="mb-6">
                      <p className="text-sm font-medium text-text-primary mb-2">
                        The Challenge
                      </p>
                      <p className="text-text-secondary">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <p className="text-sm font-medium text-text-primary mb-2">
                        Our Solution
                      </p>
                      <p className="text-text-secondary">{study.solution}</p>
                    </div>

                    {/* Timeline & Services */}
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-brand-blue font-medium">
                        ⏱️ {study.timeline}
                      </span>
                      <span className="text-text-secondary">
                        {study.services.join(' • ')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-6">
                      The Results
                    </h3>
                    <div className="space-y-4">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex gap-4">
                          <span className="text-brand-blue font-bold flex-shrink-0">
                            ✓
                          </span>
                          <p className="text-text-secondary">{result}</p>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-8 p-6 bg-brand-light rounded-lg border border-border-light">
                      <p className="text-sm text-text-secondary mb-4">
                        Interested in similar results?
                      </p>
                      <BookCallButton />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CalendlyCTA />
    </main>
  );
}
