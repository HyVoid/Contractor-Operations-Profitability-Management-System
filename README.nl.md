[ 🌐 عربي ](README.ar.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Contractor Operations & Profitability Management System

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-green.svg)
![Tool Type](https://img.shields.io/badge/Tool%20Type-Contractor%20Operations%20%26%20Profitability-orange.svg)

**Een samenhangend Excel-besturingssysteem voor het beheren van de volledige aannemersworkflow van Lead → Offerte → Project → Arbeid & Materialen → Projectkosten → Winst → Klanthistorie.**

**Geen aanmelding. Geen installatie. Gratis in uw browser.**

Probeer de browserversie gratis. Hebt u de Excel-versie nodig, dan kunt u die kopen met een garantie van 30 dagen, zonder vragen geld terug.
> Beschikbaar in twee formaten: **browserversie (HTML)** en **Excel-versie**.

[Live Demo](https://hyvoid.github.io/Contractor-Operations-Profitability-Management-System/) · [Download Excel](https://www.theseusworkshop.com/l/ftbvja?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=contractor-operations-profitability) · [Technical Details](#technical-details)

## Want to try it?

Dit project is opgenomen in de Construction Toolkit.

Probeer deze en andere lichtgewicht construction-tools 30 dagen gratis — inclusief tools voor het maken van ramingen, het uitbrengen van biedingen, projectkostenberekening en dagelijkse bedrijfsvoering.

→ [Probeer de Construction Toolkit](https://theseusworkshop.com/l/fqtoi/BIDSEASON?utm_source=github&utm_medium=GitHub%20portfolio)

---

## De complete aannemersworkflow

De meeste spreadsheets voor aannemers lossen slechts een deel van de bedrijfsvoering op.

Deze werkmap is opgebouwd rond de **volledige operationele keten**:

```text
Lead
  ↓
Estimate
  ↓
Job
  ↓
Labor & Materials
  ↓
Job Cost
  ↓
Profit
  ↓
Customer History
```

Het doel is niet simpelweg om projecten te volgen. Het doel is om de **commerciële en operationele historie van elk project met elkaar verbonden te houden**.

Een lead komt in de pijplijn.

De lead wordt een raming.

Een succesvolle raming wordt een goedgekeurd project met een unieke `Job_ID`.

Tijdens de uitvoering worden de werkelijke besteding van arbeid en materiaal op dat project geregistreerd.

Die registraties stromen naar de engine voor projectkostenberekening.

De werkelijke projectkosten worden vervolgens vergeleken met de oorspronkelijke projecteconomie om de huidige winstgevendheid te bepalen en kostenoverschrijdingen te identificeren.

Ten slotte accumuleren de resultaten van afgeronde projecten in de klanthistorie, zodat het management kan begrijpen welke klanten in de loop der tijd betekenisvolle omzet en winst hebben opgeleverd.

De implementatie gebruikt afzonderlijke werkbladen voor `Lead_Tracker`, `Quote_Builder`, `Approved_Jobs`, `Labor_Log`, `Material_Usage`, `Job_Cost_Engine`, `Profit_Dashboard` en `Customer_History`, waarbij `Job_ID` dient als de centrale projectidentificatie binnen uitvoering en kostenberekening. 

### Eén werkmap. Eén samenhangende operationele flow.

| Stage                 | Workbook Module                        | What It Manages                                                                              |
| --------------------- | -------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Lead**              | `Lead_Tracker`                         | Customer inquiries, opportunities, budgets, status, estimator ownership                      |
| **Estimate**          | `Quote_Builder`                        | Material requirements, labor hours, estimated cost, overhead, target margin, suggested quote |
| **Job**               | `Approved_Jobs`                        | Contracted projects, `Job_ID`, contract value, dates, project manager, status                |
| **Labor & Materials** | `Labor_Log` + `Material_Usage`         | Actual field labor and material consumption                                                  |
| **Job Cost**          | `Job_Cost_Engine`                      | Actual material cost, labor cost, overhead, total cost, variance                             |
| **Profit**            | `Job_Cost_Engine` + `Profit_Dashboard` | Project profit, margin, cost-overrun alerts, overall profitability                           |
| **Customer History**  | `Customer_History`                     | Historical projects, revenue, profit contribution, average margin, customer value            |

Het resultaat is een praktische workflow om te gaan van **verkoopactiviteit naar projecteconomie naar commerciële intelligentie op klantniveau**, in plaats van losstaande trackers te onderhouden. 

---

## Bij welke beslissing helpt dit u?

Het systeem is opgebouwd rond zeven operationele vragen:

### 1. Welke leads verdienen aandacht?

`Lead_Tracker` registreert de kansenpijplijn en berekent zowel de doorlooptijd van de pijplijn als de potentiële winst op basis van de ingestelde doelmar­ge.

Zo kan de actieve verkooppijplijn niet alleen worden bekeken op basis van het aantal leads, maar ook op basis van de potentiële commerciële bijdrage. 

### 2. Tegen welke prijs moet het project worden geoffreerd?

`Quote_Builder` combineert geraamde materiaalhoeveelheden en arbeidsuren met de centrale `Material_DB` en `Labor_Rates`.

Het model berekent de directe kosten, past de overheadtoerekening toe, leidt de geraamde totale kosten af en werkt terug vanaf de doelmar­ge om een voorgestelde offerte inclusief belasting te produceren. 

### 3. Wat is er feitelijk gecontracteerd?

`Approved_Jobs` legt het officiële projectrecord vast en genereert de unieke `Job_ID` die in de hele uitvoerings- en kostenworkflow wordt gebruikt.

Zo blijft de oorspronkelijke commerciële basis behouden waartegen de werkelijke prestaties later kunnen worden beoordeeld. 

### 4. Wat verbruikt het project feitelijk?

Tijdens de uitvoering worden de veldarbeid geregistreerd in `Labor_Log` en het materiaalverbruik in `Material_Usage`.

Elke registratie is gekoppeld aan de relevante `Job_ID`, zodat feitelijke operationele activiteit projectkosteninformatie wordt. 

### 5. Wijkt de werkelijke projectkost af van de raming?

`Job_Cost_Engine` aggregeert de werkelijke arbeids- en materiaalkosten en past de ingestelde overheadtoerekening toe.

Het project kan dus worden beoordeeld ten opzichte van de oorspronkelijk geraamde kosten, in plaats van alleen naar de opgebouwde bestedingen te kijken. 

### 6. Is het project nog winstgevend?

Het systeem scheidt de **aanvankelijk geprojecteerde mar­ge** van het **werkelijke projectresultaat**.

Dat onderscheid is belangrijk, omdat een project kan beginnen met een acceptabele offerte en later winstgevendheid kan verliezen doordat werkelijke arbeidsuren, materiaalverbruik of andere projectkosten de oorspronkelijke aannames overschrijden.

### 7. Welke klanten hebben betekenisvolle winst opgeleverd?

`Customer_History` aggregeert historische projectactiviteit per klant, inclusief totale projecten, contractomzet, winstbijdrage, gemiddelde winstmar­ge, laatste contractdatum en klantbeoordeling. 

---

## Quick Start-workflow

### Stap 1 — Configureer de besturingslaag

Open `Settings` en stel de bedrijfsaannames in die in de hele werkmap worden gebruikt:

* Belastingtarief
* Overheadpercentage
* Doelmar­ge
* Drempel voor kostenoverschrijding
* Valuta
* Wisselkoers

De architectuur beschouwt `Settings` als de centrale bedieningsconsole. Bedrijfsaannames horen daar te worden onderhouden in plaats van hardgecodeerd in afzonderlijke formules. 

### Stap 2 — Onderhoud de stamgegevens van kosten

Werk bij:

* `Material_DB` — materiaalcodes, omschrijvingen, specificaties, eenheden en standaardkosten.
* `Labor_Rates` — arbeidscategorieën, codes en standaarduurtarieven.

Deze vormen de gemeenschappelijke referentiepunten voor zowel de raming als de werkelijke projectkostenberekening.

### Stap 3 — Doorloop de aannemersworkflow

```text
1. Lead_Tracker
   ↓
2. Quote_Builder
   ↓
3. Approved_Jobs
   ↓
4. Schedule
   ↓
5. Labor_Log + Material_Usage
   ↓
6. Job_Cost_Engine
   ↓
7. Profit_Dashboard + Customer_History
```

De standaard werkwijze volgt dezelfde volgorde: leg de lead vast, genereer de offerte, stel het goedgekeurde project vast, registreer de uitvoering en beoordeel daarna de geautomatiseerde kostenberekening en winstgevendheid. 

### Stap 4 — Beoordeel uitzonderingen, niet alleen totalen

De managementworkflow moet zich richten op:

* vastgelopen leads;
* projecten die afwijken van de geraamde kosten;
* overschreden uitvoeringsmijlpalen;
* dalende projectmar­ges;
* aanzienlijke kostenoverschrijdingen;
* klanten met hoge waarde.

De werkmap is daarom bedoeld om **operationele interventie** te ondersteunen, niet alleen om een historisch rapport te produceren.

---

## Waarom de meeste fouten in aannemerswinstgevendheid geen beoordelingsfouten zijn

Een project kan door ervaren mensen worden geleid en toch een misleidend beeld van de winstgevendheid opleveren.

Het onderliggende probleem is vaak structureel:

```text
Lead information
      ↓
Estimate stored separately
      ↓
Approved contract recorded elsewhere
      ↓
Labor tracked in field records
      ↓
Materials tracked separately
      ↓
Profit reconstructed later
```

Bij elke overdracht kan informatie losraken.

De oorspronkelijke raming is mogelijk niet meer direct vergelijkbaar met het werkelijke verbruik.

Arbeid kan worden geregistreerd zonder de bijbehorende projectidentificatie.

Materiaalverbruik kan operationeel worden gevolgd zonder te worden omgezet in projectkosten.

En het management ontvangt uiteindelijk wellicht een winstgevendheidscijfer zonder een duidelijke weg terug naar de aannames en transacties die eraan ten grondslag liggen.

Dit systeem pakt het probleem aan door een samenhangende keten te creëren:

```text
Lead
  ↓
Estimate
  ↓
Approved Job + Job_ID
  ↓
Labor + Materials
  ↓
Job Cost Engine
  ↓
Actual Profitability
  ↓
Customer History
```

Het onderscheid is belangrijk.

### Voorheen

```text
Sales → Quote → Project Execution → Accounting
          ↘             ↙
           disconnected data
```

### Nu

```text
Lead
 ↓
Estimate
 ↓
Job_ID
 ├── Schedule
 ├── Labor
 └── Materials
       ↓
   Job Cost
       ↓
    Profit
       ↓
Customer History
```

De architectuur brengt inputs en outputs over de hele werkmap expliciet in kaart, zodat elk belangrijk operationeel record een gedefinieerd doel verderop in de keten heeft. 

---

## Wat de werkmap feitelijk oplevert

Dit is niet gepositioneerd als vervanging van een ERP of als een generiek dashboard.

Het is een **lichtgewicht operationeel en beslissingsondersteunend model voor aannemers** dat de informatie verbindt die nodig is om projecteconomie te beheren.

### Het biedt een doorlopend projectrecord

Van:

**Lead → Offerte → Project → Arbeid & Materialen → Projectkosten → Winst**

kan hetzelfde project door zijn commerciële en uitvoeringslevenscyclus worden gevolgd.

### Het behoudt de oorspronkelijke raming als basis

Het goedgekeurde project behoudt de geraamde kosten en de geprojecteerde winstgevendheid, zodat de werkelijke projectprestaties kunnen worden vergeleken met wat oorspronkelijk werd verwacht. 

### Het omzet veldactiviteit in financiële informatie

Arbeidsuren en materiaalhoeveelheden blijven niet als operationele registraties liggen. Ze worden gekoppeld aan gestandaardiseerde tarieven en kosten en vormen uiteindelijk de input voor de engine voor projectkostenberekening. 

### Het scheidt projectwinstgevendheid van klantwinstgevendheid

Een enkel project beantwoordt de vraag:

> **Was dit project winstgevend?**

De klanthistorie beantwoordt de langetermijnvraag:

> **Is deze klant over meerdere projecten heen commercieel waardevol geweest?**

Dat onderscheid ondersteunt betere beslissingen over toekomstige offertes en klantprioritering. 

---

## Over de maker

De aanpak achter deze werkmap is eenvoudig:

**Bouw het kleinste operationele model dat de keten tussen bedrijfsgebeurtenissen en managementbeslissingen kan behouden.**

Het doel is niet om softwarefuncties toe te voegen omwille van de functies zelf.

Voor de bedrijfsvoering van aannemers is de nuttige keten al duidelijk:

```text
Lead
→ Estimate
→ Job
→ Labor & Materials
→ Job Cost
→ Profit
→ Customer History
```

De werkmap maakt van die keten een herbruikbare, op Excel gebaseerde operationele workflow, met gecentraliseerde aannames, gekoppelde projectidentificaties, geautomatiseerde berekeningen en managementuitvoer.

Het is bedoeld voor bedrijven die meer structuur nodig hebben dan losstaande spreadsheets, maar geen enterpriseplatform nodig hebben om simpelweg te begrijpen waar projectomzet, kosten en winst vandaan komen.

## Veelvoorkomende aannemersproblemen die dit oplost

| Problem                                                   | Without This Tool                                                                                                                   | With This Tool                                                                                                                             |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Lead and estimate data become disconnected**            | Sales opportunities and quotation records are maintained separately, making pipeline value and quote conversion harder to evaluate. | `Lead_ID` connects opportunities to estimates, while estimated profit can be derived from the configured target margin.                    |
| **The original project budget disappears after award**    | Once a quote becomes a contract, actual project costs may be tracked without preserving the original estimate as a baseline.        | `Approved_Jobs` carries the quote's estimated total cost into the project record for later variance analysis.                              |
| **Labor and material consumption stay operational only**  | Field hours and material usage are recorded but do not automatically become project-level financial information.                    | `Labor_Log` and `Material_Usage` connect actual consumption to `Job_ID`, standard labor rates, and material costs.                         |
| **Cost overruns are discovered too late**                 | Management sees the final cost after the opportunity to correct execution has largely disappeared.                                  | `Job_Cost_Engine` compares actual total cost with the original estimated cost and triggers an overrun alert using a centralized threshold. |
| **Project profitability is confused with customer value** | A profitable individual job can make a customer appear valuable even when the broader relationship produces weak margins.           | `Customer_History` aggregates project count, revenue, profit contribution, and average margin by customer.                                 |
| **Business rules are duplicated across formulas**         | Tax, overhead, target margin, and warning thresholds can become inconsistent when manually embedded in formulas.                    | `Settings` acts as a single control layer referenced throughout the workbook.                                                              |

De architectuur valideert de input/output-keten over de hele werkmap expliciet en bevestigt dat de globale parameters doorstromen naar de relevante berekeningen voor offertes, projectkosten en dashboards. 

## Voor wie dit bedoeld is

Dit systeem is ontworpen voor **projectgerichte aannemers, calculators, projectmanagers, operationeel managers en eigenaar-ondernemers** die een samenhangende manier nodig hebben om projecteconomie te beheren zonder een groot enterpriseplatform te implementeren.

Het past bijzonder goed wanneer:

* leads en ramingen nog steeds in spreadsheets worden verwerkt;
* projectarbeid wordt gevolgd op basis van uren en standaarduurtarieven;
* materialen per project worden uitgegeven of verbruikt;
* het management inzicht nodig heeft in kosten en mar­ges op projectniveau;
* klantwinstgevendheid belangrijk is naast de omzet van individuele projecten;
* het bedrijf een herhaalbare operationele workflow nodig heeft in plaats van nog een geïsoleerd dashboard.

Het is **geen vervanging van een ERP, boekhoudsysteem, loonadministratie, inkoopplatform of enterprise projectmanagementsuite**.

Het model is ontworpen als een lichtgewicht operationele en beslissingsondersteunende laag rond de bestaande workflow van de aannemer.

Er is geen spreadsheetexpertise nodig om de operationele volgorde te begrijpen. De browserversie biedt een drempelloze manier om de workflow te gebruiken, terwijl de Excel-implementatie de onderliggende rekenomgeving levert.

---

## Over

Ik bouw lichtgewicht Excel-trackers en beslissingsondersteunende tools voor situaties waarin te veel bewegende delen zijn om in één hoofd te houden, maar waarin de complexiteit niet groot genoeg is om een grote software-implementatie te rechtvaardigen.

De centrale vraag is:

> **Welke informatie moet op één plek staan om de volgende beslissing met vertrouwen te kunnen nemen?**

Voor de bedrijfsvoering van aannemers betekent dat het verbinden van de commerciële en operationele keten van **Lead → Offerte → Project → Arbeid & Materialen → Projectkosten → Winst → Klanthistorie**.

---

## Technische details

<details>
<summary>Voor technische reviewers, Excel-professionals en samenwerkingspartners</summary>

### Werkmaparchitectuur

De werkmap bestaat uit **12 kernwerkbladen**, georganiseerd in drie functionele lagen. De architectuur scheidt beheerde stamgegevens van operationele registraties en stroomafwaartse berekeningen, met behoud van een directionele flow van input → berekening → output. 

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

De belangrijkste gegevensstroom is:

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

Het centrale ontwerpprincipe is **Unified Master Key**: `Job_ID` verbindt het goedgekeurde project met schemaregistraties, arbeidsregistraties, materiaalverbruik en de engine voor projectkostenberekening. Dit is bedoeld om het eilandjesprobleem tussen commerciële planning en projectuitvoering te elimineren. 

### Centrale besturingslaag

`Settings` is het enige onderhoudspunt van de werkmap.

De gedefinieerde parameters zijn:

| Cell | Parameter               |  Default | Used For                                 |
| ---- | ----------------------- | -------: | ---------------------------------------- |
| `B2` | Default Currency Symbol |      `$` | Monetary presentation                    |
| `B3` | Tax Rate                | `13.00%` | Tax-inclusive / tax-exclusive conversion |
| `B4` | Overhead Rate           | `10.00%` | Indirect cost allocation                 |
| `B5` | Target Margin           | `25.00%` | Quote and opportunity profitability      |
| `B6` | Overrun Threshold       |  `5.00%` | Project cost warning                     |
| `B7` | USD/CAD Exchange Rate   | `1.0000` | Reserved currency conversion             |

Deze waarden zijn bewust gecentraliseerd. De architectuur vereist dat stroomafwaartse formules naar `Settings` verwijzen in plaats van waarden zoals `0.13`, `0.10` of `0.25` hard te coderen. De kruiscontrole van de implementatie bevestigt dat de parameters voor belasting, overhead, doelmar­ge en overschrijding worden doorgegeven aan de juiste berekeningsmodules. 

### Drie valkuilen die zelfs ervaren aannemers treffen

#### Valkuil 1 — De mar­ge van de oorspronkelijke offerte aanzien voor de huidige projectmar­ge

**1. Genomen beslissing**

Een project werd aangenomen omdat de raming een acceptabele doelmar­ge liet zien.

**2. Verborgen aanname**

De oorspronkelijke raming wordt behandeld alsof deze representatief blijft nadat de uitvoering is begonnen.

**3. Wat de beslissing verandert**

Werkelijke arbeidsuren en materiaalverbruik kunnen de oorspronkelijke aannames overschrijden.

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

**4. Waarom de redenering faalt**

De oorspronkelijke offerte vertegenwoordigt een geplande kostenstructuur. Het is geen bewijs van werkelijk verbruik.

**5. Gecorrigeerde redenering**

Behoud de geraamde kosten als basis en bereken de werkelijke kosten onafhankelijk op basis van `Labor_Log` en `Material_Usage`.

**6. Gecorrigeerde beslissing**

Het project kan worden gevolgd op mar­gedaling terwijl corrigerende actie nog mogelijk is.

<details>
<summary>Formulelogica</summary>

De werkelijke winstgevendheidsketen is:

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

De implementatie definieert contractomzet op basis exclusief belasting:

```excel
=Contract_Amount/(1+Settings!$B$3)
```

De werkelijke winst wordt vervolgens berekend als de contractomzet exclusief belasting minus de werkelijke totale kosten. 

</details>

#### Valkuil 2 — Projectwinstgevendheid beoordelen op alleen directe kosten

**1. Genomen beslissing**

De materiaal- en arbeidskosten lijken onder de contractomzet te blijven, dus het project wordt als gezond beschouwd.

**2. Verborgen aanname**

Directe arbeid en materiaal worden behandeld als de volledige economische kosten van het project.

**3. Wat de beslissing verandert**

Indirecte managementkosten zijn niet zichtbaar in de directe projectuitgaven, maar moeten toch worden toegerekend.

**4. Waarom de redenering faalt**

Het commerciële model van de werkmap definieert projectkosten als direct materiaal + directe arbeid + toegerekende overhead.

**5. Gecorrigeerde redenering**

Pas het gecentraliseerde overheadpercentage consistent toe op de directe kostenbasis.

**6. Gecorrigeerde beslissing**

De projectmar­ge wordt beoordeeld met dezelfde kostenstructuur die bij de raming is gebruikt.

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
<summary>Formulelogica</summary>

```excel
Overhead_Allocation =
    (Actual_Material_Cost + Actual_Labor_Cost)
    * Settings!$B$4

Actual_Total_Cost =
    Actual_Material_Cost
    + Actual_Labor_Cost
    + Overhead_Allocation
```

De implementatie specificeert hetzelfde overheadconcept voor zowel de kostenberekening in de offertefase als de werkelijke projectkostenberekening. 

</details>

#### Valkuil 3 — Wachten tot de projectafsluiting om kostenoverschrijding te detecteren

**1. Genomen beslissing**

Het management wacht tot de afronding van het project om te bepalen of het project binnen budget is gebleven.

**2. Verborgen aanname**

Kostenafwijking wordt behandeld als een rapportagemaatstaf in plaats van als een operationeel besturingssignaal.

**3. Wat de beslissing verandert**

Een project kan zijn geraamde kosten overschrijden vóór afronding, terwijl er nog resterend werk is dat mogelijk kan worden beheerst.

**4. Waarom de redenering faalt**

Een late waarschuwing kan het eindresultaat verklaren, maar kan geen invloed meer uitoefenen op kosten die al zijn gemaakt.

**5. Gecorrigeerde redenering**

Vergelijk de werkelijke totale kosten met de oorspronkelijk geraamde totale kosten en beoordeel de afwijking tegen de gecentraliseerde overschrijdingsdrempel.

**6. Gecorrigeerde beslissing**

Een project dat de ingestelde drempel overschrijdt, wordt een uitzondering die managementaandacht vereist.

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
<summary>Formulelogica</summary>

De implementatie definieert `Cost_Variance` als:

```excel
=Actual_Total_Cost-Estimated_Total_Cost
```

De waarschuwingslogica beoordeelt het werkelijke percentage kostenoverschrijding tegen `Settings!B6`. Het dashboard telt vervolgens de projecten die als ernstige kostenoverschrijding zijn geclassificeerd. 

</details>

### Voorbeeldscenario

Een aannemer neemt een project aan met een contractbedrag inclusief belasting van **$113.000**.

Het ingestelde belastingtarief is **13%**, dus de contractomzet exclusief belasting is:

```text
$113,000 ÷ 1.13
= $100,000
```

De oorspronkelijke offerte bevat:

| Cost Component           |   Estimated |
| ------------------------ | ----------: |
| Materials                |     $42,000 |
| Labor                    |     $35,000 |
| Overhead allocation      |      $7,700 |
| **Estimated Total Cost** | **$84,700** |
| **Initial Profit**       | **$15,300** |
| **Initial Margin**       |  **15.30%** |

Tijdens de uitvoering accumuleren de werkelijke registraties:

| Cost Component        |      Actual |
| --------------------- | ----------: |
| Materials             |     $47,000 |
| Labor                 |     $40,000 |
| Overhead allocation   |      $8,700 |
| **Actual Total Cost** | **$95,700** |
| **Actual Profit**     |  **$4,300** |
| **Actual Margin**     |   **4.30%** |

Het project is dus gegaan van een **geprojecteerde mar­ge van 15,30% naar een werkelijke mar­ge van 4,30%**.

De kostenafwijking is:

```text
$95,700 - $84,700
= $11,000
```

Het percentage kostenoverschrijding is:

```text
$11,000 ÷ $84,700
≈ 12.99%
```

Met de standaarddrempel voor overschrijding van `5.00%` valt dit project duidelijk buiten de normale kostenbeheersing.

De juiste managementconclusie is **niet simpelweg "het project is nog winstgevend."**

De nuttigere conclusie is:

> **Het project blijft positief in absolute winst, maar de kostenstructuur is wezenlijk verslechterd en vereist ingrijpen.**

De volgende evaluatie moet zich richten op waar de afwijking is ontstaan — arbeidsuren, materiaalverbruik of beide — en of het resterende projectwerk kan worden beheerst.

Dit is precies waarom het systeem zowel de oorspronkelijke raming als de werkelijke uitvoeringskosten bewaart, in plaats van de raming te vervangen door het meest recente bestedingscijfer. De `Job_Cost_Engine` is ontworpen om het verschil tussen deze twee toestanden bloot te leggen. 

### Formulereferentie

<details>
<summary>Berekeningen voor leads en pijplijn</summary>

**Doorlooptijd van de pijplijn**

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

**Doel:** Berekent hoe lang een kans actief blijft in de pijplijn, waarbij gewonnen en verloren leads als afgesloten worden behandeld.

**Potentiële winst**

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

**Doel:** Zet het geraamde projectbudget om in potentiële winst met behulp van de gecentraliseerde aanname voor de doelmar­ge in plaats van een hardgecodeerd percentage.

</details>

<details>
<summary>Berekeningen voor offerte en raming</summary>

De offerteberekening volgt:

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

**Logica voor de voorgestelde offerte**

```excel
=(Estimated_Total_Cost/(1-Settings!$B$5))
*(1+Settings!$B$3)
```

**Logica voor de geprojecteerde mar­ge**

```excel
=((Quote_Amount/(1+Settings!$B$3))
-Estimated_Total_Cost)
/
(Quote_Amount/(1+Settings!$B$3))
```

`Quote_Builder` gebruikt `XLOOKUP` om standaard materiaal- en arbeidstarieven op te halen, terwijl `MAP` en `LAMBDA` de berekeningskolommen dynamisch laten uitbreiden naarmate records groeien. 

</details>

<details>
<summary>Basislijn van goedgekeurde projecten</summary>

**Geraamde totale kosten overgenomen uit de offerte**

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

**Aanvankelijk geprojecteerde winst**

```excel
=(Contract_Amount/(1+Settings!$B$3))
-Estimated_Total_Cost
```

**Aanvankelijk geprojecteerde mar­ge**

```excel
=Initial_Projected_Profit
/
(Contract_Amount/(1+Settings!$B$3))
```

Het doel is om de commerciële economie te behouden op het moment dat de offerte een goedgekeurd project wordt. 

</details>

<details>
<summary>Werkelijke arbeids- en materiaalkosten</summary>

**Werkelijke arbeidskosten**

```excel
=Actual_Hours*Hourly_Rate
```

Het uurtarief wordt opgehaald uit `Labor_Rates` op basis van `Labor_Code`. 

**Werkelijke materiaalkosten**

```excel
=Actual_Quantity*Standard_Material_Cost
```

De materiaalkosten worden opgehaald uit `Material_DB` met behulp van de materiaalcode.

Beide stromen van werkelijke kosten worden gegroepeerd op `Job_ID` voordat ze in de `Job_Cost_Engine` komen.

</details>

<details>
<summary>Projectkosten en winstgevendheid</summary>

**Contractomzet exclusief belasting**

```excel
=Contract_Amount/(1+Settings!$B$3)
```

**Werkelijke overheadtoerekening**

```excel
=(Actual_Material_Cost+Actual_Labor_Cost)
*Settings!$B$4
```

**Werkelijke totale kosten**

```excel
=Actual_Material_Cost
+Actual_Labor_Cost
+Overhead_Allocation
```

**Werkelijke winst**

```excel
=Contract_Revenue-Actual_Total_Cost
```

**Werkelijke mar­ge**

```excel
=Actual_Profit/Contract_Revenue
```

**Kostenafwijking**

```excel
=Actual_Total_Cost-Estimated_Total_Cost
```

**Waarschuwing kostenoverschrijding**

De overschrijdingsconditie vergelijkt de werkelijke kostenafwijking met de ingestelde drempel `Settings!B6` in plaats van een vast percentage in de formule op te nemen. 

</details>

<details>
<summary>Planning en uitvoeringswaarschuwingen</summary>

**Dagen te laat**

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

**Taakstatus**

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

De berekening onderscheidt afgerond werk van onafgerond werk dat de geplande einddatum heeft overschreden. 

</details>

<details>
<summary>Klanthistorie en waardeanalyse</summary>

**Klantenlijst**

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

**Totale winstbijdrage**

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

**Classificatie van klantwaarde**

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

De bronimplementatie gebruikt de cumulatieve winstbijdrage en de gemiddelde mar­ge als basis voor de classificatie van klantwaarde, in plaats van klanten alleen op omzet te beoordelen. 

</details>

### Validatieregels

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

De implementatie adviseert Excel-gegevensvalidatie voor operationele invoervelden waar dat praktisch is, en identificeert expliciet `#SPILL!`, handmatige berekeningsmodus, ontbrekende stamgegevenscodes en onjuiste valutaopmaak als veelvoorkomende operationele faalmodi. 

De kruiscontrole van de werkmap verifieert tevens dat de globale parameters stroomafwaarts worden gerefereerd en dat berekeningsformules de belangrijkste bedrijfsaannames niet hard coderen. 

</details>

## Implementatienotities

### Ontwerp met dynamische arrays

De werkmap is ontworpen voor Microsoft 365 / Excel 2021+ en gebruikt moderne dynamische-arrayfuncties waar deze een duidelijk operationeel voordeel bieden.

Kernfuncties zijn:

* `XLOOKUP`
* `FILTER`
* `UNIQUE`
* `SUMIFS`
* `MAP`
* `LET`
* `LAMBDA`

Het ontwerpdoel is om routinematig formules slepen en handmatige bereikuitbreiding te vermijden.

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

Dit is bijzonder belangrijk voor aannemersworkflows, omdat leads, projecten, arbeidsregistraties en materiaaltransacties voortdurend in de loop der tijd worden toegevoegd.

De implementatie gebruikt dynamische-arraylogica op gebieden zoals doorlooptijd van de pijplijn, potentiële winst, offerteberekeningen, planningswaarschuwingen en klantanalyse. 

### Architectuur van de projectsleutel

`Job_ID` is de centrale identificatie die de uitvoeringslaag verbindt.

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

Dit creëert één relatie op projectniveau tussen:

* het goedgekeurde contract;
* gepland werk;
* werkelijke arbeid;
* werkelijke materialen;
* werkelijke kosten;
* projectwinstgevendheid.

De architectuur identificeert de uniforme `Job_ID` expliciet als het kernmechanisme om data-eilanden tussen projectuitvoering en financiële analyse te elimineren. 

### Afstemming van projectkosten

De werkmap handhaaft een duidelijk onderscheid tussen **wat was geraamd** en **wat feitelijk is gebeurd**.

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

Zo kan het management vaststellen of de economie van een project is verslechterd doordat het werkelijke resourceverbruik is afgeweken van de oorspronkelijke raming.

De `Job_Cost_Engine` fungeert daarmee als de afstemmingslaag tussen commerciële planning en operationele uitvoering. 

### Afhankelijkheidsmodel van het dashboard

`Profit_Dashboard` is geen onafhankelijke rapportagetabel.

Het bevindt zich stroomafwaarts van de berekeningsengine:

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

Het dashboard vat de outputs samen die door de onderliggende projectregistraties en de berekeningslaag worden gegenereerd, in plaats van dat het management afzonderlijke rapportagecijfers moet onderhouden.

De implementatie definieert dashboardmetrieken waaronder:

* totale projecten;
* omzet exclusief belasting;
* werkelijke totale kosten;
* brutowinst;
* totale mar­ge;
* aantal projecten met ernstige kostenoverschrijding. 

---

## Operationele workflow

Het aanbevolen werkritme volgt dezelfde structuur als de architectuur van de werkmap.

### Begin van de dag

Beoordeel:

* `Settings`;
* volledigheid van stamgegevens;
* actieve leads;
* huidige projectstatus;
* openstaande planningsuitzonderingen.

Het doel is om ervoor te zorgen dat de rekenomgeving en de operationele inputs actueel zijn voordat nieuwe records worden ingevoerd. 

### Tijdens de operatie

Werk de relevante operationele registraties bij zodra bedrijfsgebeurtenissen zich voordoen:

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

Het principe is **registreer de gebeurtenis bij de bron in plaats van deze later te reconstrueren**.

### Einde van de dag

Beoordeel de berekende outputs:

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

Zo verandert de werkmap van een statisch rapportagebestand in een lichtgewicht operationeel besturingssysteem.

---

## Aanbevolen evaluatieritme

| Frequency       | Primary Review                          | Recommended Focus                                                        |
| --------------- | --------------------------------------- | ------------------------------------------------------------------------ |
| **Daily**       | `Schedule` + execution logs             | Overdue tasks, missing labor/material entries                            |
| **Weekly**      | `Lead_Tracker` + `Profit_Dashboard`     | Pipeline, active projects, emerging cost overruns                        |
| **Per Project** | `Job_Cost_Engine`                       | Estimated vs. actual cost and margin                                     |
| **Monthly**     | `Profit_Dashboard` + `Customer_History` | Overall profitability and customer contribution                          |
| **Quarterly**   | `Settings` + master data                | Labor rates, material costs, overhead, target margin, warning thresholds |

Het doel van dit ritme is om het onderhoud van operationele gegevens en de managementevaluatie gescheiden te houden: veld- en projectteams onderhouden de bronregistraties, terwijl het management de resulterende berekeningen gebruikt om beslissingen te nemen.

---

## Principes voor gegevensinvoer

### Voer brongegevens één keer in

De werkmap is ontworpen rond een **single-source-of-truth**-principe.

Bijvoorbeeld:

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

Het materiaaltarief moet daarom in de stamtabl worden onderhouden in plaats van onafhankelijk opnieuw te worden ingetypt in meerdere berekeningsgebieden.

Hetzelfde principe geldt voor arbeidstarieven en globale bedrijfsaannames.

### Gebruik project-ID's consistent

Zodra een goedgekeurd project een `Job_ID` krijgt, moeten alle daaropvolgende uitvoeringsregistraties van het project naar die identificatie verwijzen.

```text
Job_ID: JOB-001
    ├── Schedule
    ├── Labor_Log
    ├── Material_Usage
    └── Job_Cost_Engine
```

Een ontbrekende of onjuist ingevoerde `Job_ID` verbreekt de relatie tussen operationele activiteit en projectwinstgevendheid.

### Overschrijf berekende outputs niet

Berekende kolommen moeten formulegestuurd blijven.

Gebruikers moeten bronregistraties bijwerken zoals:

* leadinformatie;
* offerte-inputs;
* projectstatus;
* arbeidsuren;
* materiaalhoeveelheden;
* planningsdata.

Ze moeten berekende waarden niet handmatig vervangen:

* totale kosten;
* mar­ges;
* kostenafwijking;
* projectwinstgevendheid;
* samenvattingen op klantniveau.

---

## Bekende beperkingen

Deze werkmap is bewust lichtgewicht.

Het mag **niet** worden beschouwd als vervanging van:

* boekhoudsoftware;
* loonverwerking;
* enterprise resource planning;
* inkoopsystemen;
* platforms voor field-service management;
* transactionele databases voor meerdere gebruikers.

Het is ontworpen voor operationele beheersing en beslissingsondersteuning waar Excel een geschikte werkomgeving blijft.

### Excel-versie

De implementatie is afhankelijk van moderne Excel-functies en is bedoeld voor **Microsoft 365 / Excel 2021+**.

Oudere Excel-versies ondersteunen mogelijk niet alle dynamische-arrayfuncties die de werkmap gebruikt.

### Berekeningsmodus

Excel moet in de modus **Automatische berekening** blijven staan.

Als de berekening handmatig is uitgeschakeld, worden wijzigingen in `Settings` of bronregistraties mogelijk niet onmiddellijk doorgevoerd in de berekeningsketen. 

### Uitbreidingsruimte voor dynamische arrays

Dynamische formules vereisen vrije uitbreidingsbereiken.

Als een andere waarde het vereiste uitbreidingsgebied bezet, kan Excel `#SPILL!` retourneren.

De juiste reactie is om het uitbreidingsbereik te inspecteren in plaats van formules handmatig naar extra cellen te kopiëren. 

### Afhankelijkheid van stamgegevens

`Material_Code` en `Labor_Code` zijn afhankelijk van overeenkomstige records in `Material_DB` en `Labor_Rates`.

Als een code ontbreekt of onjuist is, retourneren de stroomafwaartse opzoek- en kostenberekeningen mogelijk niet de beoogde waarde. 

---

## Andere tools in deze serie

Een verzameling lichtgewicht Excel-tools voor beslissingsondersteuning bij operationele planning, kostenberekening, winstgevendheid en bedrijfsanalyse.

* **Enterprise Payroll & Annual Workforce Capacity Planning Excel Toolkit**
* **Industrial Energy Cost & TCO Decision Support Toolkit**
* **E-commerce Profit Engine & Financial Reconciliation Toolkit**
* **Food Manufacturing Cost & Unit Economics Excel Toolkit**
* **Rental Property Operations & Vacancy Intelligence Excel Toolkit**

---

## Licentie

Dit project is vrijgegeven onder de **Apache License 2.0**.

U bent vrij om het werk te gebruiken, te wijzigen, te reproduceren en te distribueren in overeenstemming met de voorwaarden van de licentie.

Zie het `LICENSE`-bestand van de repository voor de volledige licentievoorwaarden.
