Feature: US-001: Registro y Autenticación
    Como agricultor/estudiante, quiero registrarme usando mi correo electrónico para acceder a las funcionalidades de la plataforma

  Scenario Outline: Escenario 1: Registro exitoso
    Given que el usuario es nuevo en la plataforma
    When el usuario introduce su correo electrónico y número de celular en el formulario de registro
    Then el sistema almacena la información y envía un correo de confirmación al usuario
    And Y el usuario es redirigido a la página de inicio de sesión después de completar el registro.

    Examples:
      | correo_electronico | numero_de_celular |
      | usuario@dominio.com | 9876543210 |
      | usuario2@dominio.com | 9988776655 |
      | usuario3@dominio.com | 6677889900 |

  Scenario Outline: Escenario 2: Registro fallido por campos vacíos
    Given que el usuario no completa todos los campos obligatorios en el formulario de registro
    When el usuario intenta enviar el formulario con información faltante
    Then el sistema muestra un mensaje de error indicando qué campos deben completarse.

    Examples:
      | correo_electronico | numero_de_celular |
      | usuario@dominio.com |  |
      |  | 9876543210 |
