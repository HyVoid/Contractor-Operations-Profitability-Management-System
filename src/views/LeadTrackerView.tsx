import React, { useState } from 'react';
import { LeadItem, LeadStatus, Settings } from '../types';
import {
  getLeadDaysInPipeline,
  getLeadPotentialProfit,
  formatCurrency,
} from '../calculations';
import { Plus, Search, Trash2, Download, Target, Filter } from 'lucide-react';
import { exportToCSV } from '../storageUtils';

interface LeadTrackerViewProps {
  leads: LeadItem[];
  settings: Settings;
  onUpdateLeads: (leads: LeadItem[]) => void;
}

export const LeadTrackerView: React.FC<LeadTrackerViewProps> = ({
  leads,
  settings,
  onUpdateLeads,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');

  const handleFieldChange = (id: string, field: keyof LeadItem, value: any) => {
    const updated = leads.map((l) => {
      if (l.id === id) {
        return { ...l, [field]: value };
      }
      return l;
    });
    onUpdateLeads(updated);
  };

  const handleAddLead = () => {
    const nextNum = leads.length + 1;
    const newLeadId = `LD-2026-${String(nextNum).padStart(3, '0')}`;
    const todayStr = new Date().toISOString().slice(0, 10);

    const newRow: LeadItem = {
      id: `ld-${Date.now()}`,
      leadId: newLeadId,
      customerName: 'New Prospective Client',
      contactPerson: 'Contact Person',
      phone: '+1 (555) 000-0000',
      projectType: 'Commercial Renovation',
      estimatedBudget: 100000,
      inquiryDate: todayStr,
      leadStatus: 'Following Up',
      estimator: 'David Miller',
    };
    onUpdateLeads([...leads, newRow]);
  };

  const handleDeleteLead = (id: string) => {
    if (confirm('Are you sure you want to delete this sales opportunity?')) {
      onUpdateLeads(leads.filter((l) => l.id !== id));
    }
  };

  const filtered = leads.filter((l) => {
    const matchesSearch =
      l.leadId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.projectType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.estimator.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'ALL' || l.leadStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const maxBudget = Math.max(...leads.map((l) => l.estimatedBudget || 0), 1);

  const handleExportCSV = () => {
    const exportRows = leads.map((l) => ({
      Lead_ID: l.leadId,
      Customer_Name: l.customerName,
      Contact_Person: l.contactPerson,
      Phone: l.phone,
      Project_Type: l.projectType,
      Estimated_Budget: l.estimatedBudget,
      Inquiry_Date: l.inquiryDate,
      Lead_Status: l.leadStatus,
      Estimator: l.estimator,
      Days_In_Pipeline: getLeadDaysInPipeline(l),
      Potential_Profit_Est: getLeadPotentialProfit(l, settings.targetMargin),
    }));
    exportToCSV('Lead_Tracker', exportRows);
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--table-header-bg)] text-[var(--color-muted)] font-semibold">
              Sheet 4
            </span>
            <h2 className="font-heading text-2xl font-bold text-[var(--color-primary)] tracking-tight">
              Lead & Sales Opportunity Pipeline
            </h2>
          </div>
          <p className="text-[13px] text-[var(--color-muted)] mt-1">
            Track inquiries, estimator assignments, pipeline duration, and target profit potential.
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
            onClick={handleAddLead}
            className="flex items-center gap-1.5 px-4 py-1.5 text-[12px] font-medium text-white bg-[var(--color-accent)] hover:bg-blue-700 rounded-md shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Lead</span>
          </button>
        </div>
      </div>

      {/* Filter & Status Bar */}
      <div className="saas-card-no-hover p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md w-full">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search lead ID, customer, estimator..."
            className="w-full text-[13px] pl-9 pr-3 py-1.5 bg-[var(--color-input-bg)] border border-slate-200 rounded-md text-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
          <Filter className="w-3.5 h-3.5 text-[var(--color-muted)] shrink-0" />
          <span className="text-[12px] text-[var(--color-muted)] font-medium shrink-0">
            Status:
          </span>
          {['ALL', 'Following Up', 'Quoted', 'Won', 'Lost'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-2.5 py-1 text-[11px] font-medium rounded-full transition-colors whitespace-nowrap ${
                statusFilter === st
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-[var(--table-header-bg)] text-[var(--color-muted)] hover:text-[var(--color-primary)]'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Main Lead Tracker Data Table */}
      <div className="saas-card-no-hover overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px] border-collapse min-w-[1100px]">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[var(--color-primary)] font-semibold uppercase tracking-uppercase text-[11px]">
                <th className="py-3 px-3 w-28">Lead ID</th>
                <th className="py-3 px-3 min-w-[160px]">Customer Name</th>
                <th className="py-3 px-3 min-w-[130px]">Contact Person</th>
                <th className="py-3 px-3 w-32">Phone</th>
                <th className="py-3 px-3 min-w-[140px]">Project Type</th>
                <th className="py-3 px-3 w-40 text-right">Budget ($)</th>
                <th className="py-3 px-3 w-28">Inquiry Date</th>
                <th className="py-3 px-3 w-32 text-center">Status</th>
                <th className="py-3 px-3 w-32">Estimator</th>
                <th className="py-3 px-3 w-28 text-center">Pipeline (Days)</th>
                <th className="py-3 px-3 w-36 text-right">Target Profit ($)</th>
                <th className="py-3 px-3 w-12 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((item) => {
                const daysInPipeline = getLeadDaysInPipeline(item);
                const potentialProfit = getLeadPotentialProfit(item, settings.targetMargin);
                const barWidth = Math.min(100, Math.max(8, (item.estimatedBudget / maxBudget) * 100));

                let statusBadgeClass = 'pill-badge-normal';
                if (item.leadStatus === 'Won') statusBadgeClass = 'pill-badge-success';
                else if (item.leadStatus === 'Quoted') statusBadgeClass = 'pill-badge-accent';
                else if (item.leadStatus === 'Lost') statusBadgeClass = 'pill-badge-warning';

                return (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50/80 transition-colors group"
                  >
                    <td className="py-2.5 px-3 font-mono font-bold text-[var(--color-primary)]">
                      <input
                        type="text"
                        value={item.leadId}
                        onChange={(e) => handleFieldChange(item.id, 'leadId', e.target.value)}
                        className="editable-input w-full font-mono text-[12px] font-bold"
                      />
                    </td>
                    <td className="py-2.5 px-3">
                      <input
                        type="text"
                        value={item.customerName}
                        onChange={(e) => handleFieldChange(item.id, 'customerName', e.target.value)}
                        className="editable-input w-full"
                      />
                    </td>
                    <td className="py-2.5 px-3">
                      <input
                        type="text"
                        value={item.contactPerson}
                        onChange={(e) => handleFieldChange(item.id, 'contactPerson', e.target.value)}
                        className="editable-input w-full text-[12px]"
                      />
                    </td>
                    <td className="py-2.5 px-3">
                      <input
                        type="text"
                        value={item.phone}
                        onChange={(e) => handleFieldChange(item.id, 'phone', e.target.value)}
                        className="editable-input w-full text-[12px] font-mono"
                      />
                    </td>
                    <td className="py-2.5 px-3">
                      <input
                        type="text"
                        value={item.projectType}
                        onChange={(e) => handleFieldChange(item.id, 'projectType', e.target.value)}
                        className="editable-input w-full text-[12px]"
                      />
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <div className="flex flex-col items-end gap-1">
                        <input
                          type="number"
                          step="1000"
                          value={item.estimatedBudget}
                          onChange={(e) =>
                            handleFieldChange(item.id, 'estimatedBudget', parseFloat(e.target.value) || 0)
                          }
                          className="editable-input w-28 text-right font-mono font-bold text-[12px]"
                        />
                        <div className="data-bar-track w-28">
                          <div
                            className="data-bar-fill"
                            style={{ width: `${barWidth}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-2.5 px-3">
                      <input
                        type="date"
                        value={item.inquiryDate}
                        onChange={(e) => handleFieldChange(item.id, 'inquiryDate', e.target.value)}
                        className="editable-input w-full font-mono text-[11px]"
                      />
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <select
                        value={item.leadStatus}
                        onChange={(e) =>
                          handleFieldChange(item.id, 'leadStatus', e.target.value as LeadStatus)
                        }
                        className={`editable-input text-[11px] font-semibold ${statusBadgeClass}`}
                      >
                        <option value="Following Up">Following Up</option>
                        <option value="Quoted">Quoted</option>
                        <option value="Won">Won</option>
                        <option value="Lost">Lost</option>
                      </select>
                    </td>
                    <td className="py-2.5 px-3">
                      <input
                        type="text"
                        value={item.estimator}
                        onChange={(e) => handleFieldChange(item.id, 'estimator', e.target.value)}
                        className="editable-input w-full text-[12px]"
                      />
                    </td>
                    <td className="py-2.5 px-3 text-center font-mono text-[12px]">
                      <span className="px-2 py-0.5 rounded bg-[var(--table-header-bg)] text-[var(--color-primary)] font-semibold">
                        {daysInPipeline}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono font-bold text-emerald-700">
                      {formatCurrency(potentialProfit, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <button
                        onClick={() => handleDeleteLead(item.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 transition-colors rounded"
                        title="Delete lead"
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
