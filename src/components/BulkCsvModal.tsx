import React, { useState } from 'react';
import { X, FileUp, Check, AlertCircle } from 'lucide-react';
import { parseCSV } from '../storageUtils';

interface BulkCsvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (targetTable: string, rows: Record<string, string>[], replace: boolean) => void;
}

export const BulkCsvModal: React.FC<BulkCsvModalProps> = ({ isOpen, onClose, onImport }) => {
  const [targetTable, setTargetTable] = useState('materials');
  const [rawCsvText, setRawCsvText] = useState('');
  const [replace, setReplace] = useState(false);
  const [parsedRows, setParsedRows] = useState<Record<string, string>[]>([]);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setRawCsvText(text);
    setErrorMsg('');
    if (text.trim()) {
      const rows = parseCSV(text);
      setParsedRows(rows);
      if (rows.length === 0) {
        setErrorMsg('Unable to parse CSV lines. Ensure headers are on row 1.');
      }
    } else {
      setParsedRows([]);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setRawCsvText(content);
      const rows = parseCSV(content);
      setParsedRows(rows);
      if (rows.length === 0) {
        setErrorMsg('Uploaded file contained no valid CSV records.');
      }
    };
    reader.readAsText(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parsedRows.length === 0) {
      setErrorMsg('Please paste valid CSV content or upload a file first.');
      return;
    }
    onImport(targetTable, parsedRows, replace);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[var(--color-surface)] rounded-[14px] shadow-[var(--shadow-lg)] w-full max-w-2xl p-6 relative animate-fade-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[var(--color-muted)] hover:text-[var(--color-primary)] rounded-md hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-9 h-9 rounded-lg bg-[var(--insight-bg)] text-[var(--color-accent)] flex items-center justify-center font-bold">
            <FileUp className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-[var(--color-primary)]">
              Bulk CSV Import
            </h3>
            <p className="text-[12px] text-[var(--color-muted)]">
              Import records into your worksheets directly from CSV files.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[12px] font-semibold text-[var(--color-primary)] mb-1">
                Select Target Table
              </label>
              <select
                value={targetTable}
                onChange={(e) => setTargetTable(e.target.value)}
                className="w-full text-[13px] bg-[var(--color-input-bg)] border border-slate-300 rounded-md p-2 text-[var(--color-primary)]"
              >
                <option value="materials">2. Material DB (materials)</option>
                <option value="laborRates">3. Labor Rates (laborRates)</option>
                <option value="leads">4. Lead Tracker (leads)</option>
                <option value="quotes">5. Quote Builder (quotes)</option>
                <option value="approvedJobs">6. Approved Jobs (approvedJobs)</option>
                <option value="schedules">7. Schedule (schedules)</option>
                <option value="laborLogs">8. Labor Logs (laborLogs)</option>
                <option value="materialUsages">9. Material Usages (materialUsages)</option>
              </select>
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-[var(--color-primary)] mb-1">
                Import Mode
              </label>
              <div className="flex items-center gap-4 pt-2">
                <label className="flex items-center gap-1.5 text-[12px] cursor-pointer">
                  <input
                    type="radio"
                    name="mode"
                    checked={!replace}
                    onChange={() => setReplace(false)}
                  />
                  <span>Append Records</span>
                </label>
                <label className="flex items-center gap-1.5 text-[12px] cursor-pointer text-red-600 font-medium">
                  <input
                    type="radio"
                    name="mode"
                    checked={replace}
                    onChange={() => setReplace(true)}
                  />
                  <span>Replace Entire Table</span>
                </label>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-[12px] font-semibold text-[var(--color-primary)]">
                Paste CSV Text or Upload File
              </label>
              <input
                type="file"
                accept=".csv,.txt"
                onChange={handleFileUpload}
                className="text-[11px] text-[var(--color-muted)]"
              />
            </div>
            <textarea
              rows={5}
              value={rawCsvText}
              onChange={handleTextChange}
              placeholder={`materialCode,materialName,specification,unit,unitCost\nMAT-101,Industrial Cable,50m roll,Roll,120.00`}
              className="w-full text-[12px] font-mono bg-[var(--color-input-bg)] border border-slate-300 rounded-md p-2.5 text-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
            />
          </div>

          {errorMsg && (
            <div className="flex items-center gap-2 p-2.5 bg-red-50 text-red-700 text-[12px] rounded-md border border-red-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {parsedRows.length > 0 && (
            <div className="bg-[var(--table-header-bg)] p-3 rounded-md border border-slate-200 text-[12px]">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-[var(--color-primary)]">
                  Preview ({parsedRows.length} rows parsed)
                </span>
                <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> CSV Parsed Successfully
                </span>
              </div>
              <p className="text-[11px] text-[var(--color-muted)] font-mono truncate">
                Columns detected: {Object.keys(parsedRows[0]).join(', ')}
              </p>
            </div>
          )}

          <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-[13px] font-medium text-[var(--color-muted)] hover:text-[var(--color-primary)]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={parsedRows.length === 0}
              className="px-5 py-2 text-[13px] font-medium bg-[var(--color-accent)] hover:bg-blue-700 text-white rounded-md shadow-sm disabled:opacity-50 transition-colors"
            >
              Confirm & Import {parsedRows.length > 0 ? `(${parsedRows.length} Rows)` : ''}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
