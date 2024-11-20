Feature: US-012: Registro de datos de crecimiento
    Como agricultor, quiero registrar datos sobre el crecimiento de mis cultivos, para analizar su progreso y tomar decisiones informadas sobre su manejo.

  Scenario Outline: Escenario 1: Registro exitoso de datos de crecimiento
    Given que un agricultor está autenticado y desea registrar datos sobre el crecimiento de sus cultivos,
    When el agricultor ingresa información como la altura de las plantas, el estado de salud, y la fecha de registro, y presiona el botón "Guardar",
    Then el sistema debe almacenar la información ingresada y mostrar un mensaje de confirmación indicando que los datos se han registrado exitosamente.

    Examples:
      | cultivo | altura_cm_ | estado_de_salud | fecha_de_registro |
      | Maíz    | 45         | Bueno           | 2023-05-01        |
      | Papas   | 30         | Normal          | 2023-05-02        |

  Scenario Outline: Escenario 2: Fallo en el registro de datos de crecimiento (información incompleta)
    Given que un agricultor está autenticado y intenta registrar datos de crecimiento,
    When el agricultor intenta guardar la información con campos obligatorios vacíos o con datos inválidos (como valores negativos para la altura),
    Then el sistema debe mostrar un mensaje de error indicando qué datos son incorrectos o faltantes, y no debe permitir que se guarden los datos hasta que la información sea válida.

    Examples:
      | cultivo | altura_cm_ | estado_de_salud | fecha_de_registro |
      | Maíz    | 45         |                 | 2023-05-01        |
