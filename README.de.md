[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Betriebs- und Rentabilitätsmanagementsystem für Auftragnehmer

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-green.svg)
![Tool Type](https://img.shields.io/badge/Tool%20Type-Contractor%20Operations%20%26%20Profitability-orange.svg)

**Ein vernetztes Excel-Betriebssystem zur Steuerung des gesamten Auftragnehmer-Workflows von Interessent → Kalkulation → Auftrag → Arbeitskräfte & Material → Auftragskosten → Gewinn → Kundenhistorie.**

**Keine Registrierung. Keine Installation. Kostenlos in Ihrem Browser.**

Testen Sie die Browserversion kostenlos. Wenn Sie die Excel-Version benötigen, können Sie diese mit 30-tägiger Geld-zurück-Garantie ohne Rückfragen erwerben.
> Verfügbar in zwei Formaten: **Browserversion (HTML)** und **Excel-Version**.

[Live-Demo](https://hyvoid.github.io/Contractor-Operations-Profitability-Management-System/) · [Excel herunterladen](https://www.theseusworkshop.com/l/ftbvja?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=contractor-operations-profitability) · [Technische Details](#technical-details)

---

## Der vollständige Auftragnehmer-Workflow

Die meisten Tabellenkalkulationen für Auftragnehmer lösen nur einen Teil des Geschäfts.

Diese Arbeitsmappe ist um die **gesamte Betriebskette** herum aufgebaut:

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

Ziel ist nicht bloße Projektverfolgung. Es geht darum, die **geschäftliche und betriebliche Historie jedes Projekts verbunden zu halten**.

Ein Interessent gelangt in die Pipeline.

Aus dem Interessenten wird eine Kalkulation.

Eine erfolgreiche Kalkulation wird zu einem bestätigten Auftrag mit einer eindeutigen `Job_ID`.

Während der Ausführung werden tatsächliche Arbeitskräfte- und Materialverbräuche diesem Auftrag zugeordnet.

Diese Datensätze fließen in das Auftragskostenmodul.

Die tatsächlichen Auftragskosten werden dann mit der ursprünglichen Projektkalkulation verglichen, um die aktuelle Rentabilität zu bestimmen und Kostenüberschreitungen zu identifizieren.

Abschließend akkumulieren abgeschlossene Projektergebnisse in der Kundenhistorie, sodass die Geschäftsführung versteht, welche Kunden im Laufe der Zeit bedeutende Umsätze und Gewinne generiert haben.

Die Implementierung verwendet dedizierte Blätter für `Lead_Tracker`, `Quote_Builder`, `Approved_Jobs`, `Labor_Log`, `Material_Usage`, `Job_Cost_Engine`, `Profit_Dashboard` und `Customer_History`, wobei `Job_ID` als zentrale Projektkennung über Ausführung und Kostenrechnung hinweg dient.

### Eine Arbeitsmappe. Ein verbundener Betriebsablauf.

| Stufe                 | Arbeitsmappenmodul                  | Was verwaltet wird                                                                              |
| --------------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------- |
| **Interessent**       | `Lead_Tracker`                      | Kundenanfragen, Chancen, Budgets, Status, zuständiger Kalkulator                                |
| **Kalkulation**       | `Quote_Builder`                     | Materialbedarf, Arbeitsstunden, kalkulierte Kosten, Gemeinkosten, Zielmarge, vorgeschlagenes Angebot |
| **Auftrag**           | `Approved_Jobs`                     | Beauftragte Projekte, `Job_ID`, Vertragswert, Termine, Projektleiter, Status                     |
| **Arbeitskräfte & Material** | `Labor_Log` + `Material_Usage`  | Tatsächlicher Arbeitskräfte- und Materialverbrauch vor Ort                                      |
| **Auftragskosten**    | `Job_Cost_Engine`                   | Tatsächliche Materialkosten, Arbeitskosten, Gemeinkosten, Gesamtkosten, Abweichung              |
| **Gewinn**            | `Job_Cost_Engine` + `Profit_Dashboard` | Projektgewinn, Marge, Kostenüberschreitungs-Warnungen, Gesamtrentabilität                     |
| **Kundenhistorie**    | `Customer_History`                  | Historische Projekte, Umsatz, Gewinnbeitrag, Durchschnittsmarge, Kundenwert                     |

Das Ergebnis ist ein praxistauglicher Workflow, der von **Vertriebsaktivität über Projektökonomie bis hin zu kundenbezogener wirtschaftlicher Intelligenz** führt, anstatt getrennte Tracker zu pflegen.

---

## Bei welchen Entscheidungen hilft Ihnen dieses System?

Das System ist um sieben betriebliche Fragen herum aufgebaut:

### 1. Welche Interessenten verdienen Aufmerksamkeit?

`Lead_Tracker` erfasst die Chancen-Pipeline und berechnet sowohl die Pipeline-Dauer als auch den potenziellen Gewinn auf Basis der konfigurierten Zielmarge.

Dies ermöglicht es, die aktive Vertriebs-Pipeline nicht nur nach Anzahl der Interessenten zu betrachten, sondern auch nach potenziellem wirtschaftlichen Beitrag.

### 2. Zu welchem Preis sollte das Projekt angeboten werden?

`Quote_Builder` kombiniert kalkulierte Materialmengen und Arbeitsstunden mit den zentralen Daten aus `Material_DB` und `Labor_Rates`.

Das Modell berechnet die direkten Kosten, wendet den Gemeinkostenzuschlag an, leitet die kalkulierten Gesamtkosten ab und rechnet von der Zielmarge rückwärts, um ein vorgeschlagenes Angebot inklusive Steuern zu erstellen.

### 3. Was wurde tatsächlich beauftragt?

`Approved_Jobs` etabliert den offiziellen Projektdatensatz und generiert die eindeutige `Job_ID`, die im gesamten Ausführungs- und Kostenworkflow verwendet wird.

Dies bewahrt die ursprüngliche wirtschaftliche Baseline, anhand derer die tatsächliche Leistung später bewertet werden kann.

### 4. Was verbraucht das Projekt tatsächlich?

Während der Ausführung werden Arbeitskräfte vor Ort in `Labor_Log` und Materialverbrauch in `Material_Usage` erfasst.

Jeder Datensatz ist mit der relevanten `Job_ID` verknüpft, sodass tatsächliche betriebliche Aktivität zu projektbezogenen Kostendaten wird.

### 5. Entfernen sich die tatsächlichen Auftragskosten von der Kalkulation?

`Job_Cost_Engine` aggregiert tatsächliche Arbeits- und Materialkosten und wendet den konfigurierten Gemeinkostenzuschlag an.

Das Projekt kann daher anhand seiner ursprünglich kalkulierten Kosten bewertet werden, anstatt nur die akkumulierten Ausgaben zu betrachten.

### 6. Ist das Projekt noch rentabel?

Das System trennt die **ursprünglich prognostizierte Marge** vom **tatsächlichen Projektergebnis**.

Diese Unterscheidung ist wichtig, da ein Projekt mit einem akzeptablen Angebot beginnen und später an Rentabilität verlieren kann, wenn tatsächliche Arbeitsstunden, Materialverbrauch oder andere Projektkosten die ursprünglichen Annahmen überschreiten.

### 7. Welche Kunden haben bedeutenden Gewinn generiert?

`Customer_History` aggregiert historische Projektaktivität nach Kunde, einschließlich Gesamtaufträgen, Vertragsumsatz, Gewinnbeitrag, durchschnittlicher Gewinnmarge, letztem Vertragsdatum und Kundenbewertung.
---

## Schnellstart-Workflow

### Schritt 1 — Steuerungsebene konfigurieren

Öffnen Sie `Settings` und legen Sie die geschäftlichen Annahmen fest, die Arbeitsmappen-weit verwendet werden:

* Steuersatz
* Gemeinkostensatz
* Zielmarge
* Schwelle für Kostenüberschreitungen
* Währung
* Wechselkurs

Die Architektur behandelt `Settings` als zentrale Steuerungskonsole. Geschäftliche Annahmen sollten dort gepflegt werden, anstatt hart in einzelne Formeln kodiert zu werden.

### Schritt 2 — Kostenstammdaten pflegen

Aktualisieren Sie:

* `Material_DB` — Materialcodes, Bezeichnungen, Spezifikationen, Einheiten und Standardkosten.
* `Labor_Rates` — Arbeitskategorien, Codes und Standard-Stundensätze.

Diese werden zu gemeinsamen Referenzpunkten sowohl für die Kalkulation als auch für die tatsächliche Auftragskostenrechnung.

### Schritt 3 — Auftragnehmer-Workflow ausführen

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

Die Standardbetriebsanweisung folgt derselben Reihenfolge: Interessenten erfassen, Angebot erstellen, bestätigten Auftrag anlegen, Ausführung erfassen, dann automatisierte Kostenrechnung und Rentabilität prüfen.

### Schritt 4 — Ausnahmen prüfen, nicht nur Summen

Der Management-Workflow sollte sich auf Folgendes konzentrieren:

* stockende Interessenten;
* Projekte, die von den kalkulierten Kosten abweichen;
* überfällige Ausführungsmeilensteine;
* sinkende Projektmargen;
* signifikante Kostenüberschreitungen;
* Kunden mit hohem Wert.

Die Arbeitsmappe soll daher **betriebliche Eingriffe** unterstützen, nicht bloß einen historischen Bericht erzeugen.

---

## Warum die meisten Rentabilitätsfehler bei Auftragnehmern keine Beurteilungsfehler sind

Ein Projekt kann von erfahrenen Personen gesteuert werden und trotzdem ein irreführendes Rentabilitätsbild erzeugen.

Das grundlegende Problem ist oft strukturell bedingt:

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

Bei jeder Übergabe können Informationen abgetrennt werden.

Die ursprüngliche Kalkulation ist möglicherweise nicht mehr direkt mit dem tatsächlichen Verbrauch vergleichbar.

Arbeitskräfte werden möglicherweise ohne die zugehörige Projektkennung erfasst.

Materialverbrauch wird möglicherweise betrieblich erfasst, ohne in Projektkosten umgerechnet zu werden.

Und das Management erhält möglicherweise irgendwann eine Rentabilitätszahl ohne klaren Rückverfolgbarkeit zu den Annahmen und Transaktionen, die sie erzeugt haben.

Dieses System behebt das Versagen, indem es eine verbundene Kette schafft:

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

Die Unterscheidung ist wichtig.

### Vorher

```text
Sales → Quote → Project Execution → Accounting
          ↘             ↙
           disconnected data
```

### Nachher

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

Die Architektur bildet Eingaben und Ausgaben über die gesamte Arbeitsmappe hinweg explizit ab, sodass jeder wichtige Betriebsdatensatz einen definierten Downstream-Zweck hat.

---

## Was die Arbeitsmappe tatsächlich liefert

Dies ist nicht als ERP-Ersatz oder generisches Dashboard positioniert.

Es ist ein **leichtgewichtiges Betriebs- und Entscheidungsunterstützungsmodell für Auftragnehmer**, das die Informationen verbindet, die zur Steuerung der Projektökonomie erforderlich sind.

### Es liefert einen durchgehenden Projektdatensatz

Von:

**Interessent → Kalkulation → Auftrag → Arbeitskräfte & Material → Auftragskosten → Gewinn**

kann dasselbe Projekt über seinen geschäftlichen und ausführenden Lebenszyklus hinweg verfolgt werden.

### Es bewahrt die ursprüngliche Kalkulation als Baseline

Das bestätigte Projekt behält die kalkulierten Kosten und die prognostizierte Rentabilität, sodass die tatsächliche Projekleistung mit dem ursprünglich Erwarteten verglichen werden kann.

### Es wandelt Feldaktivität in Finanzinformationen um

Arbeitsstunden und Materialmengen werden nicht als betriebliche Datensätze belassen. Sie werden mit standardisierten Sätzen und Kosten verknüpft und werden letztlich Eingaben für das Auftragskostenmodul.

### Es trennt Projektrentabilität von Kundenrentabilität

Ein einzelnes Projekt beantwortet:

> **War dieser Auftrag rentabel?**

Die Kundenhistorie beantwortet die längerfristige Frage:

> **War dieser Kunde über mehrere Aufträge hinweg wirtschaftlich wertvoll?**

Diese Unterscheidung unterstützt bessere Entscheidungen über künftige Angebotskalkulation und Kundenpriorisierung.
---

## Über den Entwickler

Der Ansatz hinter dieser Arbeitsmappe ist unkompliziert:

**Baue das kleinste Betriebsmodell, das die Kette zwischen Geschäftsereignissen und Managemententscheidungen bewahren kann.**

Das Ziel ist nicht, Softwarefunktionen um ihrer selbst willen hinzuzufügen.

Für Auftragnehmerbetriebe ist die nützliche Kette bereits klar:

```text
Lead
→ Estimate
→ Job
→ Labor & Materials
→ Job Cost
→ Profit
→ Customer History
```

Die Arbeitsmappe verwandelt diese Kette in einen wiederverwendbaren Excel-basierten Betriebs-Workflow, mit zentralisierten Annahmen, verbundenen Projektkennungen, automatisierten Berechnungen und Managementausgaben.

Sie ist für Unternehmen gedacht, die mehr Struktur benötigen als getrennte Tabellenkalkulationen, aber keine Unternehmensplattform brauchen, nur um zu verstehen, woher Projektumsatz, -kosten und -gewinn kommen.

## Häufige Auftragnehmer-Probleme, die dies löst

| Problem                                                   | Ohne dieses Werkzeug                                                                                                                   | Mit diesem Werkzeug                                                                                                                             |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Lead- und Angebotsdaten trennen sich**                  | Vertriebschancen und Angebotsdatensätze werden getrennt gepflegt, was die Bewertung von Pipeline-Wert und Angebotsumwandlung erschwert. | `Lead_ID` verknüpft Chancen mit Kalkulationen, während der kalkulierte Gewinn aus der konfigurierten Zielmarge abgeleitet werden kann.            |
| **Das ursprüngliche Projektbudget verschwindet nach der Beauftragung** | Sobald ein Angebot zum Vertrag wird, können tatsächliche Projektkosten ohne die ursprüngliche Kalkulation als Baseline erfasst werden. | `Approved_Jobs` überträgt die kalkulierten Gesamtkosten des Angebots in den Projektdatensatz für spätere Abweichungsanalysen.                     |
| **Arbeitskräfte- und Materialverbrauch bleiben rein betrieblich** | Stunden vor Ort und Materialverbrauch werden erfasst, werden aber nicht automatisch zu projektbezogenen Finanzinformationen.             | `Labor_Log` und `Material_Usage` verknüpfen tatsächlichen Verbrauch mit `Job_ID`, Standard-Arbeitssätzen und Materialkosten.                      |
| **Kostenüberschreitungen werden zu spät entdeckt**        | Das Management sieht die Endkosten, nachdem die Gelegenheit zur Korrektur der Ausführung weitgehend verstrichen ist.                    | `Job_Cost_Engine` vergleicht tatsächliche Gesamtkosten mit den ursprünglich kalkulierten Kosten und löst über einen zentralen Schwellenwert eine Überschreitungswarnung aus. |
| **Projektrentabilität wird mit Kundenwert verwechselt**   | Ein rentabler Einzelauftrag kann einen Kunden wertvoll erscheinen lassen, obwohl die breitere Beziehung schwache Margen hervorbringt.   | `Customer_History` aggregiert Projektanzahl, Umsatz, Gewinnbeitrag und Durchschnittsmarge nach Kunde.                                            |
| **Geschäftsregeln werden über Formeln dupliziert**        | Steuersatz, Gemeinkosten, Zielmarge und Warnschwellen können inkonsistent werden, wenn sie manuell in Formeln eingebettet werden.        | `Settings` dient als einzelne Steuerungsebene, auf die in der gesamten Arbeitsmappe verwiesen wird.                                              |

Die Architektur validiert explizit die Eingabe-/Ausgabekette über die gesamte Arbeitsmappe und bestätigt, dass die globalen Parameter in die relevanten Angebots-, Projektkosten- und Dashboard-Berechnungen einfließen.

## Für wen dies gedacht ist

Dieses System ist für **projektbasierte Auftragnehmer, Kalkulatoren, Projektleiter, Betriebsleiter und Inhaber-Unternehmer** gedacht, die eine verbundene Möglichkeit zur Steuerung der Projektökonomie benötigen, ohne eine große Unternehmensplattform zu implementieren.

Es passt besonders gut, wenn:

* Interessenten und Angebote noch in Tabellenkalkulationen bearbeitet werden;
* Projektarbeitskräfte über Stunden und Standard-Arbeitssätze erfasst werden;
* Material nach Projekt ausgegeben oder verbraucht wird;
* das Management Projektkosten- und Margentransparenz benötigt;
* Kundenrentabilität über den Umsatz einzelner Projekte hinaus bedeutsam ist;
* das Unternehmen einen wiederholbaren Betriebs-Workflow benötigt anstatt eines weiteren isolierten Dashboards.

Es ist **kein ERP-Ersatz, Buchhaltungssystem, Lohnabrechnungssystem, Beschaffungsplattform oder Unternehmens-Projektmanagement-Suite**.

Das Modell ist als leichtgewichtige Betriebs- und Entscheidungsunterstützungsschicht um den bestehenden Workflow des Auftragnehmers herum konzipiert.

Für das Verständnis der Betriebsreihenfolge sind keine Tabellenkalkulations-Kenntnisse erforderlich. Die Browserversion bietet einen reibungsarmen Zugang zum Workflow, während die Excel-Implementierung die zugrunde liegende Berechnungsumgebung bereitstellt.

---

## Über

Ich entwickle leichtgewichtige Excel-Tracker und Entscheidungsunterstützungswerkzeuge für Situationen, in denen es zu viele bewegliche Teile gibt, um sie im Kopf einer Person zu halten, aber nicht genug Komplexität, um eine große Softwareimplementierung zu rechtfertigen.

Die zentrale Frage ist:

> **Welche Informationen müssen an einem Ort sein, um die nächste Entscheidung sicher zu treffen?**

Für Auftragnehmerbetriebe bedeutet das, die geschäftliche und betriebliche Kette von **Interessent → Kalkulation → Auftrag → Arbeitskräfte & Material → Auftragskosten → Gewinn → Kundenhistorie** zu verbinden.

---

## Technische Details

<details>
<summary>Für technische Prüfer, Excel-Praktiker und Mitarbeiter</summary>

### Arbeitsmappen-Architektur

Die Arbeitsmappe besteht aus **12 Kernblättern**, organisiert in drei funktionalen Schichten. Die Architektur trennt kontrollierte Stammdaten von Betriebsdatensätzen und nachgelagerten Berechnungen, während sie einen gerichteten Fluss von Eingabe → Berechnung → Ausgabe aufrechterhält.

| Schicht                      | Blatt               | Primäre Rolle                               |
| ---------------------------- | ------------------- | ------------------------------------------- |
| **Stammdaten & Steuerung**   | `Settings`          | Zentrale Geschäftsparameter                 |
|                              | `Material_DB`       | Standard-Materialkatalog und -kosten        |
|                              | `Labor_Rates`       | Standard-Arbeitskategorien und -stundensätze |
| **Betrieb & Ausführung**     | `Lead_Tracker`      | Chancen-Pipeline                            |
|                              | `Quote_Builder`     | Kalkulations- und Angebotsberechnung        |
|                              | `Approved_Jobs`     | Beauftragter Projektstamm                   |
|                              | `Schedule`          | Meilensteine und Ausführungswarnungen       |
|                              | `Labor_Log`         | Tatsächliche Arbeitsdatensätze              |
|                              | `Material_Usage`    | Tatsächlicher Materialverbrauch             |
| **Engine & Analytik**        | `Job_Cost_Engine`   | Tatsächliche Projektkostenrechnung und Rentabilität |
|                              | `Profit_Dashboard`  | Rentabilitätsanalyse auf Managementebene    |
|                              | `Customer_History`  | Kundenbezogene wirtschaftliche Historie     |

Der prinzipielle Datenfluss ist:

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

Das zentrale Designprinzip ist **Unified Master Key**: `Job_ID` verknüpft den bestätigten Auftrag mit Termindatensätzen, Arbeitsdatensätzen, Materialverbrauch und dem Auftragskostenmodul. Damit soll das Dateninsel-Problem zwischen geschäftlicher Planung und Projektausführung beseitigt werden.

### Zentrale Steuerungsebene

`Settings` ist der einzige Wartungspunkt der Arbeitsmappe.

Die definierten Parameter sind:

| Zelle | Parameter               | Standard | Verwendungszweck                                 |
| ---- | ----------------------- | -------: | ------------------------------------------------ |
| `B2` | Standard-Währungssymbol |      `$` | Monetäre Darstellung                             |
| `B3` | Steuersatz              | `13.00%` | Umrechnung inklusive / exklusive Steuern         |
| `B4` | Gemeinkostensatz        | `10.00%` | Gemeinkostenzuschlag                             |
| `B5` | Zielmarge               | `25.00%` | Angebots- und Chancenrentabilität               |
| `B6` | Überschreitungsschwelle |  `5.00%` | Projektkosten-Warnung                            |
| `B7` | USD/CAD-Wechselkurs     | `1.0000` | Reservierte Währungsumrechnung                   |

Diese Werte werden absichtlich zentralisiert. Die Architektur erfordert, dass nachgelagerte Formeln auf `Settings` verweisen, anstatt Werte wie `0.13`, `0.10` oder `0.25` hart zu kodieren. Die Gegenprobe der Implementierung bestätigt, dass Steuersatz, Gemeinkostensatz, Zielmarge und Überschreitungsschwelle an die entsprechenden Berechnungsmodule propagiert werden.

### Drei Fallen, die selbst erfahrene Auftragnehmer fangen

#### Falle 1 — Die ursprüngliche Angebotsmarge als aktuelle Projektmarge behandeln

**1. Entscheidung getroffen**

Ein Projekt wurde angenommen, weil die Kalkulation eine akzeptable Zielmarge zeigte.

**2. Versteckte Annahme**

Die ursprüngliche Kalkulation wird so behandelt, als bliebe sie nach Beginn der Ausführung repräsentativ.

**3. Was die Entscheidung verändert**

Tatsächliche Arbeitsstunden und Materialverbrauch können die ursprünglichen Annahmen überschreiten.

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

**4. Warum die Begründung scheitert**

Das ursprüngliche Angebot repräsentiert eine geplante Kostenstruktur. Es ist kein Beleg für tatsächlichen Verbrauch.

**5. Korrigierte Begründung**

Behalten Sie die kalkulierten Kosten als Baseline und berechnen Sie tatsächliche Kosten unabhängig aus `Labor_Log` und `Material_Usage`.

**6. Korrigierte Entscheidung**

Das Projekt kann auf Margenverschlechterung überwacht werden, während korrigierendes Handeln noch möglich ist.

<details>
<summary>Formellogik</summary>

Die tatsächliche Rentabilitätskette ist:

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

Die Implementierung definiert Vertragsumsatz auf Nettobasis (ohne Steuern):

```excel
=Contract_Amount/(1+Settings!$B$3)
```

Tatsächlicher Gewinn wird dann als Vertragsumsatz ohne Steuern abzüglich tatsächlicher Gesamtkosten berechnet.

</details>
#### Falle 2 — Projektrentabilität anhand direkter Kosten allein beurteilen

**1. Entscheidung getroffen**

Material- und Arbeitskosten scheinen unter dem Vertragsumsatz zu bleiben, daher wird das Projekt als gesund betrachtet.

**2. Versteckte Annahme**

Direkte Arbeitskräfte und Material werden als die vollständigen wirtschaftlichen Kosten des Projekts behandelt.

**3. Was die Entscheidung verändert**

Indirekte Managementkosten sind in direkten Projektausgaben nicht sichtbar, müssen aber dennoch zugeschlagen werden.

**4. Warum die Begründung scheitert**

Das Geschäftsmodell der Arbeitsmappe definiert Projektkosten als direktes Material + direkte Arbeitskräfte + zugeschlagene Gemeinkosten.

**5. Korrigierte Begründung**

Wenden Sie den zentralen Gemeinkostensatz konsequent auf die Direktkostenbasis an.

**6. Korrigierte Entscheidung**

Die Projektmarge wird mit derselben Kostenstruktur bewertet, die während der Kalkulation verwendet wurde.

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
<summary>Formellogik</summary>

```excel
Overhead_Allocation =
    (Actual_Material_Cost + Actual_Labor_Cost)
    * Settings!$B$4

Actual_Total_Cost =
    Actual_Material_Cost
    + Actual_Labor_Cost
    + Overhead_Allocation
```

Die Implementierung spezifiziert dasselbe Gemeinkostenkonzept für die Kalkulation im Angebotsstadium und für die tatsächliche Auftragskostenrechnung.

</details>

#### Falle 3 — Bis zum Projektabschluss warten, um Kostenüberschreitungen zu erkennen

**1. Entscheidung getroffen**

Das Management wartet bis zum Projektabschluss, um zu bestimmen, ob das Projekt innerhalb des Budgets geblieben ist.

**2. Versteckte Annahme**

Kostenabweichung wird als Berichtsmetrik und nicht als betriebliches Steuersignal behandelt.

**3. Was die Entscheidung verändert**

Ein Projekt kann seine kalkulierten Kosten vor dem Abschluss überschreiten, während noch Restarbeiten vorhanden sind, die potenziell gesteuert werden könnten.

**4. Warum die Begründung scheitert**

Eine späte Warnung mag das Endergebnis erklären, kann aber Kosten, die bereits angefallen sind, nicht mehr beeinflussen.

**5. Korrigierte Begründung**

Vergleichen Sie tatsächliche Gesamtkosten mit den ursprünglich kalkulierten Gesamtkosten und bewerten Sie die Abweichung gegen die zentrale Überschreitungsschwelle.

**6. Korrigierte Entscheidung**

Ein Projekt, das die konfigurierte Schwelle überschreitet, wird zur Ausnahme, die Managementaufmerksamkeit erfordert.

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
<summary>Formellogik</summary>

Die Implementierung definiert `Cost_Variance` als:

```excel
=Actual_Total_Cost-Estimated_Total_Cost
```

Die Warnlogik bewertet den tatsächlichen Kostenüberschreitungsprozentsatz gegen `Settings!B6`. Das Dashboard zählt dann die als schwere Kostenüberschreitungen klassifizierten Projekte.

</details>

### Beispielszenario

Ein Auftragnehmer nimmt ein Projekt mit einem steuerinklusive Vertragsbetrag von **113.000 $** an.

Der konfigurierte Steuersatz beträgt **13 %**, daher ist der Vertragsumsatz ohne Steuern:

```text
$113,000 ÷ 1.13
= $100,000
```

Das ursprüngliche Angebot enthält:

| Kostenkomponente           |   Kalkuliert |
| -------------------------- | -----------: |
| Material                   |     $42,000 |
| Arbeitskräfte              |     $35,000 |
| Gemeinkostenzuschlag       |      $7,700 |
| **Kalkulierte Gesamtkosten** | **$84,700** |
| **Ursprünglicher Gewinn**  | **$15,300** |
| **Ursprüngliche Marge**    |  **15,30 %** |

Während der Ausführung akkumulieren tatsächliche Datensätze:

| Kostenkomponente        |      Tatsächlich |
| ----------------------- | ---------------: |
| Material                |     $47,000 |
| Arbeitskräfte           |     $40,000 |
| Gemeinkostenzuschlag    |      $8,700 |
| **Tatsächliche Gesamtkosten** | **$95,700** |
| **Tatsächlicher Gewinn** |  **$4,300** |
| **Tatsächliche Marge**  |   **4,30 %** |

Das Projekt hat sich damit von einer **prognostizierten Marge von 15,30 % zu einer tatsächlichen Marge von 4,30 %** bewegt.

Die Kostenabweichung beträgt:

```text
$95,700 - $84,700
= $11,000
```

Der Kostenüberschreitungsprozentsatz beträgt:

```text
$11,000 ÷ $84,700
≈ 12.99%
```

Mit der standardmäßigen Überschreitungsschwelle von `5.00%` liegt dieses Projekt klar außerhalb normaler Kostensteuerung.

Die korrekte Managementfolgerung ist **nicht einfach „das Projekt ist noch rentabel“.**

Die nützlichere Folgerung ist:

> **Das Projekt bleibt im absoluten Gewinn positiv, aber seine Kostenstruktur hat sich materiell verschlechtert und erfordert einen Eingriff.**

Die nächste Prüfung sollte sich darauf konzentrieren, woher die Abweichung stammt — Arbeitsstunden, Materialverbrauch oder beides — und ob die verbleibenden Projektarbeiten gesteuert werden können.

Genau aus diesem Grund bewahrt das System sowohl die ursprüngliche Kalkulation als auch die tatsächlichen Ausführungskosten, anstatt die Kalkulation durch die letzte Ausgabenzahl zu ersetzen. `Job_Cost_Engine` ist darauf ausgelegt, den Unterschied zwischen diesen beiden Zuständen offenzulegen.

### Formelreferenz

<details>
<summary>Interessenten- und Pipeline-Berechnungen</summary>

**Pipeline-Dauer**

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

**Zweck:** Berechnet, wie lange eine Chance in der Pipeline aktiv bleibt, wobei gewonnene und verlorene Interessenten als abgeschlossen behandelt werden.

**Potenzieller Gewinn**

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

**Zweck:** Wandelt das kalkulierte Projektbudget mithilfe der zentralen Zielmargen-Annahme in potenziellen Gewinn um, anstatt eines hart kodierten Prozentsatzes.

</details>

<details>
<summary>Angebots- und Kalkulationsberechnungen</summary>

Die Angebotsberechnung folgt:

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

**Logik des vorgeschlagenen Angebots**

```excel
=(Estimated_Total_Cost/(1-Settings!$B$5))
*(1+Settings!$B$3)
```

**Logik der prognostizierten Marge**

```excel
=((Quote_Amount/(1+Settings!$B$3))
-Estimated_Total_Cost)
/
(Quote_Amount/(1+Settings!$B$3))
```

`Quote_Builder` verwendet `XLOOKUP`, um Standard-Material- und Arbeitssätze abzurufen, während `MAP` und `LAMBDA` es den Berechnungsspalten ermöglichen, dynamisch zu überlaufen, wenn sich Datensätze erweitern.

</details>
<details>
<summary>Bestätigte Auftrags-Baseline</summary>

**Aus dem Angebot übernommene kalkulierte Gesamtkosten**

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

**Ursprünglich prognostizierter Gewinn**

```excel
=(Contract_Amount/(1+Settings!$B$3))
-Estimated_Total_Cost
```

**Ursprünglich prognostizierte Marge**

```excel
=Initial_Projected_Profit
/
(Contract_Amount/(1+Settings!$B$3))
```

Zweck ist es, die wirtschaftlichen Eckdaten zum Moment zu bewahren, in dem das Angebot zum bestätigten Auftrag wird.

</details>

<details>
<summary>Tatsächliche Arbeits- und Materialkosten</summary>

**Tatsächliche Arbeitskosten**

```excel
=Actual_Hours*Hourly_Rate
```

Der Stundensatz wird anhand des `Labor_Code` aus `Labor_Rates` abgerufen.

**Tatsächliche Materialkosten**

```excel
=Actual_Quantity*Standard_Material_Cost
```

Die Materialkosten werden anhand des Materialcodes aus `Material_DB` abgerufen.

Beide tatsächlichen Kostenströme werden nach `Job_ID` gruppiert, bevor sie in `Job_Cost_Engine` eingehen.

</details>

<details>
<summary>Auftragskosten und Rentabilität</summary>

**Vertragsumsatz ohne Steuern**

```excel
=Contract_Amount/(1+Settings!$B$3)
```

**Tatsächlicher Gemeinkostenzuschlag**

```excel
=(Actual_Material_Cost+Actual_Labor_Cost)
*Settings!$B$4
```

**Tatsächliche Gesamtkosten**

```excel
=Actual_Material_Cost
+Actual_Labor_Cost
+Overhead_Allocation
```

**Tatsächlicher Gewinn**

```excel
=Contract_Revenue-Actual_Total_Cost
```

**Tatsächliche Marge**

```excel
=Actual_Profit/Contract_Revenue
```

**Kostenabweichung**

```excel
=Actual_Total_Cost-Estimated_Total_Cost
```

**Warnung bei Kostenüberschreitung**

Die Überschreitungsbedingung vergleicht die tatsächliche Kostenabweichung mit der konfigurierten Schwelle `Settings!B6`, anstatt einen festen Prozentsatz in die Formel einzubetten.

</details>

<details>
<summary>Termin- und Ausführungswarnungen</summary>

**Tage überfällig**

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

**Aufgabenstatus**

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

Die Berechnung unterscheidet abgeschlossene Arbeiten von unvollständigen Arbeiten, die ihr geplantes Enddatum überschritten haben.

</details>

<details>
<summary>Kundenhistorie und Wertanalyse</summary>

**Kundenliste**

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

**Gesamter Gewinnbeitrag**

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

**Kundenwert-Klassifizierung**

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

Die Quellimplementierung verwendet kumulierten Gewinnbeitrag und Durchschnittsmarge als Basis für die Kundenwert-Klassifizierung, anstatt Kunden allein nach Umsatz zu bewerten.

</details>

### Validierungsregeln

| Feld / Bereich                    | Regel                                                                                | Fehlerverhalten                                                                                   |
| --------------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `Settings!B3` Steuersatz          | Muss ein gültiger Prozentsatz sein, der konsistent über Angebots- und Umsatzberechnungen hinweg verwendet wird. | Falsche Konfiguration erzeugt inkonsistente Beträge inklusive und exklusive Steuern.              |
| `Settings!B4` Gemeinkostensatz    | Muss zentral gepflegt werden, anstatt in Formeln eingebettet zu sein.                 | Projektkostenrechnung kann inkonsistent werden, wenn sie an anderer Stelle manuell überschrieben wird. |
| `Settings!B5` Zielmarge           | Muss ein gültiger Prozentsatz sein, der von Interessentenpotenzial- und Angebotsberechnungen verwendet wird. | Falscher Wert verändert die prognostizierte wirtschaftliche Ökonomie.                             |
| `Settings!B6` Überschreitungsschwelle | Muss ein gültiger Prozentsatz sein, der von Auftragskosten-Warnungen verwendet wird. | Falscher Wert verändert die Sensitivität der Kostenwarnungen.                                     |
| `Material_Code`                   | Muss einem gültigen Datensatz in `Material_DB` entsprechen.                           | Nachschlagen kann `#N/A` oder Null zurückgeben, wenn der Code fehlt oder fehlerhaft ist.          |
| `Labor_Code`                      | Muss einem gültigen Datensatz in `Labor_Rates` entsprechen.                           | Stundensatz kann nicht korrekt abgerufen werden.                                                   |
| `Job_ID`                          | Muss auf das relevante bestätigte Projekt verweisen.                                  | Arbeits-/Materialtransaktionen können vom korrekten Projekt abgetrennt werden.                    |
| `Actual_Hours`                    | Muss numerisch sein und tatsächlichen Projektarbeitsverbrauch darstellen.             | Ungültige Werte verzerren tatsächliche Arbeitskosten.                                              |
| `Actual_Quantity`                 | Muss numerisch sein und an den relevanten Materialcode gebunden sein.                 | Ungültige Werte verzerren tatsächliche Materialkosten.                                             |
| `Completion_Pct`                  | Erwarteter Bereich ist `0%–100%`.                                                     | Werte bei oder über 100 % werden als abgeschlossen behandelt; unvollständige überfällige Arbeit erzeugt eine Warnung. |
| Ausgabebereich dynamischer Arrays | Das Überlaufziel muss frei bleiben.                                                   | Belegte Zellen können `#SPILL!` erzeugen.                                                          |
| Excel-Berechnungsmodus            | Muss **Automatisch** bleiben.                                                         | Änderungen an `Settings` propagieren möglicherweise nicht sofort, wenn die Berechnung auf Manuell gesetzt ist. |
| Währungsformatierung              | Monetäre Zellen müssen das beabsichtigte Währungsformat verwenden.                    | Werte können mit einem falschen Währungssymbol angezeigt werden, auch wenn die zugrunde liegende Zahl korrekt ist. |

Die Implementierung empfiehlt Excel-Datenvalidierung für betriebliche Eingabefelder, wo praktikabel, und identifiziert `#SPILL!`, manuellen Berechnungsmodus, fehlende Stammdaten-Codes und falsche Währungsformatierung explizit als häufige betriebliche Fehlerarten.

Die Gegenprobe der Arbeitsmappe verifiziert ebenfalls, dass auf die globalen Parameter nachgelagert verwiesen wird und dass Berechnungsformeln die wichtigsten Geschäftsannahmen nicht hart kodieren.

</details>
## Implementierungshinweise

### Design dynamischer Arrays

Die Arbeitsmappe ist für Microsoft 365 / Excel 2021+ ausgelegt und verwendet moderne Funktionen dynamischer Arrays, wo sie einen klaren betrieblichen Vorteil bieten.

Kernfunktionen umfassen:

* `XLOOKUP`
* `FILTER`
* `UNIQUE`
* `SUMIFS`
* `MAP`
* `LET`
* `LAMBDA`

Das Designziel ist es, routinemäßiges Formelziehen und manuelle Bereichserweiterung zu vermeiden.

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

Dies ist für Auftragnehmer-Workflows besonders wichtig, da Interessenten, Aufträge, Arbeitsdatensätze und Materialtransaktionen kontinuierlich über die Zeit hinzugefügt werden.

Die Implementierung verwendet Logik dynamischer Arrays in Bereichen wie Pipeline-Dauer, potenziellem Gewinn, Angebotsberechnungen, Terminwarnungen und Kundenanalyse.

### Projekt-Schlüssel-Architektur

`Job_ID` ist die zentrale Kennung, die die Ausführungsschicht verbindet.

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

Dies schafft eine einzige projektbezogene Beziehung zwischen:

* dem bestätigten Vertrag;
* geplanten Arbeiten;
* tatsächlichen Arbeitskräften;
* tatsächlichen Materialien;
* tatsächlichen Kosten;
* Projektrentabilität.

Die Architektur identifiziert die einheitliche `Job_ID` explizit als zentralen Mechanismus zur Beseitigung von Dateninseln zwischen Projektausführung und Finanzanalyse.

### Projektkosten-Abstimmung

Die Arbeitsmappe wahrt eine klare Unterscheidung zwischen **was kalkuliert wurde** und **was tatsächlich passiert ist**.

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

Dies ermöglicht dem Management zu erkennen, ob sich die Ökonomie eines Projekts verschlechtert hat, weil der tatsächliche Ressourcenverbrauch von der ursprünglichen Kalkulation abgewichen ist.

`Job_Cost_Engine` agiert daher als Abstimmungsschicht zwischen geschäftlicher Planung und betrieblicher Ausführung.

### Dashboard-Abhängigkeitsmodell

`Profit_Dashboard` ist keine unabhängige Berichtstabelle.

Es sitzt nachgelagert zur Berechnungs-Engine:

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

Das Dashboard fasst Ausgaben zusammen, die von den zugrunde liegenden Projektdatensätzen und der Berechnungsschicht erzeugt werden, anstatt vom Management die Pflege separater Berichtszahlen zu verlangen.

Die Implementierung definiert Dashboard-Metriken einschließlich:

* Gesamtprojekte;
* Umsatz ohne Steuern;
* tatsächliche Gesamtkosten;
* Bruttogewinn;
* Gesamtmarge;
* Anzahl Projekte mit schwerer Kostenüberschreitung.

---

## Betriebs-Workflow

Der empfohlene Betriebsrhythmus folgt derselben Struktur wie die Arbeitsmappen-Architektur.

### Tagesbeginn

Prüfen Sie:

* `Settings`;
* Vollständigkeit der Stammdaten;
* aktive Interessenten;
* aktuellen Projektstatus;
* offene Terminausnahmen.

Zweck ist es, sicherzustellen, dass Berechnungsumgebung und betriebliche Eingaben aktuell sind, bevor neue Datensätze eingegeben werden.

### Während des Betriebs

Aktualisieren Sie die relevanten Betriebsdatensätze, wenn Geschäftsereignisse eintreten:

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

Das Prinzip ist **das Ereignis an der Quelle erfassen, anstatt es später zu rekonstruieren**.

### Tagesabschluss-Prüfung

Prüfen Sie die berechneten Ausgaben:

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

Dies verwandelt die Arbeitsmappe von einer statischen Berichtsdatei in ein leichtgewichtiges Betriebssteuerungssystem.

---

## Empfohlener Prüfrhythmus

| Häufigkeit       | Primäre Prüfung                          | Empfohlener Fokus                                                        |
| ---------------- | ---------------------------------------- | ------------------------------------------------------------------------ |
| **Täglich**      | `Schedule` + Ausführungsprotokolle       | Überfällige Aufgaben, fehlende Arbeits-/Materialerfassungen             |
| **Wöchentlich**  | `Lead_Tracker` + `Profit_Dashboard`      | Pipeline, aktive Projekte, sich abzeichnende Kostenüberschreitungen     |
| **Pro Projekt**  | `Job_Cost_Engine`                        | Kalkulierte vs. tatsächliche Kosten und Marge                           |
| **Monatlich**    | `Profit_Dashboard` + `Customer_History`  | Gesamtrentabilität und Kundenbeitrag                                     |
| **Vierteljährlich** | `Settings` + Stammdaten               | Arbeitssätze, Materialkosten, Gemeinkosten, Zielmarge, Warnschwellen    |

Zweck dieses Rhythmus ist es, Pflege der Betriebsdaten und Managementprüfung getrennt zu halten: Feld- und Projektteams pflegen die Quelldatensätze, während das Management die resultierenden Berechnungen für Entscheidungen nutzt.

---

## Prinzipien der Dateneingabe

### Quelldaten einmal eingeben

Die Arbeitsmappe ist um das **Single Source of Truth**-Prinzip herum aufgebaut.

Beispielsweise:

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

Der Materialsatz sollte daher in der Mastertabelle gepflegt werden, anstatt unabhängig in mehrere Berechnungsbereiche neu eingetippt zu werden.

Dasselbe Prinzip gilt für Arbeitssätze und globale Geschäftsannahmen.

### Projekt-IDs konsequent verwenden

Sobald ein bestätigtes Projekt eine `Job_ID` erhält, sollten alle nachfolgenden Projektausführungsdatensätze auf diese Kennung verweisen.

```text
Job_ID: JOB-001
    ├── Schedule
    ├── Labor_Log
    ├── Material_Usage
    └── Job_Cost_Engine
```

Eine fehlende oder falsch eingegebene `Job_ID` bricht die Beziehung zwischen betrieblicher Aktivität und Projektrentabilität.

### Berechnete Ausgaben nicht überschreiben

Berechnungsspalten sollten formelgesteuert bleiben.

Benutzer sollten Quelldatensätze aktualisieren, wie etwa:

* Interessenteninformationen;
* Angebotseingaben;
* Projektstatus;
* Arbeitsstunden;
* Materialmengen;
* Termindaten.

Sie sollten Berechnetes nicht manuell ersetzen:

* Gesamtkosten;
* Margen;
* Kostenabweichung;
* Projektrentabilität;
* kundenbezogene Zusammenfassungen.

---

## Bekannte Einschränkungen

Diese Arbeitsmappe ist absichtlich leichtgewichtig.

Sie sollte **nicht** als Ersatz behandelt werden für:

* Buchhaltungssoftware;
* Lohnabrechnungsverarbeitung;
* Unternehmensressourcenplanung;
* Beschaffungssysteme;
* Field-Service-Management-Plattformen;
* Mehrbenutzer-Transaktionsdatenbanken.

Sie ist für Betriebssteuerung und Entscheidungsunterstützung gedacht, wo Excel eine angemessene Arbeitsumgebung bleibt.

### Excel-Version

Die Implementierung stützt sich auf moderne Excel-Funktionen und ist für **Microsoft 365 / Excel 2021+** bestimmt.

Ältere Excel-Versionen unterstützen möglicherweise nicht alle von der Arbeitsmappe verwendeten Funktionen dynamischer Arrays.

### Berechnungsmodus

Excel sollte im Modus **Automatische Berechnung** bleiben.

Wenn die Berechnung manuell deaktiviert wird, propagieren Änderungen an `Settings` oder Quelldatensätzen möglicherweise nicht sofort durch die Berechnungskette.

### Überlaufraum dynamischer Arrays

Dynamische Formeln erfordern freie Überlaufbereiche.

Wenn ein anderer Wert einen erforderlichen Überlaufbereich belegt, kann Excel `#SPILL!` zurückgeben.

Die angemessene Reaktion ist, den Überlaufbereich zu inspizieren, anstatt Formeln manuell in zusätzliche Zellen zu kopieren.

### Stammdaten-Abhängigkeit

`Material_Code` und `Labor_Code` hängen von entsprechenden Datensätzen in `Material_DB` und `Labor_Rates` ab.

Wenn ein Code fehlt oder fehlerhaft ist, geben die nachgelagerten Nachschlage- und Kostenberechnungen möglicherweise nicht den beabsichtigten Wert zurück.

---

## Weitere Werkzeuge dieser Reihe

Eine Sammlung leichtgewichtiger Excel-Entscheidungsunterstützungswerkzeuge für Betriebsplanung, Kostenrechnung, Rentabilität und Geschäftsanalyse.

* **Enterprise Payroll & Annual Workforce Capacity Planning Excel Toolkit**
* **Industrial Energy Cost & TCO Decision Support Toolkit**
* **E-commerce Profit Engine & Financial Reconciliation Toolkit**
* **Food Manufacturing Cost & Unit Economics Excel Toolkit**
* **Rental Property Operations & Vacancy Intelligence Excel Toolkit**

---

## Lizenz

Dieses Projekt wird unter der **Apache License 2.0** veröffentlicht.

Sie sind frei, das Werk gemäß den Bedingungen der Lizenz zu verwenden, zu modifizieren, zu reproduzieren und zu verteilen.

Siehe die `LICENSE`-Datei des Repositorys für die vollständigen Lizenzbedingungen.
