Feature: US-038: Rendimiento de la aplicación
    Como usuario, quiero que la aplicación cargue rápidamente, incluso con una conexión a Internet limitada, para poder acceder a la información y funcionalidades sin interrupciones ni frustraciones.

  Scenario: Escenario 1: Carga rápida de la aplicación
    Given que un usuario está utilizando la aplicación en una conexión a Internet limitada,
    When el usuario accede a la página de inicio o a cualquier sección de la aplicación,
    Then la aplicación debe cargar completamente en un tiempo máximo de 3 segundos, asegurando que la experiencia de usuario sea fluida.

    | sección de la aplicación  | tiempo de carga (segundos) | resultado esperado |
    | Página de inicio          | 2.5                        | Carga completa     |
    | Sección de productos      | 2.8                        | Carga completa     |
    | Sección de perfil         | 3.0                        | Carga completa     |
    | Página de contacto        | 3.2                        | Carga no permitida (más de 3 segundos) |

  Scenario: Escenario 2: Optimización de recursos para conexiones lentas
    Given que la aplicación se está ejecutando en una red con baja velocidad,
    When se carga un recurso pesado (como imágenes o datos),
    Then el sistema debe utilizar técnicas de optimización (como carga diferida o compresión de datos) para reducir el tamaño de los archivos y minimizar el tiempo de carga, manteniendo la usabilidad de la aplicación.

    | tipo de recurso        | técnica de optimización   | resultado esperado                                         |
    | Imagen de producto     | Carga diferida            | Imagen cargada solo cuando es visible en pantalla          |
    | Datos de usuario       | Compresión de datos       | Datos comprimidos, carga rápida                            |
    | Gráfico de ventas      | Carga diferida            | Gráfico cargado solo cuando el usuario accede a la sección |
    | Video de presentación  | Carga diferida            | Video cargado de manera eficiente con baja calidad inicial |