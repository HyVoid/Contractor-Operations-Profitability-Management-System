import { AppData, TabConfig } from './types';

export const INITIAL_SETTINGS = {
  currencySymbol: '$',
  taxRate: 0.13,          // 13.00% VAT
  overheadRate: 0.10,     // 10.00% Overhead Allocation
  targetMargin: 0.25,     // 25.00% Target Gross Margin
  overrunThreshold: 0.05, // 5.00% Cost Overrun Red Line
  exchangeRate: 1.0000,
};

export const INITIAL_MATERIALS = [
  { id: 'm-1', materialCode: 'MAT-001', materialName: 'Copper Cable 2.5sqmm', specification: '100m Roll / Red', unit: 'Roll', unitCost: 85.00 },
  { id: 'm-2', materialCode: 'MAT-002', materialName: 'PVC Conduit 20mm', specification: '3m Length / Heavy Duty', unit: 'Stick', unitCost: 4.50 },
  { id: 'm-3', materialCode: 'MAT-003', materialName: 'LED Ceiling Panel 60x60', specification: '40W Daylight 6000K', unit: 'Set', unitCost: 32.00 },
  { id: 'm-4', materialCode: 'MAT-004', materialName: 'Distribution Board 18-Way', specification: 'Surface Mount Metal Enclosure', unit: 'Box', unitCost: 145.00 },
  { id: 'm-5', materialCode: 'MAT-005', materialName: 'Circuit Breaker 16A 1P', specification: 'MCB Type B 6kA', unit: 'Piece', unitCost: 6.80 },
  { id: 'm-6', materialCode: 'MAT-006', materialName: 'Drywall Board 12mm', specification: '1220x2440mm Moisture Resistant', unit: 'Sheet', unitCost: 18.50 },
  { id: 'm-7', materialCode: 'MAT-007', materialName: 'Galvanized Steel Stud 75mm', specification: '3m Light Gauge Framing', unit: 'Length', unitCost: 8.20 },
  { id: 'm-8', materialCode: 'MAT-008', materialName: 'Acoustic Insulation Batt', specification: 'R2.5 50mm Glasswool', unit: 'Pack', unitCost: 42.00 },
];

export const INITIAL_LABOR_RATES = [
  { id: 'l-1', laborCode: 'LBR-ELE', laborName: 'Licensed Senior Electrician', hourlyRate: 85.00 },
  { id: 'l-2', laborCode: 'LBR-CAR', laborName: 'Senior Carpenter / Framer', hourlyRate: 72.00 },
  { id: 'l-3', laborCode: 'LBR-PLM', laborName: 'Certified Plumber', hourlyRate: 78.00 },
  { id: 'l-4', laborCode: 'LBR-APP', laborName: 'Apprentice / Electrical Helper', hourlyRate: 42.00 },
  { id: 'l-5', laborCode: 'LBR-GEN', laborName: 'General Construction Worker', hourlyRate: 38.00 },
  { id: 'l-6', laborCode: 'LBR-PM',  laborName: 'Onsite Project Supervisor', hourlyRate: 95.00 },
];

export const INITIAL_LEADS = [
  { id: 'ld-1', leadId: 'LD-2026-001', customerName: 'Apex Commercial Properties', contactPerson: 'John Smith', phone: '+1 (555) 019-2834', projectType: 'Commercial Renovation', estimatedBudget: 180000, inquiryDate: '2026-01-10', leadStatus: 'Won' as const, estimator: 'David Miller' },
  { id: 'ld-2', leadId: 'LD-2026-002', customerName: 'Metro Logistics Hub', contactPerson: 'Elena Rostova', phone: '+1 (555) 014-9921', projectType: 'Equipment Installation', estimatedBudget: 240000, inquiryDate: '2026-01-18', leadStatus: 'Won' as const, estimator: 'Sarah Jenkins' },
  { id: 'ld-3', leadId: 'LD-2026-003', customerName: 'Highland Medical Center', contactPerson: 'Dr. Robert Chen', phone: '+1 (555) 018-3341', projectType: 'Medical Fitout', estimatedBudget: 310000, inquiryDate: '2026-02-01', leadStatus: 'Won' as const, estimator: 'David Miller' },
  { id: 'ld-4', leadId: 'LD-2026-004', customerName: 'Vanguard Retail Chain', contactPerson: 'Amanda Vance', phone: '+1 (555) 012-7712', projectType: 'Commercial Renovation', estimatedBudget: 95000, inquiryDate: '2026-02-12', leadStatus: 'Quoted' as const, estimator: 'Alex Wong' },
  { id: 'ld-5', leadId: 'LD-2026-005', customerName: 'Pinnacle Tech Campus', contactPerson: 'Marcus Brody', phone: '+1 (555) 016-4409', projectType: 'Data Center Cabling', estimatedBudget: 150000, inquiryDate: '2026-02-20', leadStatus: 'Following Up' as const, estimator: 'Sarah Jenkins' },
];

export const INITIAL_QUOTES = [
  // QT-2026-001 for LD-2026-001 (Apex)
  { id: 'qt-1', quoteId: 'QT-2026-001', leadId: 'LD-2026-001', materialCode: 'MAT-001', estMaterialQty: 60, laborCode: 'LBR-ELE', estLaborHours: 180 },
  { id: 'qt-2', quoteId: 'QT-2026-001', leadId: 'LD-2026-001', materialCode: 'MAT-003', estMaterialQty: 120, laborCode: 'LBR-APP', estLaborHours: 120 },
  { id: 'qt-3', quoteId: 'QT-2026-001', leadId: 'LD-2026-001', materialCode: 'MAT-006', estMaterialQty: 250, laborCode: 'LBR-CAR', estLaborHours: 200 },

  // QT-2026-002 for LD-2026-002 (Metro)
  { id: 'qt-4', quoteId: 'QT-2026-002', leadId: 'LD-2026-002', materialCode: 'MAT-004', estMaterialQty: 10, laborCode: 'LBR-ELE', estLaborHours: 320 },
  { id: 'qt-5', quoteId: 'QT-2026-002', leadId: 'LD-2026-002', materialCode: 'MAT-002', estMaterialQty: 400, laborCode: 'LBR-PM', estLaborHours: 150 },

  // QT-2026-003 for LD-2026-003 (Highland Medical)
  { id: 'qt-6', quoteId: 'QT-2026-003', leadId: 'LD-2026-003', materialCode: 'MAT-008', estMaterialQty: 300, laborCode: 'LBR-CAR', estLaborHours: 400 },
  { id: 'qt-7', quoteId: 'QT-2026-003', leadId: 'LD-2026-003', materialCode: 'MAT-005', estMaterialQty: 150, laborCode: 'LBR-ELE', estLaborHours: 250 },

  // QT-2026-004 for LD-2026-004 (Vanguard)
  { id: 'qt-8', quoteId: 'QT-2026-004', leadId: 'LD-2026-004', materialCode: 'MAT-003', estMaterialQty: 80, laborCode: 'LBR-ELE', estLaborHours: 100 },
];

export const INITIAL_APPROVED_JOBS = [
  { id: 'job-1', jobId: 'JOB-2026-001', quoteId: 'QT-2026-001', contractDate: '2026-01-25', contractAmount: 185000, plannedStartDate: '2026-02-01', plannedEndDate: '2026-04-15', projectManager: 'Sarah Jenkins', jobStatus: 'In Progress' as const },
  { id: 'job-2', jobId: 'JOB-2026-002', quoteId: 'QT-2026-002', contractDate: '2026-02-05', contractAmount: 245000, plannedStartDate: '2026-02-15', plannedEndDate: '2026-05-30', projectManager: 'Michael Chang', jobStatus: 'In Progress' as const },
  { id: 'job-3', jobId: 'JOB-2026-003', quoteId: 'QT-2026-003', contractDate: '2026-02-18', contractAmount: 320000, plannedStartDate: '2026-03-01', plannedEndDate: '2026-07-15', projectManager: 'Sarah Jenkins', jobStatus: 'In Progress' as const },
];

export const INITIAL_SCHEDULES = [
  // JOB-2026-001
  { id: 'sch-1', recordId: 'SCH-001', jobId: 'JOB-2026-001', milestoneName: 'Site Preparation & Demolition', plannedStart: '2026-02-01', plannedEnd: '2026-02-14', completionPct: 1.0 },
  { id: 'sch-2', recordId: 'SCH-002', jobId: 'JOB-2026-001', milestoneName: 'Electrical Rough-in & Conduit', plannedStart: '2026-02-15', plannedEnd: '2026-03-10', completionPct: 0.90 },
  { id: 'sch-3', recordId: 'SCH-003', jobId: 'JOB-2026-001', milestoneName: 'Drywall Framing & Insulation', plannedStart: '2026-03-01', plannedEnd: '2026-03-25', completionPct: 0.60 },

  // JOB-2026-002
  { id: 'sch-4', recordId: 'SCH-004', jobId: 'JOB-2026-002', milestoneName: 'Main Power Distribution Setup', plannedStart: '2026-02-15', plannedEnd: '2026-03-15', completionPct: 0.80 },
  { id: 'sch-5', recordId: 'SCH-005', jobId: 'JOB-2026-002', milestoneName: 'Heavy Equipment Power Hooks', plannedStart: '2026-03-16', plannedEnd: '2026-04-20', completionPct: 0.25 },

  // JOB-2026-003
  { id: 'sch-6', recordId: 'SCH-006', jobId: 'JOB-2026-003', milestoneName: 'Cleanroom Medical Wiring', plannedStart: '2026-03-01', plannedEnd: '2026-04-10', completionPct: 0.40 },
];

export const INITIAL_LABOR_LOGS = [
  // JOB-2026-001 logs
  { id: 'll-1', logId: 'LOG-2026-0001', jobId: 'JOB-2026-001', workDate: '2026-02-05', workerName: 'Dave Miller', laborCode: 'LBR-ELE', actualHours: 40.0 },
  { id: 'll-2', logId: 'LOG-2026-0002', jobId: 'JOB-2026-001', workDate: '2026-02-12', workerName: 'Mike Johnson', laborCode: 'LBR-APP', actualHours: 50.0 },
  { id: 'll-3', logId: 'LOG-2026-0003', jobId: 'JOB-2026-001', workDate: '2026-02-20', workerName: 'Tom Hanks', laborCode: 'LBR-CAR', actualHours: 120.0 },
  { id: 'll-4', logId: 'LOG-2026-0004', jobId: 'JOB-2026-001', workDate: '2026-02-28', workerName: 'Dave Miller', laborCode: 'LBR-ELE', actualHours: 85.0 },

  // JOB-2026-002 logs (intentionally triggering slight overrun for demo)
  { id: 'll-5', logId: 'LOG-2026-0005', jobId: 'JOB-2026-002', workDate: '2026-02-18', workerName: 'Steve Rogers', laborCode: 'LBR-ELE', actualHours: 210.0 },
  { id: 'll-6', logId: 'LOG-2026-0006', jobId: 'JOB-2026-002', workDate: '2026-02-25', workerName: 'Michael Chang', laborCode: 'LBR-PM', actualHours: 110.0 },

  // JOB-2026-003 logs
  { id: 'll-7', logId: 'LOG-2026-0007', jobId: 'JOB-2026-003', workDate: '2026-03-05', workerName: 'Tom Hanks', laborCode: 'LBR-CAR', actualHours: 160.0 },
];

export const INITIAL_MATERIAL_USAGES = [
  // JOB-2026-001
  { id: 'mu-1', usageId: 'MAT-USE-001', jobId: 'JOB-2026-001', issueDate: '2026-02-08', materialCode: 'MAT-001', quantity: 55.0 },
  { id: 'mu-2', usageId: 'MAT-USE-002', jobId: 'JOB-2026-001', issueDate: '2026-02-14', materialCode: 'MAT-003', quantity: 110.0 },
  { id: 'mu-3', usageId: 'MAT-USE-003', jobId: 'JOB-2026-001', issueDate: '2026-02-22', materialCode: 'MAT-006', quantity: 240.0 },

  // JOB-2026-002
  { id: 'mu-4', usageId: 'MAT-USE-004', jobId: 'JOB-2026-002', issueDate: '2026-02-20', materialCode: 'MAT-004', quantity: 12.0 },
  { id: 'mu-5', usageId: 'MAT-USE-005', jobId: 'JOB-2026-002', issueDate: '2026-02-26', materialCode: 'MAT-002', quantity: 450.0 },

  // JOB-2026-003
  { id: 'mu-6', usageId: 'MAT-USE-006', jobId: 'JOB-2026-003', issueDate: '2026-03-08', materialCode: 'MAT-008', quantity: 280.0 },
];

export const INITIAL_APP_DATA: AppData = {
  settings: INITIAL_SETTINGS,
  materials: INITIAL_MATERIALS,
  laborRates: INITIAL_LABOR_RATES,
  leads: INITIAL_LEADS,
  quotes: INITIAL_QUOTES,
  approvedJobs: INITIAL_APPROVED_JOBS,
  schedules: INITIAL_SCHEDULES,
  laborLogs: INITIAL_LABOR_LOGS,
  materialUsages: INITIAL_MATERIAL_USAGES,
  lastSavedAt: new Date().toISOString(),
};

export const TABS: TabConfig[] = [
  { key: 'settings', label: '1. Settings', sheetNumber: 1, category: 'Master Data', description: 'Global parameters control center (Tax, Overhead, Target Margin)' },
  { key: 'material_db', label: '2. Material DB', sheetNumber: 2, category: 'Master Data', description: 'Standard material master data and unit purchasing costs' },
  { key: 'labor_rates', label: '3. Labor Rates', sheetNumber: 3, category: 'Master Data', description: 'Standard labor trade rates and hourly pricing tiers' },
  { key: 'lead_tracker', label: '4. Lead Tracker', sheetNumber: 4, category: 'Operations & Execution', description: 'Sales opportunities pipeline and profit estimation' },
  { key: 'quote_builder', label: '5. Quote Builder', sheetNumber: 5, category: 'Operations & Execution', description: 'Auto quotation engine with material & labor calculations' },
  { key: 'approved_jobs', label: '6. Approved Jobs', sheetNumber: 6, category: 'Operations & Execution', description: 'Contracted jobs master registry with Job ID key' },
  { key: 'schedule', label: '7. Schedule', sheetNumber: 7, category: 'Operations & Execution', description: 'Milestone tracking and delay alert management' },
  { key: 'labor_log', label: '8. Labor Log', sheetNumber: 8, category: 'Operations & Execution', description: 'Daily onsite labor hours log and actual costs' },
  { key: 'material_usage', label: '9. Material Usage', sheetNumber: 9, category: 'Operations & Execution', description: 'Onsite material consumption and cost tracking' },
  { key: 'job_cost_engine', label: '10. Job Cost Engine', sheetNumber: 10, category: 'Engine & Analytics', description: 'Automated cost aggregation engine and overrun alerts' },
  { key: 'profit_dashboard', label: '11. Profit Dashboard', sheetNumber: 11, category: 'Engine & Analytics', description: 'Executive KPIs, estimator performance & profitability' },
  { key: 'customer_history', label: '12. Customer History', sheetNumber: 12, category: 'Engine & Analytics', description: 'Customer LTV, total profit contribution & rating' },
];
