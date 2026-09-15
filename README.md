[ 🌐 عربي ](README.ar.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)
# Contractor Operations & Profitability Management System: Construction Estimating, Job Costing & Project Tracking Excel Template

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-green.svg)
![Tool Type](https://img.shields.io/badge/Tool%20Type-Contractor%20Operations%20%26%20Profitability-orange.svg)

> **Contractor Operations & Profitability Management System** is an end-to-end **construction management Excel spreadsheet and web application** engineered for trade contractors, builders, and project managers. Seamlessly connect your entire operating chain: **Lead Pipeline Tracking → Material & Labor Estimating → Approved Job Scheduling → Field Labor Logs & Material Consumption → Automated Job Costing Engine → Real-Time Profit Margin Variance → Customer Lifetime Value (LTV) History**—without subscribing to complex, expensive enterprise ERP software.

**Test the free browser-based construction calculator instantly. No signup required. Zero installation. 100% Free.**

For trade contractors and project managers who require a **reusable offline construction management workbook**, retained project cost archives, customizable overhead rates, and repeatable job costing across multiple crews, the complete Excel edition is available as a one-time purchase backed by a **30-day, no-questions-asked money-back guarantee**.

*   🌐 [**Launch the Free Interactive Contractor Web App Demo**](https://hyvoid.github.io/Contractor-Operations-Profitability-Management-System/) → Run real-time project estimates, field labor logs, and profit calculations directly in your browser.
*   📥 [**Download the Full Offline Contractor Operations Excel Template**](https://theseusworkshop.com/l/ftbvja?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=contractor-operations-profitability) → Unlock the customizable workbook with formula access, multi-project archives, and custom labor burden rates.

## Want to try it?

This project is included in the Construction Toolkit.

Try this and other lightweight construction tools free for 30 days — including tools for estimating, bidding, job costing, and day-to-day operations.

→ [Try the Construction Toolkit](https://theseusworkshop.com/l/fqtoi/BIDSEASON?utm_source=github&utm_medium=GitHub%20portfolio)

---

## Construction Operations Pain Points Solved: Job Costing & Profitability Tracking

| Pain Point | Solution |
| :--- | :--- |
| **Blind bidding and underpricing jobs** | Centralizes standard material databases (`Material_DB`) and fully burdened hourly wage tables (`Labor_Rates`) within a dedicated `Quote_Builder` to generate mathematically accurate, markup-supported project quotes. |
| **Uncontrolled labor hour leaks and unrecorded overtime** | Standardizes daily site reporting via `Labor_Log`, binding every recorded crew hour directly to a specific `Job_ID` for immediate labor cost reconciliation. |
| **Sudden material price spikes and unaccounted deliveries** | Tracks actual on-site unit consumption using `Material_Usage`, comparing invoiced supplier costs directly against original project takeoff estimates. |
| **Unallocated business overhead eating net profit** | Applies configurable administrative and equipment overhead allocation percentages across all active jobs in the automated `Job_Cost_Engine`. |
| **Discovering profit loss weeks after final project handover** | Delivers real-time variance monitoring through the `Profit_Dashboard`, triggering automated cost-overrun alerts before minor slippages compound into negative cash flow. |
| **Inability to identify which clients yield real commercial margin** | Aggregates cumulative contract revenue, historical profit contribution, and average realized margins by account in `Customer_History` to refine client acquisition strategies. |

---

## The Complete End-to-End Contractor Workflow

Most commercial and residential construction spreadsheets only track isolated components of a build. This operating system coordinates the **entire project lifecycle**:

```text
Lead Ingestion (Lead_Tracker)
  ↓
Cost Estimation & Markup (Quote_Builder)
  ↓
Contract Award & Baseline (Approved_Jobs + Job_ID)
  ↓
Field Execution Tracking (Labor_Log + Material_Usage)
  ↓
Automated Job Cost Accounting (Job_Cost_Engine)
  ↓
Net Profit & Overrun Alerts (Profit_Dashboard)
  ↓
Client Retention & Margin Analysis (Customer_History)

---

## About The Builder

The approach behind this workbook is straightforward:

**Build the smallest operational model that can preserve the chain between business events and management decisions.**

The goal is not to add software features for their own sake.

For contractor operations, the useful chain is already clear:

```text
Lead
→ Estimate
→ Job
→ Labor & Materials
→ Job Cost
→ Profit
→ Customer History
```

The workbook turns that chain into a reusable Excel-based operating workflow, with centralized assumptions, connected project identifiers, automated calculations, and management outputs.

It is intended for businesses that need more structure than disconnected spreadsheets, but do not need an enterprise platform simply to understand where project revenue, cost, and profit are coming from.

## Common Contractor Problems This Solves

| Problem                                                   | Without This Tool                                                                                                                   | With This Tool                                                                                                                             |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Lead and estimate data become disconnected**            | Sales opportunities and quotation records are maintained separately, making pipeline value and quote conversion harder to evaluate. | `Lead_ID` connects opportunities to estimates, while estimated profit can be derived from the configured target margin.                    |
| **The original project budget disappears after award**    | Once a quote becomes a contract, actual project costs may be tracked without preserving the original estimate as a baseline.        | `Approved_Jobs` carries the quote's estimated total cost into the project record for later variance analysis.                              |
| **Labor and material consumption stay operational only**  | Field hours and material usage are recorded but do not automatically become project-level financial information.                    | `Labor_Log` and `Material_Usage` connect actual consumption to `Job_ID`, standard labor rates, and material costs.                         |
| **Cost overruns are discovered too late**                 | Management sees the final cost after the opportunity to correct execution has largely disappeared.                                  | `Job_Cost_Engine` compares actual total cost with the original estimated cost and triggers an overrun alert using a centralized threshold. |
| **Project profitability is confused with customer value** | A profitable individual job can make a customer appear valuable even when the broader relationship produces weak margins.           | `Customer_History` aggregates project count, revenue, profit contribution, and average margin by customer.                                 |
| **Business rules are duplicated across formulas**         | Tax, overhead, target margin, and warning thresholds can become inconsistent when manually embedded in formulas.                    | `Settings` acts as a single control layer referenced throughout the workbook.                                                              |

The architecture explicitly validates the input/output chain across the workbook and confirms that the global parameters flow into the relevant quote, project-costing, and dashboard calculations. 

## Who This Is For

This system is designed for **project-based contractors, estimators, project managers, operations managers, and owner-operators** who need a connected way to manage project economics without implementing a large enterprise platform.

It fits particularly well when:

* leads and estimates are still handled in spreadsheets;
* project labor is tracked by hours and standard labor rates;
* materials are issued or consumed by project;
* management needs project-level cost and margin visibility;
* customer profitability matters beyond individual project revenue;
* the business needs a repeatable operating workflow rather than another isolated dashboard.

It is **not an ERP replacement, accounting system, payroll system, procurement platform, or enterprise project-management suite**.

The model is designed as a lightweight operational and decision-support layer around the contractor's existing workflow.

No spreadsheet expertise is required to understand the operating sequence. The browser version provides a low-friction way to access the workflow, while the Excel implementation provides the underlying calculation environment.

---

## About

I build lightweight Excel trackers and decision-support tools for situations where there are too many moving parts to hold in one person's head, but not enough complexity to justify a large software implementation.

The central question is:

> **What information needs to be in one place to make the next decision confidently?**

For contractor operations, that means connecting the commercial and operational chain from **Lead → Estimate → Job → Labor & Materials → Job Cost → Profit → Customer History**.

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
