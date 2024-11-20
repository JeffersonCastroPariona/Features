Feature: US-006: Recomendaciones de cultivos
    Como agricultor, quiero recibir recomendaciones de cultivos adecuados para mi región, para optimizar mi producción y seleccionar los cultivos más rentables según las condiciones locales.

  Scenario Outline: Escenario 1: Recomendaciones exitosas basadas en la ubicación
    Given que un agricultor está autenticado y ha proporcionado su ubicación,
    When el agricultor accede a la sección de recomendaciones de cultivos,
    Then el sistema debe mostrar una lista de cultivos recomendados según la región, las condiciones climáticas actuales y la temporada del año.

    Examples:
      | region    | temporada | cultivos_recomendados       |
      | Cajamarca | Verano    | Maíz , Soya , Tomate        |
      | Cusco     | Invierno  | Papas , Cebada , Zanahorias |

  Scenario Outline: Escenario 2: Fallo en la obtención de recomendaciones (ubicación no proporcionada)
    Given que un agricultor no ha proporcionado su ubicación,
    When el agricultor intenta acceder a la sección de recomendaciones de cultivos,
    Then el sistema debe mostrar un mensaje de error solicitando al usuario que ingrese su ubicación para obtener recomendaciones adecuadas.

    Examples:
      |  ubicacion      |
      |        |
