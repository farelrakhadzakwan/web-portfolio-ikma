import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const cvUrl = '/CV%202026%20Ikmalunisa%20Annora.pdf';
  const cvFileName = 'CV 2026 Ikmalunisa Annora.pdf';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-[88vh] md:h-[90vh] bg-paper rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-blush/60 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-4 sm:px-6 py-3.5 bg-gradient-to-r from-softpink/40 via-paper to-blush/30 border-b border-blush/40 flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-2 rounded-lg bg-accentpink/20 text-deeprose shrink-0">
                  <FileText size={18} />
                </div>
                <div className="truncate">
                  <h3 className="text-sm sm:text-base font-bold text-textmain truncate font-display">
                    Ikmalunisa Annora — Curriculum Vitae
                  </h3>
                  <p className="text-[11px] sm:text-xs text-textmuted truncate">
                    Preview Dokumen Resmi • 2026
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* Download Button */}
                <a
                  href={cvUrl}
                  download={cvFileName}
                  className="px-3 py-1.5 rounded-lg bg-accentpink hover:bg-deeprose text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-sm hover:shadow transition-all duration-200"
                  title="Unduh CV"
                >
                  <Download size={14} />
                  <span className="hidden xs:inline sm:inline">Download</span>
                </a>

                {/* Open in New Tab Button */}
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-white/80 hover:bg-white text-textmain border border-black/10 text-xs sm:text-sm font-medium flex items-center gap-1 shadow-2xs hover:shadow-xs transition-all duration-200"
                  title="Buka di tab baru"
                >
                  <ExternalLink size={14} />
                  <span className="hidden md:inline">Tab Baru</span>
                </a>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-textmuted hover:text-textmain hover:bg-black/5 transition-colors ml-1"
                  aria-label="Tutup jendela CV"
                  title="Tutup (Esc)"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body / PDF Viewer */}
            <div className="flex-1 w-full h-full bg-[#525659]/10 relative flex flex-col">
              <iframe
                src={`${cvUrl}#toolbar=1&navpanes=0`}
                title="Curriculum Vitae Preview"
                className="w-full h-full border-0 flex-1"
              />

              {/* Mobile / Fallback info bar */}
              <div className="sm:hidden px-4 py-2 bg-paper border-t border-blush/30 flex items-center justify-between text-xs text-textmuted">
                <span>PDF tidak muncul di hp?</span>
                <a
                  href={cvUrl}
                  download={cvFileName}
                  className="text-deeprose font-semibold flex items-center gap-1 underline"
                >
                  <Download size={12} /> Unduh Langsung
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
