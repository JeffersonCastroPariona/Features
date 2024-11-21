Feature: US-024: Información meteorológica
    Como usuario, quiero recibir información meteorológica basada en mi ubicación para planificar mis actividades agrícolas, de manera que pueda tomar decisiones informadas 
    sobre el riego, la siembra y la cosecha.

  Scenario Outline: Escenario 1: Recepción de información meteorológica diaria
    Given que un usuario está autenticado y tiene habilitada la opción de recibir alertas meteorológicas,
    When el usuario selecciona su ubicación o permite que el sistema determine su ubicación automáticamente,
    Then el sistema debe enviar actualizaciones diarias sobre las condiciones meteorológicas (como temperatura, precipitaciones y humedad) para la ubicación seleccionada, 
    incluyendo pronósticos a corto y largo plazo.

    Examples:
      | ubicacion |
      | Cajamarca |
      | Cusco     |

  Scenario Outline: Escenario 2: Notificación de cambios bruscos en el clima
    Given que un usuario está autenticado y ha activado las alertas de cambios climáticos,
    When se detecta un cambio brusco en las condiciones meteorológicas (como tormentas, heladas o sequías) en la ubicación del usuario,
    Then el sistema debe enviar una notificación inmediata al usuario con detalles sobre el cambio y recomendaciones sobre cómo ajustar las actividades agrícolas según el nuevo pronóstico.

    Examples:
      | cambio_climatico | ubicacion |
      | Tormenta         | Cajamarca |
      | Helada           | Cusco     |
