Feature: US-021: Chat para consultas técnicas
    Como agricultor, quiero hacer preguntas y recibir asesoramiento técnico a través de un chat, para obtener ayuda rápida y solucionar problemas relacionados con mis cultivos o prácticas agrícolas.

  Scenario Outline: Escenario 1: Consulta técnica exitosa mediante chat
    Given que un agricultor está autenticado y necesita asesoramiento técnico,
    When el agricultor abre el chat de soporte técnico y escribe una consulta,
    Then el sistema debe conectar al agricultor con un asesor o asistente automatizado, proporcionando una respuesta clara y relevante a la consulta dentro de un tiempo razonable.

    Examples:
      | consulta                        |
      | ¿Cómo puedo mejorar el riego?   |
      | ¿Cuál es el mejor fertilizante? |

  Scenario Outline: Escenario 2: Chat fuera de horario de atención
    Given que un agricultor está autenticado y necesita hacer una consulta técnica,
    When el agricultor intenta usar el chat fuera del horario de atención del soporte técnico en vivo,
    Then el sistema debe notificar que el chat está fuera de servicio temporalmente y ofrecer la opción de enviar la consulta por correo electrónico o acceder 
    a una base de conocimientos con respuestas frecuentes.

    Examples:
      |   outtime  |
      |     -      |
