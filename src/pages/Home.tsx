import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SERVICES, PROFILES, WHY_CHOOSE_US, TESTIMONIALS, FAQS, CITIES } from '../constants/data';
import { useAppContext } from '../hooks/useAppContext';
import { 
  Search, ShieldCheck, Heart, Users, Star, ArrowRight, Check, CheckCircle2, 
  MapPin, HelpCircle, ChevronDown, Award, BookOpen, Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { openBookingModal, addToWishlist, isInWishlist } = useAppContext();
  
  // Search state
  const [searchParams, setSearchParams] = useState({
    city: '',
    service: '',
    budget: '',
    availability: ''
  });

  // FAQ open states
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Statistics animation
  const [stats, setStats] = useState({ families: 0, staff: 0, cities: 0 });
  useEffect(() => {
    const duration = 1200; // ms
    const steps = 30;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setStats({
        families: Math.min(Math.floor((10000 / steps) * step), 10000),
        staff: Math.min(Math.floor((5000 / steps) * step), 5000),
        cities: Math.min(Math.floor((50 / steps) * step), 50),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams();
    if (searchParams.city) query.set('city', searchParams.city);
    if (searchParams.service) query.set('service', searchParams.service);
    if (searchParams.budget) query.set('budget', searchParams.budget);
    if (searchParams.availability) query.set('availability', searchParams.availability);
    
    navigate(`/browse?${query.toString()}`);
  };

  return (
    <div className="flex flex-col gap-24 pb-24 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 md:pt-20 bg-gradient-to-b from-verified-50 to-transparent">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-verified-100 text-verified-700 text-xs font-bold rounded-full w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>India's Most Trusted Domestic Helper Portal</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-ink">
              Find <em className="not-italic text-verified-500 font-serif">Trusted</em> Domestic Help in Minutes
            </h1>
            
            <p className="text-base sm:text-lg text-ink-soft leading-relaxed max-w-xl">
              Connect with background-verified house maids, cooks, nannies, caregivers, drivers, and security guards tailored exactly to your home needs.
            </p>

            {/* Search Box */}
            <form onSubmit={handleSearch} className="bg-paper-raised p-4 sm:p-5 rounded-2xl shadow-lifted border border-line grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mt-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-slate uppercase tracking-wider">Location</label>
                <select
                  value={searchParams.city}
                  onChange={(e) => setSearchParams({ ...searchParams, city: e.target.value })}
                  className="w-full text-sm text-ink bg-transparent border-0 outline-none cursor-pointer focus:ring-0 focus:text-verified-500"
                >
                  <option value="">Select City</option>
                  {CITIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5 sm:border-l border-line sm:pl-3.5">
                <label className="text-[10px] font-bold text-slate uppercase tracking-wider">Service Needed</label>
                <select
                  value={searchParams.service}
                  onChange={(e) => setSearchParams({ ...searchParams, service: e.target.value })}
                  className="w-full text-sm text-ink bg-transparent border-0 outline-none cursor-pointer focus:ring-0 focus:text-verified-500"
                >
                  <option value="">Select Service</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5 lg:border-l border-line lg:pl-3.5">
                <label className="text-[10px] font-bold text-slate uppercase tracking-wider">Budget Limit</label>
                <select
                  value={searchParams.budget}
                  onChange={(e) => setSearchParams({ ...searchParams, budget: e.target.value })}
                  className="w-full text-sm text-ink bg-transparent border-0 outline-none cursor-pointer focus:ring-0 focus:text-verified-500"
                >
                  <option value="">Select Budget</option>
                  <option value="under-12000">Under ₹12,000/mo</option>
                  <option value="12000-18000">₹12,000 - ₹18,000/mo</option>
                  <option value="above-18000">Above ₹18,000/mo</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 sm:border-l border-line sm:pl-3.5">
                <label className="text-[10px] font-bold text-slate uppercase tracking-wider">Working Hours</label>
                <select
                  value={searchParams.availability}
                  onChange={(e) => setSearchParams({ ...searchParams, availability: e.target.value })}
                  className="w-full text-sm text-ink bg-transparent border-0 outline-none cursor-pointer focus:ring-0 focus:text-verified-500"
                >
                  <option value="">Select Hours</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Full Time">Full Time (8-10 Hrs)</option>
                  <option value="Live In">24 Hrs (Live In)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 sm:py-0 bg-verified-500 text-paper-raised rounded-xl flex items-center justify-center gap-2 hover:bg-verified-600 shadow-soft font-semibold transition-colors duration-200"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </form>

            {/* Trust highlights */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3.5 mt-3 text-xs font-semibold text-ink-soft">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-verified-500 shrink-0" /> Police Verified
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-verified-500 shrink-0" /> Biometric Checked
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-verified-500 shrink-0" /> Health Screened
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-verified-500 shrink-0" /> 3-Mo Replacement
              </span>
            </div>
          </div>

          {/* Hero Illustration / Image */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="absolute -inset-4 bg-verified-300/10 rounded-full blur-3xl z-0" />
            <div className="relative border-4 border-paper-raised bg-paper-sunken shadow-lifted rounded-[2rem] overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] max-w-md mx-auto z-10">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Happy Indian family with verified housekeeper helper"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-paper-raised/90 backdrop-blur-md px-5 py-4 rounded-2xl shadow-soft border border-line flex items-center gap-3">
                <div className="bg-verified-50 text-verified-500 p-2.5 rounded-xl shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-ink uppercase tracking-wide">Premium Service Guarantee</h4>
                  <p className="text-slate text-xs mt-0.5">Vetted domestic professionals, hired with confidence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-paper-raised py-12 border-y border-line">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <strong className="block font-display text-3xl sm:text-4xl font-extrabold text-ink">
              {stats.families.toLocaleString("en-IN")}+
            </strong>
            <span className="text-xs sm:text-sm font-semibold text-slate mt-1 block">Happy Families</span>
          </div>
          <div>
            <strong className="block font-display text-3xl sm:text-4xl font-extrabold text-ink">
              {stats.staff.toLocaleString("en-IN")}+
            </strong>
            <span className="text-xs sm:text-sm font-semibold text-slate mt-1 block">Verified Professionals</span>
          </div>
          <div>
            <strong className="block font-display text-3xl sm:text-4xl font-extrabold text-ink">
              {stats.cities}+
            </strong>
            <span className="text-xs sm:text-sm font-semibold text-slate mt-1 block">Cities Covered</span>
          </div>
          <div>
            <strong className="block font-display text-3xl sm:text-4xl font-extrabold text-ink">
              4.9★
            </strong>
            <span className="text-xs sm:text-sm font-semibold text-slate mt-1 block">Customer Rating</span>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">Our Services</h2>
          <p className="text-base text-ink-soft">Verified professionals for every domestic and household requirement.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 6).map((service) => (
            <article key={service.id} className="bg-paper-raised rounded-2xl border border-line shadow-soft overflow-hidden group hover:shadow-lifted transition-shadow flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-1 gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-bold text-ink">{service.name}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed line-clamp-2">{service.description}</p>
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
                  <span className="text-xs text-slate font-medium">Starts from <strong className="text-sm font-bold text-ink">₹{service.price.toLocaleString("en-IN")}/mo</strong></span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openBookingModal(service.name)}
                      className="px-3.5 py-2 bg-verified-500 hover:bg-verified-600 text-paper-raised text-xs font-bold rounded-lg transition-colors"
                    >
                      Book Now
                    </button>
                    <Link
                      to={`/browse?service=${encodeURIComponent(service.name)}`}
                      className="px-3.5 py-2 border border-line hover:bg-paper-sunken text-ink text-xs font-semibold rounded-lg transition-all"
                    >
                      Browse
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/browse"
            className="inline-flex items-center gap-2 text-sm font-semibold text-verified-500 hover:text-verified-600 transition-colors"
          >
            <span>View all 13 specialized services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. WHY CHOOSE US & SAFETY */}
      <section className="bg-paper-sunken/40 py-20 border-y border-line">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <span className="text-xs font-bold uppercase text-verified-500 tracking-wider">Uncompromising Standards</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink leading-tight">
              Why Indian Families Choose Any Domestic Help
            </h2>
            <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
              We understand that safety is your primary concern. We've built India's most meticulous vetting and background check mechanism to provide absolute safety.
            </p>
            <div className="mt-2 border-l-2 border-verified-500 pl-4 py-1">
              <span className="block font-semibold text-ink text-sm">3-Month Free Replacements</span>
              <p className="text-slate text-xs mt-1">If the helper leaves or isn't a fit, we replace them instantly at no additional charges.</p>
            </div>
            <Link
              to="/about"
              className="px-5 py-3 bg-verified-500 hover:bg-verified-600 text-paper-raised text-sm font-semibold rounded-xl w-fit shadow-soft transition-colors mt-2"
            >
              Learn About Verification
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="bg-paper-raised p-6 rounded-2xl border border-line shadow-soft flex flex-col gap-3">
                <div className="w-10 h-10 bg-verified-50 text-verified-500 rounded-xl flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED STAFF MARKETPLACE */}
      <section className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="text-left max-w-xl flex flex-col gap-3">
            <span className="text-xs font-bold uppercase text-verified-500 tracking-wider">Verified & Available</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">Featured Professionals</h2>
            <p className="text-base text-ink-soft">Meet some of our top-rated domestic helpers ready to join your home.</p>
          </div>
          <Link
            to="/browse"
            className="px-5 py-3 border border-line hover:bg-paper-sunken text-ink text-sm font-semibold rounded-xl shadow-soft shrink-0 w-fit"
          >
            Go to Marketplace
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROFILES.slice(0, 4).map((profile) => (
            <article key={profile.id} className="bg-paper-raised rounded-2xl border border-line shadow-soft overflow-hidden flex flex-col h-full group hover:shadow-lifted transition-shadow">
              <div className="relative h-64 overflow-hidden bg-paper-sunken">
                <img
                  src={profile.img}
                  alt={profile.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-verified-500 text-paper-raised text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-soft">
                  {profile.verification}
                </div>
                <button
                  onClick={() => {
                    if (isInWishlist(profile.id)) {
                      // Handled in context
                    } else {
                      addToWishlist(profile.id);
                    }
                  }}
                  className={`absolute top-3 right-3 p-2.5 rounded-full shadow-soft transition-colors border ${
                    isInWishlist(profile.id)
                      ? 'bg-coral-500 text-paper-raised border-coral-500'
                      : 'bg-paper-raised/80 backdrop-blur-sm text-slate hover:text-coral-500 border-line'
                  }`}
                  aria-label="Add to Shortlist"
                >
                  <Heart className={`w-4 h-4 ${isInWishlist(profile.id) ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="p-5 flex flex-col flex-1 gap-3.5">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-bold text-ink">{profile.name}</h3>
                    <span className="flex items-center gap-1 text-xs font-bold bg-amber-100 text-amber-600 px-2 py-0.5 rounded-md">
                      <Star className="w-3.5 h-3.5 fill-current" /> {profile.rating}
                    </span>
                  </div>
                  <span className="text-xs text-slate font-medium">{profile.category}</span>
                </div>

                <div className="flex flex-col gap-2 border-y border-line/60 py-3 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate">Experience</span>
                    <strong className="text-ink font-semibold">{profile.experience} years</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate">Availability</span>
                    <strong className="text-ink font-semibold">{profile.availability}</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate">Operating City</span>
                    <span className="text-ink font-semibold flex items-center gap-0.5">
                      <MapPin className="w-3 h-3 text-verified-500" /> {profile.city}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate">Monthly Salary</span>
                    <strong className="text-verified-600 font-bold">₹{profile.salary.toLocaleString("en-IN")}/mo</strong>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-auto">
                  <button
                    onClick={() => openBookingModal(profile.category)}
                    className="py-2 bg-verified-500 hover:bg-verified-600 text-paper-raised text-xs font-bold rounded-lg transition-colors shadow-soft"
                  >
                    Hire Now
                  </button>
                  <Link
                    to={`/staff/${profile.id}`}
                    className="py-2 border border-line hover:bg-paper-sunken text-ink text-xs font-semibold rounded-lg text-center transition-all"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. TIMELINE SECTION */}
      <section className="bg-paper-sunken/40 py-20 border-y border-line">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase text-verified-500 tracking-wider">Simple 4-Step Onboarding</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">How It Works</h2>
            <p className="text-base text-ink-soft">From posting your requirement to active placement in four simple steps.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-line z-0" />
            
            {[
              { step: "1", title: "Specify Requirements", desc: "Submit your preferred service, budget, and shift timing details." },
              { step: "2", title: "Compare Shortlists", desc: "Browse through government and police-verified helper profiles." },
              { step: "3", title: "Interview Candidates", desc: "Connect directly with candidates over phone or video interview calls." },
              { step: "4", title: "Hire with Support", desc: "Finalize monthly contract with 3-months free replacement insurance." }
            ].map((item, idx) => (
              <div key={idx} className="bg-paper-raised p-6 rounded-2xl border border-line shadow-soft relative z-10 flex flex-col gap-4 text-center">
                <div className="w-10 h-10 bg-verified-500 text-paper-raised rounded-full flex items-center justify-center font-bold text-sm mx-auto shadow-soft">
                  {item.step}
                </div>
                <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase text-verified-500 tracking-wider">Customer Stories</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">What Families Say</h2>
          <p className="text-base text-ink-soft">Join thousands of Indian families enjoying premium domestic support.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testi) => (
            <article key={testi.id} className="bg-paper-raised p-8 rounded-2xl border border-line shadow-soft flex flex-col gap-5 relative">
              <div className="flex gap-1">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-ink-soft italic leading-relaxed">
                "{testi.text}"
              </p>
              <div className="flex items-center gap-3.5 mt-auto pt-4 border-t border-line/60">
                <img
                  src={testi.img}
                  alt={testi.author}
                  className="w-10 h-10 rounded-full object-cover bg-paper-sunken shrink-0"
                />
                <div>
                  <strong className="block text-sm font-bold text-ink">{testi.author}</strong>
                  <span className="text-[11px] text-slate font-semibold flex items-center gap-0.5">
                    <MapPin className="w-3 h-3 text-verified-500" /> {testi.city}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="container-page max-w-4xl">
        <div className="text-center mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase text-verified-500 tracking-wider">FAQ</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">Frequently Asked Questions</h2>
          <p className="text-base text-ink-soft">Get answers to the most common booking and verification queries.</p>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-paper-raised rounded-2xl border border-line shadow-soft overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-bold text-base sm:text-lg text-ink focus:outline-none hover:text-verified-500 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 text-sm sm:text-base text-ink-soft leading-relaxed border-t border-line/40 pt-4 bg-paper-sunken/10">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-sm font-semibold text-verified-500 hover:text-verified-600 transition-colors"
          >
            <span>Have more questions? Read our full FAQ</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 9. PREMIUM CALL TO ACTION */}
      <section className="container-page">
        <div className="bg-ink text-paper-raised p-8 sm:p-12 md:p-16 rounded-[2rem] border border-verified-900 shadow-lifted relative overflow-hidden text-center flex flex-col items-center gap-6">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-verified-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />

          <div className="bg-verified-500 text-paper-raised p-3 rounded-2xl shrink-0 w-fit shadow-soft">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-2xl leading-tight">
            Ready to hire background-verified help?
          </h2>
          
          <p className="text-sm sm:text-base text-slate leading-relaxed max-w-lg">
            Post your details in 2 minutes. Receive a customized list of local verified maids, cooks, and caretakers within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
            <button
              onClick={() => openBookingModal()}
              className="px-8 py-3.5 bg-verified-500 hover:bg-verified-600 text-paper-raised font-bold rounded-xl transition-all shadow-soft"
            >
              Get Started Now
            </button>
            <Link
              to="/browse"
              className="px-8 py-3.5 bg-ink-soft hover:bg-slate/40 text-paper-raised font-semibold rounded-xl border border-line/25 transition-all text-center"
            >
              Browse Staff Profiles
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2.5 text-xs text-slate mt-4">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-verified-500" /> Police Verified</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-verified-500" /> Free Replacements</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-verified-500" /> Direct-hire Salaries</span>
          </div>
        </div>
      </section>
    </div>
  );
};
