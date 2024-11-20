Feature: US-039: Soporte multiplataforma
    Como usuario, quiero acceder a la aplicación tanto en dispositivos móviles como en web, para que pueda utilizar la plataforma de manera conveniente en cualquier dispositivo según mi preferencia y necesidad.

  Scenario: Escenario 1: Acceso a la aplicación en dispositivos móviles
    Given que un usuario tiene la aplicación instalada en su dispositivo móvil,
    When el usuario abre la aplicación,
    Then la aplicación debe cargarse correctamente y ofrecer todas las funcionalidades disponibles, adaptadas a la interfaz y tamaño de pantalla del dispositivo móvil.

  Scenario: Escenario 2: Acceso a la aplicación a través de un navegador web
    Given que un usuario accede a la aplicación a través de un navegador web en su computadora,
    When el usuario inicia sesión,
    Then la aplicación debe cargarse completamente y permitir el acceso a todas las funcionalidades, asegurando que la experiencia de usuario sea coherente con la versión móvil.
