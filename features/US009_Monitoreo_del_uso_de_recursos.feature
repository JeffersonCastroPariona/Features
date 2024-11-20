Feature: US-009: Monitoreo del uso de recursos
    Como agricultor, quiero monitorear el uso de agua y fertilizantes en mis cultivos, para optimizar su uso y mejorar la sostenibilidad de mis prácticas agrícolas.

  Scenario Outline: Escenario 1: Monitoreo exitoso del uso de recursos
    Given que un agricultor está autenticado y tiene acceso a la sección de monitoreo,
    When el agricultor ingresa datos sobre el uso de agua y fertilizantes en sus cultivos,
    Then el sistema debe mostrar un resumen del uso de recursos, incluyendo gráficos y recomendaciones para optimizar su consumo.

    Examples:
      | cultivo | agua_utilizada_L_ | fertilizante_utilizado_kg_ |
      | Maíz    | 500               | 10                         |
      | Papas   | 350               | 8                          |

  Scenario Outline: Escenario 2: Fallo en el monitoreo (datos incompletos)
    Given que un agricultor está autenticado y desea registrar el uso de recursos,
    When el agricultor intenta guardar datos incompletos o inválidos (como cantidades negativas o fechas no válidas),
    Then el sistema debe mostrar un mensaje de error indicando qué información es incorrecta o faltante, y no debe permitir que se guarden los datos hasta que la información sea válida.

    Examples:
      | cultivo | agua_utilizada_L_ | fertilizante_utilizado_kg_ |
      | Maíz    |                   | 10                         |
