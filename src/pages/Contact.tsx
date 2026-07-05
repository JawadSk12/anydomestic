import React from 'react';
import { ContactForm } from '../components/forms/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="container-page py-16 flex flex-col gap-12 text-left">
      <div>
        <span className="text-xs font-bold uppercase text-verified-500 tracking-wider">Helpline & Support</span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-ink leading-tight mt-1">
          Contact Us
        </h1>
        <p className="text-sm text-ink-soft max-w-xl mt-1">
          Have questions about pricing, replacements, or custom worker requirements? Speak to our customer support team directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Support details */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-paper-raised border border-line p-6 rounded-2xl shadow-soft flex flex-col gap-5">
            <h3 className="font-display text-lg font-bold text-ink border-b border-line pb-3">Contact Info</h3>
            
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-verified-500 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-slate uppercase tracking-wide">Telephone</span>
                <a href="tel:02266661314" className="text-sm font-bold text-ink hover:text-verified-500 transition-colors block mt-0.5">
                  022-66661314
                </a>
                <a href="tel:9820108341" className="text-sm font-semibold text-slate hover:text-verified-500 transition-colors block mt-0.5">
                  9820108341
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-verified-500 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-slate uppercase tracking-wide">WhatsApp</span>
                <a 
                  href="https://wa.me/919820108341" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-bold text-ink hover:text-verified-500 transition-colors block mt-0.5"
                >
                  9820108341
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-verified-500 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-slate uppercase tracking-wide">Email Support</span>
                <a href="mailto:customercare@anydomestichelp.com" className="text-sm font-semibold text-ink hover:text-verified-500 transition-colors block mt-0.5">
                  customercare@anydomestichelp.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-verified-500 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-slate uppercase tracking-wide">Operating Hours</span>
                <p className="text-sm text-ink-soft mt-0.5">
                  Monday to Saturday: 9:00 AM - 7:00 PM<br />
                  <span className="text-xs text-coral-500 font-semibold">(Closed on Sundays & National Holidays)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Registered Office */}
          <div className="bg-paper-raised border border-line p-6 rounded-2xl shadow-soft flex flex-col gap-4">
            <h3 className="font-display text-lg font-bold text-ink border-b border-line pb-3">Registered Office</h3>
            
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-verified-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs font-bold text-ink block">Mumta 'A' Wing</strong>
                <p className="text-xs text-ink-soft mt-0.5 leading-relaxed">
                  54, Mamta 'A' wing, A.M. Marg, Prabhadevi, Mumbai - 400 025.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
