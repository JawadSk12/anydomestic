import React from 'react';
import { Target, Eye, Landmark, CircleCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="container-page py-16 flex flex-col gap-20 text-left">
      {/* Hero section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <span className="text-xs font-bold uppercase text-verified-500 tracking-wider">About Us</span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-ink leading-tight">
            Building the Infrastructure of <em className="not-italic text-verified-500 font-serif">Trust</em> for Domestic Hiring
          </h1>
          <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
            Founded with a vision to streamline household helper hiring, Any Domestic Help connects families with background-verified maids, nannies, cooks, caregivers, and drivers. We combine digital biometric authentication and physical police record audits to deliver absolute peace of mind.
          </p>
          <div className="flex gap-4">
            <Link
              to="/browse"
              className="px-6 py-3 bg-verified-500 hover:bg-verified-600 text-paper-raised text-sm font-semibold rounded-xl shadow-soft transition-colors"
            >
              Browse Verified Staff
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-line hover:bg-paper-sunken text-ink text-sm font-semibold rounded-xl shadow-soft transition-all"
            >
              Contact Support
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-4 bg-verified-100/50 rounded-full blur-3xl z-0" />
          <div className="relative border-4 border-paper-raised bg-paper-sunken shadow-lifted rounded-[2rem] overflow-hidden aspect-[4/3] max-w-lg mx-auto z-10">
            <img
              src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80"
              alt="Caregiver and boy playing with wooden blocks"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission */}
        <div className="bg-paper-raised border border-line p-8 rounded-2xl shadow-soft flex gap-5">
          <div className="w-12 h-12 bg-verified-50 text-verified-500 rounded-xl flex items-center justify-center font-bold shrink-0">
            <Target className="w-6 h-6" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-display text-xl font-bold text-ink">Our Mission</h3>
            <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
              Our mission is to provide you with a service experience unmatched by any other organization.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="bg-paper-raised border border-line p-8 rounded-2xl shadow-soft flex gap-5">
          <div className="w-12 h-12 bg-verified-50 text-verified-500 rounded-xl flex items-center justify-center font-bold shrink-0">
            <Eye className="w-6 h-6" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-display text-xl font-bold text-ink">Our Vision</h3>
            <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
              Our vision is to be the most competent and innovative organization by making the difference through our people, consisting of a team of dedicated professionals who value customers, deliver on promises and contribute to sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Our Endeavour */}
      <section className="bg-paper-sunken/40 p-8 sm:p-12 rounded-[2rem] border border-line flex flex-col gap-8">
        <div className="text-left">
          <span className="text-xs font-bold uppercase text-verified-500 tracking-wider">Accredited Support Standards</span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink mt-1">Our Endeavour</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Complete Solution Under One Roof", desc: "Access verified housekeepers, cooks, babysitters, nannies, and drivers in one secure location." },
            { title: "Creating Value for Our Clients", desc: "Offering high-touch relationship management support and free 90-day replacements." },
            { title: "Well Trained & Experienced Staff", desc: "Vetted customer care relationship managers always ready to assist you." },
            { title: "Professional Approach", desc: "Transparent quotes, structured worker profiles, and legally-binding direct contracts." },
            { title: "Smart Placement Technology", desc: "Using technology to create proximity and smooth coordination between Employer's and Employee's workplace." }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3.5 bg-paper-raised p-5 rounded-xl border border-line shadow-soft">
              <CircleCheck className="w-5 h-5 text-verified-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-ink">{item.title}</h4>
                <p className="text-xs text-slate leading-relaxed mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accreditation badges */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <div className="w-12 h-12 bg-verified-50 text-verified-500 rounded-full flex items-center justify-center mx-auto mb-2 border border-verified-100">
          <Landmark className="w-6 h-6" />
        </div>
        <h2 className="font-display text-2xl font-bold text-ink">ISO 27001 Certified Security Standard</h2>
        <p className="text-sm text-ink-soft leading-relaxed">
          Any Domestic Help treats worker documents and customer data with corporate privacy parameters. All files are encrypted using secure SSL certificates, meeting global information security standards.
        </p>
      </section>
    </div>
  );
};
