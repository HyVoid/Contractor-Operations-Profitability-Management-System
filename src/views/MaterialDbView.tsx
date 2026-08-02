import React, { useState } from 'react';
import { MaterialItem, Settings } from '../types';
import { getMaterialStatus, formatCurrency } from '../calculations';
import { Plus, Search, Trash2, Download, Package } from 'lucide-react';
import { exportToCSV } from '../storageUtils';

interface MaterialDbViewProps {
  materials: MaterialItem[];
  settings: Settings;
  onUpdateMaterials: (materials: MaterialItem[]) => void;
}

export const MaterialDbView: React.FC<MaterialDbViewProps> = ({
  materials,
  settings,
  onUpdateMaterials,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleFieldChange = (id: string, field: keyof MaterialItem, value: any) => {
    const updated = materials.map((m) => {
      if (m.id === id) {
        return { ...m, [field]: value };
      }
      return m;
    });
    onUpdateMaterials(updated);
  };

  const handleAddMaterial = () => {
    const nextNum = materials.length + 1;
    const newCode = `MAT-${String(nextNum).padStart(3, '0')}`;
    const newRow: MaterialItem = {
      id: `m-${Date.now()}`,
      materialCode: newCode,
      materialName: 'New Material Item',
      specification: 'Standard Specification',
      unit: 'Piece',
      unitCost: 10.0,
    };
    onUpdateMaterials([...materials, newRow]);
  };

  const handleDeleteMaterial = (id: string) => {
    if (confirm('Are you sure you want to delete this material item?')) {
      onUpdateMaterials(materials.filter((m) => m.id !== id));
    }
  };

  const filtered = materials.filter(
    (m) =>
      m.materialCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.materialName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.specification.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const maxCost = Math.max(...materials.map((m) => m.unitCost || 0), 1);

  const handleExportCSV = () => {
    const exportRows = materials.map((m) => ({
      Material_Code: m.materialCode,
      Material_Name: m.materialName,
      Specification: m.specification,
      Unit: m.unit,
      Unit_Cost: m.unitCost,
      Status_Flag: getMaterialStatus(m),
    }));
    exportToCSV('Material_DB', exportRows);
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--table-header-bg)] text-[var(--color-muted)] font-semibold">
              Sheet 2
            </span>
            <h2 className="font-heading text-2xl font-bold text-[var(--color-primary)] tracking-tight">
              Material Master Database
            </h2>
          </div>
          <p className="text-[13px] text-[var(--color-muted)] mt-1">
            Standard purchasing materials catalog providing unified price baselines for quotations and job consumption.
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
            onClick={handleAddMaterial}
            className="flex items-center gap-1.5 px-4 py-1.5 text-[12px] font-medium text-white bg-[var(--color-accent)] hover:bg-blue-700 rounded-md shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Material</span>
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
            placeholder="Filter by code, name, specification..."
            className="w-full text-[13px] pl-9 pr-3 py-1.5 bg-[var(--color-input-bg)] border border-slate-200 rounded-md text-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          />
        </div>
        <div className="text-[12px] text-[var(--color-muted)] font-mono">
          Total Items: <span className="font-bold text-[var(--color-primary)]">{filtered.length}</span>
        </div>
      </div>

      {/* Main Material Data Table */}
      <div className="saas-card-no-hover overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px] border-collapse">
            <thead>
              <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[var(--color-primary)] font-semibold uppercase tracking-uppercase text-[11px]">
                <th className="py-3 px-4 w-32">Material Code</th>
                <th className="py-3 px-4 min-w-[180px]">Material Name</th>
                <th className="py-3 px-4 min-w-[180px]">Specification</th>
                <th className="py-3 px-4 w-28">Unit</th>
                <th className="py-3 px-4 w-48 text-right">Unit Cost (Ex-Tax)</th>
                <th className="py-3 px-4 w-32 text-center">Status Flag</th>
                <th className="py-3 px-4 w-16 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((item) => {
                const status = getMaterialStatus(item);
                const isError = status.includes('Error');
                const barWidth = Math.min(100, Math.max(8, (item.unitCost / maxCost) * 100));

                return (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50/80 transition-colors group"
                  >
                    <td className="py-2.5 px-4 font-mono font-bold text-[var(--color-primary)]">
                      <input
                        type="text"
                        value={item.materialCode}
                        onChange={(e) => handleFieldChange(item.id, 'materialCode', e.target.value)}
                        className="editable-input w-full font-mono text-[12px] font-bold"
                      />
                    </td>
                    <td className="py-2.5 px-4">
                      <input
                        type="text"
                        value={item.materialName}
                        onChange={(e) => handleFieldChange(item.id, 'materialName', e.target.value)}
                        className="editable-input w-full"
                      />
                    </td>
                    <td className="py-2.5 px-4">
                      <input
                        type="text"
                        value={item.specification}
                        onChange={(e) => handleFieldChange(item.id, 'specification', e.target.value)}
                        className="editable-input w-full"
                      />
                    </td>
                    <td className="py-2.5 px-4">
                      <input
                        type="text"
                        value={item.unit}
                        onChange={(e) => handleFieldChange(item.id, 'unit', e.target.value)}
                        className="editable-input w-24 text-center"
                      />
                    </td>
                    <td className="py-2.5 px-4 text-right">
                      <div className="flex flex-col items-end gap-1">
                        <input
                          type="number"
                          step="0.01"
                          value={item.unitCost}
                          onChange={(e) =>
                            handleFieldChange(item.id, 'unitCost', parseFloat(e.target.value) || 0)
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
                      <span
                        className={`pill-badge ${
                          isError ? 'pill-badge-warning' : 'pill-badge-success'
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                    <td className="py-2.5 px-4 text-center">
                      <button
                        onClick={() => handleDeleteMaterial(item.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 transition-colors rounded"
                        title="Delete material"
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
