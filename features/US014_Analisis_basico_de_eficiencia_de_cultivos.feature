Feature: US-014: Análisis básico de eficiencia de cultivos
    Como agricultor, quiero recibir análisis básicos sobre la eficiencia de mis cultivos, para identificar áreas de mejora y optimizar mis prácticas agrícolas.

  Scenario Outline: Escenario 1: Análisis exitoso de eficiencia de cultivos
    Given que un agricultor está autenticado y ha registrado datos sobre el rendimiento y los recursos utilizados en sus cultivos,
    When el agricultor accede a la sección de análisis y selecciona "Eficiencia de cultivos",
    Then el sistema debe proporcionar un análisis que muestre la relación entre el rendimiento de los cultivos y los recursos utilizados, destacando la eficiencia de cada cultivo.

    Examples:
      | cultivo | recursos_utilizados | rendimiento_kg_ |
      | Maíz    | 100L de agua        | 5000            |
      | Papas   | 50L de agua         | 3000            |

  Scenario Outline: Escenario 2: Análisis de eficiencia sin datos suficientes
    Given que un agricultor está autenticado y desea obtener un análisis de eficiencia,
    When el agricultor intenta acceder a la sección de análisis pero no tiene suficientes datos registrados (como rendimiento o uso de recursos),
    Then el sistema debe mostrar un mensaje indicando que no hay suficientes datos para realizar el análisis y sugerir que registre más información.

    Examples:
      | cultivo | rendimiento_kg_ | recursos_utilizados |
      |         |                 |                     |
