import React from 'react';
import { Search, Compass, Calendar, CheckSquare, ShieldCheck, Heart, CircleCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HowItWorks: React.FC = () => {
  return (
    <div className="container-page py-16 flex flex-col gap-20 text-left">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto flex flex-col gap-3.5">
        <span className="text-xs font-bold uppercase text-verified-500 tracking-wider">Hiring Journey</span>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-ink leading-tight">
          How Any Domestic Help Works
        </h1>
        <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
          From registration to active placement, we provide a streamlined, secure, and professional support infrastructure.
        </p>
      </div>

      {/* Intro details with Chef Image */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-4 bg-verified-100/50 rounded-full blur-3xl z-0" />
          <div className="relative border-4 border-paper-raised bg-paper-sunken shadow-lifted rounded-[2rem] overflow-hidden aspect-[4/3] max-w-lg mx-auto z-10">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
              alt="Professional chef preparing food in kitchen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-5 text-left">
          <h2 className="font-display text-2xl font-bold text-ink">Getting Started is Simple</h2>
          <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
            An employer has to first fill up the employer registration form after which our call centre will get in touch with you. An employer can also call us on <a href="tel:02266661314" className="font-bold text-verified-600 hover:underline">022-66661314</a> from anywhere in the world and connect directly with our call centre. For further information, we also have an <Link to="/faq" className="text-verified-500 font-semibold hover:underline">FAQ section</Link> on our website.
          </p>
          <div className="flex gap-4.5 mt-2">
            <Link
              to="/register"
              className="px-6 py-3 bg-verified-500 hover:bg-verified-600 text-paper-raised text-sm font-semibold rounded-xl shadow-soft transition-colors"
            >
              Fill Registration Form
            </Link>
            <a
              href="tel:02266661314"
              className="px-6 py-3 border border-line hover:bg-paper-sunken text-ink text-sm font-semibold rounded-xl shadow-soft transition-all"
            >
              Call Helpline
            </a>
          </div>
        </div>
      </section>

      {/* Value We Deliver Grid */}
      <section className="bg-paper-sunken/40 p-8 sm:p-12 rounded-[2rem] border border-line flex flex-col gap-8">
        <div className="text-left">
          <span className="text-xs font-bold uppercase text-verified-500 tracking-wider">Uncompromising Commitment</span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink mt-1">Value We Deliver</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Complete Professional Approach", desc: "Enterprise-grade matchmaking and background screening processes." },
            { title: "Sense of Responsibility & Care", desc: "Treating your household's safety and well-being as our highest priority." },
            { title: "Affordable Charges & Options", desc: "Transparent, one-time payment structure with no hidden monthly fees." },
            { title: "Hassle-Free Replacement", desc: "Instant replacements within the first 3 months of contract startup." },
            { title: "Sound Management Team", desc: "Decades of combined staffing operations and customer service experience." },
            { title: "24x7 Call Centre Support", desc: "Active helpline team to resolve emergency schedule or service concerns." }
          ].map((val, idx) => (
            <div key={idx} className="flex gap-3.5 bg-paper-raised p-5 rounded-xl border border-line shadow-soft">
              <CircleCheck className="w-5 h-5 text-verified-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-ink">{val.title}</h4>
                <p className="text-xs text-slate leading-relaxed mt-1">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Steps */}
      <section className="flex flex-col gap-12 relative max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="font-display text-2xl font-bold text-ink">Our Structured Process</h3>
          <p className="text-xs text-slate mt-1">Four simple steps to complete your hiring request securely.</p>
        </div>

        <div className="absolute left-6.5 top-28 bottom-8 w-0.5 bg-line hidden sm:block" />

        {[
          {
            icon: <Search className="w-5 h-5" />,
            step: "01",
            title: "Post Your Requirement",
            desc: "Register your details using our quick Booking Form. Specify service category (maid, cook, driver, caretaker), preferred timing, and monthly salary cap."
          },
          {
            icon: <Compass className="w-5 h-5" />,
            step: "02",
            title: "Receive Custom Shortlists",
            desc: "Our verification team scans local databases to match you with 3 to 5 candidate profiles who match your rules, dietary requirements, and languages spoken."
          },
          {
            icon: <Calendar className="w-5 h-5" />,
            step: "03",
            title: "Interview Candidates",
            desc: "Speak to matched candidates directly over audio calls or video calls coordinated by your relationship manager. Ask questions about experience and work routine."
          },
          {
            icon: <CheckSquare className="w-5 h-5" />,
            step: "04",
            title: "Complete the Hire",
            desc: "Once you select a candidate, sign the mutual direct salary contract. Pay our one-time placement verification fee, and the worker commences work."
          }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row gap-6 relative z-10">
            <div className="w-13 h-13 bg-verified-500 text-paper-raised rounded-full flex items-center justify-center font-bold text-sm shrink-0 shadow-soft">
              {item.icon}
            </div>
            <div className="bg-paper-raised border border-line p-6 rounded-2xl shadow-soft flex-1 text-left">
              <span className="text-[10px] font-bold text-verified-500 uppercase tracking-widest">{item.step}. step</span>
              <h3 className="font-display text-lg font-bold text-ink mt-0.5">{item.title}</h3>
              <p className="text-xs sm:text-sm text-ink-soft leading-relaxed mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
