import React, { useState } from 'react';
import { Loader2, CheckCircle2, Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.match(/^[6-9]\d{9}$/)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';
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
      setErrors({ form: 'Unable to send message right now. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-paper-raised p-8 rounded-2xl border border-verified-100 shadow-soft text-center animate-scale-in">
        <div className="w-14 h-14 bg-verified-50 text-verified-500 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-display text-xl font-bold text-ink mb-2">Message Sent Successfully!</h3>
        <p className="text-sm text-slate leading-relaxed mb-4">
          Thank you for reaching out. A client support specialist will call or email you back shortly.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({ name: '', phone: '', email: '', message: '' });
          }}
          className="text-xs font-semibold text-verified-500 hover:text-verified-600 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-paper-raised p-6 sm:p-8 rounded-2xl border border-line shadow-soft flex flex-col gap-5">
      <h3 className="font-display text-lg font-bold text-ink border-b border-line pb-3">Send a Message</h3>

      {errors.form && (
        <div className="p-3 bg-coral-100 border border-coral-500/20 text-coral-600 rounded-xl text-xs font-semibold">
          {errors.form}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="block text-xs font-semibold text-ink-soft mb-1.5">
          Your Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all ${
            errors.name ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
          }`}
          placeholder="e.g. Amit Sen"
          disabled={isSubmitting}
        />
        {errors.name && <p className="text-coral-600 text-[11px] font-semibold mt-1">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className="block text-xs font-semibold text-ink-soft mb-1.5">
            Phone Number
          </label>
          <input
            id="contact-phone"
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
          <label htmlFor="contact-email" className="block text-xs font-semibold text-ink-soft mb-1.5">
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all ${
              errors.email ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
            }`}
            placeholder="e.g. amit@gmail.com"
            disabled={isSubmitting}
          />
          {errors.email && <p className="text-coral-600 text-[11px] font-semibold mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold text-ink-soft mb-1.5">
          Your Message
        </label>
        <textarea
          id="contact-message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all resize-none ${
            errors.message ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
          }`}
          placeholder="How can we help you? Please describe your request..."
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
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
};
