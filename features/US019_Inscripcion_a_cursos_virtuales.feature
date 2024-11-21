Feature: US-019: Inscripción a cursos virtuales
    Como estudiante, quiero inscribirme en webinars y cursos virtuales de agronomía, para mejorar mis conocimientos y habilidades en el área agrícola.

  Scenario Outline: Escenario 1: Inscripción exitosa a un curso virtual
    Given que un estudiante está autenticado y navega a la sección de cursos virtuales,
    When el estudiante selecciona un curso o webinar de agronomía y hace clic en "Inscribirse",
    Then el sistema debe confirmar la inscripción mostrando un mensaje de éxito, y el estudiante debe recibir un correo electrónico con los detalles del curso y la fecha de inicio.

    Examples:
      | curso_o_webinar          | fecha_de_inicio |
      | Curso de Riego           | 2023-06-15      |
      | Webinar de Fertilización | 2023-07-01      |

  Scenario Outline: Escenario 2: Inscripción a curso lleno o cerrado
    Given que un estudiante está autenticado y desea inscribirse a un curso o webinar de agronomía,
    When el estudiante intenta inscribirse en un curso que ya está lleno o cuya fecha de inscripción ha expirado,
    Then el sistema debe mostrar un mensaje indicando que el curso está completo o que las inscripciones están cerradas, sugiriendo otros cursos disponibles o permitiendo que el estudiante 
    se una a una lista de espera.

    Examples:
      | curso_o_webinar          | estado  |
      | Curso de Riego           | Cerrado |
      | Webinar de Fertilización | Lleno   |
