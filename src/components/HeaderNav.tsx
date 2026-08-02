import React from 'react';
import {
  Briefcase,
  Database,
  Users,
  FileSpreadsheet,
  TrendingUp,
  Download,
  Upload,
  RefreshCw,
  FileUp,
  CheckCircle2,
} from 'lucide-react';
import { TabConfig, TabKey } from '../types';
import { TABS } from '../initialData';

interface HeaderNavProps {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
  lastSavedAt: string;
  onExportBackup: () => void;
  onImportBackup: () => void;
  onOpenBulkImport: () => void;
  onOpenResetModal: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeTab,
  setActiveTab,
  lastSavedAt,
  onExportBackup,
  onImportBackup,
  onOpenBulkImport,
  onOpenResetModal,
}) => {
  const formattedSavedTime = lastSavedAt
    ? new Date(lastSavedAt).toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    : 'Just now';

  return (
    <header className="sticky top-0 z-40 bg-[var(--nav-bg)] border-b border-[var(--nav-border)] shadow-[var(--shadow-nav)]">
      {/* Top Header Row (56px) */}
      <div className="max-w-[1400px] mx-auto px-6 h-[56px] flex items-center justify-between gap-4">
        {/* Brand & Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-lg shadow-sm">
            <Briefcase className="w-5 h-5 text-[var(--color-accent)]" />
          </div>
          <div>
            <h1 className="font-heading font-bold text-lg text-[var(--color-primary)] leading-tight tracking-tight">
              Contractor Operations & Profitability Management System
            </h1>
            <p className="text-[11px] text-[var(--color-muted)] font-medium">
              SaaS Job Costing Engine & Profit Analytics
            </p>
          </div>
        </div>

        {/* Global Action Toolbar */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Last Saved Status Indicator */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-medium rounded-full border border-emerald-200/60">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Last saved: {formattedSavedTime}</span>
          </div>

          <button
            onClick={onOpenBulkImport}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-[var(--color-primary)] bg-[var(--color-bg)] hover:bg-slate-200/60 rounded-md transition-colors"
            title="Import CSV into any table"
          >
            <FileUp className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span className="hidden sm:inline">Bulk CSV Import</span>
          </button>

          <button
            onClick={onExportBackup}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-[var(--color-primary)] bg-[var(--color-bg)] hover:bg-slate-200/60 rounded-md transition-colors"
            title="Download full JSON state backup"
          >
            <Download className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span className="hidden sm:inline">Export Backup</span>
          </button>

          <button
            onClick={onImportBackup}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-[var(--color-primary)] bg-[var(--color-bg)] hover:bg-slate-200/60 rounded-md transition-colors"
            title="Upload JSON backup file to restore"
          >
            <Upload className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span className="hidden sm:inline">Import Backup</span>
          </button>

          <button
            onClick={onOpenResetModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-[var(--color-negative)] bg-red-50 hover:bg-red-100/80 rounded-md transition-colors"
            title="Reset to default initial demo dataset"
          >
            <RefreshCw className="w-3.5 h-3.5 text-[var(--color-negative)]" />
            <span className="hidden sm:inline">Reset Data</span>
          </button>
        </div>
      </div>

      {/* Worksheet Tab Navigation Bar (12 Tabs) */}
      <div className="bg-[var(--color-surface)] border-t border-[var(--color-border)] px-6 overflow-x-auto no-scrollbar">
        <div className="max-w-[1400px] mx-auto flex items-center gap-1 min-w-max">
          {TABS.map((tab: TabConfig) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-3.5 py-2.5 text-[12.5px] font-medium transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[var(--color-primary)] font-semibold'
                    : 'text-[var(--nav-text-inactive)] hover:text-[var(--color-primary)]'
                }`}
              >
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--table-header-bg)] text-[var(--color-muted)] font-mono">
                  S{tab.sheetNumber}
                </span>
                <span>{tab.label.replace(/^\d+\.\s*/, '')}</span>

                {/* Active Tab Underline */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--color-accent)] rounded-t-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
