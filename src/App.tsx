import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider, useAppContext } from './hooks/useAppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Modal } from './components/ui/Modal';
import { HiringForm } from './components/forms/HiringForm';

// Import Pages
import { Home } from './pages/Home';
import { Browse } from './pages/Browse';
import { StaffDetail } from './pages/StaffDetail';
import { Register } from './pages/Register';
import { Contact } from './pages/Contact';
import { Partner } from './pages/Partner';
import { Refer } from './pages/Refer';
import { Feedback } from './pages/Feedback';
import { FaqPage } from './pages/FaqPage';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import { HowItWorks } from './pages/HowItWorks';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Refund } from './pages/Refund';
import { NotFound } from './pages/NotFound';

import { Phone, ArrowUp } from 'lucide-react';

// Scroll to top on route change helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Global Floating Widgets (WhatsApp, Call, ScrollToTop)
const FloatingWidgets: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-6 z-30 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919820108341"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact WhatsApp Support"
        className="w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lifted transition-all hover:scale-105"
      >
        {/* Simple WhatsApp Icon */}
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.981-1.864-1.865-4.343-2.887-6.984-2.888-5.439 0-9.86 4.417-9.865 9.861-.001 1.636.486 3.235 1.411 4.691L1.11 22.185l4.637-1.22c.16.088.32.175.485.25zM17.48 15.01c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-1.35-.67-2.3-1.17-3.15-2.63-.22-.38-.22-.73.08-1.03.26-.27.59-.68.88-1.02.3-.34.39-.58.59-.98.2-.4.1-.75-.05-1.05-.15-.3-.68-1.63-.93-2.24-.25-.61-.51-.53-.68-.54l-.58-.01c-.2 0-.52.07-.79.37-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.2 4.6 2.53 1.09 3.05.88 3.6.83.56-.05 1.79-.73 2.05-1.4.26-.67.26-1.24.18-1.37-.08-.13-.3-.23-.6-.38z" />
        </svg>
      </a>

      {/* Direct Call Button */}
      <a
        href="tel:9820108341"
        aria-label="Call Helpline"
        className="w-12 h-12 bg-verified-500 hover:bg-verified-600 text-paper-raised rounded-full flex items-center justify-center shadow-lifted transition-all hover:scale-105"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          className="w-12 h-12 bg-ink hover:bg-ink-soft text-paper-raised rounded-full flex items-center justify-center shadow-lifted transition-all hover:scale-105 border border-line/20 animate-fade-in"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

const AppShell: React.FC = () => {
  const { isBookingOpen, closeBookingModal, bookingServiceType } = useAppContext();

  return (
    <div className="flex flex-col min-h-screen bg-paper">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/staff/:id" element={<StaffDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/refer" element={<Refer />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWidgets />

      {/* Global Booking Modal */}
      <Modal isOpen={isBookingOpen} onClose={closeBookingModal} title="Employer Registration">
        <HiringForm initialService={bookingServiceType} onSuccessClose={closeBookingModal} />
      </Modal>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <AppShell />
      </Router>
    </AppProvider>
  );
};

export default App;
