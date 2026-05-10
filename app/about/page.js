import { motion } from 'framer-motion';
import { Metadata } from 'next';
import BookCallButton from '@/components/BookCallButton';
import CalendlyCTA from '@/components/sections/CalendlyCTA';

export const metadata = {
  title: 'About AuraLabs | Our Story & Mission',
  description: 'Meet the team behind AuraLabs. We\'re passionate about helping Australian businesses grow through digital.',
  openGraph: {
    title: 'About AuraLabs',
    description: 'Our story and why we do what we do.',
    url: 'https://auralabs.com.au/about',
  },
};

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Founder & Strategy Lead',
    bio: 'Former digital marketer. Started AuraLabs to fix the broken agency experience.',
  },
  {
    name: 'Emma Johnson',
    role: 'Lead Developer',
    bio: 'Full-stack wizard. Builds sites that convert and rank.',
  },
  {
    name: 'Marcus Williams',
    role: 'SEO & Growth Specialist',
    bio: 'Ranked dozens of sites to page 1. Organic growth is his obsession.',
  },
];

const principles = [
  {
    title: 'Quality Over Volume',
    description: 'We take fewer clients so we can do better work. No cookie-cutter templates.',
  },
  {
    title: 'Transparent Communication',
    description: 'No secrets. You get a dedicated person, clear progress, and honest feedback.',
  },
  {
    title: 'Results First',
    description: 'We\'re not paid per hour. We\'re paid when you win. Your growth is our growth.',
  },
];

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding bg-brand-light pt-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-text-primary mb-6">
              Built by Australians, for Australian Businesses
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary mb-8">
              We're a small, focused team that actually cares about your success. No corporate nonsense. No offshore team that doesn't understand Australian business culture.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl font-bold text-text-primary mb-8">Our Story</h2>
          <div className="space-y-6 text-text-secondary leading-relaxed">
            <p>
              AuraLabs started because we were frustrated. Frustrated with agencies that treated clients like order numbers. Frustrated with developers who disappeared after launch. Frustrated with teams that promised the world and delivered mediocrity.
            </p>
            <p>
              In 2023, our founder Alex decided there had to be a better way. He built a small, hand-picked team of specialists who actually care about results. People who answer emails fast. People who speak English, not jargon. People who stick around and make sure the work converts.
            </p>
            <p>
              Since then, we've helped 100+ Australian businesses build websites that rank, stores that sell, and systems that automate. No fancy case studies with fake numbers. Just real results from real businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="card text-center">
                <div className="w-24 h-24 bg-brand-light rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-brand-blue/20">
                    {member.name[0]}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-brand-blue mb-4">
                  {member.role}
                </p>
                <p className="text-text-secondary">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle) => (
              <div key={principle.title} className="card">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {principle.title}
                </h3>
                <p className="text-text-secondary">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offshore Hesitation Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl font-bold text-text-primary mb-8 text-center">
            Why You Can Trust an Offshore Team
          </h2>
          <div className="space-y-6 text-text-secondary leading-relaxed">
            <p>
              We get it. Offshore teams have a bad reputation. Bad communication, time zone nightmares, low quality work. But that's not us.
            </p>
            <p>
              <strong className="text-text-primary">We work AEST business hours.</strong> You're not emailing into a black hole. When you message, someone replies within hours, not days.
            </p>
            <p>
              <strong className="text-text-primary">We understand Australian business culture.</strong> We know how SMBs operate, what they value, and why growth matters. We're not treating you like a ticket in a queue.
            </p>
            <p>
              <strong className="text-text-primary">We're invested in your success.</strong> A huge percentage of our revenue comes from Australian clients who've stuck with us for years. Your success is literally our business model.
            </p>
            <p>
              Try us. One call. You'll feel the difference.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CalendlyCTA />
    </main>
  );
}
