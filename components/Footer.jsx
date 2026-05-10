'use client';

import Link from 'next/link';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-light border-t border-border-light">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-brand-blue mb-2">AuraLabs</h3>
            <p className="text-text-secondary text-sm">
              Digital growth for Australian businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-text-secondary hover:text-brand-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-text-secondary hover:text-brand-blue transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-text-secondary hover:text-brand-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-text-secondary hover:text-brand-blue transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/services#wordpress" className="text-sm text-text-secondary hover:text-brand-blue transition-colors">
                  WordPress Development
                </a>
              </li>
              <li>
                <a href="/services#shopify" className="text-sm text-text-secondary hover:text-brand-blue transition-colors">
                  Shopify Development
                </a>
              </li>
              <li>
                <a href="/services#seo" className="text-sm text-text-secondary hover:text-brand-blue transition-colors">
                  SEO Services
                </a>
              </li>
              <li>
                <a href="/services#ai" className="text-sm text-text-secondary hover:text-brand-blue transition-colors">
                  AI Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="mailto:hello@auralabs.com.au" aria-label="Email" className="text-text-secondary hover:text-brand-blue transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-text-secondary hover:text-brand-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-text-secondary hover:text-brand-blue transition-colors">
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-sm text-text-secondary">hello@auralabs.com.au</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border-light pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-text-secondary">
          <p>&copy; {currentYear} AuraLabs. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-brand-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand-blue transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
