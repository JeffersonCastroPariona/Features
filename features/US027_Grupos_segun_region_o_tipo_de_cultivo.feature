Feature: US-027: Grupos según región o tipo de cultivo
    Como usuario, quiero unirme a grupos para compartir experiencias con otros agricultores, ya sea por región o por tipo de cultivo, para intercambiar conocimientos y obtener apoyo en mis prácticas agrícolas.

  Scenario Outline: Escenario 1: Unirse a un grupo existente
    Given que un usuario está autenticado y navega por la sección de grupos,
    When el usuario encuentra un grupo que le interesa, ya sea por región o tipo de cultivo, y hace clic en "Unirse",
    Then el sistema debe añadir al usuario al grupo y permitirle ver las publicaciones y participar en las discusiones del grupo.

    Examples:
      | grupo_de_interes       |
      | Cultivos en Cajamarca  |
      | Fertilización orgánica |

  Scenario Outline: Escenario 2: Crear un nuevo grupo
    Given que un usuario está autenticado y desea compartir experiencias sobre un tipo de cultivo específico o en una región particular,
    When el usuario selecciona la opción de "Crear grupo" y completa la información requerida (nombre del grupo, descripción, tipo de cultivo o región),
    Then el sistema debe crear el nuevo grupo y permitir al usuario invitar a otros agricultores a unirse, así como publicar contenido en el grupo.

    Examples:
      | nombre_del_grupo        | descripcion                                    | tipo_de_cultivo_o_region |  
      | Cultivos Cajamarca      | Grupo para discutir cultivos de la región      | Cajamarca                |
      | Fertilización Orgánica  | Grupo sobre mejores prácticas de fertilización | Fertilización Orgánica   |
