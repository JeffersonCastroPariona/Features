Feature: US-034: Contacto con soporte técnico
    Como usuario, quiero poder contactar al soporte técnico para resolver problemas con la aplicación, asegurando que mis inquietudes sean atendidas 
    y que pueda continuar utilizando la plataforma sin inconvenientes.

  Scenario Outline: Escenario 1: Envío de solicitud de soporte técnico
    Given que un usuario está autenticado y experimenta un problema con la aplicación,
    When el usuario accede a la sección de soporte técnico, completa un formulario de contacto con detalles del problema y presiona "Enviar",
    Then el sistema debe enviar la solicitud al equipo de soporte y mostrar un mensaje de confirmación indicando que la solicitud ha sido recibida y 
    que recibirán una respuesta en breve.

    Examples:
      | descripcion_del_problema                |
      | La aplicación se cierra inesperadamente |
      | No puedo cargar los datos del cultivo   |

  Scenario Outline: Escenario 2: Visualización del estado de la solicitud
    Given que un usuario ha enviado una solicitud de soporte técnico,
    When el usuario accede a la sección de "Mis solicitudes" en la aplicación,
    Then el sistema debe mostrar una lista de las solicitudes enviadas, incluyendo el estado actual de cada una (pendiente, en proceso, resuelta) y la 
    opción de agregar comentarios si es necesario.

    Examples:
      | estado_de_la_solicitud |
      | Pendiente              |
      | En proceso             |
      | Resuelta               |
