Feature: US-002: Inicio de sesión de usuarios


  Scenario Outline: Escenario 1: Inicio de sesión exitoso
    Given que un usuario registrado ingresa correctamente su correo electrónico y contraseña,
    When presiona el botón "Iniciar sesión",
    Then el sistema debe autenticar las credenciales y permitir al usuario acceder a su cuenta mostrándole el panel principal.

    Examples:
      | correo_electronico | contrasena |
      | usuario@dominio.com | pass1234 |
      | usuario2@dominio.com | pass5678 |

  Scenario Outline: Escenario 2: Fallo en el inicio de sesión por credenciales incorrectas
    Given que un usuario registrado ingresa una contraseña incorrecta,
    When presiona el botón "Iniciar sesión",
    Then el sistema debe mostrar un mensaje de error indicando que las credenciales son incorrectas y no debe permitir el acceso a la cuenta.

    Examples:
      | correo_electronico | contrasena |
      | usuario@dominio.com | wrongpass |
      | usuario2@dominio.com | 123wrong |
