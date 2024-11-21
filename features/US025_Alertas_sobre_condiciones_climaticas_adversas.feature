Feature: US-025: Alertas sobre condiciones climáticas adversas
    Como agricultor, quiero recibir alertas sobre condiciones climáticas que puedan afectar mis cultivos, para tomar medidas preventivas y minimizar los daños.

  Scenario Outline: Escenario 1: Recepción de alerta por condiciones climáticas adversas
    Given que un agricultor está autenticado y ha habilitado las alertas meteorológicas,
    When el sistema detecta condiciones climáticas adversas como tormentas, granizo o heladas en la ubicación del agricultor,
    Then el sistema debe enviar una notificación inmediata al agricultor con detalles de las condiciones y sugerencias sobre las acciones preventivas que 
    se pueden tomar para proteger los cultivos.

    Examples:
      | condicion_climatica | ubicacion |
      | Tormenta            | Cajamarca |
      | Granizo             | Cusco     |
 
  Scenario Outline: Escenario 2: Configuración de tipos de alertas climáticas
    Given que un agricultor está autenticado y desea recibir solo ciertos tipos de alertas,
    When el agricultor accede a la configuración de alertas y selecciona las condiciones climáticas de interés (por ejemplo, heladas, sequías, tormentas),
    Then el sistema debe ajustar las notificaciones para que solo se envíen alertas relacionadas con las condiciones seleccionadas.

    Examples:
      | tipos_de_alerta |
      | Heladas         |
      | Tormentas       |
 