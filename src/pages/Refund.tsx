import React from 'react';

export const Refund: React.FC = () => {
  return (
    <div className="container-page py-16 max-w-3xl text-left flex flex-col gap-6">
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-ink leading-tight border-b border-line pb-4">
        Refund & Replacement Policy
      </h1>
      <span className="text-xs text-slate font-medium">Last updated: July 4, 2026</span>
      
      <div className="text-sm sm:text-base text-ink-soft leading-relaxed flex flex-col gap-5">
        <p>
          We stand by the quality of our verification and helper profiles. This policy explains our replacement insurance terms and refund conditions for placements.
        </p>

        <h3 className="font-display text-lg font-bold text-ink mt-4">1. 90-Day Free Replacement Policy</h3>
        <p>
          If your hired domestic professional (housemaid, cook, nanny, driver, caregiver) leaves, resigns, or does not meet expectations within the first 90 calendar days of placement startup:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>We will provide matching candidate profiles and organize interviews for a replacement helper.</li>
          <li>We offer unlimited replacements during this 90-day period at zero additional fees.</li>
        </ul>

        <h3 className="font-display text-lg font-bold text-ink mt-4">2. Refund Conditions</h3>
        <p>
          Our one-time placement verification fee covers database administrative costs, biometric validations, and police audits, which are non-refundable. However, we offer refunds under the following special conditions:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>If we fail to send any matching replacement candidate profiles within 14 business days of you filing a replacement request.</li>
          <li>In such cases, a prorated refund of the portal placement fee will be initiated back to your original payment source.</li>
        </ul>

        <h3 className="font-display text-lg font-bold text-ink mt-4">3. How to Request Replacements</h3>
        <p>
          To log a replacement request or report worker absences, please email your assigned Relationship Manager or contact our helpdesk at <a href="mailto:support@anydomestic.com" className="text-verified-500 hover:underline">support@anydomestic.com</a>.
        </p>
      </div>
    </div>
  );
};
