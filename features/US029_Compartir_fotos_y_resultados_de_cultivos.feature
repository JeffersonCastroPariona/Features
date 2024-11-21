Feature: US-029: Compartir fotos y resultados de cultivos
    Como usuario, quiero compartir fotos y resultados de mis cultivos con la comunidad, para mostrar mis progresos, recibir retroalimentación y 
    aprender de las experiencias de otros agricultores.

  Scenario Outline: Escenario 1: Publicación de fotos de cultivos
    Given que un usuario está autenticado y desea compartir fotos de sus cultivos,
    When el usuario selecciona la opción de "Compartir foto" y sube una imagen junto con una descripción de los cultivos,
    Then el sistema debe publicar la foto en el feed de la comunidad, permitiendo que otros usuarios comenten y den retroalimentación.

    Examples:
      | foto      | descripcion                            |
      | foto1.jpg | Cultivo de maíz, crecimiento saludable |
      | foto2.jpg | Cultivo de papas, en etapa inicial     |

  Scenario Outline: Escenario 2: Visualización de resultados de cultivos
    Given que un usuario está autenticado y ha compartido previamente resultados de sus cultivos,
    When otros usuarios visitan el perfil del agricultor,
    Then el sistema debe mostrar una sección con las fotos y resultados compartidos, incluyendo las descripciones y comentarios de la comunidad.

    Examples:
      | foto        | descripción                                 | comentario de la comunidad                          |
      | foto1.jpg   | Cultivo de maíz, crecimiento saludable      | "Se ve muy bien, ¿qué tipo de fertilizante usaste?" |
      | foto2.jpg   | Cultivo de papas, en etapa inicial          | "¿Cuánto tiempo tiene desde la siembra?"            |
      | foto3.jpg   | Tomates en pleno crecimiento                | "¿Cuántos riegos semanales le das?"                 |
      | foto4.jpg   | Cultivo de zanahorias, pronto para cosechar | "¡Excelente trabajo! ¿Usaste pesticidas?"           |
