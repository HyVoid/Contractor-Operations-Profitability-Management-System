import {
  AppData,
  ApprovedJobItem,
  LaborLogItem,
  LaborRateItem,
  LeadItem,
  MaterialItem,
  MaterialUsageItem,
  QuoteItem,
  ScheduleItem,
} from './types';

// Formatting Utilities
export function formatCurrency(amount: number, symbol: string = '$'): string {
  if (isNaN(amount) || amount === null || amount === undefined) return `${symbol}0.00`;
  const formatted = Math.abs(amount).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return amount < 0 ? `-${symbol}${formatted}` : `${symbol}${formatted}`;
}

export function formatPercent(val: number): string {
  if (isNaN(val) || val === null || val === undefined) return '0.00%';
  return `${(val * 100).toFixed(2)}%`;
}

export function formatNumber(val: number, decimals: number = 2): string {
  if (isNaN(val) || val === null || val === undefined) return '0.00';
  return val.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

// Date Difference Helper
export function getDaysDiffFromToday(targetDateStr: string): number {
  if (!targetDateStr) return 0;
  const target = new Date(targetDateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  const diffTime = today.getTime() - target.getTime();
  return Math.floor(diffTime / (1000 * 3600 * 24));
}

// -------------------------------------------------------------
// Calculated Rows for Each Sheet
// -------------------------------------------------------------

// Sheet 2: Material DB Status Flag
export function getMaterialStatus(item: MaterialItem): string {
  if (!item.materialCode) return '';
  if (item.unitCost <= 0) return '⚠️ Price Error';
  return 'Normal';
}

// Sheet 3: Labor Rate Level
export function getLaborLevel(item: LaborRateItem): string {
  if (!item.laborCode) return '';
  if (item.hourlyRate >= 80) return 'Senior/Expert';
  if (item.hourlyRate >= 50) return 'Standard Technical';
  return 'General Labor';
}

// Sheet 4: Lead Tracker Calculated Fields
export function getLeadDaysInPipeline(lead: LeadItem): string | number {
  if (!lead.inquiryDate) return '';
  if (lead.leadStatus === 'Won' || lead.leadStatus === 'Lost') {
    return 'Closed';
  }
  const days = getDaysDiffFromToday(lead.inquiryDate);
  return days < 0 ? 0 : days;
}

export function getLeadPotentialProfit(lead: LeadItem, targetMargin: number): number {
  return (lead.estimatedBudget || 0) * targetMargin;
}

// Sheet 5: Quote Builder Calculations per Item
export interface CalculatedQuoteItem {
  quote: QuoteItem;
  materialUnitCost: number;
  estMaterialCost: number;
  laborHourlyRate: number;
  estLaborCost: number;
  directCostSubtotal: number;
  overheadAllocation: number;
  estTotalCost: number;
  suggestedQuoteAmount: number;
  projectedMargin: number;
}

export function calculateQuoteItem(
  quote: QuoteItem,
  materials: MaterialItem[],
  laborRates: LaborRateItem[],
  settings: AppData['settings']
): CalculatedQuoteItem {
  const mat = materials.find((m) => m.materialCode === quote.materialCode);
  const lab = laborRates.find((l) => l.laborCode === quote.laborCode);

  const materialUnitCost = mat ? mat.unitCost : 0;
  const estMaterialCost = (quote.estMaterialQty || 0) * materialUnitCost;

  const laborHourlyRate = lab ? lab.hourlyRate : 0;
  const estLaborCost = (quote.estLaborHours || 0) * laborHourlyRate;

  const directCostSubtotal = estMaterialCost + estLaborCost;
  const overheadAllocation = directCostSubtotal * settings.overheadRate;
  const estTotalCost = directCostSubtotal + overheadAllocation;

  // Suggested Quote Amount = [Total Cost / (1 - Target Margin)] * (1 + Tax Rate)
  const suggestedQuoteAmount =
    settings.targetMargin < 1
      ? (estTotalCost / (1 - settings.targetMargin)) * (1 + settings.taxRate)
      : 0;

  // Projected Margin = [ (Suggested Quote Amount / (1 + Tax Rate)) - Total Cost ] / (Suggested Quote Amount / (1 + Tax Rate))
  const revenueExTax = suggestedQuoteAmount / (1 + settings.taxRate);
  const projectedMargin = revenueExTax > 0 ? (revenueExTax - estTotalCost) / revenueExTax : 0;

  return {
    quote,
    materialUnitCost,
    estMaterialCost,
    laborHourlyRate,
    estLaborCost,
    directCostSubtotal,
    overheadAllocation,
    estTotalCost,
    suggestedQuoteAmount,
    projectedMargin,
  };
}

// Quote Totals grouped by quoteId
export interface QuoteSummary {
  quoteId: string;
  leadId: string;
  customerName: string;
  itemCount: number;
  estMaterialCost: number;
  estLaborCost: number;
  directCostSubtotal: number;
  overheadAllocation: number;
  estTotalCost: number;
  suggestedQuoteAmount: number;
  projectedMargin: number;
}

export function getQuoteSummaries(data: AppData): QuoteSummary[] {
  const quoteMap = new Map<string, QuoteItem[]>();
  data.quotes.forEach((q) => {
    if (!quoteMap.has(q.quoteId)) {
      quoteMap.set(q.quoteId, []);
    }
    quoteMap.get(q.quoteId)!.push(q);
  });

  const result: QuoteSummary[] = [];

  quoteMap.forEach((items, quoteId) => {
    const leadId = items[0]?.leadId || '';
    const lead = data.leads.find((l) => l.leadId === leadId);
    const customerName = lead ? lead.customerName : 'Unlinked';

    let totalMat = 0;
    let totalLab = 0;
    let totalDirect = 0;
    let totalOverhead = 0;
    let totalCost = 0;
    let totalSuggestedQuote = 0;

    items.forEach((item) => {
      const calc = calculateQuoteItem(item, data.materials, data.laborRates, data.settings);
      totalMat += calc.estMaterialCost;
      totalLab += calc.estLaborCost;
      totalDirect += calc.directCostSubtotal;
      totalOverhead += calc.overheadAllocation;
      totalCost += calc.estTotalCost;
      totalSuggestedQuote += calc.suggestedQuoteAmount;
    });

    const revenueExTax = totalSuggestedQuote / (1 + data.settings.taxRate);
    const projectedMargin = revenueExTax > 0 ? (revenueExTax - totalCost) / revenueExTax : 0;

    result.push({
      quoteId,
      leadId,
      customerName,
      itemCount: items.length,
      estMaterialCost: totalMat,
      estLaborCost: totalLab,
      directCostSubtotal: totalDirect,
      overheadAllocation: totalOverhead,
      estTotalCost: totalCost,
      suggestedQuoteAmount: totalSuggestedQuote,
      projectedMargin,
    });
  });

  return result;
}

// Sheet 6: Approved Jobs Calculated Row
export interface CalculatedApprovedJob {
  job: ApprovedJobItem;
  customerName: string;
  estTotalCost: number;
  contractRevenueExTax: number;
  initialProjectedProfit: number;
  initialProjectedMargin: number;
}

export function calculateApprovedJob(
  job: ApprovedJobItem,
  data: AppData
): CalculatedApprovedJob {
  // Find customer name by quoteId -> leadId -> Lead_Tracker
  const quoteItems = data.quotes.filter((q) => q.quoteId === job.quoteId);
  const leadId = quoteItems[0]?.leadId || '';
  const lead = data.leads.find((l) => l.leadId === leadId);
  const customerName = lead ? lead.customerName : 'N/A';

  // Calculate estTotalCost by summing all items in quote
  let estTotalCost = 0;
  quoteItems.forEach((q) => {
    const calc = calculateQuoteItem(q, data.materials, data.laborRates, data.settings);
    estTotalCost += calc.estTotalCost;
  });

  const contractRevenueExTax = (job.contractAmount || 0) / (1 + data.settings.taxRate);
  const initialProjectedProfit = contractRevenueExTax - estTotalCost;
  const initialProjectedMargin =
    contractRevenueExTax > 0 ? initialProjectedProfit / contractRevenueExTax : 0;

  return {
    job,
    customerName,
    estTotalCost,
    contractRevenueExTax,
    initialProjectedProfit,
    initialProjectedMargin,
  };
}

// Sheet 7: Schedule Calculations
export interface CalculatedSchedule {
  schedule: ScheduleItem;
  daysOverdue: number;
  taskStatusAlert: string;
}

export function calculateSchedule(schedule: ScheduleItem): CalculatedSchedule {
  let daysOverdue = 0;
  if (schedule.completionPct < 1 && schedule.plannedEnd) {
    const diff = getDaysDiffFromToday(schedule.plannedEnd);
    daysOverdue = diff > 0 ? diff : 0;
  }

  let taskStatusAlert = '🔵 On Schedule';
  if (schedule.completionPct >= 1) {
    taskStatusAlert = '✅ Completed';
  } else if (daysOverdue > 0) {
    taskStatusAlert = `🚨 Delayed by ${daysOverdue} Days`;
  }

  return {
    schedule,
    daysOverdue,
    taskStatusAlert,
  };
}

// Sheet 8: Labor Log Calculated Row
export interface CalculatedLaborLog {
  log: LaborLogItem;
  hourlyRate: number;
  actualLaborCost: number;
}

export function calculateLaborLog(
  log: LaborLogItem,
  laborRates: LaborRateItem[]
): CalculatedLaborLog {
  const rateObj = laborRates.find((r) => r.laborCode === log.laborCode);
  const hourlyRate = rateObj ? rateObj.hourlyRate : 0;
  const actualLaborCost = (log.actualHours || 0) * hourlyRate;

  return {
    log,
    hourlyRate,
    actualLaborCost,
  };
}

// Sheet 9: Material Usage Calculated Row
export interface CalculatedMaterialUsage {
  usage: MaterialUsageItem;
  unitCost: number;
  actualMaterialCost: number;
}

export function calculateMaterialUsage(
  usage: MaterialUsageItem,
  materials: MaterialItem[]
): CalculatedMaterialUsage {
  const matObj = materials.find((m) => m.materialCode === usage.materialCode);
  const unitCost = matObj ? matObj.unitCost : 0;
  const actualMaterialCost = (usage.quantity || 0) * unitCost;

  return {
    usage,
    unitCost,
    actualMaterialCost,
  };
}

// Sheet 10: Job Cost Engine Engine Row
export interface JobCostEngineRow {
  jobId: string;
  customerName: string;
  jobStatus: string;
  contractRevenue: number;        // Contract Amount / (1 + Tax Rate)
  estMaterialCost: number;
  actualMaterialCost: number;
  estLaborCost: number;
  actualLaborCost: number;
  overheadAllocation: number;     // (Actual Mat + Actual Lab) * Overhead Rate
  actualTotalCost: number;        // Actual Mat + Actual Lab + Overhead
  actualProfit: number;           // Contract Revenue - Actual Total Cost
  actualMargin: number;           // Actual Profit / Contract Revenue
  costVariance: number;           // Actual Total Cost - Est Total Cost
  costOverrunAlert: string;
  isOverrun: boolean;
}

export function getJobCostEngineData(data: AppData): JobCostEngineRow[] {
  return data.approvedJobs.map((job) => {
    const calcJob = calculateApprovedJob(job, data);

    // Actual Material Cost from Material_Usage
    let actualMaterialCost = 0;
    data.materialUsages
      .filter((u) => u.jobId === job.jobId)
      .forEach((u) => {
        const c = calculateMaterialUsage(u, data.materials);
        actualMaterialCost += c.actualMaterialCost;
      });

    // Actual Labor Cost from Labor_Log
    let actualLaborCost = 0;
    data.laborLogs
      .filter((l) => l.jobId === job.jobId)
      .forEach((l) => {
        const c = calculateLaborLog(l, data.laborRates);
        actualLaborCost += c.actualLaborCost;
      });

    // Estimate Material & Labor Costs from Quote
    let estMaterialCost = 0;
    let estLaborCost = 0;
    const quoteItems = data.quotes.filter((q) => q.quoteId === job.quoteId);
    quoteItems.forEach((q) => {
      const calcQ = calculateQuoteItem(q, data.materials, data.laborRates, data.settings);
      estMaterialCost += calcQ.estMaterialCost;
      estLaborCost += calcQ.estLaborCost;
    });

    const contractRevenue = calcJob.contractRevenueExTax;
    const overheadAllocation = (actualMaterialCost + actualLaborCost) * data.settings.overheadRate;
    const actualTotalCost = actualMaterialCost + actualLaborCost + overheadAllocation;
    const actualProfit = contractRevenue - actualTotalCost;
    const actualMargin = contractRevenue > 0 ? actualProfit / contractRevenue : 0;
    const costVariance = actualTotalCost - calcJob.estTotalCost;

    const overrunRatio =
      calcJob.estTotalCost > 0
        ? (actualTotalCost - calcJob.estTotalCost) / calcJob.estTotalCost
        : 0;

    const isOverrun = overrunRatio > data.settings.overrunThreshold;
    const costOverrunAlert = isOverrun ? '🚨 Severe Cost Overrun' : '✅ Cost Control Normal';

    return {
      jobId: job.jobId,
      customerName: calcJob.customerName,
      jobStatus: job.jobStatus,
      contractRevenue,
      estMaterialCost,
      actualMaterialCost,
      estLaborCost,
      actualLaborCost,
      overheadAllocation,
      actualTotalCost,
      actualProfit,
      actualMargin,
      costVariance,
      costOverrunAlert,
      isOverrun,
    };
  });
}

// Sheet 11: Profit Dashboard Metrics
export interface EstimatorPerformance {
  estimator: string;
  totalLeads: number;
  wonLeads: number;
  winRate: number;
  totalQuotedRevenue: number;
  avgMargin: number;
}

export interface ProfitDashboardMetrics {
  totalJobsCount: number;
  totalRevenueExTax: number;
  totalActualCost: number;
  totalProfit: number;
  overallGrossMargin: number;
  overrunJobsCount: number;
  estimatorPerformance: EstimatorPerformance[];
  projectTypeBreakdown: { projectType: string; count: number; totalRevenue: number; totalProfit: number; avgMargin: number }[];
}

export function getProfitDashboardMetrics(data: AppData): ProfitDashboardMetrics {
  const engineRows = getJobCostEngineData(data);

  const totalJobsCount = engineRows.length;
  let totalRevenueExTax = 0;
  let totalActualCost = 0;
  let totalProfit = 0;
  let overrunJobsCount = 0;

  engineRows.forEach((r) => {
    totalRevenueExTax += r.contractRevenue;
    totalActualCost += r.actualTotalCost;
    totalProfit += r.actualProfit;
    if (r.isOverrun) overrunJobsCount++;
  });

  const overallGrossMargin = totalRevenueExTax > 0 ? totalProfit / totalRevenueExTax : 0;

  // Estimator Performance Table
  const estimatorMap = new Map<string, { totalLeads: number; wonLeads: number; quotedRev: number }>();

  data.leads.forEach((l) => {
    if (!l.estimator) return;
    if (!estimatorMap.has(l.estimator)) {
      estimatorMap.set(l.estimator, { totalLeads: 0, wonLeads: 0, quotedRev: 0 });
    }
    const stat = estimatorMap.get(l.estimator)!;
    stat.totalLeads++;
    if (l.leadStatus === 'Won') {
      stat.wonLeads++;
      stat.quotedRev += l.estimatedBudget || 0;
    }
  });

  const estimatorPerformance: EstimatorPerformance[] = [];
  estimatorMap.forEach((val, estimator) => {
    const winRate = val.totalLeads > 0 ? val.wonLeads / val.totalLeads : 0;
    estimatorPerformance.push({
      estimator,
      totalLeads: val.totalLeads,
      wonLeads: val.wonLeads,
      winRate,
      totalQuotedRevenue: val.quotedRev,
      avgMargin: data.settings.targetMargin,
    });
  });

  // Project Type Breakdown
  const typeMap = new Map<string, { count: number; totalRevenue: number; totalProfit: number }>();

  engineRows.forEach((row) => {
    // Find project type from lead
    const job = data.approvedJobs.find((j) => j.jobId === row.jobId);
    const quote = data.quotes.find((q) => q.quoteId === job?.quoteId);
    const lead = data.leads.find((l) => l.leadId === quote?.leadId);
    const pType = lead ? lead.projectType : 'Other';

    if (!typeMap.has(pType)) {
      typeMap.set(pType, { count: 0, totalRevenue: 0, totalProfit: 0 });
    }
    const entry = typeMap.get(pType)!;
    entry.count++;
    entry.totalRevenue += row.contractRevenue;
    entry.totalProfit += row.actualProfit;
  });

  const projectTypeBreakdown = Array.from(typeMap.entries()).map(([projectType, val]) => ({
    projectType,
    count: val.count,
    totalRevenue: val.totalRevenue,
    totalProfit: val.totalProfit,
    avgMargin: val.totalRevenue > 0 ? val.totalProfit / val.totalRevenue : 0,
  }));

  return {
    totalJobsCount,
    totalRevenueExTax,
    totalActualCost,
    totalProfit,
    overallGrossMargin,
    overrunJobsCount,
    estimatorPerformance,
    projectTypeBreakdown,
  };
}

// Sheet 12: Customer History Data
export interface CustomerHistoryRow {
  customerName: string;
  totalJobsCount: number;
  totalContractRevenue: number;
  totalProfitContrib: number;
  avgProfitMargin: number;
  lastContractDate: string;
  customerRating: string;
}

export function getCustomerHistoryData(data: AppData): CustomerHistoryRow[] {
  const engineRows = getJobCostEngineData(data);
  const customerMap = new Map<
    string,
    {
      totalJobsCount: number;
      totalContractRevenue: number;
      totalProfitContrib: number;
      lastContractDate: string;
    }
  >();

  // Extract from Approved Jobs / Engine
  data.approvedJobs.forEach((job) => {
    const calcJob = calculateApprovedJob(job, data);
    const cust = calcJob.customerName;
    if (!cust || cust === 'N/A') return;

    if (!customerMap.has(cust)) {
      customerMap.set(cust, {
        totalJobsCount: 0,
        totalContractRevenue: 0,
        totalProfitContrib: 0,
        lastContractDate: '',
      });
    }

    const record = customerMap.get(cust)!;
    record.totalJobsCount++;

    const engineRow = engineRows.find((r) => r.jobId === job.jobId);
    if (engineRow) {
      record.totalContractRevenue += engineRow.contractRevenue;
      record.totalProfitContrib += engineRow.actualProfit;
    }

    if (!record.lastContractDate || job.contractDate > record.lastContractDate) {
      record.lastContractDate = job.contractDate;
    }
  });

  // Also include leads customer names if they don't have jobs yet
  data.leads.forEach((l) => {
    if (l.customerName && !customerMap.has(l.customerName)) {
      customerMap.set(l.customerName, {
        totalJobsCount: 0,
        totalContractRevenue: 0,
        totalProfitContrib: 0,
        lastContractDate: l.inquiryDate || '',
      });
    }
  });

  const result: CustomerHistoryRow[] = [];

  customerMap.forEach((val, custName) => {
    const avgProfitMargin =
      val.totalContractRevenue > 0 ? val.totalProfitContrib / val.totalContractRevenue : 0;

    let customerRating = '🔵 Regular Business Customer';
    if (val.totalProfitContrib >= 50000 && avgProfitMargin >= 0.25) {
      customerRating = '💎 Core Strategic Customer';
    } else if (val.totalProfitContrib >= 20000 && avgProfitMargin >= 0.15) {
      customerRating = '🌟 High Value Customer';
    }

    result.push({
      customerName: custName,
      totalJobsCount: val.totalJobsCount,
      totalContractRevenue: val.totalContractRevenue,
      totalProfitContrib: val.totalProfitContrib,
      avgProfitMargin,
      lastContractDate: val.lastContractDate || 'N/A',
      customerRating,
    });
  });

  return result.sort((a, b) => b.totalProfitContrib - a.totalProfitContrib);
}
