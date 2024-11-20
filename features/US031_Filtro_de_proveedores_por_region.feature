Feature: US-031: Filtro de proveedores por región
    Como usuario, quiero filtrar proveedores según mi región, para encontrar insumos agrícolas que estén disponibles localmente y reducir los costos de transporte.

  Scenario Outline: Escenario 1: Aplicación de filtro de región
    Given que un agricultor está autenticado y accede al directorio de proveedores,
    When el agricultor selecciona su región en el filtro de búsqueda,
    Then el sistema debe mostrar una lista de proveedores que operan en esa región, con información sobre los insumos agrícolas que ofrecen.

    Examples:
      | region |
      | Cajamarca |
      | Cusco |

  Scenario: Escenario 2: Confirmación de resultados filtrados
    Given que un agricultor ha aplicado el filtro de región,
    When el agricultor revisa la lista de proveedores,
    Then el sistema debe confirmar que todos los proveedores mostrados están ubicados en la región seleccionada, y no debe incluir proveedores de otras regiones.
