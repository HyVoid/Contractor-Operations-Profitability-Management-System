[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)


# Plantilla Excel de cálculo de costes de obra y hoja de cálculo de estimación para contratistas (sistema CRM de lead a beneficio)
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/9ddabd3f-ffc4-4a6c-937f-fbbc3c2c2e8a" />


![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-green.svg)
![Tool Type](https://img.shields.io/badge/Tool%20Type-Construction%20Job%20Costing%20%26%20Estimating-orange.svg)

**Una plantilla Excel todo-en-uno de cálculo de costes de obra, una hoja de cálculo de estimación para contratistas y una calculadora CRM de lead a beneficio, creadas para contratistas generales, subcontratistas y empresas de oficios. Siga el flujo de trabajo completo del contratista: lead comercial → estimación de materiales y mano de obra → presupuesto de obra aprobado → partes de horas de campo y consumo de materiales → desviación estimación vs. real → margen de beneficio neto → valor de vida del cliente (LTV).**

**Sin registro. Sin instalación. Gratis para probar en su navegador.**

Pruebe la aplicación web interactiva gratis en su navegador, o descargue la plantilla de hoja de cálculo Excel desbloqueada para personalización completa sin conexión—respaldada por una garantía de devolución de 30 días sin preguntas.

> 🌐 **Pruebe la aplicación web:** [Calculadora web interactiva de estimación y cálculo de costes de obra para contratistas (demo en vivo)](https://hyvoid.github.io/construction-job-costing-excel-template/)  
> 📥 **Obtenga el sistema Excel completo:** [Descargue la plantilla Excel editable de cálculo de costes de obra y generación de presupuestos](https://www.theseusworkshop.com/l/njmty?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=contractor-operations-profitability)  
> ⚙️ **Arquitectura y matemáticas:** [Ir a la lógica de negocio y la metodología de cálculo de costes de obra](#the-business-logic--methodology)


---

## La cadena operativa de construcción conectada: del lead al cálculo de costes de obra

La mayoría de las hojas de cálculo de construcción solo resuelven un fragmento aislado del negocio—dejando su **tubería comercial**, **estimación de replanteo** y **cálculo de costes de obra en campo** atrapados en archivos desconectados. 

Este libro de trabajo para contratistas está diseñado en torno a una única **cadena operativa relacional** ininterrumpida, anclada por `Lead_ID` y `Job_ID`:

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

### Un libro de trabajo para contratistas. Ocho módulos operativos integrados.

| Etapa del flujo de trabajo | Módulo Excel / web | Métricas principales de construcción y finanzas que se siguen |
| --- | --- | --- |
| **1. Tubería comercial (CRM)** | `Lead_Tracker` | Consultas de clientes, oportunidades de licitación, presupuestos estimados, antigüedad de la tubería, responsabilidad del estimador, beneficio bruto proyectado. |
| **2. Estimación y licitación** | `Quote_Builder` | Cantidades de replanteo de materiales, horas de mano de obra, COGS directo, imputación de gastos generales, **margen objetivo vs. recargo**, precio de oferta con impuestos incluidos. |
| **3. Línea base contractual** | `Approved_Jobs` | Contratos de construcción adjudicados, generación de un `Job_ID` único, valor contractual, fechas de planificación, asignación del jefe de proyecto. |
| **4. Seguimiento de campo** | `Labor_Log` + `Material_Usage` | Horas de partes de campo diarios/semanales de la cuadrilla, tarifas de mano de obra por oficio, consumo de materiales en obra vinculado directamente al `Job_ID`. |
| **5. Cálculo de costes y WIP** | `Job_Cost_Engine` | COGS real de materiales, coste real cargado de mano de obra, gastos generales aplicados, coste total de obra, **desviación presupuestaria estimación vs. real**. |
| **6. Márgenes y sobrecostes** | `Profit_Dashboard` | Beneficio bruto realizado ($), margen de beneficio neto (%), **alertas automáticas de sobrecoste**, cuenta de pérdidas y ganancias de la cartera a escala de la empresa. |
| **7. Inteligencia de clientes** | `Customer_History` | Historial de clientes multiproyecto, ingresos contractuales acumulados, contribución al beneficio de por vida, margen medio %, clasificación por segmento de cliente. |

---

## Qué ayuda a seguir y decidir: mapeo de puntos de dolor a solución para contratistas

En lugar de esperar hasta la temporada de impuestos para descubrir si su cuadrilla ganó o perdió dinero en una obra, este **rastreador de rentabilidad para contratistas** resuelve siete puntos ciegos operativos críticos:

| Métrica objetivo de seguimiento / punto de dolor | El punto ciego habitual del contratista | Cómo este sistema de cálculo de costes lo resuelve y lo sigue |
| --- | --- | --- |
| **Priorización de leads comerciales y valor de la tubería** | Perseguir cada solicitud de oferta por igual sin saber qué oportunidades aportan la mayor contribución al beneficio. | `Lead_Tracker` calcula la duración en la tubería y el **beneficio bruto proyectado** según su margen objetivo, antes de que invierta horas de estimación. |
| **Preciación precisa de ofertas (margen vs. recargo)** | Infrapreciar obras confundiendo el *porcentaje de recargo* con el *porcentaje de margen bruto*, u olvidando imputar los gastos generales de taller y el impuesto sobre ventas. | `Quote_Builder` extrae los costes estándar de `Material_DB` y `Labor_Rates`, aplica los gastos generales y **calcula hacia atrás el presupuesto exacto con impuestos incluidos** necesario para alcanzar su margen objetivo. |
| **Conservación de la línea base de estimación original** | Sobrescribir la estimación inicial en cuanto empieza la construcción, haciendo imposible ver dónde se desvió el presupuesto. | `Approved_Jobs` bloquea el coste estimado de la oferta adjudicada y asigna un `Job_ID` permanente como **línea base inmutable de desviación presupuestaria**. |
| **Conversión de partes de horas y materiales de campo en COGS** | Seguir las horas de la cuadrilla en partes de papel y los recibos de materiales en cajas de zapatos, sin vincularlos a presupuestos de obra específicos. | `Labor_Log` y `Material_Usage` vinculan cada hora de campo y cada unidad de material al `Job_ID`, multiplicando automáticamente por las tarifas estándar del motor de cálculo de costes. |
| **Alertas en tiempo real de sobrecoste y desviación presupuestaria** | Descubrir sobrecostes de mano de obra o materiales solo después de que la obra está 100 % terminada y la factura final pagada. | `Job_Cost_Engine` compara continuamente **coste real vs. coste estimado**, activando **alertas de sobrecoste** visuales en el momento en que la desviación supera su umbral. |
| **Margen estimado vs. margen neto realizado** | Suponer que una obra ofertada con un margen del 30 % realmente entregó un 30 %, ignorando el alcance no facturado y las horas extra de la cuadrilla. | Separa explícitamente el **margen proyectado inicial** del **margen realmente realizado**, para que los jefes de proyecto vean la erosión del margen en tiempo real. |
| **Rentabilidad de vida del cliente (LTV de cliente)** | Tratar a contratistas generales o administradores de fincas con altos ingresos como «clientes VIP» aunque sus obras pierdan dinero sistemáticamente. | `Customer_History` agrega el total de obras completadas, los ingresos de por vida, la contribución al beneficio neto y el **margen realmente realizado medio por cliente**. |

---

## Cómo realizar una auditoría de estimación y cálculo de costes de obra (flujo de trabajo de inicio rápido)

Configure un **sistema de estimación, seguimiento de obras y control de costes** estandarizado para su negocio de construcción en cuatro pasos estructurados:

### Paso 1: configure las reglas financieras y de gastos generales globales

Abra la pestaña de control `Settings` para definir los límites financieros utilizados en toda su empresa:

* **Tipo de impuesto sobre ventas (%)** y **tipo de imputación de gastos generales (%)**
* **Margen bruto objetivo (%)** para el cálculo automático de presupuestos
* **Umbral de alerta de sobrecoste (%)** (p. ej., marcar las obras que superan el presupuesto en más del 5 %)
* **Moneda base y tipo de cambio**

*Acción:* Explore ahora mismo la consola de control preconfigurada en el [sistema operativo de contratista gratuito en navegador](https://hyvoid.github.io/construction-job-costing-excel-template/).

---

### Paso 2: rellene su libro de precios de materiales y sus tarjetas de tarifas de mano de obra

Establezca sus bases de datos de costes estandarizadas una sola vez para que los estimadores dejen de adivinar los precios unitarios:

* **`Material_DB`:** introduzca los SKU/códigos de materiales, descripciones de artículos, especificaciones, unidades de medida (EA, LF, SQFT) y los costes unitarios estándar.
* **`Labor_Rates`:** defina las categorías de oficio (p. ej., aprendiz, oficial, capataz, subcontratista) y las tarifas horarias de mano de obra cargadas.

---

### Paso 3: ejecute el flujo de trabajo conectado de lead a cálculo de costes de obra

Siga la secuencia operativa estandarizada de 7 pasos para cada obra:

1. **Registrar la consulta** en `Lead_Tracker` (`Lead_ID`).
2. **Construir la oferta** en `Quote_Builder` usando sus bases de datos maestras de materiales y mano de obra.
3. **Bloquear el contrato** en `Approved_Jobs` (`Job_ID`) y fijar los hitos en `Schedule`.
4. **Registrar la ejecución de campo** cuando las cuadrillas envíen sus horas en `Labor_Log` y retiren material del inventario en `Material_Usage`.
5. **Auditar la desviación y el margen** automáticamente en `Job_Cost_Engine`, `Profit_Dashboard` y `Customer_History`.

---

### Paso 4: gestione por excepción y descargue la plantilla Excel para operaciones reales

En lugar de excavar entre cientos de filas de hoja de cálculo, use el panel para intervenir sobre **leads comerciales estancados**, **obras que superan los umbrales de sobrecoste**, **hitos atrasados** y **clientes que erosionan el margen**.

> 💡 **¿Listo para ejecutar sus propias estimaciones de construcción, partes de horas de cuadrilla y cálculo de costes de obra en este sistema?**
> Aunque la versión de navegador le permite inspeccionar la arquitectura al instante, gestionar obras de construcción reales requiere guardar sus propios libros de precios de materiales, registrar semanalmente la mano de obra de campo y mantener registros de obra permanentes.
> 👉 **[Descargue el libro de trabajo completo desbloqueado de operaciones y cálculo de costes de obra para contratistas](https://www.theseusworkshop.com/l/njmty?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=contractor-operations-profitability)** para personalizar las tablas de tarifas, seguir un número ilimitado de obras sin conexión y tomar el control total de sus márgenes de obra.

---

## La lógica de negocio y la metodología

La mayoría de los contratistas pequeños y medianos sufren de **«desvanecimiento del beneficio»**—cuando una obra se licita con un margen saludable del 35 % sobre el papel, pero acaba generando solo un 8 % de beneficio neto a final de año. Esto ocurre porque las hojas de cálculo de estimación, los registros de campo y los libros de contabilidad operan con matemáticas incompatibles.

Para eliminar el desvanecimiento del beneficio sin obligar a los contratistas a usar software ERP empresarial complejo, este kit de herramientas implementa una **metodología de contabilidad y operaciones de construcción de 4 pilares**:

1. **Encadenamiento relacional de claves primarias (`Lead_ID → Quote_ID → Job_ID → Customer_ID`):**
En las hojas de cálculo ad hoc, las estimaciones y los datos reales viven en archivos separados sin vínculo estructural. Este modelo impone una arquitectura de base de datos relacional dentro de Excel: una oportunidad comercial (`Lead_ID`) se convierte en una oferta detallada; tras la adjudicación del contrato, `Approved_Jobs` emite un `Job_ID` único y congela el coste estimado original como línea base inamovible. Cada entrada posterior de parte de horas (`Labor_Log`), cada salida de material (`Material_Usage`) y cada tarea de planificación debe referenciar un `Job_ID` válido, garantizando una trazabilidad del 100 % desde la oferta inicial hasta el coste final de obra.
2. **Preciación por margen inverso vs. matemática de recargo cost-plus:**
Uno de los errores matemáticos más caros en la construcción es confundir el **recargo** con el **margen bruto** (aumentar un coste de 1.000 $ un 25 % da un precio de 1.250 $, que representa solo un **margen bruto del 20 %**, borrando silenciosamente un 5 % del beneficio final). Dentro de `Quote_Builder`, el motor de precios agrega el coste de material directo ($M$), el coste de mano de obra directa ($L$) y los gastos generales imputados ($O = (M + L) \times r_{\text{oh}}$), y luego aplica la **verdadera matemática del divisor de margen inverso** junto con el cálculo de impuestos:

$$\text{Presupuesto previo al impuesto sugerido} = \frac{\text{Material directo} + \text{Mano de obra directa} + \text{Gastos generales imputados}}{1 - \text{Margen objetivo \%}}$$



Esto garantiza que, al firmarse el contrato, el porcentaje de margen bruto objetivo quede protegido matemáticamente.
3. **Coste estándar y absorción de campo por actividad:**
Las cuadrillas de campo registran cantidades operativas (**horas trabajadas** y **unidades de material consumidas**), no dólares financieros. El motor de cálculo de costes desacopla la entrada de datos de campo de la valoración financiera uniendo `Labor_Log` y `Material_Usage` con las tablas maestras de tarifas (`Labor_Rates` y `Material_DB`). A medida que se registran las cantidades de campo, el motor calcula dinámicamente los costes directos absorbidos y aplica el tipo global de gastos generales de `Settings` para reflejar el **coste total real de obra**.
4. **Desviación presupuestaria impulsada por umbral y agregación de LTV:**
En lugar de tratar el cálculo de costes de obra como un ejercicio post mortem, `Job_Cost_Engine` calcula continuamente la **desviación de costes ($\Delta C = \text{coste total real} - \text{coste de línea base estimado}$)** y el **% de desviación**. Si $\frac{\Delta C}{\text{coste estimado}} > \text{umbral de sobrecoste}$, el sistema activa un estado de excepción automatizado para la intervención operativa inmediata. Simultáneamente, los registros `Job_ID` completados se agregan por `Customer_ID` en `Customer_History`, desplazando la estrategia comercial de la licitación de obra única a la **contribución al beneficio de vida del cliente**.

---

## Por qué la mayoría de los errores de rentabilidad de los contratistas son estructurales—no errores de juicio

Los contratistas experimentados raramente pierden dinero porque no sepan construir. Pierden dinero porque **la información se rompe en cada traspaso operativo**:

### Antes: la trampa de la hoja de cálculo de contratista desconectada

```text
Sales Lead Notes → Standalone Excel Quote → Signed PDF Contract → Paper Crew Timesheets → Shoebox Material Receipts → Year-End Accountant Tax Summary
                            ↘                                             ↙
                              Zero real-time link between Estimate & Actuals

```

* **El fallo del traspaso:** La estimación original no puede compararse directamente con el consumo real de campo. Las horas de mano de obra se registran sin `Job_ID`. Los recibos de materiales se acumulan en una cuenta de gastos genérica de QuickBooks. Para cuando el propietario del negocio ve la cifra de beneficio, la obra lleva meses cerrada.

### Después: un flujo operativo relacional conectado único

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

## Hojas de cálculo desconectadas vs. este sistema operativo de contratista conectado

| Dimensión operativa | Hojas de cálculo de contratista desconectadas (sin esta herramienta) | Sistema conectado de cálculo de costes y operaciones (con esta herramienta) |
| --- | --- | --- |
| **Traspaso de lead comercial a estimación** | Los leads viven en correos electrónicos o libretas mientras las ofertas viven en archivos Excel individuales, haciendo invisibles las tasas de acierto de licitación y el beneficio de la tubería. | `Lead_ID` conecta las consultas comerciales directamente con `Quote_Builder`, proyectando la **contribución al beneficio de la tubería** según el margen objetivo. |
| **Conservación de la línea base presupuestaria adjudicada** | Una vez ganada la oferta, los contratistas editan el archivo de estimación o empiezan un rastreador en blanco, borrando la línea base de coste original necesaria para el análisis de desviación. | `Approved_Jobs` bloquea el **coste total estimado** de la oferta adjudicada bajo un `Job_ID` único para la auditoría en paralelo **estimación vs. real**. |
| **Partes de horas de campo y consumo de materiales** | Las horas de mano de obra de la cuadrilla y las salidas de material en obra siguen siendo notas operativas brutas en lugar de convertirse en costes financieros de obra en tiempo real. | `Labor_Log` y `Material_Usage` vinculan las cantidades de campo al `Job_ID`, multiplicando automáticamente por los costes unitarios **`Labor_Rates`** y **`Material_DB`**. |
| **Detección de sobrecoste a mitad de obra** | Los sobrecostes y los desbordes de mano de obra se descubren semanas después de la finalización de la obra, cuando ya no pueden emitirse órdenes de cambio. | `Job_Cost_Engine` sigue la desviación presupuestaria en vivo frente a un **umbral de sobrecoste** centralizado, activando alertas instantáneas mientras el trabajo aún está en curso. |
| **Margen de obra única vs. valor de vida del cliente** | Un contratista celebra una obra rentable para un cliente sin darse cuenta de que las cuatro obras anteriores para ese mismo cliente perdieron dinero. | `Customer_History` agrega el **total de obras, los ingresos acumulados, el beneficio neto $ y el margen realmente realizado medio %** por cuenta de cliente. |
| **Reglas globales de gastos generales, impuestos y margen** | Los porcentajes de gastos generales, los tipos de impuesto y las fórmulas de recargo están codificados en decenas de pestañas, causando costosos errores de presupuestación. | `Settings` sirve como **fuente única de verdad**—actualizar los gastos generales o el margen objetivo en una sola celda actualiza dinámicamente todos los módulos posteriores. |

---

## A quién va dirigido: roles objetivo de contratistas y casos de uso por oficio

Este sistema está diseñado para **empresas de construcción por proyectos, contratistas de oficios especializados, estimadores y propietarios-explotadores (típicamente de 1 a 50 empleados)** que quieren un control riguroso del cálculo de costes de obra sin pagar 500–1.500 $/mes por software ERP de construcción inflado:

* **Contratistas generales (GC) y constructores/reformadores de viviendas a medida:** úselo como **plantilla Excel completa de gestión de proyectos y cálculo de costes de obra residencial o comercial** para seguir múltiples obras activas, vigilar las tasas de consumo de subcontratistas/mano de obra y proteger los márgenes brutos desde la estimación hasta la recepción final.
* **Subcontratistas de oficios especializados (HVAC, electricidad, fontanería, cubiertas, paisajismo, pintura, hormigón):** úselo como **rastreador de estimación por oficio y de mano de obra/materiales de campo** para estandarizar los precios unitarios en `Material_DB`, presupuestar obras con precisión en minutos y verificar si las cuadrillas de campo baten o superan las horas de mano de obra estimadas.
* **Estimadores de construcción y directores comerciales:** úselo como **generador estandarizado de ofertas y presupuestos de construcción** acoplado a un **rastreador de leads CRM para contratistas** para eliminar los errores matemáticos de recargo vs. margen y priorizar las ofertas de alto margen.
* **Jefes de proyecto de construcción y superintendentes de campo:** úselo como **rastreador de desviación presupuestaria estimación vs. real y de planificación** para detectar sobrecostes de mano de obra y desperdicio de materiales a mitad de obra—mientras aún hay tiempo para corregir el rumbo o presentar una orden de cambio al cliente.
* **Tenedores de libros de construcción, controladores y CFO fraccionales:** úselo como **sub-libro operativo de cálculo de costes de obra** que tiende un puente entre la actividad bruta de campo (partes de horas y consumo de materiales) y el software de contabilidad fiscal de alto nivel como QuickBooks o Xero.

*Nota: este libro de trabajo **no** está destinado a sustituir el procesamiento legal de nóminas, el software de declaración de impuestos o el software empresarial de replanteo de planos. Es el **motor de ejecución operativo y comercial ligero** que mantiene su tubería comercial, sus estimaciones de obra, sus costes de campo y su rentabilidad de cliente conectados en un solo lugar.*

---

## Preguntas frecuentes sobre escenarios de estimación y cálculo de costes de obra

Si su negocio de construcción busca un modelo de hoja de cálculo práctico para resolver cualquiera de los siguientes dolores de cabeza operativos, este sistema está hecho para usted:

* **Cálculo de costes de obra estimación vs. real en Excel:** *¿Cómo sigo las horas reales de mano de obra de campo y el consumo de materiales frente a mi estimación de obra original para ver la desviación presupuestaria en tiempo real antes de que una obra supere su presupuesto?*
* **Estandarizar ofertas y presupuestos de construcción:** *¿Cómo construyo una plantilla de presupuesto de contratista repetible que se alimente de una lista maestra de precios de materiales y una tarjeta de tarifas de mano de obra, y que calcule automáticamente los gastos generales, el margen bruto objetivo y el impuesto?*
* **Conectar los leads CRM de contratista a la rentabilidad de las obras:** *¿Cómo sigo una obra de construcción desde la llamada telefónica inicial del cliente (lead) pasando por la estimación, la ejecución de la obra, el beneficio neto final y el historial de clientes recurrentes en un único libro de trabajo Excel?*
* **Identificar el desvanecimiento del beneficio entre cuadrillas y clientes:** *¿Por qué mi negocio de construcción muestra ingresos fuertes a final de año pero poco efectivo en el banco—y qué obras o clientes recurrentes concretos están erosionando silenciosamente nuestro margen bruto?*

---

## Acerca de Theseus Workshop

Construyo modelos operativos ligeros y transparentes basados en Excel y el navegador para empresas donde hay demasiadas piezas móviles para caber en una sola cabeza, pero donde un despliegue de software empresarial caro crea más fricción que valor.

El principio de diseño central detrás de cada herramienta es simple:

> **«¿Cuál es el modelo operativo más pequeño y limpio que preserva la cadena ininterrumpida entre los eventos diarios de campo y las decisiones de gestión rentables?»**

Para los contratistas por proyectos, eso significa unir **lead → estimación → obra aprobada → mano de obra y materiales de campo → desviación de costes de obra → beneficio neto → historial de clientes** dentro de un sistema único, auditable y sin hinchazón.

---

*Palabras clave: plantilla Excel de cálculo de costes de obra, hoja de cálculo de estimación para contratistas, rastreador de costes estimación vs. real, CRM y generador de presupuestos para contratista general, calculadora de beneficio y margen para subcontratista, Excel de registro de materiales y mano de obra de construcción, libro de trabajo de gestión de proyectos y cálculo de costes de obra.*

---

## Detalles técnicos

<details>
<summary>Para revisores técnicos, practicantes de Excel y colaboradores</summary>

### Arquitectura del libro de trabajo

El libro de trabajo consta de **12 hojas principales** organizadas en tres capas funcionales. La arquitectura separa los datos maestros controlados de los registros operativos y de los cálculos posteriores, manteniendo un flujo direccional de entrada → cálculo → salida. 

| Capa                      | Hoja              | Rol principal                               |
| -------------------------- | ------------------ | ------------------------------------------ |
| **Datos maestros y control**  | `Settings`         | Parámetros de negocio centrales                |
|                            | `Material_DB`      | Catálogo y costes de materiales estándar        |
|                            | `Labor_Rates`      | Categorías de mano de obra estándar y tarifas horarias |
| **Operaciones y ejecución** | `Lead_Tracker`     | Tubería de oportunidades                       |
|                            | `Quote_Builder`    | Cálculo de estimación y oferta                      |
|                            | `Approved_Jobs`    | Registro maestro de obras contratadas                  |
|                            | `Schedule`         | Hitos y alertas de ejecución            |
|                            | `Labor_Log`        | Registros reales de mano de obra                       |
|                            | `Material_Usage`   | Consumo real de materiales                |
| **Motor y analítica**     | `Job_Cost_Engine`  | Cálculo de costes y rentabilidad reales de obra   |
|                            | `Profit_Dashboard` | Análisis de rentabilidad a nivel de dirección                    |
|                            | `Customer_History` | Historial comercial a nivel de cliente          |

El flujo de datos principal es:

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

El principio de diseño central es la **clave maestra unificada**: `Job_ID` vincula la obra aprobada con los registros de planificación, los registros de mano de obra, el consumo de materiales y el motor de cálculo de costes de obra. El objetivo es eliminar el problema de islas de datos entre la planificación comercial y la ejecución de obras. 

### Capa de control central

`Settings` es el único punto de mantenimiento del libro de trabajo.

Los parámetros definidos son:

| Celda | Parámetro               |  Predeterminado | Usado para                                 |
| ---- | ----------------------- | -------: | ---------------------------------------- |
| `B2` | Símbolo de moneda predeterminado |      `$` | Presentación monetaria                    |
| `B3` | Tipo de impuesto                | `13.00%` | Conversión con impuestos incluidos / excluidos |
| `B4` | Tipo de gastos generales           | `10.00%` | Imputación de costes indirectos                 |
| `B5` | Margen objetivo           | `25.00%` | Rentabilidad de ofertas y oportunidades      |
| `B6` | Umbral de sobrecoste       |  `5.00%` | Alerta de costes de obra                     |
| `B7` | Tipo de cambio USD/CAD   | `1.0000` | Conversión de moneda reservada             |

Estos valores están deliberadamente centralizados. La arquitectura exige que las fórmulas posteriores referencien `Settings` en lugar de codificar valores como `0.13`, `0.10` o `0.25`. La verificación cruzada de la implementación confirma que los parámetros de impuesto, gastos generales, margen objetivo y sobrecoste se propagan a los módulos de cálculo apropiados. 

### Tres trampas que atrapan incluso a los contratistas experimentados

#### Trampa 1 — Tratar el margen de la oferta original como el margen actual de la obra

**1. Decisión tomada**

Una obra se aceptó porque la estimación mostraba un margen objetivo aceptable.

**2. Supuesto oculto**

La estimación original se trata como si siguiera siendo representativa después de que comience la ejecución.

**3. Lo que cambia la decisión**

Las horas reales de mano de obra y el consumo real de materiales pueden superar los supuestos originales.

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

**4. Por qué falla el razonamiento**

La oferta original representa una estructura de costes planificada. No es una prueba de consumo real.

**5. Razonamiento corregido**

Conservar el coste estimado como línea base y calcular el coste real de forma independiente a partir de `Labor_Log` y `Material_Usage`.

**6. Decisión corregida**

La obra puede monitorizarse para detectar el deterioro del margen mientras aún es posible una acción correctiva.

<details>
<summary>Lógica de las fórmulas</summary>

La cadena de rentabilidad real es:

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

La implementación define los ingresos contractuales sobre una base sin impuestos:

```excel
=Contract_Amount/(1+Settings!$B$3)
```

El beneficio real se calcula entonces como los ingresos contractuales sin impuestos menos el coste total real. 

</details>

#### Trampa 2 — Juzgar la rentabilidad de una obra solo por los costes directos

**1. Decisión tomada**

Los costes de materiales y mano de obra parecen mantenerse por debajo de los ingresos contractuales, por lo que la obra se considera sana.

**2. Supuesto oculto**

La mano de obra directa y el material se tratan como el coste económico completo de la obra.

**3. Lo que cambia la decisión**

Los costes indirectos de gestión no son visibles en el gasto directo de la obra, pero aun así deben imputarse.

**4. Por qué falla el razonamiento**

El modelo comercial del libro de trabajo define el coste de obra como material directo + mano de obra directa + gastos generales imputados.

**5. Razonamiento corregido**

Aplicar el tipo centralizado de gastos generales de forma coherente a la base de costes directos.

**6. Decisión corregida**

El margen de la obra se evalúa con la misma estructura de costes utilizada durante la estimación.

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
<summary>Lógica de las fórmulas</summary>

```excel
Overhead_Allocation =
    (Actual_Material_Cost + Actual_Labor_Cost)
    * Settings!$B$4

Actual_Total_Cost =
    Actual_Material_Cost
    + Actual_Labor_Cost
    + Overhead_Allocation
```

La implementación especifica el mismo concepto de gastos generales para el cálculo de costes en fase de oferta y para el cálculo de costes reales de obra. 

</details>

#### Trampa 3 — Esperar al cierre de la obra para detectar el sobrecoste

**1. Decisión tomada**

La dirección espera a la finalización de la obra para determinar si esta se mantuvo dentro del presupuesto.

**2. Supuesto oculto**

La desviación de costes se trata como una métrica de información en lugar de como una señal de control operativo.

**3. Lo que cambia la decisión**

Una obra puede superar su coste estimado antes de su finalización, mientras aún queda trabajo restante que potencialmente podría controlarse.

**4. Por qué falla el razonamiento**

Una alerta tardía puede explicar el resultado final, pero no puede influir en los costes ya incurridos.

**5. Razonamiento corregido**

Comparar el coste total real con el coste total estimado original y evaluar la desviación frente al umbral de sobrecoste centralizado.

**6. Decisión corregida**

Una obra que cruza el umbral configurado se convierte en una excepción que requiere la atención de la dirección.

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
<summary>Lógica de las fórmulas</summary>

La implementación define `Cost_Variance` como:

```excel
=Actual_Total_Cost-Estimated_Total_Cost
```

La lógica de alerta evalúa el porcentaje real de sobrecoste frente a `Settings!B6`. El panel cuenta entonces las obras clasificadas como sobrecostes graves. 

</details>

### Escenario de ejemplo

Un contratista acepta una obra con un importe contractual con impuestos incluidos de **113.000 $**.

El tipo de impuesto configurado es del **13 %**, por lo que los ingresos contractuales sin impuestos son:

```text
$113,000 ÷ 1.13
= $100,000
```

La oferta original contiene:

| Componente de coste           |   Estimado |
| ------------------------ | ----------: |
| Materiales                |     42.000 $ |
| Mano de obra                    |     35.000 $ |
| Imputación de gastos generales      |      7.700 $ |
| **Coste total estimado** | **84.700 $** |
| **Beneficio inicial**       | **15.300 $** |
| **Margen inicial**       |  **15,30 %** |

Durante la ejecución, se acumulan los registros reales:

| Componente de coste        |      Real |
| --------------------- | ----------: |
| Materiales             |     47.000 $ |
| Mano de obra                 |     40.000 $ |
| Imputación de gastos generales   |      8.700 $ |
| **Coste total real** | **95.700 $** |
| **Beneficio real**     |  **4.300 $** |
| **Margen real**     |   **4,30 %** |

La obra ha pasado por tanto de un **margen proyectado del 15,30 % a un margen real del 4,30 %**.

La desviación de costes es:

```text
$95,700 - $84,700
= $11,000
```

El porcentaje de sobrecoste es:

```text
$11,000 ÷ $84,700
≈ 12.99%
```

Con el umbral de sobrecoste predeterminado del `5.00%`, esta obra está claramente fuera del control normal de costes.

La conclusión de gestión correcta **no es simplemente «la obra sigue siendo rentable»**.

La conclusión más útil es:

> **La obra sigue siendo positiva en beneficio absoluto, pero su estructura de costes se ha deteriorado notablemente y requiere intervención.**

La siguiente revisión debería centrarse en el origen de la desviación—horas de mano de obra, consumo de materiales o ambos—y en si el trabajo restante de la obra puede controlarse.

Esta es precisamente la razón por la que el sistema conserva tanto la estimación original como los costes reales de ejecución en lugar de sustituir la estimación por la última cifra de gasto. `Job_Cost_Engine` está diseñado para exponer la diferencia entre estos dos estados. 

### Referencia de fórmulas

<details>
<summary>Cálculos de leads y tubería</summary>

**Duración en la tubería**

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

**Objeto:** Calcula cuánto tiempo permanece activa una oportunidad en la tubería, tratando los leads ganados y perdidos como cerrados.

**Beneficio potencial**

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

**Objeto:** Convierte el presupuesto estimado de la obra en beneficio potencial usando el supuesto centralizado de margen objetivo en lugar de un porcentaje codificado.

</details>

<details>
<summary>Cálculos de ofertas y estimaciones</summary>

El cálculo de la oferta sigue:

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

**Lógica de la oferta sugerida**

```excel
=(Estimated_Total_Cost/(1-Settings!$B$5))
*(1+Settings!$B$3)
```

**Lógica del margen proyectado**

```excel
=((Quote_Amount/(1+Settings!$B$3))
-Estimated_Total_Cost)
/
(Quote_Amount/(1+Settings!$B$3))
```

`Quote_Builder` usa `XLOOKUP` para recuperar las tarifas estándar de materiales y mano de obra, mientras que `MAP` y `LAMBDA` permiten que las columnas de cálculo se desborden dinámicamente a medida que se amplían los registros. 

</details>

<details>
<summary>Línea base de obra aprobada</summary>

**Coste total estimado arrastrado desde la oferta**

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

**Beneficio proyectado inicial**

```excel
=(Contract_Amount/(1+Settings!$B$3))
-Estimated_Total_Cost
```

**Margen proyectado inicial**

```excel
=Initial_Projected_Profit
/
(Contract_Amount/(1+Settings!$B$3))
```

El objeto es preservar la economía comercial en el momento en que la oferta se convierte en una obra aprobada. 

</details>

<details>
<summary>Costes reales de mano de obra y materiales</summary>

**Coste real de mano de obra**

```excel
=Actual_Hours*Hourly_Rate
```

La tarifa horaria se recupera de `Labor_Rates` según el `Labor_Code`. 

**Coste real de materiales**

```excel
=Actual_Quantity*Standard_Material_Cost
```

El coste de materiales se recupera de `Material_DB` usando el código de material.

Ambos flujos de costes reales se agrupan por `Job_ID` antes de entrar en `Job_Cost_Engine`.

</details>

<details>
<summary>Coste y rentabilidad de obra</summary>

**Ingresos contractuales sin impuestos**

```excel
=Contract_Amount/(1+Settings!$B$3)
```

**Imputación real de gastos generales**

```excel
=(Actual_Material_Cost+Actual_Labor_Cost)
*Settings!$B$4
```

**Coste total real**

```excel
=Actual_Material_Cost
+Actual_Labor_Cost
+Overhead_Allocation
```

**Beneficio real**

```excel
=Contract_Revenue-Actual_Total_Cost
```

**Margen real**

```excel
=Actual_Profit/Contract_Revenue
```

**Desviación de costes**

```excel
=Actual_Total_Cost-Estimated_Total_Cost
```

**Alerta de sobrecoste**

La condición de sobrecoste compara la desviación real de costes con el umbral configurado `Settings!B6` en lugar de incrustar un porcentaje fijo dentro de la fórmula. 

</details>

<details>
<summary>Alertas de planificación y ejecución</summary>

**Días de retraso**

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

**Estado de la tarea**

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

El cálculo distingue el trabajo completado del trabajo incompleto que ha superado su fecha de finalización planificada. 

</details>

<details>
<summary>Historial de clientes y análisis de valor</summary>

**Lista de clientes**

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

**Contribución total al beneficio**

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

**Clasificación del valor del cliente**

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

La implementación de origen usa la contribución acumulada al beneficio y el margen medio como base para la clasificación del valor del cliente, en lugar de evaluar a los clientes solo por los ingresos. 

</details>

### Reglas de validación

| Campo / área                    | Regla                                                                                | Comportamiento ante errores                                                                                   |
| ------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `Settings!B3` Tipo de impuesto          | Debe ser un porcentaje válido usado de forma coherente en los cálculos de ofertas e ingresos. | Una configuración incorrecta produce importes con impuestos incluidos y excluidos incoherentes.           |
| `Settings!B4` Tipo de gastos generales     | Debe mantenerse de forma centralizada en lugar de incrustarse en las fórmulas.                      | El cálculo de costes de obra puede volverse incoherente si se sobrescribe manualmente en otro lugar.                        |
| `Settings!B5` Margen objetivo     | Debe ser un porcentaje válido usado por los cálculos de potencial de leads y de ofertas.           | Un valor incorrecto cambia la economía comercial proyectada.                                          |
| `Settings!B6` Umbral de sobrecoste | Debe ser un porcentaje válido usado por las alertas de costes de obra.                               | Un valor incorrecto cambia la sensibilidad de las alertas de costes.                                          |
| `Material_Code`                 | Debe corresponder a un registro válido en `Material_DB`.                                 | La búsqueda puede devolver `#N/A` o cero cuando el código falta o está mal formado.                          |
| `Labor_Code`                    | Debe corresponder a un registro válido en `Labor_Rates`.                                 | La tarifa horaria no puede recuperarse correctamente.                                                       |
| `Job_ID`                        | Debe referenciar la obra aprobada pertinente.                                       | Las transacciones de mano de obra/materiales pueden desvincularse de la obra correcta.                        |
| `Actual_Hours`                  | Debe ser numérico y representar el consumo real de mano de obra de la obra.                     | Los valores no válidos distorsionan el coste real de mano de obra.                                                        |
| `Actual_Quantity`               | Debe ser numérico y estar vinculado al código de material pertinente.                             | Los valores no válidos distorsionan el coste real de materiales.                                                            |
| `Completion_Pct`                | El rango esperado es `0%–100%`.                                                        | Los valores iguales o superiores al 100 % se tratan como completados; el trabajo incompleto con retraso genera una alerta.    |
| Rango de salida de matriz dinámica      | El destino de desbordamiento debe permanecer libre.                                                | Las celdas ocupadas pueden generar `#SPILL!`.                                                           |
| Modo de cálculo de Excel          | Debe permanecer en **Automático**.                                                          | Los cambios en `Settings` pueden no propagarse inmediatamente cuando el cálculo está en Manual.           |
| Formato de moneda             | Las celdas monetarias deben usar el formato de moneda previsto.                               | Los valores pueden mostrarse con un símbolo de moneda incorrecto aunque el número subyacente sea correcto. |

La implementación recomienda la validación de datos de Excel para los campos de entrada operativos cuando sea práctico, e identifica explícitamente `#SPILL!`, el modo de cálculo manual, los códigos de datos maestros ausentes y el formato de moneda incorrecto como modos de fallo operativos habituales. 

La verificación cruzada del libro de trabajo también comprueba que los parámetros globales se referencian en los cálculos posteriores y que las fórmulas de cálculo no codifican los principales supuestos de negocio. 

</details>

## Notas de implementación

### Diseño con matrices dinámicas

El libro de trabajo está diseñado para Microsoft 365 / Excel 2021+ y usa funciones modernas de matrices dinámicas donde proporcionan una ventaja operativa clara.

Las funciones principales incluyen:

* `XLOOKUP`
* `FILTER`
* `UNIQUE`
* `SUMIFS`
* `MAP`
* `LET`
* `LAMBDA`

El objetivo del diseño es evitar el arrastre rutinario de fórmulas y la expansión manual de rangos.

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

Esto es especialmente importante para los flujos de trabajo de los contratistas porque los leads, las obras, los registros de mano de obra y las transacciones de materiales se añaden continuamente a lo largo del tiempo.

La implementación usa lógica de matrices dinámicas en áreas como la duración en la tubería, el beneficio potencial, los cálculos de ofertas, las alertas de planificación y el análisis de clientes. 

### Arquitectura de clave de obra

`Job_ID` es el identificador central que conecta la capa de ejecución.

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

Esto crea una relación única a nivel de obra entre:

* el contrato aprobado;
* el trabajo planificado;
* la mano de obra real;
* los materiales reales;
* el coste real;
* la rentabilidad de la obra.

La arquitectura identifica explícitamente el `Job_ID` unificado como el mecanismo central para eliminar las islas de datos entre la ejecución de obras y el análisis financiero. 

### Conciliación de costes de obra

El libro de trabajo mantiene una distinción clara entre **lo que se estimó** y **lo que realmente ocurrió**.

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

Esto permite a la dirección identificar si la economía de una obra se deterioró porque el consumo real de recursos se alejó de la estimación original.

`Job_Cost_Engine` actúa por tanto como la capa de conciliación entre la planificación comercial y la ejecución operativa. 

### Modelo de dependencia del panel

`Profit_Dashboard` no es una tabla de información independiente.

Se sitúa por debajo del motor de cálculo:

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

El panel resume las salidas generadas por los registros de obra subyacentes y la capa de cálculo, en lugar de exigir a la dirección que mantenga cifras de información separadas.

La implementación define las métricas del panel, incluyendo:

* obras totales;
* ingresos sin impuestos;
* coste total real;
* beneficio bruto;
* margen global;
* número de obras con sobrecoste grave. 

---

## Flujo de trabajo operativo

El ritmo operativo recomendado sigue la misma estructura que la arquitectura del libro de trabajo.

### Inicio del día

Revisar:

* `Settings`;
* la completitud de los datos maestros;
* los leads activos;
* el estado actual de las obras;
* las excepciones de planificación pendientes.

El objeto es garantizar que el entorno de cálculo y las entradas operativas estén actualizados antes de introducir nuevos registros. 

### Durante las operaciones

Actualice los registros operativos pertinentes a medida que se produzcan los eventos de negocio:

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

El principio es **registrar el evento en el origen en lugar de reconstruirlo más tarde**.

### Revisión de fin de día

Revisar las salidas calculadas:

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

Esto convierte el libro de trabajo de un archivo de información estático en un sistema de control operativo ligero.

---

## Cadencia de revisión recomendada

| Frecuencia       | Revisión principal                          | Enfoque recomendado                                                        |
| --------------- | --------------------------------------- | ------------------------------------------------------------------------ |
| **Diaria**       | `Schedule` + registros de ejecución             | Tareas atrasadas, entradas de mano de obra/materiales ausentes                            |
| **Semanal**      | `Lead_Tracker` + `Profit_Dashboard`     | Tubería, obras activas, sobrecostes emergentes                        |
| Por obra | `Job_Cost_Engine`                       | Coste y margen estimados vs. reales                                     |
| **Mensual**     | `Profit_Dashboard` + `Customer_History` | Rentabilidad global y contribución de clientes                          |
| **Trimestral**   | `Settings` + datos maestros                | Tarifas de mano de obra, costes de materiales, gastos generales, margen objetivo, umbrales de alerta |

El objeto de esta cadencia es mantener separados el mantenimiento de los datos operativos y la revisión de la dirección: los equipos de campo y de obra mantienen los registros de origen, mientras que la dirección usa los cálculos resultantes para tomar decisiones.

---

## Principios de entrada de datos

### Introducir los datos de origen una sola vez

El libro de trabajo está diseñado en torno a un principio de **fuente única de verdad**.

Por ejemplo:

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

Por tanto, la tarifa de material debe mantenerse en la tabla maestra en lugar de volver a teclearse de forma independiente en varias áreas de cálculo.

El mismo principio se aplica a las tarifas de mano de obra y a los supuestos globales de negocio.

### Usar los identificadores de obra de forma coherente

Una vez que una obra aprobada recibe un `Job_ID`, todos los registros posteriores de ejecución de la obra deben referenciar ese identificador.

```text
Job_ID: JOB-001
    ├── Schedule
    ├── Labor_Log
    ├── Material_Usage
    └── Job_Cost_Engine
```

Un `Job_ID` ausente o introducido incorrectamente rompe la relación entre la actividad operativa y la rentabilidad de la obra.

### No sobrescribir las salidas calculadas

Las columnas calculadas deben permanecer impulsadas por fórmulas.

Los usuarios deben actualizar los registros de origen como:

* la información de leads;
* las entradas de ofertas;
* el estado de la obra;
* las horas de mano de obra;
* las cantidades de materiales;
* las fechas de planificación.

No deben sustituir manualmente los elementos calculados:

* los costes totales;
* los márgenes;
* la desviación de costes;
* la rentabilidad de la obra;
* los resúmenes a nivel de cliente.

---

## Limitaciones conocidas

Este libro de trabajo es deliberadamente ligero.

No debe tratarse como un sustituto de:

* software de contabilidad;
* procesamiento de nóminas;
* planificación de recursos empresariales;
* sistemas de aprovisionamiento;
* plataformas de gestión de servicios de campo;
* bases de datos transaccionales multiusuario.

Está diseñado para el control operativo y el apoyo a la decisión allí donde Excel sigue siendo un entorno de trabajo apropiado.

### Versión de Excel

La implementación se basa en funciones modernas de Excel y está destinada a **Microsoft 365 / Excel 2021+**.

Las versiones anteriores de Excel pueden no admitir todas las funciones de matrices dinámicas usadas por el libro de trabajo.

### Modo de cálculo

Excel debe permanecer en modo **Cálculo automático**.

Si el cálculo se desactiva manualmente, los cambios en `Settings` o en los registros de origen pueden no propagarse inmediatamente a través de la cadena de cálculo. 

### Espacio de desbordamiento de matrices dinámicas

Las fórmulas dinámicas requieren rangos de desbordamiento libres.

Si otro valor ocupa un área de desbordamiento necesaria, Excel puede devolver `#SPILL!`.

La respuesta apropiada es inspeccionar el rango de desbordamiento en lugar de copiar manualmente las fórmulas en celdas adicionales. 

### Dependencia de los datos maestros

`Material_Code` y `Labor_Code` dependen de los registros correspondientes en `Material_DB` y `Labor_Rates`.

Si un código falta o está mal formado, las búsquedas posteriores y los cálculos de costes pueden no devolver el valor previsto. 

---

## Otras herramientas de esta serie

Una colección de herramientas Excel ligeras de apoyo a la decisión para la planificación operativa, el cálculo de costes, la rentabilidad y el análisis de negocio.

* **Kit de herramientas Excel de nóminas empresariales y planificación anual de la capacidad de la plantilla**
* **Kit de herramientas de apoyo a la decisión sobre costes energéticos industriales y TCO**
* **Motor de beneficio de comercio electrónico y kit de herramientas de conciliación financiera**
* **Kit de herramientas de costes de fabricación de alimentos y economía unitaria**
* **Kit de herramientas de operaciones de propiedades de alquiler e inteligencia de vacantes**

---

## Licencia

Este proyecto se publica bajo la **Licencia Apache 2.0**.

Usted es libre de usar, modificar, reproducir y distribuir la obra de acuerdo con los términos de la licencia.

Consulte el archivo `LICENSE` del repositorio para conocer los términos completos de la licencia.
