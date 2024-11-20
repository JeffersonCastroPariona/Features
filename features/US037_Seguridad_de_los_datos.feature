Feature: US-037: Seguridad de los datos
    Como desarrollador, quiero implementar un sistema de cifrado de datos personales para proteger la información de los usuarios, asegurando que los datos sensibles estén protegidos contra accesos no autorizados.

  Scenario: Escenario 1: Implementación de cifrado en la base de datos
    Given que se está desarrollando la aplicación,
    When se implementa el sistema de cifrado para los datos personales de los usuarios en la base de datos,
    Then todos los datos sensibles (como contraseñas, correos electrónicos y datos de contacto) deben ser almacenados de manera cifrada y no deben ser legibles sin el uso de la clave de cifrado adecuada.

  Scenario: Escenario 2: Verificación de acceso a datos cifrados
    Given que los datos personales están cifrados en la base de datos,
    When un usuario intenta acceder a su información personal,
    Then el sistema debe descifrar los datos en tiempo real para mostrarlos en la interfaz de usuario, asegurando que solo los usuarios autenticados y autorizados puedan acceder a su propia información.
