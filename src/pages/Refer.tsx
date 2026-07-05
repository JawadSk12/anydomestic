import React from 'react';
import { ReferralForm } from '../components/forms/ReferralForm';
import { Gift, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Refer: React.FC = () => {
  return (
    <div className="container-page py-16 flex flex-col gap-12 text-left">
      <div>
        <span className="text-xs font-bold uppercase text-verified-500 tracking-wider">Referral Program</span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-ink leading-tight mt-1">
          Refer a Worker & Earn Rewards
        </h1>
        <p className="text-sm sm:text-base text-ink-soft max-w-2xl mt-1 leading-relaxed">
          Know a trustworthy house maid, cook, nanny, driver, or patient care assistant looking for a job? Refer them to Any Domestic Help. Help them find premium employment and earn a referral bonus!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Referral program details */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-paper-raised border border-line p-6 rounded-2xl shadow-soft flex flex-col gap-5">
            <div className="flex items-center gap-2 border-b border-line pb-3">
              <Gift className="w-5 h-5 text-verified-500" />
              <h3 className="font-display text-lg font-bold text-ink">Referral Benefits</h3>
            </div>
            
            <ul className="flex flex-col gap-4 text-sm text-ink-soft">
              <li className="flex gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-verified-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-ink block">₹1,000 Cash Bonus</strong>
                  <span className="text-xs text-slate">Earn ₹1,000 direct bank transfer for every candidate successfully placed for at least 30 days.</span>
                </div>
              </li>
              <li className="flex gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-verified-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-ink block">Help Workers Find Premium Jobs</strong>
                  <span className="text-xs text-slate">We connect helpers with vetted, respectful families who offer competitive salaries, timely payouts, and safe conditions.</span>
                </div>
              </li>
              <li className="flex gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-verified-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-ink block">Free Registration for Helpers</strong>
                  <span className="text-xs text-slate">We never charge registration fees or salary cuts from workers. Their enrollment and listing are 100% free.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-verified-900 text-paper-raised p-6 rounded-2xl border border-verified-700 shadow-soft">
            <h4 className="font-display font-bold text-base mb-2 flex items-center gap-1.5 text-verified-300">
              <ShieldCheck className="w-5 h-5" /> Safety & Trust Note
            </h4>
            <p className="text-xs text-slate leading-relaxed">
              Every referred worker must clear biometric Aadhaar verification, local address verification, and standard police background checks before activation.
            </p>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-7">
          <ReferralForm />
        </div>
      </div>
    </div>
  );
};
