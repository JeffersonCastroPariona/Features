Feature: US-017: Búsqueda de mercados por tipo de producto
    Como agricultor, quiero buscar y filtrar mercados según el tipo de producto agrícola que deseo vender, para encontrar los mercados más adecuados y obtener las mejores oportunidades de venta.

  Scenario Outline: Escenario 1: Búsqueda exitosa de mercados por tipo de producto
    Given que un agricultor está autenticado y accede a la sección de búsqueda de mercados,
    When el agricultor selecciona un tipo de producto agrícola y aplica los filtros disponibles (como ubicación, tamaño del mercado y demanda),
    Then el sistema debe mostrar una lista de mercados que coincidan con los criterios de búsqueda, junto con detalles como ubicación, tamaño y condiciones de venta.

    Examples:
      | producto | ubicacion   | tamano_del_mercado |
      | Frutas   | Cajamarca   | Grande             |
      | Verduras | Lima        | Pequeño            |

  Scenario Outline: Escenario 2: Búsqueda sin resultados
    Given que un agricultor está autenticado y realiza una búsqueda de mercados por un tipo de producto específico,
    When el agricultor selecciona un producto agrícola para el cual no existen mercados disponibles,
    Then el sistema debe mostrar un mensaje indicando que no se encontraron mercados para ese tipo de producto y sugerir otros productos relacionados o modificar los filtros para obtener más resultados.

    Examples:
      | producto | ubicacion |
      | Pescado  | Cajamarca |
