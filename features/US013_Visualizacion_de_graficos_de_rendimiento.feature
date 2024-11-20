Feature: US-013: Visualización de gráficos de rendimiento
    Como agricultor, quiero visualizar gráficos del historial de uso de recursos y rendimiento de mis cultivos, para analizar tendencias y tomar decisiones informadas sobre mis prácticas agrícolas.

  Scenario Outline: Escenario 1: Visualización exitosa de gráficos de uso de recursos
    Given que un agricultor está autenticado y tiene datos registrados sobre el uso de recursos,
    When el agricultor accede a la sección de visualización de gráficos y selecciona "Uso de recursos",
    Then el sistema debe mostrar un gráfico que represente el historial de uso de agua y fertilizantes, permitiendo al agricultor observar las tendencias a lo largo del tiempo.

    Examples:
      | recurso      | periodo | cantidad_utilizada |
      | Agua         | Enero   | 200L               |
      | Fertilizante | Enero   | 10kg               |

  Scenario Outline: Escenario 2: Visualización exitosa de gráficos de rendimiento de cultivos
    Given que un agricultor está autenticado y tiene datos de rendimiento de cultivos registrados,
    When el agricultor accede a la sección de visualización de gráficos y selecciona "Rendimiento de cultivos",
    Then el sistema debe mostrar un gráfico que represente el historial de rendimiento de los cultivos, permitiendo al agricultor comparar diferentes cultivos y épocas de crecimiento.

    Examples:
      | cultivo | periodo | rendimiento_kg_ |
      | Maíz    | 2023    | 5000            |
      | Papas   | 2023    | 3000            |
