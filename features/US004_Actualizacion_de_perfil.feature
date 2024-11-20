Feature: US-004: Actualización de perfil
    Como agricultor y/o estudiante de agronomía, quiero poder actualizar mi perfil con mi información personal y preferencias, para mantener mi cuenta al día y recibir recomendaciones personalizadas.

  Scenario Outline: Escenario 1: Actualización de perfil exitosa
    Given que un usuario está autenticado y quiere modificar su perfil,
    When el usuario ingresa a la sección "Editar perfil", actualiza su información personal y preferencias, y presiona el botón "Guardar cambios",
    Then el sistema debe guardar los cambios y mostrar un mensaje de confirmación indicando que el perfil se ha actualizado correctamente.

    Examples:
      | nombre      | correo_electronico | telefono  |
      | Juan Pérez  | juan@dominio.com   | 987654321 |
      | María Gómez | maria@dominio.com  | 998877665 |

  Scenario Outline: Escenario 2: Fallo en la actualización de perfil (datos inválidos)
    Given que un usuario está autenticado y quiere modificar su perfil,
    When el usuario intenta guardar cambios con información incompleta o no válida (como un correo electrónico con formato incorrecto),
    Then el sistema debe mostrar un mensaje de error indicando qué datos son incorrectos o faltantes, y no debe permitir que se guarden los cambios hasta que la información sea válida.

    Examples:
      | nombre      | correo_electronico | telefono |
      | Juan Pérez  | juan@dominio.com   | abc123   |
      | María Gómez | maria@dominio.com  |          |
