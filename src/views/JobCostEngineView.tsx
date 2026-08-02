import React, { useState } from 'react';
import { AppData } from '../types';
import {
  getJobCostEngineData,
  formatCurrency,
  formatPercent,
} from '../calculations';
import { Search, Download, Cpu, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { exportToCSV } from '../storageUtils';

interface JobCostEngineViewProps {
  data: AppData;
}

export const JobCostEngineView: React.FC<JobCostEngineViewProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { settings } = data;

  const engineRows = getJobCostEngineData(data);

  const filtered = engineRows.filter(
    (r) =>
      r.jobId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.jobStatus.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const overrunCount = engineRows.filter((r) => r.isOverrun).length;
  const totalVariance = engineRows.reduce((acc, r) => acc + r.costVariance, 0);

  const handleExportCSV = () => {
    const exportRows = engineRows.map((r) => ({
      Job_ID: r.jobId,
      Customer_Name: r.customerName,
      Job_Status: r.jobStatus,
      Contract_Revenue_ExTax: r.contractRevenue,
      Est_Material_Cost: r.estMaterialCost,
      Actual_Material_Cost: r.actualMaterialCost,
      Est_Labor_Cost: r.estLaborCost,
      Actual_Labor_Cost: r.actualLaborCost,
      Overhead_Allocation: r.overheadAllocation,
      Actual_Total_Cost: r.actualTotalCost,
      Actual_Profit: r.actualProfit,
      Actual_Margin: r.actualMargin,
      Cost_Variance: r.costVariance,
      Cost_Overrun_Alert: r.costOverrunAlert,
    }));
    exportToCSV('Job_Cost_Engine', exportRows);
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--table-header-bg)] text-[var(--color-muted)] font-semibold">
              Sheet 10
            </span>
            <h2 className="font-heading text-2xl font-bold text-[var(--color-primary)] tracking-tight">
              Automated Job Cost Aggregation Engine
            </h2>
          </div>
          <p className="text-[13px] text-[var(--color-muted)] mt-1">
            Central calculation brain automatically aggregating estimated vs actual material, labor, overhead allocation, actual profit, and overrun alerts.
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
        </div>
      </div>

      {/* Insight & Alert Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="insight-block flex items-start gap-3">
          <Cpu className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
          <div className="text-[12.5px] text-[var(--color-primary)] leading-relaxed">
            <span className="font-bold">Automated Cost Aggregation:</span>
            {' '}This table is 100% formula-driven from site logs and contracts. Direct costs are aggregated from Labor Log & Material Usage, indirect management is allocated at {formatPercent(settings.overheadRate)}.
          </div>
        </div>

        <div
          className={`p-4 rounded-r-md border-l-3 text-[12.5px] leading-relaxed flex items-start gap-3 ${
            overrunCount > 0
              ? 'bg-red-50/70 border-red-600 text-red-900'
              : 'bg-emerald-50/70 border-emerald-600 text-emerald-900'
          }`}
        >
          {overrunCount > 0 ? (
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          ) : (
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          )}
          <div>
            <span className="font-bold">
              {overrunCount > 0
                ? `🚨 ${overrunCount} Job(s) Triggered Cost Overrun Warning!`
                : '✅ All Active Jobs Are Operating Within Budget Baseline.'}
            </span>
            <p className="text-[11.5px] opacity-80 mt-0.5">
              Cost Variance Threshold: {formatPercent(settings.overrunThreshold)}. Net variance across all jobs: {formatCurrency(totalVariance, settings.currencySymbol)}.
            </p>
          </div>
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
            placeholder="Search Job ID, customer name, status..."
            className="w-full text-[13px] pl-9 pr-3 py-1.5 bg-[var(--color-input-bg)] border border-slate-200 rounded-md text-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          />
        </div>
        <div className="text-[12px] text-[var(--color-muted)] font-mono">
          Engine Aggregated Jobs: <span className="font-bold text-[var(--color-primary)]">{filtered.length}</span>
        </div>
      </div>

      {/* Main Job Cost Engine Data Table */}
      <div className="saas-card-no-hover overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[12px] border-collapse min-w-[1300px]">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[var(--color-primary)] font-semibold uppercase tracking-uppercase text-[10.5px]">
                <th className="py-3 px-3 w-28">Job ID</th>
                <th className="py-3 px-3 min-w-[150px]">Customer Name</th>
                <th className="py-3 px-3 w-28 text-center">Status</th>
                <th className="py-3 px-3 w-32 text-right">Revenue (Ex-Tax)</th>
                <th className="py-3 px-3 w-32 text-right">Est. Mat Cost</th>
                <th className="py-3 px-3 w-32 text-right">Act. Mat Cost</th>
                <th className="py-3 px-3 w-32 text-right">Est. Lab Cost</th>
                <th className="py-3 px-3 w-32 text-right">Act. Lab Cost</th>
                <th className="py-3 px-3 w-28 text-right">Overhead</th>
                <th className="py-3 px-3 w-32 text-right font-bold text-[var(--color-primary)]">
                  Act. Total Cost
                </th>
                <th className="py-3 px-3 w-32 text-right font-bold text-emerald-700">Actual Profit</th>
                <th className="py-3 px-3 w-24 text-right font-bold text-emerald-700">Actual Margin</th>
                <th className="py-3 px-3 w-28 text-right font-mono">Cost Variance</th>
                <th className="py-3 px-3 w-40 text-center">Overrun Alert</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono">
              {filtered.map((item) => {
                const isVarianceNegative = item.costVariance > 0;

                return (
                  <tr
                    key={item.jobId}
                    className={`hover:bg-slate-50/80 transition-colors ${
                      item.isOverrun ? 'bg-red-50/30' : ''
                    }`}
                  >
                    <td className="py-2.5 px-3 font-bold text-[var(--color-primary)]">
                      {item.jobId}
                    </td>
                    <td className="py-2.5 px-3 font-body font-semibold text-[var(--color-primary)] truncate">
                      {item.customerName}
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <span className="pill-badge pill-badge-normal text-[10.5px]">
                        {item.jobStatus}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-[var(--color-primary)]">
                      {formatCurrency(item.contractRevenue, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right text-[var(--color-muted)]">
                      {formatCurrency(item.estMaterialCost, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-slate-800">
                      {formatCurrency(item.actualMaterialCost, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right text-[var(--color-muted)]">
                      {formatCurrency(item.estLaborCost, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-slate-800">
                      {formatCurrency(item.actualLaborCost, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right text-[var(--color-muted)]">
                      {formatCurrency(item.overheadAllocation, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-[var(--color-primary)] bg-slate-50">
                      {formatCurrency(item.actualTotalCost, settings.currencySymbol)}
                    </td>
                    <td
                      className={`py-2.5 px-3 text-right font-bold bg-emerald-50/30 ${
                        item.actualProfit >= 0 ? 'text-emerald-700' : 'text-red-600'
                      }`}
                    >
                      {formatCurrency(item.actualProfit, settings.currencySymbol)}
                    </td>
                    <td
                      className={`py-2.5 px-3 text-right font-bold ${
                        item.actualMargin >= settings.targetMargin
                          ? 'text-emerald-700'
                          : item.actualMargin >= 0
                          ? 'text-slate-800'
                          : 'text-red-600'
                      }`}
                    >
                      {formatPercent(item.actualMargin)}
                    </td>
                    <td
                      className={`py-2.5 px-3 text-right font-bold ${
                        isVarianceNegative ? 'text-red-600' : 'text-emerald-700'
                      }`}
                    >
                      {item.costVariance > 0 ? '+' : ''}
                      {formatCurrency(item.costVariance, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <span
                        className={`pill-badge interactive-status-cell ${
                          item.isOverrun ? 'pill-badge-warning' : 'pill-badge-success'
                        }`}
                      >
                        {item.costOverrunAlert}
                      </span>
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
