Feature: US-032: Elección de idioma
    Como usuario, quiero elegir el idioma de la aplicación (español, quechua) para una mejor experiencia, permitiéndome interactuar con la
    plataforma en el idioma que me resulta más cómodo.

  Scenario Outline: Escenario 1: Selección de idioma en la configuración
    Given que un usuario está autenticado y navega por la configuración de la aplicación,
    When el usuario selecciona el idioma deseado (español o quechua) y guarda los cambios,
    Then el sistema debe cambiar el idioma de la interfaz de la aplicación al seleccionado y confirmar el cambio con un mensaje.

    Examples:
      | idioma_seleccionado |
      | Español             |
      | Quechua             |

      | mensaje esperado                     |
      | "El idioma se ha cambiado a Español" |
      | "El idioma se ha cambiado a Quechua" |

  Scenario Outline: Escenario 2: Persistencia de la elección de idioma
    Given que un usuario ha seleccionado un idioma y cerrado la aplicación,
    When el usuario vuelve a iniciar sesión,
    Then el sistema debe recordar la elección de idioma y mostrar la interfaz en el idioma previamente seleccionado.

    Examples:
      | idioma_esperado_despues_de_inicio_de_sesion |
      | Español                                     |
      | Quechua                                     |
