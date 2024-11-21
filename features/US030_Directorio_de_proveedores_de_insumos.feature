Feature: US-030: Directorio de proveedores de insumos
    Como agricultor, quiero acceder a un directorio de proveedores de insumos agrícolas, para encontrar fácilmente productos necesarios para mis cultivos 
    y comparar opciones disponibles en el mercado.

  Scenario Outline: Escenario 1: Búsqueda de proveedores por categoría
    Given que un agricultor está autenticado y accede al directorio de proveedores,
    When el agricultor utiliza filtros para buscar proveedores por categoría de insumo (por ejemplo, semillas, fertilizantes, pesticidas),
    Then el sistema debe mostrar una lista de proveedores que ofrecen los insumos seleccionados, incluyendo información relevante como precios y ubicaciones.

    Examples:
      | categoria_de_insumo |
      | Semillas            |
      | Fertilizantes       |

  Scenario Outline: Escenario 2: Visualización de detalles del proveedor
    Given que un agricultor está navegando en el directorio de proveedores,
    When el agricultor selecciona un proveedor de la lista,
    Then el sistema debe mostrar una página con detalles sobre el proveedor, incluyendo información de contacto, productos ofrecidos, y reseñas de otros agricultores.

    Examples:
      | Proveedor | informacion_contacto | productos_ofrecidos | Impacto_cliente |
      | XYZ       | 565665656            | hrt,hjt             | positivo        |
