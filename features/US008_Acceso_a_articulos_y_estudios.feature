Feature: US-008: Acceso a artículos y estudios
    Como estudiante de agronomía, quiero acceder a artículos sobre tecnología agrícola moderna, para ampliar mis conocimientos y estar al día con las últimas tendencias y avances en el campo.

  Scenario Outline: Escenario 1: Acceso exitoso a artículos
    Given que un estudiante está autenticado y navega a la sección de artículos,
    When el estudiante busca artículos utilizando filtros como tipo de tecnología, autor, o fecha de publicación,
    Then el sistema debe mostrar una lista de artículos que coincidan con los criterios de búsqueda, incluyendo títulos, resúmenes y enlaces para leer más.

    Examples:
      | tipo_de_tecnologia | autor          | fecha_de_publicacion |
      | Fertilización      | Dr. Juan Pérez | 2022-03-15           |
      | Riego              | María Gómez    | 2023-01-10           |

  Scenario Outline: Escenario 2: Fallo en el acceso a artículos (sin resultados)
    Given que un estudiante está autenticado y realiza una búsqueda en la sección de artículos,
    When el estudiante utiliza criterios de búsqueda que no coinciden con ningún artículo registrado,
    Then el sistema debe mostrar un mensaje indicando que no se encontraron resultados y sugerir al estudiante que intente con diferentes criterios.

    Examples:
      | tipo_de_tecnologia | autor        | fecha_de_publicacion |
      | Control de plagas  | Carlos López | 2021-07-01           |
