Feature: US-011: Recordatorios de actividades agrícolas
    Como agricultor, quiero recibir recordatorios para tareas importantes como el riego y la fertilización, para asegurarme de que mis cultivos reciban el cuidado adecuado en el momento oportuno.

  Scenario Outline: Escenario 1: Recepción de recordatorio para riego
    Given que un agricultor está autenticado y ha programado tareas de riego en el sistema,
    When llega el momento programado para el riego,
    Then el sistema debe enviar una notificación al agricultor a través de la aplicación y/o un correo electrónico recordándole que es hora de regar sus cultivos.

    Examples:
      | tarea | fecha_programada | hora_programada |
      | Riego | 2023-04-10       | 08:00           |

  Scenario Outline: Escenario 2: Recepción de recordatorio para fertilización
    Given que un agricultor está autenticado y ha programado tareas de fertilización en el sistema,
    When se acerca la fecha programada para la fertilización,
    Then el sistema debe enviar una notificación al agricultor a través de la aplicación y/o un correo electrónico recordándole que es hora de fertilizar sus cultivos.

    Examples:
      | tarea         | fecha_programada | hora_programada |
      | Fertilización | 2023-04-15       | 10:00           |
