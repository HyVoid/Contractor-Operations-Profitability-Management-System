[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)


# Construction Job Costing Excel Template & Contractor Estimating Spreadsheet (Lead-to-Profit CRM System)
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/9ddabd3f-ffc4-4a6c-937f-fbbc3c2c2e8a" />


![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-green.svg)
![Tool Type](https://img.shields.io/badge/Tool%20Type-Construction%20Job%20Costing%20%26%20Estimating-orange.svg)

**An all-in-one Construction Job Costing Excel Template, Contractor Estimating Spreadsheet, and Lead-to-Profit CRM Calculator built for general contractors, subcontractors, and trade businesses. Track the complete contractor workflow from Sales Lead → Material & Labor Estimate → Approved Job Budget → Field Timesheets & Material Usage → Estimate-vs-Actual Variance → Net Profit Margin → Customer Lifetime Value (LTV).**

**No signup. No installation. Free to test in your browser.**

Test the interactive web application for free in your browser, or download the unlocked Excel spreadsheet template for full offline customization—backed by a 30-day, no-questions-asked money-back guarantee.

> 🌐 **Try the Web App:** [Interactive Contractor Estimating & Job Costing Web Calculator (Live Demo)](https://hyvoid.github.io/construction-job-costing-excel-template/)  
> 📥 **Get the Full Excel System:** [Download the Editable Construction Job Costing & Quote Builder Excel Template](https://www.theseusworkshop.com/l/njmty?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=contractor-operations-profitability)  
> ⚙️ **Architecture & Math:** [Jump to The Business Logic & Job Costing Methodology](#the-business-logic--methodology)


---

## The Connected Construction Operating Chain: From Lead to Job Costing

Most construction spreadsheets only solve an isolated fragment of the business—leaving your **sales pipeline**, **estimating takeoff**, and **field job costing** trapped in disconnected files. 

This contractor workbook is engineered around a single, unbroken **relational operating chain** anchored by `Lead_ID` and `Job_ID`:

```text
Sales Lead (CRM Pipeline)
  ↓
Project Estimate (Material Takeoff + Labor + Overhead + Margin)
  ↓
Approved Contract (Baseline Budget Locked via Job_ID)
  ↓
Field Execution (Timesheet Labor Hours & Material Consumption)
  ↓
Job Costing Engine (Estimate vs. Actual Variance & Overrun Alerts)
  ↓
Real-Time Profit Dashboard (Gross Profit $ & Net Margin %)
  ↓
Customer LTV History (Repeat Client Profitability Ranking)

```

### One Contractor Workbook. Eight Integrated Operational Modules.

| Workflow Stage | Excel / Web Module | Core Construction & Financial Metrics Tracked |
| --- | --- | --- |
| **1. Sales Pipeline (CRM)** | `Lead_Tracker` | Customer inquiries, bid opportunities, estimated budgets, pipeline aging, estimator ownership, projected gross profit. |
| **2. Estimating & Bidding** | `Quote_Builder` | Material takeoff quantities, labor hours, direct COGS, overhead allocation, **target margin vs. markup**, tax-inclusive bid price. |
| **3. Contract Baseline** | `Approved_Jobs` | Awarded construction contracts, unique `Job_ID` generation, contracted value, schedule dates, project manager assignment. |
| **4. Field Tracking** | `Labor_Log` + `Material_Usage` | Daily/weekly field crew timesheet hours, craft labor rates, jobsite material consumption linked directly to `Job_ID`. |
| **5. Job Costing & WIP** | `Job_Cost_Engine` | Actual material COGS, actual burdened labor cost, applied overhead, total job cost, **Estimate-vs-Actual budget variance**. |
| **6. Margin & Overruns** | `Profit_Dashboard` | Realized gross profit ($), net profit margin (%), **automated cost-overrun alerts**, company-wide portfolio P&L. |
| **7. Client Intelligence** | `Customer_History` | Multi-project client history, cumulative contract revenue, lifetime profit contribution, average margin %, client tier rating. |

---

## What It Helps You Track & Decide: Contractor Pain-Point to Solution Mapping

Instead of waiting until tax season to discover whether your crew made or lost money on a build, this **contractor profitability tracker** resolves seven critical operational blind spots:

| Target Tracking Metric / Pain Point | The Common Contractor Blind Spot | How This Job Costing System Solves & Tracks It |
| --- | --- | --- |
| **Sales Lead Prioritization & Pipeline Value** | Chasing every bid request equally without knowing which opportunities yield the highest profit contribution. | `Lead_Tracker` calculates pipeline duration and **projected gross profit** based on your target margin before you invest estimating hours. |
| **Accurate Bid Pricing (Margin vs. Markup)** | Underpricing jobs by confusing *Markup %* with *Gross Margin %*, or forgetting to allocate shop overhead and sales tax. | `Quote_Builder` pulls standard costs from `Material_DB` and `Labor_Rates`, applies overhead, and **back-calculates the exact tax-inclusive quote** needed to hit your target margin. |
| **Preserving the Original Estimate Baseline** | Overwriting the initial estimate once construction starts, making it impossible to see where the budget went wrong. | `Approved_Jobs` locks the awarded quote's estimated cost and assigns a permanent `Job_ID` as an immutable **budget variance baseline**. |
| **Converting Field Timesheets & Materials into COGS** | Tracking crew hours on paper timesheets and material receipts in shoeboxes without linking them to specific project budgets. | `Labor_Log` and `Material_Usage` bind every field hour and material unit to `Job_ID`, automatically multiplying by standard rates in the costing engine. |
| **Real-Time Cost Overrun & Budget Variance Alerts** | Discovering labor or material cost overruns only after the job is 100% finished and the final invoice is paid. | `Job_Cost_Engine` continuously compares **Actual Cost vs. Estimated Cost**, triggering visual **Overrun Alerts** the moment variance breaches your threshold. |
| **Estimated Margin vs. Realized Net Margin** | Assuming a job quoted at a 30% margin actually delivered 30%, ignoring unbilled scope creep and extra crew hours. | Explicitly separates **Initial Projected Margin** from **Actual Realized Margin** so project managers see margin erosion in real time. |
| **Customer Lifetime Profitability (Client LTV)** | Treating high-revenue General Contractors or property managers as "VIP clients" even when their projects consistently lose money. | `Customer_History` aggregates total completed jobs, lifetime revenue, net profit contribution, and **average realized margin by client**. |

---

## How to Run a Construction Estimate & Job Costing Audit (Quick Start Workflow)

Set up a standardized **estimating, job-tracking, and cost-control system** for your contracting business in four structured steps:

### Step 1: Configure Global Financial & Overhead Rules

Open the `Settings` control tab to define the financial guardrails used across your entire business:

* **Sales Tax Rate (%)** & **Overhead Allocation Rate (%)**
* **Target Gross Margin (%)** for automated quote calculation
* **Cost Overrun Alert Threshold (%)** (e.g., flag jobs exceeding budget by more than 5%)
* **Base Currency & Exchange Rate**

*Action:* Explore the pre-configured control console right now in the [Free Browser Contractor Operating System](https://hyvoid.github.io/construction-job-costing-excel-template/).

---

### Step 2: Populate Your Material Price Book & Labor Rate Cards

Establish your standardized cost databases once so estimators stop guessing unit prices:

* **`Material_DB`:** Enter material SKUs/codes, item descriptions, specifications, units of measure (EA, LF, SQFT), and standard unit costs.
* **`Labor_Rates`:** Define trade/craft categories (e.g., Apprentice, Journeyman, Foreman, Subcontractor) and burdened hourly labor rates.

---

### Step 3: Execute the Connected Lead-to-Job Costing Workflow

Follow the standardized 7-step operational sequence for every project:

1. **Log the Inquiry** in `Lead_Tracker` (`Lead_ID`).
2. **Build the Bid** in `Quote_Builder` using your master material and labor databases.
3. **Lock the Contract** in `Approved_Jobs` (`Job_ID`) and set milestones in `Schedule`.
4. **Log Field Execution** as crews submit hours in `Labor_Log` and pull inventory in `Material_Usage`.
5. **Audit Variance & Margin** automatically in `Job_Cost_Engine`, `Profit_Dashboard`, and `Customer_History`.

---

### Step 4: Manage by Exception & Download the Excel Template for Live Operations

Instead of digging through hundreds of spreadsheet rows, use the dashboard to intervene on **stalled sales leads**, **jobs breaching cost-overrun thresholds**, **overdue milestones**, and **margin-eroding clients**.

> 💡 **Ready to run your own construction estimates, crew timesheets, and job costing in this system?**
> While the browser version lets you inspect the architecture instantly, managing real construction projects requires saving your own material price books, logging weekly field labor, and maintaining permanent project records.
> 👉 **[Download the Full Unlocked Contractor Operations & Job Costing Excel Template](https://www.theseusworkshop.com/l/njmty?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=contractor-operations-profitability)** to customize rate tables, track unlimited jobs offline, and take full ownership of your project margins.

---

## The Business Logic & Methodology

Most small-to-midsize contractors suffer from **"Profit Fade"**—where a project is bid at a healthy 35% margin on paper, but ends up yielding 8% net profit at year-end. This happens because estimating spreadsheets, field logs, and accounting ledgers operate on incompatible math.

To eliminate profit fade without forcing contractors into complex enterprise ERP software, this toolkit implements a **4-pillar construction accounting and operations methodology**:

1. **Relational Primary-Key Chaining (`Lead_ID → Quote_ID → Job_ID → Customer_ID`):**
In ad-hoc spreadsheets, estimates and actuals live in separate files with no structural link. This model enforces a relational database architecture inside Excel: a sales opportunity (`Lead_ID`) converts into an itemized bid; upon contract award, `Approved_Jobs` mints a unique `Job_ID` and snapshots the original estimated cost as a frozen baseline. Every downstream timesheet entry (`Labor_Log`), material pull (`Material_Usage`), and schedule task must reference a valid `Job_ID`, guaranteeing 100% traceability from initial bid to final job cost.
2. **Reverse-Margin Pricing vs. Cost-Plus Markup Math:**
One of the most expensive math errors in contracting is confusing **Markup** with **Gross Margin** (marking up a $1,000 cost by 25% yields a $1,250 price, which is only a **20% gross margin**, silently wiping out 5% of bottom-line profit). Inside `Quote_Builder`, the pricing engine aggregates Direct Material Cost ($M$), Direct Labor Cost ($L$), and Allocated Overhead ($O = (M + L) \times r_{\text{oh}}$), then applies **true reverse-margin divisor math** alongside tax calculation:

$$\text{Suggested Pre-Tax Quote} = \frac{\text{Direct Material} + \text{Direct Labor} + \text{Allocated Overhead}}{1 - \text{Target Margin \%}}$$



This ensures that when the contract is signed, the target gross margin percentage is mathematically protected.
3. **Standard Costing & Activity-Based Field Absorption:**
Field crews track operational quantities (**Hours Worked** and **Material Units Consumed**), not financial dollars. The costing engine decouples field data entry from financial valuation by joining `Labor_Log` and `Material_Usage` against the master rate tables (`Labor_Rates` and `Material_DB`). As field quantities are logged, the engine dynamically computes absorbed direct costs and applies the global overhead rate from `Settings` to reflect true **Total Job Cost**.
4. **Threshold-Driven Budget Variance & LTV Aggregation:**
Rather than treating job costing as a post-mortem exercise, `Job_Cost_Engine` continuously calculates **Cost Variance ($\Delta C = \text{Actual Total Cost} - \text{Estimated Baseline Cost}$)** and **Variance %**. If $\frac{\Delta C}{\text{Estimated Cost}} > \text{Overrun Threshold}$, the system triggers an automated exception state for immediate operational intervention. Simultaneously, completed `Job_ID` records roll up by `Customer_ID` into `Customer_History`, shifting commercial strategy from single-job bidding to **Customer Lifetime Profit Contribution**.

---

## Why Most Contractor Profitability Errors Are Structural—Not Judgment Errors

Experienced contractors rarely lose money because they don't know how to build. They lose money because **information breaks at every operational handoff**:

### Before: The Disconnected Contractor Spreadsheet Trap

```text
Sales Lead Notes → Standalone Excel Quote → Signed PDF Contract → Paper Crew Timesheets → Shoebox Material Receipts → Year-End Accountant Tax Summary
                            ↘                                             ↙
                              Zero real-time link between Estimate & Actuals

```

* **The Handoff Failure:** The original estimate cannot be compared directly to actual field consumption. Labor hours get logged without a `Job_ID`. Material receipts get lumped into a generic QuickBooks expense account. By the time the business owner sees the profit number, the job has been closed for months.

### After: One Connected Relational Operating Flow

```text
Lead_Tracker (Lead_ID)
  ↓
Quote_Builder (Standardized Material_DB + Labor_Rates + Reverse-Margin Math)
  ↓
Approved_Jobs (Locks Baseline Budget & Generates Unique Job_ID)
  ├── Schedule (Milestones & Deadlines)
  ├── Labor_Log (Field Hours × Standard Labor Rates)
  └── Material_Usage (Field Quantities × Standard Material Unit Costs)
        ↓
  Job_Cost_Engine (Estimate vs. Actual Variance + Overrun Alert Thresholds)
        ↓
  Profit_Dashboard (Realized Project Margin % & Portfolio P&L)
        ↓
  Customer_History (Multi-Job Client Revenue, Profit & LTV Ranking)

```

---

## Disconnected Spreadsheets vs. This Connected Contractor Operating System

| Operational Dimension | Disconnected Contractor Spreadsheets (Without This Tool) | Connected Job Costing & Operating System (With This Tool) |
| --- | --- | --- |
| **Sales Lead to Estimate Handoff** | Leads live in emails or notepads while quotes live in individual Excel files, making bid-hit ratios and pipeline profit invisible. | `Lead_ID` connects sales inquiries directly to `Quote_Builder`, projecting **pipeline profit contribution** based on target margin. |
| **Preserving the Awarded Budget Baseline** | Once a bid is won, contractors edit the estimate file or start a blank tracker, erasing the original cost baseline needed for variance analysis. | `Approved_Jobs` locks the awarded quote's **Estimated Total Cost** under a unique `Job_ID` for side-by-side **Estimate vs. Actual** auditing. |
| **Field Timesheets & Material Consumption** | Crew labor hours and jobsite material pulls remain raw operational notes rather than converting into real-time financial job costs. | `Labor_Log` and `Material_Usage` bind field quantities to `Job_ID`, automatically multiplying by **`Labor_Rates`** and **`Material_DB`** unit costs. |
| **Mid-Project Cost Overrun Detection** | Cost overruns and labor blowouts are discovered weeks after project completion, when change orders can no longer be issued. | `Job_Cost_Engine` tracks live budget variance against a centralized **Cost Overrun Threshold**, triggering instant alerts while work is still in progress. |
| **Single-Job Margin vs. Client Lifetime Value** | A contractor celebrates one profitable job for a client without realizing the previous four jobs for that same client lost money. | `Customer_History` rolls up **total jobs, cumulative revenue, net profit $, and average realized margin %** per customer account. |
| **Global Overhead, Tax & Margin Rules** | Overhead percentages, tax rates, and markup formulas are hardcoded across dozens of tabs, causing costly quoting mistakes. | `Settings` serves as a **single source of truth**—updating overhead or target margin in one cell dynamically updates all downstream modules. |

---

## Who This Is For: Target Contractor Roles & Trade Use Cases

This system is engineered for **project-based construction businesses, specialty trade contractors, estimators, and owner-operators (typically 1 to 50 employees)** who want rigorous job-costing control without paying $500–$1,500/month for bloated construction ERP software:

* **General Contractors (GCs) & Custom Home Builders / Remodelers:** Use this as a **complete residential or commercial project management and job costing Excel template** to track multiple active builds, monitor subcontractor/labor burn rates, and protect gross margins from estimate to final walkthrough.
* **Specialty Trade Subcontractors (HVAC, Electrical, Plumbing, Roofing, Landscaping, Painting, Concrete):** Use this as a **trade estimating and field labor/material tracker** to standardize unit pricing in `Material_DB`, quote jobs accurately in minutes, and verify whether field crews beat or exceeded estimated labor hours.
* **Construction Estimators & Sales Managers:** Use this as a **standardized construction bid & quote generator** coupled with a **contractor CRM lead tracker** to eliminate markup-vs-margin math errors and prioritize high-margin bids.
* **Construction Project Managers & Field Superintendents:** Use this as an **Estimate-vs-Actual budget variance and schedule tracker** to catch labor overruns and material waste mid-project—while there is still time to course-correct or submit a client Change Order.
* **Construction Bookkeepers, Controllers & Fractional CFOs:** Use this as an **operational job-costing sub-ledger** that bridges the gap between raw field activity (timesheets and material usage) and high-level tax accounting software like QuickBooks or Xero.

*Note: This workbook is **not** intended to replace statutory payroll processing, tax filing software, or enterprise blueprint takeoff software. It is the lightweight **operational and commercial execution engine** that keeps your sales pipeline, project estimates, field costs, and customer profitability connected in one place.*

---

## Frequently Asked Construction Job Costing & Estimating Scenarios

If your contracting business is searching for a practical spreadsheet model to solve any of the following operational headaches, this system is built for you:

* **Estimate vs. Actual Job Costing in Excel:** *How do I track actual field labor hours and material usage against my original project estimate to see real-time budget variance before a job goes over budget?*
* **Standardizing Construction Quotes & Bids:** *How do I build a repeatable contractor quote template that pulls from a master material price list and labor rate card while automatically factoring in overhead, target gross margin, and tax?*
* **Connecting Contractor CRM Leads to Project Profitability:** *How do I track a construction job from the initial customer phone call (Lead) all the way through estimating, job execution, final net profit, and repeat customer history in a single Excel workbook?*
* **Identifying Profit Fade Across Crews & Clients:** *Why does my contracting business show strong revenue at the end of the year but low cash in the bank—and which specific jobs or repeat clients are silently eroding our gross margin?*

---

## About Theseus Workshop

I build lightweight, transparent Excel and browser-based operating models for businesses where there are too many moving parts to hold in one person's head, but where an expensive enterprise software rollout creates more friction than value.

The central design principle behind every tool is simple:

> **"What is the smallest, cleanest operational model that preserves the unbroken chain between daily field events and profitable management decisions?"**

For project-based contractors, that means uniting **Lead → Estimate → Approved Job → Field Labor & Materials → Job Cost Variance → Net Profit → Customer History** inside one auditable, zero-bloat system.

---

*Keywords: Construction Job Costing Excel Template, Contractor Estimating Spreadsheet, Estimate vs Actual Cost Tracker, General Contractor CRM & Quote Builder, Subcontractor Profit & Margin Calculator, Construction Material & Labor Log Excel, Project Management & Job Costing Workbook.*

---

## Technical Details

<details>
<summary>For technical reviewers, Excel practitioners, and collaborators</summary>

### Workbook Architecture

The workbook consists of **12 core sheets** organized into three functional layers. The architecture separates controlled master data from operational records and downstream calculations, while maintaining a directional flow from input → calculation → output. 

| Layer                      | Sheet              | Primary Role                               |
| -------------------------- | ------------------ | ------------------------------------------ |
| **Master Data & Control**  | `Settings`         | Central business parameters                |
|                            | `Material_DB`      | Standard material catalog and costs        |
|                            | `Labor_Rates`      | Standard labor categories and hourly rates |
| **Operations & Execution** | `Lead_Tracker`     | Opportunity pipeline                       |
|                            | `Quote_Builder`    | Estimate and quote calculation             |
|                            | `Approved_Jobs`    | Contracted project master                  |
|                            | `Schedule`         | Milestones and execution alerts            |
|                            | `Labor_Log`        | Actual labor records                       |
|                            | `Material_Usage`   | Actual material consumption                |
| **Engine & Analytics**     | `Job_Cost_Engine`  | Actual project costing and profitability   |
|                            | `Profit_Dashboard` | Management-level profitability analysis    |
|                            | `Customer_History` | Customer-level commercial history          |

The principal data flow is:

```text
                    MASTER DATA
       ┌──────────────┬──────────────┐
       │              │              │
   Settings      Material_DB    Labor_Rates
       │              │              │
       └──────────────┴──────────────┘
                      ↓
                 OPERATIONS
                      ↓
                Lead_Tracker
                      ↓
                 Quote_Builder
                      ↓
                 Approved_Jobs
                  /    |     \
                 /     |      \
                ↓      ↓       ↓
          Schedule  Labor_Log  Material_Usage
                         \       /
                          \     /
                           ↓   ↓
                       Job_Cost_Engine
                          /       \
                         ↓         ↓
                Profit_Dashboard  Customer_History
```

The central design principle is **Unified Master Key**: `Job_ID` links the approved job to schedule records, labor records, material usage, and the job-cost engine. This is intended to eliminate the data-island problem between commercial planning and project execution. 

### Central Control Layer

`Settings` is the workbook's single point of maintenance.

The defined parameters are:

| Cell | Parameter               |  Default | Used For                                 |
| ---- | ----------------------- | -------: | ---------------------------------------- |
| `B2` | Default Currency Symbol |      `$` | Monetary presentation                    |
| `B3` | Tax Rate                | `13.00%` | Tax-inclusive / tax-exclusive conversion |
| `B4` | Overhead Rate           | `10.00%` | Indirect cost allocation                 |
| `B5` | Target Margin           | `25.00%` | Quote and opportunity profitability      |
| `B6` | Overrun Threshold       |  `5.00%` | Project cost warning                     |
| `B7` | USD/CAD Exchange Rate   | `1.0000` | Reserved currency conversion             |

These values are deliberately centralized. The architecture requires downstream formulas to reference `Settings` rather than hardcoding values such as `0.13`, `0.10`, or `0.25`. The implementation cross-check confirms that the tax, overhead, target margin, and overrun parameters are propagated to the appropriate calculation modules. 

### Three Traps That Catch Even Experienced Contractors

#### Trap 1 — Treating the Original Quote Margin as the Current Project Margin

**1. Decision made**

A project was accepted because the estimate showed an acceptable target margin.

**2. Hidden assumption**

The original estimate is treated as if it remains representative after execution begins.

**3. What changes the decision**

Actual labor hours and material consumption can exceed the original assumptions.

```text
Original Estimate
      ↓
Target Margin
      ↓
Project Approved

Actual Execution
      ↓
Higher Labor + Material Cost
      ↓
Lower Actual Margin
```

**4. Why the reasoning fails**

The original quote represents a planned cost structure. It is not evidence of actual consumption.

**5. Corrected reasoning**

Keep the estimated cost as a baseline and calculate actual cost independently from `Labor_Log` and `Material_Usage`.

**6. Corrected decision**

The project can be monitored for margin deterioration while corrective action is still possible.

<details>
<summary>Formula logic</summary>

The actual profitability chain is:

```text
Contract Revenue
-
Actual Total Cost
=
Actual Profit

Actual Profit
÷
Contract Revenue
=
Actual Margin
```

The implementation defines contract revenue on a tax-exclusive basis:

```excel
=Contract_Amount/(1+Settings!$B$3)
```

Actual profit is then calculated as tax-exclusive contract revenue less actual total cost. 

</details>

#### Trap 2 — Judging Project Profitability From Direct Costs Alone

**1. Decision made**

Material and labor costs appear to remain below contract revenue, so the project is considered healthy.

**2. Hidden assumption**

Direct labor and material are treated as the complete economic cost of the project.

**3. What changes the decision**

Indirect management costs are not visible in direct project expenditure but still need to be allocated.

**4. Why the reasoning fails**

The workbook's commercial model defines project cost as direct material + direct labor + allocated overhead.

**5. Corrected reasoning**

Apply the centralized overhead rate consistently to the direct-cost base.

**6. Corrected decision**

Project margin is evaluated using the same cost structure used during estimating.

```text
Actual Material Cost
        +
Actual Labor Cost
        ↓
Direct Actual Cost
        +
Overhead Allocation
        ↓
Actual Total Cost
```

<details>
<summary>Formula logic</summary>

```excel
Overhead_Allocation =
    (Actual_Material_Cost + Actual_Labor_Cost)
    * Settings!$B$4

Actual_Total_Cost =
    Actual_Material_Cost
    + Actual_Labor_Cost
    + Overhead_Allocation
```

The implementation specifies the same overhead concept for quotation-stage costing and actual job costing. 

</details>

#### Trap 3 — Waiting Until Project Closeout to Detect Cost Overrun

**1. Decision made**

Management waits until project completion to determine whether the project stayed within budget.

**2. Hidden assumption**

Cost variance is treated as a reporting metric rather than an operational control signal.

**3. What changes the decision**

A project can exceed its estimated cost before completion, while there is still remaining work that could potentially be controlled.

**4. Why the reasoning fails**

A late warning may explain the final result but cannot influence costs that have already been incurred.

**5. Corrected reasoning**

Compare actual total cost with the original estimated total cost and evaluate the variance against the centralized overrun threshold.

**6. Corrected decision**

A project crossing the configured threshold becomes an exception requiring management attention.

```text
Estimated Total Cost
        ↓
Actual Total Cost
        ↓
Cost Variance
        ↓
Overrun Threshold
        ↓
Normal / Warning / Severe Overrun
```

<details>
<summary>Formula logic</summary>

The implementation defines `Cost_Variance` as:

```excel
=Actual_Total_Cost-Estimated_Total_Cost
```

The warning logic evaluates the actual cost-overrun percentage against `Settings!B6`. The dashboard then counts projects classified as severe cost overruns. 

</details>

### Example Scenario

A contractor accepts a project with a tax-inclusive contract amount of **$113,000**.

The configured tax rate is **13%**, so the tax-exclusive contract revenue is:

```text
$113,000 ÷ 1.13
= $100,000
```

The original quote contains:

| Cost Component           |   Estimated |
| ------------------------ | ----------: |
| Materials                |     $42,000 |
| Labor                    |     $35,000 |
| Overhead allocation      |      $7,700 |
| **Estimated Total Cost** | **$84,700** |
| **Initial Profit**       | **$15,300** |
| **Initial Margin**       |  **15.30%** |

During execution, actual records accumulate:

| Cost Component        |      Actual |
| --------------------- | ----------: |
| Materials             |     $47,000 |
| Labor                 |     $40,000 |
| Overhead allocation   |      $8,700 |
| **Actual Total Cost** | **$95,700** |
| **Actual Profit**     |  **$4,300** |
| **Actual Margin**     |   **4.30%** |

The project has therefore moved from a **15.30% projected margin to a 4.30% actual margin**.

The cost variance is:

```text
$95,700 - $84,700
= $11,000
```

The cost-overrun percentage is:

```text
$11,000 ÷ $84,700
≈ 12.99%
```

With the default `5.00%` overrun threshold, this project is clearly outside normal cost control.

The correct management conclusion is **not simply "the project is still profitable."**

The more useful conclusion is:

> **The project remains positive in absolute profit, but its cost structure has materially deteriorated and requires intervention.**

The next review should focus on where the variance originated—labor hours, material consumption, or both—and whether remaining project work can be controlled.

This is precisely why the system preserves both the original estimate and actual execution costs instead of replacing the estimate with the latest spending figure. The `Job_Cost_Engine` is designed to expose the difference between these two states. 

### Formula Reference

<details>
<summary>Lead and Pipeline Calculations</summary>

**Pipeline duration**

```excel
=MAP(
    G3:INDEX(G:G,COUNTA(G:G)),
    H3:INDEX(H:H,COUNTA(H:H)),
    LAMBDA(
        inquiry_date,status,
        IF(
            inquiry_date="",
            "",
            IF(
                OR(status="已中标",status="已流失"),
                "已结案",
                TODAY()-inquiry_date
            )
        )
    )
)
```

**Purpose:** Calculates how long an opportunity remains active in the pipeline while treating won and lost leads as closed.

**Potential profit**

```excel
=MAP(
    F3:INDEX(F:F,COUNTA(F:F)),
    LAMBDA(
        budget,
        IF(
            budget="",
            "",
            budget*Settings!$B$5
        )
    )
)
```

**Purpose:** Converts estimated project budget into potential profit using the centralized target-margin assumption rather than a hardcoded percentage.

</details>

<details>
<summary>Quote and Estimate Calculations</summary>

The quote calculation follows:

```text
Material Quantity × Standard Material Cost
+
Estimated Labor Hours × Standard Labor Rate
        ↓
Direct Cost
        +
Overhead Allocation
        ↓
Estimated Total Cost
        ↓
Target Margin
        ↓
Tax
        ↓
Suggested Quote
```

**Suggested quote logic**

```excel
=(Estimated_Total_Cost/(1-Settings!$B$5))
*(1+Settings!$B$3)
```

**Projected margin logic**

```excel
=((Quote_Amount/(1+Settings!$B$3))
-Estimated_Total_Cost)
/
(Quote_Amount/(1+Settings!$B$3))
```

`Quote_Builder` uses `XLOOKUP` to retrieve standard material and labor rates, while `MAP` and `LAMBDA` allow the calculation columns to spill dynamically as records expand. 

</details>

<details>
<summary>Approved Job Baseline</summary>

**Estimated total cost carried from the quote**

```excel
=MAP(
    Quote_ID_Range,
    LAMBDA(
        quote_id,
        IF(
            quote_id="",
            0,
            XLOOKUP(
                quote_id,
                Quote_Builder!A:A,
                Quote_Builder!M:M,
                0
            )
        )
    )
)
```

**Initial projected profit**

```excel
=(Contract_Amount/(1+Settings!$B$3))
-Estimated_Total_Cost
```

**Initial projected margin**

```excel
=Initial_Projected_Profit
/
(Contract_Amount/(1+Settings!$B$3))
```

The purpose is to preserve the commercial economics at the moment the quote becomes an approved job. 

</details>

<details>
<summary>Actual Labor and Material Cost</summary>

**Actual labor cost**

```excel
=Actual_Hours*Hourly_Rate
```

The hourly rate is retrieved from `Labor_Rates` based on `Labor_Code`. 

**Actual material cost**

```excel
=Actual_Quantity*Standard_Material_Cost
```

The material cost is retrieved from `Material_DB` using the material code.

Both actual-cost streams are grouped by `Job_ID` before entering `Job_Cost_Engine`.

</details>

<details>
<summary>Job Cost and Profitability</summary>

**Tax-exclusive contract revenue**

```excel
=Contract_Amount/(1+Settings!$B$3)
```

**Actual overhead allocation**

```excel
=(Actual_Material_Cost+Actual_Labor_Cost)
*Settings!$B$4
```

**Actual total cost**

```excel
=Actual_Material_Cost
+Actual_Labor_Cost
+Overhead_Allocation
```

**Actual profit**

```excel
=Contract_Revenue-Actual_Total_Cost
```

**Actual margin**

```excel
=Actual_Profit/Contract_Revenue
```

**Cost variance**

```excel
=Actual_Total_Cost-Estimated_Total_Cost
```

**Cost-overrun warning**

The overrun condition compares actual cost variance with the configured `Settings!B6` threshold rather than embedding a fixed percentage inside the formula. 

</details>

<details>
<summary>Schedule and Execution Alerts</summary>

**Days overdue**

```excel
=MAP(
    E3:INDEX(E:E,COUNTA(A:A)),
    F3:INDEX(F:F,COUNTA(A:A)),
    LAMBDA(
        planned_end,
        completion_pct,
        IF(
            planned_end="",
            "",
            IF(
                completion_pct>=1,
                0,
                MAX(0,TODAY()-planned_end)
            )
        )
    )
)
```

**Task status**

```excel
=MAP(
    F3:INDEX(F:F,COUNTA(A:A)),
    G3:INDEX(G:G,COUNTA(A:A)),
    LAMBDA(
        completion_pct,
        overdue_days,
        IF(
            completion_pct="",
            "",
            IF(
                completion_pct>=1,
                "Completed",
                IF(
                    overdue_days>0,
                    "Overdue "&overdue_days&" days",
                    "On Schedule"
                )
            )
        )
    )
)
```

The calculation distinguishes completed work from incomplete work that has exceeded its planned end date. 

</details>

<details>
<summary>Customer History and Value Analysis</summary>

**Customer list**

```excel
=UNIQUE(
    FILTER(
        Lead_Tracker!B3:INDEX(
            Lead_Tracker!B:B,
            COUNTA(Lead_Tracker!A:A)
        ),
        Lead_Tracker!B3:INDEX(
            Lead_Tracker!B:B,
            COUNTA(Lead_Tracker!A:A)
        )<>""
    )
)
```

**Total profit contribution**

```excel
=MAP(
    Customer_List,
    LAMBDA(
        customer,
        SUMIF(
            Job_Cost_Engine!B:B,
            customer,
            Job_Cost_Engine!K:K
        )
    )
)
```

**Customer value classification**

```excel
=MAP(
    Total_Profit_Contrib,
    Avg_Profit_Margin,
    LAMBDA(
        profit,
        margin,
        IF(
            AND(profit>=50000,margin>=0.25),
            "Strategic Core Customer",
            IF(
                AND(profit>=20000,margin>=0.15),
                "High-Value Customer",
                "Standard Business Customer"
            )
        )
    )
)
```

The source implementation uses cumulative profit contribution and average margin as the basis for customer-value classification, rather than evaluating customers by revenue alone. 

</details>

### Validation Rules

| Field / Area                    | Rule                                                                                | Error Behavior                                                                                   |
| ------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `Settings!B3` Tax Rate          | Must be a valid percentage used consistently across quote and revenue calculations. | Incorrect configuration produces inconsistent tax-inclusive and tax-exclusive amounts.           |
| `Settings!B4` Overhead Rate     | Must be maintained centrally rather than embedded in formulas.                      | Project costing can become inconsistent if manually overridden elsewhere.                        |
| `Settings!B5` Target Margin     | Must be a valid percentage used by lead potential and quote calculations.           | Incorrect value changes projected commercial economics.                                          |
| `Settings!B6` Overrun Threshold | Must be a valid percentage used by job-cost warnings.                               | Incorrect value changes the sensitivity of cost alerts.                                          |
| `Material_Code`                 | Must correspond to a valid record in `Material_DB`.                                 | Lookup may return `#N/A` or zero when the code is missing or malformed.                          |
| `Labor_Code`                    | Must correspond to a valid record in `Labor_Rates`.                                 | Hourly rate cannot be retrieved correctly.                                                       |
| `Job_ID`                        | Must reference the relevant approved project.                                       | Labor/material transactions can become detached from the correct project.                        |
| `Actual_Hours`                  | Must be numeric and represent actual project labor consumption.                     | Invalid values distort actual labor cost.                                                        |
| `Actual_Quantity`               | Must be numeric and tied to the relevant material code.                             | Invalid values distort actual material cost.                                                     |
| `Completion_Pct`                | Expected range is `0%–100%`.                                                        | Values at or above 100% are treated as completed; incomplete overdue work generates an alert.    |
| Dynamic-array output range      | Spill destination must remain clear.                                                | Occupied cells can generate `#SPILL!`.                                                           |
| Excel calculation mode          | Must remain **Automatic**.                                                          | Changes to `Settings` may not propagate immediately when calculation is set to Manual.           |
| Currency formatting             | Monetary cells must use the intended currency format.                               | Values may display with an incorrect currency symbol even when the underlying number is correct. |

The implementation recommends Excel Data Validation for operational input fields where practical and explicitly identifies `#SPILL!`, manual calculation mode, missing master-data codes, and incorrect currency formatting as common operational failure modes. 

The workbook's cross-check also verifies that the global parameters are referenced downstream and that calculation formulas do not hardcode the principal business assumptions. 

</details>

## Implementation Notes

### Dynamic-Array Design

The workbook is designed for Microsoft 365 / Excel 2021+ and uses modern dynamic-array functions where they provide a clear operational advantage.

Core functions include:

* `XLOOKUP`
* `FILTER`
* `UNIQUE`
* `SUMIFS`
* `MAP`
* `LET`
* `LAMBDA`

The design objective is to avoid routine formula dragging and manual range expansion.

```text
Configure Formula Once
        ↓
Reference Dynamic Source Range
        ↓
Add New Record
        ↓
Calculation Expands Automatically
        ↓
Dashboard / Analysis Updates
```

This is particularly important for contractor workflows because leads, jobs, labor records, and material transactions are continuously added over time.

The implementation uses dynamic-array logic in areas such as pipeline duration, potential profit, quote calculations, schedule alerts, and customer analysis. 

### Project Key Architecture

`Job_ID` is the central identifier connecting the execution layer.

```text
Approved_Jobs
      │
      ├── Job_ID
      │
      ├── Schedule
      │
      ├── Labor_Log
      │
      └── Material_Usage
                ↓
         Job_Cost_Engine
```

This creates a single project-level relationship between:

* the approved contract;
* scheduled work;
* actual labor;
* actual materials;
* actual cost;
* project profitability.

The architecture explicitly identifies the unified `Job_ID` as the core mechanism for eliminating data islands between project execution and financial analysis. 

### Project Cost Reconciliation

The workbook maintains a clear distinction between **what was estimated** and **what actually happened**.

```text
Original Quote
      ↓
Estimated Total Cost
      │
      │ compare
      ↓
Actual Labor
+
Actual Materials
+
Overhead
      ↓
Actual Total Cost
      ↓
Cost Variance
      ↓
Actual Profit
      ↓
Actual Margin
```

This allows management to identify whether a project's economics deteriorated because actual resource consumption moved away from the original estimate.

The `Job_Cost_Engine` therefore acts as the reconciliation layer between commercial planning and operational execution. 

### Dashboard Dependency Model

`Profit_Dashboard` is not an independent reporting table.

It sits downstream of the calculation engine:

```text
Settings
Material_DB
Labor_Rates
      ↓
Lead_Tracker
      ↓
Quote_Builder
      ↓
Approved_Jobs
      ↓
Schedule
Labor_Log
Material_Usage
      ↓
Job_Cost_Engine
      ↓
Profit_Dashboard
Customer_History
```

The dashboard summarizes outputs generated by the underlying project records and calculation layer rather than requiring management to maintain separate reporting figures.

The implementation defines dashboard metrics including:

* total projects;
* tax-exclusive revenue;
* actual total cost;
* gross profit;
* overall margin;
* severe cost-overrun project count. 

---

## Operating Workflow

The recommended operating rhythm follows the same structure as the workbook architecture.

### Start of Day

Review:

* `Settings`;
* master-data completeness;
* active leads;
* current project status;
* outstanding schedule exceptions.

The purpose is to ensure the calculation environment and operational inputs are current before new records are entered. 

### During Operations

Update the relevant operational records as business events occur:

```text
New Opportunity
    → Lead_Tracker

New Quote
    → Quote_Builder

Approved Contract
    → Approved_Jobs

Schedule Change
    → Schedule

Labor Performed
    → Labor_Log

Material Consumed
    → Material_Usage
```

The principle is **record the event at the source rather than reconstructing it later**.

### End-of-Day Review

Review the calculated outputs:

```text
Actual Cost
    ↓
Cost Variance
    ↓
Margin
    ↓
Overrun Alerts
    ↓
Management Action
```

This turns the workbook from a static reporting file into a lightweight operating control system.

---

## Recommended Review Cadence

| Frequency       | Primary Review                          | Recommended Focus                                                        |
| --------------- | --------------------------------------- | ------------------------------------------------------------------------ |
| **Daily**       | `Schedule` + execution logs             | Overdue tasks, missing labor/material entries                            |
| **Weekly**      | `Lead_Tracker` + `Profit_Dashboard`     | Pipeline, active projects, emerging cost overruns                        |
| **Per Project** | `Job_Cost_Engine`                       | Estimated vs. actual cost and margin                                     |
| **Monthly**     | `Profit_Dashboard` + `Customer_History` | Overall profitability and customer contribution                          |
| **Quarterly**   | `Settings` + master data                | Labor rates, material costs, overhead, target margin, warning thresholds |

The purpose of this cadence is to keep operational data maintenance and management review separate: field and project teams maintain the source records, while management uses the resulting calculations to make decisions.

---

## Data Entry Principles

### Enter Source Data Once

The workbook is designed around a **single-source-of-truth** principle.

For example:

```text
Material_DB
     ↓
Standard Material Cost
     ↓
Quote_Builder
     ↓
Estimated Cost

Material_DB
     ↓
Standard Material Cost
     ↓
Material_Usage
     ↓
Actual Cost
```

The material rate should therefore be maintained in the master table rather than independently retyped into multiple calculation areas.

The same principle applies to labor rates and global business assumptions.

### Use Project IDs Consistently

Once an approved project receives a `Job_ID`, all subsequent project execution records should reference that identifier.

```text
Job_ID: JOB-001
    ├── Schedule
    ├── Labor_Log
    ├── Material_Usage
    └── Job_Cost_Engine
```

A missing or incorrectly entered `Job_ID` breaks the relationship between operational activity and project profitability.

### Do Not Overwrite Calculated Outputs

Calculated columns should remain formula-driven.

Users should update source records such as:

* lead information;
* quote inputs;
* project status;
* labor hours;
* material quantities;
* schedule dates.

They should not manually replace calculated:

* total costs;
* margins;
* cost variance;
* project profitability;
* customer-level summaries.

---

## Known Limitations

This workbook is intentionally lightweight.

It should **not** be treated as a replacement for:

* accounting software;
* payroll processing;
* enterprise resource planning;
* procurement systems;
* field-service management platforms;
* multi-user transactional databases.

It is designed for operational control and decision support where Excel remains an appropriate working environment.

### Excel Version

The implementation relies on modern Excel functions and is intended for **Microsoft 365 / Excel 2021+**.

Older Excel versions may not support all dynamic-array functions used by the workbook.

### Calculation Mode

Excel should remain in **Automatic Calculation** mode.

If calculation is manually disabled, changes to `Settings` or source records may not immediately propagate through the calculation chain. 

### Dynamic-Array Spill Space

Dynamic formulas require clear spill ranges.

If another value occupies a required spill area, Excel may return `#SPILL!`.

The appropriate response is to inspect the spill range rather than manually copying formulas into additional cells. 

### Master Data Dependency

`Material_Code` and `Labor_Code` depend on corresponding records in `Material_DB` and `Labor_Rates`.

If a code is missing or malformed, the downstream lookup and costing calculations may not return the intended value. 

---

## Other Tools in This Series

A collection of lightweight Excel decision-support tools for operational planning, costing, profitability, and business analysis.

* **Enterprise Payroll & Annual Workforce Capacity Planning Excel Toolkit**
* **Industrial Energy Cost & TCO Decision Support Toolkit**
* **E-commerce Profit Engine & Financial Reconciliation Toolkit**
* **Food Manufacturing Cost & Unit Economics Excel Toolkit**
* **Rental Property Operations & Vacancy Intelligence Excel Toolkit**

---

## License

This project is released under the **Apache License 2.0**.

You are free to use, modify, reproduce, and distribute the work in accordance with the terms of the license.

See the repository's `LICENSE` file for the complete license terms.
