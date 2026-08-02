import React, { useState } from 'react';
import { AppData, ScheduleItem } from '../types';
import { calculateSchedule, formatPercent } from '../calculations';
import { Plus, Search, Trash2, Download, Calendar, Clock } from 'lucide-react';
import { exportToCSV } from '../storageUtils';

interface ScheduleViewProps {
  data: AppData;
  onUpdateSchedules: (schedules: ScheduleItem[]) => void;
}

export const ScheduleView: React.FC<ScheduleViewProps> = ({
  data,
  onUpdateSchedules,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { schedules, approvedJobs } = data;

  const handleFieldChange = (id: string, field: keyof ScheduleItem, value: any) => {
    const updated = schedules.map((s) => {
      if (s.id === id) {
        return { ...s, [field]: value };
      }
      return s;
    });
    onUpdateSchedules(updated);
  };

  const handleAddSchedule = () => {
    const nextNum = schedules.length + 1;
    const newRecordId = `SCH-${String(nextNum).padStart(3, '0')}`;
    const defaultJobId = approvedJobs[0]?.jobId || 'JOB-2026-001';
    const todayStr = new Date().toISOString().slice(0, 10);

    const newRow: ScheduleItem = {
      id: `sch-${Date.now()}`,
      recordId: newRecordId,
      jobId: defaultJobId,
      milestoneName: 'New Project Milestone / Phase',
      plannedStart: todayStr,
      plannedEnd: '2026-04-30',
      completionPct: 0.1,
    };
    onUpdateSchedules([...schedules, newRow]);
  };

  const handleDeleteSchedule = (id: string) => {
    if (confirm('Are you sure you want to delete this milestone schedule?')) {
      onUpdateSchedules(schedules.filter((s) => s.id !== id));
    }
  };

  const filtered = schedules.filter(
    (s) =>
      s.recordId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.jobId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.milestoneName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExportCSV = () => {
    const exportRows = schedules.map((s) => {
      const calc = calculateSchedule(s);
      return {
        Record_ID: s.recordId,
        Job_ID: s.jobId,
        Milestone_Name: s.milestoneName,
        Planned_Start: s.plannedStart,
        Planned_End: s.plannedEnd,
        Completion_Pct: s.completionPct,
        Days_Overdue: calc.daysOverdue,
        Task_Status_Alert: calc.taskStatusAlert,
      };
    });
    exportToCSV('Schedule', exportRows);
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--table-header-bg)] text-[var(--color-muted)] font-semibold">
              Sheet 7
            </span>
            <h2 className="font-heading text-2xl font-bold text-[var(--color-primary)] tracking-tight">
              Construction Schedule & Delay Monitoring
            </h2>
          </div>
          <p className="text-[13px] text-[var(--color-muted)] mt-1">
            Tracks milestone completion percentages and flags delay risks for site project managers.
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
            onClick={handleAddSchedule}
            className="flex items-center gap-1.5 px-4 py-1.5 text-[12px] font-medium text-white bg-[var(--color-accent)] hover:bg-blue-700 rounded-md shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Milestone</span>
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
            placeholder="Search record ID, Job ID, milestone..."
            className="w-full text-[13px] pl-9 pr-3 py-1.5 bg-[var(--color-input-bg)] border border-slate-200 rounded-md text-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          />
        </div>
        <div className="text-[12px] text-[var(--color-muted)] font-mono">
          Milestones: <span className="font-bold text-[var(--color-primary)]">{filtered.length}</span>
        </div>
      </div>

      {/* Main Schedule Data Table */}
      <div className="saas-card-no-hover overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[12.5px] border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[var(--color-primary)] font-semibold uppercase tracking-uppercase text-[11px]">
                <th className="py-3 px-4 w-28">Record ID</th>
                <th className="py-3 px-4 w-32">Job ID</th>
                <th className="py-3 px-4 min-w-[220px]">Milestone / Phase Name</th>
                <th className="py-3 px-4 w-32">Planned Start</th>
                <th className="py-3 px-4 w-32">Planned End</th>
                <th className="py-3 px-4 w-44 text-center">Progress (% Completed)</th>
                <th className="py-3 px-4 w-28 text-center">Days Overdue</th>
                <th className="py-3 px-4 w-44 text-center">Task Status Alert</th>
                <th className="py-3 px-4 w-12 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((item) => {
                const calc = calculateSchedule(item);
                const pctFormatted = Math.round(item.completionPct * 100);

                let badgeClass = 'pill-badge-accent';
                if (calc.taskStatusAlert.includes('Completed')) badgeClass = 'pill-badge-success';
                else if (calc.taskStatusAlert.includes('Delayed')) badgeClass = 'pill-badge-warning';

                return (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50/80 transition-colors group"
                  >
                    <td className="py-2.5 px-4 font-mono font-bold text-[var(--color-primary)]">
                      <input
                        type="text"
                        value={item.recordId}
                        onChange={(e) => handleFieldChange(item.id, 'recordId', e.target.value)}
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
                    <td className="py-2.5 px-4 font-medium text-[var(--color-primary)]">
                      <input
                        type="text"
                        value={item.milestoneName}
                        onChange={(e) => handleFieldChange(item.id, 'milestoneName', e.target.value)}
                        className="editable-input w-full"
                      />
                    </td>
                    <td className="py-2.5 px-4 font-mono">
                      <input
                        type="date"
                        value={item.plannedStart}
                        onChange={(e) => handleFieldChange(item.id, 'plannedStart', e.target.value)}
                        className="editable-input w-full text-[11px]"
                      />
                    </td>
                    <td className="py-2.5 px-4 font-mono">
                      <input
                        type="date"
                        value={item.plannedEnd}
                        onChange={(e) => handleFieldChange(item.id, 'plannedEnd', e.target.value)}
                        className="editable-input w-full text-[11px]"
                      />
                    </td>
                    <td className="py-2.5 px-4 text-center">
                      <div className="flex items-center gap-2 justify-center">
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.05"
                          value={item.completionPct}
                          onChange={(e) =>
                            handleFieldChange(item.id, 'completionPct', parseFloat(e.target.value) || 0)
                          }
                          className="w-24 accent-[var(--color-accent)]"
                        />
                        <span className="font-mono font-bold text-[12px] w-10 text-right">
                          {pctFormatted}%
                        </span>
                      </div>
                    </td>
                    <td className="py-2.5 px-4 text-center font-mono font-bold text-[12px]">
                      {calc.daysOverdue > 0 ? (
                        <span className="text-red-600 bg-red-50 px-2 py-0.5 rounded">
                          {calc.daysOverdue} Days
                        </span>
                      ) : (
                        <span className="text-slate-400">0</span>
                      )}
                    </td>
                    <td className="py-2.5 px-4 text-center">
                      <span className={`pill-badge interactive-status-cell ${badgeClass}`}>
                        {calc.taskStatusAlert}
                      </span>
                    </td>
                    <td className="py-2.5 px-4 text-center">
                      <button
                        onClick={() => handleDeleteSchedule(item.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 transition-colors rounded"
                        title="Delete milestone"
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
