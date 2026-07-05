import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, Shield, RefreshCw, CreditCard } from 'lucide-react';

interface FaqGroup {
  category: string;
  icon: React.ReactNode;
  items: { q: string; a: string }[];
}

export const FaqPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const faqGroups: FaqGroup[] = [
    {
      category: "General Queries",
      icon: <HelpCircle className="w-5 h-5 text-verified-500" />,
      items: [
        { q: "What is Any Domestic Help?", a: "Any Domestic Help is a premium, verified domestic worker marketplace connecting Indian families with trained maids, cooks, drivers, babysitters, and elder care assistants." },
        { q: "Which cities do you operate in?", a: "We actively provide household staff across 50+ major cities in India, including Mumbai, Delhi NCR, Bangalore, Pune, Hyderabad, Chennai, Kolkata, and Jaipur." },
        { q: "How long does the hiring process take?", a: "Typically, you will receive matching worker profiles within 24 to 48 hours of posting your requirement. Interviews can be scheduled immediately." }
      ]
    },
    {
      category: "Verification & Safety",
      icon: <Shield className="w-5 h-5 text-verified-500" />,
      items: [
        { q: "How are helper profiles verified?", a: "All helpers are verified via a 4-level check: biometric Aadhaar identity validation, physical address audit, medical health screening, and formal criminal police verification." },
        { q: "Can I see copies of verification documents?", a: "Yes. Once you shortlist a candidate and agree to interview them, we provide a complete background check report including verified badges." },
        { q: "Is police verification mandatory?", a: "Yes. We do not list any helper on our active marketplace without initiating police record checks first to ensure absolute safety." }
      ]
    },
    {
      category: "Replacement & Trial",
      icon: <RefreshCw className="w-5 h-5 text-verified-500" />,
      items: [
        { q: "What if the helper leaves the job?", a: "We provide a 3-month free replacement guarantee. If a helper leaves for any reason, we will provide a new matching candidate at zero extra charge." },
        { q: "Can I get a trial day with the candidate?", a: "Yes, you can request a 1-day paid trial with the candidate to assess their work quality, compatibility, and routine fit before signing the contract." }
      ]
    },
    {
      category: "Payments & Fees",
      icon: <CreditCard className="w-5 h-5 text-verified-500" />,
      items: [
        { q: "Do I pay the salary to Any Domestic Help?", a: "No. You pay the monthly salary directly to the helper. We only charge a one-time portal placement fee when the hiring is completed." },
        { q: "What are your placement charges?", a: "Our placement fee depends on the category of help hired and the daily hours. We will provide a transparent quotation prior to candidate interviews." }
      ]
    }
  ];

  const toggleFaq = (groupIndex: number, itemIndex: number) => {
    const key = `${groupIndex}-${itemIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  // Filter FAQs based on search keyword
  const getFilteredFaqs = () => {
    if (!searchTerm.trim()) return faqGroups;

    return faqGroups.map((group) => {
      const filteredItems = group.items.filter(
        (item) => 
          item.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
          item.a.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...group, items: filteredItems };
    }).filter((group) => group.items.length > 0);
  };

  const filteredGroups = getFilteredFaqs();

  return (
    <div className="container-page py-16 max-w-4xl text-left flex flex-col gap-10">
      <div className="text-center flex flex-col gap-3.5">
        <span className="text-xs font-bold uppercase text-verified-500 tracking-wider">Help Center</span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-ink leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-ink-soft max-w-lg mx-auto leading-relaxed">
          Find instant answers regarding candidate verification, replacement policies, salaries, and operating cities.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-md w-full mx-auto mt-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search questions (e.g. police, replacement)..."
            className="w-full pl-10 pr-4 py-3 bg-paper-raised rounded-xl border border-line text-sm text-ink outline-none focus:border-verified-500 transition-all shadow-soft"
          />
          <Search className="w-5 h-5 text-slate absolute left-3 top-3.5" />
        </div>
      </div>

      {/* Accordions Grouped */}
      {filteredGroups.length > 0 ? (
        <div className="flex flex-col gap-10">
          {filteredGroups.map((group, gIdx) => (
            <div key={gIdx} className="flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b border-line pb-2.5">
                {group.icon}
                <h3 className="font-display text-lg font-bold text-ink">{group.category}</h3>
              </div>

              <div className="flex flex-col gap-3.5">
                {group.items.map((item, iIdx) => {
                  const key = `${gIdx}-${iIdx}`;
                  const isOpen = openIndex === key;
                  return (
                    <div key={iIdx} className="bg-paper-raised rounded-xl border border-line shadow-soft overflow-hidden">
                      <button
                        onClick={() => toggleFaq(gIdx, iIdx)}
                        className="w-full px-5 py-4.5 flex items-center justify-between text-left font-display font-bold text-sm sm:text-base text-ink focus:outline-none hover:text-verified-500 transition-colors"
                      >
                        <span>{item.q}</span>
                        <ChevronDown className={`w-4.5 h-4.5 text-slate transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 text-xs sm:text-sm text-ink-soft leading-relaxed border-t border-line/40 pt-3.5 bg-paper-sunken/10">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-paper-raised border border-line p-12 rounded-2xl text-center shadow-soft">
          <HelpCircle className="w-12 h-12 text-slate mx-auto mb-3" />
          <h4 className="font-display font-bold text-ink">No Questions Match Your Search</h4>
          <p className="text-xs text-slate mt-1">Try searching different keywords like "biometric", "trial", or "fees".</p>
          <button
            onClick={() => setSearchTerm('')}
            className="text-xs font-semibold text-verified-500 hover:text-verified-600 mt-3 underline"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
};
