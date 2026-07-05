import React, { useState } from 'react';
import { Loader2, CheckCircle2, Building2 } from 'lucide-react';
import { CITIES } from '../../constants/data';

export const PartnerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    agencyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: '',
    partnerType: '',
    workerCount: '',
    details: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.agencyName.trim()) newErrors.agencyName = 'Agency / Partner name is required';
    if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact person name is required';
    if (!formData.phone.match(/^[6-9]\d{9}$/)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.city) newErrors.city = 'Please select your operating city';
    if (!formData.partnerType) newErrors.partnerType = 'Please select partner type';
    if (!formData.workerCount) newErrors.workerCount = 'Please specify estimated worker count';
    
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
      setErrors({ form: 'Submission failed. Please try again.' });
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
        <h3 className="font-display text-xl font-bold text-ink mb-2">Partner Application Received!</h3>
        <p className="text-sm text-slate leading-relaxed mb-4">
          Thank you for applying to partner with Any Domestic Help. Our Partner Onboarding Team will review your credentials and contact you within 2 working days.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              agencyName: '',
              contactPerson: '',
              phone: '',
              email: '',
              city: '',
              partnerType: '',
              workerCount: '',
              details: ''
            });
          }}
          className="text-xs font-semibold text-verified-500 hover:text-verified-600 underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-paper-raised p-6 sm:p-8 rounded-2xl border border-line shadow-soft flex flex-col gap-5 max-w-xl mx-auto">
      <div className="flex items-center gap-2 border-b border-line pb-3">
        <Building2 className="w-5 h-5 text-verified-500" />
        <h3 className="font-display text-lg font-bold text-ink">Register as an Onboarding Partner</h3>
      </div>

      {errors.form && (
        <div className="p-3 bg-coral-100 border border-coral-500/20 text-coral-600 rounded-xl text-xs font-semibold">
          {errors.form}
        </div>
      )}

      {/* Agency Name */}
      <div>
        <label htmlFor="partner-agency" className="block text-xs font-semibold text-ink-soft mb-1.5">
          Agency / Company / Individual Name
        </label>
        <input
          id="partner-agency"
          type="text"
          value={formData.agencyName}
          onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
          className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all ${
            errors.agencyName ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
          }`}
          placeholder="e.g. Royal Staffing Solutions"
          disabled={isSubmitting}
        />
        {errors.agencyName && <p className="text-coral-600 text-[11px] font-semibold mt-1">{errors.agencyName}</p>}
      </div>

      {/* Contact Person */}
      <div>
        <label htmlFor="partner-contact" className="block text-xs font-semibold text-ink-soft mb-1.5">
          Primary Contact Person
        </label>
        <input
          id="partner-contact"
          type="text"
          value={formData.contactPerson}
          onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
          className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all ${
            errors.contactPerson ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
          }`}
          placeholder="e.g. Mr. Karan Johar"
          disabled={isSubmitting}
        />
        {errors.contactPerson && <p className="text-coral-600 text-[11px] font-semibold mt-1">{errors.contactPerson}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div>
          <label htmlFor="partner-phone" className="block text-xs font-semibold text-ink-soft mb-1.5">
            Phone Number
          </label>
          <input
            id="partner-phone"
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
          <label htmlFor="partner-email" className="block text-xs font-semibold text-ink-soft mb-1.5">
            Email Address
          </label>
          <input
            id="partner-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all ${
              errors.email ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
            }`}
            placeholder="e.g. partner@agency.com"
            disabled={isSubmitting}
          />
          {errors.email && <p className="text-coral-600 text-[11px] font-semibold mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* City */}
        <div className="sm:col-span-1">
          <label htmlFor="partner-city" className="block text-xs font-semibold text-ink-soft mb-1.5">
            Select City
          </label>
          <select
            id="partner-city"
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

        {/* Partner Type */}
        <div className="sm:col-span-1">
          <label htmlFor="partner-type" className="block text-xs font-semibold text-ink-soft mb-1.5">
            Partner Type
          </label>
          <select
            id="partner-type"
            value={formData.partnerType}
            onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all ${
              errors.partnerType ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
            }`}
            disabled={isSubmitting}
          >
            <option value="">Select Type</option>
            <option value="agency">Staffing Agency</option>
            <option value="freelance">Freelance Recruiter</option>
            <option value="training">Training Institute</option>
            <option value="other">NGO / Other</option>
          </select>
          {errors.partnerType && <p className="text-coral-600 text-[11px] font-semibold mt-1">{errors.partnerType}</p>}
        </div>

        {/* Worker Count */}
        <div className="sm:col-span-1">
          <label htmlFor="partner-workers" className="block text-xs font-semibold text-ink-soft mb-1.5">
            Staff Size
          </label>
          <select
            id="partner-workers"
            value={formData.workerCount}
            onChange={(e) => setFormData({ ...formData, workerCount: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all ${
              errors.workerCount ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
            }`}
            disabled={isSubmitting}
          >
            <option value="">No. of Workers</option>
            <option value="1-10">1 - 10 staff</option>
            <option value="11-50">11 - 50 staff</option>
            <option value="51-200">51 - 200 staff</option>
            <option value="200+">200+ staff</option>
          </select>
          {errors.workerCount && <p className="text-coral-600 text-[11px] font-semibold mt-1">{errors.workerCount}</p>}
        </div>
      </div>

      {/* Details */}
      <div>
        <label htmlFor="partner-details" className="block text-xs font-semibold text-ink-soft mb-1.5">
          Tell us about your services and background check policies (Optional)
        </label>
        <textarea
          id="partner-details"
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          rows={3}
          className="w-full px-4 py-2.5 rounded-xl border border-line bg-paper-raised text-sm text-ink outline-none transition-all focus:border-verified-500 resize-none"
          placeholder="List kinds of workers you provide and details about your vetting standard..."
          disabled={isSubmitting}
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-verified-500 text-paper-raised font-semibold rounded-xl hover:bg-verified-600 transition-colors shadow-soft flex items-center justify-center gap-2 text-sm disabled:opacity-75"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting Application...</span>
          </>
        ) : (
          <span>Apply for Partnership</span>
        )}
      </button>
    </form>
  );
};
