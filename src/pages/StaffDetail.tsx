import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROFILES } from '../constants/data';
import type { Employee } from '../constants/data';
import { useAppContext } from '../hooks/useAppContext';
import { 
  Heart, Star, MapPin, CheckCircle, ArrowLeft, ShieldCheck, Languages, Calendar, 
  User, BookOpen, AlertCircle, Phone, ArrowUpRight
} from 'lucide-react';

export const StaffDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist, openBookingModal } = useAppContext();

  // Find candidate by route param
  const profile = PROFILES.find((p) => p.id === id);

  if (!profile) {
    return (
      <div className="container-page py-24 text-center flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-coral-100 text-coral-500 rounded-full flex items-center justify-center border border-coral-200">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="font-display text-2xl font-bold text-ink">Staff Profile Not Found</h2>
        <p className="text-sm text-slate max-w-sm">
          We couldn't find the profile you are looking for. It may have been deactivated or hired by another family.
        </p>
        <Link
          to="/browse"
          className="px-6 py-2.5 bg-verified-500 hover:bg-verified-600 text-paper-raised text-sm font-semibold rounded-xl transition-colors shadow-soft mt-2"
        >
          Return to Marketplace
        </Link>
      </div>
    );
  }

  // Get similar candidates
  const similarProfiles = PROFILES.filter(
    (p) => p.category === profile.category && p.id !== profile.id
  ).slice(0, 3);

  const handleShortlistToggle = () => {
    if (isInWishlist(profile.id)) {
      removeFromWishlist(profile.id);
    } else {
      addToWishlist(profile.id);
    }
  };

  return (
    <div className="container-page py-12 flex flex-col gap-12">
      {/* Back button */}
      <div>
        <Link
          to="/browse"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-verified-500 hover:text-verified-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Marketplace</span>
        </Link>
      </div>

      {/* Main Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Col: Photo & Main actions */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-paper-raised border border-line p-3 rounded-2xl shadow-soft">
            <div className="relative aspect-[4/5] bg-paper-sunken rounded-xl overflow-hidden">
              <img
                src={profile.img}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-verified-500 text-paper-raised text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-soft">
                {profile.verification}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => openBookingModal(profile.category)}
              className="w-full py-3.5 bg-verified-500 hover:bg-verified-600 text-paper-raised font-bold rounded-xl shadow-soft transition-colors text-sm"
            >
              Hire {profile.name}
            </button>
            
            <button
              onClick={handleShortlistToggle}
              className={`w-full py-3 border rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                isInWishlist(profile.id)
                  ? 'bg-coral-50 border-coral-200 text-coral-600'
                  : 'bg-paper-raised hover:bg-paper-sunken border-line text-ink'
              }`}
            >
              <Heart className={`w-4 h-4 ${isInWishlist(profile.id) ? 'fill-current text-coral-500' : ''}`} />
              <span>{isInWishlist(profile.id) ? 'Shortlisted' : 'Add to Shortlist'}</span>
            </button>
          </div>
        </div>

        {/* Right Col: Details Tabs & Logs */}
        <div className="lg:col-span-8 flex flex-col gap-8 text-left">
          {/* Header */}
          <div className="border-b border-line pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <h1 className="font-display text-3xl font-bold text-ink">{profile.name}</h1>
                <span className="flex items-center gap-0.5 text-xs font-bold bg-amber-100 text-amber-600 px-2 py-0.5 rounded-md shrink-0">
                  <Star className="w-3.5 h-3.5 fill-current" /> {profile.rating}
                </span>
              </div>
              <p className="text-sm font-semibold text-verified-600 mt-1">{profile.category} • {profile.availability}</p>
            </div>
            
            <div className="bg-verified-50/50 border border-verified-100 px-4.5 py-3 rounded-xl flex flex-col items-start shrink-0">
              <span className="text-[10px] font-bold text-slate uppercase tracking-wider">Salary Requirement</span>
              <strong className="text-xl font-extrabold text-verified-700">₹{profile.salary.toLocaleString("en-IN")}/mo</strong>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2.5">
            <h3 className="font-display text-lg font-bold text-ink">Professional Profile</h3>
            <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
              {profile.description}
            </p>
          </div>

          {/* Verification Badges Checklist */}
          <div className="bg-paper-raised border border-line p-6 rounded-2xl shadow-soft">
            <h3 className="font-display text-lg font-bold text-ink flex items-center gap-1.5 mb-5">
              <ShieldCheck className="w-5 h-5 text-verified-500" /> Background Check Checklist
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Aadhaar Identity Linkage", desc: "Biometric and profile verification check matched successfully.", status: true },
                { title: "Police Verification Status", desc: "Criminal records check conducted with clean status results.", status: true },
                { title: "Address Verification", desc: "Physical address and local verification completed by agent.", status: true },
                { title: "Medical Fitness Check", desc: "Cleared standard health and infectious disease checkup.", status: profile.verification === 'Medical Check' || profile.verification === 'Fully Verified' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle className={`w-5 h-5 shrink-0 mt-0.5 ${item.status ? 'text-verified-500' : 'text-slate/40'}`} />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-ink">{item.title}</h4>
                    <p className="text-[11px] sm:text-xs text-slate mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Helper stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-paper-sunken/40 p-4 rounded-xl border border-line/60 flex items-center gap-3">
              <User className="w-5 h-5 text-verified-500 shrink-0" />
              <div>
                <span className="block text-[10px] text-slate font-bold uppercase tracking-wide">Age & Gender</span>
                <strong className="text-xs sm:text-sm text-ink font-bold">{profile.age} yrs • {profile.gender}</strong>
              </div>
            </div>

            <div className="bg-paper-sunken/40 p-4 rounded-xl border border-line/60 flex items-center gap-3">
              <Languages className="w-5 h-5 text-verified-500 shrink-0" />
              <div>
                <span className="block text-[10px] text-slate font-bold uppercase tracking-wide">Languages Spoken</span>
                <strong className="text-xs sm:text-sm text-ink font-bold">{profile.languages.join(', ')}</strong>
              </div>
            </div>

            <div className="bg-paper-sunken/40 p-4 rounded-xl border border-line/60 flex items-center gap-3">
              <Calendar className="w-5 h-5 text-verified-500 shrink-0" />
              <div>
                <span className="block text-[10px] text-slate font-bold uppercase tracking-wide">Work Experience</span>
                <strong className="text-xs sm:text-sm text-ink font-bold">{profile.experience} Years</strong>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-lg font-bold text-ink">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2.5">
              {profile.skills.map((skill, idx) => (
                <span key={idx} className="bg-verified-50 text-verified-700 border border-verified-100 text-xs font-bold px-3 py-1.5 rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Similar Profiles Section */}
      {similarProfiles.length > 0 && (
        <section className="border-t border-line pt-16 mt-8">
          <div className="flex justify-between items-end mb-8 text-left">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink">Similar Candidates</h2>
              <p className="text-xs text-slate mt-1">Other verified {profile.category.toLowerCase()}s in your region.</p>
            </div>
            <Link
              to="/browse"
              className="text-xs font-bold text-verified-500 hover:text-verified-600 flex items-center gap-0.5"
            >
              <span>Browse All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {similarProfiles.map((p) => (
              <article key={p.id} className="bg-paper-raised border border-line rounded-xl overflow-hidden shadow-soft group hover:shadow-lifted transition-shadow flex flex-col h-full">
                <div className="h-44 bg-paper-sunken overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-verified-500 text-paper-raised text-[8px] font-extrabold uppercase px-2 py-0.5 rounded-full">
                    {p.verification}
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1 gap-2.5">
                  <div className="flex justify-between items-center">
                    <h4 className="font-display font-bold text-ink text-sm">{p.name}</h4>
                    <span className="flex items-center gap-0.5 text-[10px] font-bold bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded">
                      ★ {p.rating}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate flex flex-col gap-1 border-y border-line/60 py-2">
                    <div className="flex justify-between">
                      <span>Experience</span>
                      <strong>{p.experience} yrs</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Salary</span>
                      <strong className="text-verified-600">₹{p.salary.toLocaleString("en-IN")}/mo</strong>
                    </div>
                  </div>
                  <Link
                    to={`/staff/${p.id}`}
                    onClick={() => {
                      // Workaround to refresh window
                      window.location.href = `/staff/${p.id}`;
                    }}
                    className="w-full py-1.5 mt-auto border border-line hover:bg-paper-sunken text-ink text-[11px] font-bold text-center rounded-md transition-all block"
                  >
                    View Full Profile
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
