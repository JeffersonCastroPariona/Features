Feature: US-010: Alertas de nivel de recursos
    Como agricultor, quiero recibir alertas sobre los niveles de recursos como agua y fertilizantes, para evitar excesos o deficiencias que puedan afectar mis cultivos.

  Scenario Outline: Escenario 1: Recepción de alerta por niveles bajos de recursos
    Given que un agricultor está autenticado y ha configurado los niveles óptimos de recursos en el sistema,
    When los niveles de agua o fertilizantes caen por debajo del umbral establecido,
    Then el sistema debe enviar una alerta al agricultor a través de una notificación en la aplicación y/o un correo electrónico, informando sobre la deficiencia.

    Examples:
      | recurso      | nivel_minimo | nivel_actual |
      | Agua         | 100L         | 80L          |
      | Fertilizante | 5kg          | 3kg          |

  Scenario Outline: Escenario 2: Recepción de alerta por niveles altos de recursos
    Given que un agricultor está autenticado y ha configurado los niveles óptimos de recursos en el sistema,
    When los niveles de agua o fertilizantes superan el umbral establecido,
    Then el sistema debe enviar una alerta al agricultor a través de una notificación en la aplicación y/o un correo electrónico, informando sobre el exceso.

    Examples:
      | recurso      | nivel_maximo | nivel_actual |
      | Agua         | 500L         | 600L         |
      | Fertilizante | 25kg         | 30kg         |
