import React from 'react';
import { PartnerForm } from '../components/forms/PartnerForm';
import { Network, Handshake, Users, ShieldCheck } from 'lucide-react';

export const Partner: React.FC = () => {
  return (
    <div className="container-page py-16 flex flex-col gap-12 text-left">
      <div>
        <span className="text-xs font-bold uppercase text-verified-500 tracking-wider">Business Partnerships</span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-ink leading-tight mt-1">
          Partner Registration
        </h1>
        <p className="text-sm sm:text-base text-ink-soft max-w-2xl mt-1 leading-relaxed">
          Are you a local staffing agency, freelance recruiter, or vocational training institute? Partner with Any Domestic Help to connect your verified workers with premium, high-paying household jobs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Onboarding steps & Pie chart details */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Modern Profit Share Widget */}
          <div className="bg-ink text-paper-raised p-6 rounded-2xl border border-verified-900 shadow-soft flex flex-col gap-5 text-center items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-verified-300">Joint Growth Program</span>
            
            <h4 className="font-display text-base sm:text-lg font-bold">
              "Alone we can do a little, together we can do so much."
            </h4>

            {/* Custom styled CSS Pie Chart */}
            <div className="relative w-36 h-36 rounded-full border-4 border-verified-700 bg-radial from-verified-500 to-verified-600 flex items-center justify-center overflow-hidden shadow-lifted">
              {/* Left half */}
              <div className="absolute top-0 left-0 w-18 h-36 bg-amber-500 border-r border-verified-700" />
              {/* Right half */}
              <div className="absolute top-0 right-0 w-18 h-36 bg-verified-600" />
              
              {/* Text overlays */}
              <div className="absolute left-3 text-[10px] font-bold text-ink uppercase tracking-wide leading-none text-center">
                Our Partner<br /><span className="text-xs font-extrabold">50%</span>
              </div>
              <div className="absolute right-3 text-[10px] font-bold text-paper-raised uppercase tracking-wide leading-none text-center">
                Kaamkhoj<br /><span className="text-xs font-extrabold">50%</span>
              </div>
            </div>
            
            <p className="text-xs text-slate max-w-xs mt-1">
              Structured 50/50 profit sharing model designed to empower local staffing agencies and recruitment partners.
            </p>
          </div>

          <div className="bg-paper-raised border border-line p-6 rounded-2xl shadow-soft flex flex-col gap-5">
            <h3 className="font-display text-lg font-bold text-ink border-b border-line pb-3">Why Partner with Us?</h3>
            
            <div className="flex gap-3">
              <div className="bg-verified-50 p-2.5 rounded-xl shrink-0 h-fit text-verified-500">
                <Network className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-ink">Broad Customer Base</h4>
                <p className="text-xs text-slate leading-relaxed mt-0.5">
                  Gain access to thousands of premium households looking for daily maids, cooks, and caretakers in tier 1 cities.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-verified-50 p-2.5 rounded-xl shrink-0 h-fit text-verified-500">
                <Handshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-ink">Zero Brokerage From Staff</h4>
                <p className="text-xs text-slate leading-relaxed mt-0.5">
                  We do not take cuts from workers' monthly salaries. All listings and placements are structured with full transparency.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-verified-50 p-2.5 rounded-xl shrink-0 h-fit text-verified-500">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-ink">Free Verification Support</h4>
                <p className="text-xs text-slate leading-relaxed mt-0.5">
                  We assist onboarding partners in conducting biometric Aadhaar checkups and police clearances for their candidates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-7">
          <PartnerForm />
        </div>
      </div>
    </div>
  );
};
