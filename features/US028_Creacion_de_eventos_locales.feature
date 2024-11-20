Feature: US-028: Creación de eventos locales
    Como agricultor, quiero crear y participar en eventos locales relacionados con la agricultura, para fomentar la colaboración, compartir conocimientos y mejorar mis prácticas agrícolas.

  Scenario Outline: Escenario 1: Creación de un evento local
    Given que un agricultor está autenticado y desea organizar un evento,
    When el agricultor selecciona la opción de "Crear evento" y completa la información necesaria (nombre del evento, fecha, hora, ubicación y descripción),
    Then el sistema debe guardar el evento y enviar notificaciones a otros agricultores de la región invitándolos a participar.

    Examples:
      | nombre_del_evento | fecha | hora | ubicacion | descripcion |
      | Capacitación en Riego | 2023-06-15 | 10:00 | Cajamarca | Evento sobre técnicas de riego |
      | Fertilización Eficaz | 2023-06-20 | 14:00 | Cusco | Taller de fertilización orgánica |

  Scenario Outline: Escenario 2: Participacion en un evento existente
    Given que un agricultor está autenticado y navega por los eventos locales disponibles,
    When el agricultor encuentra un evento que le interesa y hace clic en "Participar",
    Then el sistema debe confirmar la inscripción del agricultor en el evento y permitirle recibir recordatorios y actualizaciones sobre el mismo.

    Examples:
      | evento_de_interes |
      | Capacitación en Riego |
      | Fertilización Eficaz |
