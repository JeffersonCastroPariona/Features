Feature: US-026: Informes detallados de clima
    Como estudiante, quiero consultar informes detallados sobre el impacto del clima en los cultivos, para entender cómo las condiciones meteorológicas afectan el rendimiento agrícola y aplicar estos conocimientos en mis estudios.

  Scenario Outline: Escenario 1: Consulta de informes de impacto climático en cultivos
    Given que un estudiante está autenticado y desea consultar informes de clima,
    When el estudiante selecciona un cultivo y un período de tiempo en la sección de informes,
    Then el sistema debe generar un informe detallado sobre el impacto de las condiciones climáticas (como precipitaciones, temperatura y humedad) en ese cultivo, mostrando gráficos y datos históricos relevantes.

    Examples:
      | cultivo | periodo |
      | Maíz    | 2023    |
      | Papas   | 2023    |

  Scenario Outline: Escenario 2: Descarga de informes climáticos en formato PDF
    Given que un estudiante está autenticado y desea descargar un informe sobre el impacto del clima en los cultivos,
    When el estudiante visualiza el informe detallado en la plataforma,
    Then el sistema debe permitir la descarga del informe en formato PDF para facilitar su uso en proyectos académicos o estudios.

    Examples:
      |  Informe    |
      |  download   |
