'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We learn about your business, goals, and challenges. No pressure, just conversation.',
  },
  {
    number: '02',
    title: 'Strategy & Proposal',
    description: 'A clear roadmap. What we\'ll build, timeline, pricing. Everything in writing.',
  },
  {
    number: '03',
    title: 'Design Mockup',
    description: 'You see exactly how it looks before we build. Revisions until you\'re happy.',
  },
  {
    number: '04',
    title: 'Development',
    description: 'We build it. Fast, clean code. SEO-ready. Mobile-first. Conversion-focused.',
  },
];

export default function ProcessPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section-padding bg-brand-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Our Simple Process
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            No surprises. Just clear, transparent steps from idea to launch.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div key={step.title} variants={itemVariants} className="relative">
              <div className="card h-full">
                <p className="text-5xl font-bold text-brand-blue/20 mb-4">
                  {step.number}
                </p>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-6 w-12 h-1 bg-gradient-to-r from-brand-blue to-transparent"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
