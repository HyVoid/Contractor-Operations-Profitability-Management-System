import { AppData } from './types';
import { INITIAL_APP_DATA } from './initialData';

const STORAGE_KEY = 'job_costing_saas_app_data_v2';

export function loadAppData(): AppData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.settings && parsed.materials) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Failed to load from localStorage:', e);
  }
  return INITIAL_APP_DATA;
}

export function saveAppData(data: AppData): AppData {
  const updatedData = {
    ...data,
    lastSavedAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
  return updatedData;
}

export function exportBackupJSON(data: AppData) {
  const dateStr = new Date().toISOString().slice(0, 10);
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Job_Costing_Backup_${dateStr}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// Simple CSV stringifier
export function exportToCSV(filename: string, rows: Record<string, any>[]) {
  if (!rows || !rows.length) return;
  const headers = Object.keys(rows[0]);
  const csvLines = [headers.join(',')];

  rows.forEach((row) => {
    const values = headers.map((header) => {
      const val = row[header] ?? '';
      const stringified = String(val).replace(/"/g, '""');
      return `"${stringified}"`;
    });
    csvLines.push(values.join(','));
  });

  const blob = new Blob([csvLines.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${filename}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// Simple CSV parser
export function parseCSV(csvText: string): Record<string, string>[] {
  const lines = csvText.split(/\r?\n/).filter((line) => line.trim().length > 0);
  if (lines.length < 2) return [];

  const headers = lines[0].split(',').map((h) => h.replace(/^"|"$/g, '').trim());
  const result: Record<string, string>[] = [];

  for (let i = 1; i < lines.length; i++) {
    // Handling basic quoted CSV fields
    const rawFields = lines[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || lines[i].split(',');
    const row: Record<string, string> = {};
    headers.forEach((header, idx) => {
      let val = rawFields[idx] ? rawFields[idx].trim() : '';
      val = val.replace(/^"|"$/g, '').replace(/""/g, '"');
      row[header] = val;
    });
    result.push(row);
  }

  return result;
}
