import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <div className="container-page py-16 max-w-3xl text-left flex flex-col gap-6">
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-ink leading-tight border-b border-line pb-4">
        Privacy Policy
      </h1>
      <span className="text-xs text-slate font-medium">Last updated: July 4, 2026</span>
      
      <div className="text-sm sm:text-base text-ink-soft leading-relaxed flex flex-col gap-5">
        <p>
          At Any Domestic Help, we prioritize the confidentiality and safety of our customers and partners. This Privacy Policy details how we collect, store, verify, and utilize personal and background check information.
        </p>

        <h3 className="font-display text-lg font-bold text-ink mt-4">1. Information We Collect</h3>
        <p>
          We collect personal credentials from employers and candidates to facilitate hiring matches and security checks:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li><strong>Employers:</strong> Full name, phone number, email, operating city, and household helper criteria.</li>
          <li><strong>Candidates:</strong> Biometric Aadhaar credentials, local residential address records, health reports, and local police verification status documents.</li>
        </ul>

        <h3 className="font-display text-lg font-bold text-ink mt-4">2. Verification Vetting Policy</h3>
        <p>
          Aadhaar authentication and police record verification are carried out through government-authorized third-party API services and station audits. These details are stored securely on SSL-encrypted servers and are only visible to matched, verified employers.
        </p>

        <h3 className="font-display text-lg font-bold text-ink mt-4">3. Data Retention and Deletion</h3>
        <p>
          Employer details and candidate files are retained for the duration of the staffing contract to facilitate replacement guarantees. Users can request complete profile deletion or account termination by contacting our compliance officer at <a href="mailto:privacy@anydomestic.com" className="text-verified-500 hover:underline">privacy@anydomestic.com</a>.
        </p>

        <h3 className="font-display text-lg font-bold text-ink mt-4">4. Compliance</h3>
        <p>
          We operate in accordance with the Information Technology Act, 2000 and standard Indian data security directives, ensuring secure processing of all biometric and financial logs.
        </p>
      </div>
    </div>
  );
};
