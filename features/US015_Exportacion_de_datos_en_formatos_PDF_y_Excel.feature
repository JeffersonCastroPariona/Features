Feature: US-015: Exportación de datos en formatos PDF y Excel
    Como estudiante, quiero exportar datos y reportes en formatos PDF y Excel, para facilitar la presentación de mis proyectos y análisis.

  Scenario: Escenario 1: Exportación exitosa a PDF
    Given que un estudiante está autenticado y tiene acceso a un reporte que desea exportar,
    When el estudiante selecciona la opción "Exportar a PDF" y confirma la acción,
    Then el sistema debe generar un archivo PDF del reporte y permitir que el estudiante lo descargue exitosamente.

  Scenario: Escenario 2: Exportación exitosa a Excel
    Given que un estudiante está autenticado y tiene acceso a un conjunto de datos que desea exportar,
    When el estudiante selecciona la opción "Exportar a Excel" y confirma la acción,
    Then el sistema debe generar un archivo Excel del conjunto de datos y permitir que el estudiante lo descargue exitosamente.
