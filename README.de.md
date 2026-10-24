[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)


# Excel-Vorlage für Baustellenkostenrechnung & Kalkulations-Spreadsheet für Auftragnehmer (Lead-zu-Gewinn-CRM-System)
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/9ddabd3f-ffc4-4a6c-937f-fbbc3c2c2e8a" />


![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-green.svg)
![Tool Type](https://img.shields.io/badge/Tool%20Type-Construction%20Job%20Costing%20%26%20Estimating-orange.svg)

**Eine All-in-One-Excel-Vorlage für Baustellenkostenrechnung, ein Kalkulations-Spreadsheet für Auftragnehmer und ein Lead-zu-Gewinn-CRM-Rechner für Generalunternehmer, Nachunternehmer und Handwerksbetriebe. Verfolgen Sie den kompletten Arbeitsablauf eines Auftragnehmers von Vertriebslead → Material- & Arbeitskostenvoranschlag → freigegebenem Projektbudget → Feld-Stundenzetteln & Materialverbrauch → Soll-Ist-Abweichung → Nettogewinnmarge → Kundenlebenswert (LTV).**

**Keine Registrierung. Keine Installation. Kostenlos im Browser testen.**

Testen Sie die interaktive Webanwendung kostenlos in Ihrem Browser oder laden Sie die vollständig entsperrte Excel-Spreadsheet-Vorlage für komplette Offline-Anpassungen herunter—abgesichert durch eine 30-tägige Geld-zurück-Garantie ohne Rückfragen.

> 🌐 **Web-App testen:** [Interaktiver Bau-Kalkulations- & Baustellenkostenrechner (Live-Demo)](https://hyvoid.github.io/construction-job-costing-excel-template/)  
> 📥 **Vollständiges Excel-System holen:** [Bearbeitbare Excel-Vorlage für Baustellenkostenrechnung & Angebotserstellung herunterladen](https://www.theseusworkshop.com/l/njmty?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=contractor-operations-profitability)  
> ⚙️ **Architektur & Mathematik:** [Zur Geschäftslogik & Methodik der Baustellenkostenrechnung](#the-business-logic--methodology)


---

## Die verbundene betriebliche Prozesskette im Bau: vom Lead zur Baustellenkostenrechnung

Die meisten Bau-Spreadsheets lösen nur ein isoliertes Fragment des Unternehmens—und lassen Ihre **Vertriebspipeline**, **Kalkulationsaufstellung** und **Baustellenkostenrechnung vor Ort** in getrennten Dateien gefangen. 

Diese Arbeitsmappe ist um eine einzige, ununterbrochene **relationale Prozesskette** herum aufgebaut, verankert durch `Lead_ID` und `Job_ID`:

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

### Eine Auftragnehmer-Arbeitsmappe. Acht integrierte Betriebsmodule.

| Prozessstufe | Excel-/Web-Modul | Wichtigste erfasste Bau- & Finanzkennzahlen |
| --- | --- | --- |
| **1. Vertriebspipeline (CRM)** | `Lead_Tracker` | Kundenanfragen, Angebotschancen, geschätzte Budgets, Pipeline-Alterung, Zuständigkeit des Kalkulators, prognostizierter Rohertrag. |
| **2. Kalkulation & Angebotsabgabe** | `Quote_Builder` | Materialaufstellungen, Arbeitsstunden, direkte COGS, Gemeinkostenzuteilung, **Zielmarge vs. Aufschlag**, steuerinklusive Angebotssumme. |
| **3. Vertragsbaseline** | `Approved_Jobs` | Vergebene Bauaufträge, eindeutige `Job_ID`-Generierung, Auftragswert, Termine, Zuständigkeit des Projektleiters. |
| **4. Felderfassung** | `Labor_Log` + `Material_Usage` | Tägliche/wöchentliche Stundenzettelstunden der Kolonnen, Stundenlohnsätze der Gewerke, Materialverbrauch auf der Baustelle, direkt mit `Job_ID` verknüpft. |
| **5. Baustellenkostenrechnung & WIP** | `Job_Cost_Engine` | Tatsächliche Material-COGS, tatsächliche belastete Arbeitskosten, zugeteilte Gemeinkosten, gesamte Projektkosten, **Soll-Ist-Abweichung des Budgets**. |
| **6. Margen & Überschreitungen** | `Profit_Dashboard` | Realisierter Rohertrag ($), Nettogewinnmarge (%), **automatische Kostenüberschreitungs-Warnungen**, portfolioübergreifende GuV des Unternehmens. |
| **7. Kundenintelligenz** | `Customer_History` | Projektübergreifende Kundenhistorie, kumulierte Auftragserlöse, lebenslanger Gewinnbeitrag, durchschnittliche Marge %, Kundenstufen-Einstufung. |

---

## Was es zu verfolgen und entscheiden hilft: Zuordnung von Auftragnehmer-Schmerzpunkten zu Lösungen

Anstatt bis zur Steuersaison zu warten, um zu erfahren, ob Ihre Kolonne an einem Bau Geld verdient oder verloren hat, behebt dieser **Rentabilitätstracker für Auftragnehmer** sieben kritische betriebliche blinde Flecken:

| Ziel-Kennzahl / Schmerzpunkt | Der häufige blinde Fleck von Auftragnehmern | Wie dieses Baustellenkostenrechnungssystem ihn löst & verfolgt |
| --- | --- | --- |
| **Priorisierung von Vertriebsleads & Pipeline-Wert** | Jede Angebotsanfrage gleich verfolgen, ohne zu wissen, welche Chancen den höchsten Gewinnbeitrag bringen. | `Lead_Tracker` berechnet Pipeline-Dauer und **prognostizierten Rohertrag** auf Basis Ihrer Zielmarge, bevor Sie Kalkulationsstunden investieren. |
| **Genaue Angebotspreise (Marge vs. Aufschlag)** | Aufträge unter Wert kalkulieren durch Verwechslung von *Aufschlag %* mit *Rohertragsmarge %*, oder Vergessen von Betriebsgemeinkosten und Umsatzsteuer. | `Quote_Builder` zieht Standardkosten aus `Material_DB` und `Labor_Rates`, wendet Gemeinkosten an und **kalkuliert rückwärts das exakte steuerinklusive Angebot**, das Ihre Zielmarge trifft. |
| **Erhaltung der ursprünglichen Kalkulationsbaseline** | Überschreiben der ersten Kalkulation, sobald der Bau beginnt, was es unmöglich macht zu sehen, wo das Budget aus dem Ruder lief. | `Approved_Jobs` friert die geschätzten Kosten des vergebenen Angebots ein und vergibt eine dauerhafte `Job_ID` als unveränderliche **Baseline für Budgetabweichungen**. |
| **Umwandlung von Feld-Stundenzetteln & Material in COGS** | Kolonnenstunden auf Papier-Stundenzetteln und Materialbelege in Schuhkartons verfolgen, ohne sie mit konkreten Projektbudgets zu verknüpfen. | `Labor_Log` und `Material_Usage` binden jede Feldstunde und jede Materialeinheit an `Job_ID` und multiplizieren automatisch mit den Standardsätzen im Kostenrechnungsmodul. |
| **Echtzeit-Warnungen zu Kostenüberschreitungen & Budgetabweichungen** | Kostenüberschreitungen bei Arbeit oder Material erst entdecken, wenn der Auftrag zu 100 % fertig ist und die Schlussrechnung bezahlt wurde. | `Job_Cost_Engine` vergleicht fortlaufend **Ist-Kosten vs. Soll-Kosten** und löst visuelle **Überschreitungswarnungen** aus, sobald die Abweichung Ihre Schwelle durchbricht. |
| **Geschätzte Marge vs. realisierte Nettomarge** | Annehmen, dass ein mit 30 % Marge kalkulierter Auftrag tatsächlich 30 % lieferte, und dabei nicht abgerechnete Zusatzarbeiten und zusätzliche Kolonnenstunden ignorieren. | Trennt explizit **ursprünglich prognostizierte Marge** von **tatsächlich realisierter Marge**, damit Projektleiter Margenerosion in Echtzeit sehen. |
| **Kundenlebenswert-Rentabilität (Client-LTV)** | Umsatzstarke Generalunternehmer oder Hausverwalter als „VIP-Kunden“ behandeln, obwohl ihre Projekte konsequent Geld verlieren. | `Customer_History` aggregiert abgeschlossene Aufträge insgesamt, Lebenszeit-Erlöse, Nettogewinnbeitrag und **durchschnittlich realisierte Marge pro Kunde**. |

---

## Wie man ein Bau-Kalkulations- & Baustellenkostenrechnungs-Audit durchführt (Schnellstart-Ablauf)

Richten Sie ein standardisiertes **Kalkulations-, Auftragsverfolgungs- und Kostenkontrollsystem** für Ihr Bauunternehmen in vier strukturierten Schritten ein:

### Schritt 1: Globale Finanz- & Gemeinkostenregeln konfigurieren

Öffnen Sie das Steuerregister `Settings`, um die finanziellen Leitplanken für Ihr gesamtes Unternehmen zu definieren:

* **Umsatzsteuersatz (%)** & **Gemeinkostenzuteilungssatz (%)**
* **Ziel-Rohertragsmarge (%)** für automatische Angebotskalkulation
* **Schwelle für Kostenüberschreitungswarnung (%)** (z. B. Aufträge markieren, die das Budget um mehr als 5 % übersteigen)
* **Basiswährung & Wechselkurs**

*Aktion:* Erkunden Sie die vorkonfigurierte Steuerkonsole jetzt im [kostenlosen Browser-Betriebssystem für Auftragnehmer](https://hyvoid.github.io/construction-job-costing-excel-template/).

---

### Schritt 2: Materialpreisbuch & Arbeitslohnsatz-Karten füllen

Legen Sie Ihre standardisierten Kostendatenbanken einmal an, damit Kalkulatoren aufhören, Einheitenpreise zu schätzen:

* **`Material_DB`:** Material-SKUs/Codes, Artikelbeschreibungen, Spezifikationen, Maßeinheiten (EA, LF, SQFT) und Standard-Einheitenkosten erfassen.
* **`Labor_Rates`:** Gewerke/Handwerkskategorien (z. B. Azubi, Geselle, Vorarbeiter, Nachunternehmer) und belastete Stundenlohnsätze definieren.

---

### Schritt 3: Den verbundenen Lead-zu-Baustellenkostenrechnung-Ablauf ausführen

Befolgen Sie die standardisierte 7-schrittige Betriebsreihenfolge für jedes Projekt:

1. **Anfrage protokollieren** in `Lead_Tracker` (`Lead_ID`).
2. **Angebot erstellen** in `Quote_Builder` mit Ihren Material- und Arbeitshauptdatenbanken.
3. **Vertrag fixieren** in `Approved_Jobs` (`Job_ID`) und Meilensteine in `Schedule` setzen.
4. **Feldausführung protokollieren**, wenn Kolonnen Stunden in `Labor_Log` melden und Material in `Material_Usage` ziehen.
5. **Abweichung & Marge prüfen** automatisch in `Job_Cost_Engine`, `Profit_Dashboard` und `Customer_History`.

---

### Schritt 4: Nach Ausnahme steuern & Excel-Vorlage für den Live-Betrieb herunterladen

Anstatt Hunderte von Spreadsheet-Zeilen zu durchforsten, nutzen Sie das Dashboard, um bei **stockenden Vertriebsleads**, **Aufträgen, die Kostenüberschreitungsschwellen durchbrechen**, **überfälligen Meilensteinen** und **margen zehrenden Kunden** einzugreifen.

> 💡 **Bereit, eigene Baukalkulationen, Kolonnen-Stundenzettel und Baustellenkostenrechnung in diesem System zu betreiben?**
> Während die Browserversion Ihnen erlaubt, die Architektur sofort zu inspizieren, erfordert die Steuerung echter Bauprojekte das Speichern Ihrer eigenen Materialpreisbücher, das wöchentliche Protokollieren von Feldarbeit und das Führen dauerhafter Projektakten.
> 👉 **[Vollständig entsperrte Auftragnehmer-Betriebs- & Baustellenkostenrechnungs-Excel-Vorlage herunterladen](https://www.theseusworkshop.com/l/njmty?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=contractor-operations-profitability)**, um Satztabellen anzupassen, unbegrenzte Aufträge offline zu verfolgen und die volle Kontrolle über Ihre Projektmargen zu übernehmen.

---

## Die Geschäftslogik & Methodik

Die meisten kleinen bis mittelgroßen Auftragnehmer leiden unter **„Gewinnschwund“**—wobei ein Projekt auf dem Papier mit einer gesunden 35-%-Marge kalkuliert wird, am Jahresende aber nur 8 % Nettogewinn abwirft. Das passiert, weil Kalkulations-Spreadsheets, Feldprotokolle und Buchhaltungsbücher mit inkompatibler Mathematik arbeiten.

Um Gewinnschwund zu beseitigen, ohne Auftragnehmer in komplexe Enterprise-ERP-Software zu zwingen, implementiert diese Werkzeugsammlung eine **4-Säulen-Methodik für Bau-Buchhaltung und Betrieb**:

1. **Relationale Primärschlüssel-Verkettung (`Lead_ID → Quote_ID → Job_ID → Customer_ID`):**
In Ad-hoc-Spreadsheets leben Schätzungen und Ist-Werte in getrennten Dateien ohne strukturelle Verbindung. Dieses Modul erzwingt eine relationale Datenbankarchitektur innerhalb von Excel: eine Vertriebschance (`Lead_ID`) wird zu einem positionierten Angebot; bei Auftragsvergabe prägt `Approved_Jobs` eine eindeutige `Job_ID` und friert die ursprünglich geschätzten Kosten als eingefrorene Baseline ein. Jede nachgelagerte Stundenzetteleingabe (`Labor_Log`), jeder Materialabzug (`Material_Usage`) und jede Terminplanaufgabe muss eine gültige `Job_ID` referenzieren, was 100 % Nachverfolgbarkeit vom ersten Angebot bis zur finalen Baustellenkostenrechnung garantiert.
2. **Rückwärtskalkulation der Marge vs. Cost-Plus-Aufschlag-Mathematik:**
Einer der teuersten mathematischen Fehler im Baugewerbe ist die Verwechslung von **Aufschlag** mit **Rohertragsmarge** (1.000 $ Kosten um 25 % aufzuschlagen ergibt einen Preis von 1.250 $, was nur eine **20-%-Rohertragsmarge** ist und damit 5 % des Bottom-Line-Gewinns lautlos auslöscht). Innerhalb von `Quote_Builder` aggregiert die Preismaschine direkte Materialkosten ($M$), direkte Arbeitskosten ($L$) und zugeteilte Gemeinkosten ($O = (M + L) \times r_{\text{oh}}$) und wendet dann **echte Rückwärts-Divisor-Mathematik der Marge** zusammen mit der Steuerberechnung an:

$$\text{Vorgeschlagenes Angebot vor Steuern} = \frac{\text{Direktes Material} + \text{Direkte Arbeit} + \text{Zugeteilte Gemeinkosten}}{1 - \text{Zielmarge \%}}$$



Das stellt sicher, dass bei Vertragsunterzeichnung die angestrebte Rohertragsmarge mathematisch geschützt ist.
3. **Standardkostenrechnung & aktivitätsbasierte Feldabsorption:**
Feldkolonnen erfassen betriebliche Mengen (**geleistete Stunden** und **verbrauchte Materialeinheiten**), keine finanziellen Dollar. Das Kostenrechnungsmodul entkoppelt Felderfassung von finanzieller Bewertung, indem es `Labor_Log` und `Material_Usage` mit den Hauptsatztabellen (`Labor_Rates` und `Material_DB`) verknüpft. Während Feldmengen protokolliert werden, berechnet das Modul dynamisch absorbierte direkte Kosten und wendet den globalen Gemeinkostensatz aus `Settings` an, um die wahren **gesamten Projektkosten** abzubilden.
4. **Schwellenwertgesteuerte Budgetabweichung & LTV-Aggregation:**
Anstatt Baustellenkostenrechnung als Post-Mortem-Übung zu behandeln, berechnet `Job_Cost_Engine` fortlaufend **Kostenabweichung ($\Delta C = \text{tatsächliche Gesamtkosten} - \text{geschätzte Baseline-Kosten}$)** und **Abweichung %**. Wenn $\frac{\Delta C}{\text{geschätzte Kosten}} > \text{Überschreitungsschwelle}$, löst das System einen automatischen Ausnahmezustand für sofortige betriebliche Intervention aus. Gleichzeitig rollen abgeschlossene `Job_ID`-Datensätze nach `Customer_ID` in `Customer_History` auf und verlagern die kommerzielle Strategie von Einzelauftrags-Angebotsabgabe hin zum **lebenslangen Gewinnbeitrag des Kunden**.

---

## Warum die meisten Rentabilitätsfehler von Auftragnehmern strukturell sind—keine Beurteilungsfehler

Erfahrene Auftragnehmer verlieren selten Geld, weil sie nicht bauen können. Sie verlieren Geld, weil **Informationen an jeder betrieblichen Übergabestelle brechen**:

### Vorher: Die Falle des getrennten Auftragnehmer-Spreadsheets

```text
Sales Lead Notes → Standalone Excel Quote → Signed PDF Contract → Paper Crew Timesheets → Shoebox Material Receipts → Year-End Accountant Tax Summary
                            ↘                                             ↙
                              Zero real-time link between Estimate & Actuals

```

* **Das Übergaberversagen:** Die ursprüngliche Kalkulation kann nicht direkt mit tatsächlichem Feldverbrauch verglichen werden. Arbeitsstunden werden ohne `Job_ID` protokolliert. Materialbelege landen in einem generischen QuickBooks-Aufwandskonto. Bis der Unternehmer die Gewinnzahl sieht, ist der Auftrag seit Monaten abgeschlossen.

### Nachher: Ein verbundener relationaler Betriebsablauf

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

## Getrennte Spreadsheets vs. dieses verbundene Auftragnehmer-Betriebssystem

| Betriebliche Dimension | Getrennte Auftragnehmer-Spreadsheets (ohne dieses Werkzeug) | Verbundenes Baustellenkostenrechnungs- & Betriebssystem (mit diesem Werkzeug) |
| --- | --- | --- |
| **Übergabe Vertriebslead zu Kalkulation** | Leads leben in E-Mails oder Notizblöcken, während Angebote in einzelnen Excel-Dateien leben, was Trefferquoten und Pipeline-Gewinn unsichtbar macht. | `Lead_ID` verbindet Vertriebsanfragen direkt mit `Quote_Builder` und projiziert **Pipeline-Gewinnbeitrag** auf Basis der Zielmarge. |
| **Erhaltung der vergebenen Budgetbaseline** | Sobald ein Angebot gewonnen ist, bearbeiten Auftragnehmer die Kalkulationsdatei oder starten einen leeren Tracker, wodurch die für die Abweichungsanalyse nötige ursprüngliche Kostenbaseline gelöscht wird. | `Approved_Jobs` friert die **geschätzten Gesamtkosten** des vergebenen Angebots unter einer eindeutigen `Job_ID` für side-by-side-**Soll-vs-Ist**-Prüfung ein. |
| **Feld-Stundenzettel & Materialverbrauch** | Kolonnen-Arbeitsstunden und Baustellen-Materialabzüge bleiben rohe betriebliche Notizen, anstatt sich in Echtzeit-Finanz-Projektkosten zu verwandeln. | `Labor_Log` und `Material_Usage` binden Feldmengen an `Job_ID` und multiplizieren automatisch mit **`Labor_Rates`**- und **`Material_DB`**-Einheitenkosten. |
| **Erkennung von Kostenüberschreitungen mitten im Projekt** | Kostenüberschreitungen und Arbeitskosten-Explosionen werden Wochen nach Projektabschluss entdeckt, wenn Nachtragsaufträge nicht mehr erteilt werden können. | `Job_Cost_Engine` verfolgt Live-Budgetabweichung gegen eine zentrale **Kostenüberschreitungsschwelle** und löst sofortige Warnungen aus, während die Arbeit noch läuft. |
| **Einzelauftragsmarge vs. Kundenlebenswert** | Ein Auftragnehmer feiert einen profitablen Auftrag für einen Kunden, ohne zu realisieren, dass die vorherigen vier Aufträge für denselben Kunden Geld verloren haben. | `Customer_History` rollt **Gesamtaufträge, kumulierte Erlöse, Nettogewinn $ und durchschnittlich realisierte Marge %** pro Kundenkonto auf. |
| **Globale Gemeinkosten-, Steuer- & Margenregeln** | Gemeinkostenprozentsätze, Steuersätze und Aufschlagformeln sind über Dutzende Register hartcodiert, was kostspielige Angebotsfehler verursacht. | `Settings` dient als **einzige Quelle der Wahrheit**—die Aktualisierung von Gemeinkosten oder Zielmarge in einer Zelle aktualisiert dynamisch alle nachgelagerten Module. |

---

## Für wen das ist: Ziel-Auftragnehmerrollen & Gewerbe-Anwendungsfälle

Dieses System ist für **projektbasierte Bauunternehmen, spezialisierte Handwerks-Auftragnehmer, Kalkulatoren und Eigentümer-Betreiber (typischerweise 1 bis 50 Mitarbeiter)** gemacht, die rigorose Baustellenkostenrechnungskontrolle wollen, ohne 500–1.500 $/Monat für aufgeblähte Bau-ERP-Software zu zahlen:

* **Generalunternehmer (GU) sowie Haus- und Umbauunternehmer:** Nutzen Sie es als **komplette Bauprojektmanagement- und Baustellenkostenrechnungs-Excel-Vorlage für Wohn- oder Gewerbebauten**, um mehrere aktive Bauten zu verfolgen, Nachunternehmer-/Arbeits-Burn-Rates zu überwachen und Rohertragsmargen von der Kalkulation bis zur Endabnahme zu schützen.
* **Spezialisierte Handwerks-Nachunternehmer (HVAC, Elektro, Sanitär, Dach, Landschaftsbau, Maler, Beton):** Nutzen Sie es als **Gewerbe-Kalkulations- und Feldarbeits-/Material-Tracker**, um Einheitenpreise in `Material_DB` zu standardisieren, Aufträge in Minuten genau zu kalkulieren und zu prüfen, ob Feldkolonnen geschätzte Arbeitsstunden unter- oder überboten haben.
* **Bau-Kalkulatoren & Vertriebsleiter:** Nutzen Sie es als **standardisierten Bau-Angebots- & Angebotsgenerator** gekoppelt mit einem **Auftragnehmer-CRM-Lead-Tracker**, um Aufschlag-vs-Marge-Mathematikfehler zu beseitigen und margenstarke Angebote zu priorisieren.
* **Bau-Projektleiter & Bauleiter:** Nutzen Sie es als **Soll-Ist-Budgetabweichungs- und Terminplan-Tracker**, um Arbeitsüberschreitungen und Materialverschwendung mitten im Projekt zu erkennen—während noch Zeit bleibt, gegenzusteuern oder einen Nachtragsauftrag beim Kunden einzureichen.
* **Bau-Buchhalter, Controller & fractional CFOs:** Nutzen Sie es als **betriebliches Baustellenkostenrechnungs-Nebenbuch**, das die Lücke zwischen roher Feldaktivität (Stundenzettel und Materialverbrauch) und hochwertiger Steuer-Buchhaltungssoftware wie QuickBooks oder Xero schließt.

*Hinweis: Diese Arbeitsmappe ist **nicht** dazu bestimmt, gesetzliche Lohnabrechnung, Steuererklärungssoftware oder Enterprise-Blueprint-Aufstellungssoftware zu ersetzen. Sie ist die leichtgewichtige **betriebliche und kommerzielle Ausführungsmaschine**, die Ihre Vertriebspipeline, Projektkalkulationen, Feldkosten und Kundenrentabilität an einem Ort verbunden hält.*

---

## Häufig gestellte Fragen zu Bau-Kalkulations- & Baustellenkostenrechnungsszenarien

Wenn Ihr Bauunternehmen nach einem praktischen Spreadsheet-Modell sucht, um eine der folgenden betrieblichen Kopfschmerzen zu lösen, ist dieses System für Sie gebaut:

* **Soll-vs-Ist-Baustellenkostenrechnung in Excel:** *Wie verfolge ich tatsächliche Feld-Arbeitsstunden und Materialverbrauch gegen meine ursprüngliche Projektkalkulation, um Budgetabweichungen in Echtzeit zu sehen, bevor ein Auftrag das Budget übersteigt?*
* **Standardisierung von Bau-Angeboten & Offerten:** *Wie baue ich eine wiederholbare Auftragnehmer-Angebotsvorlage, die aus einer Material-Hauptpreisliste und Arbeitslohnsatz-Karte zieht und automatisch Gemeinkosten, Ziel-Rohertragsmarge und Steuern berücksichtigt?*
* **Verbindung von Auftragnehmer-CRM-Leads mit Projektrentabilität:** *Wie verfolge ich einen Bauauftrag vom ersten Kundenanruf (Lead) über Kalkulation, Auftragsausführung, endgültigen Nettogewinn bis zur wiederkehrenden Kundenhistorie in einer einzigen Excel-Arbeitsmappe?*
* **Identifikation von Gewinnschwund über Kolonnen & Kunden:** *Warum zeigt mein Bauunternehmen am Jahresende starke Erlöse, aber wenig Bargeld auf der Bank—und welche konkreten Aufträge oder Wiederholungskunden zehren unsere Rohertragsmarge lautlos?*

---

## Über Theseus Workshop

Ich baue leichtgewichtige, transparente Excel- und Browser-basierte Betriebsmodelle für Unternehmen, in denen es zu viele bewegliche Teile gibt, um sie im Kopf zu behalten, aber wo ein teurer Enterprise-Software-Rollout mehr Reibung als Wert erzeugt.

Das zentrale Designprinzip hinter jedem Werkzeug ist einfach:

> **„Was ist das kleinste, sauberste Betriebsmodell, das die ununterbrochene Kette zwischen täglichen Feldereignissen und profitablen Managemententscheidungen bewahrt?“**

Für projektbasierte Auftragnehmer bedeutet das, **Lead → Kalkulation → freigegebener Auftrag → Feldarbeit & Material → Baustellenkosten-Abweichung → Nettogewinn → Kundenhistorie** in einem prüfbaren, schlanken System zu vereinen.

---

*Schlüsselwörter: Excel-Vorlage für Baustellenkostenrechnung, Kalkulations-Spreadsheet für Auftragnehmer, Soll-vs-Ist-Kostentracker, Generalunternehmer-CRM & Angebotsgenerator, Nachunternehmer-Gewinn- & Margenrechner, Excel für Baumaterial- & Arbeitsprotokoll, Bauprojektmanagement- & Baustellenkostenrechnungs-Arbeitsmappe.*

---

## Technische Details

<details>
<summary>Für technische Prüfer, Excel-Praktiker und Mitarbeiter</summary>

### Arbeitsmappen-Architektur

Die Arbeitsmappe besteht aus **12 Kernblättern**, organisiert in drei funktionalen Schichten. Die Architektur trennt kontrollierte Stammdaten von Betriebsdatensätzen und nachgelagerten Berechnungen und hält einen gerichteten Fluss von Eingabe → Berechnung → Ausgabe aufrecht. 

| Schicht                      | Blatt              | Primäre Rolle                               |
| -------------------------- | ------------------ | ------------------------------------------ |
| **Stammdaten & Steuerung**  | `Settings`         | Zentrale Geschäftsparameter                |
|                            | `Material_DB`      | Standard-Materialkatalog und -kosten        |
|                            | `Labor_Rates`      | Standard-Arbeitskategorien und Stundenlohnsätze |
| **Betrieb & Ausführung** | `Lead_Tracker`     | Chancen-Pipeline                       |
|                            | `Quote_Builder`    | Kalkulation und Angebotsberechnung                      |
|                            | `Approved_Jobs`    | Stammdaten vergebener Projekte                  |
|                            | `Schedule`         | Meilensteine und Ausführungswarnungen            |
|                            | `Labor_Log`        | Tatsächliche Arbeitsdatensätze                       |
|                            | `Material_Usage`   | Tatsächlicher Materialverbrauch                |
| **Maschine & Analytics**     | `Job_Cost_Engine`  | Tatsächliche Projektkostenrechnung und Rentabilität   |
|                            | `Profit_Dashboard` | Rentabilitätsanalyse auf Management-Ebene                    |
|                            | `Customer_History` | Kundenbezogene Handelshistorie          |

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

Das zentrale Designprinzip ist **Einheitlicher Hauptschlüssel**: `Job_ID` verknüpft den freigegebenen Auftrag mit Terminplandatensätzen, Arbeitsdatensätzen, Materialverbrauch und der Baustellenkostenrechnungsmaschine. Ziel ist die Beseitigung des Dateninsel-Problems zwischen kommerzieller Planung und Projektausführung. 

### Zentrale Steuerungsschicht

`Settings` ist der einzige Wartungspunkt der Arbeitsmappe.

Die definierten Parameter sind:

| Zelle | Parameter               |  Standard | Verwendet für                                 |
| ---- | ----------------------- | -------: | ---------------------------------------- |
| `B2` | Standard-Währungssymbol |      `$` | Monetäre Darstellung                    |
| `B3` | Steuersatz                | `13.00%` | Steuerinklusive / -exklusive Umrechnung |
| `B4` | Gemeinkostensatz           | `10.00%` | Indirekte Kostenzuteilung                 |
| `B5` | Zielmarge           | `25.00%` | Angebots- und Chancenrentabilität      |
| `B6` | Überschreitungsschwelle       |  `5.00%` | Projektkostenwarnung                     |
| `B7` | USD/CAD-Wechselkurs   | `1.0000` | Reservierte Währungsumrechnung             |

Diese Werte sind absichtlich zentralisiert. Die Architektur erfordert, dass nachgelagerte Formeln `Settings` referenzieren, anstatt Werte wie `0.13`, `0.10` oder `0.25` hartzucodieren. Die Implementierungs-Querprüfung bestätigt, dass Steuer-, Gemeinkosten-, Zielmargen- und Überschreitungsparameter an die entsprechenden Berechnungsmodule weitergegeben werden. 

### Drei Fallen, die selbst erfahrene Auftragnehmer fangen

#### Falle 1 — Die ursprüngliche Angebotsmarge als aktuelle Projektmarge behandeln

**1. Getroffene Entscheidung**

Ein Projekt wurde angenommen, weil die Kalkulation eine akzeptable Zielmarge zeigte.

**2. Verborgene Annahme**

Die ursprüngliche Kalkulation wird so behandelt, als bliebe sie repräsentativ, nachdem die Ausführung begonnen hat.

**3. Was die Entscheidung ändert**

Tatsächliche Arbeitsstunden und Materialverbrauch können die ursprünglichen Annahmen übersteigen.

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

Das ursprüngliche Angebot repräsentiert eine geplante Kostenstruktur. Es ist kein Beweis für tatsächlichen Verbrauch.

**5. Korrigierte Begründung**

Geschätzte Kosten als Baseline behalten und tatsächliche Kosten unabhängig aus `Labor_Log` und `Material_Usage` berechnen.

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

Die Implementierung definiert Auftragserlöse auf steuer-exklusiver Basis:

```excel
=Contract_Amount/(1+Settings!$B$3)
```

Tatsächlicher Gewinn wird dann als steuer-exklusive Auftragserlöse abzüglich tatsächlicher Gesamtkosten berechnet. 

</details>

#### Falle 2 — Projektrentabilität nur aus direkten Kosten beurteilen

**1. Getroffene Entscheidung**

Material- und Arbeitskosten scheinen unter Auftragserlösen zu bleiben, daher wird das Projekt als gesund betrachtet.

**2. Verborgene Annahme**

Direkte Arbeit und Material werden als vollständige Wirtschaftskosten des Projekts behandelt.

**3. Was die Entscheidung ändert**

Indirekte Verwaltungskosten sind in direkter Projektausgabe nicht sichtbar, müssen aber dennoch zugeteilt werden.

**4. Warum die Begründung scheitert**

Das kommerzielle Modell der Arbeitsmappe definiert Projektkosten als direktes Material + direkte Arbeit + zugeteilte Gemeinkosten.

**5. Korrigierte Begründung**

Den zentralisierten Gemeinkostensatz konsistent auf die Direktkostenbasis anwenden.

**6. Korrigierte Entscheidung**

Projektmarge wird mit derselben Kostenstruktur bewertet, die während der Kalkulation verwendet wurde.

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

Die Implementierung spezifiziert dasselbe Gemeinkostenkonzept für Kalkulationsphasen-Kostenrechnung und tatsächliche Baustellenkostenrechnung. 

</details>

#### Falle 3 — Warten, bis Projektabschluss Kostenüberschreitung erkennt

**1. Getroffene Entscheidung**

Das Management wartet bis zum Projektabschluss, um zu bestimmen, ob das Projekt im Budget blieb.

**2. Verborgene Annahme**

Kostenabweichung wird als Berichtskennzahl behandelt, nicht als betriebliches Steuersignal.

**3. Was die Entscheidung ändert**

Ein Projekt kann seine geschätzten Kosten vor Abschluss übersteigen, während noch restliche Arbeit potenziell steuerbar ist.

**4. Warum die Begründung scheitert**

Eine späte Warnung mag das Endergebnis erklären, kann aber bereits entstandene Kosten nicht beeinflussen.

**5. Korrigierte Begründung**

Tatsächliche Gesamtkosten mit ursprünglichen geschätzten Gesamtkosten vergleichen und die Abweichung gegen die zentralisierte Überschreitungsschwelle bewerten.

**6. Korrigierte Entscheidung**

Ein Projekt, das die konfigurierte Schwelle kreuzt, wird zur Ausnahme, die Managementaufmerksamkeit erfordert.

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

Die Warnlogik bewertet den tatsächlichen Kostenüberschreitungsprozentsatz gegen `Settings!B6`. Das Dashboard zählt dann als schwere Kostenüberschreitungen klassifizierte Projekte. 

</details>

### Beispielszenario

Ein Auftragnehmer nimmt ein Projekt mit einem steuerinklusive Auftragsbetrag von **113.000 $** an.

Der konfigurierte Steuersatz beträgt **13 %**, daher sind die steuer-exklusiven Auftragserlöse:

```text
$113,000 ÷ 1.13
= $100,000
```

Das ursprüngliche Angebot enthält:

| Kostenkomponente           |   Geschätzt |
| ------------------------ | ----------: |
| Material                |     42.000 $ |
| Arbeit                    |     35.000 $ |
| Gemeinkostenzuteilung      |      7.700 $ |
| **Geschätzte Gesamtkosten** | **84.700 $** |
| **Ursprünglicher Gewinn**       | **15.300 $** |
| **Ursprüngliche Marge**       |  **15,30 %** |

Während der Ausführung akkumulieren tatsächliche Datensätze:

| Kostenkomponente        |      Tatsächlich |
| --------------------- | ----------: |
| Material             |     47.000 $ |
| Arbeit                 |     40.000 $ |
| Gemeinkostenzuteilung   |      8.700 $ |
| **Tatsächliche Gesamtkosten** | **95.700 $** |
| **Tatsächlicher Gewinn**     |  **4.300 $** |
| **Tatsächliche Marge**     |   **4,30 %** |

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

Mit der standardmäßigen Überschreitungsschwelle von `5.00%` liegt dieses Projekt klar außerhalb normaler Kostenkontrolle.

Die korrekte Managementkonklusion ist **nicht einfach „das Projekt ist noch profitabel.“**

Die nützlichere Konklusion ist:

> **Das Projekt bleibt im absoluten Gewinn positiv, aber seine Kostenstruktur hat sich wesentlich verschlechtert und erfordert Intervention.**

Die nächste Überprüfung sollte sich darauf konzentrieren, woher die Abweichung stammte—Arbeitsstunden, Materialverbrauch oder beides—und ob verbleibende Projektarbeit gesteuert werden kann.

Genau das ist der Grund, warum das System sowohl die ursprüngliche Kalkulation als auch tatsächliche Ausführungskosten erhält, anstatt die Kalkulation durch die letzte Ausgabenzahl zu ersetzen. `Job_Cost_Engine` ist dafür gebaut, den Unterschied zwischen diesen beiden Zuständen aufzudecken. 

### Formelreferenz

<details>
<summary>Lead- und Pipeline-Berechnungen</summary>

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

**Zweck:** Berechnet, wie lange eine Chance in der Pipeline aktiv bleibt, wobei gewonnene und verlorene Leads als geschlossen behandelt werden.

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

**Zweck:** Wandelt geschätztes Projektbudget in potenziellen Gewinn um, basierend auf der zentralisierten Zielmargen-Annahme anstelle eines hartcodierten Prozentsatzes.

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

`Quote_Builder` verwendet `XLOOKUP`, um Standard-Material- und Arbeitslohnsätze abzurufen, während `MAP` und `LAMBDA` es den Berechnungsspalten erlauben, dynamisch zu spillen, wenn sich Datensätze erweitern. 

</details>

<details>
<summary>Baseline freigegebener Auftrag</summary>

**Aus dem Angebot übernommene geschätzte Gesamtkosten**

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

Der Zweck ist, die kommerzielle Wirtschaftlichkeit zum Moment zu erhalten, in dem das Angebot zum freigegebenen Auftrag wird. 

</details>

<details>
<summary>Tatsächliche Arbeits- und Materialkosten</summary>

**Tatsächliche Arbeitskosten**

```excel
=Actual_Hours*Hourly_Rate
```

Der Stundenlohnsatz wird aus `Labor_Rates` basierend auf `Labor_Code` abgerufen. 

**Tatsächliche Materialkosten**

```excel
=Actual_Quantity*Standard_Material_Cost
```

Die Materialkosten werden aus `Material_DB` mit dem Materialcode abgerufen.

Beide tatsächlichen Kostenströme werden nach `Job_ID` gruppiert, bevor sie in `Job_Cost_Engine` eingehen.

</details>

<details>
<summary>Projektkosten & Rentabilität</summary>

**Steuer-exklusive Auftragserlöse**

```excel
=Contract_Amount/(1+Settings!$B$3)
```

**Tatsächliche Gemeinkostenzuteilung**

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

**Kostenüberschreitungswarnung**

Die Überschreitungsbedingung vergleicht tatsächliche Kostenabweichung mit der konfigurierten `Settings!B6`-Schwelle, anstatt einen festen Prozentsatz in die Formel einzubetten. 

</details>

<details>
<summary>Terminplan- und Ausführungswarnungen</summary>

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

Die Berechnung unterscheidet abgeschlossene Arbeit von unvollständiger Arbeit, die ihr geplantes Enddatum überschritten hat. 

</details>

<details>
<summary>Kundenhistorie & Wertanalyse</summary>

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

Die Quellimplementierung verwendet kumulierten Gewinnbeitrag und Durchschnittsmarge als Basis für die Kundenwert-Klassifizierung, anstatt Kunden nach Erlös allein zu bewerten. 

</details>

### Validierungsregeln

| Feld / Bereich                    | Regel                                                                                | Fehlerverhalten                                                                                   |
| ------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `Settings!B3` Steuersatz          | Muss ein gültiger Prozentsatz sein, konsistent in Angebots- und Erlösberechnungen verwendet. | Falsche Konfiguration erzeugt inkonsistente steuerinklusive und -exklusive Beträge.           |
| `Settings!B4` Gemeinkostensatz     | Muss zentral gepflegt werden anstatt in Formeln eingebettet.                      | Projektkostenrechnung kann inkonsistent werden, wenn anderswo manuell überschrieben.                        |
| `Settings!B5` Zielmarge     | Muss ein gültiger Prozentsatz sein, von Lead-Potenzial- und Angebotsberechnungen verwendet.           | Falscher Wert ändert prognostizierte kommerzielle Wirtschaftlichkeit.                                          |
| `Settings!B6` Überschreitungsschwelle | Muss ein gültiger Prozentsatz sein, von Projektkostenwarnungen verwendet.                               | Falscher Wert ändert die Empfindlichkeit von Kostenwarnungen.                                          |
| `Material_Code`                 | Muss einem gültigen Datensatz in `Material_DB` entsprechen.                                 | Lookup kann `#N/A` oder Null zurückgeben, wenn der Code fehlt oder fehlerhaft ist.                          |
| `Labor_Code`                    | Muss einem gültigen Datensatz in `Labor_Rates` entsprechen.                                 | Stundenlohnsatz kann nicht korrekt abgerufen werden.                                                       |
| `Job_ID`                        | Muss das relevante freigegebene Projekt referenzieren.                                       | Arbeits-/Materialtransaktionen können vom korrekten Projekt getrennt werden.                        |
| `Actual_Hours`                  | Muss numerisch sein und tatsächlichen Projektarbeitsverbrauch darstellen.                     | Ungültige Werte verzerren tatsächliche Arbeitskosten.                                                        |
| `Actual_Quantity`               | Muss numerisch und an den relevanten Materialcode gebunden sein.                             | Ungültige Werte verzerren tatsächliche Materialkosten.                                                        |
| `Completion_Pct`                | Erwarteter Bereich ist `0%–100%`.                                                        | Werte bei oder über 100 % werden als abgeschlossen behandelt; unvollständige überfällige Arbeit erzeugt eine Warnung.    |
| Dynamic-Array-Ausgabebereich      | Spill-Ziel muss frei bleiben.                                                | Belegte Zellen können `#SPILL!` erzeugen.                                                           |
| Excel-Berechnungsmodus          | Muss **Automatisch** bleiben.                                                          | Änderungen an `Settings` dürfen möglicherweise nicht sofort propagieren, wenn Berechnung auf Manuell steht.           |
| Währungsformatierung             | Monetäre Zellen müssen das beabsichtigte Währungsformat verwenden.                               | Werte dürfen mit falschem Währungssymbol anzeigen, auch wenn die zugrundeliegende Zahl korrekt ist. |

Die Implementierung empfiehlt Excel-Datenvalidierung für betriebliche Eingabefelder, wo praktikabel, und identifiziert explizit `#SPILL!`, manuellen Berechnungsmodus, fehlende Stammdaten-Codes und falsche Währungsformatierung als gängige betriebliche Fehlermodi. 

Die Querprüfung der Arbeitsmappe verifiziert ebenfalls, dass globale Parameter nachgelagert referenziert werden und dass Berechnungsformeln die prinzipiellen Geschäftsannahmen nicht hartcodieren. 

</details>

## Implementierungshinweise

### Dynamic-Array-Design

Die Arbeitsmappe ist für Microsoft 365 / Excel 2021+ konzipiert und verwendet moderne Dynamic-Array-Funktionen, wo sie einen klaren betrieblichen Vorteil bieten.

Kernfunktionen umfassen:

* `XLOOKUP`
* `FILTER`
* `UNIQUE`
* `SUMIFS`
* `MAP`
* `LET`
* `LAMBDA`

Das Designziel ist, routinemäßiges Formelziehen und manuelle Bereichserweiterung zu vermeiden.

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

Das ist besonders wichtig für Auftragnehmer-Abläufe, weil Leads, Aufträge, Arbeitsdatensätze und Materialtransaktionen kontinuierlich über die Zeit hinzugefügt werden.

Die Implementierung verwendet Dynamic-Array-Logik in Bereichen wie Pipeline-Dauer, potenziellem Gewinn, Angebotsberechnungen, Terminplanwarnungen und Kundenanalyse. 

### Projekt-Schlüssel-Architektur

`Job_ID` ist der zentrale Identifikator, der die Ausführungsschicht verbindet.

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

Das schafft eine einzige projektbezogene Beziehung zwischen:

* dem freigegebenen Vertrag;
* geplanter Arbeit;
* tatsächlicher Arbeit;
* tatsächlichen Materialien;
* tatsächlichen Kosten;
* Projektrentabilität.

Die Architektur identifiziert explizit die einheitliche `Job_ID` als Kernmechanismus zur Beseitigung von Dateninseln zwischen Projektausführung und Finanzanalyse. 

### Projektkosten-Abstimmung

Die Arbeitsmappe hält eine klare Unterscheidung zwischen **was geschätzt wurde** und **was tatsächlich passierte** aufrecht.

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

Das erlaubt dem Management zu identifizieren, ob sich die Wirtschaftlichkeit eines Projekts verschlechtert hat, weil tatsächlicher Ressourcenverbrauch von der ursprünglichen Kalkulation abwich.

`Job_Cost_Engine` agiert damit als Abstimmungsschicht zwischen kommerzieller Planung und betrieblicher Ausführung. 

### Dashboard-Abhängigkeitsmodell

`Profit_Dashboard` ist keine unabhängige Berichtstabelle.

Es sitzt nachgelagert der Berechnungsmaschine:

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

Das Dashboard fasst Ausgaben zusammen, die von den zugrundeliegenden Projektdatensätzen und der Berechnungsschicht erzeugt werden, anstatt vom Management die Pflege separater Berichtszahlen zu verlangen.

Die Implementierung definiert Dashboard-Kennzahlen einschließlich:

* Gesamtprojekte;
* steuer-exklusive Erlöse;
* tatsächliche Gesamtkosten;
* Rohertrag;
* Gesamtmarge;
* Anzahl schwerer Kostenüberschreitungsprojekte. 

---

## Betriebsablauf

Der empfohlene Betriebsrhythmus folgt derselben Struktur wie die Arbeitsmappen-Architektur.

### Tagesbeginn

Überprüfen:

* `Settings`;
* Stammdaten-Vollständigkeit;
* aktive Leads;
* aktuellen Projektstatus;
* offene Terminplan-Ausnahmen.

Der Zweck ist, sicherzustellen, dass Berechnungsumgebung und betriebliche Eingaben aktuell sind, bevor neue Datensätze eingegeben werden. 

### Während des Betriebs

Aktualisieren Sie die relevanten betrieblichen Datensätze, wenn Geschäftsereignisse eintreten:

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

Das Prinzip ist **das Ereignis an der Quelle erfassen anstatt es später zu rekonstruieren**.

### Tagesabschluss-Überprüfung

Überprüfen Sie die berechneten Ausgaben:

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

Das verwandelt die Arbeitsmappe von einer statischen Berichtsdatei in ein leichtgewichtiges Betriebssteuerungssystem.

---

## Empfohlener Überprüfungsrhythmus

| Häufigkeit       | Primäre Überprüfung                          | Empfohlener Fokus                                                        |
| --------------- | --------------------------------------- | ------------------------------------------------------------------------ |
| **Täglich**       | `Schedule` + Ausführungsprotokolle             | Überfällige Aufgaben, fehlende Arbeits-/Materialeingaben                            |
| **Wöchentlich**      | `Lead_Tracker` + `Profit_Dashboard`     | Pipeline, aktive Projekte, entstehende Kostenüberschreitungen                        |
| **Pro Projekt** | `Job_Cost_Engine`                       | Geschätzte vs. tatsächliche Kosten und Marge                                     |
| **Monatlich**     | `Profit_Dashboard` + `Customer_History` | Gesamtrentabilität und Kundenbeitrag                          |
| **Vierteljährlich**   | `Settings` + Stammdaten                | Arbeitslohnsätze, Materialkosten, Gemeinkosten, Zielmarge, Warnschwellen |

Der Zweck dieses Rhythmus ist, betriebliche Datenpflege und Managementüberprüfung getrennt zu halten: Feld- und Projektteams pflegen die Quelldatensätze, während das Management die resultierenden Berechnungen zur Entscheidungsfindung nutzt.

---

## Prinzipien der Dateneingabe

### Quelldaten einmal eingeben

Die Arbeitsmappe ist um ein **Single-Source-of-Truth**-Prinzip herum konzipiert.

Zum Beispiel:

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

Der Materialsatz sollte daher in der Haupttabelle gepflegt werden, anstatt unabhängig in mehrere Bereiche neu eingetippt zu werden.

Dasselbe Prinzip gilt für Arbeitslohnsätze und globale Geschäftsannahmen.

### Projekt-IDs konsistent verwenden

Sobald ein freigegebenes Projekt eine `Job_ID` erhält, sollten alle nachfolgenden Projektausführungs-Datensätze diesen Identifikator referenzieren.

```text
Job_ID: JOB-001
    ├── Schedule
    ├── Labor_Log
    ├── Material_Usage
    └── Job_Cost_Engine
```

Eine fehlende oder falsch eingegebene `Job_ID` bricht die Beziehung zwischen betrieblicher Aktivität und Projektrentabilität.

### Berechnete Ausgaben nicht überschreiben

Berechnete Spalten sollten formelgesteuert bleiben.

Benutzer sollten Quelldatensätze aktualisieren wie:

* Lead-Informationen;
* Angebotseingaben;
* Projektstatus;
* Arbeitsstunden;
* Materialmengen;
* Termine.

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
* Lohnabrechnung;
* Enterprise-Ressourcenplanung;
* Beschaffungssysteme;
* Field-Service-Management-Plattformen;
* Multi-User-Transaktionsdatenbanken.

Sie ist für betriebliche Steuerung und Entscheidungsunterstützung konzipiert, wo Excel eine angemessene Arbeitsumgebung bleibt.

### Excel-Version

Die Implementierung beruht auf modernen Excel-Funktionen und ist für **Microsoft 365 / Excel 2021+** bestimmt.

Ältere Excel-Versionen dürfen möglicherweise nicht alle von der Arbeitsmappe verwendeten Dynamic-Array-Funktionen unterstützen.

### Berechnungsmodus

Excel sollte im Modus **Automatische Berechnung** bleiben.

Wenn Berechnung manuell deaktiviert wird, dürfen sich Änderungen an `Settings` oder Quelldatensätzen nicht sofort durch die Berechnungskette propagieren. 

### Dynamic-Array-Spill-Platz

Dynamische Formeln erfordern freie Spill-Bereiche.

Wenn ein anderer Wert einen erforderlichen Spill-Bereich belegt, kann Excel `#SPILL!` zurückgeben.

Die angemessene Reaktion ist, den Spill-Bereich zu inspizieren, anstatt Formeln manuell in zusätzliche Zellen zu kopieren. 

### Stammdaten-Abhängigkeit

`Material_Code` und `Labor_Code` hängen von entsprechenden Datensätzen in `Material_DB` und `Labor_Rates` ab.

Wenn ein Code fehlt oder fehlerhaft ist, dürfen nachgelagerte Lookup- und Kostenberechnungen möglicherweise nicht den beabsichtigten Wert zurückgeben. 

---

## Andere Werkzeuge in dieser Serie

Eine Sammlung leichtgewichtiger Excel-Entscheidungsunterstützungswerkzeuge für Betriebsplanung, Kostenrechnung, Rentabilität und Geschäftsanalyse.

* **Excel-Werkzeugsammlung für Jahres-Gehaltsabrechnung & jährliche Arbeitskräfte-Kapazitätsplanung**
* **Excel-Werkzeugsammlung für industrielle Energiekosten & TCO-Entscheidungsunterstützung**
* **E-Commerce-Gewinnmaschine & Werkzeugsammlung für Finanzabstimmung**
* **Werkzeugsammlung für Lebensmittelherstellungskosten & Unit-Economics**
* **Werkzeugsammlung für Mietobjekt-Betrieb & Leerstandsintelligenz**

---

## Lizenz

Dieses Projekt wird unter der **Apache-Lizenz 2.0** veröffentlicht.

Sie dürfen das Werk gemäß den Lizenzbedingungen verwenden, modifizieren, reproduzieren und verteilen.

Siehe die `LICENSE`-Datei des Repositorys für die vollständigen Lizenzbedingungen.
