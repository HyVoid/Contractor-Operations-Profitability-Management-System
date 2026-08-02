import React, { useState } from 'react';
import { LaborRateItem, Settings } from '../types';
import { getLaborLevel, formatCurrency } from '../calculations';
import { Plus, Search, Trash2, Download, Users } from 'lucide-react';
import { exportToCSV } from '../storageUtils';

interface LaborRatesViewProps {
  laborRates: LaborRateItem[];
  settings: Settings;
  onUpdateLaborRates: (laborRates: LaborRateItem[]) => void;
}

export const LaborRatesView: React.FC<LaborRatesViewProps> = ({
  laborRates,
  settings,
  onUpdateLaborRates,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleFieldChange = (id: string, field: keyof LaborRateItem, value: any) => {
    const updated = laborRates.map((l) => {
      if (l.id === id) {
        return { ...l, [field]: value };
      }
      return l;
    });
    onUpdateLaborRates(updated);
  };

  const handleAddLabor = () => {
    const nextNum = laborRates.length + 1;
    const newCode = `LBR-${String(nextNum).padStart(3, '0')}`;
    const newRow: LaborRateItem = {
      id: `l-${Date.now()}`,
      laborCode: newCode,
      laborName: 'New Trade / Specialist',
      hourlyRate: 60.0,
    };
    onUpdateLaborRates([...laborRates, newRow]);
  };

  const handleDeleteLabor = (id: string) => {
    if (confirm('Are you sure you want to delete this labor rate record?')) {
      onUpdateLaborRates(laborRates.filter((l) => l.id !== id));
    }
  };

  const filtered = laborRates.filter(
    (l) =>
      l.laborCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.laborName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const maxRate = Math.max(...laborRates.map((l) => l.hourlyRate || 0), 1);

  const handleExportCSV = () => {
    const exportRows = laborRates.map((l) => ({
      Labor_Code: l.laborCode,
      Labor_Name: l.laborName,
      Hourly_Rate: l.hourlyRate,
      Rate_Level: getLaborLevel(l),
    }));
    exportToCSV('Labor_Rates', exportRows);
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--table-header-bg)] text-[var(--color-muted)] font-semibold">
              Sheet 3
            </span>
            <h2 className="font-heading text-2xl font-bold text-[var(--color-primary)] tracking-tight">
              Standard Labor Trade Rates Table
            </h2>
          </div>
          <p className="text-[13px] text-[var(--color-muted)] mt-1">
            Standard labor hourly rates ensures consistent labor cost estimation across all estimators and site logs.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-[var(--color-primary)] bg-[var(--color-surface)] hover:bg-slate-100 rounded-md shadow-xs border border-slate-200 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={handleAddLabor}
            className="flex items-center gap-1.5 px-4 py-1.5 text-[12px] font-medium text-white bg-[var(--color-accent)] hover:bg-blue-700 rounded-md shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Trade Rate</span>
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="saas-card-no-hover p-4 flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Filter by trade code or name..."
            className="w-full text-[13px] pl-9 pr-3 py-1.5 bg-[var(--color-input-bg)] border border-slate-200 rounded-md text-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          />
        </div>
        <div className="text-[12px] text-[var(--color-muted)] font-mono">
          Total Trades: <span className="font-bold text-[var(--color-primary)]">{filtered.length}</span>
        </div>
      </div>

      {/* Main Labor Rates Data Table */}
      <div className="saas-card-no-hover overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px] border-collapse">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[var(--color-primary)] font-semibold uppercase tracking-uppercase text-[11px]">
                <th className="py-3 px-4 w-32">Labor Code</th>
                <th className="py-3 px-4 min-w-[220px]">Trade Description</th>
                <th className="py-3 px-4 w-48 text-right">Hourly Rate ($/hr)</th>
                <th className="py-3 px-4 w-40 text-center">Seniority Level</th>
                <th className="py-3 px-4 w-16 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((item) => {
                const level = getLaborLevel(item);
                const barWidth = Math.min(100, Math.max(8, (item.hourlyRate / maxRate) * 100));

                let levelBadgeClass = 'pill-badge-normal';
                if (level.includes('Senior')) levelBadgeClass = 'pill-badge-accent';
                else if (level.includes('Standard')) levelBadgeClass = 'pill-badge-success';

                return (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50/80 transition-colors group"
                  >
                    <td className="py-2.5 px-4 font-mono font-bold text-[var(--color-primary)]">
                      <input
                        type="text"
                        value={item.laborCode}
                        onChange={(e) => handleFieldChange(item.id, 'laborCode', e.target.value)}
                        className="editable-input w-full font-mono text-[12px] font-bold"
                      />
                    </td>
                    <td className="py-2.5 px-4">
                      <input
                        type="text"
                        value={item.laborName}
                        onChange={(e) => handleFieldChange(item.id, 'laborName', e.target.value)}
                        className="editable-input w-full"
                      />
                    </td>
                    <td className="py-2.5 px-4 text-right">
                      <div className="flex flex-col items-end gap-1">
                        <input
                          type="number"
                          step="0.50"
                          value={item.hourlyRate}
                          onChange={(e) =>
                            handleFieldChange(item.id, 'hourlyRate', parseFloat(e.target.value) || 0)
                          }
                          className="editable-input w-32 text-right font-mono font-bold text-[13px]"
                        />
                        <div className="data-bar-track w-32">
                          <div
                            className="data-bar-fill"
                            style={{ width: `${barWidth}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-2.5 px-4 text-center">
                      <span className={`pill-badge ${levelBadgeClass}`}>
                        {level}
                      </span>
                    </td>
                    <td className="py-2.5 px-4 text-center">
                      <button
                        onClick={() => handleDeleteLabor(item.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 transition-colors rounded"
                        title="Delete trade rate"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
