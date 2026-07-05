import React, { useState } from 'react';
import { Loader2, CheckCircle2, UserPlus } from 'lucide-react';
import { SERVICES, CITIES } from '../../constants/data';

export const ReferralForm: React.FC = () => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerPhone: '',
    candidateName: '',
    candidatePhone: '',
    category: '',
    city: '',
    experience: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.referrerName.trim()) newErrors.referrerName = 'Your name is required';
    if (!formData.referrerPhone.match(/^[6-9]\d{9}$/)) {
      newErrors.referrerPhone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.candidateName.trim()) newErrors.candidateName = "Candidate's name is required";
    if (!formData.candidatePhone.match(/^[6-9]\d{9}$/)) {
      newErrors.candidatePhone = "Please enter a valid 10-digit candidate mobile number";
    }
    if (!formData.category) newErrors.category = 'Please select candidate job profile';
    if (!formData.city) newErrors.city = 'Please select candidate city';
    if (!formData.experience) newErrors.experience = 'Please select candidate experience';

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
      setErrors({ form: 'Unable to submit referral. Please try again.' });
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
        <h3 className="font-display text-xl font-bold text-ink mb-2">Referral Submitted Successfully!</h3>
        <p className="text-sm text-slate leading-relaxed mb-4">
          Thank you for referring {formData.candidateName}. Our verification team will contact the candidate to conduct background checks and list their profile. You will be notified once their profile goes live.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              referrerName: '',
              referrerPhone: '',
              candidateName: '',
              candidatePhone: '',
              category: '',
              city: '',
              experience: ''
            });
          }}
          className="text-xs font-semibold text-verified-500 hover:text-verified-600 underline"
        >
          Refer another candidate
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-paper-raised p-6 sm:p-8 rounded-2xl border border-line shadow-soft flex flex-col gap-5 max-w-xl mx-auto">
      <div className="flex items-center gap-2 border-b border-line pb-3">
        <UserPlus className="w-5 h-5 text-verified-500" />
        <h3 className="font-display text-lg font-bold text-ink">Submit an Employee Referral</h3>
      </div>

      {errors.form && (
        <div className="p-3 bg-coral-100 border border-coral-500/20 text-coral-600 rounded-xl text-xs font-semibold">
          {errors.form}
        </div>
      )}

      {/* Referrer Details */}
      <div className="bg-paper-sunken/40 p-4 rounded-xl border border-line/50 flex flex-col gap-3">
        <span className="block text-xs font-bold text-ink uppercase tracking-wider">Your Details (Referrer)</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="ref-name" className="block text-xs font-semibold text-ink-soft mb-1.5">
              Your Full Name
            </label>
            <input
              id="ref-name"
              type="text"
              value={formData.referrerName}
              onChange={(e) => setFormData({ ...formData, referrerName: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg border bg-paper-raised text-sm text-ink outline-none transition-all ${
                errors.referrerName ? 'border-coral-500' : 'border-line focus:border-verified-500'
              }`}
              placeholder="e.g. Anand Kumar"
              disabled={isSubmitting}
            />
            {errors.referrerName && <p className="text-coral-600 text-[10px] font-semibold mt-1">{errors.referrerName}</p>}
          </div>

          <div>
            <label htmlFor="ref-phone" className="block text-xs font-semibold text-ink-soft mb-1.5">
              Your Phone Number
            </label>
            <input
              id="ref-phone"
              type="tel"
              value={formData.referrerPhone}
              onChange={(e) => setFormData({ ...formData, referrerPhone: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg border bg-paper-raised text-sm text-ink outline-none transition-all ${
                errors.referrerPhone ? 'border-coral-500' : 'border-line focus:border-verified-500'
              }`}
              placeholder="Your 10-digit mobile"
              disabled={isSubmitting}
            />
            {errors.referrerPhone && <p className="text-coral-600 text-[10px] font-semibold mt-1">{errors.referrerPhone}</p>}
          </div>
        </div>
      </div>

      {/* Candidate Details */}
      <div className="flex flex-col gap-4">
        <span className="block text-xs font-bold text-ink uppercase tracking-wider">Candidate Details (Worker)</span>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="cand-name" className="block text-xs font-semibold text-ink-soft mb-1.5">
              Candidate Full Name
            </label>
            <input
              id="cand-name"
              type="text"
              value={formData.candidateName}
              onChange={(e) => setFormData({ ...formData, candidateName: e.target.value })}
              className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all ${
                errors.candidateName ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
              }`}
              placeholder="e.g. Ramesh Dev"
              disabled={isSubmitting}
            />
            {errors.candidateName && <p className="text-coral-600 text-[11px] font-semibold mt-1">{errors.candidateName}</p>}
          </div>

          <div>
            <label htmlFor="cand-phone" className="block text-xs font-semibold text-ink-soft mb-1.5">
              Candidate Phone Number
            </label>
            <input
              id="cand-phone"
              type="tel"
              value={formData.candidatePhone}
              onChange={(e) => setFormData({ ...formData, candidatePhone: e.target.value })}
              className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all ${
                errors.candidatePhone ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
              }`}
              placeholder="Candidate's 10-digit mobile"
              disabled={isSubmitting}
            />
            {errors.candidatePhone && <p className="text-coral-600 text-[11px] font-semibold mt-1">{errors.candidatePhone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="cand-cat" className="block text-xs font-semibold text-ink-soft mb-1.5">
              Skill Profile / Category
            </label>
            <select
              id="cand-cat"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all ${
                errors.category ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
              }`}
              disabled={isSubmitting}
            >
              <option value="">Choose Skill</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
            {errors.category && <p className="text-coral-600 text-[11px] font-semibold mt-1">{errors.category}</p>}
          </div>

          <div>
            <label htmlFor="cand-city" className="block text-xs font-semibold text-ink-soft mb-1.5">
              Candidate's City
            </label>
            <select
              id="cand-city"
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

          <div>
            <label htmlFor="cand-exp" className="block text-xs font-semibold text-ink-soft mb-1.5">
              Experience Level
            </label>
            <select
              id="cand-exp"
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className={`w-full px-4 py-2.5 rounded-xl border bg-paper-raised text-sm text-ink outline-none transition-all ${
                errors.experience ? 'border-coral-500 focus:ring-1 focus:ring-coral-500' : 'border-line focus:border-verified-500'
              }`}
              disabled={isSubmitting}
            >
              <option value="">Experience</option>
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3-5">3 - 5 Years</option>
              <option value="5-10">5 - 10 Years</option>
              <option value="10+">10+ Years</option>
            </select>
            {errors.experience && <p className="text-coral-600 text-[11px] font-semibold mt-1">{errors.experience}</p>}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-verified-500 text-paper-raised font-semibold rounded-xl hover:bg-verified-600 transition-colors shadow-soft flex items-center justify-center gap-2 text-sm disabled:opacity-75"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting Referral...</span>
          </>
        ) : (
          <span>Submit Referral & Onboard</span>
        )}
      </button>
    </form>
  );
};
