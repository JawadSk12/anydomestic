import React from 'react';
import { HiringForm } from '../components/forms/HiringForm';
import { ShieldCheck, CalendarRange, Users, Sparkles } from 'lucide-react';

export const Register: React.FC = () => {
  return (
    <div className="container-page py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Info Column */}
      <div className="lg:col-span-5 flex flex-col gap-6 text-left lg:sticky lg:top-24">
        <span className="text-xs font-bold uppercase text-verified-500 tracking-wider">Fast & Secure</span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-ink leading-tight">
          Find Verified Household Help Tailored to You
        </h1>
        <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
          Submit your requirements in less than 2 minutes. Our team will verify your booking, curate a custom shortlist of background-checked workers, and coordinate interviews.
        </p>

        {/* Perks list */}
        <div className="flex flex-col gap-4.5 mt-2">
          {[
            { icon: <ShieldCheck className="w-5 h-5 text-verified-500" />, title: "Biometric & Police Verified Staff", desc: "No second guessing. We match you with workers verified via biometric Aadhaar and local police databases." },
            { icon: <CalendarRange className="w-5 h-5 text-verified-500" />, title: "Schedule Direct Interviews", desc: "Speak directly to shortlisted professionals over audio or video calls to assess fit before finalizing." },
            { icon: <Users className="w-5 h-5 text-verified-500" />, title: "3-Month Insurance Coverage", desc: "We provide unlimited free replacements within the first 90 days if the helper leaves or isn't a fit." }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3">
              <div className="bg-verified-50 p-2.5 rounded-xl shrink-0 h-fit">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-sm text-ink">{item.title}</h4>
                <p className="text-xs text-slate leading-relaxed mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Form Card */}
      <div className="lg:col-span-7 bg-paper-raised border border-line p-6 sm:p-8 rounded-2xl shadow-soft">
        <div className="flex items-center gap-2 border-b border-line pb-4 mb-5">
          <Sparkles className="w-5 h-5 text-verified-500" />
          <h3 className="font-display text-lg font-bold text-ink">Employer Booking Form</h3>
        </div>
        
        <HiringForm />
      </div>
    </div>
  );
};
