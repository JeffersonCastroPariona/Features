Feature: US-035: Sección de Preguntas Frecuentes
    Como usuario, quiero acceder a una sección de preguntas frecuentes para resolver problemas comunes, lo que me permitirá encontrar respuestas rápidamente sin necesidad de contactar al soporte técnico.

  Scenario Outline: Escenario 1: Acceso a la sección de preguntas frecuentes
    Given que un usuario está navegando por la aplicación,
    When el usuario selecciona la opción de "Preguntas Frecuentes" en el menú principal,
    Then el sistema debe mostrar una lista de preguntas comunes y sus respectivas respuestas organizadas por categorías relevantes.

    Examples:
      | categoria     | pregunta                              | respuesta                         |
      | Riego         | ¿Cada cuánto debo regar mis cultivos? | Depende del clima local           |
      | Fertilización | ¿Qué fertilizantes usar para el maíz? | Uso de fertilizantes nitrogenados |

  Scenario Outline: Escenario 2: Búsqueda de preguntas específicas
    Given que un usuario está en la sección de preguntas frecuentes,
    When el usuario utiliza la barra de búsqueda para ingresar una palabra clave relacionada con su problema,
    Then el sistema debe mostrar las preguntas y respuestas que coinciden con la búsqueda, permitiendo al usuario encontrar la información que necesita de manera eficiente.

    Examples:
      | termino_de_busqueda |
      | Fertilización       |
      | Riego               |
