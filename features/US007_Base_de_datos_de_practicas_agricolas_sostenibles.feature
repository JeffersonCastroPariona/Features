Feature: US-007: Base de datos de practicas agricolas sostenibles
    Como agricultor, quiero consultar una base de datos sobre prácticas agrícolas sostenibles, para mejorar mi producción y adoptar métodos que minimicen el impacto ambiental.

  Scenario Outline: Escenario 1: Consulta exitosa de prácticas sostenibles
    Given que un agricultor está autenticado y quiere acceder a la base de datos,
    When el agricultor busca prácticas agrícolas sostenibles utilizando filtros como tipo de cultivo, región, o tipo de práctica,
    Then el sistema debe mostrar una lista de prácticas que cumplan con los criterios de búsqueda, incluyendo descripciones y beneficios.

    Examples:
      | tipo_de_cultivo | region | tipo_de_practica |
      | Maíz | Cajamarca | Riego eficiente |
      | Papas | Cusco | Control biológico |

  Scenario Outline: Escenario 2: Fallo en la consulta (sin resultados)
    Given que un agricultor está autenticado y realiza una búsqueda en la base de datos,
    When el agricultor utiliza criterios de búsqueda que no coinciden con ninguna práctica registrada,
    Then el sistema debe mostrar un mensaje indicando que no se encontraron resultados y sugerir al usuario que intente con diferentes criterios.

    Examples:
      | tipo_de_cultivo | region | tipo_de_practica |
      | Soja | Amazonas | Riego eficiente |
