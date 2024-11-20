Feature: US-018: Acceso a videos y tutoriales
    Como usuario, quiero acceder a videos y tutoriales sobre prácticas agrícolas, para mejorar mis conocimientos y aplicar técnicas modernas en el manejo de mis cultivos.

  Scenario Outline: Escenario 1: Acceso exitoso a videos y tutoriales
    Given que un usuario está autenticado y navega a la sección de videos y tutoriales,
    When el usuario selecciona una categoría de prácticas agrícolas (como riego, fertilización, control de plagas),
    Then el sistema debe mostrar una lista de videos y tutoriales relacionados con esa categoría, permitiendo al usuario ver los contenidos directamente desde la plataforma.

    Examples:
      | categoria |
      | Riego |
      | Fertilización |

  Scenario Outline: Escenario 2: Búsqueda de videos por tema específico
    Given que un usuario está autenticado y desea buscar videos o tutoriales específicos,
    When el usuario ingresa un término de búsqueda relacionado con una práctica agrícola en el buscador (por ejemplo, "fertilización orgánica"),
    Then el sistema debe mostrar una lista de videos relevantes que coincidan con el término de búsqueda, proporcionando opciones filtradas para facilitar el acceso al contenido.

    Examples:
      | termino_de_busqueda |
      | Fertilización orgánica |
      | Control de plagas |
