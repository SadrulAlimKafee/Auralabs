'use client';

import { motion } from 'framer-motion';
import { Users, Lock, Rocket } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'Real Team, Real People',
    description: 'Not a agency factory. You get a dedicated account manager who knows your business.',
  },
  {
    icon: Lock,
    title: 'Transparent Process',
    description: 'No secrets. Clear timelines, pricing, and progress. You know exactly what to expect.',
  },
  {
    icon: Rocket,
    title: 'Results-Focused',
    description: 'We measure everything. Traffic, conversions, revenue. Your goals are our goals.',
  },
];

export default function WhyUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Why Work With AuraLabs?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We're built different. Here's why Australian businesses trust us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div key={reason.title} variants={itemVariants}>
                <div className="card h-full">
                  <Icon className="w-12 h-12 text-brand-blue mb-6" />
                  <h3 className="text-2xl font-semibold text-text-primary mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
