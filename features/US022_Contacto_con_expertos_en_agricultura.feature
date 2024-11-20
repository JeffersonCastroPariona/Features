Feature: US-022: Contacto con expertos en agricultura
    Como usuario, quiero contactar a expertos para obtener asesoramiento sobre mis cultivos, con el fin de mejorar mis prácticas agrícolas y optimizar mi producción.

  Scenario Outline: Escenario 1: Contacto exitoso con un experto en agricultura
    Given que un usuario está autenticado y desea contactar a un experto,
    When el usuario selecciona la opción de contactar a un experto y elige una especialidad agrícola,
    Then el sistema debe mostrar una lista de expertos disponibles y permitir al usuario enviar una solicitud de asesoramiento, que incluirá el problema o pregunta específica.

    Examples:
      | especialidad |
      | Fertilización |
      | Riego |

  Scenario Outline: Escenario 2: Asesoramiento no disponible en la especialidad seleccionada
    Given que un usuario está autenticado y desea contactar a un experto en una especialidad agrícola,
    When el usuario selecciona una especialidad para la cual no hay expertos disponibles,
    Then el sistema debe mostrar un mensaje indicando que no hay expertos en esa área en ese momento y ofrecer la opción de recibir una notificación cuando esté disponible o sugerir temas relacionados con expertos accesibles.

    Examples:
      | especialidad |
      | Control de plagas |
      | Genética vegetal |
