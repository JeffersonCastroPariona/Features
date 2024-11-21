Feature: US-036: Reporte de errores
    Como usuario, quiero reportar errores y recibir actualizaciones sobre su estado, para asegurarme de que los problemas sean atendidos y que pueda 
    conocer el progreso en la resolución.

  Scenario Outline: Escenario 1: Envío de un reporte de error
    Given que un usuario está autenticado y encuentra un error en la aplicación,
    When el usuario accede a la sección de "Reporte de Errores", completa el formulario con los detalles del error y presiona "Enviar",
    Then el sistema debe registrar el reporte y mostrar un mensaje de confirmación indicando que el error ha sido reportado y que recibirán actualizaciones sobre su estado.

    Examples:
      | descripcion_del_error                 |
      | La aplicación se congela al cargar    |
      | Los datos de cultivo no se actualizan |

  Scenario Outline: Escenario 2: Recepción de actualizaciones sobre el estado del error
    Given que un usuario ha enviado un reporte de error,
    When el estado del reporte cambia (por ejemplo, de "pendiente" a "en proceso" o "resuelto"),
    Then el sistema debe enviar notificaciones al usuario informando sobre el cambio de estado y permitiendo que el usuario consulte el estado actual 
    en la sección de "Mis reportes".

    Examples:
      | estado_del_reporte |
      | Pendiente          |
      | En proceso         |
      | Resuelto           |
