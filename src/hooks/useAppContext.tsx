import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Toast } from '../components/ui/Toast';
import type { ToastMessage } from '../components/ui/Toast';

interface AppContextType {
  wishlist: string[];
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  showToast: (text: string, type?: 'success' | 'error') => void;
  openBookingModal: (serviceType?: string) => void;
  closeBookingModal: () => void;
  bookingServiceType: string | undefined;
  isBookingOpen: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceType, setBookingServiceType] = useState<string | undefined>(undefined);

  const addToWishlist = (id: string) => {
    if (!wishlist.includes(id)) {
      setWishlist((prev) => [...prev, id]);
      showToast('Profile added to your shortlist!', 'success');
    }
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((item) => item !== id));
    showToast('Profile removed from your shortlist', 'success');
  };

  const isInWishlist = (id: string) => wishlist.includes(id);

  const showToast = (text: string, type: 'success' | 'error' = 'success') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, text, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const openBookingModal = (serviceType?: string) => {
    setBookingServiceType(serviceType);
    setIsBookingOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingOpen(false);
    setBookingServiceType(undefined);
  };

  return (
    <AppContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        showToast,
        openBookingModal,
        closeBookingModal,
        bookingServiceType,
        isBookingOpen,
      }}
    >
      {children}
      <Toast toasts={toasts} removeToast={removeToast} />
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
