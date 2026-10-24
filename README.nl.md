[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)


# Excel-sjabloon voor projectkostenberekening & calculatiespreadsheet voor aannemers (lead-tot-winst CRM-systeem)
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/9ddabd3f-ffc4-4a6c-937f-fbbc3c2c2e8a" />


![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-green.svg)
![Tool Type](https://img.shields.io/badge/Tool%20Type-Construction%20Job%20Costing%20%26%20Estimating-orange.svg)

**Een alles-in-één Excel-sjabloon voor projectkostenberekening, een calculatiespreadsheet voor aannemers en een lead-tot-winst CRM-rekenmachine, gebouwd voor general contractors, subcontractors en werkbedrijven. Volg de volledige aannemersworkflow van verkooplead → materiaal- en arbeidskostenraming → goedgekeurd projectbudget → veld-uurstaten & materiaalverbruik → raming-vs.-werkelijkheid-afwijking → netto-winstmarge → klantlevensduurwaarde (LTV).**

**Geen aanmelding. Geen installatie. Gratis in uw browser te testen.**

Test de interactieve webapplicatie gratis in uw browser, of download het ontgrendelde Excel-spreadsheetsjabloon voor volledige offline maatwerk—gedekt door een 30-dagen geld-terug-garantie zonder vragen.

> 🌐 **Probeer de web-app:** [Interactieve rekenmachine voor aannemersraming & projectkostenberekening (live demo)](https://hyvoid.github.io/construction-job-costing-excel-template/)  
> 📥 **Het volledige Excel-systeem ophalen:** [Download het bewerkbare Excel-sjabloon voor projectkostenberekening & offerteopbouw](https://www.theseusworkshop.com/l/njmty?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=contractor-operations-profitability)  
> ⚙️ **Architectuur & wiskunde:** [Ga naar de bedrijfslogica & methodiek van projectkostenberekening](#the-business-logic--methodology)


---

## De verbonden bouwbedrijfsketen: van lead tot projectkostenberekening

De meeste bouwspreadsheets lossen slechts een geïsoleerd fragment van het bedrijf op—waarbij uw **verkooppijplijn**, **kostenraming** en **projectkostenberekening op locatie** gevangen blijven in losgekoppelde bestanden. 

Deze aannemerswerkmap is gebouwd rond één enkele, ononderbroken **relationele bedrijfsketen**, verankerd door `Lead_ID` en `Job_ID`:

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

### Eén aannemerswerkmap. Acht geïntegreerde bedrijfsmodules.

| Workflowstap | Excel-/webmodule | Belangrijkste bijgehouden bouw- & financiële kengetallen |
| --- | --- | --- |
| **1. Verkooppijplijn (CRM)** | `Lead_Tracker` | Klantaanvragen, offertekansen, geschatte budgetten, pijplijnveroudering, verantwoordelijkheid calculator, geprojecteerde brutowinst. |
| **2. Raming & inschrijving** | `Quote_Builder` | Materiaalramingshoeveelheden, arbeidsuren, directe COGS, overheadtoerekening, **doelmarge vs. opslag**, offerteprijs inclusief btw. |
| **3. Contractbasislijn** | `Approved_Jobs` | Toegekende bouwcontracten, generatie van een unieke `Job_ID`, contractwaarde, planingsdata, toewijzing projectleider. |
| **4. Veldregistratie** | `Labor_Log` + `Material_Usage` | Dagelijkse/wekelijkse veldploeg-uurstaten, vakarbeidstarieven, materiaalverbruik op de bouwlocatie direct gekoppeld aan `Job_ID`. |
| **5. Projectkostenberekening & WIP** | `Job_Cost_Engine` | Werkelijk materiaal-COGS, werkelijk belaste arbeidskosten, toegepaste overhead, totale projectkosten, **raming-vs.-werkelijkheid-budgetafwijking**. |
| **6. Marge & overschrijdingen** | `Profit_Dashboard` | Werkelijk behaalde brutowinst ($), netto-winstmarge (%), **geautomatiseerde waarschuwingen bij kostenoverschrijding**, bedrijfsbrede P&L van de portefeuille. |
| **7. Klantintelligentie** | `Customer_History` | Multi-project klanthistorie, cumulatieve contractopbrengst, bijdrage aan levenslange winst, gemiddelde marge %, klantsegmentbeoordeling. |

---

## Wat het helpt bijhouden & beslissen: aannemerspijnpunt-naar-oplossing-mapping

In plaats van te wachten tot het belastingseizoen om te ontdekken of uw ploeg op een bouwproject heeft verdiend of verloren, lost deze **winstgevendheidstracker voor aannemers** zeven kritieke operationele blinde vlekken op:

| Te volgen doelkengetal / pijnpunt | De gebruikelijke blinde vlek van de aannemer | Hoe dit projectkostensysteem het oplost & volgt |
| --- | --- | --- |
| **Prioritering van verkoopleads & pijplijnwaarde** | Elke offerteaanvraag even belangrijk behandelen zonder te weten welke kansen de hoogste winstbijdrage opleveren. | `Lead_Tracker` berekent de pijplijnduur en de **geprojecteerde brutowinst** op basis van uw doelmarge, voordat u ramingsuren investeert. |
| **Nauwkeurige offerteprijzen (marge vs. opslag)** | Projecten te laag inschatten door *opslagpercentage* te verwarren met *brutomargepercentage*, of door werkplatsoverhead en btw te vergeten toerekenen. | `Quote_Builder` haalt standaardkosten uit `Material_DB` en `Labor_Rates`, past overhead toe en **berekent terugwerkend de exacte offerte inclusief btw** die nodig is om uw doelmarge te halen. |
| **Behoud van de oorspronkelijke ramingsbasislijn** | De beginraming overschrijven zodra de bouw start, waardoor het onmogelijk wordt te zien waar het budget misging. | `Approved_Jobs` vergrendelt de geschatte kosten van de toegekende offerte en wijst een permanente `Job_ID` toe als onveranderlijke **basislijn voor budgetafwijking**. |
| **Omzetting van veld-uurstaten & materialen in COGS** | Ploeguren op papieren uurstaten en materiaalbonnen in schoenendozen bijhouden zonder ze te koppelen aan specifieke projectbudgetten. | `Labor_Log` en `Material_Usage` koppelen elk velduur en elke materiaaleenheid aan `Job_ID`, door automatisch te vermenigvuldigen met standaardtarieven in de kostenberekeningsmotor. |
| **Realtime waarschuwingen bij kostenoverschrijding & budgetafwijking** | Arbeids- of materiaaloverschrijdingen pas ontdekken nadat het project 100% klaar is en de eindfactuur is betaald. | `Job_Cost_Engine` vergelijkt continu **werkelijke kosten vs. geschatte kosten** en activeert visuele **waarschuwingen bij overschrijding** zodra de afwijking uw drempel overschrijdt. |
| **Geschatte marge vs. werkelijk behaalde nettomarge** | Aannemen dat een project met 30% marge daadwerkelijk 30% heeft opgeleverd, zonder niet-gefactureerde scope-creep en extra ploeguren mee te rekenen. | Scheidt expliciet de **aanvankelijk geprojecteerde marge** van de **werkelijk behaalde marge**, zodat projectleiders marge-erosie in realtime zien. |
| **Levenslange klantwinstgevendheid (klant-LTV)** | Omzetrijke general contractors of vastgoedbeheerders behandelen als “VIP-klanten”, terwijl hun projecten consequent verlies laten lijden. | `Customer_History` aggregeert het totaal aan voltooide projecten, levenslange opbrengst, nettowinstbijdrage en de **gemiddeld werkelijk behaalde marge per klant**. |

---

## Hoe een bouwramings- & projectkostenaudit uit te voeren (quick-startworkflow)

Zet in vier gestructureerde stappen een gestandaardiseerd **systeem voor raming, projectopvolging en kostencontrole** op voor uw aannemersbedrijf:

### Stap 1: globale financiële- & overheadregels configureren

Open het configuratietabblad `Settings` om de financiële waarborgen te definiëren die in heel uw bedrijf worden gebruikt:

* **Btw-tarief (%)** & **overheadtoerekeningstarief (%)**
* **Doel-brutomarge (%)** voor geautomatiseerde offerteberekening
* **Waarschuwingdrempel voor kostenoverschrijding (%)** (bijv. projecten markeren die het budget met meer dan 5% overschrijden)
* **Basisvaluta & wisselkoers**

*Actie:* Verken nu direct de voorgeconfigureerde configuratieconsole in het [gratis browserbesturingssysteem voor aannemers](https://hyvoid.github.io/construction-job-costing-excel-template/).

---

### Stap 2: uw materiaalprijsboek & arbeidstariefkaarten vullen

Stel uw gestandaardiseerde kostendatabases eenmalig in zodat calculators niet langer eenheidsprijzen hoeven te raden:

* **`Material_DB`:** voer materiaal-SKU’s/codes, artikelbeschrijvingen, specificaties, maateenheden (EA, LF, SQFT) en standaard eenheidskosten in.
* **`Labor_Rates`:** definieer vak-/ambachtscategorieën (bijv. leerling, gezellen, voorman, subcontractor) en belaste uurtarieven voor arbeid.

---

### Stap 3: de verbonden lead-tot-projectkostenberekening-workflow uitvoeren

Volg de gestandaardiseerde operationele reeks van 7 stappen voor elk project:

1. **De aanvraag registreren** in `Lead_Tracker` (`Lead_ID`).
2. **De offerte opstellen** in `Quote_Builder` met gebruik van uw materiaal- en arbeidskosten hoofddatabases.
3. **Het contract vergrendelen** in `Approved_Jobs` (`Job_ID`) en mijlpalen vastleggen in `Schedule`.
4. **De velduitvoering registreren** wanneer ploegen uren indienen in `Labor_Log` en materiaal afboeken in `Material_Usage`.
5. **Afwijking & marge automatisch auditen** in `Job_Cost_Engine`, `Profit_Dashboard` en `Customer_History`.

---

### Stap 4: beheren op uitzondering & het Excel-sjabloon downloaden voor live operaties

In plaats van honderden spreadsheetregels te doorzoeken, gebruikt u het dashboard om in te grijpen bij **vastgelopen verkoopleads**, **projecten die kostendrempels overschrijden**, **mijlpalen die achterlopen** en **klanten die de marge aantasten**.

> 💡 **Klaar om uw eigen bouwramingen, ploeguurstaten en projectkostenberekening in dit systeem te draaien?**
> Terwijl de browserversie u in staat stelt de architectuur direct te inspecteren, vereist het beheren van echte bouwprojecten het opslaan van uw eigen materiaalprijsboeken, het wekelijks registreren van veldarbeid en het bijhouden van permanente projectdossiers.
> 👉 **[Download de volledig ontgrendelde werkmap voor aannemersoperaties & projectkostenberekening](https://www.theseusworkshop.com/l/njmty?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=contractor-operations-profitability)** om tarieftabellen aan te passen, een onbeperkt aantal projecten offline te volgen en de volledige controle over uw projectmarges te nemen.

---

## De bedrijfslogica & methodiek

De meeste kleine tot middelgrote aannemers lijden aan **“winstvervaging”**—wanneer een project op papier wordt ingeschreven met een gezonde marge van 35%, maar uiteindelijk slechts 8% nettowinst oplevert aan het eind van het jaar. Dit gebeurt omdat ramingsspreadsheets, veldlogs en boekhoudkassas op incompatibele wiskunde werken.

Om winstvervaging te elimineren zonder aannemers te dwingen complexe enterprise-ERP-software te gebruiken, implementeert deze toolkit een **4-pijler methodiek voor bouwboekhouding en -operaties**:

1. **Relationele primaire-sleutelketen (`Lead_ID → Quote_ID → Job_ID → Customer_ID`):**
In ad-hoc spreadsheets leven ramingen en werkelijkheden in afzonderlijke bestanden zonder structurele koppeling. Dit model handhaaft een relationele database-architectuur binnen Excel: een verkoopkans (`Lead_ID`) wordt omgezet in een gespecificeerde offerte; bij contracttoewijzing wijst `Approved_Jobs` een unieke `Job_ID` toe en legt de oorspronkelijk geschatte kosten vast als bevroren basislijn. Elke downstream uurstatenpost (`Labor_Log`), materiaalafboeking (`Material_Usage`) en planningstaak moet een geldige `Job_ID` refereren, wat 100% traceerbaarheid garandeert van de aanvankelijke offerte tot de uiteindelijke projectkosten.
2. **Omgekeerde-margeprijzen vs. cost-plus opslagwiskunde:**
Een van de duurste wiskundefouten in het aannemerswerk is het verwarren van **opslag** met **brutomarge** (een kostenpost van $1.000 met 25% opslag verhogen geeft een prijs van $1.250, wat slechts een **brutomarge van 20%** is, waardoor stilletjes 5% van de bottom-line winst verdwijnt). In `Quote_Builder` aggregeert de prijsmotor directe materiaalkosten ($M$), directe arbeidskosten ($L$) en toegerekende overhead ($O = (M + L) \times r_{\text{oh}}$), past vervolgens **echte omgekeerde-marge delerwiskunde** toe samen met btw-berekening:

$$\text{Voorgestelde offerte vóór btw} = \frac{\text{Direct materiaal} + \text{Directe arbeid} + \text{Toegerekende overhead}}{1 - \text{Doelmarge \%}}$$



Dit zorgt ervoor dat bij ondertekening van het contract het beoogde brutomargepercentage wiskundig is beschermd.
3. **Standaardkostenberekening & activiteitgerichte veldabsorptie:**
Veldploegen volgen operationele hoeveelheden (**gewerkte uren** en **verbruikte materiaaleenheden**), geen financiële dollars. De kostenberekeningsmotor ontkoppelt velddatainvoer van financiële waardering door `Labor_Log` en `Material_Usage` te koppelen aan de hoofdtabellen met tarieven (`Labor_Rates` en `Material_DB`). Naarmate veldhoeveelheden worden gelogd, berekent de motor dynamisch geabsorbeerde directe kosten en past het globale overheadtarief uit `Settings` toe om de werkelijke **totale projectkosten** weer te geven.
4. **Drempelgestuurde budgetafwijking & LTV-aggregatie:**
In plaats van projectkostenberekening als post-mortem-oefening te behandelen, berekent `Job_Cost_Engine` continu **kostenafwijking ($\Delta C = \text{werkelijke totale kosten} - \text{geschatte basislijnekosten}$)** en **afwijkingspercentage**. Als $\frac{\Delta C}{\text{geschatte kosten}} > \text{overschrijdingsdrempel}$, activeert het systeem een geautomatiseerde uitzonderingstoestand voor onmiddellijke operationele interventie. Tegelijkertijd rollen voltooide `Job_ID`-records op per `Customer_ID` in `Customer_History`, wat de commerciële strategie verschuift van inschrijven op één project naar **levenslange winstbijdrage per klant**.

---

## Waarom de meeste winstgevendheidsfouten van aannemers structureel zijn—geen oordeelsfouten

Ervaren aannemers verliezen zelden geld omdat ze niet weten hoe ze moeten bouwen. Ze verliezen geld omdat **informatie bij elke operationele overdracht afbreekt**:

### Voor: de val van de losgekoppelde aannemersspreadsheet

```text
Sales Lead Notes → Standalone Excel Quote → Signed PDF Contract → Paper Crew Timesheets → Shoebox Material Receipts → Year-End Accountant Tax Summary
                            ↘                                             ↙
                              Zero real-time link between Estimate & Actuals

```

* **Het overdrachtsfalen:** De oorspronkelijke raming kan niet direct worden vergeleken met het werkelijke veldverbruik. Arbeidsuren worden gelogd zonder `Job_ID`. Materiaalbonnen worden in een generiek QuickBooks-kostenrekening gegoten. Tegen de tijd dat de bedrijfseigenaar het winstcijfer ziet, is het project al maanden gesloten.

### Na: één verbonden relationele bedrijfsstroom

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

## Losgekoppelde spreadsheets vs. dit verbonden aannemersbesturingssysteem

| Operationele dimensie | Losgekoppelde aannemersspreadsheets (zonder dit hulpmiddel) | Verbonden projectkostenberekenings- & besturingssysteem (met dit hulpmiddel) |
| --- | --- | --- |
| **Overdracht van verkooplead naar raming** | Leads leven in e-mails of notitieboekjes terwijl offertes in afzonderlijke Excel-bestanden leven, waardoor inschrijfsuccesratio’s en pijplijnwinst onzichtbaar zijn. | `Lead_ID` verbindt verkoopaanvragen direct met `Quote_Builder`, en projecteert de **winstbijdrage van de pijplijn** op basis van doelmarge. |
| **Behoud van de toegekende budgetbasislijn** | Zodra een offerte is gewonnen, bewerken aannemers het ramingsbestand of starten ze een lege tracker, waardoor de oorspronkelijke kostenbasislijn die nodig is voor afwijkingsanalyse wordt gewist. | `Approved_Jobs` vergrendelt de **geschatte totale kosten** van de toegekende offerte onder een unieke `Job_ID` voor naast-elkaar **raming vs. werkelijk** auditen. |
| **Veld-uurstaten & materiaalverbruik** | Ploegarbeidsuren en materiaalafboekingen op de bouwlocatie blijven ruwe operationele notities in plaats van om te zetten in realtime financiële projectkosten. | `Labor_Log` en `Material_Usage` koppelen veldhoeveelheden aan `Job_ID`, door automatisch te vermenigvuldigen met **`Labor_Rates`** en **`Material_DB`** eenheidskosten. |
| **Detectie van kostenoverschrijding midden in het project** | Kostenoverschrijdingen en arbeidsuitbarstingen worden weken na projectvoltooiing ontdekt, wanneer wijzigingsopdrachten niet meer kunnen worden uitgegeven. | `Job_Cost_Engine` volgt live budgetafwijking tegen een gecentraliseerde **kostenoverschrijdingsdrempel**, en activeert directe waarschuwingen terwijl het werk nog loopt. |
| **Marge op één project vs. levenslange klantwaarde** | Een aannemer viert één winstgevend project voor een klant zonder te beseffen dat de vorige vier projecten voor diezelfde klant verlies hebben geleden. | `Customer_History` rollt **totaal projecten, cumulatieve opbrengst, nettowinst $ en gemiddeld werkelijk behaalde marge %** op per klantaccount. |
| **Globale regels voor overhead, btw & marge** | Overheadpercentages, btw-tarieven en opslagformules zijn hardcoded over tientallen tabbladen, wat kostbare fouten bij het opstellen van offertes veroorzaakt. | `Settings` dient als **single source of truth**—het bijwerken van overhead of doelmarge in één cel werkt dynamisch alle downstream modules bij. |

---

## Voor wie dit is: doelrollen voor aannemers & gebruiksvoorbeelden per vak

Dit systeem is gebouwd voor **projectgebaseerde bouwbedrijven, speciale vaksubcontractors, calculators en eigenaren-exploitanten (typisch 1 tot 50 werknemers)** die rigoureuze controle over projectkosten willen zonder $500–$1.500/maand te betalen voor opgeblazen bouw-ERP-software:

* **General contractors (GC’s) & woningbouwers/verbouwers op maat:** gebruik dit als **complete sjabloon voor projectmanagement & projectkostenberekening in Excel voor woning- of bedrijfsbouw** om meerdere actieve bouwprojecten te volgen, verbruikssnelheden van subcontractors/arbeid te monitoren en brutomarges te beschermen van raming tot laatste oplevering.
* **Specialistische vaksubcontractors (HVAC, elektra, loodgieterswerk, dakwerk, tuinarchitectuur, schilderwerk, beton):** gebruik dit als **vakramings- en veldarbeid/materiaaltracker** om eenheidsprijzen te standaardiseren in `Material_DB`, projecten binnen enkele minuten nauwkeurig in te schrijven en te controleren of veldploegen de geschatte arbeidsuren halen of overschrijden.
* **Bouwcalculators & verkoopmanagers:** gebruik dit als **gestandaardiseerde generator voor bouwoffertes & inschrijvingen** gekoppeld aan een **CRM-leadtracker voor aannemers** om fouten in de opslag-vs.-marge-wiskunde te elimineren en prioriteit te geven aan inschrijvingen met hoge marge.
* **Bouwprojectleiders & veldopzichters:** gebruik dit als **tracker voor raming-vs.-werkelijkheid-budgetafwijking en planning** om arbeidsoverschrijdingen en materiaalverspilling midden in het project op te vangen—terwijl er nog tijd is om te corrigeren of een wijzigingsopdracht bij de klant in te dienen.
* **Bouwboekhouders, controllers & part-time CFO’s:** gebruik dit als **operationeel subgrootboek voor projectkostenberekening** dat de kloof overbrugt tussen ruwe veldactiviteit (uurstaten en materiaalverbruik) en high-level boekhoudsoftware voor belastingen zoals QuickBooks of Xero.

*Let op: deze werkmap is **niet** bedoeld om wettelijke loonverwerking, software voor belastingaangifte of enterprise-software voor blauwdrukraming te vervangen. Het is de lichte **operationele en commerciële uitvoeringsmotor** die uw verkooppijplijn, projectramingen, veldkosten en klantwinstgevendheid op één plek verbonden houdt.*

---

## Veelgestelde vragen over scenario’s voor projectkostenberekening & raming

Als uw aannemersbedrijf op zoek is naar een praktisch spreadsheetmodel om een van de volgende operationele hoofdpijnen op te lossen, is dit systeem voor u gebouwd:

* **Raming vs. werkelijk projectkostenberekening in Excel:** *Hoe volg ik werkelijke veldarbeidsuren en materiaalverbruik tegenover mijn oorspronkelijke projectraming om realtime budgetafwijking te zien voordat een project over budget gaat?*
* **Standaardiseren van bouwoffertes & inschrijvingen:** *Hoe bouw ik een herhaalbare offertesjabloon voor aannemers die put uit een materiële hoofdprijslijst en arbeidstariefkaart, en die automatisch overhead, doel-brutomarge en btw meerekent?*
* **Verbind CRM-leads van aannemers aan projectwinstgevendheid:** *Hoe volg ik een bouwproject van het eerste telefoongesprek met de klant (lead) via raming, projectuitvoering, uiteindelijke nettowinst tot terugkerende klanthistorie in één Excel-werkmap?*
* **Winstvervaging identificeren over ploegen & klanten:** *Waarom laat mijn aannemersbedrijf aan het eind van het jaar sterke omzet zien maar weinig contant geld op de bank—en welke specifieke projecten of terugkerende klanten eroderen stilzwijgend onze brutomarge?*

---

## Over Theseus Workshop

Ik bouw lichte, transparante Excel- en browsergebaseerde bedrijfsmodellen voor bedrijven waar er te veel bewegende delen zijn om in één hoofd te houden, maar waar een dure enterprise-software-uitrol meer wrijving creëert dan waarde.

Het centrale ontwerpprincipe achter elk hulpmiddel is simpel:

> **“Wat is het kleinste, schoonste bedrijfsmodel dat de ononderbroken keten tussen dagelijkse veldgebeurtenissen en winstgevende managementbeslissingen behoudt?”**

Voor projectgebaseerde aannemers betekent dat het verenigen van **lead → raming → goedgekeurd project → veldarbeid & materialen → projectkostenafwijking → nettowinst → klanthistorie** binnen één auditbaar, ballastvrij systeem.

---

*Trefwoorden: Excel-sjabloon voor projectkostenberekening, calculatiespreadsheet voor aannemers, tracker voor raming vs. werkelijke kosten, CRM & offertegenerator voor general contractors, winst- & margecalculator voor subcontractors, Excel voor bouwmateriaal- & arbeidslog, werkmap voor projectmanagement & projectkostenberekening.*

---

## Technische details

<details>
<summary>Voor technische reviewers, Excel-practitioners en medewerkers</summary>

### Werkmaparchitectuur

De werkmap bestaat uit **12 kernbladen** georganiseerd in drie functionele lagen. De architectuur scheidt gecontroleerde stamgegevens van operationele records en downstream berekeningen, en handhaaft een gerichte stroom van invoer → berekening → uitvoer. 

| Laag                      | Blad              | Primaire rol                               |
| -------------------------- | ------------------ | ------------------------------------------ |
| **Stamgegevens & controle**  | `Settings`         | Centrale bedrijfsparameters                |
|                            | `Material_DB`      | Standaard materiaalcatalogus en -kosten        |
|                            | `Labor_Rates`      | Standaard arbeidscategorieën en uurtarieven |
| **Operaties & uitvoering** | `Lead_Tracker`     | Kansenpijplijn                       |
|                            | `Quote_Builder`    | Raming- en offerteberekening                      |
|                            | `Approved_Jobs`    | Stamgegevens van toegekende projecten                  |
|                            | `Schedule`         | Mijlpalen en uitvoeringswaarschuwingen            |
|                            | `Labor_Log`        | Werkelijke arbeidsrecords                       |
|                            | `Material_Usage`   | Werkelijk materiaalverbruik                |
| **Motor & analytics**     | `Job_Cost_Engine`  | Werkelijke projectkostenberekening en winstgevendheid   |
|                            | `Profit_Dashboard` | Winstgevendheidsanalyse op managementniveau                    |
|                            | `Customer_History` | Commerciële historie op klantniveau          |

De voornaamste gegevensstroom is:

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

Het centrale ontwerpprincipe is **uniforme hoofdsleutel**: `Job_ID` koppelt het goedgekeurde project aan planningrecords, arbeidsrecords, materiaalverbruik en de projectkostenberekeningsmotor. Het doel is het dateneilandprobleem tussen commerciële planning en projectuitvoering te elimineren. 

### Centrale controleslag

`Settings` is het enige onderhoudspunt van de werkmap.

De gedefinieerde parameters zijn:

| Cel | Parameter               |  Standaard | Gebruikt voor                                 |
| ---- | ----------------------- | -------: | ---------------------------------------- |
| `B2` | Standaard valutasymbool |      `$` | Monetaire presentatie                    |
| `B3` | Btw-tarief                | `13.00%` | Omrekening inclusief / exclusief btw |
| `B4` | Overheadtarief           | `10.00%` | Toerekening van indirecte kosten                 |
| `B5` | Doelmarge           | `25.00%` | Winstgevendheid van offertes en kansen      |
| `B6` | Overschrijdingsdrempel       |  `5.00%` | Waarschuwing projectkosten                     |
| `B7` | USD/CAD-wisselkoers   | `1.0000` | Gereserveerde valutaomrekening             |

Deze waarden zijn bewust gecentraliseerd. De architectuur vereist dat downstream formules `Settings` refereren in plaats van waarden zoals `0.13`, `0.10` of `0.25` hard te coderen. De implementatie-crosscheck bevestigt dat de btw-, overhead-, doelmarge- en overschrijdingsparameters worden doorgegeven aan de juiste berekeningsmodules. 

### Drie vallen die zelfs ervaren aannemers vangen

#### Val 1 — De oorspronkelijke offertemarge behandelen als de huidige projectmarge

**1. Genomen beslissing**

Een project werd geaccepteerd omdat de raming een acceptabele doelmarge liet zien.

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

Houd de geschatte kosten als basislijn en bereken werkelijke kosten onafhankelijk uit `Labor_Log` en `Material_Usage`.

**6. Gecorrigeerde beslissing**

Het project kan worden gemonitord op margeverslechtering zolang corrigerende actie nog mogelijk is.

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

De implementatie definieert contractopbrengst op een exclusief-btw-basis:

```excel
=Contract_Amount/(1+Settings!$B$3)
```

Werkelijke winst wordt vervolgens berekend als contractopbrengst exclusief btw minus werkelijke totale kosten. 

</details>

#### Val 2 — Projectwinstgevendheid beoordelen op basis van alleen directe kosten

**1. Genomen beslissing**

Materiaal- en arbeidskosten lijken onder de contractopbrengst te blijven, dus het project wordt als gezond beschouwd.

**2. Verborgen aanname**

Directe arbeid en materiaal worden behandeld als de volledige economische kosten van het project.

**3. Wat de beslissing verandert**

Indirecte managementkosten zijn niet zichtbaar in directe projectuitgaven, maar moeten nog steeds worden toegerekend.

**4. Waarom de redenering faalt**

Het commerciële model van de werkmap definieert projectkosten als direct materiaal + directe arbeid + toegerekende overhead.

**5. Gecorrigeerde redenering**

Pas het gecentraliseerde overheadtarief consistent toe op de basis van directe kosten.

**6. Gecorrigeerde beslissing**

Projectmarge wordt beoordeeld met dezelfde kostenstructuur die tijdens de raming is gebruikt.

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

De implementatie specificeert hetzelfde overheadconcept voor kostenberekening in de offertefase en voor werkelijke projectkostenberekening. 

</details>

#### Val 3 — Wachten tot projectafsluiting om kostenoverschrijding te detecteren

**1. Genomen beslissing**

Het management wacht tot projectvoltooiing om te bepalen of het project binnen budget is gebleven.

**2. Verborgen aanname**

Kostenafwijking wordt behandeld als een rapportagemetriek in plaats van als een operationeel controlesignaal.

**3. Wat de beslissing verandert**

Een project kan zijn geschatte kosten overschrijden vóór voltooiing, terwijl er nog resterend werk is dat potentieel kan worden beheerst.

**4. Waarom de redenering faalt**

Een late waarschuwing kan het eindresultaat verklaren maar kan kosten die al zijn gemaakt niet beïnvloeden.

**5. Gecorrigeerde redenering**

Vergelijk werkelijke totale kosten met de oorspronkelijk geschatte totale kosten en evalueer de afwijking tegen de gecentraliseerde overschrijdingsdrempel.

**6. Gecorrigeerde beslissing**

Een project dat de geconfigureerde drempel overschrijdt, wordt een uitzondering die aandacht van het management vereist.

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

De waarschuwingslogica evalueert het werkelijke kostenoverschrijdingspercentage tegen `Settings!B6`. Het dashboard telt vervolgens de projecten die als ernstige kostenoverschrijdingen zijn geclassificeerd. 

</details>

### Voorbeeldscenario

Een aannemer accepteert een project met een inclusief-btw contractbedrag van **$113.000**.

Het geconfigureerde btw-tarief is **13%**, dus de exclusief-btw contractopbrengst is:

```text
$113,000 ÷ 1.13
= $100,000
```

De oorspronkelijke offerte bevat:

| Kostencomponent           |   Geschat |
| ------------------------ | ----------: |
| Materialen                |     $42.000 |
| Arbeid                    |     $35.000 |
| Overheadtoerekening      |      $7.700 |
| **Geschatte totale kosten** | **$84.700** |
| **Aanvankelijke winst**       | **$15.300** |
| **Aanvankelijke marge**       |  **15,30%** |

Tijdens de uitvoering accumuleren werkelijke records:

| Kostencomponent        |      Werkelijk |
| --------------------- | ----------: |
| Materialen             |     $47.000 |
| Arbeid                 |     $40.000 |
| Overheadtoerekening   |      $8.700 |
| **Werkelijke totale kosten** | **$95.700** |
| **Werkelijke winst**     |  **$4.300** |
| **Werkelijke marge**     |   **4,30%** |

Het project is daardoor verschoven van een **geprojecteerde marge van 15,30% naar een werkelijke marge van 4,30%**.

De kostenafwijking is:

```text
$95,700 - $84,700
= $11,000
```

Het kostenoverschrijdingspercentage is:

```text
$11,000 ÷ $84,700
≈ 12.99%
```

Met de standaard overschrijdingsdrempel van `5.00%` valt dit project duidelijk buiten normale kostencontrole.

De juiste managementconclusie is **niet simpelweg “het project is nog winstgevend.”**

De nuttigere conclusie is:

> **Het project blijft positief in absolute winst, maar zijn kostenstructuur is wezenlijk verslechterd en vereist interventie.**

De volgende review zou zich moeten richten op waar de afwijking vandaan kwam—arbeidsuren, materiaalverbruik of beide—en of het resterende projectwerk kan worden beheerst.

Dit is precies waarom het systeem zowel de oorspronkelijke raming als de werkelijke uitvoeringskosten behoudt in plaats van de raming te vervangen door het laatste uitgavencijfer. `Job_Cost_Engine` is ontworpen om het verschil tussen deze twee toestanden bloot te leggen. 

### Formulereferentie

<details>
<summary>Berekeningen voor leads en pijplijn</summary>

**Pijplijnduur**

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

**Doel:** Berekent hoe lang een kans actief blijft in de pijplijn, waarbij gewonnen en verloren leads als gesloten worden behandeld.

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

**Doel:** Zet het geschatte projectbudget om in potentiële winst met behulp van de gecentraliseerde doelmarge-aanname in plaats van een hard gecodeerd percentage.

</details>

<details>
<summary>Berekeningen voor offertes en ramingen</summary>

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

**Logica van de voorgestelde offerte**

```excel
=(Estimated_Total_Cost/(1-Settings!$B$5))
*(1+Settings!$B$3)
```

**Logica van de geprojecteerde marge**

```excel
=((Quote_Amount/(1+Settings!$B$3))
-Estimated_Total_Cost)
/
(Quote_Amount/(1+Settings!$B$3))
```

`Quote_Builder` gebruikt `XLOOKUP` om standaard materiaal- en arbeidstarieven op te halen, terwijl `MAP` en `LAMBDA` ervoor zorgen dat de berekeningskolommen dynamisch uitlopen naarmate records groeien. 

</details>

<details>
<summary>Basislijn goedgekeurd project</summary>

**Geschatte totale kosten overgenomen uit de offerte**

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

**Aanvankelijk geprojecteerde marge**

```excel
=Initial_Projected_Profit
/
(Contract_Amount/(1+Settings!$B$3))
```

Het doel is de commerciële economie te behouden op het moment dat de offerte een goedgekeurd project wordt. 

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

Beide werkelijke-kostenstromen worden gegroepeerd per `Job_ID` voordat ze in `Job_Cost_Engine` terechtkomen.

</details>

<details>
<summary>Projectkosten & winstgevendheid</summary>

**Exclusief-btw contractopbrengst**

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

**Werkelijke marge**

```excel
=Actual_Profit/Contract_Revenue
```

**Kostenafwijking**

```excel
=Actual_Total_Cost-Estimated_Total_Cost
```

**Waarschuwing bij kostenoverschrijding**

De overschrijdingsvoorwaarde vergelijkt de werkelijke kostenafwijking met de geconfigureerde `Settings!B6`-drempel in plaats van een vast percentage in de formule in te bedden. 

</details>

<details>
<summary>Planning- en uitvoeringswaarschuwingen</summary>

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

De berekening onderscheidt voltooid werk van onvoltooid werk dat zijn geplande einddatum heeft overschreden. 

</details>

<details>
<summary>Klanthistorie & waardeanalyse</summary>

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

De bronimplementatie gebruikt cumulatieve winstbijdrage en gemiddelde marge als basis voor de classificatie van klantwaarde, in plaats van klanten alleen op omzet te beoordelen. 

</details>

### Validatieregels

| Veld / gebied                    | Regel                                                                                | Foutgedrag                                                                                   |
| ------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `Settings!B3` Btw-tarief          | Moet een geldig percentage zijn dat consistent wordt gebruikt in offerte- en opbrengstberekeningen. | Onjuiste configuratie produceert inconsistente inclusief- en exclusief-btw bedragen.           |
| `Settings!B4` Overheadtarief     | Moet centraal worden onderhouden in plaats van in formules te zijn ingebed.                      | Projectkostenberekening kan inconsistent worden als het elders handmatig wordt overschreven.                        |
| `Settings!B5` Doelmarge     | Moet een geldig percentage zijn dat wordt gebruikt door berekeningen voor leadpotentieel en offertes.           | Onjuiste waarde verandert de geprojecteerde commerciële economie.                                          |
| `Settings!B6` Overschrijdingsdrempel | Moet een geldig percentage zijn dat wordt gebruikt door projectkostenwaarschuwingen.                               | Onjuiste waarde verandert de gevoeligheid van kostenwaarschuwingen.                                          |
| `Material_Code`                 | Moet overeenkomen met een geldig record in `Material_DB`.                                 | Opzoeken kan `#N/A` of nul retourneren wanneer de code ontbreekt of misvormd is.                          |
| `Labor_Code`                    | Moet overeenkomen met een geldig record in `Labor_Rates`.                                 | Uurtarief kan niet correct worden opgehaald.                                                       |
| `Job_ID`                        | Moet het relevante goedgekeurde project refereren.                                       | Arbeids-/materiaaltransacties kunnen losraken van het juiste project.                        |
| `Actual_Hours`                  | Moet numeriek zijn en het werkelijke arbeidsverbruik van het project vertegenwoordigen.                     | Ongeldige waarden vertekenen de werkelijke arbeidskosten.                                                        |
| `Actual_Quantity`               | Moet numeriek zijn en gekoppeld aan de relevante materiaalcode.                             | Ongeldige waarden vertekenen de werkelijke materiaalkosten.                                                            |
| `Completion_Pct`                | Verwacht bereik is `0%–100%`.                                                        | Waarden van of boven 100% worden als voltooid behandeld; onvoltooid te-laat werk genereert een waarschuwing.    |
| Uitvoerbereik dynamische array      | De spill-bestemming moet vrij blijven.                                                | Bezette cellen kunnen `#SPILL!` genereren.                                                           |
| Excel-berekeningsmodus          | Moet **Automatisch** blijven.                                                          | Wijzigingen in `Settings` worden mogelijk niet direct doorgegeven wanneer berekening op Handmatig staat.           |
| Valuta-opmaak             | Monetaire cellen moeten het beoogde valutaformaat gebruiken.                               | Waarden kunnen worden weergegeven met een onjuist valutasymbool, zelfs wanneer het onderliggende getal correct is. |

De implementatie beveelt Excel-gegevensvalidatie aan voor operationele invoervelden waar dat praktisch is, en identificeert `#SPILL!`, handmatige berekeningsmodus, ontbrekende stamgegevenscodes en onjuiste valuta-opmaak expliciet als veelvoorkomende operationele faalmodi. 

De crosscheck van de werkmap verifieert ook dat de globale parameters downstream worden gerefereerd en dat berekeningsformules de belangrijkste bedrijfsaannames niet hard coderen. 

</details>

## Implementatieopmerkingen

### Ontwerp met dynamische arrays

De werkmap is ontworpen voor Microsoft 365 / Excel 2021+ en gebruikt moderne functies voor dynamische arrays waar ze een duidelijk operationeel voordeel bieden.

Kernfuncties omvatten:

* `XLOOKUP`
* `FILTER`
* `UNIQUE`
* `SUMIFS`
* `MAP`
* `LET`
* `LAMBDA`

Het ontwerpdoel is routinematig slepen van formules en handmatig uitbreiden van bereiken te vermijden.

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

Dit is vooral belangrijk voor aannemersworkflows omdat leads, projecten, arbeidsrecords en materiaaltransacties in de loop van de tijd continu worden toegevoegd.

De implementatie gebruikt logica voor dynamische arrays op gebieden zoals pijplijnduur, potentiële winst, offerteberekeningen, planningswaarschuwingen en klantanalyse. 

### Projectsleutelarchitectuur

`Job_ID` is de centrale identifier die de uitvoeringslaag verbindt.

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

Dit creëert één enkele relatie op projectniveau tussen:

* het goedgekeurde contract;
* gepland werk;
* werkelijke arbeid;
* werkelijke materialen;
* werkelijke kosten;
* projectwinstgevendheid.

De architectuur identificeert de uniforme `Job_ID` expliciet als het kernmechanisme om data-eilanden tussen projectuitvoering en financiële analyse te elimineren. 

### Afstemming van projectkosten

De werkmap handhaaft een duidelijk onderscheid tussen **wat werd geschat** en **wat werkelijk gebeurde**.

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

Dit stelt het management in staat te identificeren of de economie van een project is verslechterd omdat het werkelijke resourceverbruik afweek van de oorspronkelijke raming.

`Job_Cost_Engine` fungeert daardoor als de afstemmingslaag tussen commerciële planning en operationele uitvoering. 

### Afhankelijkheidsmodel van het dashboard

`Profit_Dashboard` is geen onafhankelijke rapportagetabel.

Het zit downstream van de berekeningsmotor:

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

Het dashboard vat uitvoeren samen die worden gegenereerd door de onderliggende projectrecords en de berekeningslaag, in plaats van van het management te eisen dat het aparte rapportagecijfers bijhoudt.

De implementatie definieert dashboardmetrieken, waaronder:

* totaal projecten;
* exclusief-btw opbrengst;
* werkelijke totale kosten;
* brutowinst;
* totale marge;
* aantal projecten met ernstige kostenoverschrijding. 

---

## Operationele workflow

Het aanbevolen operationele ritme volgt dezelfde structuur als de werkmaparchitectuur.

### Begin van de dag

Beoordeel:

* `Settings`;
* volledigheid van stamgegevens;
* actieve leads;
* huidige projectstatus;
* openstaande planninguitzonderingen.

Het doel is ervoor te zorgen dat de berekeningsomgeving en operationele invoeren actueel zijn voordat nieuwe records worden ingevoerd. 

### Tijdens operaties

Werk de relevante operationele records bij naarmate bedrijfsgebeurtenissen plaatsvinden:

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

Het principe is **het gebeurtenis vastleggen bij de bron in plaats van het later te reconstrueren**.

### Eind-van-de-dag review

Beoordeel de berekende uitvoeren:

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

Dit verandert de werkmap van een statisch rapportagebestand in een lichtgewicht operationeel controlesysteem.

---

## Aanbevolen reviewcadans

| Frequentie       | Primaire review                          | Aanbevolen focus                                                        |
| --------------- | --------------------------------------- | ------------------------------------------------------------------------ |
| **Dagelijks**       | `Schedule` + uitvoeringslogs             | Te-late taken, ontbrekende arbeids-/materiaalinvoeren                            |
| **Wekelijks**      | `Lead_Tracker` + `Profit_Dashboard`     | Pijplijn, actieve projecten, opkomende kostenoverschrijdingen                        |
| Per project | `Job_Cost_Engine`                       | Geschatte vs. werkelijke kosten en marge                                     |
| **Maandelijks**     | `Profit_Dashboard` + `Customer_History` | Algehele winstgevendheid en klantbijdrage                          |
| **Per kwartaal**   | `Settings` + stamgegevens                | Arbeidstarieven, materiaalkosten, overhead, doelmarge, waarschuwingdrempels |

Het doel van deze cadans is om onderhoud van operationele gegevens en managementreview gescheiden te houden: veld- en projectteams onderhouden de bronrecords, terwijl het management de resulterende berekeningen gebruikt om beslissingen te nemen.

---

## Principes voor gegevensinvoer

### Brongegevens één keer invoeren

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

Het materiaaltarief zou daarom in de hoofdtabel moeten worden onderhouden in plaats van onafhankelijk opnieuw te worden getypt in meerdere berekeningsgebieden.

Hetzelfde principe geldt voor arbeidstarieven en globale bedrijfsaannames.

### Project-ID’s consistent gebruiken

Zodra een goedgekeurd project een `Job_ID` ontvangt, moeten alle daaropvolgende projectuitvoeringsrecords die identifier refereren.

```text
Job_ID: JOB-001
    ├── Schedule
    ├── Labor_Log
    ├── Material_Usage
    └── Job_Cost_Engine
```

Een ontbrekende of onjuist ingevoerde `Job_ID` verbreekt de relatie tussen operationele activiteit en projectwinstgevendheid.

### Berekende uitvoeren niet overschrijven

Berekende kolommen moeten formulegestuurd blijven.

Gebruikers moeten bronrecords bijwerken zoals:

* leadinformatie;
* offerte-invoeren;
* projectstatus;
* arbeidsuren;
* materiaalhoeveelheden;
* planningsdata.

Ze mogen berekende zaken niet handmatig vervangen:

* totale kosten;
* marges;
* kostenafwijking;
* projectwinstgevendheid;
* samenvattingen op klantniveau.

---

## Bekende beperkingen

Deze werkmap is opzettelijk lichtgewicht.

Het mag **niet** worden behandeld als vervanging van:

* boekhoudsoftware;
* loonverwerking;
* enterprise resource planning;
* inkoopsystemen;
* platforms voor field-service management;
* transactionele databases voor meerdere gebruikers.

Het is ontworpen voor operationele controle en besluitvormingsondersteuning waar Excel een passende werkomgeving blijft.

### Excel-versie

De implementatie vertrouwt op moderne Excel-functies en is bedoeld voor **Microsoft 365 / Excel 2021+**.

Oudere Excel-versies ondersteunen mogelijk niet alle functies voor dynamische arrays die door de werkmap worden gebruikt.

### Berekeningsmodus

Excel moet in de modus **Automatisch berekenen** blijven.

Als berekenen handmatig is uitgeschakeld, worden wijzigingen in `Settings` of bronrecords mogelijk niet direct doorgegeven door de berekeningsketen. 

### Spill-ruimte voor dynamische arrays

Dynamische formules vereisen vrije spill-bereiken.

Als een andere waarde een vereist spill-gebied bezet, kan Excel `#SPILL!` retourneren.

De juiste reactie is het spill-bereik te inspecteren in plaats van formules handmatig naar extra cellen te kopiëren. 

### Afhankelijkheid van stamgegevens

`Material_Code` en `Labor_Code` zijn afhankelijk van overeenkomstige records in `Material_DB` en `Labor_Rates`.

Als een code ontbreekt of misvormd is, leveren downstream opzoekacties en kostenberekeningen mogelijk niet de beoogde waarde op. 

---

## Andere tools in deze serie

Een collectie lichtgewicht Excel-hulpmiddelen voor besluitvormingsondersteuning bij operationele planning, kostenberekening, winstgevendheid en bedrijfsanalyse.

* **Excel-toolkit voor ondernemingslonen & jaarlijkse planning van arbeidscapaciteit**
* **Toolkit voor besluitvormingsondersteuning bij industriële energiekosten & TCO**
* **E-commerce-winstmotor & toolkit voor financiële afstemming**
* **Toolkit voor voedselproductiekosten & unit economics**
* **Toolkit voor verhuurderoperaties & leegstandsintelligentie**

---

## Licentie

Dit project wordt uitgebracht onder de **Apache Licentie 2.0**.

U bent vrij om het werk te gebruiken, aan te passen, te reproduceren en te distribueren in overeenstemming met de voorwaarden van de licentie.

Zie het `LICENSE`-bestand van de repository voor de volledige licentievoorwaarden.
