import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowUpRight, MessageSquareCode } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-paper-raised pt-16 pb-8 border-t border-verified-900">
      <div className="container-page grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Info Column */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <Logo light={true} />
          </Link>
          <p className="text-sm text-slate leading-relaxed">
            India's premier marketplace for verified household staff. Providing verified house maids, cooks, nannies, caregivers, and drivers across 50+ major cities.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://wa.me/919820108341"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold bg-emerald-700/40 hover:bg-emerald-700/70 border border-emerald-600/30 text-emerald-300 px-3 py-1.5 rounded-full transition-colors"
            >
              <MessageSquareCode className="w-3.5 h-3.5" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="font-semibold text-paper-raised text-sm uppercase tracking-wider mb-6">
            Services
          </h4>
          <ul className="flex flex-col gap-3.5">
            {[
              { name: 'House Maid', url: '/browse?service=House+Maid' },
              { name: 'Babysitter', url: '/browse?service=Babysitter' },
              { name: 'Nanny / Childcare', url: '/browse?service=Nanny' },
              { name: 'Professional Cook', url: '/browse?service=Cook' },
              { name: 'Chauffeur / Driver', url: '/browse?service=Driver' },
              { name: 'Elder & Patient Care', url: '/browse?service=Patient+Care' },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.url}
                  className="text-sm text-slate hover:text-verified-300 flex items-center gap-1 group transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold text-paper-raised text-sm uppercase tracking-wider mb-6">
            Company
          </h4>
          <ul className="flex flex-col gap-3.5 text-sm">
            <li>
              <Link to="/about" className="text-slate hover:text-verified-300 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="text-slate hover:text-verified-300 transition-colors">
                How It Works
              </Link>
            </li>
            <li>
              <Link to="/partner" className="text-slate hover:text-verified-300 transition-colors">
                Register as Partner
              </Link>
            </li>
            <li>
              <Link to="/refer" className="text-slate hover:text-verified-300 transition-colors">
                Employee Referral
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-slate hover:text-verified-300 transition-colors">
                Safety & Help Blog
              </Link>
            </li>
            <li>
              <Link to="/feedback" className="text-slate hover:text-verified-300 transition-colors">
                Customer Feedback
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Contacts */}
        <div>
          <h4 className="font-semibold text-paper-raised text-sm uppercase tracking-wider mb-6">
            Legal & Support
          </h4>
          <ul className="flex flex-col gap-3.5 text-sm mb-6">
            <li>
              <Link to="/privacy" className="text-slate hover:text-verified-300 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-slate hover:text-verified-300 transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/refund" className="text-slate hover:text-verified-300 transition-colors">
                Refund & Replacement Policy
              </Link>
            </li>
          </ul>
          <div className="border-t border-verified-900/60 pt-4">
            <span className="block text-xs text-slate uppercase tracking-wider mb-2">Helpline</span>
            <a href="tel:02266661314" className="text-base font-semibold text-paper-raised hover:text-verified-300 transition-colors block">
              022-66661314
            </a>
            <a href="tel:9820108341" className="text-sm text-slate hover:text-verified-300 transition-colors block mt-1">
              +91 98201 08341
            </a>
          </div>
        </div>
      </div>

      <div className="container-page border-t border-verified-900/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate">
          &copy; {new Date().getFullYear()} Any Domestic Help. Built for premium domestic staffing experiences. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-slate">
          <span>ISO 27001 Certified</span>
          <span>•</span>
          <span>Secured with SSL</span>
        </div>
      </div>
    </footer>
  );
};
