'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const caseStudies = [
  {
    title: 'E-Commerce Store Overhaul',
    industry: 'Retail / Fashion',
    result: '+340% increase in online sales',
    service: 'WordPress + SEO + Automation',
  },
  {
    title: 'Local Service Business Digital Presence',
    industry: 'Home Services',
    result: '3x more qualified leads per month',
    service: 'Shopify Store + Lead Capture',
  },
  {
    title: 'SaaS Onboarding Automation',
    industry: 'Software',
    result: '60% reduction in support tickets',
    service: 'AI Chatbot + CRM Integration',
  },
];

export default function CaseStudiesPreview() {
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
            Work We're Proud Of
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real results for real Australian businesses.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {caseStudies.map((study) => (
            <motion.div key={study.title} variants={itemVariants}>
              <Link href="/portfolio">
                <div className="card card-hover group h-full cursor-pointer flex flex-col">
                  <p className="text-sm font-medium text-brand-blue mb-2">
                    {study.industry}
                  </p>
                  <h3 className="text-xl font-semibold text-text-primary mb-4 group-hover:text-brand-blue transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-3xl font-bold text-brand-blue mb-4">
                    {study.result}
                  </p>
                  <p className="text-sm text-text-secondary flex-grow">
                    {study.service}
                  </p>
                  <p className="text-brand-blue text-sm font-medium mt-4">
                    Read Case Study →
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/portfolio" className="btn-primary">
            View All Case Studies
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
