[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)


# Modèle Excel de calcul des coûts de chantier & tableur d’estimation pour entrepreneurs (système CRM du prospect au profit)
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/9ddabd3f-ffc4-4a6c-937f-fbbc3c2c2e8a" />


![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-green.svg)
![Tool Type](https://img.shields.io/badge/Tool%20Type-Construction%20Job%20Costing%20%26%20Estimating-orange.svg)

**Un modèle Excel tout-en-un de calcul des coûts de chantier, un tableur d’estimation pour entrepreneurs et une calculatrice CRM du prospect au profit, conçus pour les entrepreneurs généraux, les sous-traitants et les entreprises de métier. Suivez le flux de travail complet de l’entrepreneur : prospect commercial → estimation des matériaux et de la main-d’œuvre → budget de chantier approuvé → feuilles de temps de terrain et consommation de matériaux → écart estimation vs. réel → marge bénéficiaire nette → valeur vie client (LTV).**

**Aucune inscription. Aucune installation. Essai gratuit dans votre navigateur.**

Testez gratuitement l’application web interactive dans votre navigateur, ou téléchargez le modèle tableur Excel entièrement déverrouillé pour une personnalisation complète hors ligne—garanti par une politique de remboursement de 30 jours sans question.

> 🌐 **Essayer l’application web :** [Calculatrice interactive d’estimation et de calcul des coûts de chantier (démo en direct)](https://hyvoid.github.io/construction-job-costing-excel-template/)  
> 📥 **Obtenir le système Excel complet :** [Télécharger le modèle Excel de calcul des coûts de chantier et de devis modifiable](https://www.theseusworkshop.com/l/njmty?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=contractor-operations-profitability)  
> ⚙️ **Architecture & mathématiques :** [Aller à la logique métier et à la méthodologie de calcul des coûts de chantier](#the-business-logic--methodology)


---

## La chaîne opérationnelle de construction connectée : du prospect au calcul des coûts de chantier

La plupart des tableurs de construction ne résolvent qu’un fragment isolé de l’activité—laissant votre **pipeline commercial**, votre **estimation quantitative** et votre **calcul des coûts de chantier de terrain** piégés dans des fichiers déconnectés. 

Ce classeur est conçu autour d’une seule **chaîne opérationnelle relationnelle** ininterrompue, ancrée par `Lead_ID` et `Job_ID` :

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

### Un classeur entrepreneur. Huit modules opérationnels intégrés.

| Étape du flux de travail | Module Excel / Web | Principales métriques de construction et financières suivies |
| --- | --- | --- |
| **1. Pipeline commercial (CRM)** | `Lead_Tracker` | Demandes clients, opportunités d’appel d’offres, budgets estimés, vieillissement du pipeline, responsabilité du chiffreur, marge brute projetée. |
| **2. Estimation & appel d’offres** | `Quote_Builder` | Quantités de matériaux estimées, heures de main-d’œuvre, COGS direct, imputation des frais généraux, **marge cible vs. majoration**, prix d’offre toutes taxes comprises. |
| **3. Référence contractuelle** | `Approved_Jobs` | Contrats de construction attribués, génération d’un `Job_ID` unique, valeur contractuelle, dates de planning, attribution du chef de projet. |
| **4. Suivi de terrain** | `Labor_Log` + `Material_Usage` | Heures de feuilles de temps quotidiennes/hebdomadaires des équipes, taux horaires par métier, consommation de matériaux sur chantier directement liée au `Job_ID`. |
| **5. Calcul des coûts & avancement (WIP)** | `Job_Cost_Engine` | COGS matériel réel, coût de main-d’œuvre réel chargé, frais généraux appliqués, coût total du chantier, **écart budgétaire estimation vs. réel**. |
| **6. Marges & dépassements** | `Profit_Dashboard` | Marge brute réalisée ($), marge bénéficiaire nette (%), **alertes automatiques de dépassement de coûts**, compte de résultat du portefeuille à l’échelle de l’entreprise. |
| **7. Intelligence client** | `Customer_History` | Historique client multi-projets, revenus contractuels cumulés, contribution au profit à vie, marge moyenne %, classement par palier client. |

---

## Ce qu’il aide à suivre et à décider : correspondance points de douleur–solution pour entrepreneurs

Au lieu d’attendre la saison des impôts pour découvrir si votre équipe a gagné ou perdu de l’argent sur un chantier, ce **suiveur de rentabilité pour entrepreneurs** résout sept angles morts opérationnels critiques :

| Métrique de suivi cible / point de douleur | L’angle mort courant de l’entrepreneur | Comment ce système de calcul des coûts le résout et le suit |
| --- | --- | --- |
| **Priorisation des prospects & valeur du pipeline** | Poursuivre chaque demande d’offre également sans savoir quelles opportunités rapportent la plus forte contribution au profit. | `Lead_Tracker` calcule la durée dans le pipeline et la **marge brute projetée** selon votre marge cible, avant que vous n’investissiez des heures d’estimation. |
| **Tarification précise des offres (marge vs. majoration)** | Sous-estimer les chantiers en confondant *majoration %* et *marge brute %*, ou en oubliant d’imputer les frais généraux d’atelier et la taxe de vente. | `Quote_Builder` puise les coûts standards dans `Material_DB` et `Labor_Rates`, applique les frais généraux et **calcule à rebours le prix d’offre exact toutes taxes comprises** nécessaire pour atteindre votre marge cible. |
| **Préservation de la référence d’estimation d’origine** | Écraser l’estimation initiale dès le début du chantier, rendant impossible de voir où le budget a dérapé. | `Approved_Jobs` verrouille le coût estimé de l’offre attribuée et attribue un `Job_ID` permanent comme **référence immuable d’écart budgétaire**. |
| **Conversion des feuilles de temps et matériaux de terrain en COGS** | Suivre les heures d’équipe sur des feuilles papier et les reçus de matériaux dans des boîtes à chaussures, sans les lier à des budgets de projet spécifiques. | `Labor_Log` et `Material_Usage` lient chaque heure de terrain et chaque unité de matériau au `Job_ID`, en multipliant automatiquement par les taux standards dans le moteur de calcul des coûts. |
| **Alertes de dépassement de coûts et d’écart budgétaire en temps réel** | Découvrir les dépassements de coûts de main-d’œuvre ou de matériaux seulement après l’achèvement à 100 % du chantier et le paiement de la facture finale. | `Job_Cost_Engine` compare en continu **coût réel vs. coût estimé**, déclenchant des **alertes de dépassement** visuelles dès que l’écart franchit votre seuil. |
| **Marge estimée vs. marge nette réalisée** | Supposer qu’un chantier devisé à 30 % de marge a réellement livré 30 %, en ignorant les travaux supplémentaires non facturés et les heures d’équipe excédentaires. | Sépare explicitement la **marge projetée initiale** de la **marge réellement réalisée**, permettant aux chefs de projet de voir l’érosion de marge en temps réel. |
| **Rentabilité vie client (LTV)** | Traiter les entrepreneurs généraux ou gestionnaires immobiliers à fort chiffre d’affaires comme des « clients VIP » alors que leurs projets perdent systématiquement de l’argent. | `Customer_History` agrège le total des chantiers achevés, les revenus à vie, la contribution au profit net et la **marge réellement réalisée moyenne par client**. |

---

## Comment mener un audit d’estimation et de calcul des coûts de chantier (flux de travail de démarrage rapide)

Mettez en place un **système d’estimation, de suivi de chantiers et de contrôle des coûts** standardisé pour votre entreprise de construction en quatre étapes structurées :

### Étape 1 : configurer les règles financières et de frais généraux globales

Ouvrez l’onglet de contrôle `Settings` pour définir les garde-fous financiers utilisés dans toute votre entreprise :

* **Taux de taxe de vente (%)** & **taux d’imputation des frais généraux (%)**
* **Marge brute cible (%)** pour le calcul automatique des devis
* **Seuil d’alerte de dépassement de coûts (%)** (ex. signaler les chantiers dépassant le budget de plus de 5 %)
* **Devise de base & taux de change**

*Action :* Explorez dès maintenant la console de contrôle préconfigurée dans le [système d’exploitation entrepreneurial gratuit en navigateur](https://hyvoid.github.io/construction-job-costing-excel-template/).

---

### Étape 2 : remplir votre livre de prix matériaux et vos cartes de taux de main-d’œuvre

Établissez vos bases de données de coûts standardisées une seule fois pour que les chiffreurs cessent de deviner les prix unitaires :

* **`Material_DB` :** saisissez les SKU/codes matériaux, descriptions d’articles, spécifications, unités de mesure (EA, LF, SQFT) et coûts unitaires standards.
* **`Labor_Rates` :** définissez les catégories de métier (ex. apprenti, compagnon, contremaître, sous-traitant) et les taux horaires de main-d’œuvre chargés.

---

### Étape 3 : exécuter le flux de travail connecté du prospect au calcul des coûts de chantier

Suivez la séquence opérationnelle standardisée en 7 étapes pour chaque projet :

1. **Enregistrer la demande** dans `Lead_Tracker` (`Lead_ID`).
2. **Construire l’offre** dans `Quote_Builder` en utilisant vos bases de données principales matériaux et main-d’œuvre.
3. **Verrouiller le contrat** dans `Approved_Jobs` (`Job_ID`) et fixer les jalons dans `Schedule`.
4. **Enregistrer l’exécution de terrain** lorsque les équipes saisissent leurs heures dans `Labor_Log` et sortent le matériel dans `Material_Usage`.
5. **Auditer l’écart et la marge** automatiquement dans `Job_Cost_Engine`, `Profit_Dashboard` et `Customer_History`.

---

### Étape 4 : gérer par exception et télécharger le modèle Excel pour les opérations réelles

Au lieu de fouiller des centaines de lignes de tableur, utilisez le tableau de bord pour intervenir sur les **prospects commerciaux bloqués**, les **chantiers franchissant les seuils de dépassement de coûts**, les **jalons en retard** et les **clients érodant la marge**.

> 💡 **Prêt à faire tourner vos propres estimations de construction, feuilles de temps d’équipe et calcul des coûts de chantier dans ce système ?**
> Si la version navigateur vous permet d’inspecter l’architecture instantanément, la gestion de vrais chantiers de construction exige d’enregistrer vos propres livres de prix matériaux, de saisir la main-d’œuvre de terrain chaque semaine et de conserver des dossiers de projet permanents.
> 👉 **[Télécharger le classeur complet déverrouillé d’opérations et de calcul des coûts de chantier pour entrepreneurs](https://www.theseusworkshop.com/l/njmty?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=contractor-operations-profitability)** pour personnaliser les tables de taux, suivre un nombre illimité de chantiers hors ligne et prendre le plein contrôle de vos marges de projet.

---

## La logique métier et la méthodologie

La plupart des entrepreneurs petits et moyens souffrent de la **« fonte du profit »**—lorsqu’un projet est devisé avec une saine marge de 35 % sur le papier, mais ne finit par dégager que 8 % de profit net en fin d’année. Cela arrive parce que les tableurs d’estimation, les registres de terrain et les livres comptables fonctionnent avec des mathématiques incompatibles.

Pour éliminer la fonte du profit sans forcer les entrepreneurs dans des logiciels ERP d’entreprise complexes, cette boîte à outils met en œuvre une **méthodologie de comptabilité et d’exploitation du bâtiment à 4 piliers** :

1. **Chaînage relationnel de clés primaires (`Lead_ID → Quote_ID → Job_ID → Customer_ID`) :**
Dans les tableurs ad hoc, les estimations et les réalisés vivent dans des fichiers séparés sans lien structurel. Ce modèle impose une architecture de base de données relationnelle à l’intérieur d’Excel : une opportunité commerciale (`Lead_ID`) se convertit en une offre détaillée ; à l’attribution du contrat, `Approved_Jobs` fraie un `Job_ID` unique et fige le coût estimé d’origine comme référence figée. Chaque saisie en aval de feuille de temps (`Labor_Log`), chaque sortie de matériau (`Material_Usage`) et chaque tâche de planning doit référencer un `Job_ID` valide, garantissant une traçabilité à 100 % de l’offre initiale au coût final de chantier.
2. **Tarification par marge inversée vs. mathématique de majoration coût-plus :**
L’une des erreurs mathématiques les plus coûteuses dans le bâtiment est de confondre **majoration** et **marge brute** (majorer un coût de 1 000 $ de 25 % donne un prix de 1 250 $, ce qui ne représente qu’une **marge brute de 20 %**, effaçant silencieusement 5 % du profit net). Dans `Quote_Builder`, le moteur de tarification agrège le coût matériel direct ($M$), le coût de main-d’œuvre direct ($L$) et les frais généraux imputés ($O = (M + L) \times r_{\text{oh}}$), puis applique la **véritable mathématique de division par marge inversée** conjointement au calcul de la taxe :

$$\text{Devis suggéré avant impôt} = \frac{\text{Matériau direct} + \text{Main-d’œuvre directe} + \text{Frais généraux imputés}}{1 - \text{Marge cible \%}}$$



Cela garantit qu’à la signature du contrat, le pourcentage de marge brute cible est mathématiquement protégé.
3. **Coût standard et absorption de terrain par activité :**
Les équipes de terrain suivent des quantités opérationnelles (**heures travaillées** et **unités de matériaux consommées**), pas des dollars financiers. Le moteur de calcul des coûts découple la saisie de terrain de la valorisation financière en joignant `Labor_Log` et `Material_Usage` aux tables de taux principales (`Labor_Rates` et `Material_DB`). Au fur et à mesure que les quantités de terrain sont enregistrées, le moteur calcule dynamiquement les coûts directs absorbés et applique le taux de frais généraux global de `Settings` pour refléter le **coût total réel du chantier**.
4. **Écart budgétaire piloté par seuil et agrégation LTV :**
Au lieu de traiter le calcul des coûts de chantier comme un exercice post-mortem, `Job_Cost_Engine` calcule en continu l’**écart de coût ($\Delta C = \text{coût total réel} - \text{coût de référence estimé}$)** et le **% d’écart**. Si $\frac{\Delta C}{\text{coût estimé}} > \text{seuil de dépassement}$, le système déclenche un état d’exception automatisé pour intervention opérationnelle immédiate. Simultanément, les enregistrements `Job_ID` achevés s’agrègent par `Customer_ID` dans `Customer_History`, faisant passer la stratégie commerciale de l’appel d’offres sur chantier unique à la **contribution au profit vie client**.

---

## Pourquoi la plupart des erreurs de rentabilité des entrepreneurs sont structurelles—pas des erreurs de jugement

Les entrepreneurs expérimentés perdent rarement de l’argent parce qu’ils ne savent pas construire. Ils perdent de l’argent parce que **l’information se brise à chaque transfert opérationnel** :

### Avant : le piège du tableur entrepreneurial déconnecté

```text
Sales Lead Notes → Standalone Excel Quote → Signed PDF Contract → Paper Crew Timesheets → Shoebox Material Receipts → Year-End Accountant Tax Summary
                            ↘                                             ↙
                              Zero real-time link between Estimate & Actuals

```

* **L’échec du transfert :** L’estimation d’origine ne peut pas être comparée directement à la consommation réelle de terrain. Les heures de main-d’œuvre sont enregistrées sans `Job_ID`. Les reçus de matériaux sont entassés dans un compte de dépenses QuickBooks générique. Au moment où le chef d’entreprise voit le chiffre du profit, le chantier est clos depuis des mois.

### Après : un flux opérationnel relationnel connecté unique

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

## Tableurs déconnectés vs. ce système d’exploitation entrepreneurial connecté

| Dimension opérationnelle | Tableurs entrepreneurs déconnectés (sans cet outil) | Système de calcul des coûts et d’exploitation connecté (avec cet outil) |
| --- | --- | --- |
| **Transfert du prospect à l’estimation** | Les prospects vivent dans les e-mails ou les calepins tandis que les devis vivent dans des fichiers Excel individuels, rendant invisibles les taux de succès d’offres et le profit du pipeline. | `Lead_ID` relie les demandes commerciales directement à `Quote_Builder`, projetant la **contribution au profit du pipeline** selon la marge cible. |
| **Préservation de la référence budgétaire attribuée** | Une fois l’offre gagnée, les entrepreneurs modifient le fichier d’estimation ou démarrent un suiveur vierge, effaçant la référence de coût d’origine nécessaire à l’analyse d’écart. | `Approved_Jobs` verrouille le **coût total estimé** de l’offre attribuée sous un `Job_ID` unique pour un audit côte à côte **estimation vs. réel**. |
| **Feuilles de temps de terrain et consommation de matériaux** | Les heures de main-d’œuvre d’équipe et les sorties de matériaux de chantier restent des notes opérationnelles brutes au lieu de se convertir en coûts de chantier financiers en temps réel. | `Labor_Log` et `Material_Usage` lient les quantités de terrain au `Job_ID`, en multipliant automatiquement par les coûts unitaires **`Labor_Rates`** et **`Material_DB`**. |
| **Détection des dépassements de coûts en cours de projet** | Les dépassements de coûts et les explosions de main-d’œuvre sont découverts des semaines après l’achèvement du projet, quand les avenants ne peuvent plus être émis. | `Job_Cost_Engine` suit l’écart budgétaire en direct contre un **seuil de dépassement de coûts** centralisé, déclenchant des alertes instantanées pendant que le travail est encore en cours. |
| **Marge sur chantier unique vs. valeur vie client** | Un entrepreneur célèbre un chantier rentable pour un client sans réaliser que les quatre chantiers précédents pour ce même client ont perdu de l’argent. | `Customer_History` agrège le **total des chantiers, les revenus cumulés, le profit net $ et la marge réellement réalisée moyenne %** par compte client. |
| **Règles globales de frais généraux, taxe et marge** | Les pourcentages de frais généraux, les taux de taxe et les formules de majoration sont codés en dur sur des dizaines d’onglets, causant de coûteuses erreurs de devis. | `Settings` sert de **source unique de vérité**—mettre à jour les frais généraux ou la marge cible dans une seule cellule met à jour dynamiquement tous les modules en aval. |

---

## À qui cela s’adresse : rôles d’entrepreneurs cibles et cas d’usage par métier

Ce système est conçu pour les **entreprises de construction par projet, les entrepreneurs de métiers spécialisés, les chiffreurs et les propriétaires-exploitants (typiquement 1 à 50 employés)** qui veulent un contrôle rigoureux du calcul des coûts de chantier sans payer 500–1 500 $/mois pour des logiciels ERP de construction gonflés :

* **Entrepreneurs généraux (EG) et constructeurs / rénovateurs de maisons sur mesure :** utilisez-le comme **modèle Excel complet de gestion de projet de construction et de calcul des coûts de chantier** pour suivre plusieurs chantiers actifs, surveiller les taux de consommation des sous-traitants/main-d’œuvre et protéger les marges brutes de l’estimation à la réception finale.
* **Sous-traitants de métiers spécialisés (CVC, électricité, plomberie, couverture, aménagement paysager, peinture, béton) :** utilisez-le comme **suiveur d’estimation par métier et de main-d’œuvre/matériaux de terrain** pour standardiser les prix unitaires dans `Material_DB`, chiffrer les chantiers avec précision en quelques minutes et vérifier si les équipes de terrain battent ou dépassent les heures de main-d’œuvre estimées.
* **Chiffreurs en construction et directeurs commerciaux :** utilisez-le comme **générateur d’offres et de devis de construction standardisé** couplé à un **suiveur de prospects CRM pour entrepreneurs** pour éliminer les erreurs de mathématique majoration-vs-marge et prioriser les offres à forte marge.
* **Chefs de projet de construction et conducteurs de travaux :** utilisez-le comme **suiveur d’écart budgétaire estimation vs. réel et de planning** pour attraper les dépassements de main-d’œuvre et le gaspillage de matériaux en cours de projet—alors qu’il est encore temps de corriger ou de soumettre un avenant client.
* **Comptables du bâtiment, contrôleurs de gestion et CFO fractionnaires :** utilisez-le comme **sous-livre opérationnel de calcul des coûts de chantier** qui comble le fossé entre l’activité de terrain brute (feuilles de temps et consommation de matériaux) et les logiciels de comptabilité fiscale de haut niveau comme QuickBooks ou Xero.

*Remarque : ce classeur n’est **pas** destiné à remplacer le traitement légal de la paie, les logiciels de déclaration fiscale ou les logiciels d’estimation de plans d’entreprise. C’est le **moteur d’exécution opérationnel et commercial léger** qui garde votre pipeline commercial, vos estimations de projet, vos coûts de terrain et votre rentabilité client connectés en un seul endroit.*

---

## Questions fréquentes sur les scénarios d’estimation et de calcul des coûts de chantier

Si votre entreprise de construction recherche un modèle de tableur pratique pour résoudre l’un des maux de tête opérationnels suivants, ce système est fait pour vous :

* **Calcul des coûts de chantier estimation vs. réel dans Excel :** *Comment suivre les heures de main-d’œuvre de terrain réelles et la consommation de matériaux contre mon estimation de projet d’origine pour voir l’écart budgétaire en temps réel avant qu’un chantier ne dépasse son budget ?*
* **Standardiser les devis et offres de construction :** *Comment construire un modèle de devis entrepreneurial reproductible qui puise dans une liste de prix matériaux maîtresse et une carte de taux de main-d’œuvre tout en intégrant automatiquement les frais généraux, la marge brute cible et la taxe ?*
* **Connecter les prospects CRM d’entrepreneur à la rentabilité des projets :** *Comment suivre un chantier de construction depuis l’appel téléphonique initial du client (prospect) en passant par l’estimation, l’exécution du chantier, le profit net final et l’historique des clients récurrents dans un seul classeur Excel ?*
* **Identifier la fonte du profit à travers les équipes et les clients :** *Pourquoi mon entreprise de construction affiche-t-elle de forts revenus en fin d’année mais peu de liquidités en banque—et quels chantiers ou clients récurrents précis érodent silencieusement notre marge brute ?*

---

## À propos de Theseus Workshop

Je construis des modèles d’exploitation légers et transparentes, basés sur Excel et le navigateur, pour les entreprises où il y a trop de pièces mobiles pour être gardées dans une seule tête, mais où un déploiement logiciel d’entreprise coûteux crée plus de friction que de valeur.

Le principe de conception central derrière chaque outil est simple :

> **« Quel est le plus petit modèle opérationnel propre qui préserve la chaîne ininterrompue entre les événements quotidiens de terrain et les décisions de gestion rentables ? »**

Pour les entrepreneurs par projet, cela signifie unir **prospect → estimation → chantier approuvé → main-d’œuvre et matériaux de terrain → écart de coût de chantier → profit net → historique client** à l’intérieur d’un système unique, auditable et sans ballonnement.

---

*Mots-clés : modèle Excel de calcul des coûts de chantier, tableur d’estimation pour entrepreneurs, suiveur de coûts estimation vs. réel, CRM et générateur de devis pour entrepreneur général, calculateur de profit et de marge pour sous-traitant, Excel de registre matériaux et main-d’œuvre de construction, classeur de gestion de projet et de calcul des coûts de chantier.*

---

## Détails techniques

<details>
<summary>Pour les réviseurs techniques, les pratiquants d’Excel et les collaborateurs</summary>

### Architecture du classeur

Le classeur se compose de **12 feuilles principales** organisées en trois couches fonctionnelles. L’architecture sépare les données de référence contrôlées des registres opérationnels et des calculs en aval, tout en maintenant un flux directionnel de l’entrée → le calcul → la sortie. 

| Couche                      | Feuille             | Rôle principal                               |
| -------------------------- | ------------------ | ------------------------------------------ |
| **Données de référence & contrôle**  | `Settings`         | Paramètres métier centraux                |
|                            | `Material_DB`      | Catalogue et coûts matériaux standard        |
|                            | `Labor_Rates`      | Catégories de main-d’œuvre standard et taux horaires |
| **Exploitation & exécution** | `Lead_Tracker`     | Pipeline d’opportunités                       |
|                            | `Quote_Builder`    | Calcul d’estimation et de devis                      |
|                            | `Approved_Jobs`    | Registre maître des projets contractualisés                  |
|                            | `Schedule`         | Jalons et alertes d’exécution            |
|                            | `Labor_Log`        | Registres de main-d’œuvre réels                       |
|                            | `Material_Usage`   | Consommation de matériaux réelle                |
| **Moteur & analytique**     | `Job_Cost_Engine`  | Calcul des coûts et rentabilité réels des projets   |
|                            | `Profit_Dashboard` | Analyse de rentabilité au niveau de la direction                    |
|                            | `Customer_History` | Historique commercial au niveau client          |

Le flux de données principal est :

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

Le principe de conception central est la **clé de référence unifiée** : `Job_ID` relie le projet approuvé aux registres de planning, aux registres de main-d’œuvre, à la consommation de matériaux et au moteur de calcul des coûts de chantier. L’objectif est d’éliminer le problème d’îlots de données entre la planification commerciale et l’exécution des projets. 

### Couche de contrôle central

`Settings` est le point de maintenance unique du classeur.

Les paramètres définis sont :

| Cellule | Paramètre               |  Par défaut | Utilisé pour                                 |
| ---- | ----------------------- | -------: | ---------------------------------------- |
| `B2` | Symbole de devise par défaut |      `$` | Présentation monétaire                    |
| `B3` | Taux de taxe                | `13.00%` | Conversion taxe comprise / hors taxe |
| `B4` | Taux de frais généraux           | `10.00%` | Imputation des coûts indirects                 |
| `B5` | Marge cible           | `25.00%` | Rentabilité des devis et des opportunités      |
| `B6` | Seuil de dépassement       |  `5.00%` | Alerte de coûts de projet                     |
| `B7` | Taux de change USD/CAD   | `1.0000` | Conversion de devise réservée             |

Ces valeurs sont délibérément centralisées. L’architecture exige que les formules en aval référencent `Settings` plutôt que de coder en dur des valeurs comme `0.13`, `0.10` ou `0.25`. La contre-vérification de l’implémentation confirme que les paramètres de taxe, de frais généraux, de marge cible et de dépassement sont propagés aux modules de calcul appropriés. 

### Trois pièges qui attrapent même les entrepreneurs expérimentés

#### Piège 1 — Traiter la marge du devis d’origine comme la marge actuelle du projet

**1. Décision prise**

Un projet a été accepté parce que l’estimation affichait une marge cible acceptable.

**2. Hypothèse cachée**

L’estimation d’origine est traitée comme si elle restait représentative une fois l’exécution commencée.

**3. Ce qui change la décision**

Les heures de main-d’œuvre réelles et la consommation de matériaux peuvent dépasser les hypothèses d’origine.

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

**4. Pourquoi le raisonnement échoue**

Le devis d’origine représente une structure de coûts planifiée. Ce n’est pas une preuve de consommation réelle.

**5. Raisonnement corrigé**

Conserver le coût estimé comme référence et calculer le coût réel indépendamment à partir de `Labor_Log` et `Material_Usage`.

**6. Décision corrigée**

Le projet peut être surveillé pour détecter la détérioration de la marge tant qu’une action corrective est encore possible.

<details>
<summary>Logique des formules</summary>

La chaîne de rentabilité réelle est :

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

L’implémentation définit le revenu contractuel sur une base hors taxe :

```excel
=Contract_Amount/(1+Settings!$B$3)
```

Le profit réel est ensuite calculé comme le revenu contractuel hors taxe moins le coût total réel. 

</details>

#### Piège 2 — Juger la rentabilité d’un projet à partir des seuls coûts directs

**1. Décision prise**

Les coûts matériels et de main-d’œuvre semblent rester sous le revenu contractuel, donc le projet est considéré comme sain.

**2. Hypothèse cachée**

La main-d’œuvre directe et le matériel sont traités comme le coût économique complet du projet.

**3. Ce qui change la décision**

Les coûts de gestion indirects ne sont pas visibles dans les dépenses directes du projet mais doivent tout de même être imputés.

**4. Pourquoi le raisonnement échoue**

Le modèle commercial du classeur définit le coût du projet comme matériel direct + main-d’œuvre directe + frais généraux imputés.

**5. Raisonnement corrigé**

Appliquer le taux de frais généraux centralisé de manière cohérente à la base des coûts directs.

**6. Décision corrigée**

La marge du projet est évaluée avec la même structure de coûts que celle utilisée lors de l’estimation.

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
<summary>Logique des formules</summary>

```excel
Overhead_Allocation =
    (Actual_Material_Cost + Actual_Labor_Cost)
    * Settings!$B$4

Actual_Total_Cost =
    Actual_Material_Cost
    + Actual_Labor_Cost
    + Overhead_Allocation
```

L’implémentation spécifie le même concept de frais généraux pour le calcul des coûts au stade du devis et pour le calcul des coûts réels de chantier. 

</details>

#### Piège 3 — Attendre la clôture du projet pour détecter un dépassement de coûts

**1. Décision prise**

La direction attend l’achèvement du projet pour déterminer s’il est resté dans le budget.

**2. Hypothèse cachée**

L’écart de coûts est traité comme une métrique de reporting plutôt que comme un signal de contrôle opérationnel.

**3. Ce qui change la décision**

Un projet peut dépasser son coût estimé avant son achèvement, alors qu’il reste encore des travaux potentiellement contrôlables.

**4. Pourquoi le raisonnement échoue**

Une alerte tardive peut expliquer le résultat final mais ne peut pas influencer les coûts déjà engagés.

**5. Raisonnement corrigé**

Comparer le coût total réel au coût total estimé d’origine et évaluer l’écart par rapport au seuil de dépassement centralisé.

**6. Décision corrigée**

Un projet franchissant le seuil configuré devient une exception nécessitant l’attention de la direction.

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
<summary>Logique des formules</summary>

L’implémentation définit `Cost_Variance` comme :

```excel
=Actual_Total_Cost-Estimated_Total_Cost
```

La logique d’alerte évalue le pourcentage de dépassement de coûts réel par rapport à `Settings!B6`. Le tableau de bord compte ensuite les projets classés comme dépassements de coûts sévères. 

</details>

### Scénario d’exemple

Un entrepreneur accepte un projet avec un montant contractuel taxes comprises de **113 000 $**.

Le taux de taxe configuré est de **13 %**, donc le revenu contractuel hors taxe est :

```text
$113,000 ÷ 1.13
= $100,000
```

Le devis d’origine contient :

| Composante de coût           |   Estimé |
| ------------------------ | ----------: |
| Matériaux                |     42 000 $ |
| Main-d’œuvre                    |     35 000 $ |
| Imputation des frais généraux      |      7 700 $ |
| **Coût total estimé** | **84 700 $** |
| **Profit initial**       | **15 300 $** |
| **Marge initiale**       |  **15,30 %** |

Pendant l’exécution, les registres réels s’accumulent :

| Composante de coût        |      Réel |
| --------------------- | ----------: |
| Matériaux             |     47 000 $ |
| Main-d’œuvre                 |     40 000 $ |
| Imputation des frais généraux   |      8 700 $ |
| **Coût total réel** | **95 700 $** |
| **Profit réel**     |  **4 300 $** |
| **Marge réelle**     |   **4,30 %** |

Le projet est donc passé d’une **marge projetée de 15,30 % à une marge réelle de 4,30 %**.

L’écart de coûts est :

```text
$95,700 - $84,700
= $11,000
```

Le pourcentage de dépassement de coûts est :

```text
$11,000 ÷ $84,700
≈ 12.99%
```

Avec le seuil de dépassement par défaut de `5.00%`, ce projet est clairement hors du contrôle normal des coûts.

La conclusion managériale correcte n’est **pas simplement « le projet reste rentable. »**

La conclusion plus utile est :

> **Le projet reste positif en profit absolu, mais sa structure de coûts s’est sensiblement détériorée et nécessite une intervention.**

La prochaine revue devrait se concentrer sur l’origine de l’écart—heures de main-d’œuvre, consommation de matériaux ou les deux—et sur la question de savoir si les travaux restants du projet peuvent être contrôlés.

C’est précisément pourquoi le système préserve à la fois l’estimation d’origine et les coûts d’exécution réels au lieu de remplacer l’estimation par le dernier chiffre de dépenses. `Job_Cost_Engine` est conçu pour exposer la différence entre ces deux états. 

### Référence des formules

<details>
<summary>Calculs des prospects et du pipeline</summary>

**Durée dans le pipeline**

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

**Objet :** Calcule combien de temps une opportunité reste active dans le pipeline tout en traitant les prospects gagnés et perdus comme clos.

**Profit potentiel**

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

**Objet :** Convertit le budget estimé du projet en profit potentiel en utilisant l’hypothèse de marge cible centralisée plutôt qu’un pourcentage codé en dur.

</details>

<details>
<summary>Calculs des devis et des estimations</summary>

Le calcul du devis suit :

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

**Logique du devis suggéré**

```excel
=(Estimated_Total_Cost/(1-Settings!$B$5))
*(1+Settings!$B$3)
```

**Logique de la marge projetée**

```excel
=((Quote_Amount/(1+Settings!$B$3))
-Estimated_Total_Cost)
/
(Quote_Amount/(1+Settings!$B$3))
```

`Quote_Builder` utilise `XLOOKUP` pour récupérer les taux matériaux et de main-d’œuvre standard, tandis que `MAP` et `LAMBDA` permettent aux colonnes de calcul de se déverser dynamiquement à mesure que les registres s’étendent. 

</details>

<details>
<summary>Référence du projet approuvé</summary>

**Coût total estimé reporté depuis le devis**

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

**Profit projeté initial**

```excel
=(Contract_Amount/(1+Settings!$B$3))
-Estimated_Total_Cost
```

**Marge projetée initiale**

```excel
=Initial_Projected_Profit
/
(Contract_Amount/(1+Settings!$B$3))
```

L’objectif est de préserver l’économie commerciale au moment où le devis devient un projet approuvé. 

</details>

<details>
<summary>Coûts réels de main-d’œuvre et de matériaux</summary>

**Coût de main-d’œuvre réel**

```excel
=Actual_Hours*Hourly_Rate
```

Le taux horaire est récupéré depuis `Labor_Rates` en fonction du `Labor_Code`. 

**Coût matériel réel**

```excel
=Actual_Quantity*Standard_Material_Cost
```

Le coût matériel est récupéré depuis `Material_DB` à l’aide du code matériau.

Les deux flux de coûts réels sont regroupés par `Job_ID` avant d’entrer dans `Job_Cost_Engine`.

</details>

<details>
<summary>Coût et rentabilité du chantier</summary>

**Revenu contractuel hors taxe**

```excel
=Contract_Amount/(1+Settings!$B$3)
```

**Imputation réelle des frais généraux**

```excel
=(Actual_Material_Cost+Actual_Labor_Cost)
*Settings!$B$4
```

**Coût total réel**

```excel
=Actual_Material_Cost
+Actual_Labor_Cost
+Overhead_Allocation
```

**Profit réel**

```excel
=Contract_Revenue-Actual_Total_Cost
```

**Marge réelle**

```excel
=Actual_Profit/Contract_Revenue
```

**Écart de coûts**

```excel
=Actual_Total_Cost-Estimated_Total_Cost
```

**Alerte de dépassement de coûts**

La condition de dépassement compare l’écart de coûts réel au seuil configuré `Settings!B6` plutôt que d’intégrer un pourcentage fixe dans la formule. 

</details>

<details>
<summary>Alertes de planning et d’exécution</summary>

**Jours de retard**

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

**Statut de la tâche**

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

Le calcul distingue le travail achevé du travail inachevé qui a dépassé sa date de fin planifiée. 

</details>

<details>
<summary>Historique client et analyse de valeur</summary>

**Liste des clients**

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

**Contribution totale au profit**

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

**Classification de la valeur client**

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

L’implémentation source utilise la contribution cumulée au profit et la marge moyenne comme base de la classification de la valeur client, plutôt que d’évaluer les clients par le seul revenu. 

</details>

### Règles de validation

| Champ / Zone                    | Règle                                                                                | Comportement en cas d’erreur                                                                                   |
| ------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `Settings!B3` Taux de taxe          | Doit être un pourcentage valide utilisé de manière cohérente dans les calculs de devis et de revenus. | Une configuration incorrecte produit des montants taxes comprises et hors taxe incohérents.           |
| `Settings!B4` Taux de frais généraux     | Doit être maintenu de manière centralisée plutôt qu’intégré dans les formules.                      | Le calcul des coûts de projet peut devenir incohérent s’il est écrasé manuellement ailleurs.                        |
| `Settings!B5` Marge cible     | Doit être un pourcentage valide utilisé par les calculs de potentiel de prospect et de devis.           | Une valeur incorrecte change l’économie commerciale projetée.                                          |
| `Settings!B6` Seuil de dépassement | Doit être un pourcentage valide utilisé par les alertes de coûts de chantier.                               | Une valeur incorrecte change la sensibilité des alertes de coûts.                                          |
| `Material_Code`                 | Doit correspondre à un enregistrement valide dans `Material_DB`.                                 | La recherche peut renvoyer `#N/A` ou zéro lorsque le code est manquant ou malformé.                          |
| `Labor_Code`                    | Doit correspondre à un enregistrement valide dans `Labor_Rates`.                                 | Le taux horaire ne peut pas être récupéré correctement.                                                       |
| `Job_ID`                        | Doit référencer le projet approuvé pertinent.                                       | Les transactions de main-d’œuvre/matériaux peuvent se détacher du projet correct.                        |
| `Actual_Hours`                  | Doit être numérique et représenter la consommation réelle de main-d’œuvre du projet.                     | Des valeurs invalides faussent le coût de main-d’œuvre réel.                                                        |
| `Actual_Quantity`               | Doit être numérique et lié au code matériau pertinent.                             | Des valeurs invalides faussent le coût matériel réel.                                                            |
| `Completion_Pct`                | La plage attendue est `0%–100%`.                                                        | Les valeurs supérieures ou égales à 100 % sont traitées comme achevées ; les travaux en retard inachevés génèrent une alerte.    |
| Plage de sortie du tableau dynamique      | La destination de déversement doit rester libre.                                                | Les cellules occupées peuvent générer `#SPILL!`.                                                           |
| Mode de calcul Excel          | Doit rester **Automatique**.                                                          | Les changements apportés à `Settings` peuvent ne pas se propager immédiatement lorsque le calcul est réglé sur Manuel.           |
| Formatage monétaire             | Les cellules monétaires doivent utiliser le format de devise prévu.                               | Les valeurs peuvent s’afficher avec un symbole monétaire incorrect même lorsque le nombre sous-jacent est correct. |

L’implémentation recommande la validation des données Excel pour les champs de saisie opérationnels lorsque c’est praticable, et identifie explicitement `#SPILL!`, le mode de calcul manuel, les codes de données de référence manquants et le formatage monétaire incorrect comme des modes de défaillance opérationnels courants. 

La contre-vérification du classeur vérifie également que les paramètres globaux sont référencés en aval et que les formules de calcul ne codent pas en dur les principales hypothèses métier. 

</details>

## Notes d’implémentation

### Conception à tableaux dynamiques

Le classeur est conçu pour Microsoft 365 / Excel 2021+ et utilise les fonctions modernes à tableaux dynamiques là où elles offrent un avantage opérationnel clair.

Les fonctions principales incluent :

* `XLOOKUP`
* `FILTER`
* `UNIQUE`
* `SUMIFS`
* `MAP`
* `LET`
* `LAMBDA`

L’objectif de conception est d’éviter le glissement de formules routinier et l’extension manuelle des plages.

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

C’est particulièrement important pour les flux de travail des entrepreneurs parce que les prospects, les chantiers, les registres de main-d’œuvre et les transactions matérielles s’ajoutent continuellement au fil du temps.

L’implémentation utilise la logique à tableaux dynamiques dans des domaines tels que la durée dans le pipeline, le profit potentiel, les calculs de devis, les alertes de planning et l’analyse client. 

### Architecture à clé de projet

`Job_ID` est l’identifiant central qui connecte la couche d’exécution.

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

Cela crée une relation unique au niveau du projet entre :

* le contrat approuvé ;
* les travaux planifiés ;
* la main-d’œuvre réelle ;
* les matériaux réels ;
* le coût réel ;
* la rentabilité du projet.

L’architecture identifie explicitement le `Job_ID` unifié comme le mécanisme central pour éliminer les îlots de données entre l’exécution des projets et l’analyse financière. 

### Rapprochement des coûts de projet

Le classeur maintient une distinction claire entre **ce qui a été estimé** et **ce qui s’est réellement produit**.

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

Cela permet à la direction d’identifier si l’économie d’un projet s’est détériorée parce que la consommation réelle de ressources s’est écartée de l’estimation d’origine.

`Job_Cost_Engine` agit donc comme la couche de rapprochement entre la planification commerciale et l’exécution opérationnelle. 

### Modèle de dépendance du tableau de bord

`Profit_Dashboard` n’est pas un tableau de reporting indépendant.

Il se situe en aval du moteur de calcul :

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

Le tableau de bord résume les sorties générées par les registres de projet sous-jacents et la couche de calcul plutôt que d’exiger de la direction qu’elle maintienne des chiffres de reporting séparés.

L’implémentation définit les métriques du tableau de bord, notamment :

* le total des projets ;
* le revenu hors taxe ;
* le coût total réel ;
* le profit brut ;
* la marge globale ;
* le nombre de projets en dépassement de coûts sévère. 

---

## Flux de travail opérationnel

Le rythme opérationnel recommandé suit la même structure que l’architecture du classeur.

### Début de journée

Passer en revue :

* `Settings` ;
* l’exhaustivité des données de référence ;
* les prospects actifs ;
* le statut actuel des projets ;
* les exceptions de planning en suspens.

L’objectif est de garantir que l’environnement de calcul et les entrées opérationnelles sont à jour avant que de nouveaux registres ne soient saisis. 

### Pendant les opérations

Mettre à jour les registres opérationnels concernés au fur et à mesure que les événements métier se produisent :

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

Le principe est d’**enregistrer l’événement à la source plutôt que de le reconstruire plus tard**.

### Revue de fin de journée

Passer en revue les sorties calculées :

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

Cela transforme le classeur d’un simple fichier de reporting statique en un système de contrôle opérationnel léger.

---

## Cadence de revue recommandée

| Fréquence       | Revue principale                          | Focus recommandé                                                        |
| --------------- | --------------------------------------- | ------------------------------------------------------------------------ |
| **Quotidien**       | `Schedule` + registres d’exécution             | Tâches en retard, saisies de main-d’œuvre/matériaux manquantes                            |
| **Hebdomadaire**      | `Lead_Tracker` + `Profit_Dashboard`     | Pipeline, projets actifs, dépassements de coûts émergents                        |
| Par projet | `Job_Cost_Engine`                       | Coût et marge estimés vs. réels                                     |
| **Mensuel**     | `Profit_Dashboard` + `Customer_History` | Rentabilité globale et contribution client                          |
| **Trimestriel**   | `Settings` + données de référence                | Taux de main-d’œuvre, coûts matériaux, frais généraux, marge cible, seuils d’alerte |

L’objectif de cette cadence est de maintenir séparées la maintenance des données opérationnelles et la revue managériale : les équipes de terrain et de projet maintiennent les registres sources, tandis que la direction utilise les calculs résultants pour prendre des décisions.

---

## Principes de saisie des données

### Saisir les données sources une seule fois

Le classeur est conçu autour d’un principe de **source unique de vérité**.

Par exemple :

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

Le taux matériel devrait donc être maintenu dans la table de référence plutôt que resaisi indépendamment dans plusieurs zones de calcul.

Le même principe s’applique aux taux de main-d’œuvre et aux hypothèses métier globales.

### Utiliser les identifiants de projet de manière cohérente

Dès qu’un projet approuvé reçoit un `Job_ID`, tous les registres d’exécution du projet subséquents devraient référencer cet identifiant.

```text
Job_ID: JOB-001
    ├── Schedule
    ├── Labor_Log
    ├── Material_Usage
    └── Job_Cost_Engine
```

Un `Job_ID` manquant ou mal saisi rompt la relation entre l’activité opérationnelle et la rentabilité du projet.

### Ne pas écraser les sorties calculées

Les colonnes calculées devraient rester pilotées par les formules.

Les utilisateurs devraient mettre à jour les registres sources tels que :

* les informations de prospect ;
* les entrées de devis ;
* le statut du projet ;
* les heures de main-d’œuvre ;
* les quantités de matériaux ;
* les dates de planning.

Ils ne devraient pas remplacer manuellement les éléments calculés :

* les coûts totaux ;
* les marges ;
* l’écart de coûts ;
* la rentabilité du projet ;
* les résumés au niveau client.

---

## Limites connues

Ce classeur est volontairement léger.

Il ne devrait **pas** être traité comme un remplacement de :

* logiciels de comptabilité ;
* traitement de la paie ;
* planification des ressources d’entreprise ;
* systèmes d’approvisionnement ;
* plateformes de gestion des services de terrain ;
* bases de données transactionnelles multi-utilisateurs.

Il est conçu pour le contrôle opérationnel et l’aide à la décision là où Excel reste un environnement de travail approprié.

### Version d’Excel

L’implémentation repose sur des fonctions Excel modernes et est destinée à **Microsoft 365 / Excel 2021+**.

Les versions plus anciennes d’Excel peuvent ne pas prendre en charge toutes les fonctions à tableaux dynamiques utilisées par le classeur.

### Mode de calcul

Excel devrait rester en mode **Calcul automatique**.

Si le calcul est désactivé manuellement, les changements apportés à `Settings` ou aux registres sources peuvent ne pas se propager immédiatement à travers la chaîne de calcul. 

### Espace de déversement des tableaux dynamiques

Les formules dynamiques nécessitent des plages de déversement libres.

Si une autre valeur occupe une plage de déversement requise, Excel peut renvoyer `#SPILL!`.

La réponse appropriée est d’inspecter la plage de déversement plutôt que de copier manuellement les formules dans des cellules supplémentaires. 

### Dépendance aux données de référence

`Material_Code` et `Labor_Code` dépendent des enregistrements correspondants dans `Material_DB` et `Labor_Rates`.

Si un code est manquant ou malformé, les recherches en aval et les calculs de coûts peuvent ne pas renvoyer la valeur prévue. 

---

## Autres outils de cette série

Une collection d’outils Excel légers d’aide à la décision pour la planification opérationnelle, le calcul des coûts, la rentabilité et l’analyse métier.

* **Trousse Excel de paie d’entreprise et de planification annuelle de la capacité de la main-d’œuvre**
* **Trousse d’aide à la décision sur les coûts énergétiques industriels et le TCO**
* **Moteur de profit e-commerce et trousse de rapprochement financier**
* **Trousse Excel de coûts de fabrication alimentaire et d’économie unitaire**
* **Trousse Excel d’exploitation de biens locatifs et d’intelligence des vacances**

---

## Licence

Ce projet est publié sous la **licence Apache 2.0**.

Vous êtes libre d’utiliser, de modifier, de reproduire et de distribuer l’œuvre conformément aux termes de la licence.

Voir le fichier `LICENSE` du dépôt pour les termes complets de la licence.
