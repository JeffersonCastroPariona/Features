Feature: US-033: Configuración de notificaciones
    Como usuario, quiero configurar mis notificaciones según mis preferencias, para recibir información relevante y oportuna sin ser abrumado por mensajes innecesarios.

  Scenario Outline: Escenario 1: Personalización de tipos de notificaciones
    Given que un usuario está autenticado y accede a la sección de configuración de notificaciones,
    When el usuario selecciona las categorías de notificaciones que desea recibir (por ejemplo, alertas de clima, recordatorios de eventos, actualizaciones de proveedores),
    Then el sistema debe guardar las preferencias y confirmar los cambios con un mensaje.

    Examples:
      | tipo_de_notificacion     |
      | Alertas de clima         |
      | Recordatorios de eventos |
      
      | mensaje esperado                                |
      | "Las notificaciones de clima están activadas"   |
      | "Las notificaciones de eventos están activadas" |

  Scenario Outline: Escenario 2: Opción para desactivar notificaciones
    Given que un usuario ha configurado sus preferencias de notificaciones,
    When el usuario decide desactivar todas las notificaciones o alguna categoría específica,
    Then el sistema debe permitir la desactivación y notificar al usuario que las notificaciones han sido desactivadas según su solicitud.

    Examples:
      | tipo_de_notificacion     |
      | Alertas de clima         |
      | Recordatorios de eventos |

      | mensaje esperado                                      |
      | "Las notificaciones de clima han sido desactivadas"   |
      | "Las notificaciones de eventos han sido desactivadas" |
