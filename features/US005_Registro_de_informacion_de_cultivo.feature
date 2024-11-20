Feature: US-005: Registro de información de cultivo
    Como agricultor, quiero registrar información sobre mis cultivos, para gestionar mi producción de manera eficiente y llevar un control preciso de mis actividades agrícolas.

  Scenario Outline: Escenario 1: Registro de información exitoso
    Given que un agricultor está autenticado y quiere registrar información sobre sus cultivos,
    When el agricultor ingresa datos como el tipo de cultivo, fecha de siembra, ubicación, y estado de crecimiento, y presiona el botón "Guardar",
    Then el sistema debe guardar la información ingresada y mostrar un mensaje de confirmación indicando que los datos del cultivo se han registrado exitosamente.

    Examples:
      | tipo_de_cultivo | fecha_de_siembra | ubicacion | estado_de_crecimiento |
      | Maíz | 2023-05-10 | Cajamarca | Creciendo |
      | Papas | 2023-06-15 | Cusco | Germinando |

  Scenario Outline: Escenario 2: Fallo en el registro de información (datos incompletos)
    Given que un agricultor está autenticado y quiere registrar información sobre sus cultivos,
    When el agricultor intenta guardar datos incompletos o inválidos (como una fecha de siembra futura),
    Then el sistema debe mostrar un mensaje de error indicando qué información es incorrecta o faltante, y no debe permitir que se guarden los datos hasta que la información sea válida.

    Examples:
      | tipo_de_cultivo | fecha_de_siembra | ubicacion | estado_de_crecimiento |
      | Maíz |  | Cajamarca | Creciendo |
