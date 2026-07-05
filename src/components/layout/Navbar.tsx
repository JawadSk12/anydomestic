import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Phone } from 'lucide-react';
import { useAppContext } from '../../hooks/useAppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../ui/Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { wishlist, openBookingModal } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-paper-raised/95 backdrop-blur-md shadow-soft border-b border-line'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Logo />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/browse"
            className={`text-sm font-medium hover:text-verified-500 transition-colors ${
              location.pathname === '/browse' ? 'text-verified-500' : 'text-ink-soft'
            }`}
          >
            Browse Staff
          </Link>
          <Link
            to="/how-it-works"
            className={`text-sm font-medium hover:text-verified-500 transition-colors ${
              location.pathname === '/how-it-works' ? 'text-verified-500' : 'text-ink-soft'
            }`}
          >
            How It Works
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium hover:text-verified-500 transition-colors ${
              location.pathname === '/about' ? 'text-verified-500' : 'text-ink-soft'
            }`}
          >
            About Us
          </Link>
          <Link
            to="/faq"
            className={`text-sm font-medium hover:text-verified-500 transition-colors ${
              location.pathname === '/faq' ? 'text-verified-500' : 'text-ink-soft'
            }`}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-medium hover:text-verified-500 transition-colors ${
              location.pathname === '/contact' ? 'text-verified-500' : 'text-ink-soft'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+919820108341"
            className="flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-verified-500 transition-colors"
          >
            <Phone className="w-4 h-4 text-verified-500" />
            <span>022-66661314</span>
          </a>
          <Link
            to="/browse"
            className="relative p-2 text-ink-soft hover:text-verified-500 transition-colors"
            aria-label="View Shortlisted Staff"
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 w-4.5 h-4.5 bg-coral-500 text-paper-raised text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                {wishlist.length}
              </span>
            )}
          </Link>
          <button
            onClick={() => openBookingModal()}
            className="px-5 py-2.5 bg-verified-500 text-paper-raised text-sm font-semibold rounded-xl hover:bg-verified-600 shadow-soft transition-all duration-200"
          >
            Hire Now
          </button>
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            to="/browse"
            className="relative p-2 text-ink-soft hover:text-verified-500"
            aria-label="View Shortlisted Staff"
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 w-4.5 h-4.5 bg-coral-500 text-paper-raised text-[10px] font-bold rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-ink hover:text-verified-500 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-paper-raised border-b border-line overflow-hidden"
          >
            <div className="container-page py-6 flex flex-col gap-4">
              <Link
                to="/browse"
                className="text-base font-semibold text-ink hover:text-verified-500 py-2 border-b border-line/40"
              >
                Browse Staff
              </Link>
              <Link
                to="/how-it-works"
                className="text-base font-semibold text-ink hover:text-verified-500 py-2 border-b border-line/40"
              >
                How It Works
              </Link>
              <Link
                to="/about"
                className="text-base font-semibold text-ink hover:text-verified-500 py-2 border-b border-line/40"
              >
                About Us
              </Link>
              <Link
                to="/faq"
                className="text-base font-semibold text-ink hover:text-verified-500 py-2 border-b border-line/40"
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="text-base font-semibold text-ink hover:text-verified-500 py-2 border-b border-line/40"
              >
                Contact
              </Link>
              <div className="flex flex-col gap-3 pt-4">
                <a
                  href="tel:+919820108341"
                  className="flex items-center justify-center gap-2 py-3 border border-line rounded-xl text-ink-soft hover:text-verified-500"
                >
                  <Phone className="w-4 h-4 text-verified-500" />
                  <span>Call 022-66661314</span>
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    openBookingModal();
                  }}
                  className="w-full py-3 bg-verified-500 text-paper-raised font-bold rounded-xl hover:bg-verified-600 transition-colors shadow-soft"
                >
                  Hire Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
