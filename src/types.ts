export interface Settings {
  currencySymbol: string;
  taxRate: number;          // e.g. 0.13 for 13.00%
  overheadRate: number;     // e.g. 0.10 for 10.00%
  targetMargin: number;     // e.g. 0.25 for 25.00%
  overrunThreshold: number; // e.g. 0.05 for 5.00%
  exchangeRate: number;     // e.g. 1.0000 USD/CAD
}

export interface MaterialItem {
  id: string;
  materialCode: string;
  materialName: string;
  specification: string;
  unit: string;
  unitCost: number;
}

export interface LaborRateItem {
  id: string;
  laborCode: string;
  laborName: string;
  hourlyRate: number;
}

export type LeadStatus = 'Following Up' | 'Quoted' | 'Won' | 'Lost';

export interface LeadItem {
  id: string;
  leadId: string;
  customerName: string;
  contactPerson: string;
  phone: string;
  projectType: string;
  estimatedBudget: number;
  inquiryDate: string;
  leadStatus: LeadStatus;
  estimator: string;
}

export interface QuoteItem {
  id: string;
  quoteId: string;
  leadId: string;
  materialCode: string;
  estMaterialQty: number;
  laborCode: string;
  estLaborHours: number;
}

export type JobStatus = 'Not Started' | 'In Progress' | 'Completed' | 'Settled';

export interface ApprovedJobItem {
  id: string;
  jobId: string;
  quoteId: string;
  contractDate: string;
  contractAmount: number; // Inclusive of Tax
  plannedStartDate: string;
  plannedEndDate: string;
  projectManager: string;
  jobStatus: JobStatus;
}

export interface ScheduleItem {
  id: string;
  recordId: string;
  jobId: string;
  milestoneName: string;
  plannedStart: string;
  plannedEnd: string;
  completionPct: number; // 0 to 1
}

export interface LaborLogItem {
  id: string;
  logId: string;
  jobId: string;
  workDate: string;
  workerName: string;
  laborCode: string;
  actualHours: number;
}

export interface MaterialUsageItem {
  id: string;
  usageId: string;
  jobId: string;
  issueDate: string;
  materialCode: string;
  quantity: number;
}

export interface AppData {
  settings: Settings;
  materials: MaterialItem[];
  laborRates: LaborRateItem[];
  leads: LeadItem[];
  quotes: QuoteItem[];
  approvedJobs: ApprovedJobItem[];
  schedules: ScheduleItem[];
  laborLogs: LaborLogItem[];
  materialUsages: MaterialUsageItem[];
  lastSavedAt: string;
}

export type TabKey =
  | 'settings'
  | 'material_db'
  | 'labor_rates'
  | 'lead_tracker'
  | 'quote_builder'
  | 'approved_jobs'
  | 'schedule'
  | 'labor_log'
  | 'material_usage'
  | 'job_cost_engine'
  | 'profit_dashboard'
  | 'customer_history';

export interface TabConfig {
  key: TabKey;
  label: string;
  sheetNumber: number;
  category: 'Master Data' | 'Operations & Execution' | 'Engine & Analytics';
  description: string;
}
