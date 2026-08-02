import React from 'react';
import { Settings } from '../types';
import { Sliders, Info, Percent, DollarSign, AlertCircle } from 'lucide-react';
import { formatPercent } from '../calculations';

interface SettingsViewProps {
  settings: Settings;
  onUpdateSettings: (newSettings: Settings) => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({ settings, onUpdateSettings }) => {
  const handleChange = (field: keyof Settings, value: any) => {
    onUpdateSettings({
      ...settings,
      [field]: value,
    });
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--table-header-bg)] text-[var(--color-muted)] font-semibold">
              Sheet 1
            </span>
            <h2 className="font-heading text-2xl font-bold text-[var(--color-primary)] tracking-tight">
              Settings & Global Parameters
            </h2>
          </div>
          <p className="text-[13px] text-[var(--color-muted)] mt-1">
            Central control console for system-wide financial rates, markup redlines, and alert thresholds.
          </p>
        </div>
      </div>

      {/* Insight Explanation Block */}
      <div className="insight-block flex items-start gap-3">
        <Info className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
        <div className="text-[13px] text-[var(--color-primary)] leading-relaxed">
          <span className="font-bold">Zero Hardcoding Architecture:</span> All tax, overhead allocation, quotation margins, and cost overrun triggers cascade dynamically across all 11 dependent sheets. Adjusting values here immediately updates all live calculations without manual recalculation.
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Financial & Tax Parameters */}
        <div className="saas-card p-6 space-y-5">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <DollarSign className="w-5 h-5 text-[var(--color-accent)]" />
            <h3 className="font-heading font-bold text-lg text-[var(--color-primary)]">
              Currency & Tax System
            </h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-[12px] font-semibold text-[var(--color-primary)] mb-1">
                Default Currency Symbol (B2)
              </label>
              <input
                type="text"
                value={settings.currencySymbol}
                onChange={(e) => handleChange('currencySymbol', e.target.value)}
                className="editable-input w-full font-mono font-bold text-base"
                placeholder="$"
              />
              <p className="text-[11px] text-[var(--color-muted)] mt-1">
                Global currency symbol displayed across all financial tables.
              </p>
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-[var(--color-primary)] mb-1">
                Standard Tax Rate / VAT (B3)
              </label>
              <div className="relative flex items-center">
                <input
                  type="number"
                  step="0.001"
                  value={settings.taxRate}
                  onChange={(e) => handleChange('taxRate', parseFloat(e.target.value) || 0)}
                  className="editable-input w-full font-mono text-sm pr-12"
                />
                <span className="absolute right-3 text-[12px] font-bold text-[var(--color-muted)]">
                  ({formatPercent(settings.taxRate)})
                </span>
              </div>
              <p className="text-[11px] text-[var(--color-muted)] mt-1">
                Used to convert inclusive contract amounts to ex-tax revenues and calculate final quotes.
              </p>
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-[var(--color-primary)] mb-1">
                Exchange Rate Coefficient USD/CAD (B7)
              </label>
              <input
                type="number"
                step="0.0001"
                value={settings.exchangeRate}
                onChange={(e) => handleChange('exchangeRate', parseFloat(e.target.value) || 1)}
                className="editable-input w-full font-mono text-sm"
              />
              <p className="text-[11px] text-[var(--color-muted)] mt-1">
                Reserved multi-currency conversion coefficient (default 1.0000).
              </p>
            </div>
          </div>
        </div>

        {/* Overhead & Margin Controls */}
        <div className="saas-card p-6 space-y-5">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Percent className="w-5 h-5 text-[var(--color-accent)]" />
            <h3 className="font-heading font-bold text-lg text-[var(--color-primary)]">
              Overhead & Margin Thresholds
            </h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-[12px] font-semibold text-[var(--color-primary)] mb-1">
                Overhead Rate Allocation (B4)
              </label>
              <div className="relative flex items-center">
                <input
                  type="number"
                  step="0.005"
                  value={settings.overheadRate}
                  onChange={(e) => handleChange('overheadRate', parseFloat(e.target.value) || 0)}
                  className="editable-input w-full font-mono text-sm pr-12"
                />
                <span className="absolute right-3 text-[12px] font-bold text-[var(--color-muted)]">
                  ({formatPercent(settings.overheadRate)})
                </span>
              </div>
              <p className="text-[11px] text-[var(--color-muted)] mt-1">
                Indirect backoffice management & administrative cost allocation percentage.
              </p>
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-[var(--color-primary)] mb-1">
                Target Gross Margin Redline (B5)
              </label>
              <div className="relative flex items-center">
                <input
                  type="number"
                  step="0.005"
                  value={settings.targetMargin}
                  onChange={(e) => handleChange('targetMargin', parseFloat(e.target.value) || 0)}
                  className="editable-input w-full font-mono text-sm pr-12"
                />
                <span className="absolute right-3 text-[12px] font-bold text-[var(--color-muted)]">
                  ({formatPercent(settings.targetMargin)})
                </span>
              </div>
              <p className="text-[11px] text-[var(--color-muted)] mt-1">
                Safety gross margin redline used for quotation markup calculations and lead evaluation.
              </p>
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-[var(--color-primary)] mb-1">
                Cost Overrun Alert Threshold (B6)
              </label>
              <div className="relative flex items-center">
                <input
                  type="number"
                  step="0.005"
                  value={settings.overrunThreshold}
                  onChange={(e) =>
                    handleChange('overrunThreshold', parseFloat(e.target.value) || 0)
                  }
                  className="editable-input w-full font-mono text-sm pr-12 text-red-600 font-bold"
                />
                <span className="absolute right-3 text-[12px] font-bold text-[var(--color-negative)]">
                  ({formatPercent(settings.overrunThreshold)})
                </span>
              </div>
              <p className="text-[11px] text-[var(--color-muted)] mt-1">
                Percentage exceeding estimate that triggers 🚨 Severe Cost Overrun alert status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
