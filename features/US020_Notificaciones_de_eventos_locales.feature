Feature: US-020: Notificaciones de eventos locales
    Como agricultor, quiero recibir notificaciones sobre eventos locales de capacitación agrícola, para poder asistir y mejorar mis habilidades y conocimientos.

  Scenario Outline: Escenario 1: Recepción de notificaciones de eventos locales
    Given que un agricultor está autenticado y ha habilitado las notificaciones de eventos,
    When un evento local de capacitación agrícola relacionado con los intereses o ubicación del agricultor es programado,
    Then el sistema debe enviar una notificación al agricultor con los detalles del evento, incluyendo fecha, ubicación y tipo de capacitación.

    Examples:
      | evento | fecha | ubicacion |
      | Capacitación en Riego | 2023-07-01 | Cajamarca |

  Scenario Outline: Escenario 2: Configuración de preferencias para notificaciones de eventos
    Given que un agricultor está autenticado y desea recibir notificaciones solo sobre eventos específicos,
    When el agricultor accede a la configuración de notificaciones y selecciona las preferencias de temas de interés o áreas geográficas,
    Then el sistema debe ajustar las notificaciones para que el agricultor solo reciba alertas sobre los eventos que coincidan con las preferencias configuradas.

    Examples:
      | temas_de_interes | ubicacion |
      | Riego | Cajamarca |
      | Fertilización | Lima |
