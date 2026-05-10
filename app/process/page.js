import BookCallButton from '@/components/BookCallButton';
import CalendlyCTA from '@/components/sections/CalendlyCTA';

export const metadata = {
  title: 'Our Process | How We Work',
  description: 'A clear, transparent process from discovery to launch and beyond.',
  openGraph: {
    title: 'Our Process',
    description: 'No surprises, just clear steps.',
    url: 'https://auralabs.com.au/process',
  },
};

const processSteps = [
  {
    number: '01',
    title: 'Discovery Call',
    duration: 'Week 1',
    description:
      'We learn everything about your business, your goals, your challenges, and your timeline. No pressure, just a real conversation. We ask hard questions so we understand exactly what you need.',
    deliverables: [
      'Discovery call (30-45 min)',
      'Initial scoping document',
      'Timeline estimate',
    ],
  },
  {
    number: '02',
    title: 'Strategy & Proposal',
    duration: 'Week 1-2',
    description:
      'We create a detailed proposal: what we\'ll build, how long it takes, what it costs, and how we\'ll measure success. Everything in writing. No surprises later.',
    deliverables: [
      'Project scope document',
      'Detailed timeline',
      'Fixed pricing (no hidden fees)',
      'Success metrics',
    ],
  },
  {
    number: '03',
    title: 'Design Mockup',
    duration: 'Week 2-3',
    description:
      'You see exactly how it\'ll look before we code it. Desktop and mobile. We share screens and get your feedback. Unlimited revisions until you\'re happy.',
    deliverables: [
      'Hi-fidelity design mockups',
      'Mobile version',
      'Interactive prototype (if needed)',
      'Client approval sign-off',
    ],
  },
  {
    number: '04',
    title: 'Development',
    duration: 'Week 3-6',
    description:
      'We build it. Clean, fast code. SEO-optimized. Mobile-first. Built to convert. You get weekly progress updates and can see the live staging site anytime.',
    deliverables: [
      'Fully developed website/store',
      'SEO setup and optimization',
      'Mobile responsiveness',
      'Testing and bug fixes',
    ],
  },
  {
    number: '05',
    title: 'Review & Revisions',
    duration: 'Week 6-7',
    description:
      'You review the live site. We make changes, tweaks, whatever you need. This is your chance to see it before the world does and ask for anything.',
    deliverables: [
      'UAT (user acceptance testing)',
      'Unlimited revisions',
      'Performance optimization',
      'Final sign-off',
    ],
  },
  {
    number: '06',
    title: 'Launch',
    duration: 'Week 7-8',
    description:
      'We handle the technical side. Domain setup, SSL, go-live, monitoring. You just show up and celebrate. We\'ll make sure everything runs smoothly.',
    deliverables: [
      'Domain configuration',
      'SSL certificate setup',
      'Go-live process',
      'Post-launch monitoring',
    ],
  },
  {
    number: '07',
    title: 'Ongoing Support & Automation',
    duration: 'Month 2+',
    description:
      'Your dedicated account manager stays with you. Monthly check-ins, performance reports, optimization recommendations, and automation setup. We grow together.',
    deliverables: [
      'Monthly performance reports',
      'Optimization recommendations',
      'Technical support',
      'Automation setup (if included)',
      'Training & documentation',
    ],
  },
];

export default function Process() {
  return (
    <main>
      {/* Hero */}
      <section className="section-padding bg-brand-light pt-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-text-primary mb-6">
              Our Process
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary">
              Clear, transparent, no surprises. Here's exactly how we work from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12"
              >
                {/* Step Number */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <p className="text-6xl font-bold text-brand-blue/20 mb-2">
                      {step.number}
                    </p>
                    <h3 className="text-3xl font-bold text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm font-medium text-brand-blue">
                      {step.duration}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2">
                  <div className="card bg-brand-light h-full">
                    <p className="text-text-secondary mb-8">
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div>
                      <p className="text-sm font-semibold text-text-primary mb-4">
                        What You Get:
                      </p>
                      <ul className="space-y-2">
                        {step.deliverables.map((item, i) => (
                          <li key={i} className="flex gap-3 text-text-secondary text-sm">
                            <span className="text-brand-blue font-bold">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex lg:col-span-3 justify-center">
                    <div className="w-1 h-8 bg-gradient-to-b from-brand-blue to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom max-w-2xl">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            Timeline Overview
          </h2>
          <div className="bg-brand-white card">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="font-medium text-text-primary">
                  Typical Project
                </span>
                <span className="font-bold text-brand-blue">2-4 Weeks</span>
              </div>
              <div className="h-2 bg-brand-light rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-brand-blue to-brand-blue/50 rounded-full"></div>
              </div>
              <p className="text-sm text-text-secondary">
                Actual timeline depends on project complexity, revision rounds, and how quickly you provide feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-style Section */}
      <section className="section-padding">
        <div className="container-custom max-w-2xl">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            Common Questions
          </h2>
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                What if I need revisions after launch?
              </h3>
              <p className="text-text-secondary">
                We provide 30 days of free support and revisions post-launch. After that, we offer ongoing support packages starting at $200/month.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                Do you offer payment plans?
              </h3>
              <p className="text-text-secondary">
                Yes. We typically do 50% upfront, 50% on completion. For larger projects, we can discuss monthly installments.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                What if the timeline slips?
              </h3>
              <p className="text-text-secondary">
                We keep you updated weekly. If delays happen, we communicate early and adjust timelines with your approval. No surprises.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                Who maintains the site after launch?
              </h3>
              <p className="text-text-secondary">
                You can manage it yourself (we train you), or we can handle updates and maintenance. Most clients choose our support plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CalendlyCTA />
    </main>
  );
}
