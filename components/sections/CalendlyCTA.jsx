'use client';

import { motion } from 'framer-motion';
import BookCallButton from '@/components/BookCallButton';

export default function CalendlyCTA() {
  return (
    <section className="section-padding bg-brand-blue text-brand-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Ready to Grow?
          </h2>
          <p className="text-lg mb-4 text-brand-white/90">
            Let's talk about your next project. No obligation, just a conversation.
          </p>
          <p className="text-sm mb-8 text-brand-white/75">
            Available in AEST timezone. We typically respond within 1 business day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookCallButton />
            <button
              onClick={() => {
                window.location.href = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '61400000000'}?text=Hi%20AuraLabs%21%20I%27d%20like%20to%20discuss%20a%20project.`;
              }}
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-white/20 border border-brand-white text-brand-white font-medium rounded-lg hover:bg-brand-white/30 transition-all duration-200"
            >
              Message on WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
