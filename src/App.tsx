/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  AppData,
  TabKey,
  MaterialItem,
  LaborRateItem,
  LeadItem,
  QuoteItem,
  ApprovedJobItem,
  ScheduleItem,
  LaborLogItem,
  MaterialUsageItem,
} from './types';
import { loadAppData, saveAppData, exportBackupJSON } from './storageUtils';
import { INITIAL_APP_DATA } from './initialData';
import { HeaderNav } from './components/HeaderNav';
import { Footer } from './components/Footer';
import { BulkCsvModal } from './components/BulkCsvModal';
import { ResetModal } from './components/ResetModal';

// 12 Sheet Views
import { SettingsView } from './views/SettingsView';
import { MaterialDbView } from './views/MaterialDbView';
import { LaborRatesView } from './views/LaborRatesView';
import { LeadTrackerView } from './views/LeadTrackerView';
import { QuoteBuilderView } from './views/QuoteBuilderView';
import { ApprovedJobsView } from './views/ApprovedJobsView';
import { ScheduleView } from './views/ScheduleView';
import { LaborLogView } from './views/LaborLogView';
import { MaterialUsageView } from './views/MaterialUsageView';
import { JobCostEngineView } from './views/JobCostEngineView';
import { ProfitDashboardView } from './views/ProfitDashboardView';
import { CustomerHistoryView } from './views/CustomerHistoryView';

export default function App() {
  const [appData, setAppData] = useState<AppData>(loadAppData);
  const [activeTab, setActiveTab] = useState<TabKey>('job_cost_engine');

  // Modals state
  const [isBulkImportOpen, setIsBulkImportOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  // Backup JSON file upload ref
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Auto-save whenever appData changes
  const updateData = (updater: (prev: AppData) => AppData) => {
    setAppData((prev) => {
      const next = updater(prev);
      return saveAppData(next);
    });
  };

  // Handlers for individual sheet updates
  const handleUpdateSettings = (newSettings: AppData['settings']) => {
    updateData((prev) => ({ ...prev, settings: newSettings }));
  };

  const handleUpdateMaterials = (newMaterials: MaterialItem[]) => {
    updateData((prev) => ({ ...prev, materials: newMaterials }));
  };

  const handleUpdateLaborRates = (newLaborRates: LaborRateItem[]) => {
    updateData((prev) => ({ ...prev, laborRates: newLaborRates }));
  };

  const handleUpdateLeads = (newLeads: LeadItem[]) => {
    updateData((prev) => ({ ...prev, leads: newLeads }));
  };

  const handleUpdateQuotes = (newQuotes: QuoteItem[]) => {
    updateData((prev) => ({ ...prev, quotes: newQuotes }));
  };

  const handleUpdateApprovedJobs = (newJobs: ApprovedJobItem[]) => {
    updateData((prev) => ({ ...prev, approvedJobs: newJobs }));
  };

  const handleUpdateSchedules = (newSchedules: ScheduleItem[]) => {
    updateData((prev) => ({ ...prev, schedules: newSchedules }));
  };

  const handleUpdateLaborLogs = (newLogs: LaborLogItem[]) => {
    updateData((prev) => ({ ...prev, laborLogs: newLogs }));
  };

  const handleUpdateMaterialUsages = (newUsages: MaterialUsageItem[]) => {
    updateData((prev) => ({ ...prev, materialUsages: newUsages }));
  };

  // Backup Handlers
  const handleExportBackup = () => {
    exportBackupJSON(appData);
  };

  const handleTriggerImportBackup = () => {
    fileInputRef.current?.click();
  };

  const handleImportBackupFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed && parsed.settings && parsed.materials) {
          setAppData(saveAppData(parsed));
          alert('Backup restored successfully!');
        } else {
          alert('Invalid backup file format.');
        }
      } catch (err) {
        alert('Failed to parse backup JSON file.');
      }
    };
    reader.readAsText(file);
    if (e.target) e.target.value = '';
  };

  const handleConfirmReset = () => {
    setAppData(saveAppData(INITIAL_APP_DATA));
  };

  // Bulk CSV Import Handler
  const handleBulkCsvImport = (
    targetTable: string,
    parsedRows: Record<string, string>[],
    replace: boolean
  ) => {
    updateData((prev) => {
      const nextData = { ...prev };

      if (targetTable === 'materials') {
        const newItems: MaterialItem[] = parsedRows.map((r, i) => ({
          id: `m-csv-${Date.now()}-${i}`,
          materialCode: r.Material_Code || r.materialCode || `MAT-CSV-${i + 1}`,
          materialName: r.Material_Name || r.materialName || 'Imported Material',
          specification: r.Specification || r.specification || 'Standard Spec',
          unit: r.Unit || r.unit || 'Piece',
          unitCost: parseFloat(r.Unit_Cost || r.unitCost) || 10,
        }));
        nextData.materials = replace ? newItems : [...prev.materials, ...newItems];
      } else if (targetTable === 'laborRates') {
        const newItems: LaborRateItem[] = parsedRows.map((r, i) => ({
          id: `l-csv-${Date.now()}-${i}`,
          laborCode: r.Labor_Code || r.laborCode || `LBR-CSV-${i + 1}`,
          laborName: r.Labor_Name || r.laborName || 'Imported Trade',
          hourlyRate: parseFloat(r.Hourly_Rate || r.hourlyRate) || 50,
        }));
        nextData.laborRates = replace ? newItems : [...prev.laborRates, ...newItems];
      } else if (targetTable === 'leads') {
        const newItems: LeadItem[] = parsedRows.map((r, i) => ({
          id: `ld-csv-${Date.now()}-${i}`,
          leadId: r.Lead_ID || r.leadId || `LD-CSV-${i + 1}`,
          customerName: r.Customer_Name || r.customerName || 'CSV Client',
          contactPerson: r.Contact_Person || r.contactPerson || 'Contact',
          phone: r.Phone || r.phone || '+1 555-0000',
          projectType: r.Project_Type || r.projectType || 'Renovation',
          estimatedBudget: parseFloat(r.Estimated_Budget || r.estimatedBudget) || 100000,
          inquiryDate: r.Inquiry_Date || r.inquiryDate || new Date().toISOString().slice(0, 10),
          leadStatus: (r.Lead_Status || r.leadStatus || 'Following Up') as any,
          estimator: r.Estimator || r.estimator || 'David Miller',
        }));
        nextData.leads = replace ? newItems : [...prev.leads, ...newItems];
      } else if (targetTable === 'quotes') {
        const newItems: QuoteItem[] = parsedRows.map((r, i) => ({
          id: `qt-csv-${Date.now()}-${i}`,
          quoteId: r.Quote_ID || r.quoteId || 'QT-2026-001',
          leadId: r.Lead_ID || r.leadId || 'LD-2026-001',
          materialCode: r.Material_Code || r.materialCode || 'MAT-001',
          estMaterialQty: parseFloat(r.Est_Material_Qty || r.estMaterialQty) || 10,
          laborCode: r.Labor_Code || r.laborCode || 'LBR-ELE',
          estLaborHours: parseFloat(r.Est_Labor_Hours || r.estLaborHours) || 10,
        }));
        nextData.quotes = replace ? newItems : [...prev.quotes, ...newItems];
      } else if (targetTable === 'approvedJobs') {
        const newItems: ApprovedJobItem[] = parsedRows.map((r, i) => ({
          id: `job-csv-${Date.now()}-${i}`,
          jobId: r.Job_ID || r.jobId || `JOB-CSV-${i + 1}`,
          quoteId: r.Quote_ID || r.quoteId || 'QT-2026-001',
          contractDate: r.Contract_Date || r.contractDate || new Date().toISOString().slice(0, 10),
          contractAmount: parseFloat(r.Contract_Amount || r.contractAmount) || 150000,
          plannedStartDate: r.Planned_Start_Date || r.plannedStartDate || new Date().toISOString().slice(0, 10),
          plannedEndDate: r.Planned_End_Date || r.plannedEndDate || '2026-06-30',
          projectManager: r.Project_Manager || r.projectManager || 'Sarah Jenkins',
          jobStatus: (r.Job_Status || r.jobStatus || 'In Progress') as any,
        }));
        nextData.approvedJobs = replace ? newItems : [...prev.approvedJobs, ...newItems];
      } else if (targetTable === 'schedules') {
        const newItems: ScheduleItem[] = parsedRows.map((r, i) => ({
          id: `sch-csv-${Date.now()}-${i}`,
          recordId: r.Record_ID || r.recordId || `SCH-CSV-${i + 1}`,
          jobId: r.Job_ID || r.jobId || 'JOB-2026-001',
          milestoneName: r.Milestone_Name || r.milestoneName || 'Milestone Phase',
          plannedStart: r.Planned_Start || r.plannedStart || new Date().toISOString().slice(0, 10),
          plannedEnd: r.Planned_End || r.plannedEnd || '2026-05-30',
          completionPct: parseFloat(r.Completion_Pct || r.completionPct) || 0.5,
        }));
        nextData.schedules = replace ? newItems : [...prev.schedules, ...newItems];
      } else if (targetTable === 'laborLogs') {
        const newItems: LaborLogItem[] = parsedRows.map((r, i) => ({
          id: `ll-csv-${Date.now()}-${i}`,
          logId: r.Log_ID || r.logId || `LOG-CSV-${i + 1}`,
          jobId: r.Job_ID || r.jobId || 'JOB-2026-001',
          workDate: r.Work_Date || r.workDate || new Date().toISOString().slice(0, 10),
          workerName: r.Worker_Name || r.workerName || 'Worker',
          laborCode: r.Labor_Code || r.laborCode || 'LBR-ELE',
          actualHours: parseFloat(r.Actual_Hours || r.actualHours) || 8,
        }));
        nextData.laborLogs = replace ? newItems : [...prev.laborLogs, ...newItems];
      } else if (targetTable === 'materialUsages') {
        const newItems: MaterialUsageItem[] = parsedRows.map((r, i) => ({
          id: `mu-csv-${Date.now()}-${i}`,
          usageId: r.Usage_ID || r.usageId || `MAT-USE-CSV-${i + 1}`,
          jobId: r.Job_ID || r.jobId || 'JOB-2026-001',
          issueDate: r.Issue_Date || r.issueDate || new Date().toISOString().slice(0, 10),
          materialCode: r.Material_Code || r.materialCode || 'MAT-001',
          quantity: parseFloat(r.Quantity || r.quantity) || 10,
        }));
        nextData.materialUsages = replace ? newItems : [...prev.materialUsages, ...newItems];
      }

      return nextData;
    });
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col font-body antialiased text-[var(--color-body-text)]">
      {/* Hidden File Input for JSON Restore */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImportBackupFile}
        accept=".json"
        className="hidden"
      />

      {/* Header Navigation with 12 Tabs */}
      <HeaderNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lastSavedAt={appData.lastSavedAt}
        onExportBackup={handleExportBackup}
        onImportBackup={handleTriggerImportBackup}
        onOpenBulkImport={() => setIsBulkImportOpen(true)}
        onOpenResetModal={() => setIsResetModalOpen(true)}
      />

      {/* Main View Area max-width 1400px centered */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-6 pt-8 pb-12">
        {activeTab === 'settings' && (
          <SettingsView
            settings={appData.settings}
            onUpdateSettings={handleUpdateSettings}
          />
        )}

        {activeTab === 'material_db' && (
          <MaterialDbView
            materials={appData.materials}
            settings={appData.settings}
            onUpdateMaterials={handleUpdateMaterials}
          />
        )}

        {activeTab === 'labor_rates' && (
          <LaborRatesView
            laborRates={appData.laborRates}
            settings={appData.settings}
            onUpdateLaborRates={handleUpdateLaborRates}
          />
        )}

        {activeTab === 'lead_tracker' && (
          <LeadTrackerView
            leads={appData.leads}
            settings={appData.settings}
            onUpdateLeads={handleUpdateLeads}
          />
        )}

        {activeTab === 'quote_builder' && (
          <QuoteBuilderView
            data={appData}
            onUpdateQuotes={handleUpdateQuotes}
          />
        )}

        {activeTab === 'approved_jobs' && (
          <ApprovedJobsView
            data={appData}
            onUpdateApprovedJobs={handleUpdateApprovedJobs}
          />
        )}

        {activeTab === 'schedule' && (
          <ScheduleView
            data={appData}
            onUpdateSchedules={handleUpdateSchedules}
          />
        )}

        {activeTab === 'labor_log' && (
          <LaborLogView
            data={appData}
            onUpdateLaborLogs={handleUpdateLaborLogs}
          />
        )}

        {activeTab === 'material_usage' && (
          <MaterialUsageView
            data={appData}
            onUpdateMaterialUsages={handleUpdateMaterialUsages}
          />
        )}

        {activeTab === 'job_cost_engine' && (
          <JobCostEngineView data={appData} />
        )}

        {activeTab === 'profit_dashboard' && (
          <ProfitDashboardView data={appData} />
        )}

        {activeTab === 'customer_history' && (
          <CustomerHistoryView data={appData} />
        )}
      </main>

      {/* Footer Notice */}
      <Footer />

      {/* Bulk CSV Modal */}
      <BulkCsvModal
        isOpen={isBulkImportOpen}
        onClose={() => setIsBulkImportOpen(false)}
        onImport={handleBulkCsvImport}
      />

      {/* Reset Confirmation Modal */}
      <ResetModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onConfirmReset={handleConfirmReset}
      />
    </div>
  );
}
