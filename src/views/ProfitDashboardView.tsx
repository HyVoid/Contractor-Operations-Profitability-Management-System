import React from 'react';
import { AppData } from '../types';
import {
  getProfitDashboardMetrics,
  formatCurrency,
  formatPercent,
} from '../calculations';
import {
  TrendingUp,
  BarChart3,
  Award,
  AlertTriangle,
  Briefcase,
  Download,
  PieChart,
} from 'lucide-react';
import { exportToCSV } from '../storageUtils';

interface ProfitDashboardViewProps {
  data: AppData;
}

export const ProfitDashboardView: React.FC<ProfitDashboardViewProps> = ({ data }) => {
  const metrics = getProfitDashboardMetrics(data);
  const { settings } = data;

  const handleExportCSV = () => {
    const exportRows = metrics.estimatorPerformance.map((e) => ({
      Estimator: e.estimator,
      Total_Leads: e.totalLeads,
      Won_Leads: e.wonLeads,
      Win_Rate: e.winRate,
      Total_Quoted_Revenue: e.totalQuotedRevenue,
    }));
    exportToCSV('Profit_Dashboard_Estimators', exportRows);
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--table-header-bg)] text-[var(--color-muted)] font-semibold">
              Sheet 11
            </span>
            <h2 className="font-heading text-2xl font-bold text-[var(--color-primary)] tracking-tight">
              Executive Profit & Performance Dashboard
            </h2>
          </div>
          <p className="text-[13px] text-[var(--color-muted)] mt-1">
            Executive oversight into company-wide gross profit, estimator hit rates, and project type margin distributions.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-[var(--color-primary)] bg-[var(--color-surface)] hover:bg-slate-100 rounded-md shadow-xs border border-slate-200 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Dashboard CSV</span>
          </button>
        </div>
      </div>

      {/* Executive KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {/* KPI 1 */}
        <div className="saas-card p-4 space-y-1">
          <p className="text-[11px] uppercase tracking-uppercase text-[var(--color-muted)] font-semibold">
            Total Active Jobs
          </p>
          <p className="font-heading font-bold text-2xl text-[var(--color-primary)] tracking-tight">
            {metrics.totalJobsCount}
          </p>
          <span className="text-[11px] text-[var(--color-muted)]">Contracted Projects</span>
        </div>

        {/* KPI 2 */}
        <div className="saas-card p-4 space-y-1">
          <p className="text-[11px] uppercase tracking-uppercase text-[var(--color-muted)] font-semibold">
            Cumulative Revenue
          </p>
          <p className="font-heading font-bold text-2xl text-[var(--color-primary)] tracking-tight">
            {formatCurrency(metrics.totalRevenueExTax, settings.currencySymbol)}
          </p>
          <span className="text-[11px] text-[var(--color-muted)]">Ex-Tax Net Revenue</span>
        </div>

        {/* KPI 3 */}
        <div className="saas-card p-4 space-y-1">
          <p className="text-[11px] uppercase tracking-uppercase text-[var(--color-muted)] font-semibold">
            Cumulative Total Cost
          </p>
          <p className="font-heading font-bold text-2xl text-slate-700 tracking-tight">
            {formatCurrency(metrics.totalActualCost, settings.currencySymbol)}
          </p>
          <span className="text-[11px] text-[var(--color-muted)]">Direct + Overhead</span>
        </div>

        {/* KPI 4 */}
        <div className="saas-card p-4 space-y-1">
          <p className="text-[11px] uppercase tracking-uppercase text-[var(--color-muted)] font-semibold">
            Cumulative Net Profit
          </p>
          <p className="font-heading font-bold text-2xl text-emerald-700 tracking-tight">
            {formatCurrency(metrics.totalProfit, settings.currencySymbol)}
          </p>
          <span className="text-[11px] text-emerald-700 font-medium">Bottom-Line Generated</span>
        </div>

        {/* KPI 5 */}
        <div className="saas-card p-4 space-y-1">
          <p className="text-[11px] uppercase tracking-uppercase text-[var(--color-muted)] font-semibold">
            Overall Margin %
          </p>
          <p className="font-heading font-bold text-2xl text-[var(--color-accent)] tracking-tight">
            {formatPercent(metrics.overallGrossMargin)}
          </p>
          <span className="text-[11px] text-[var(--color-muted)]">Target: {formatPercent(settings.targetMargin)}</span>
        </div>

        {/* KPI 6 */}
        <div className="saas-card p-4 space-y-1">
          <p className="text-[11px] uppercase tracking-uppercase text-[var(--color-muted)] font-semibold">
            Cost Overrun Jobs
          </p>
          <p
            className={`font-heading font-bold text-2xl tracking-tight ${
              metrics.overrunJobsCount > 0 ? 'text-red-600' : 'text-emerald-700'
            }`}
          >
            {metrics.overrunJobsCount}
          </p>
          <span className="text-[11px] text-[var(--color-muted)]">
            Exceeding {formatPercent(settings.overrunThreshold)}
          </span>
        </div>
      </div>

      {/* Estimator Performance & Project Type Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Estimator Performance Table */}
        <div className="saas-card p-6 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Award className="w-5 h-5 text-[var(--color-accent)]" />
            <h3 className="font-heading font-bold text-lg text-[var(--color-primary)]">
              Estimator Quotation Performance & Win Rates
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[12.5px] border-collapse">
              <thead>
                <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[var(--color-primary)] font-semibold uppercase tracking-uppercase text-[11px]">
                  <th className="py-2.5 px-3">Estimator Name</th>
                  <th className="py-2.5 px-3 text-center">Total Leads</th>
                  <th className="py-2.5 px-3 text-center">Won Leads</th>
                  <th className="py-2.5 px-3 text-center">Win Rate %</th>
                  <th className="py-2.5 px-3 text-right">Quoted Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {metrics.estimatorPerformance.map((e) => (
                  <tr key={e.estimator} className="hover:bg-slate-50">
                    <td className="py-2.5 px-3 font-body font-bold text-[var(--color-primary)]">
                      {e.estimator}
                    </td>
                    <td className="py-2.5 px-3 text-center font-bold text-slate-700">
                      {e.totalLeads}
                    </td>
                    <td className="py-2.5 px-3 text-center font-bold text-emerald-700">
                      {e.wonLeads}
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <span className="pill-badge pill-badge-accent font-bold">
                        {formatPercent(e.winRate)}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-[var(--color-primary)]">
                      {formatCurrency(e.totalQuotedRevenue, settings.currencySymbol)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Project Type Breakdown */}
        <div className="saas-card p-6 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <PieChart className="w-5 h-5 text-[var(--color-accent)]" />
            <h3 className="font-heading font-bold text-lg text-[var(--color-primary)]">
              Profitability Breakdown by Project Type
            </h3>
          </div>

          <div className="space-y-4">
            {metrics.projectTypeBreakdown.map((pt) => {
              const maxRev = metrics.totalRevenueExTax || 1;
              const pctOfTotal = (pt.totalRevenue / maxRev) * 100;

              return (
                <div key={pt.projectType} className="space-y-1.5 p-3 rounded-lg bg-slate-50/60 border border-slate-100">
                  <div className="flex items-center justify-between text-[12.5px]">
                    <span className="font-bold text-[var(--color-primary)]">{pt.projectType}</span>
                    <span className="font-mono text-emerald-700 font-bold">
                      {formatCurrency(pt.totalProfit, settings.currencySymbol)} ({formatPercent(pt.avgMargin)})
                    </span>
                  </div>

                  <div className="data-bar-track">
                    <div className="data-bar-fill" style={{ width: `${Math.max(5, pctOfTotal)}%` }} />
                  </div>

                  <div className="flex justify-between text-[11px] text-[var(--color-muted)] font-mono pt-1">
                    <span>{pt.count} Active Projects</span>
                    <span>Revenue: {formatCurrency(pt.totalRevenue, settings.currencySymbol)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
