import React from 'react';

export const Terms: React.FC = () => {
  return (
    <div className="container-page py-16 max-w-3xl text-left flex flex-col gap-6">
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-ink leading-tight border-b border-line pb-4">
        Terms of Service
      </h1>
      <span className="text-xs text-slate font-medium">Last updated: July 4, 2026</span>
      
      <div className="text-sm sm:text-base text-ink-soft leading-relaxed flex flex-col gap-5">
        <p>
          Welcome to Any Domestic Help. By accessing our portal, listing worker profiles, or hiring domestic staff, you agree to comply with the following Terms and Conditions of use.
        </p>

        <h3 className="font-display text-lg font-bold text-ink mt-4">1. Direct Helper Employment Contract</h3>
        <p>
          Any Domestic Help is a marketplace connecting families with helpers. The actual employment agreement and monthly salary contracts are directly signed between the employer (family) and the worker. Any Domestic Help is not an employer of the domestic worker.
        </p>

        <h3 className="font-display text-lg font-bold text-ink mt-4">2. Placement and Verification Fees</h3>
        <p>
          Employers agree to pay a one-time portal placement fee when hiring is finalized. This fee covers database indexing, biometric checkups, and police background verifications. All placement invoices must be paid within 3 working days of helper commencement.
        </p>

        <h3 className="font-display text-lg font-bold text-ink mt-4">3. Vetting Disclaimer</h3>
        <p>
          While we execute multi-level background audits (Aadhaar verification, police checks, medical logs) to maximize safety, we encourage families to review physical documents and perform reference checks prior to placement. Any Domestic Help is not liable for disputes or helper actions.
        </p>

        <h3 className="font-display text-lg font-bold text-ink mt-4">4. Governing Law</h3>
        <p>
          These terms are governed and construed in accordance with the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts in Mumbai.
        </p>
      </div>
    </div>
  );
};
