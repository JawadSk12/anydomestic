import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="container-page py-24 text-center flex flex-col items-center gap-5">
      <div className="w-16 h-16 bg-verified-50 text-verified-500 rounded-full flex items-center justify-center border border-verified-100">
        <HelpCircle className="w-8 h-8 animate-bounce" />
      </div>
      
      <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-ink leading-tight">
        Page Not Found
      </h1>
      
      <p className="text-sm sm:text-base text-slate max-w-sm leading-relaxed">
        The page you are looking for doesn't exist or has been moved to another section.
      </p>

      <div className="flex gap-4 mt-2">
        <Link
          to="/"
          className="px-6 py-2.5 bg-verified-500 hover:bg-verified-600 text-paper-raised text-sm font-semibold rounded-xl transition-all shadow-soft"
        >
          Return Home
        </Link>
        <Link
          to="/browse"
          className="px-6 py-2.5 border border-line hover:bg-paper-sunken text-ink text-sm font-semibold rounded-xl transition-all shadow-soft flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse Staff</span>
        </Link>
      </div>
    </div>
  );
};
