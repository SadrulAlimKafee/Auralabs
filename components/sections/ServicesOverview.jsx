'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code2, ShoppingCart, TrendingUp, Zap } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'WordPress Development',
    description: 'Custom WordPress sites built for speed, SEO & conversions.',
    href: '/services#wordpress',
  },
  {
    icon: ShoppingCart,
    title: 'Shopify Development',
    description: 'Beautiful Shopify stores that sell. Theme customization & integrations.',
    href: '/services#shopify',
  },
  {
    icon: TrendingUp,
    title: 'SEO Services',
    description: 'Rank higher in Google. Technical SEO, content strategy, link building.',
    href: '/services#seo',
  },
  {
    icon: Zap,
    title: 'AI Automation',
    description: 'Chatbots, workflow automation, and AI lead capture. Work smarter.',
    href: '/services#ai',
  },
];

export default function ServicesOverview() {
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
            Everything Your Business Needs
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From websites to marketing to AI. One team, one point of contact.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Link href={service.href}>
                  <div className="card card-hover group cursor-pointer h-full flex flex-col">
                    <Icon className="w-12 h-12 text-brand-blue mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-sm flex-grow">
                      {service.description}
                    </p>
                    <p className="text-brand-blue text-sm font-medium mt-4">
                      Learn More →
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
