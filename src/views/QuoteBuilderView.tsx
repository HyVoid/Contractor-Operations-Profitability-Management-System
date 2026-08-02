import React, { useState } from 'react';
import {
  AppData,
  QuoteItem,
} from '../types';
import {
  calculateQuoteItem,
  getQuoteSummaries,
  formatCurrency,
  formatPercent,
} from '../calculations';
import { Plus, Search, Trash2, Download, Calculator, FileCheck, Layers } from 'lucide-react';
import { exportToCSV } from '../storageUtils';

interface QuoteBuilderViewProps {
  data: AppData;
  onUpdateQuotes: (quotes: QuoteItem[]) => void;
}

export const QuoteBuilderView: React.FC<QuoteBuilderViewProps> = ({
  data,
  onUpdateQuotes,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedQuoteId, setSelectedQuoteId] = useState<string>('ALL');

  const { quotes, materials, laborRates, leads, settings } = data;

  const handleFieldChange = (id: string, field: keyof QuoteItem, value: any) => {
    const updated = quotes.map((q) => {
      if (q.id === id) {
        return { ...q, [field]: value };
      }
      return q;
    });
    onUpdateQuotes(updated);
  };

  const handleAddQuoteItem = () => {
    const nextQuoteNum = new Set(quotes.map((q) => q.quoteId)).size + 1;
    const newQuoteId =
      selectedQuoteId !== 'ALL'
        ? selectedQuoteId
        : `QT-2026-${String(nextQuoteNum).padStart(3, '0')}`;

    const defaultLeadId = leads[0]?.leadId || 'LD-2026-001';
    const defaultMatCode = materials[0]?.materialCode || 'MAT-001';
    const defaultLabCode = laborRates[0]?.laborCode || 'LBR-ELE';

    const newRow: QuoteItem = {
      id: `qt-${Date.now()}`,
      quoteId: newQuoteId,
      leadId: defaultLeadId,
      materialCode: defaultMatCode,
      estMaterialQty: 10,
      laborCode: defaultLabCode,
      estLaborHours: 20,
    };
    onUpdateQuotes([...quotes, newRow]);
  };

  const handleDeleteQuoteItem = (id: string) => {
    if (confirm('Are you sure you want to delete this quote line item?')) {
      onUpdateQuotes(quotes.filter((q) => q.id !== id));
    }
  };

  // Quote summaries
  const summaries = getQuoteSummaries(data);
  const uniqueQuoteIds = Array.from(new Set(quotes.map((q) => q.quoteId)));

  const filteredQuotes = quotes.filter((q) => {
    const matchesSearch =
      q.quoteId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.leadId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.materialCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.laborCode.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesId = selectedQuoteId === 'ALL' || q.quoteId === selectedQuoteId;
    return matchesSearch && matchesId;
  });

  const handleExportCSV = () => {
    const exportRows = quotes.map((q) => {
      const calc = calculateQuoteItem(q, materials, laborRates, settings);
      return {
        Quote_ID: q.quoteId,
        Lead_ID: q.leadId,
        Material_Code: q.materialCode,
        Est_Material_Qty: q.estMaterialQty,
        Material_Unit_Cost: calc.materialUnitCost,
        Est_Material_Cost: calc.estMaterialCost,
        Labor_Code: q.laborCode,
        Est_Labor_Hours: q.estLaborHours,
        Labor_Hourly_Rate: calc.laborHourlyRate,
        Est_Labor_Cost: calc.estLaborCost,
        Direct_Cost_Subtotal: calc.directCostSubtotal,
        Overhead_Allocation: calc.overheadAllocation,
        Est_Total_Cost: calc.estTotalCost,
        Suggested_Quote_Amount: calc.suggestedQuoteAmount,
        Projected_Margin: calc.projectedMargin,
      };
    });
    exportToCSV('Quote_Builder', exportRows);
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--table-header-bg)] text-[var(--color-muted)] font-semibold">
              Sheet 5
            </span>
            <h2 className="font-heading text-2xl font-bold text-[var(--color-primary)] tracking-tight">
              Automatic Quotation Calculation Engine
            </h2>
          </div>
          <p className="text-[13px] text-[var(--color-muted)] mt-1">
            Combines material & labor estimates, retrieves standard rates, applies overhead allocation, and derives suggested quotes.
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
            onClick={handleAddQuoteItem}
            className="flex items-center gap-1.5 px-4 py-1.5 text-[12px] font-medium text-white bg-[var(--color-accent)] hover:bg-blue-700 rounded-md shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Quote Line</span>
          </button>
        </div>
      </div>

      {/* Quote Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {summaries.map((s) => {
          const isSelected = selectedQuoteId === s.quoteId;
          return (
            <div
              key={s.quoteId}
              onClick={() => setSelectedQuoteId(isSelected ? 'ALL' : s.quoteId)}
              className={`saas-card p-4 border-2 cursor-pointer transition-all ${
                isSelected
                  ? 'border-[var(--color-accent)] bg-blue-50/20'
                  : 'border-transparent'
              }`}
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[var(--color-accent)]" />
                  <span className="font-mono font-bold text-sm text-[var(--color-primary)]">
                    {s.quoteId}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[var(--color-muted)] bg-[var(--table-header-bg)] px-2 py-0.5 rounded-full">
                  {s.itemCount} Items
                </span>
              </div>

              <p className="text-[12px] font-semibold text-[var(--color-primary)] truncate mb-2">
                Client: {s.customerName}
              </p>

              <div className="space-y-1.5 text-[12px] font-mono">
                <div className="flex justify-between text-[var(--color-muted)]">
                  <span>Direct Cost:</span>
                  <span>{formatCurrency(s.directCostSubtotal, settings.currencySymbol)}</span>
                </div>
                <div className="flex justify-between text-[var(--color-muted)]">
                  <span>Overhead ({formatPercent(settings.overheadRate)}):</span>
                  <span>{formatCurrency(s.overheadAllocation, settings.currencySymbol)}</span>
                </div>
                <div className="flex justify-between font-bold text-[var(--color-primary)] pt-1 border-t border-slate-100">
                  <span>Est Total Cost:</span>
                  <span>{formatCurrency(s.estTotalCost, settings.currencySymbol)}</span>
                </div>
                <div className="flex justify-between font-bold text-[var(--color-accent)] pt-1 text-[13px]">
                  <span>Suggested Quote:</span>
                  <span>{formatCurrency(s.suggestedQuoteAmount, settings.currencySymbol)}</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-bold text-[11px]">
                  <span>Projected Margin:</span>
                  <span>{formatPercent(s.projectedMargin)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filter Bar */}
      <div className="saas-card-no-hover p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md w-full">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search quote ID, lead ID, code..."
            className="w-full text-[13px] pl-9 pr-3 py-1.5 bg-[var(--color-input-bg)] border border-slate-200 rounded-md text-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[12px] text-[var(--color-muted)] font-medium">Filter Quote ID:</span>
          <select
            value={selectedQuoteId}
            onChange={(e) => setSelectedQuoteId(e.target.value)}
            className="text-[12px] bg-[var(--color-input-bg)] border border-slate-200 rounded-md px-3 py-1.5 font-mono text-[var(--color-primary)] font-semibold"
          >
            <option value="ALL">All Quotes ({quotes.length} lines)</option>
            {uniqueQuoteIds.map((qid) => (
              <option key={qid} value={qid}>
                {qid}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Itemized Quotation Table */}
      <div className="saas-card-no-hover overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[12px] border-collapse min-w-[1250px]">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[var(--color-primary)] font-semibold uppercase tracking-uppercase text-[10.5px]">
                <th className="py-3 px-3 w-28">Quote ID</th>
                <th className="py-3 px-3 w-28">Lead ID</th>
                <th className="py-3 px-3 w-32">Material Code</th>
                <th className="py-3 px-3 w-24 text-right">Est. Qty</th>
                <th className="py-3 px-3 w-28 text-right">Unit Cost</th>
                <th className="py-3 px-3 w-32 text-right">Est. Mat Cost</th>
                <th className="py-3 px-3 w-32">Labor Code</th>
                <th className="py-3 px-3 w-24 text-right">Hours</th>
                <th className="py-3 px-3 w-28 text-right">Hourly Rate</th>
                <th className="py-3 px-3 w-32 text-right">Est. Lab Cost</th>
                <th className="py-3 px-3 w-32 text-right">Direct Subtotal</th>
                <th className="py-3 px-3 w-32 text-right">Overhead</th>
                <th className="py-3 px-3 w-32 text-right font-bold text-[var(--color-primary)]">Total Cost</th>
                <th className="py-3 px-3 w-36 text-right font-bold text-[var(--color-accent)]">Suggested Quote</th>
                <th className="py-3 px-3 w-24 text-right font-bold text-emerald-700">Margin</th>
                <th className="py-3 px-3 w-12 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredQuotes.map((item) => {
                const calc = calculateQuoteItem(item, materials, laborRates, settings);

                return (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50/80 transition-colors group font-mono"
                  >
                    <td className="py-2.5 px-3 font-bold text-[var(--color-primary)]">
                      <input
                        type="text"
                        value={item.quoteId}
                        onChange={(e) => handleFieldChange(item.id, 'quoteId', e.target.value)}
                        className="editable-input w-full font-mono text-[11.5px] font-bold"
                      />
                    </td>
                    <td className="py-2.5 px-3">
                      <select
                        value={item.leadId}
                        onChange={(e) => handleFieldChange(item.id, 'leadId', e.target.value)}
                        className="editable-input w-full text-[11px]"
                      >
                        {leads.map((l) => (
                          <option key={l.id} value={l.leadId}>
                            {l.leadId} ({l.customerName.slice(0, 12)}...)
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2.5 px-3">
                      <select
                        value={item.materialCode}
                        onChange={(e) => handleFieldChange(item.id, 'materialCode', e.target.value)}
                        className="editable-input w-full text-[11px]"
                      >
                        {materials.map((m) => (
                          <option key={m.id} value={m.materialCode}>
                            {m.materialCode} - {m.materialName.slice(0, 12)}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <input
                        type="number"
                        step="1"
                        value={item.estMaterialQty}
                        onChange={(e) =>
                          handleFieldChange(item.id, 'estMaterialQty', parseFloat(e.target.value) || 0)
                        }
                        className="editable-input w-20 text-right font-bold"
                      />
                    </td>
                    <td className="py-2.5 px-3 text-right text-[var(--color-muted)]">
                      {formatCurrency(calc.materialUnitCost, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-[var(--color-primary)]">
                      {formatCurrency(calc.estMaterialCost, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3">
                      <select
                        value={item.laborCode}
                        onChange={(e) => handleFieldChange(item.id, 'laborCode', e.target.value)}
                        className="editable-input w-full text-[11px]"
                      >
                        {laborRates.map((l) => (
                          <option key={l.id} value={l.laborCode}>
                            {l.laborCode} - {l.laborName.slice(0, 12)}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <input
                        type="number"
                        step="1"
                        value={item.estLaborHours}
                        onChange={(e) =>
                          handleFieldChange(item.id, 'estLaborHours', parseFloat(e.target.value) || 0)
                        }
                        className="editable-input w-20 text-right font-bold"
                      />
                    </td>
                    <td className="py-2.5 px-3 text-right text-[var(--color-muted)]">
                      {formatCurrency(calc.laborHourlyRate, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-[var(--color-primary)]">
                      {formatCurrency(calc.estLaborCost, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-slate-800">
                      {formatCurrency(calc.directCostSubtotal, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right text-[var(--color-muted)]">
                      {formatCurrency(calc.overheadAllocation, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-[var(--color-primary)] bg-slate-50">
                      {formatCurrency(calc.estTotalCost, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-[var(--color-accent)] bg-blue-50/40 text-[12.5px]">
                      {formatCurrency(calc.suggestedQuoteAmount, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-emerald-700 bg-emerald-50/30">
                      {formatPercent(calc.projectedMargin)}
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <button
                        onClick={() => handleDeleteQuoteItem(item.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 transition-colors rounded"
                        title="Delete line item"
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
