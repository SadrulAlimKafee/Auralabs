'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'They took our chaotic website and turned it into a lead machine. Within 3 months we had tripled our online inquiries.',
    author: 'Sarah Mitchell',
    role: 'Owner, Mitchell & Co Accountants',
    location: 'Sydney, NSW',
  },
  {
    quote: 'Finally, a development team that actually understands business. They speak in English, not tech jargon. Would recommend to any business owner.',
    author: 'James Chen',
    role: 'Director, Chen Logistics',
    location: 'Melbourne, VIC',
  },
  {
    quote: 'The AI chatbot they built for us handles 80% of our customer questions automatically. Saved us a fortune on support staff.',
    author: 'Lisa Brown',
    role: 'Founder, BrownBox Retail',
    location: 'Brisbane, QLD',
  },
];

export default function Testimonials() {
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
            What Our Clients Say
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Don't just take our word for it.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.author} variants={itemVariants}>
              <div className="card h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-brand-blue text-brand-blue"
                    />
                  ))}
                </div>
                <p className="text-text-secondary italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border-light pt-4">
                  <p className="font-semibold text-text-primary">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-brand-blue font-medium">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
