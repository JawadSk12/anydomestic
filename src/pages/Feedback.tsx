import React from 'react';
import { FeedbackForm } from '../components/forms/FeedbackForm';
import { Star, Heart, CheckCircle } from 'lucide-react';

export const Feedback: React.FC = () => {
  return (
    <div className="container-page py-16 flex flex-col gap-12 text-left">
      <div>
        <span className="text-xs font-bold uppercase text-verified-500 tracking-wider">Customer Care</span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-ink leading-tight mt-1">
          We Value Your Feedback
        </h1>
        <p className="text-sm sm:text-base text-ink-soft max-w-2xl mt-1 leading-relaxed">
          How was your experience with Any Domestic Help? Did you find the helper selection, background verification, and support team helpful? Share your thoughts to help us serve you better.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Support context */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-paper-raised border border-line p-6 rounded-2xl shadow-soft flex flex-col gap-4">
            <h3 className="font-display text-lg font-bold text-ink border-b border-line pb-3 flex items-center gap-1.5">
              <Heart className="w-5 h-5 text-coral-500 fill-current" /> Why share feedback?
            </h3>
            <ul className="flex flex-col gap-3.5 text-xs text-ink-soft leading-relaxed">
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-verified-500 shrink-0 mt-0.5" />
                <span><strong>Help other families:</strong> Your honest reviews help other households hire helpers with full confidence.</span>
              </li>
              <li className="flex gap-2">
                <span><strong>Identify top professionals:</strong> Candidates with consistently high ratings are highlighted and rewarded on our marketplace.</span>
              </li>
              <li className="flex gap-2">
                <span><strong>Improve support:</strong> We review all complaints and suggestions weekly to optimize our response timings and customer policies.</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50/50 border border-amber-200 p-6 rounded-2xl shadow-soft">
            <div className="flex gap-1.5 mb-2.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <strong className="text-sm font-bold text-ink block">4.9/5 Rating from 10k+ Families</strong>
            <span className="text-xs text-slate block mt-1 leading-relaxed">
              Our commitment is to offer the highest levels of safety and service. Your rating directly affects our team's success metrics.
            </span>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-7">
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
};
