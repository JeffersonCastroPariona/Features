Feature: US-016: Directorio de mercados locales
    Como agricultor, quiero acceder a un directorio de mercados locales donde pueda vender mis productos, para conocer las opciones disponibles y facilitar mis ventas.

  Scenario Outline: Escenario 1: Acceso exitoso al directorio de mercados
    Given que un agricultor está autenticado y navega a la sección de directorio de mercados,
    When el agricultor accede a la lista de mercados locales,
    Then el sistema debe mostrar un directorio con información detallada de cada mercado, incluyendo nombre, ubicación, horario de operación y tipos de productos que se pueden vender.

    Examples:
      | mercado | ubicacion | horario_de_operacion | productos_permitidos |
      | Mercado 1 | Cajamarca | 8 AM - 5 PM | Frutas, Verduras |
      | Mercado 2 | Lima | 7 AM - 6 PM | Legumbres, Cereales |

  Scenario Outline: Escenario 2: Filtrado del directorio por ubicación
    Given que un agricultor está autenticado y accede a la sección de directorio de mercados,
    When el agricultor aplica un filtro de búsqueda por ubicación (como ciudad o región),
    Then el sistema debe mostrar solo los mercados locales que se encuentren dentro de la ubicación seleccionada, y actualizar la lista de acuerdo con el filtro aplicado.

    Examples:
      | ubicacion |
      | Cajamarca |
      | Lima |
