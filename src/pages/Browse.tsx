import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PROFILES, SERVICES, CITIES } from '../constants/data';
import type { Employee } from '../constants/data';
import { useAppContext } from '../hooks/useAppContext';
import { 
  Heart, Star, MapPin, Search, Filter, X, Grid, List, Sparkles, BookCheck, ShieldAlert 
} from 'lucide-react';

export const Browse: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist, openBookingModal } = useAppContext();

  // Filters State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState(searchParams.get('service') || '');
  const [selectedCity, setSelectedCity] = useState(searchParams.get('city') || '');
  const [selectedAvailability, setSelectedAvailability] = useState(searchParams.get('availability') || '');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedSalary, setSelectedSalary] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [showShortlistedOnly, setShowShortlistedOnly] = useState(false);

  // Sync route query parameters to local filter states if changed
  useEffect(() => {
    const service = searchParams.get('service');
    const city = searchParams.get('city');
    const availability = searchParams.get('availability');
    
    if (service !== null) setSelectedService(service);
    if (city !== null) setSelectedCity(city);
    if (availability !== null) setSelectedAvailability(availability);
  }, [searchParams]);

  // Filtering Logic
  const filteredProfiles = PROFILES.filter((profile) => {
    // Show Shortlisted Only Filter
    if (showShortlistedOnly && !isInWishlist(profile.id)) return false;

    // Search Term Match (Name, Category, Skills, City)
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      const nameMatch = profile.name.toLowerCase().includes(term);
      const categoryMatch = profile.category.toLowerCase().includes(term);
      const skillsMatch = profile.skills.some(s => s.toLowerCase().includes(term));
      const cityMatch = profile.city.toLowerCase().includes(term);
      
      if (!nameMatch && !categoryMatch && !skillsMatch && !cityMatch) return false;
    }

    // Category / Service Filter
    if (selectedService && profile.category !== selectedService) return false;

    // City Filter
    if (selectedCity && profile.city !== selectedCity) return false;

    // Availability Filter
    if (selectedAvailability && profile.availability !== selectedAvailability) return false;

    // Gender Filter
    if (selectedGender && profile.gender !== selectedGender) return false;

    // Experience Filter
    if (selectedExperience) {
      if (selectedExperience === '1-3' && (profile.experience < 1 || profile.experience > 3)) return false;
      if (selectedExperience === '3-6' && (profile.experience < 3 || profile.experience > 6)) return false;
      if (selectedExperience === '6+' && profile.experience < 6) return false;
    }

    // Salary Filter
    if (selectedSalary) {
      if (selectedSalary === 'under-15000' && profile.salary >= 15000) return false;
      if (selectedSalary === '15000-20000' && (profile.salary < 15000 || profile.salary > 20000)) return false;
      if (selectedSalary === 'above-20000' && profile.salary <= 20000) return false;
    }

    return true;
  });

  // Sorting Logic
  const sortedProfiles = [...filteredProfiles].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'exp-high') return b.experience - a.experience;
    if (sortBy === 'sal-low') return a.salary - b.salary;
    if (sortBy === 'sal-high') return b.salary - a.salary;
    return 0;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedService('');
    setSelectedCity('');
    setSelectedAvailability('');
    setSelectedExperience('');
    setSelectedSalary('');
    setSelectedGender('');
    setSortBy('rating');
    setShowShortlistedOnly(false);
    setSearchParams({});
  };

  return (
    <div className="container-page py-10 flex flex-col gap-8">
      {/* Header Banner */}
      <div className="text-left flex flex-col gap-2">
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">
          Verify & Hire Domestic Staff
        </h1>
        <p className="text-sm text-ink-soft max-w-xl">
          Browse through hundreds of police-verified profiles. Compare experience, rates, and schedule interviews.
        </p>
      </div>

      {/* Main Grid: Filters on Left, Profiles on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Filter Sidebar */}
        <aside className="lg:col-span-3 bg-paper-raised border border-line p-5 rounded-2xl shadow-soft flex flex-col gap-6 sticky top-24">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <span className="font-display font-bold text-ink flex items-center gap-1.5 text-base">
              <Filter className="w-4 h-4 text-verified-500" /> Filters
            </span>
            <button
              onClick={clearFilters}
              className="text-xs font-semibold text-verified-500 hover:text-verified-600 transition-colors"
            >
              Reset All
            </button>
          </div>

          {/* Search Term Input */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="filter-search" className="text-xs font-bold text-ink-soft uppercase tracking-wider">Search Keyword</label>
            <div className="relative">
              <input
                id="filter-search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Name, skill, role..."
                className="w-full pl-9 pr-4 py-2 bg-paper-sunken/40 rounded-xl border border-line text-sm text-ink outline-none focus:border-verified-500 transition-all"
              />
              <Search className="w-4 h-4 text-slate absolute left-3 top-3" />
            </div>
          </div>

          {/* Service Filter */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="filter-service" className="text-xs font-bold text-ink-soft uppercase tracking-wider">Service Profile</label>
            <select
              id="filter-service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-3 py-2 bg-paper-sunken/40 rounded-xl border border-line text-sm text-ink outline-none cursor-pointer focus:border-verified-500"
            >
              <option value="">All Services</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>

          {/* City Filter */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="filter-city" className="text-xs font-bold text-ink-soft uppercase tracking-wider">Location / City</label>
            <select
              id="filter-city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-3 py-2 bg-paper-sunken/40 rounded-xl border border-line text-sm text-ink outline-none cursor-pointer focus:border-verified-500"
            >
              <option value="">All Cities</option>
              {CITIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Availability Filter */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="filter-avail" className="text-xs font-bold text-ink-soft uppercase tracking-wider">Availability</label>
            <select
              id="filter-avail"
              value={selectedAvailability}
              onChange={(e) => setSelectedAvailability(e.target.value)}
              className="w-full px-3 py-2 bg-paper-sunken/40 rounded-xl border border-line text-sm text-ink outline-none cursor-pointer focus:border-verified-500"
            >
              <option value="">All Schedules</option>
              <option value="Part Time">Part Time</option>
              <option value="Full Time">Full Time</option>
              <option value="Live In">24 Hrs (Live In)</option>
            </select>
          </div>

          {/* Experience Filter */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="filter-exp" className="text-xs font-bold text-ink-soft uppercase tracking-wider">Experience</label>
            <select
              id="filter-exp"
              value={selectedExperience}
              onChange={(e) => setSelectedExperience(e.target.value)}
              className="w-full px-3 py-2 bg-paper-sunken/40 rounded-xl border border-line text-sm text-ink outline-none cursor-pointer focus:border-verified-500"
            >
              <option value="">All Experience</option>
              <option value="1-3">1 - 3 Years</option>
              <option value="3-6">3 - 6 Years</option>
              <option value="6+">6+ Years</option>
            </select>
          </div>

          {/* Salary Filter */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="filter-salary" className="text-xs font-bold text-ink-soft uppercase tracking-wider">Monthly Salary</label>
            <select
              id="filter-salary"
              value={selectedSalary}
              onChange={(e) => setSelectedSalary(e.target.value)}
              className="w-full px-3 py-2 bg-paper-sunken/40 rounded-xl border border-line text-sm text-ink outline-none cursor-pointer focus:border-verified-500"
            >
              <option value="">All Salaries</option>
              <option value="under-15000">Under ₹15,000</option>
              <option value="15000-20000">₹15,000 - ₹20,000</option>
              <option value="above-20000">Above ₹20,000</option>
            </select>
          </div>

          {/* Gender Filter */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="filter-gender" className="text-xs font-bold text-ink-soft uppercase tracking-wider">Gender</label>
            <select
              id="filter-gender"
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="w-full px-3 py-2 bg-paper-sunken/40 rounded-xl border border-line text-sm text-ink outline-none cursor-pointer focus:border-verified-500"
            >
              <option value="">Any Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
        </aside>

        {/* Right Side: Profiles Panel */}
        <div className="lg:col-span-9 flex flex-col gap-6">
          {/* Top Sort & Filter bar */}
          <div className="bg-paper-raised border border-line px-5 py-4 rounded-2xl shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs font-semibold text-ink-soft">
              <span>Found <strong className="text-ink font-bold">{sortedProfiles.length}</strong> matching profiles</span>
              
              {/* Shortlisted filter trigger */}
              <button
                onClick={() => setShowShortlistedOnly(!showShortlistedOnly)}
                className={`px-3 py-1.5 rounded-full border text-xs font-bold flex items-center gap-1 transition-all ${
                  showShortlistedOnly
                    ? 'bg-coral-50 text-coral-600 border-coral-200'
                    : 'bg-paper hover:bg-paper-sunken border-line text-slate'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${showShortlistedOnly ? 'fill-current text-coral-500' : ''}`} />
                <span>Shortlist ({wishlist.length})</span>
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <label htmlFor="sort-by" className="text-xs text-slate font-medium">Sort By</label>
              <select
                id="sort-by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3.5 py-1.5 bg-paper rounded-xl border border-line text-xs text-ink outline-none cursor-pointer focus:border-verified-500"
              >
                <option value="rating">Highest Rating</option>
                <option value="exp-high">Most Experience</option>
                <option value="sal-low">Salary: Low to High</option>
                <option value="sal-high">Salary: High to Low</option>
              </select>
            </div>
          </div>

          {/* Profiles Grid */}
          {sortedProfiles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProfiles.map((profile) => (
                <article key={profile.id} className="bg-paper-raised rounded-2xl border border-line shadow-soft overflow-hidden flex flex-col h-full group hover:shadow-lifted transition-shadow relative">
                  <div className="relative h-56 bg-paper-sunken">
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
                          removeFromWishlist(profile.id);
                        } else {
                          addToWishlist(profile.id);
                        }
                      }}
                      className={`absolute top-3 right-3 p-2.5 rounded-full shadow-soft transition-colors border ${
                        isInWishlist(profile.id)
                          ? 'bg-coral-500 text-paper-raised border-coral-500'
                          : 'bg-paper-raised/85 backdrop-blur-sm text-slate hover:text-coral-500 border-line'
                      }`}
                      aria-label={isInWishlist(profile.id) ? "Remove from Shortlist" : "Add to Shortlist"}
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

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {profile.skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="bg-verified-50 text-verified-700 text-[10px] font-semibold px-2 py-1 rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-auto pt-2 border-t border-line/40">
                      <button
                        onClick={() => openBookingModal(profile.category)}
                        className="py-2 bg-verified-500 hover:bg-verified-600 text-paper-raised text-xs font-bold rounded-lg transition-colors shadow-soft"
                      >
                        Hire Now
                      </button>
                      <a
                        href={`/staff/${profile.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          // Simulating standard React Route details navigation
                          window.location.href = `/staff/${profile.id}`;
                        }}
                        className="py-2 border border-line hover:bg-paper-sunken text-ink text-xs font-semibold rounded-lg text-center transition-all"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="bg-paper-raised border border-line p-16 rounded-[2rem] text-center shadow-soft flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-paper-sunken text-slate rounded-full flex items-center justify-center mb-2 border border-line">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-bold text-ink">No Staff Profiles Found</h3>
              <p className="text-sm text-slate leading-relaxed max-w-sm">
                No profiles match your search criteria. Please adjust your filters or reset to see all available staff.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-2.5 bg-verified-500 hover:bg-verified-600 text-paper-raised text-sm font-semibold rounded-xl transition-colors shadow-soft mt-2"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
