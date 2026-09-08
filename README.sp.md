[ 🌐 عربي ](README.ar.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Sistema de gestión de operaciones y rentabilidad para contratistas

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-green.svg)
![Tool Type](https://img.shields.io/badge/Tool%20Type-Contractor%20Operations%20%26%20Profitability-orange.svg)

**Un sistema operativo de Excel conectado para gestionar el flujo de trabajo completo del contratista: Lead → Estimación → Obra → Mano de obra y materiales → Costeo de obra → Utilidad → Historial de clientes.**

**Sin registro. Sin instalación. Gratis en su navegador.**

Pruebe la versión de navegador gratis. Si necesita la versión de Excel, puede comprarla con una garantía de devolución del dinero de 30 días, sin hacer preguntas.
> Disponible en dos formatos: **versión de navegador (HTML)** y **versión de Excel**.

[Demostración en vivo](https://hyvoid.github.io/Contractor-Operations-Profitability-Management-System/) · [Descargar Excel](https://www.theseusworkshop.com/l/ftbvja?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=contractor-operations-profitability) · [Detalles técnicos](#technical-details)

## ¿Quieres probarlo?

Este proyecto está incluido en el Construction Toolkit.

Prueba esta y otras herramientas ligeras de construcción gratis durante 30 días — incluyendo herramientas para estimación, licitaciones, costos de obra y operaciones diarias.

→ [Prueba el Construction Toolkit](https://theseusworkshop.com/l/fqtoi/BIDSEASON?utm_source=github&utm_medium=GitHub%20portfolio)

---

## El flujo de trabajo completo del contratista

La mayoría de las hojas de cálculo para contratistas resuelven solo una parte del negocio.

Este libro de Excel está diseñado en torno a **toda la cadena operativa**:

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

El propósito no es simplemente hacer seguimiento de los proyectos. Es mantener **conectado el historial comercial y operativo de cada proyecto**.

Un cliente potencial (lead) entra al pipeline de ofertas.

El lead se convierte en una estimación.

Una estimación exitosa se convierte en una obra aprobada con un `Job_ID` único.

Durante la ejecución, el consumo real de mano de obra y materiales se registra contra esa obra.

Esos registros fluyen hacia el motor de costeo de obras.

El costo real de la obra se compara entonces con la economía original del proyecto para determinar la rentabilidad actual e identificar sobrecostos.

Finalmente, los resultados de los proyectos completados se acumulan en el historial de clientes, lo que permite a la dirección entender qué clientes han generado ingresos y utilidades significativas a lo largo del tiempo.

La implementación usa hojas dedicadas para `Lead_Tracker`, `Quote_Builder`, `Approved_Jobs`, `Labor_Log`, `Material_Usage`, `Job_Cost_Engine`, `Profit_Dashboard` y `Customer_History`, con `Job_ID` como identificador central del proyecto a lo largo de la ejecución y el costeo.

### Un libro de Excel. Un flujo operativo conectado.

| Etapa                       | Módulo del libro de Excel              | Qué gestiona                                                                                                                 |
| --------------------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Lead**                    | `Lead_Tracker`                         | Consultas de clientes, oportunidades, presupuestos, estado, responsable de la estimación                                      |
| **Estimación**              | `Quote_Builder`                        | Requerimientos de materiales, horas de mano de obra, costo estimado, costos indirectos, margen objetivo, cotización sugerida  |
| **Obra**                    | `Approved_Jobs`                        | Proyectos contratados, `Job_ID`, valor del contrato, fechas, gerente de proyecto, estado                                      |
| **Mano de obra y materiales** | `Labor_Log` + `Material_Usage`       | Consumo real de mano de obra y materiales en campo                                                                            |
| **Costeo de obra**          | `Job_Cost_Engine`                      | Costo real de materiales, costo de mano de obra, costos indirectos, costo total, variación                                     |
| **Utilidad**                | `Job_Cost_Engine` + `Profit_Dashboard` | Utilidad del proyecto, margen, alertas de sobrecosto, rentabilidad general                                                     |
| **Historial de clientes**   | `Customer_History`                     | Proyectos históricos, ingresos, contribución a la utilidad, margen promedio, valor del cliente                                 |

El resultado es un flujo de trabajo práctico para pasar de la **actividad de ventas a la economía del proyecto y a la inteligencia comercial a nivel de cliente**, en lugar de mantener registros desconectados.

---

## ¿Qué decisión le ayuda a tomar este sistema?

El sistema está construido en torno a siete preguntas operativas:

### 1. ¿Qué clientes potenciales merecen atención?

`Lead_Tracker` registra el pipeline de oportunidades y calcula tanto la duración en el pipeline como la utilidad potencial con base en el margen objetivo configurado.

Esto permite ver el pipeline de ofertas activo no solo por el número de leads, sino también por su contribución comercial potencial.

### 2. ¿A qué precio se debe cotizar el proyecto?

`Quote_Builder` combina las cantidades estimadas de materiales y las horas de mano de obra con las hojas centralizadas `Material_DB` y `Labor_Rates`.

El modelo calcula el costo directo, aplica la asignación de costos indirectos, obtiene el costo total estimado y trabaja de forma inversa a partir del margen objetivo para producir una cotización sugerida con impuestos incluidos.

### 3. ¿Qué se contrató realmente?

`Approved_Jobs` establece el registro oficial del proyecto y genera el `Job_ID` único que se usa en todo el flujo de ejecución y costeo.

Esto preserva la línea base comercial original contra la cual se puede evaluar posteriormente el desempeño real.

### 4. ¿Qué está consumiendo realmente el proyecto?

Durante la ejecución, la mano de obra de campo se registra en `Labor_Log` y el consumo de materiales en `Material_Usage`.

Cada registro está conectado al `Job_ID` correspondiente, de modo que la actividad operativa real se convierte en datos de costo a nivel de proyecto.

### 5. ¿Se está alejando el costo real de la obra de la estimación?

`Job_Cost_Engine` agrega los costos reales de mano de obra y materiales, y aplica la asignación de costos indirectos configurada.

La obra puede evaluarse, por lo tanto, contra su costo estimado original en lugar de mirar únicamente el gasto acumulado.

### 6. ¿Sigue siendo rentable el proyecto?

El sistema separa el **margen proyectado inicial** del **resultado real del proyecto**.

Esa distinción importa porque un proyecto puede comenzar con una cotización aceptable y luego perder rentabilidad a medida que las horas reales de mano de obra, el consumo de materiales u otros costos del proyecto superan los supuestos originales.

### 7. ¿Qué clientes han generado una utilidad significativa?

`Customer_History` agrega la actividad histórica de proyectos por cliente, incluyendo el total de obras, los ingresos por contrato, la contribución a la utilidad, el margen de utilidad promedio, la fecha del contrato más reciente y la calificación del cliente.

---

## Flujo de trabajo de inicio rápido

### Paso 1 — Configurar la capa de control

Abra `Settings` y establezca los supuestos de negocio que se usan en todo el libro de Excel:

* Tasa de impuestos
* Tasa de costos indirectos
* Margen objetivo
* Umbral de sobrecosto
* Moneda
* Tipo de cambio

La arquitectura trata `Settings` como la consola de control central. Los supuestos de negocio deben mantenerse allí en lugar de codificarse dentro de fórmulas individuales.

### Paso 2 — Mantener los datos maestros de costos

Actualice:

* `Material_DB` — códigos, descripciones, especificaciones, unidades y costos estándar de materiales.
* `Labor_Rates` — categorías de mano de obra, códigos y tarifas horarias estándar.

Estos se convierten en los puntos de referencia comunes tanto para la estimación como para el costeo real de obras.

### Paso 3 — Ejecutar el flujo de trabajo del contratista

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

El procedimiento operativo estándar sigue la misma secuencia: captar el lead, generar la cotización, establecer la obra aprobada, registrar la ejecución y luego revisar el costeo y la rentabilidad automatizados.

### Paso 4 — Revisar excepciones, no solo totales

El flujo de gestión debe enfocarse en:

* leads estancados;
* proyectos que se desvían del costo estimado;
* hitos de ejecución vencidos;
* márgenes de proyecto en declive;
* sobrecostos significativos;
* clientes de alto valor.

El libro de Excel está diseñado, por lo tanto, para respaldar la **intervención operativa**, no solo para producir un informe histórico.

---

## Por qué la mayoría de los errores de rentabilidad de los contratistas no son errores de criterio

Un proyecto puede ser gestionado por personas experimentadas y aun así producir una imagen engañosa de la rentabilidad.

El problema de fondo suele ser estructural:

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

En cada transferencia, la información puede desconectarse.

La estimación original puede dejar de ser directamente comparable con el consumo real.

La mano de obra puede registrarse sin el identificador de proyecto correspondiente.

El uso de materiales puede registrarse a nivel operativo sin convertirse en costo del proyecto.

Y la dirección puede terminar recibiendo una cifra de rentabilidad sin una ruta clara hacia los supuestos y transacciones que la produjeron.

Este sistema aborda esa falla creando una cadena conectada:

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

La distinción es importante.

### Antes

```text
Sales → Quote → Project Execution → Accounting
          ↘             ↙
           disconnected data
```

### Después

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

La arquitectura mapea explícitamente entradas y salidas a través del libro de Excel, de modo que cada registro operativo principal tenga un propósito aguas abajo definido.

---

## Lo que el libro de Excel realmente ofrece

Esto no se presenta como un reemplazo de un ERP ni como un panel genérico.

Es un **modelo operativo y de apoyo a la decisión ligero para contratistas** que conecta la información necesaria para gestionar la economía de los proyectos.

### Proporciona un registro continuo del proyecto

Desde:

**Lead → Estimación → Obra → Mano de obra y materiales → Costeo de obra → Utilidad**

el mismo proyecto puede seguirse a lo largo de su ciclo de vida comercial y de ejecución.

### Conserva la estimación original como línea base

La obra aprobada conserva el costo estimado y la rentabilidad proyectada, de modo que el desempeño real del proyecto pueda compararse con lo que se esperaba originalmente.

### Convierte la actividad de campo en información financiera

Las horas de mano de obra y las cantidades de materiales no quedan como registros operativos. Se vinculan a tarifas y costos estandarizados y, en última instancia, se convierten en insumos del motor de costeo de obras.

### Separa la rentabilidad del proyecto de la rentabilidad del cliente

Un solo proyecto responde:

> **¿Fue rentable esta obra?**

El historial de clientes responde la pregunta de más largo plazo:

> **¿Ha sido este cliente comercialmente valioso a lo largo de múltiples obras?**

Esa distinción respalda mejores decisiones sobre cotizaciones futuras y priorización de clientes.

---

## Sobre el creador

El enfoque detrás de este libro de Excel es directo:

**Construir el modelo operativo más pequeño que pueda preservar la cadena entre los eventos del negocio y las decisiones de gestión.**

El objetivo no es agregar funciones de software por agregarlas.

Para las operaciones de contratistas, la cadena útil ya está clara:

```text
Lead
→ Estimate
→ Job
→ Labor & Materials
→ Job Cost
→ Profit
→ Customer History
```

El libro de Excel convierte esa cadena en un flujo de trabajo operativo reutilizable basado en Excel, con supuestos centralizados, identificadores de proyecto conectados, cálculos automatizados y salidas para la gestión.

Está dirigido a negocios que necesitan más estructura que hojas de cálculo desconectadas, pero que no necesitan una plataforma empresarial solo para entender de dónde provienen los ingresos, los costos y la utilidad de un proyecto.

## Problemas comunes de contratistas que esto resuelve

| Problema | Sin esta herramienta | Con esta herramienta |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Los datos de leads y estimaciones se desconectan** | Las oportunidades de venta y los registros de cotización se mantienen por separado, lo que dificulta evaluar el valor del pipeline y la conversión de cotizaciones. | `Lead_ID` conecta las oportunidades con las estimaciones, mientras que la utilidad estimada puede derivarse del margen objetivo configurado. |
| **El presupuesto original del proyecto desaparece después de la adjudicación** | Una vez que una cotización se convierte en contrato, los costos reales del proyecto pueden registrarse sin conservar la estimación original como línea base. | `Approved_Jobs` traslada el costo total estimado de la cotización al registro del proyecto para un análisis de variaciones posterior. |
| **El consumo de mano de obra y materiales permanece solo a nivel operativo** | Las horas de campo y el uso de materiales se registran, pero no se convierten automáticamente en información financiera a nivel de proyecto. | `Labor_Log` y `Material_Usage` conectan el consumo real con el `Job_ID`, las tarifas estándar de mano de obra y los costos de materiales. |
| **Los sobrecostos se descubren demasiado tarde** | La dirección ve el costo final cuando la oportunidad de corregir la ejecución ya ha desaparecido en gran medida. | `Job_Cost_Engine` compara el costo total real con el costo estimado original y activa una alerta de sobrecosto usando un umbral centralizado. |
| **La rentabilidad del proyecto se confunde con el valor del cliente** | Una obra individual rentable puede hacer que un cliente parezca valioso incluso cuando la relación más amplia produce márgenes débiles. | `Customer_History` agrega el número de proyectos, los ingresos, la contribución a la utilidad y el margen promedio por cliente. |
| **Las reglas del negocio se duplican entre fórmulas** | Impuestos, costos indirectos, margen objetivo y umbrales de alerta pueden volverse inconsistentes cuando se incrustan manualmente en fórmulas. | `Settings` actúa como una única capa de control referenciada en todo el libro de Excel. |

La arquitectura valida explícitamente la cadena de entrada/salida a través del libro de Excel y confirma que los parámetros globales fluyen hacia los cálculos relevantes de cotización, costeo de proyectos y del panel.

## A quién va dirigido

Este sistema está diseñado para **contratistas que trabajan por proyectos, estimadores, gerentes de proyecto, gerentes de operaciones y propietarios-operadores** que necesitan una forma conectada de gestionar la economía de los proyectos sin implementar una plataforma empresarial de gran envergadura.

Encaja particularmente bien cuando:

* los leads y las estimaciones aún se gestionan en hojas de cálculo;
* la mano de obra del proyecto se registra por horas y tarifas estándar de mano de obra;
* los materiales se entregan o consumen por proyecto;
* la dirección necesita visibilidad de costos y márgenes a nivel de proyecto;
* la rentabilidad del cliente importa más allá de los ingresos de un proyecto individual;
* el negocio necesita un flujo de trabajo operativo repetible en lugar de otro panel aislado.

**No es un reemplazo de un ERP, ni un sistema contable, ni un sistema de nómina, ni una plataforma de adquisiciones, ni una suite empresarial de gestión de proyectos**.

El modelo está diseñado como una capa operativa y de apoyo a la decisión ligera alrededor del flujo de trabajo existente del contratista.

No se requiere experiencia en hojas de cálculo para entender la secuencia operativa. La versión de navegador ofrece una forma de baja fricción para acceder al flujo de trabajo, mientras que la implementación de Excel proporciona el entorno de cálculo subyacente.

---

## Acerca de

Construyo herramientas de Excel ligeras de seguimiento y de apoyo a la decisión para situaciones donde hay demasiadas piezas en movimiento para mantener en la cabeza de una sola persona, pero no la complejidad suficiente como para justificar una implementación de software de gran escala.

La pregunta central es:

> **¿Qué información debe estar en un solo lugar para tomar la siguiente decisión con confianza?**

Para las operaciones de contratistas, eso significa conectar la cadena comercial y operativa desde **Lead → Estimación → Obra → Mano de obra y materiales → Costeo de obra → Utilidad → Historial de clientes**.

---

## Detalles técnicos

<details>
<summary>Para revisores técnicos, profesionales de Excel y colaboradores</summary>

### Arquitectura del libro de Excel

El libro de Excel consta de **12 hojas principales** organizadas en tres capas funcionales. La arquitectura separa los datos maestros controlados de los registros operativos y de los cálculos aguas abajo, manteniendo un flujo direccional de entrada → cálculo → salida.

| Capa                       | Hoja               | Rol principal                                    |
| -------------------------- | ------------------ | ------------------------------------------------ |
| **Datos maestros y control** | `Settings`       | Parámetros centrales del negocio                 |
|                            | `Material_DB`      | Catálogo y costos estándar de materiales         |
|                            | `Labor_Rates`      | Categorías de mano de obra estándar y tarifas horarias |
| **Operaciones y ejecución** | `Lead_Tracker`    | Pipeline de oportunidades                        |
|                            | `Quote_Builder`    | Cálculo de estimación y cotización               |
|                            | `Approved_Jobs`    | Registro maestro de proyectos contratados        |
|                            | `Schedule`         | Hitos y alertas de ejecución                     |
|                            | `Labor_Log`        | Registros reales de mano de obra                 |
|                            | `Material_Usage`   | Consumo real de materiales                       |
| **Motor y análisis**       | `Job_Cost_Engine`  | Costeo real de proyectos y rentabilidad          |
|                            | `Profit_Dashboard` | Análisis de rentabilidad a nivel de gestión      |
|                            | `Customer_History` | Historial comercial a nivel de cliente           |

El flujo principal de datos es:

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

El principio de diseño central es la **clave maestra unificada**: `Job_ID` vincula la obra aprobada con los registros de cronograma, los registros de mano de obra, el uso de materiales y el motor de costeo de obras. Esto busca eliminar el problema de islas de datos entre la planificación comercial y la ejecución del proyecto.

### Capa de control central

`Settings` es el único punto de mantenimiento del libro de Excel.

Los parámetros definidos son:

| Celda | Parámetro                   | Valor predeterminado | Uso                                       |
| ---- | ----------------------- | -------: | ---------------------------------------- |
| `B2` | Símbolo de moneda predeterminado |      `$` | Presentación monetaria                    |
| `B3` | Tasa de impuestos                | `13.00%` | Conversión con impuestos incluidos / sin impuestos |
| `B4` | Tasa de costos indirectos        | `10.00%` | Asignación de costos indirectos           |
| `B5` | Margen objetivo                  | `25.00%` | Rentabilidad de cotizaciones y oportunidades |
| `B6` | Umbral de sobrecosto             |  `5.00%` | Alerta de costos del proyecto             |
| `B7` | Tipo de cambio USD/CAD           | `1.0000` | Conversión de moneda reservada            |

Estos valores están deliberadamente centralizados. La arquitectura requiere que las fórmulas aguas abajo referencien `Settings` en lugar de codificar valores como `0.13`, `0.10` o `0.25`. La verificación cruzada de la implementación confirma que los parámetros de impuestos, costos indirectos, margen objetivo y sobrecosto se propagan a los módulos de cálculo correspondientes.

### Tres trampas que atrapan incluso a contratistas experimentados

#### Trampa 1 — Tratar el margen de la cotización original como el margen actual del proyecto

**1. Decisión tomada**

Un proyecto fue aceptado porque la estimación mostraba un margen objetivo aceptable.

**2. Supuesto oculto**

La estimación original se trata como si siguiera siendo representativa después de que comienza la ejecución.

**3. Lo que cambia la decisión**

Las horas reales de mano de obra y el consumo de materiales pueden superar los supuestos originales.

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

La cotización original representa una estructura de costos planificada. No es evidencia del consumo real.

**5. Razonamiento corregido**

Conservar el costo estimado como línea base y calcular el costo real de forma independiente a partir de `Labor_Log` y `Material_Usage`.

**6. Decisión corregida**

El proyecto puede monitorearse ante el deterioro del margen mientras todavía es posible tomar acciones correctivas.

<details>
<summary>Lógica de la fórmula</summary>

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

La implementación define los ingresos por contrato sobre una base sin impuestos:

```excel
=Contract_Amount/(1+Settings!$B$3)
```

La utilidad real se calcula entonces como los ingresos por contrato sin impuestos menos el costo total real.

</details>

#### Trampa 2 — Juzgar la rentabilidad del proyecto solo por los costos directos

**1. Decisión tomada**

Los costos de materiales y mano de obra parecen mantenerse por debajo de los ingresos por contrato, por lo que el proyecto se considera saludable.

**2. Supuesto oculto**

La mano de obra y los materiales directos se tratan como el costo económico completo del proyecto.

**3. Lo que cambia la decisión**

Los costos indirectos de gestión no son visibles en el gasto directo del proyecto, pero aun así deben asignarse.

**4. Por qué falla el razonamiento**

El modelo comercial del libro de Excel define el costo del proyecto como materiales directos + mano de obra directa + costos indirectos asignados.

**5. Razonamiento corregido**

Aplicar de manera consistente la tasa centralizada de costos indirectos sobre la base de costos directos.

**6. Decisión corregida**

El margen del proyecto se evalúa usando la misma estructura de costos empleada durante la estimación.

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
<summary>Lógica de la fórmula</summary>

```excel
Overhead_Allocation =
    (Actual_Material_Cost + Actual_Labor_Cost)
    * Settings!$B$4

Actual_Total_Cost =
    Actual_Material_Cost
    + Actual_Labor_Cost
    + Overhead_Allocation
```

La implementación especifica el mismo concepto de costos indirectos para el costeo en la etapa de cotización y para el costeo real de obras.

</details>

#### Trampa 3 — Esperar al cierre del proyecto para detectar el sobrecosto

**1. Decisión tomada**

La dirección espera hasta la finalización del proyecto para determinar si este se mantuvo dentro del presupuesto.

**2. Supuesto oculto**

La variación de costos se trata como una métrica de reporte en lugar de una señal operativa de control.

**3. Lo que cambia la decisión**

Un proyecto puede exceder su costo estimado antes de completarse, mientras aún queda trabajo pendiente que podría controlarse.

**4. Por qué falla el razonamiento**

Una alerta tardía puede explicar el resultado final, pero no puede influir en los costos ya incurridos.

**5. Razonamiento corregido**

Comparar el costo total real con el costo total estimado original y evaluar la variación contra el umbral de sobrecosto centralizado.

**6. Decisión corregida**

Un proyecto que cruza el umbral configurado se convierte en una excepción que requiere atención de la dirección.

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
<summary>Lógica de la fórmula</summary>

La implementación define `Cost_Variance` como:

```excel
=Actual_Total_Cost-Estimated_Total_Cost
```

La lógica de alerta evalúa el porcentaje real de sobrecosto contra `Settings!B6`. El panel luego cuenta los proyectos clasificados como sobrecostos severos.

</details>

### Ejemplo de escenario

Un contratista acepta un proyecto con un monto de contrato con impuestos incluidos de **$113,000**.

La tasa de impuestos configurada es del **13%**, por lo que los ingresos por contrato sin impuestos son:

```text
$113,000 ÷ 1.13
= $100,000
```

La cotización original contiene:

| Componente de costo      |   Estimado |
| ------------------------ | ----------: |
| Materiales               |     $42,000 |
| Mano de obra             |     $35,000 |
| Asignación de costos indirectos |      $7,700 |
| **Costo total estimado** | **$84,700** |
| **Utilidad inicial**     | **$15,300** |
| **Margen inicial**       |  **15.30%** |

Durante la ejecución, los registros reales se acumulan:

| Componente de costo        |      Real |
| --------------------- | ----------: |
| Materiales             |     $47,000 |
| Mano de obra           |     $40,000 |
| Asignación de costos indirectos |      $8,700 |
| **Costo total real** | **$95,700** |
| **Utilidad real**     |  **$4,300** |
| **Margen real**     |   **4.30%** |

El proyecto pasó, por lo tanto, de un **margen proyectado de 15.30% a un margen real de 4.30%**.

La variación de costos es:

```text
$95,700 - $84,700
= $11,000
```

El porcentaje de sobrecosto es:

```text
$11,000 ÷ $84,700
≈ 12.99%
```

Con el umbral de sobrecosto predeterminado de `5.00%`, este proyecto está claramente fuera del control normal de costos.

La conclusión correcta para la gestión **no es simplemente que "el proyecto sigue siendo rentable"**.

La conclusión más útil es:

> **El proyecto sigue siendo positivo en utilidad absoluta, pero su estructura de costos se ha deteriorado sustancialmente y requiere intervención.**

La siguiente revisión debe enfocarse en dónde se originó la variación —horas de mano de obra, consumo de materiales o ambos— y en si el trabajo restante del proyecto puede controlarse.

Esta es precisamente la razón por la que el sistema conserva tanto la estimación original como los costos reales de ejecución, en lugar de reemplazar la estimación con la última cifra de gasto. El `Job_Cost_Engine` está diseñado para exponer la diferencia entre estos dos estados.

### Referencia de fórmulas

<details>
<summary>Cálculos de leads y pipeline</summary>

**Duración en el pipeline**

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

**Propósito:** Calcula cuánto tiempo permanece activa una oportunidad en el pipeline mientras trata los leads ganados y perdidos como cerrados.

**Utilidad potencial**

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

**Propósito:** Convierte el presupuesto estimado del proyecto en utilidad potencial usando el supuesto centralizado de margen objetivo, en lugar de un porcentaje codificado.

</details>

<details>
<summary>Cálculos de cotización y estimación</summary>

El cálculo de la cotización sigue:

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

**Lógica de la cotización sugerida**

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

`Quote_Builder` usa `XLOOKUP` para recuperar las tarifas estándar de materiales y mano de obra, mientras que `MAP` y `LAMBDA` permiten que las columnas de cálculo se desborden dinámicamente a medida que se agregan registros.

</details>

<details>
<summary>Línea base de la obra aprobada</summary>

**Costo total estimado trasladado desde la cotización**

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

**Utilidad proyectada inicial**

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

El propósito es preservar la economía comercial en el momento en que la cotización se convierte en una obra aprobada.

</details>

<details>
<summary>Costo real de mano de obra y materiales</summary>

**Costo real de mano de obra**

```excel
=Actual_Hours*Hourly_Rate
```

La tarifa horaria se recupera de `Labor_Rates` con base en el `Labor_Code`.

**Costo real de materiales**

```excel
=Actual_Quantity*Standard_Material_Cost
```

El costo de materiales se recupera de `Material_DB` usando el código de material.

Ambos flujos de costos reales se agrupan por `Job_ID` antes de entrar en `Job_Cost_Engine`.

</details>

<details>
<summary>Costo de obra y rentabilidad</summary>

**Ingresos por contrato sin impuestos**

```excel
=Contract_Amount/(1+Settings!$B$3)
```

**Asignación real de costos indirectos**

```excel
=(Actual_Material_Cost+Actual_Labor_Cost)
*Settings!$B$4
```

**Costo total real**

```excel
=Actual_Material_Cost
+Actual_Labor_Cost
+Overhead_Allocation
```

**Utilidad real**

```excel
=Contract_Revenue-Actual_Total_Cost
```

**Margen real**

```excel
=Actual_Profit/Contract_Revenue
```

**Variación de costos**

```excel
=Actual_Total_Cost-Estimated_Total_Cost
```

**Alerta de sobrecosto**

La condición de sobrecosto compara la variación real de costos con el umbral configurado en `Settings!B6`, en lugar de incrustar un porcentaje fijo dentro de la fórmula.

</details>

<details>
<summary>Cronograma y alertas de ejecución</summary>

**Días de atraso**

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

El cálculo distingue el trabajo completado del trabajo incompleto que ha excedido su fecha de fin planificada.

</details>

<details>
<summary>Historial y análisis de valor del cliente</summary>

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

**Contribución total a la utilidad**

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

La implementación de origen usa la contribución acumulada a la utilidad y el margen promedio como base para la clasificación del valor del cliente, en lugar de evaluar a los clientes solo por sus ingresos.

</details>

### Reglas de validación

| Campo / Área                    | Regla                                                                                | Comportamiento ante errores                                                                       |
| ------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `Settings!B3` Tasa de impuestos | Debe ser un porcentaje válido usado de forma consistente en los cálculos de cotización e ingresos. | Una configuración incorrecta produce montos inconsistentes con impuestos incluidos y sin impuestos. |
| `Settings!B4` Tasa de costos indirectos | Debe mantenerse de forma centralizada en lugar de incrustarse en fórmulas.    | El costeo del proyecto puede volverse inconsistente si se sobrescribe manualmente en otro lugar.  |
| `Settings!B5` Margen objetivo   | Debe ser un porcentaje válido usado por los cálculos de potencial de leads y de cotización. | Un valor incorrecto cambia la economía comercial proyectada.                               |
| `Settings!B6` Umbral de sobrecosto | Debe ser un porcentaje válido usado por las alertas de costeo de obras.            | Un valor incorrecto cambia la sensibilidad de las alertas de costos.                              |
| `Material_Code`                 | Debe corresponder a un registro válido en `Material_DB`.                             | La búsqueda puede devolver `#N/A` o cero cuando el código falta o está mal formado.               |
| `Labor_Code`                    | Debe corresponder a un registro válido en `Labor_Rates`.                             | No se puede recuperar correctamente la tarifa horaria.                                            |
| `Job_ID`                        | Debe referenciar la obra aprobada correspondiente.                                   | Las transacciones de mano de obra/materiales pueden quedar desconectadas del proyecto correcto.   |
| `Actual_Hours`                  | Debe ser numérico y representar el consumo real de mano de obra del proyecto.        | Los valores inválidos distorsionan el costo real de mano de obra.                                 |
| `Actual_Quantity`               | Debe ser numérico y estar vinculado al código de material correspondiente.           | Los valores inválidos distorsionan el costo real de materiales.                                   |
| `Completion_Pct`                | El rango esperado es `0%–100%`.                                                      | Los valores de 100% o más se tratan como completados; el trabajo incompleto vencido genera una alerta. |
| Rango de salida de matriz dinámica | El destino del desbordamiento debe permanecer libre.                              | Las celdas ocupadas pueden generar `#SPILL!`.                                                     |
| Modo de cálculo de Excel        | Debe permanecer **Automático**.                                                      | Los cambios en `Settings` pueden no propagarse de inmediato cuando el cálculo está en Manual.     |
| Formato de moneda               | Las celdas monetarias deben usar el formato de moneda previsto.                      | Los valores pueden mostrarse con un símbolo de moneda incorrecto incluso cuando el número subyacente es correcto. |

La implementación recomienda la validación de datos de Excel para los campos de entrada operativos cuando sea práctico, e identifica explícitamente `#SPILL!`, el modo de cálculo manual, los códigos faltantes en los datos maestros y el formato de moneda incorrecto como modos comunes de falla operativa.

La verificación cruzada del libro también confirma que los parámetros globales se referencian aguas abajo y que las fórmulas de cálculo no codifican los principales supuestos de negocio.

</details>

## Notas de implementación

### Diseño con matrices dinámicas

El libro de Excel está diseñado para Microsoft 365 / Excel 2021+ y usa funciones modernas de matriz dinámica donde estas brindan una ventaja operativa clara.

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

Esto es particularmente importante para los flujos de trabajo de contratistas porque los leads, las obras, los registros de mano de obra y las transacciones de materiales se agregan continuamente con el tiempo.

La implementación usa lógica de matriz dinámica en áreas como la duración en el pipeline, la utilidad potencial, los cálculos de cotización, las alertas de cronograma y el análisis de clientes.

### Arquitectura de la clave de proyecto

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

Esto crea una relación única a nivel de proyecto entre:

* el contrato aprobado;
* el trabajo programado;
* la mano de obra real;
* los materiales reales;
* el costo real;
* la rentabilidad del proyecto.

La arquitectura identifica explícitamente el `Job_ID` unificado como el mecanismo central para eliminar las islas de datos entre la ejecución del proyecto y el análisis financiero.

### Conciliación de costos del proyecto

El libro de Excel mantiene una distinción clara entre **lo que se estimó** y **lo que realmente ocurrió**.

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

Esto permite a la dirección identificar si la economía de un proyecto se deterioró porque el consumo real de recursos se alejó de la estimación original.

El `Job_Cost_Engine` actúa, por lo tanto, como la capa de conciliación entre la planificación comercial y la ejecución operativa.

### Modelo de dependencia del panel

`Profit_Dashboard` no es una tabla de reportes independiente.

Está situado aguas abajo del motor de cálculo:

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

El panel resume las salidas generadas por los registros de proyecto subyacentes y la capa de cálculo, en lugar de requerir que la dirección mantenga cifras de reporte separadas.

La implementación define métricas del panel que incluyen:

* total de proyectos;
* ingresos sin impuestos;
* costo total real;
* utilidad bruta;
* margen general;
* conteo de proyectos con sobrecosto severo.

---

## Flujo de trabajo operativo

El ritmo operativo recomendado sigue la misma estructura que la arquitectura del libro de Excel.

### Inicio del día

Revise:

* `Settings`;
* la integridad de los datos maestros;
* los leads activos;
* el estado actual de los proyectos;
* las excepciones de cronograma pendientes.

El propósito es asegurar que el entorno de cálculo y las entradas operativas estén actualizados antes de capturar nuevos registros.

### Durante las operaciones

Actualice los registros operativos correspondientes a medida que ocurren los eventos del negocio:

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

El principio es **registrar el evento en su origen en lugar de reconstruirlo después**.

### Revisión de fin de día

Revise las salidas calculadas:

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

Esto convierte el libro de Excel de un archivo estático de reportes en un sistema ligero de control operativo.

---

## Cadencia de revisión recomendada

| Frecuencia      | Revisión principal                      | Enfoque recomendado                                                       |
| --------------- | --------------------------------------- | ------------------------------------------------------------------------ |
| **Diaria**      | `Schedule` + registros de ejecución     | Tareas vencidas, registros faltantes de mano de obra/materiales            |
| **Semanal**     | `Lead_Tracker` + `Profit_Dashboard`     | Pipeline de ofertas, proyectos activos, sobrecostos emergentes             |
| **Por proyecto** | `Job_Cost_Engine`                      | Costo y margen estimados vs. reales                                        |
| **Mensual**     | `Profit_Dashboard` + `Customer_History` | Rentabilidad general y contribución de clientes                            |
| **Trimestral**  | `Settings` + datos maestros             | Tarifas de mano de obra, costos de materiales, costos indirectos, margen objetivo, umbrales de alerta |

El propósito de esta cadencia es mantener separados el mantenimiento de los datos operativos y la revisión de gestión: los equipos de campo y de proyecto mantienen los registros de origen, mientras que la dirección usa los cálculos resultantes para tomar decisiones.

---

## Principios de captura de datos

### Capturar los datos de origen una sola vez

El libro de Excel está diseñado en torno al principio de **única fuente de verdad**.

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

La tarifa de materiales debe mantenerse, por lo tanto, en la tabla maestra en lugar de reescribirse de forma independiente en múltiples áreas de cálculo.

El mismo principio aplica a las tarifas de mano de obra y a los supuestos globales del negocio.

### Usar los ID de proyecto de forma consistente

Una vez que una obra aprobada recibe un `Job_ID`, todos los registros posteriores de ejecución del proyecto deben referenciar ese identificador.

```text
Job_ID: JOB-001
    ├── Schedule
    ├── Labor_Log
    ├── Material_Usage
    └── Job_Cost_Engine
```

Un `Job_ID` faltante o ingresado incorrectamente rompe la relación entre la actividad operativa y la rentabilidad del proyecto.

### No sobrescribir los resultados calculados

Las columnas calculadas deben permanecer controladas por fórmulas.

Los usuarios deben actualizar los registros de origen tales como:

* información del lead;
* entradas de la cotización;
* estado del proyecto;
* horas de mano de obra;
* cantidades de materiales;
* fechas del cronograma.

No deben reemplazar manualmente los resultados calculados de:

* costos totales;
* márgenes;
* variación de costos;
* rentabilidad del proyecto;
* resúmenes a nivel de cliente.

---

## Limitaciones conocidas

Este libro de Excel es intencionalmente ligero.

**No** debe tratarse como un reemplazo de:

* software contable;
* procesamiento de nómina;
* planeación de recursos empresariales (ERP);
* sistemas de adquisiciones;
* plataformas de gestión de servicios de campo;
* bases de datos transaccionales multiusuario.

Está diseñado para control operativo y apoyo a la decisión donde Excel sigue siendo un entorno de trabajo apropiado.

### Versión de Excel

La implementación depende de funciones modernas de Excel y está pensada para **Microsoft 365 / Excel 2021+**.

Las versiones anteriores de Excel pueden no admitir todas las funciones de matriz dinámica que usa el libro.

### Modo de cálculo

Excel debe permanecer en modo de **Cálculo automático**.

Si el cálculo se deshabilita manualmente, los cambios en `Settings` o en los registros de origen pueden no propagarse de inmediato a través de la cadena de cálculo.

### Espacio de desbordamiento de matrices dinámicas

Las fórmulas dinámicas requieren rangos de desbordamiento libres.

Si otro valor ocupa un área de desbordamiento requerida, Excel puede devolver `#SPILL!`.

La respuesta apropiada es inspeccionar el rango de desbordamiento en lugar de copiar manualmente las fórmulas en celdas adicionales.

### Dependencia de los datos maestros

`Material_Code` y `Labor_Code` dependen de los registros correspondientes en `Material_DB` y `Labor_Rates`.

Si falta un código o está mal formado, las búsquedas y los cálculos de costeo aguas abajo pueden no devolver el valor previsto.

---

## Otras herramientas de esta serie

Una colección de herramientas ligeras de Excel para apoyo a la decisión en planificación operativa, costeo, rentabilidad y análisis de negocio.

* **Enterprise Payroll & Annual Workforce Capacity Planning Excel Toolkit**
* **Industrial Energy Cost & TCO Decision Support Toolkit**
* **E-commerce Profit Engine & Financial Reconciliation Toolkit**
* **Food Manufacturing Cost & Unit Economics Excel Toolkit**
* **Rental Property Operations & Vacancy Intelligence Excel Toolkit**

---

## Licencia

Este proyecto se publica bajo la **Apache License 2.0**.

Usted es libre de usar, modificar, reproducir y distribuir la obra de acuerdo con los términos de la licencia.

Consulte el archivo `LICENSE` del repositorio para ver los términos completos de la licencia.