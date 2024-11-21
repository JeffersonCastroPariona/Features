Feature: US-039: Soporte multiplataforma
    Como usuario, quiero acceder a la aplicación tanto en dispositivos móviles como en web, para que pueda utilizar la plataforma de manera 
    conveniente en cualquier dispositivo según mi preferencia y necesidad.

  Scenario: Escenario 1: Acceso a la aplicación en dispositivos móviles
    Given que un usuario tiene la aplicación instalada en su dispositivo móvil,
    When el usuario abre la aplicación,
    Then la aplicación debe cargarse correctamente y ofrecer todas las funcionalidades disponibles, adaptadas a la interfaz y tamaño 
    de pantalla del dispositivo móvil.

    | dispositivo móvil   | sistema operativo  | funcionalidad esperada                                    | resultado esperado              |
    | iPhone 12           | iOS                | Acceso a perfil, notificaciones, sección de productos     | Funciones accesibles sin fallos |
    | Samsung Galaxy S21  | Android            | Acceso a historial de compras, carrito de compras         | Funciones accesibles sin fallos |
    | Huawei P30          | Android            | Acceso a videos tutoriales, ajustes de cuenta             | Funciones accesibles sin fallos |
    | Google Pixel 5      | iOS                | Acceso a contacto con soporte, configuraciones del perfil | Funciones accesibles sin fallos |

  Scenario: Escenario 2: Acceso a la aplicación a través de un navegador web
    Given que un usuario accede a la aplicación a través de un navegador web en su computadora,
    When el usuario inicia sesión,
    Then la aplicación debe cargarse completamente y permitir el acceso a todas las funcionalidades, asegurando que la experiencia de 
    usuario sea coherente con la versión móvil.

    | navegador web       | sistema operativo  | funcionalidad esperada                                     | resultado esperado              |
    | Google Chrome       | Windows 10         | Acceso a perfil, historial, notificaciones                 | Funciones accesibles sin fallos |
    | Mozilla Firefox     | MacOS              | Acceso a carrito de compras, productos favoritos           | Funciones accesibles sin fallos |
    | Safari              | MacOS              | Acceso a configuraciones de cuenta, videos tutoriales      | Funciones accesibles sin fallos |
    | Microsoft Edge      | Windows 11         | Acceso a contacto con soporte, configuración de privacidad | Funciones accesibles sin fallos |