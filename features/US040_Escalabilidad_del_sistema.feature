Feature: US-040: Escalabilidad del sistema
    Como desarrollador, quiero que la aplicación sea escalable para poder soportar un creciente número de usuarios, asegurando que el rendimiento se mantenga óptimo a medida que la base de usuarios crece.

  Scenario: Escenario 1: Capacidad para manejar aumento de usuarios
    Given que la aplicación se está utilizando por un número creciente de usuarios,
    When la cantidad de usuarios simultáneos aumenta en un 50% en comparación con la carga base,
    Then la aplicación debe seguir funcionando sin tiempos de carga prolongados o caídas en el servicio, y los recursos del servidor deben ajustarse automáticamente para manejar el aumento.

    | cantidad de usuarios base | cantidad de usuarios aumentada| tiempo de carga esperado (segundos) | estado del servicio                   |
    | 1000                      | 1500                          | 2.5                                 | Sin caídas, funcionando correctamente |
    | 5000                      | 7500                          | 3.0                                 | Sin caídas, funcionando correctamente |
    | 10000                     | 15000                         | 3.5                                 | Sin caídas, funcionando correctamente |
    | 20000                     | 30000                         | 4.0                                 | Sin caídas, funcionando correctamente |

  Scenario: Escenario 2: Despliegue en infraestructura escalable
    Given que la aplicación está implementada en una infraestructura de nube,
    When se detecta un aumento significativo en el tráfico,
    Then el sistema debe poder escalar horizontalmente (añadiendo más instancias de servidor) o verticalmente (mejorando la capacidad de las instancias existentes) de manera automática, sin necesidad de intervención manual.

    | tipo de escalabilidad   | acción tomada                          | resultado esperado                         |
    | Horizontal              | Añadir instancias de servidor          | Mayor capacidad para manejar tráfico       |
    | Vertical                | Aumentar capacidad de instancia        | Rendimiento mejorado para soportar tráfico |
    | Horizontal + Vertical   | Añadir instancias + aumentar capacidad | Optimización automática de rendimiento     |