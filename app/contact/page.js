'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import BookCallButton from '@/components/BookCallButton';
import CalendlyCTA from '@/components/sections/CalendlyCTA';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      businessName: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    // In production, send to your backend or email service
    console.log('Form data:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main>
      {/* Hero */}
      <section className="section-padding bg-brand-light pt-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-text-primary mb-6">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary">
              Let's talk about your next project. We reply within 1 business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-8">
                Send us a Message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 font-medium">
                    Thanks! We got your message. We'll be in touch within 1 business day.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Full Name
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Email Address
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    type="email"
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Business Name
                  </label>
                  <input
                    {...register('businessName', { required: 'Business name is required' })}
                    type="text"
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="Your business name"
                  />
                  {errors.businessName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.businessName.message}
                    </p>
                  )}
                </div>

                {/* Service Interest */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Service Interested In
                  </label>
                  <select
                    {...register('service', { required: 'Please select a service' })}
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  >
                    <option value="">Select a service...</option>
                    <option value="wordpress">WordPress Development</option>
                    <option value="shopify">Shopify Development</option>
                    <option value="seo">SEO Services</option>
                    <option value="ai">AI Automation</option>
                    <option value="other">Other / Multiple Services</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    {...register('message', {
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' },
                    })}
                    rows="5"
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                    placeholder="Tell us what you're trying to achieve..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>

              <p className="text-sm text-text-secondary mt-6 text-center">
                Or book a call directly →
              </p>
              <div className="mt-4">
                <BookCallButton />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Other Ways to Reach Us
                </h3>
              </div>

              {/* Email */}
              <div className="card">
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-text-primary mb-1">Email</p>
                    <a
                      href="mailto:hello@auralabs.com.au"
                      className="text-brand-blue hover:underline"
                    >
                      hello@auralabs.com.au
                    </a>
                    <p className="text-sm text-text-secondary mt-2">
                      We reply within 1 business day, typically faster.
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="card">
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-text-primary mb-1">Phone</p>
                    <p className="text-text-secondary text-sm mb-2">
                      Prefer email or Calendly, but we can chat:
                    </p>
                    <a
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '61400000000'}?text=Hi%20AuraLabs%21%20I%27d%20like%20to%20discuss%20a%20project.`}
                      className="text-brand-blue hover:underline"
                    >
                      WhatsApp Message
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="card">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-text-primary mb-1">Timezone</p>
                    <p className="text-text-secondary text-sm">
                      AEST (Australian Eastern Standard Time)
                    </p>
                    <p className="text-text-secondary text-sm mt-2">
                      We work 9am-5pm AEST Monday-Friday. Perfect for Australian businesses.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Note */}
              <div className="bg-brand-light p-6 rounded-lg border border-border-light">
                <p className="text-sm text-text-secondary">
                  <strong className="text-text-primary">We're here to help.</strong> No pushy sales calls, no spam. Just honest conversation about whether we're a good fit for your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Embed */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-text-primary mb-4 text-center">
            Or Schedule a Time That Works
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
            Pick a time on our calendar. 30-minute free strategy call to discuss your project, goals, and timeline.
          </p>

          <div className="max-w-2xl mx-auto bg-brand-white rounded-2xl overflow-hidden shadow-lg">
            <div
              className="calendly-inline-widget"
              data-url={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/youragency'}
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CalendlyCTA />
    </main>
  );
}

export const metadata = {
  title: 'Contact AuraLabs | Let\'s Build Something Great',
  description: 'Get in touch with AuraLabs. Free 30-min strategy call to discuss your project.',
  openGraph: {
    title: 'Contact',
    description: 'Let\'s talk about your project.',
    url: 'https://auralabs.com.au/contact',
  },
};
