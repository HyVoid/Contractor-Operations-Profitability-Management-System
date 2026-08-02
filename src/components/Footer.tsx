import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-6 border-t border-[var(--color-border)] text-center text-[12px] text-[var(--color-muted)]">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Data storage for this tool is strictly local (localStorage). No user data is retained on any remote server.</span>
        </div>
        <p className="text-[11px]">
          Project Operations & Job Costing System &copy; {new Date().getFullYear()} — Engineering SaaS Engine
        </p>
      </div>
    </footer>
  );
};
