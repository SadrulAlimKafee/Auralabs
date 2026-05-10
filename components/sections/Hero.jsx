'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import BookCallButton from '@/components/BookCallButton';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-20 sm:pt-32 sm:pb-32 overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
            We Build, Rank &{' '}
            <span className="text-brand-blue">Automate</span> — So You Can
            Grow
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary mb-8 leading-relaxed">
            WordPress & Shopify stores that convert. SEO that ranks. AI automation that saves time. One dedicated team, Australian business hours, real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <BookCallButton />
            <Link href="/portfolio" className="btn-secondary">
              See Our Work
            </Link>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border-light"
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-brand-blue">100+</p>
              <p className="text-sm text-text-secondary">Australian Clients</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-brand-blue">2-4 Weeks</p>
              <p className="text-sm text-text-secondary">Fast Turnaround</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-brand-blue">1 Person</p>
              <p className="text-sm text-text-secondary">Account Manager</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-brand-blue">AEST</p>
              <p className="text-sm text-text-secondary">Business Hours</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
