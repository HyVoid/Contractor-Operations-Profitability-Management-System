import React, { useState } from 'react';
import { AppData, MaterialUsageItem } from '../types';
import { calculateMaterialUsage, formatCurrency } from '../calculations';
import { Plus, Search, Trash2, Download, Package } from 'lucide-react';
import { exportToCSV } from '../storageUtils';

interface MaterialUsageViewProps {
  data: AppData;
  onUpdateMaterialUsages: (usages: MaterialUsageItem[]) => void;
}

export const MaterialUsageView: React.FC<MaterialUsageViewProps> = ({
  data,
  onUpdateMaterialUsages,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { materialUsages, approvedJobs, materials, settings } = data;

  const handleFieldChange = (id: string, field: keyof MaterialUsageItem, value: any) => {
    const updated = materialUsages.map((u) => {
      if (u.id === id) {
        return { ...u, [field]: value };
      }
      return u;
    });
    onUpdateMaterialUsages(updated);
  };

  const handleAddUsage = () => {
    const nextNum = materialUsages.length + 1;
    const newUsageId = `MAT-USE-${String(nextNum).padStart(3, '0')}`;
    const defaultJobId = approvedJobs[0]?.jobId || 'JOB-2026-001';
    const defaultMatCode = materials[0]?.materialCode || 'MAT-001';
    const todayStr = new Date().toISOString().slice(0, 10);

    const newRow: MaterialUsageItem = {
      id: `mu-${Date.now()}`,
      usageId: newUsageId,
      jobId: defaultJobId,
      issueDate: todayStr,
      materialCode: defaultMatCode,
      quantity: 10.0,
    };
    onUpdateMaterialUsages([...materialUsages, newRow]);
  };

  const handleDeleteUsage = (id: string) => {
    if (confirm('Are you sure you want to delete this material usage entry?')) {
      onUpdateMaterialUsages(materialUsages.filter((u) => u.id !== id));
    }
  };

  const filtered = materialUsages.filter(
    (u) =>
      u.usageId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.jobId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.materialCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalMaterialCost = filtered.reduce(
    (acc, u) => acc + calculateMaterialUsage(u, materials).actualMaterialCost,
    0
  );

  const handleExportCSV = () => {
    const exportRows = materialUsages.map((u) => {
      const calc = calculateMaterialUsage(u, materials);
      return {
        Usage_ID: u.usageId,
        Job_ID: u.jobId,
        Issue_Date: u.issueDate,
        Material_Code: u.materialCode,
        Quantity: u.quantity,
        Unit_Cost: calc.unitCost,
        Actual_Material_Cost: calc.actualMaterialCost,
      };
    });
    exportToCSV('Material_Usage', exportRows);
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--table-header-bg)] text-[var(--color-muted)] font-semibold">
              Sheet 9
            </span>
            <h2 className="font-heading text-2xl font-bold text-[var(--color-primary)] tracking-tight">
              Onsite Material Consumption Log
            </h2>
          </div>
          <p className="text-[13px] text-[var(--color-muted)] mt-1">
            Tracks physical material issued and consumed on site, linking automatically to material master purchasing costs.
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
            onClick={handleAddUsage}
            className="flex items-center gap-1.5 px-4 py-1.5 text-[12px] font-medium text-white bg-[var(--color-accent)] hover:bg-blue-700 rounded-md shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Record Material Issue</span>
          </button>
        </div>
      </div>

      {/* Summary KPI Banner */}
      <div className="saas-card p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[var(--insight-bg)] text-[var(--color-accent)] flex items-center justify-center font-bold">
            <Package className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-uppercase text-[var(--color-muted)] font-semibold">
              Total Actual Material Issued Expenditure
            </p>
            <p className="font-heading font-bold text-2xl text-[var(--color-primary)] tracking-tight">
              {formatCurrency(totalMaterialCost, settings.currencySymbol)}
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
            placeholder="Search usage ID, Job ID, material code..."
            className="w-full text-[13px] pl-9 pr-3 py-1.5 bg-[var(--color-input-bg)] border border-slate-200 rounded-md text-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          />
        </div>
        <div className="text-[12px] text-[var(--color-muted)] font-mono">
          Usage Entries: <span className="font-bold text-[var(--color-primary)]">{filtered.length}</span>
        </div>
      </div>

      {/* Main Material Usage Data Table */}
      <div className="saas-card-no-hover overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[12.5px] border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[var(--color-primary)] font-semibold uppercase tracking-uppercase text-[11px]">
                <th className="py-3 px-4 w-32">Usage ID</th>
                <th className="py-3 px-4 w-32">Job ID</th>
                <th className="py-3 px-4 w-32">Issue Date</th>
                <th className="py-3 px-4 min-w-[200px]">Material Code</th>
                <th className="py-3 px-4 w-28 text-right">Quantity</th>
                <th className="py-3 px-4 w-32 text-right">Unit Cost</th>
                <th className="py-3 px-4 w-36 text-right font-bold text-[var(--color-primary)]">
                  Actual Material Cost
                </th>
                <th className="py-3 px-4 w-12 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((item) => {
                const calc = calculateMaterialUsage(item, materials);

                return (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50/80 transition-colors group"
                  >
                    <td className="py-2.5 px-4 font-mono font-bold text-[var(--color-primary)]">
                      <input
                        type="text"
                        value={item.usageId}
                        onChange={(e) => handleFieldChange(item.id, 'usageId', e.target.value)}
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
                        value={item.issueDate}
                        onChange={(e) => handleFieldChange(item.id, 'issueDate', e.target.value)}
                        className="editable-input w-full text-[11px]"
                      />
                    </td>
                    <td className="py-2.5 px-4 font-mono">
                      <select
                        value={item.materialCode}
                        onChange={(e) => handleFieldChange(item.id, 'materialCode', e.target.value)}
                        className="editable-input w-full text-[11px]"
                      >
                        {materials.map((m) => (
                          <option key={m.id} value={m.materialCode}>
                            {m.materialCode} - {m.materialName.slice(0, 16)}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2.5 px-4 text-right">
                      <input
                        type="number"
                        step="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleFieldChange(item.id, 'quantity', parseFloat(e.target.value) || 0)
                        }
                        className="editable-input w-24 text-right font-mono font-bold"
                      />
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono text-[var(--color-muted)]">
                      {formatCurrency(calc.unitCost, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono font-bold text-[var(--color-primary)] bg-slate-50">
                      {formatCurrency(calc.actualMaterialCost, settings.currencySymbol)}
                    </td>
                    <td className="py-2.5 px-4 text-center">
                      <button
                        onClick={() => handleDeleteUsage(item.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 transition-colors rounded"
                        title="Delete usage entry"
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
