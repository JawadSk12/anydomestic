import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ToastMessage {
  id: string;
  text: string;
  type: 'success' | 'error';
}

interface ToastProps {
  toasts: ToastMessage[];
  removeToast: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, removeToast }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const ToastItem: React.FC<{ toast: ToastMessage; onClose: () => void }> = ({ toast, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-lifted border backdrop-blur-md ${
        toast.type === 'success'
          ? 'bg-paper-raised/95 border-verified-100 text-ink'
          : 'bg-paper-raised/95 border-coral-100 text-ink'
      }`}
    >
      {toast.type === 'success' ? (
        <CheckCircle className="w-5 h-5 text-verified-500 shrink-0 mt-0.5" />
      ) : (
        <AlertCircle className="w-5 h-5 text-coral-500 shrink-0 mt-0.5" />
      )}
      <div className="flex-1 text-sm font-medium">{toast.text}</div>
      <button
        onClick={onClose}
        className="text-slate hover:text-ink transition-colors shrink-0 mt-0.5"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};
