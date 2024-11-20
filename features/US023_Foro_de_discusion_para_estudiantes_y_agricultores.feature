Feature: US-023: Foro de discusión para estudiantes y agricultores
    Como estudiante, quiero colaborar y compartir conocimientos con agricultores a través de foros, para intercambiar experiencias y aprender sobre prácticas agrícolas directamente de profesionales en el campo.

  Scenario Outline: Escenario 1: Publicación y colaboración en un foro
    Given que un estudiante está autenticado y accede a la sección de foros,
    When el estudiante selecciona un tema agrícola de interés y publica una pregunta o comentario,
    Then el sistema debe permitir que otros estudiantes y agricultores respondan o colaboren en la discusión, mostrando las respuestas en tiempo real y permitiendo que el autor marque una respuesta como útil o resuelta.

    Examples:
      | tema_agricola | publicacion |
      | Fertilización orgánica | ¿Qué tipo de fertilizante es más efectivo? |
      | Control de plagas | ¿Cómo manejar las plagas en cultivos de maíz? |

  Scenario Outline: Escenario 2: Búsqueda de temas específicos en el foro
    Given que un estudiante está autenticado y busca información en el foro,
    When el estudiante ingresa un término de búsqueda relacionado con un tema agrícola (por ejemplo, "fertilización orgánica" o "control de plagas"),
    Then el sistema debe mostrar una lista de discusiones previas que coincidan con el término de búsqueda, permitiendo al estudiante unirse a la discusión o iniciar un nuevo hilo si no encuentra información relevante.

    Examples:
      | termino_de_busqueda |
      | Fertilización orgánica |
      | Control de plagas |
