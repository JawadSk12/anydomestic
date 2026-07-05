import React, { useState } from 'react';
import { Loader2, CheckCircle2, Star } from 'lucide-react';

export const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    rating: 5,
    message: ''
  });

  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    if (!formData.phone.match(/^[6-9]\d{9}$/)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please write your feedback';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch (err) {
      setErrors({ form: 'Feedback submission failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-paper-raised p-8 rounded-2xl border border-verified-100 shadow-soft text-center animate-scale-in max-w-lg mx-auto">
        <div className="w-14 h-14 bg-verified-50 text-verified-500 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-display text-xl font-bold text-ink mb-2">Thank You for Your Feedback!</h3>
        <p className="text-sm text-slate leading-relaxed mb-4">
          Your feedback has been recorded successfully. Ratings from customers like you help us maintain a high standard of trust and safety across India.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              name: '',
              phone: '',
              email: '',
              rating: 5,
              message: ''
            });
          }}
          className="text-xs font-semibold text-verified-500 hover:text-verified-600 underline"
        >
          Submit another feedback
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-paper-raised p-6 sm:p-8 rounded-2xl border border-line shadow-soft flex flex-col gap-5 max-w-xl mx-auto">
      <div className="border-b border-line pb-3">
        <h3 className="font-display text-lg font-bold text-ink">Submit Customer Feedback</h3>
        <p className="text-xs text-slate">Share your experience with our services and verification standard.</p>
      </div>

      {errors.form && (
        <div className="p-3 bg-coral-100 border border-coral-500/20 text-coral-600 rounded-xl text-xs font-semibold">
          {errors.form}
        </div>
      )}

      {/* Star Rating Select */}
      <div>
        <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-2.5">
          Overall Rating
        </label>
        <div className="flex gap-2.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setFormData({ ...formData, rating: star })}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(null)}
              className="p-1 hover:scale-110 transition-transform focus:outline-none"
              aria-label={`Rate ${star} out of 5 stars`}
            >
              <Star
                className={`w-8 h-8 ${
                  star <= (hoverRating ?? formData.rating)
                    ? 'text-amber-500 fill-amber-500'
                    : 'text-line'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Name */}
      <div>
        <label htmlFor="feed-name" className="block text-xs font-semibold text-ink-soft mb-1.5">
          Full Name
        </label>
        <input
          id="feed-name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all ${
            errors.name ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
          }`}
          placeholder="e.g. Ramesh Mehta"
          disabled={isSubmitting}
        />
        {errors.name && <p className="text-coral-600 text-[11px] font-semibold mt-1">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div>
          <label htmlFor="feed-phone" className="block text-xs font-semibold text-ink-soft mb-1.5">
            Phone Number
          </label>
          <input
            id="feed-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all ${
              errors.phone ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
            }`}
            placeholder="10-digit mobile"
            disabled={isSubmitting}
          />
          {errors.phone && <p className="text-coral-600 text-[11px] font-semibold mt-1">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="feed-email" className="block text-xs font-semibold text-ink-soft mb-1.5">
            Email Address
          </label>
          <input
            id="feed-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all ${
              errors.email ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
            }`}
            placeholder="e.g. ramesh@mehta.com"
            disabled={isSubmitting}
          />
          {errors.email && <p className="text-coral-600 text-[11px] font-semibold mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="feed-message" className="block text-xs font-semibold text-ink-soft mb-1.5">
          Your Feedback
        </label>
        <textarea
          id="feed-message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all resize-none ${
            errors.message ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
          }`}
          placeholder="Share your detailed experience, reviews of the hired staff, or any support suggestions..."
          disabled={isSubmitting}
        />
        {errors.message && <p className="text-coral-600 text-[11px] font-semibold mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-verified-500 text-paper-raised font-semibold rounded-xl hover:bg-verified-600 transition-colors shadow-soft flex items-center justify-center gap-2 text-sm disabled:opacity-75"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting Feedback...</span>
          </>
        ) : (
          <span>Submit Review</span>
        )}
      </button>
    </form>
  );
};
