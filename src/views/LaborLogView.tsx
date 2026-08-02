import React, { useState } from 'react';
import { AppData, LaborLogItem } from '../types';
import { calculateLaborLog, formatCurrency } from '../calculations';
import { Plus, Search, Trash2, Download, Clock } from 'lucide-react';
import { exportToCSV } from '../storageUtils';

interface LaborLogViewProps {
  data: AppData;
  onUpdateLaborLogs: (logs: LaborLogItem[]) => void;
}

export const LaborLogView: React.FC<LaborLogViewProps> = ({
  data,
  onUpdateLaborLogs,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { laborLogs, approvedJobs, laborRates, settings } = data;

  const handleFieldChange = (id: string, field: keyof LaborLogItem, value: any) => {
    const updated = laborLogs.map((l) => {
      if (l.id === id) {
        return { ...l, [field]: value };
      }
      return l;
    });
    onUpdateLaborLogs(updated);
  };

  const handleAddLog = () => {
    const nextNum = laborLogs.length + 1;
    const newLogId = `LOG-2026-${String(nextNum).padStart(4, '0')}`;
    const defaultJobId = approvedJobs[0]?.jobId || 'JOB-2026-001';
    const defaultLaborCode = laborRates[0]?.laborCode || 'LBR-ELE';
    const todayStr = new Date().toISOString().slice(0, 10);

    const newRow: LaborLogItem = {
      id: `ll-${Date.now()}`,
      logId: newLogId,
      jobId: defaultJobId,
      workDate: todayStr,
      workerName: 'New Site Technician',
      laborCode: defaultLaborCode,
      actualHours: 8.0,
    };
    onUpdateLaborLogs([...laborLogs, newRow]);
  };

  const handleDeleteLog = (id: string) => {
    if (confirm('Are you sure you want to delete this labor log entry?')) {
      onUpdateLaborLogs(laborLogs.filter((l) => l.id !== id));
    }
  };

  const filtered = laborLogs.filter(
    (l) =>
      l.logId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.jobId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.workerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.laborCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalLoggedHours = filtered.reduce((acc, l) => acc + (l.actualHours || 0), 0);
  const totalLoggedCost = filtered.reduce(
    (acc, l) => acc + calculateLaborLog(l, laborRates).actualLaborCost,
    0
  );

  const handleExportCSV = () => {
    const exportRows = laborLogs.map((l) => {
      const calc = calculateLaborLog(l, laborRates);
      return {
        Log_ID: l.logId,
        Job_ID: l.jobId,
        Work_Date: l.workDate,
        Worker_Name: l.workerName,
        Labor_Code: l.laborCode,
        Actual_Hours: l.actualHours,
        Hourly_Rate: calc.hourlyRate,
        Actual_Labor_Cost: calc.actualLaborCost,
      };
    });
    exportToCSV('Labor_Log', exportRows);
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--table-header-bg)] text-[var(--color-muted)] font-semibold">
              Sheet 8
            </span>
            <h2 className="font-heading text-2xl font-bold text-[var(--color-primary)] tracking-tight">
              Onsite Daily Labor Hours Log
            </h2>
          </div>
          <p className="text-[13px] text-[var(--color-muted)] mt-1">
            Records daily actual hours spent on site by workers, linking automatically to master trade rates.
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
            onClick={handleAddLog}
            className="flex items-center gap-1.5 px-4 py-1.5 text-[12px] font-medium text-white bg-[var(--color-accent)] hover:bg-blue-700 rounded-md shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Log Work Hours</span>
          </button>
        </div>
      </div>

      {/* Summary KPI Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="saas-card p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--insight-bg)] text-[var(--color-accent)] flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-uppercase text-[var(--color-muted)] font-semibold">
                Total Logged Hours
              </p>
              <p className="font-heading font-bold text-2xl text-[var(--color-primary)] tracking-tight">
                {totalLoggedHours.toFixed(1)} hrs
              </p>
            </div>
          </div>
        </div>

        <div className="saas-card p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              $
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-uppercase text-[var(--color-muted)] font-semibold">
                Total Actual Labor Expenditure
              </p>
              <p className="font-heading font-bold text-2xl text-emerald-700 tracking-tight">
                {formatCurrency(totalLoggedCost, settings.currencySymbol)}
              </p>
            </div>
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
            placeholder="Search log ID, Job ID, worker name..."
            className="w-full text-[13px] pl-9 pr-3 py-1.5 bg-[var(--color-input-bg)] border border-slate-200 rounded-md text-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          />
        </div>
        <div className="text-[12px] text-[var(--color-muted)] font-mono">
          Log Entries: <span className="font-bold text-[var(--color-primary)]">{filtered.length}</span>
        </div>
      </div>

      {/* Main Labor Log Data Table */}
      <div className="saas-card-no-hover overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[12.5px] border-collapse min-w-[950px]">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[var(--color-primary)] font-semibold uppercase tracking-uppercase text-[11px]">
                <th className="py-3 px-4 w-32">Log ID</th>
                <th className="py-3 px-4 w-32">Job ID</th>
                <th className="py-3 px-4 w-32">Work Date</th>
                <th className="py-3 px-4 min-w-[180px]">Worker Name</th>
                <th className="py-3 px-4 w-36">Labor Trade Code</th>
                <th className="py-3 px-4 w-28 text-right">Actual Hours</th>
                <th className="py-3 px-4 w-32 text-right">Hourly Rate</th>
                <th className="py-3 px-4 w-36 text-right font-bold text-[var(--color-primary)]">
                  Actual Labor Cost
                </th>
                <th className="py-3 px-4 w-12 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((item) => {
                const calc = calculateLaborLog(item, laborRates);

                return (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50/80 transition-colors group"
                  >
                    <td className="py-2.5 px-4 font-mono font-bold text-[var(--color-primary)]">
                      <input
                        type="text"
                        value={item.logId}
                        onChange={(e) => handleFieldChange(item.id, 'logId', e.target.value)}
                        className="editable-input w-full font-mono text-[12px] font-bold"
                      />
                    </td>
                    <td className="py-2.5 px-4 font-mono">
                      <select
                        value={item.jobId}
                        onChange={(e) => handleFieldChange(item.id, 'jobId', e.target.value)}
                        className="editable-input w-full text-[11px]"
                      >
                        {approvedJobs.map((j) => (
                          <option key={j.id} value={j.jobId}>
                            {j.jobId}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2.5 px-4 font-mono">
                      <input
                        type="date"
                        value={item.workDate}
                        onChange={(e) => handleFieldChange(item.id, 'workDate', e.target.value)}
                        className="editable-input w-full text-[11px]"
                      />
                    </td>
                    <td className="py-2.5 px-4">
                      <input
                        type="text"
                        value={item.workerName}
                        onChange={(e) => handleFieldChange(item.id, 'workerName', e.target.value)}
                        className="editable-input w-full text-[12px]"
                      />
                    </td>
                    <td className="py-2.5 px-4 font-mono">
                      <select
                        value={item.laborCode}
                        onChange={(e) => handleFieldChange(item.id, 'laborCode', e.target.value)}
                        className="editable-input w-full text-[11px]"
                      >
                        {laborRates.map((l) => (
                          <option key={l.id} value={l.laborCode}>
                            {l.laborCode} - {l.laborName.slice(0, 10)}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2.5 px-4 text-right">
                      <input
                        type="number"
                        step="0.5"
                        value={item.actualHours}
                        onChange={(e) =>
                          handleFieldChange(item.id, 'actualHours', parseFloat(e.target.value) || 0)
                        }
                        className="editable-input w-24 text-right font-mono font-bold"
                      />
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono text-[var(--color-muted)]">
                      {formatCurrency(calc.hourlyRate, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono font-bold text-emerald-700 bg-emerald-50/20">
                      {formatCurrency(calc.actualLaborCost, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-4 text-center">
                      <button
                        onClick={() => handleDeleteLog(item.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 transition-colors rounded"
                        title="Delete log"
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
