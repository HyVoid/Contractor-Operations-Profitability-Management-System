import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface ResetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmReset: () => void;
}

export const ResetModal: React.FC<ResetModalProps> = ({ isOpen, onClose, onConfirmReset }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[var(--color-surface)] rounded-[14px] shadow-[var(--shadow-lg)] w-full max-w-md p-6 relative animate-fade-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[var(--color-muted)] hover:text-[var(--color-primary)] rounded-md hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-red-100 text-[var(--color-negative)] flex items-center justify-center shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-[var(--color-primary)]">
              Reset Application Data?
            </h3>
            <p className="text-[12px] text-[var(--color-muted)]">
              This action will clear custom entries and restore standard demo data.
            </p>
          </div>
        </div>

        <p className="text-[13px] text-[var(--color-body-text)] my-4 bg-red-50 p-3 rounded-md border border-red-200/80">
          All current sheets (Materials, Labor Rates, Leads, Quotes, Jobs, Logs, Usages) will be overwritten with default factory records. This cannot be undone unless you exported a backup.
        </p>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[13px] font-medium text-[var(--color-muted)] hover:text-[var(--color-primary)]"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirmReset();
              onClose();
            }}
            className="px-5 py-2 text-[13px] font-medium bg-[var(--color-negative)] hover:bg-red-700 text-white rounded-md shadow-sm transition-colors"
          >
            Yes, Reset All Data
          </button>
        </div>
      </div>
    </div>
  );
};
