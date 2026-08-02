import React, { useState } from 'react';
import { AppData, ApprovedJobItem, JobStatus } from '../types';
import {
  calculateApprovedJob,
  formatCurrency,
  formatPercent,
} from '../calculations';
import { Plus, Search, Trash2, Download, Briefcase } from 'lucide-react';
import { exportToCSV } from '../storageUtils';

interface ApprovedJobsViewProps {
  data: AppData;
  onUpdateApprovedJobs: (jobs: ApprovedJobItem[]) => void;
}

export const ApprovedJobsView: React.FC<ApprovedJobsViewProps> = ({
  data,
  onUpdateApprovedJobs,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { approvedJobs, quotes, settings } = data;

  const handleFieldChange = (id: string, field: keyof ApprovedJobItem, value: any) => {
    const updated = approvedJobs.map((j) => {
      if (j.id === id) {
        return { ...j, [field]: value };
      }
      return j;
    });
    onUpdateApprovedJobs(updated);
  };

  const handleAddJob = () => {
    const nextNum = approvedJobs.length + 1;
    const newJobId = `JOB-2026-${String(nextNum).padStart(3, '0')}`;
    const defaultQuoteId = quotes[0]?.quoteId || 'QT-2026-001';
    const todayStr = new Date().toISOString().slice(0, 10);

    const newRow: ApprovedJobItem = {
      id: `job-${Date.now()}`,
      jobId: newJobId,
      quoteId: defaultQuoteId,
      contractDate: todayStr,
      contractAmount: 200000,
      plannedStartDate: todayStr,
      plannedEndDate: '2026-06-30',
      projectManager: 'Sarah Jenkins',
      jobStatus: 'Not Started',
    };
    onUpdateApprovedJobs([...approvedJobs, newRow]);
  };

  const handleDeleteJob = (id: string) => {
    if (confirm('Are you sure you want to delete this approved job record?')) {
      onUpdateApprovedJobs(approvedJobs.filter((j) => j.id !== id));
    }
  };

  const filtered = approvedJobs.filter((j) => {
    const calc = calculateApprovedJob(j, data);
    return (
      j.jobId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      j.quoteId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      calc.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      j.projectManager.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const maxContract = Math.max(...approvedJobs.map((j) => j.contractAmount || 0), 1);
  const uniqueQuoteIds = Array.from(new Set(quotes.map((q) => q.quoteId)));

  const handleExportCSV = () => {
    const exportRows = approvedJobs.map((j) => {
      const calc = calculateApprovedJob(j, data);
      return {
        Job_ID: j.jobId,
        Quote_ID: j.quoteId,
        Customer_Name: calc.customerName,
        Contract_Date: j.contractDate,
        Contract_Amount: j.contractAmount,
        Est_Total_Cost: calc.estTotalCost,
        Initial_Projected_Profit: calc.initialProjectedProfit,
        Initial_Projected_Margin: calc.initialProjectedMargin,
        Planned_Start_Date: j.plannedStartDate,
        Planned_End_Date: j.plannedEndDate,
        Project_Manager: j.projectManager,
        Job_Status: j.jobStatus,
      };
    });
    exportToCSV('Approved_Jobs', exportRows);
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--table-header-bg)] text-[var(--color-muted)] font-semibold">
              Sheet 6
            </span>
            <h2 className="font-heading text-2xl font-bold text-[var(--color-primary)] tracking-tight">
              Approved Contracted Jobs Master Registry
            </h2>
          </div>
          <p className="text-[13px] text-[var(--color-muted)] mt-1">
            Establishes the system-wide Job ID master key, records formal contract value, and locks initial target profit budgets.
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
            onClick={handleAddJob}
            className="flex items-center gap-1.5 px-4 py-1.5 text-[12px] font-medium text-white bg-[var(--color-accent)] hover:bg-blue-700 rounded-md shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>New Job Contract</span>
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
            placeholder="Search Job ID, Quote ID, customer name, PM..."
            className="w-full text-[13px] pl-9 pr-3 py-1.5 bg-[var(--color-input-bg)] border border-slate-200 rounded-md text-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          />
        </div>
        <div className="text-[12px] text-[var(--color-muted)] font-mono">
          Contracted Jobs: <span className="font-bold text-[var(--color-primary)]">{filtered.length}</span>
        </div>
      </div>

      {/* Main Approved Jobs Data Table */}
      <div className="saas-card-no-hover overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[12.5px] border-collapse min-w-[1200px]">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[var(--color-primary)] font-semibold uppercase tracking-uppercase text-[11px]">
                <th className="py-3 px-3 w-32">Job ID (Master)</th>
                <th className="py-3 px-3 w-28">Quote ID</th>
                <th className="py-3 px-3 min-w-[160px]">Customer Name</th>
                <th className="py-3 px-3 w-28">Contract Date</th>
                <th className="py-3 px-3 w-36 text-right">Contract Amt (Inc. Tax)</th>
                <th className="py-3 px-3 w-32 text-right">Est. Cost Budget</th>
                <th className="py-3 px-3 w-32 text-right">Initial Profit ($)</th>
                <th className="py-3 px-3 w-28 text-right">Target Margin</th>
                <th className="py-3 px-3 w-28">Planned Start</th>
                <th className="py-3 px-3 w-28">Planned End</th>
                <th className="py-3 px-3 w-32">Project Manager</th>
                <th className="py-3 px-3 w-28 text-center">Job Status</th>
                <th className="py-3 px-3 w-12 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((item) => {
                const calc = calculateApprovedJob(item, data);
                const barWidth = Math.min(
                  100,
                  Math.max(8, (item.contractAmount / maxContract) * 100)
                );

                let statusClass = 'pill-badge-normal';
                if (item.jobStatus === 'In Progress') statusClass = 'pill-badge-accent';
                else if (item.jobStatus === 'Completed' || item.jobStatus === 'Settled')
                  statusClass = 'pill-badge-success';

                return (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50/80 transition-colors group"
                  >
                    <td className="py-2.5 px-3 font-mono font-bold text-[var(--color-primary)]">
                      <input
                        type="text"
                        value={item.jobId}
                        onChange={(e) => handleFieldChange(item.id, 'jobId', e.target.value)}
                        className="editable-input w-full font-mono text-[12px] font-bold"
                      />
                    </td>
                    <td className="py-2.5 px-3 font-mono">
                      <select
                        value={item.quoteId}
                        onChange={(e) => handleFieldChange(item.id, 'quoteId', e.target.value)}
                        className="editable-input w-full text-[11px]"
                      >
                        {uniqueQuoteIds.map((qid) => (
                          <option key={qid} value={qid}>
                            {qid}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2.5 px-3 font-semibold text-[var(--color-primary)]">
                      {calc.customerName}
                    </td>
                    <td className="py-2.5 px-3 font-mono">
                      <input
                        type="date"
                        value={item.contractDate}
                        onChange={(e) => handleFieldChange(item.id, 'contractDate', e.target.value)}
                        className="editable-input w-full text-[11px]"
                      />
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <div className="flex flex-col items-end gap-1">
                        <input
                          type="number"
                          step="1000"
                          value={item.contractAmount}
                          onChange={(e) =>
                            handleFieldChange(item.id, 'contractAmount', parseFloat(e.target.value) || 0)
                          }
                          className="editable-input w-32 text-right font-mono font-bold text-[12.5px]"
                        />
                        <div className="data-bar-track w-32">
                          <div
                            className="data-bar-fill"
                            style={{ width: `${barWidth}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono text-[var(--color-muted)]">
                      {formatCurrency(calc.estTotalCost, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono font-bold text-emerald-700">
                      {formatCurrency(calc.initialProjectedProfit, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono font-bold text-emerald-700">
                      {formatPercent(calc.initialProjectedMargin)}
                    </td>
                    <td className="py-2.5 px-3 font-mono">
                      <input
                        type="date"
                        value={item.plannedStartDate}
                        onChange={(e) =>
                          handleFieldChange(item.id, 'plannedStartDate', e.target.value)
                        }
                        className="editable-input w-full text-[11px]"
                      />
                    </td>
                    <td className="py-2.5 px-3 font-mono">
                      <input
                        type="date"
                        value={item.plannedEndDate}
                        onChange={(e) => handleFieldChange(item.id, 'plannedEndDate', e.target.value)}
                        className="editable-input w-full text-[11px]"
                      />
                    </td>
                    <td className="py-2.5 px-3">
                      <input
                        type="text"
                        value={item.projectManager}
                        onChange={(e) => handleFieldChange(item.id, 'projectManager', e.target.value)}
                        className="editable-input w-full text-[12px]"
                      />
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <select
                        value={item.jobStatus}
                        onChange={(e) =>
                          handleFieldChange(item.id, 'jobStatus', e.target.value as JobStatus)
                        }
                        className={`editable-input text-[11px] font-semibold ${statusClass}`}
                      >
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="Settled">Settled</option>
                      </select>
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <button
                        onClick={() => handleDeleteJob(item.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 transition-colors rounded"
                        title="Delete job"
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
