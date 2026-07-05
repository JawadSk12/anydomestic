import React, { useState } from 'react';
import { SERVICES, CITIES } from '../../constants/data';
import { Shield, Sparkles, Loader2, CheckCircle2 } from 'lucide-react';

interface HiringFormProps {
  initialService?: string;
  onSuccessClose?: () => void;
}

export const HiringForm: React.FC<HiringFormProps> = ({ initialService, onSuccessClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    service: initialService || '',
    hours: '',
    comments: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.match(/^[6-9]\d{9}$/)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.city) newErrors.city = 'Please select your city';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.hours) newErrors.hours = 'Please select preferred working hours';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch (err) {
      setErrors({ form: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-10 px-4 animate-scale-in">
        <div className="w-16 h-16 bg-verified-50 text-verified-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-display text-2xl font-bold text-ink mb-2">Hiring Request Received!</h3>
        <p className="text-sm text-slate leading-relaxed mb-6 max-w-sm mx-auto">
          Thank you for choosing Any Domestic Help. Our relationship manager will verify your request and send matching profiles within 24 hours.
        </p>
        <button
          onClick={onSuccessClose}
          className="px-6 py-2.5 bg-verified-500 hover:bg-verified-600 text-paper-raised text-sm font-semibold rounded-xl transition-colors"
        >
          Close Window
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {errors.form && (
        <div className="p-3 bg-coral-100 border border-coral-500/20 text-coral-600 rounded-xl text-xs font-semibold">
          {errors.form}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="hire-name" className="block text-xs font-semibold text-ink-soft mb-1.5">
          Full Name
        </label>
        <input
          id="hire-name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all ${
            errors.name ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
          }`}
          placeholder="e.g. Rajesh Sharma"
          disabled={isSubmitting}
        />
        {errors.name && <p className="text-coral-600 text-[11px] font-semibold mt-1">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div>
          <label htmlFor="hire-phone" className="block text-xs font-semibold text-ink-soft mb-1.5">
            Phone Number
          </label>
          <input
            id="hire-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all ${
              errors.phone ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
            }`}
            placeholder="10-digit mobile number"
            disabled={isSubmitting}
          />
          {errors.phone && <p className="text-coral-600 text-[11px] font-semibold mt-1">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="hire-email" className="block text-xs font-semibold text-ink-soft mb-1.5">
            Email Address
          </label>
          <input
            id="hire-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all ${
              errors.email ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
            }`}
            placeholder="e.g. rajesh@gmail.com"
            disabled={isSubmitting}
          />
          {errors.email && <p className="text-coral-600 text-[11px] font-semibold mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* City */}
        <div>
          <label htmlFor="hire-city" className="block text-xs font-semibold text-ink-soft mb-1.5">
            Select City
          </label>
          <select
            id="hire-city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all ${
              errors.city ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
            }`}
            disabled={isSubmitting}
          >
            <option value="">Choose City</option>
            {CITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.city && <p className="text-coral-600 text-[11px] font-semibold mt-1">{errors.city}</p>}
        </div>

        {/* Service */}
        <div>
          <label htmlFor="hire-service" className="block text-xs font-semibold text-ink-soft mb-1.5">
            Service Required
          </label>
          <select
            id="hire-service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all ${
              errors.service ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
            }`}
            disabled={isSubmitting}
          >
            <option value="">Select Service</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
          {errors.service && <p className="text-coral-600 text-[11px] font-semibold mt-1">{errors.service}</p>}
        </div>
      </div>

      {/* Hours of Work */}
      <div>
        <label htmlFor="hire-hours" className="block text-xs font-semibold text-ink-soft mb-1.5">
          Preferred Working Hours
        </label>
        <select
          id="hire-hours"
          value={formData.hours}
          onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
          className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all ${
            errors.hours ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
          }`}
          disabled={isSubmitting}
        >
          <option value="">Select Hours</option>
          <option value="Part Time 4 Hrs">Part Time (4 Hours)</option>
          <option value="Part Time 8 Hours">Part Time (8 Hours)</option>
          <option value="Part Time 10 Hours">Part Time (10 Hours)</option>
          <option value="Full Time 24 Hours (Live In)">Full Time 24 Hours (Live In)</option>
        </select>
        {errors.hours && <p className="text-coral-600 text-[11px] font-semibold mt-1">{errors.hours}</p>}
      </div>

      {/* Comments */}
      <div>
        <label htmlFor="hire-comments" className="block text-xs font-semibold text-ink-soft mb-1.5">
          Additional Requirements (Optional)
        </label>
        <textarea
          id="hire-comments"
          value={formData.comments}
          onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
          rows={3}
          className="w-full px-4 py-2.5 rounded-xl border border-line bg-paper-raised text-sm text-ink outline-none transition-all focus:border-verified-500 resize-none"
          placeholder="e.g. Must cook vegetarian food, preferred age 30-40..."
          disabled={isSubmitting}
        />
      </div>

      <div className="flex flex-col gap-3.5 mt-2">
        <button
          type="submit"
          className="w-full py-3 bg-verified-500 text-paper-raised font-semibold rounded-xl hover:bg-verified-600 transition-colors shadow-soft flex items-center justify-center gap-2 text-sm disabled:opacity-75"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Verifying Request...</span>
            </>
          ) : (
            <span>Submit Hiring Request</span>
          )}
        </button>
        <div className="flex items-center justify-center gap-2 text-[11px] text-slate font-medium text-center">
          <Shield className="w-3.5 h-3.5 text-verified-500" />
          <span>All profiles background checked & verified by Any Domestic Help</span>
        </div>
      </div>
    </form>
  );
};
