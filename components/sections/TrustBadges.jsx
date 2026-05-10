'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const badges = [
  'Australian-Based Team',
  'Fast 2-4 Week Turnaround',
  'Dedicated Account Manager',
  'AEST Business Hours',
  'Transparent Pricing',
  'Results Guaranteed',
  'SEO-Ready Code',
  'Mobile-First Design',
];

export default function TrustBadges() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {badges.map((badge) => (
        <motion.div key={badge} variants={itemVariants} className="flex items-start gap-2">
          <CheckCircle size={20} className="text-brand-blue flex-shrink-0 mt-1" />
          <span className="text-sm font-medium text-text-primary">{badge}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
