[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Système de gestion des opérations et de la rentabilité pour entrepreneurs

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-green.svg)
![Tool Type](https://img.shields.io/badge/Tool%20Type-Contractor%20Operations%20%26%20Profitability-orange.svg)

**Un système d’exploitation Excel connecté pour gérer l’ensemble du flux de travail de l’entrepreneur, du prospect → estimation → projet → main-d’œuvre et matériaux → coût de projet → bénéfice → historique client.**

**Aucune inscription. Aucune installation. Gratuit dans votre navigateur.**

Essayez gratuitement la version navigateur. Si vous avez besoin de la version Excel, vous pouvez l’acheter avec une garantie de remboursement de 30 jours, sans poser de questions.
> Disponible en deux formats : **version navigateur (HTML)** et **version Excel**.

[Démo en ligne](https://hyvoid.github.io/Contractor-Operations-Profitability-Management-System/) · [Télécharger Excel](https://www.theseusworkshop.com/l/ftbvja?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=contractor-operations-profitability) · [Détails techniques](#technical-details)

---

## Le flux de travail complet de l’entrepreneur

La plupart des tableurs pour entrepreneurs ne résolvent qu’une seule partie de l’activité.

Ce classeur est conçu autour de **toute la chaîne opérationnelle** :

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

L’objectif n’est pas simplement de suivre les projets. Il s’agit de maintenir **connecté l’historique commercial et opérationnel de chaque projet**.

Un prospect entre dans le pipeline.

Le prospect devient une estimation.

Une estimation aboutie devient un projet approuvé avec un `Job_ID` unique.

Pendant l’exécution, la consommation réelle de main-d’œuvre et de matériaux est enregistrée contre ce projet.

Ces enregistrements alimentent le module de coût de projet.

Le coût de projet réel est ensuite comparé à l’économie initiale du projet pour déterminer la rentabilité actuelle et identifier les dépassements de coûts.

Enfin, les résultats des projets terminés s’accumulent dans l’historique client, permettant à la direction de comprendre quels clients ont généré un chiffre d’affaires et des bénéfices significatifs au fil du temps.

La mise en œuvre utilise des feuilles dédiées pour `Lead_Tracker`, `Quote_Builder`, `Approved_Jobs`, `Labor_Log`, `Material_Usage`, `Job_Cost_Engine`, `Profit_Dashboard` et `Customer_History`, avec `Job_ID` servant d’identifiant de projet central à travers l’exécution et le calcul des coûts.

### Un classeur. Un flux opérationnel connecté.

| Étape                 | Module du classeur                  | Ce qu’il gère                                                                              |
| --------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------- |
| **Prospect**          | `Lead_Tracker`                      | Demandes clients, opportunités, budgets, statut, estimateur responsable                     |
| **Estimation**        | `Quote_Builder`                     | Besoins en matériaux, heures de main-d’œuvre, coût estimé, frais généraux, marge cible, devis suggéré |
| **Projet**            | `Approved_Jobs`                     | Projets contractés, `Job_ID`, valeur du contrat, dates, chef de projet, statut              |
| **Main-d’œuvre et matériaux** | `Labor_Log` + `Material_Usage` | Consommation réelle de main-d’œuvre de terrain et de matériaux                             |
| **Coût de projet**    | `Job_Cost_Engine`                   | Coût matériel réel, coût de main-d’œuvre, frais généraux, coût total, écart                 |
| **Bénéfice**          | `Job_Cost_Engine` + `Profit_Dashboard` | Bénéfice du projet, marge, alertes de dépassement de coûts, rentabilité globale          |
| **Historique client** | `Customer_History`                  | Projets historiques, chiffre d’affaires, contribution au bénéfice, marge moyenne, valeur client |

Le résultat est un flux de travail pratique permettant de passer **de l’activité commerciale à l’économie de projet jusqu’à l’intelligence commerciale au niveau client**, plutôt que de maintenir des suivis déconnectés.

---

## Quelles décisions ce système vous aide-t-il à prendre ?

Le système est construit autour de sept questions opérationnelles :

### 1. Quels prospects méritent une attention ?

`Lead_Tracker` enregistre le pipeline d’opportunités et calcule à la fois la durée du pipeline et le bénéfice potentiel sur la base de la marge cible configurée.

Cela permet de visualiser le pipeline commercial actif non seulement par le nombre de prospects, mais aussi par la contribution commerciale potentielle.

### 2. À quel prix le projet doit-il être proposé ?

`Quote_Builder` combine les quantités de matériaux estimées et les heures de main-d’œuvre avec les données centralisées de `Material_DB` et `Labor_Rates`.

Le modèle calcule le coût direct, applique l’imputation des frais généraux, déduit le coût total estimé, et remonte à partir de la marge cible pour produire un devis TTC suggéré.

### 3. Qu’est-ce qui a été réellement contracté ?

`Approved_Jobs` établit le dossier de projet officiel et génère l’identifiant `Job_ID` unique utilisé tout au long du flux d’exécution et de calcul des coûts.

Cela préserve la référence commerciale initiale par rapport à laquelle la performance réelle pourra être évaluée ultérieurement.

### 4. Que consomme réellement le projet ?

Pendant l’exécution, la main-d’œuvre de terrain est enregistrée dans `Labor_Log` et la consommation de matériaux dans `Material_Usage`.

Chaque enregistrement est connecté au `Job_ID` pertinent, permettant à l’activité opérationnelle réelle de devenir des données de coût au niveau du projet.

### 5. Le coût de projet réel s’éloigne-t-il de l’estimation ?

`Job_Cost_Engine` agrège les coûts réels de main-d’œuvre et de matériaux et applique l’imputation des frais généraux configurée.

Le projet peut donc être évalué par rapport à son coût estimé initial, plutôt que de regarder seulement les dépenses accumulées.

### 6. Le projet est-il encore rentable ?

Le système sépare la **marge projetée initiale** du **résultat réel du projet**.

Cette distinction est importante car un projet peut démarrer avec un devis acceptable et perdre ensuite sa rentabilité lorsque les heures de main-d’œuvre réelles, la consommation de matériaux ou d’autres coûts de projet dépassent les hypothèses initiales.

### 7. Quels clients ont généré un bénéfice significatif ?

`Customer_History` agrège l’activité de projet historique par client, incluant le nombre total de projets, le chiffre d’affaires contractuel, la contribution au bénéfice, la marge bénéficiaire moyenne, la date du dernier contrat et l’évaluation du client.
---

## Flux de travail de démarrage rapide

### Étape 1 — Configurer la couche de contrôle

Ouvrez `Settings` et établissez les hypothèses commerciales utilisées dans l’ensemble du classeur :

* Taux de taxe
* Taux de frais généraux
* Marge cible
* Seuil de dépassement de coûts
* Devise
* Taux de change

L’architecture traite `Settings` comme la console de contrôle centrale. Les hypothèses commerciales doivent y être maintenues plutôt que codées en dur dans des formules individuelles.

### Étape 2 — Maintenir les données de référence des coûts

Mettez à jour :

* `Material_DB` — codes matériaux, désignations, spécifications, unités et coûts standard.
* `Labor_Rates` — catégories de main-d’œuvre, codes et taux horaires standard.

Ceux-ci deviennent les points de référence communs tant pour l’estimation que pour le calcul réel des coûts de projet.

### Étape 3 — Exécuter le flux de travail de l’entrepreneur

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

La procédure opérationnelle standard suit la même séquence : capturer le prospect, générer le devis, établir le projet approuvé, enregistrer l’exécution, puis examiner le calcul automatisé des coûts et de la rentabilité.

### Étape 4 — Examiner les exceptions, pas seulement les totaux

Le flux de gestion doit se concentrer sur :

* les prospects stagnants ;
* les projets qui s’écartent du coût estimé ;
* les jalons d’exécution en retard ;
* les marges de projet en déclin ;
* les dépassements de coûts significatifs ;
* les clients à haute valeur.

Le classeur vise donc à soutenir **l’intervention opérationnelle**, et non simplement à produire un rapport historique.

---

## Pourquoi la plupart des erreurs de rentabilité des entrepreneurs ne sont pas des erreurs de jugement

Un projet peut être géré par des personnes expérimentées et produire malgré tout une image de rentabilité trompeuse.

Le problème sous-jacent est souvent structurel :

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

À chaque transfert, l’information peut devenir déconnectée.

L’estimation initiale peut ne plus être directement comparable à la consommation réelle.

La main-d’œuvre peut être enregistrée sans l’identifiant de projet correspondant.

L’utilisation des matériaux peut être suivie opérationnellement sans être convertie en coût de projet.

Et la direction peut finir par recevoir un chiffre de rentabilité sans chemin clair vers les hypothèses et les transactions qui l’ont produit.

Ce système corrige cette défaillance en créant une chaîne connectée :

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

La distinction est importante.

### Avant

```text
Sales → Quote → Project Execution → Accounting
          ↘             ↙
           disconnected data
```

### Après

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

L’architecture cartographie explicitement les entrées et les sorties à travers l’ensemble du classeur, de sorte que chaque grand enregistrement opérationnel ait une finalité aval définie.

---

## Ce que le classeur livre réellement

Ceci n’est pas positionné comme un remplacement d’ERP ou un tableau de bord générique.

C’est un **modèle opérationnel et d’aide à la décision léger pour entrepreneurs** qui connecte les informations nécessaires pour gérer l’économie de projet.

### Il fournit un dossier de projet continu

De :

**Prospect → Estimation → Projet → Main-d’œuvre et matériaux → Coût de projet → Bénéfice**

le même projet peut être suivi tout au long de son cycle de vie commercial et opérationnel.

### Il préserve l’estimation initiale comme référence

Le projet approuvé conserve le coût estimé et la rentabilité projetée, afin que la performance réelle du projet puisse être comparée à ce qui était initialement attendu.

### Il convertit l’activité de terrain en information financière

Les heures de main-d’œuvre et les quantités de matériaux ne sont pas laissées comme de simples enregistrements opérationnels. Elles sont liées à des taux et des coûts standardisés et deviennent en fin de compte des entrées pour le module de coût de projet.

### Il sépare la rentabilité de projet de la rentabilité client

Un projet unique répond à la question :

> **Ce projet a-t-il été rentable ?**

L’historique client répond à la question à plus long terme :

> **Ce client a-t-il été commercialement précieux sur plusieurs projets ?**

Cette distinction soutient de meilleures décisions concernant l’établissement futur des devis et la priorisation des clients.
---

## À propos du développeur

L’approche derrière ce classeur est simple :

**Construire le plus petit modèle opérationnel capable de préserver la chaîne entre les événements commerciaux et les décisions de gestion.**

L’objectif n’est pas d’ajouter des fonctionnalités logicielles pour elles-mêmes.

Pour les opérations d’entrepreneur, la chaîne utile est déjà claire :

```text
Lead
→ Estimate
→ Job
→ Labor & Materials
→ Job Cost
→ Profit
→ Customer History
```

Le classeur transforme cette chaîne en un flux de travail opérationnel réutilisable basé sur Excel, avec des hypothèses centralisées, des identifiants de projet connectés, des calculs automatisés et des sorties de gestion.

Il est destiné aux entreprises qui ont besoin de plus de structure que des tableurs déconnectés, mais qui n’ont pas besoin d’une plateforme d’entreprise simplement pour comprendre d’où proviennent le chiffre d’affaires, les coûts et les bénéfices des projets.

## Problèmes courants des entrepreneurs que cela résout

| Problème                                                   | Sans cet outil                                                                                                                   | Avec cet outil                                                                                                                             |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Les données de prospects et de devis se déconnectent**   | Les opportunités commerciales et les enregistrements de devis sont maintenus séparément, ce qui rend plus difficile l’évaluation de la valeur du pipeline et de la conversion des devis. | `Lead_ID` connecte les opportunités aux estimations, tandis que le bénéfice estimé peut être déduit de la marge cible configurée.           |
| **Le budget de projet initial disparaît après l’attribution** | Une fois qu’un devis devient un contrat, les coûts réels du projet peuvent être suivis sans préserver l’estimation initiale comme référence. | `Approved_Jobs` reporte le coût total estimé du devis dans le dossier de projet pour l’analyse d’écart ultérieure.                           |
| **La consommation de main-d’œuvre et de matériaux reste purement opérationnelle** | Les heures de terrain et l’utilisation des matériaux sont enregistrées mais ne deviennent pas automatiquement des informations financières au niveau du projet. | `Labor_Log` et `Material_Usage` connectent la consommation réelle au `Job_ID`, aux taux de main-d’œuvre standard et aux coûts matériels.     |
| **Les dépassements de coûts sont découverts trop tard**    | La direction ne voit le coût final qu’après que l’opportunité de corriger l’exécution a largement disparu.                         | `Job_Cost_Engine` compare le coût total réel au coût estimé initial et déclenche une alerte de dépassement via un seuil centralisé.         |
| **La rentabilité de projet est confondue avec la valeur client** | Un projet individuel rentable peut faire paraître un client précieux même lorsque la relation plus large produit de faibles marges. | `Customer_History` agrège le nombre de projets, le chiffre d’affaires, la contribution au bénéfice et la marge moyenne par client.           |
| **Les règles commerciales sont dupliquées dans les formules** | La taxe, les frais généraux, la marge cible et les seuils d’alerte peuvent devenir incohérents lorsqu’ils sont intégrés manuellement dans les formules. | `Settings` agit comme une couche de contrôle unique référencée dans l’ensemble du classeur.                                    |

L’architecture valide explicitement la chaîne entrée/sortie à travers l’ensemble du classeur et confirme que les paramètres globaux se propagent dans les calculs pertinents de devis, de coût de projet et de tableau de bord.

## À qui cela s’adresse

Ce système est conçu pour les **entrepreneurs de projet, estimateurs, chefs de projet, directeurs des opérations et propriétaires exploitants** qui ont besoin d’un moyen connecté de gérer l’économie de projet sans mettre en œuvre une grande plateforme d’entreprise.

Il convient particulièrement lorsque :

* les prospects et les devis sont encore gérés dans des tableurs ;
* la main-d’œuvre de projet est suivie par heures et par taux de main-d’œuvre standard ;
* les matériaux sont alloués ou consommés par projet ;
* la direction a besoin d’une visibilité sur les coûts et les marges au niveau du projet ;
* la rentabilité client compte au-delà du chiffre d’affaires des projets individuels ;
* l’entreprise a besoin d’un flux de travail opérationnel reproductible plutôt que d’un autre tableau de bord isolé.

Ce n’est **ni un remplacement d’ERP, ni un système comptable, ni un système de paie, ni une plateforme d’approvisionnement, ni une suite de gestion de projet d’entreprise**.

Le modèle est conçu comme une couche opérationnelle et d’aide à la décision légère autour du flux de travail existant de l’entrepreneur.

Aucune expertise en tableurs n’est requise pour comprendre la séquence opérationnelle. La version navigateur offre un accès à faible friction au flux de travail, tandis que la mise en œuvre Excel fournit l’environnement de calcul sous-jacent.

---

## À propos

Je développe des trackers Excel légers et des outils d’aide à la décision pour des situations où il y a trop de pièces en mouvement pour être tenues dans la tête d’une seule personne, mais pas assez de complexité pour justifier une grande implémentation logicielle.

La question centrale est :

> **Quelles informations doivent être réunies en un seul endroit pour prendre la prochaine décision en confiance ?**

Pour les opérations d’entrepreneur, cela signifie connecter la chaîne commerciale et opérationnelle de **Prospect → Estimation → Projet → Main-d’œuvre et matériaux → Coût de projet → Bénéfice → Historique client**.

---

## Détails techniques

<details>
<summary>Pour les réviseurs techniques, les praticiens d’Excel et les collaborateurs</summary>

### Architecture du classeur

Le classeur se compose de **12 feuilles principales**, organisées en trois couches fonctionnelles. L’architecture sépare les données de référence contrôlées des enregistrements opérationnels et des calculs en aval, tout en maintenant un flux directionnel de l’entrée → calcul → sortie.

| Couche                      | Feuille            | Rôle principal                                   |
| ---------------------------- | ------------------ | ------------------------------------------------ |
| **Données de référence et contrôle** | `Settings`   | Paramètres commerciaux centraux                  |
|                              | `Material_DB`      | Catalogue et coûts matériels standard            |
|                              | `Labor_Rates`      | Catégories de main-d’œuvre et taux horaires standard |
| **Opérations et exécution**  | `Lead_Tracker`     | Pipeline d’opportunités                          |
|                              | `Quote_Builder`    | Calcul d’estimation et de devis                  |
|                              | `Approved_Jobs`    | Référentiel des projets contractés               |
|                              | `Schedule`         | Jalons et alertes d’exécution                    |
|                              | `Labor_Log`        | Enregistrements de main-d’œuvre réels            |
|                              | `Material_Usage`   | Consommation de matériaux réelle                 |
| **Moteur et analytique**     | `Job_Cost_Engine`  | Calcul des coûts et rentabilité réels du projet  |
|                              | `Profit_Dashboard` | Analyse de rentabilité au niveau de la direction |
|                              | `Customer_History` | Historique commercial au niveau client           |

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

Le principe de conception central est **Unified Master Key** : `Job_ID` relie le projet approuvé aux enregistrements de planning, aux enregistrements de main-d’œuvre, à l’utilisation des matériaux et au module de coût de projet. L’objectif est d’éliminer le problème des îlots de données entre la planification commerciale et l’exécution du projet.

### Couche de contrôle centrale

`Settings` est l’unique point de maintenance du classeur.

Les paramètres définis sont :

| Cellule | Paramètre               | Défaut | Utilisation                                 |
| ---- | ----------------------- | -------: | ------------------------------------------------ |
| `B2` | Symbole de devise par défaut |      `$` | Présentation monétaire                             |
| `B3` | Taux de taxe            | `13.00%` | Conversion TTC / hors taxes         |
| `B4` | Taux de frais généraux  | `10.00%` | Imputation des coûts indirects                 |
| `B5` | Marge cible             | `25.00%` | Rentabilité des devis et des opportunités               |
| `B6` | Seuil de dépassement    |  `5.00%` | Alerte sur les coûts de projet                            |
| `B7` | Taux de change USD/CAD  | `1.0000` | Conversion de devise réservée                   |

Ces valeurs sont délibérément centralisées. L’architecture exige que les formules en aval référencent `Settings` plutôt que de coder en dur des valeurs comme `0.13`, `0.10` ou `0.25`. Le recoupement de la mise en œuvre confirme que la taxe, les frais généraux, la marge cible et les paramètres de dépassement sont propagés aux modules de calcul appropriés.

### Trois pièges qui surprennent même les entrepreneurs expérimentés

#### Piège 1 — Traiter la marge du devis initial comme la marge actuelle du projet

**1. Décision prise**

Un projet a été accepté parce que l’estimation montrait une marge cible acceptable.

**2. Hypothèse cachée**

L’estimation initiale est traitée comme si elle restait représentative après le début de l’exécution.

**3. Ce qui change la décision**

Les heures de main-d’œuvre réelles et la consommation de matériaux peuvent dépasser les hypothèses initiales.

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

Le devis initial représente une structure de coûts planifiée. Ce n’est pas une preuve de consommation réelle.

**5. Raisonnement corrigé**

Conservez le coût estimé comme référence et calculez le coût réel indépendamment à partir de `Labor_Log` et `Material_Usage`.

**6. Décision corrigée**

Le projet peut être surveillé pour détecter la dégradation de la marge pendant qu’une action corrective est encore possible.

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

La mise en œuvre définit le chiffre d’affaires contractuel sur une base hors taxes :

```excel
=Contract_Amount/(1+Settings!$B$3)
```

Le bénéfice réel est ensuite calculé comme le chiffre d’affaires contractuel hors taxes moins le coût total réel.

</details>
#### Piège 2 — Juger la rentabilité du projet à partir des seuls coûts directs

**1. Décision prise**

Les coûts matériels et de main-d’œuvre semblent rester sous le chiffre d’affaires contractuel, donc le projet est considéré comme sain.

**2. Hypothèse cachée**

La main-d’œuvre directe et les matériaux sont traités comme le coût économique complet du projet.

**3. Ce qui change la décision**

Les coûts de gestion indirects ne sont pas visibles dans les dépenses directes du projet mais doivent néanmoins être imputés.

**4. Pourquoi le raisonnement échoue**

Le modèle commercial du classeur définit le coût de projet comme matériaux directs + main-d’œuvre directe + frais généraux imputés.

**5. Raisonnement corrigé**

Appliquez le taux de frais généraux centralisé de manière cohérente à la base des coûts directs.

**6. Décision corrigée**

La marge du projet est évaluée en utilisant la même structure de coûts que celle utilisée lors de l’estimation.

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

La mise en œuvre spécifie le même concept de frais généraux pour le calcul au stade du devis et pour le calcul réel des coûts de projet.

</details>

#### Piège 3 — Attendre la clôture du projet pour détecter un dépassement de coûts

**1. Décision prise**

La direction attend l’achèvement du projet pour déterminer si le projet est resté dans le budget.

**2. Hypothèse cachée**

L’écart de coûts est traité comme une métrique de reporting plutôt que comme un signal de contrôle opérationnel.

**3. Ce qui change la décision**

Un projet peut dépasser son coût estimé avant son achèvement, alors qu’il reste des travaux qui pourraient potentiellement être contrôlés.

**4. Pourquoi le raisonnement échoue**

Une alerte tardive peut expliquer le résultat final mais ne peut pas influencer les coûts déjà engagés.

**5. Raisonnement corrigé**

Comparez le coût total réel au coût total estimé initial et évaluez l’écart par rapport au seuil de dépassement centralisé.

**6. Décision corrigée**

Un projet qui franchit le seuil configuré devient une exception nécessitant l’attention de la direction.

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

La mise en œuvre définit `Cost_Variance` comme :

```excel
=Actual_Total_Cost-Estimated_Total_Cost
```

La logique d’alerte évalue le pourcentage réel de dépassement de coûts par rapport au seuil `Settings!B6`. Le tableau de bord compte ensuite les projets classés comme dépassements de coûts majeurs.

</details>

### Scénario d’exemple

Un entrepreneur accepte un projet avec un montant contractuel TTC de **113 000 $**.

Le taux de taxe configuré est de **13 %**, donc le chiffre d’affaires contractuel hors taxes est :

```text
$113,000 ÷ 1.13
= $100,000
```

Le devis initial contient :

| Composante de coût           |   Estimé |
| ----------------------------- | --------: |
| Matériaux                     |     $42,000 |
| Main-d’œuvre                  |     $35,000 |
| Imputation des frais généraux |      $7,700 |
| **Coût total estimé**         | **$84,700** |
| **Bénéfice initial**          | **$15,300** |
| **Marge initiale**            |  **15,30 %** |

Pendant l’exécution, les enregistrements réels s’accumulent :

| Composante de coût        |      Réel |
| -------------------------- | ---------: |
| Matériaux                  |     $47,000 |
| Main-d’œuvre               |     $40,000 |
| Imputation des frais généraux |   $8,700 |
| **Coût total réel**        | **$95,700** |
| **Bénéfice réel**          |  **$4,300** |
| **Marge réelle**           |   **4,30 %** |

Le projet est ainsi passé d’une **marge projetée de 15,30 % à une marge réelle de 4,30 %**.

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

Avec le seuil de dépassement par défaut de `5.00%`, ce projet est clairement en dehors du contrôle normal des coûts.

La conclusion de gestion correcte n’est **pas simplement « le projet est encore rentable ».**

La conclusion plus utile est :

> **Le projet reste positif en bénéfice absolu, mais sa structure de coûts s’est matériellement dégradée et nécessite une intervention.**

La prochaine revue devrait se concentrer sur l’origine de l’écart — heures de main-d’œuvre, consommation de matériaux, ou les deux — et sur la question de savoir si les travaux restants du projet peuvent être contrôlés.

C’est précisément pourquoi le système préserve à la fois l’estimation initiale et les coûts d’exécution réels, au lieu de remplacer l’estimation par le dernier chiffre de dépenses. `Job_Cost_Engine` est conçu pour exposer la différence entre ces deux états.

### Référence des formules

<details>
<summary>Calculs de prospects et de pipeline</summary>

**Durée du pipeline**

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

**Objectif :** Calcule combien de temps une opportunité reste active dans le pipeline, tout en traitant les prospects gagnés et perdus comme clos.

**Bénéfice potentiel**

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

**Objectif :** Convertit le budget de projet estimé en bénéfice potentiel en utilisant l’hypothèse centralisée de marge cible plutôt qu’un pourcentage codé en dur.

</details>

<details>
<summary>Calculs de devis et d’estimation</summary>

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

`Quote_Builder` utilise `XLOOKUP` pour récupérer les taux matériels et de main-d’œuvre standard, tandis que `MAP` et `LAMBDA` permettent aux colonnes de calcul de se propager dynamiquement à mesure que les enregistrements s’étendent.

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

**Bénéfice projeté initial**

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

Le taux horaire est récupéré depuis `Labor_Rates` sur la base du `Labor_Code`.

**Coût matériel réel**

```excel
=Actual_Quantity*Standard_Material_Cost
```

Le coût matériel est récupéré depuis `Material_DB` à l’aide du code matériau.

Les deux flux de coûts réels sont regroupés par `Job_ID` avant d’entrer dans `Job_Cost_Engine`.

</details>

<details>
<summary>Coût de projet et rentabilité</summary>

**Chiffre d’affaires contractuel hors taxes**

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

**Bénéfice réel**

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

Le calcul distingue les travaux terminés des travaux incomplets qui ont dépassé leur date de fin planifiée.

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

**Contribution totale au bénéfice**

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

La mise en œuvre source utilise la contribution cumulative au bénéfice et la marge moyenne comme base de classification de la valeur client, plutôt que d’évaluer les clients par le seul chiffre d’affaires.

</details>

### Règles de validation

| Champ / Zone                    | Règle                                                                                | Comportement en cas d’erreur                                                                                   |
| ------------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `Settings!B3` Taux de taxe      | Doit être un pourcentage valide utilisé de manière cohérente dans les calculs de devis et de chiffre d’affaires. | Une configuration incorrecte produit des montants TTC et hors taxes incohérents.           |
| `Settings!B4` Taux de frais généraux | Doit être maintenu de manière centralisée plutôt qu’intégré dans les formules.       | Le calcul des coûts de projet peut devenir incohérent s’il est contourné manuellement ailleurs.                 |
| `Settings!B5` Marge cible       | Doit être un pourcentage valide utilisé par les calculs de potentiel de prospect et de devis. | Une valeur incorrecte modifie l’économie commerciale projetée.                                          |
| `Settings!B6` Seuil de dépassement | Doit être un pourcentage valide utilisé par les alertes de coût de projet.           | Une valeur incorrecte modifie la sensibilité des alertes de coûts.                                     |
| `Material_Code`                 | Doit correspondre à un enregistrement valide dans `Material_DB`.                      | La recherche peut renvoyer `#N/A` ou zéro lorsque le code est manquant ou mal formé.                          |
| `Labor_Code`                    | Doit correspondre à un enregistrement valide dans `Labor_Rates`.                      | Le taux horaire ne peut pas être récupéré correctement.                                                       |
| `Job_ID`                        | Doit référencer le projet approuvé pertinent.                                         | Les transactions de main-d’œuvre/matériaux peuvent se détacher du projet correct.                        |
| `Actual_Hours`                  | Doit être numérique et représenter la consommation réelle de main-d’œuvre du projet.  | Des valeurs invalides faussent le coût de main-d’œuvre réel.                                                |
| `Actual_Quantity`               | Doit être numérique et lié au code matériau pertinent.                                | Des valeurs invalides faussent le coût matériel réel.                                             |
| `Completion_Pct`                | La plage attendue est `0%–100%`.                                                      | Les valeurs égales ou supérieures à 100 % sont traitées comme terminées ; les travaux en retard incomplets génèrent une alerte. |
| Plage de sortie des tableaux dynamiques | La destination de propagation doit rester libre.                               | Les cellules occupées peuvent générer `#SPILL!`.                                                           |
| Mode de calcul Excel            | Doit rester **Automatique**.                                                          | Les modifications apportées à `Settings` peuvent ne pas se propager immédiatement lorsque le calcul est réglé sur Manuel. |
| Formatage de devise             | Les cellules monétaires doivent utiliser le format de devise prévu.                   | Les valeurs peuvent s’afficher avec un symbole de devise incorrect même lorsque le nombre sous-jacent est correct. |

La mise en œuvre recommande la validation des données Excel pour les champs de saisie opérationnels lorsque c’est pratique, et identifie explicitement `#SPILL!`, le mode de calcul manuel, les codes de données de référence manquants et le formatage de devise incorrect comme des modes de défaillance opérationnelle courants.

Le recoupement du classeur vérifie également que les paramètres globaux sont référencés en aval et que les formules de calcul ne codent pas en dur les principales hypothèses commerciales.

</details>
## Notes de mise en œuvre

### Conception à tableaux dynamiques

Le classeur est conçu pour Microsoft 365 / Excel 2021+ et utilise les fonctions modernes à tableaux dynamiques lorsqu’elles offrent un avantage opérationnel clair.

Les fonctions principales incluent :

* `XLOOKUP`
* `FILTER`
* `UNIQUE`
* `SUMIFS`
* `MAP`
* `LET`
* `LAMBDA`

L’objectif de conception est d’éviter le glissement routinier des formules et l’extension manuelle des plages.

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

Ceci est particulièrement important pour les flux de travail d’entrepreneur, car les prospects, les projets, les enregistrements de main-d’œuvre et les transactions matérielles sont ajoutés en continu au fil du temps.

La mise en œuvre utilise la logique à tableaux dynamiques dans des domaines tels que la durée du pipeline, le bénéfice potentiel, les calculs de devis, les alertes de planning et l’analyse client.

### Architecture de la clé de projet

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

L’architecture identifie explicitement le `Job_ID` unifié comme le mécanisme central pour éliminer les îlots de données entre l’exécution du projet et l’analyse financière.

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

Cela permet à la direction d’identifier si l’économie d’un projet s’est dégradée parce que la consommation réelle de ressources s’est écartée de l’estimation initiale.

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

Le tableau de bord résume les sorties générées par les enregistrements de projet sous-jacents et la couche de calcul, plutôt que d’exiger de la direction qu’elle maintienne des chiffres de reporting séparés.

La mise en œuvre définit les métriques du tableau de bord, notamment :

* le nombre total de projets ;
* le chiffre d’affaires hors taxes ;
* le coût total réel ;
* le bénéfice brut ;
* la marge globale ;
* le nombre de projets à dépassement de coûts majeur.

---

## Flux de travail opérationnel

Le rythme opérationnel recommandé suit la même structure que l’architecture du classeur.

### Début de journée

Examinez :

* `Settings` ;
* la complétude des données de référence ;
* les prospects actifs ;
* le statut actuel des projets ;
* les exceptions de planning en cours.

L’objectif est de garantir que l’environnement de calcul et les entrées opérationnelles sont à jour avant la saisie de nouveaux enregistrements.

### Pendant les opérations

Mettez à jour les enregistrements opérationnels pertinents au fur et à mesure que les événements commerciaux se produisent :

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

Le principe est **d’enregistrer l’événement à la source plutôt que de le reconstruire plus tard**.

### Revue de fin de journée

Examinez les sorties calculées :

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
| --------------- | ----------------------------------------- | ------------------------------------------------------------------------ |
| **Quotidien**   | `Schedule` + journaux d’exécution         | Tâches en retard, saisies de main-d’œuvre/matériaux manquantes          |
| **Hebdomadaire** | `Lead_Tracker` + `Profit_Dashboard`      | Pipeline, projets actifs, dépassements de coûts émergents                |
| **Par projet**  | `Job_Cost_Engine`                         | Coûts et marge estimés vs réels                                          |
| **Mensuel**     | `Profit_Dashboard` + `Customer_History`   | Rentabilité globale et contribution client                                |
| **Trimestriel** | `Settings` + données de référence         | Taux de main-d’œuvre, coûts matériels, frais généraux, marge cible, seuils d’alerte |

L’objectif de cette cadence est de maintenir séparées la maintenance des données opérationnelles et la revue de gestion : les équipes de terrain et de projet maintiennent les enregistrements sources, tandis que la direction utilise les calculs résultants pour prendre des décisions.

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

Le taux matériel devrait donc être maintenu dans la table de référence plutôt que ressaisi indépendamment dans plusieurs zones de calcul.

Le même principe s’applique aux taux de main-d’œuvre et aux hypothèses commerciales globales.

### Utiliser les identifiants de projet de manière cohérente

Une fois qu’un projet approuvé reçoit un `Job_ID`, tous les enregistrements d’exécution du projet ultérieurs devraient référencer cet identifiant.

```text
Job_ID: JOB-001
    ├── Schedule
    ├── Labor_Log
    ├── Material_Usage
    └── Job_Cost_Engine
```

Un `Job_ID` manquant ou incorrectement saisi rompt la relation entre l’activité opérationnelle et la rentabilité du projet.

### Ne pas écraser les sorties calculées

Les colonnes calculées doivent rester pilotées par les formules.

Les utilisateurs devraient mettre à jour les enregistrements sources tels que :

* les informations sur les prospects ;
* les entrées de devis ;
* le statut des projets ;
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

## Limitations connues

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

La mise en œuvre s’appuie sur des fonctions Excel modernes et est destinée à **Microsoft 365 / Excel 2021+**.

Les versions plus anciennes d’Excel peuvent ne pas prendre en charge toutes les fonctions à tableaux dynamiques utilisées par le classeur.

### Mode de calcul

Excel devrait rester en mode **Calcul automatique**.

Si le calcul est désactivé manuellement, les modifications apportées à `Settings` ou aux enregistrements sources peuvent ne pas se propager immédiatement à travers la chaîne de calcul.

### Espace de propagation des tableaux dynamiques

Les formules dynamiques nécessitent des plages de propagation libres.

Si une autre valeur occupe une plage de propagation requise, Excel peut renvoyer `#SPILL!`.

La réponse appropriée est d’inspecter la plage de propagation plutôt que de copier manuellement les formules dans des cellules supplémentaires.

### Dépendance aux données de référence

`Material_Code` et `Labor_Code` dépendent des enregistrements correspondants dans `Material_DB` et `Labor_Rates`.

Si un code est manquant ou mal formé, les calculs de recherche et de coûts en aval peuvent ne pas renvoyer la valeur prévue.

---

## Autres outils de cette série

Une collection d’outils légers d’aide à la décision Excel pour la planification opérationnelle, le calcul des coûts, la rentabilité et l’analyse commerciale.

* **Enterprise Payroll & Annual Workforce Capacity Planning Excel Toolkit**
* **Industrial Energy Cost & TCO Decision Support Toolkit**
* **E-commerce Profit Engine & Financial Reconciliation Toolkit**
* **Food Manufacturing Cost & Unit Economics Excel Toolkit**
* **Rental Property Operations & Vacancy Intelligence Excel Toolkit**

---

## Licence

Ce projet est publié sous la **Apache License 2.0**.

Vous êtes libre d’utiliser, de modifier, de reproduire et de distribuer l’œuvre conformément aux termes de la licence.

Consultez le fichier `LICENSE` du dépôt pour les termes complets de la licence.
