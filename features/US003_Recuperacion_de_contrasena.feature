Feature: US-003: Recuperación de contraseña
    Como agricultor y/o estudiante de agronomía, quiero poder recuperar mi contraseña si la olvido, para acceder nuevamente a mi cuenta de manera segura.

  Scenario Outline: Escenario 1: Solicitud de recuperación de contraseña exitosa
    Given que un usuario ha olvidado su contraseña y está en la pantalla de inicio de sesión,
    When el usuario hace clic en el enlace "¿Olvidaste tu contraseña?", ingresa su dirección de correo electrónico registrada y presiona el botón "Enviar",
    Then el sistema debe enviar un correo electrónico con un enlace de recuperación de contraseña al usuario, y mostrar un mensaje indicando que las instrucciones han sido enviadas a su correo.

    Examples:
      | correo_electronico |
      | usuario@dominio.com |
      | usuario2@dominio.com |

  Scenario Outline: Escenario 2: Solicitud de recuperación de contraseña fallida (correo no registrado)
    Given que un usuario intenta recuperar su contraseña,
    When ingresa una dirección de correo electrónico que no está registrada en el sistema y presiona el botón "Enviar",
    Then el sistema debe mostrar un mensaje de error indicando que no existe ninguna cuenta asociada a ese correo y no debe enviar el enlace de recuperación.

    Examples:
      | correo_electronico |
      | noexiste@dominio.com |
      | otrocorreo@dominio.com |
