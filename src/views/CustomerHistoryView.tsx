import React, { useState } from 'react';
import { AppData } from '../types';
import {
  getCustomerHistoryData,
  formatCurrency,
  formatPercent,
} from '../calculations';
import { Search, Download, Users, Award, ShieldAlert, Sparkles } from 'lucide-react';
import { exportToCSV } from '../storageUtils';

interface CustomerHistoryViewProps {
  data: AppData;
}

export const CustomerHistoryView: React.FC<CustomerHistoryViewProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { settings } = data;

  const customerRows = getCustomerHistoryData(data);

  const filtered = customerRows.filter(
    (c) =>
      c.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.customerRating.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExportCSV = () => {
    const exportRows = customerRows.map((c) => ({
      Customer_Name: c.customerName,
      Total_Jobs_Count: c.totalJobsCount,
      Total_Contract_Revenue: c.totalContractRevenue,
      Total_Profit_Contrib: c.totalProfitContrib,
      Avg_Profit_Margin: c.avgProfitMargin,
      Last_Contract_Date: c.lastContractDate,
      Customer_Rating: c.customerRating,
    }));
    exportToCSV('Customer_History', exportRows);
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--table-header-bg)] text-[var(--color-muted)] font-semibold">
              Sheet 12
            </span>
            <h2 className="font-heading text-2xl font-bold text-[var(--color-primary)] tracking-tight">
              Customer History & LTV Profitability Analysis
            </h2>
          </div>
          <p className="text-[13px] text-[var(--color-muted)] mt-1">
            Aggregates customer lifetime value, historical project volumes, net profit contribution, and commercial value tier ratings.
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

      {/* Filter Bar */}
      <div className="saas-card-no-hover p-4 flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search customer name, rating tier..."
            className="w-full text-[13px] pl-9 pr-3 py-1.5 bg-[var(--color-input-bg)] border border-slate-200 rounded-md text-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          />
        </div>
        <div className="text-[12px] text-[var(--color-muted)] font-mono">
          Customers Tracked: <span className="font-bold text-[var(--color-primary)]">{filtered.length}</span>
        </div>
      </div>

      {/* Main Customer History Data Table */}
      <div className="saas-card-no-hover overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[12.5px] border-collapse min-w-[950px]">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[var(--color-primary)] font-semibold uppercase tracking-uppercase text-[11px]">
                <th className="py-3 px-4 min-w-[200px]">Customer Name</th>
                <th className="py-3 px-4 w-32 text-center">Historical Jobs</th>
                <th className="py-3 px-4 w-44 text-right">Lifetime Contract Revenue</th>
                <th className="py-3 px-4 w-44 text-right font-bold text-emerald-700">
                  Total Profit Contrib
                </th>
                <th className="py-3 px-4 w-32 text-right font-bold text-emerald-700">
                  Avg Margin %
                </th>
                <th className="py-3 px-4 w-36">Last Contract Date</th>
                <th className="py-3 px-4 w-48 text-center">Customer Rating Tier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((item) => {
                let badgeClass = 'pill-badge-normal';
                if (item.customerRating.includes('Strategic')) badgeClass = 'pill-badge-accent';
                else if (item.customerRating.includes('High Value')) badgeClass = 'pill-badge-success';

                return (
                  <tr
                    key={item.customerName}
                    className="hover:bg-slate-50/80 transition-colors group"
                  >
                    <td className="py-3 px-4 font-bold text-[var(--color-primary)]">
                      {item.customerName}
                    </td>
                    <td className="py-3 px-4 text-center font-mono font-bold text-slate-800">
                      {item.totalJobsCount}
                    </td>
                    <td className="py-3 px-4 text-right font-mono font-bold text-[var(--color-primary)]">
                      {formatCurrency(item.totalContractRevenue, settings.currencySymbol)}
                    </td>
                    <td className="py-3 px-4 text-right font-mono font-bold text-emerald-700 bg-emerald-50/30">
                      {formatCurrency(item.totalProfitContrib, settings.currencySymbol)}
                    </td>
                    <td className="py-3 px-4 text-right font-mono font-bold text-emerald-700 bg-emerald-50/30">
                      {formatPercent(item.avgProfitMargin)}
                    </td>
                    <td className="py-3 px-4 font-mono text-[var(--color-muted)] text-[12px]">
                      {item.lastContractDate}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`pill-badge interactive-status-cell ${badgeClass}`}>
                        {item.customerRating}
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
