module.exports = function () {
    this.Before(function (scenario) {
        this.actionwords = Object.create(require('./actionwords.js').Actionwords);
    });

    this.After(function (scenario) {
        this.actionwords = null;
    });



    this.Given(/^que el usuario es nuevo en la plataforma$/, function (callback) {
        this.actionwords.queElUsuarioEsNuevoEnLaPlataforma();
        callback();
    });

    this.When(/^el usuario introduce su correo electrónico y número de celular en el formulario de registro$/, function (callback) {
        this.actionwords.elUsuarioIntroduceSuCorreoElectronicoYNumeroDeCelularEnElFormularioDeRegistro();
        callback();
    });

    this.Then(/^el sistema almacena la información y envía un correo de confirmación al usuario$/, function (callback) {
        this.actionwords.elSistemaAlmacenaLaInformacionYEnviaUnCorreoDeConfirmacionAlUsuario();
        callback();
    });

    this.Then(/^Y el usuario es redirigido a la página de inicio de sesión después de completar el registro\.$/, function (callback) {
        this.actionwords.yElUsuarioEsRedirigidoALaPaginaDeInicioDeSesionDespuesDeCompletarElRegistro();
        callback();
    });

    this.Given(/^que un usuario registrado ingresa correctamente su correo electrónico y contraseña,$/, function (callback) {
        this.actionwords.queUnUsuarioRegistradoIngresaCorrectamenteSuCorreoElectronicoYContrasena();
        callback();
    });

    this.When(/^presiona el botón "(.*)",$/, function (p1, callback) {
        this.actionwords.presionaElBotonP1(p1);
        callback();
    });

    this.Then(/^el sistema debe autenticar las credenciales y permitir al usuario acceder a su cuenta mostrándole el panel principal\.$/, function (callback) {
        this.actionwords.elSistemaDebeAutenticarLasCredencialesYPermitirAlUsuarioAccederASuCuentaMostrandoleElPanelPrincipal();
        callback();
    });

    this.Given(/^que un usuario registrado ingresa una contraseña incorrecta,$/, function (callback) {
        this.actionwords.queUnUsuarioRegistradoIngresaUnaContrasenaIncorrecta();
        callback();
    });

    this.Then(/^el sistema debe mostrar un mensaje de error indicando que las credenciales son incorrectas y no debe permitir el acceso a la cuenta\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnMensajeDeErrorIndicandoQueLasCredencialesSonIncorrectasYNoDebePermitirElAccesoALaCuenta();
        callback();
    });

    this.Given(/^que un usuario ha olvidado su contraseña y está en la pantalla de inicio de sesión,$/, function (callback) {
        this.actionwords.queUnUsuarioHaOlvidadoSuContrasenaYEstaEnLaPantallaDeInicioDeSesion();
        callback();
    });

    this.When(/^el usuario hace clic en el enlace "(.*)", ingresa su dirección de correo electrónico registrada y presiona el botón "(.*)",$/, function (p1, p2, callback) {
        this.actionwords.elUsuarioHaceClicEnElEnlaceP1IngresaSuDireccionDeCorreoElectronicoRegistradaYPresionaElBotonP2(p1, p2);
        callback();
    });

    this.Then(/^el sistema debe enviar un correo electrónico con un enlace de recuperación de contraseña al usuario, y mostrar un mensaje indicando que las instrucciones han sido enviadas a su correo\.$/, function (callback) {
        this.actionwords.elSistemaDebeEnviarUnCorreoElectronicoConUnEnlaceDeRecuperacionDeContrasenaAlUsuarioYMostrarUnMensajeIndicandoQueLasInstruccionesHanSidoEnviadasASuCorreo();
        callback();
    });

    this.Given(/^que un usuario intenta recuperar su contraseña,$/, function (callback) {
        this.actionwords.queUnUsuarioIntentaRecuperarSuContrasena();
        callback();
    });

    this.When(/^ingresa una dirección de correo electrónico que no está registrada en el sistema y presiona el botón "(.*)",$/, function (p1, callback) {
        this.actionwords.ingresaUnaDireccionDeCorreoElectronicoQueNoEstaRegistradaEnElSistemaYPresionaElBotonP1(p1);
        callback();
    });

    this.Then(/^el sistema debe mostrar un mensaje de error indicando que no existe ninguna cuenta asociada a ese correo y no debe enviar el enlace de recuperación\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnMensajeDeErrorIndicandoQueNoExisteNingunaCuentaAsociadaAEseCorreoYNoDebeEnviarElEnlaceDeRecuperacion();
        callback();
    });

    this.Given(/^que un usuario está autenticado y quiere modificar su perfil,$/, function (callback) {
        this.actionwords.queUnUsuarioEstaAutenticadoYQuiereModificarSuPerfil();
        callback();
    });

    this.When(/^el usuario ingresa a la sección "(.*)", actualiza su información personal y preferencias, y presiona el botón "(.*)",$/, function (p1, p2, callback) {
        this.actionwords.elUsuarioIngresaALaSeccionP1ActualizaSuInformacionPersonalYPreferenciasYPresionaElBotonP2(p1, p2);
        callback();
    });

    this.Then(/^el sistema debe guardar los cambios y mostrar un mensaje de confirmación indicando que el perfil se ha actualizado correctamente\.$/, function (callback) {
        this.actionwords.elSistemaDebeGuardarLosCambiosYMostrarUnMensajeDeConfirmacionIndicandoQueElPerfilSeHaActualizadoCorrectamente();
        callback();
    });

    this.When(/^el usuario intenta guardar cambios con información incompleta o no válida \(como un correo electrónico con formato incorrecto\),$/, function (callback) {
        this.actionwords.elUsuarioIntentaGuardarCambiosConInformacionIncompletaONoValidaComoUnCorreoElectronicoConFormatoIncorrecto();
        callback();
    });

    this.Then(/^el sistema debe mostrar un mensaje de error indicando qué datos son incorrectos o faltantes, y no debe permitir que se guarden los cambios hasta que la información sea válida\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnMensajeDeErrorIndicandoQueDatosSonIncorrectosOFaltantesYNoDebePermitirQueSeGuardenLosCambiosHastaQueLaInformacionSeaValida();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y quiere registrar información sobre sus cultivos,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYQuiereRegistrarInformacionSobreSusCultivos();
        callback();
    });

    this.Then(/^el sistema debe guardar la información ingresada y mostrar un mensaje de confirmación indicando que los datos del cultivo se han registrado exitosamente\.$/, function (callback) {
        this.actionwords.elSistemaDebeGuardarLaInformacionIngresadaYMostrarUnMensajeDeConfirmacionIndicandoQueLosDatosDelCultivoSeHanRegistradoExitosamente();
        callback();
    });

    this.When(/^el agricultor ingresa datos como el tipo de cultivo, fecha de siembra, ubicación, y estado de crecimiento, y presiona el botón "(.*)",$/, function (p1, callback) {
        this.actionwords.elAgricultorIngresaDatosComoElTipoDeCultivoFechaDeSiembraUbicacionYEstadoDeCrecimientoYPresionaElBotonP1(p1);
        callback();
    });

    this.When(/^el agricultor intenta guardar datos incompletos o inválidos \(como una fecha de siembra futura\),$/, function (callback) {
        this.actionwords.elAgricultorIntentaGuardarDatosIncompletosOInvalidosComoUnaFechaDeSiembraFutura();
        callback();
    });

    this.Then(/^el sistema debe mostrar un mensaje de error indicando qué información es incorrecta o faltante, y no debe permitir que se guarden los datos hasta que la información sea válida\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnMensajeDeErrorIndicandoQueInformacionEsIncorrectaOFaltanteYNoDebePermitirQueSeGuardenLosDatosHastaQueLaInformacionSeaValida();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y ha proporcionado su ubicación,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYHaProporcionadoSuUbicacion();
        callback();
    });

    this.When(/^el agricultor accede a la sección de recomendaciones de cultivos,$/, function (callback) {
        this.actionwords.elAgricultorAccedeALaSeccionDeRecomendacionesDeCultivos();
        callback();
    });

    this.Then(/^el sistema debe mostrar una lista de cultivos recomendados según la región, las condiciones climáticas actuales y la temporada del año\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnaListaDeCultivosRecomendadosSegunLaRegionLasCondicionesClimaticasActualesYLaTemporadaDelAno();
        callback();
    });

    this.Given(/^que un agricultor no ha proporcionado su ubicación,$/, function (callback) {
        this.actionwords.queUnAgricultorNoHaProporcionadoSuUbicacion();
        callback();
    });

    this.When(/^el agricultor intenta acceder a la sección de recomendaciones de cultivos,$/, function (callback) {
        this.actionwords.elAgricultorIntentaAccederALaSeccionDeRecomendacionesDeCultivos();
        callback();
    });

    this.Then(/^el sistema debe mostrar un mensaje de error solicitando al usuario que ingrese su ubicación para obtener recomendaciones adecuadas\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnMensajeDeErrorSolicitandoAlUsuarioQueIngreseSuUbicacionParaObtenerRecomendacionesAdecuadas();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y quiere acceder a la base de datos,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYQuiereAccederALaBaseDeDatos();
        callback();
    });

    this.When(/^el agricultor busca prácticas agrícolas sostenibles utilizando filtros como tipo de cultivo, región, o tipo de práctica,$/, function (callback) {
        this.actionwords.elAgricultorBuscaPracticasAgricolasSosteniblesUtilizandoFiltrosComoTipoDeCultivoRegionOTipoDePractica();
        callback();
    });

    this.Then(/^el sistema debe mostrar una lista de prácticas que cumplan con los criterios de búsqueda, incluyendo descripciones y beneficios\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnaListaDePracticasQueCumplanConLosCriteriosDeBusquedaIncluyendoDescripcionesYBeneficios();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y realiza una búsqueda en la base de datos,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYRealizaUnaBusquedaEnLaBaseDeDatos();
        callback();
    });

    this.When(/^el agricultor utiliza criterios de búsqueda que no coinciden con ninguna práctica registrada,$/, function (callback) {
        this.actionwords.elAgricultorUtilizaCriteriosDeBusquedaQueNoCoincidenConNingunaPracticaRegistrada();
        callback();
    });

    this.Then(/^el sistema debe mostrar un mensaje indicando que no se encontraron resultados y sugerir al usuario que intente con diferentes criterios\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnMensajeIndicandoQueNoSeEncontraronResultadosYSugerirAlUsuarioQueIntenteConDiferentesCriterios();
        callback();
    });

    this.Given(/^que un estudiante está autenticado y navega a la sección de artículos,$/, function (callback) {
        this.actionwords.queUnEstudianteEstaAutenticadoYNavegaALaSeccionDeArticulos();
        callback();
    });

    this.When(/^el estudiante busca artículos utilizando filtros como tipo de tecnología, autor, o fecha de publicación,$/, function (callback) {
        this.actionwords.elEstudianteBuscaArticulosUtilizandoFiltrosComoTipoDeTecnologiaAutorOFechaDePublicacion();
        callback();
    });

    this.Then(/^el sistema debe mostrar una lista de artículos que coincidan con los criterios de búsqueda, incluyendo títulos, resúmenes y enlaces para leer más\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnaListaDeArticulosQueCoincidanConLosCriteriosDeBusquedaIncluyendoTitulosResumenesYEnlacesParaLeerMas();
        callback();
    });

    this.Given(/^que un estudiante está autenticado y realiza una búsqueda en la sección de artículos,$/, function (callback) {
        this.actionwords.queUnEstudianteEstaAutenticadoYRealizaUnaBusquedaEnLaSeccionDeArticulos();
        callback();
    });

    this.When(/^el estudiante utiliza criterios de búsqueda que no coinciden con ningún artículo registrado,$/, function (callback) {
        this.actionwords.elEstudianteUtilizaCriteriosDeBusquedaQueNoCoincidenConNingunArticuloRegistrado();
        callback();
    });

    this.Then(/^el sistema debe mostrar un mensaje indicando que no se encontraron resultados y sugerir al estudiante que intente con diferentes criterios\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnMensajeIndicandoQueNoSeEncontraronResultadosYSugerirAlEstudianteQueIntenteConDiferentesCriterios();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y tiene acceso a la sección de monitoreo,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYTieneAccesoALaSeccionDeMonitoreo();
        callback();
    });

    this.When(/^el agricultor ingresa datos sobre el uso de agua y fertilizantes en sus cultivos,$/, function (callback) {
        this.actionwords.elAgricultorIngresaDatosSobreElUsoDeAguaYFertilizantesEnSusCultivos();
        callback();
    });

    this.Then(/^el sistema debe mostrar un resumen del uso de recursos, incluyendo gráficos y recomendaciones para optimizar su consumo\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnResumenDelUsoDeRecursosIncluyendoGraficosYRecomendacionesParaOptimizarSuConsumo();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y desea registrar el uso de recursos,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYDeseaRegistrarElUsoDeRecursos();
        callback();
    });

    this.When(/^el agricultor intenta guardar datos incompletos o inválidos \(como cantidades negativas o fechas no válidas\),$/, function (callback) {
        this.actionwords.elAgricultorIntentaGuardarDatosIncompletosOInvalidosComoCantidadesNegativasOFechasNoValidas();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y ha configurado los niveles óptimos de recursos en el sistema,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYHaConfiguradoLosNivelesOptimosDeRecursosEnElSistema();
        callback();
    });

    this.When(/^los niveles de agua o fertilizantes caen por debajo del umbral establecido,$/, function (callback) {
        this.actionwords.losNivelesDeAguaOFertilizantesCaenPorDebajoDelUmbralEstablecido();
        callback();
    });

    this.Then(/^el sistema debe enviar una alerta al agricultor a través de una notificación en la aplicación y/o un correo electrónico, informando sobre la deficiencia\.$/, function (callback) {
        this.actionwords.elSistemaDebeEnviarUnaAlertaAlAgricultorATravesDeUnaNotificacionEnLaAplicacionYoUnCorreoElectronicoInformandoSobreLaDeficiencia();
        callback();
    });

    this.When(/^los niveles de agua o fertilizantes superan el umbral establecido,$/, function (callback) {
        this.actionwords.losNivelesDeAguaOFertilizantesSuperanElUmbralEstablecido();
        callback();
    });

    this.Then(/^el sistema debe enviar una alerta al agricultor a través de una notificación en la aplicación y/o un correo electrónico, informando sobre el exceso\.$/, function (callback) {
        this.actionwords.elSistemaDebeEnviarUnaAlertaAlAgricultorATravesDeUnaNotificacionEnLaAplicacionYoUnCorreoElectronicoInformandoSobreElExceso();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y ha programado tareas de riego en el sistema,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYHaProgramadoTareasDeRiegoEnElSistema();
        callback();
    });

    this.When(/^llega el momento programado para el riego,$/, function (callback) {
        this.actionwords.llegaElMomentoProgramadoParaElRiego();
        callback();
    });

    this.Then(/^el sistema debe enviar una notificación al agricultor a través de la aplicación y/o un correo electrónico recordándole que es hora de regar sus cultivos\.$/, function (callback) {
        this.actionwords.elSistemaDebeEnviarUnaNotificacionAlAgricultorATravesDeLaAplicacionYoUnCorreoElectronicoRecordandoleQueEsHoraDeRegarSusCultivos();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y ha programado tareas de fertilización en el sistema,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYHaProgramadoTareasDeFertilizacionEnElSistema();
        callback();
    });

    this.When(/^se acerca la fecha programada para la fertilización,$/, function (callback) {
        this.actionwords.seAcercaLaFechaProgramadaParaLaFertilizacion();
        callback();
    });

    this.Then(/^el sistema debe enviar una notificación al agricultor a través de la aplicación y/o un correo electrónico recordándole que es hora de fertilizar sus cultivos\.$/, function (callback) {
        this.actionwords.elSistemaDebeEnviarUnaNotificacionAlAgricultorATravesDeLaAplicacionYoUnCorreoElectronicoRecordandoleQueEsHoraDeFertilizarSusCultivos();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y desea registrar datos sobre el crecimiento de sus cultivos,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYDeseaRegistrarDatosSobreElCrecimientoDeSusCultivos();
        callback();
    });

    this.When(/^el agricultor ingresa información como la altura de las plantas, el estado de salud, y la fecha de registro, y presiona el botón "(.*)",$/, function (p1, callback) {
        this.actionwords.elAgricultorIngresaInformacionComoLaAlturaDeLasPlantasElEstadoDeSaludYLaFechaDeRegistroYPresionaElBotonP1(p1);
        callback();
    });

    this.Then(/^el sistema debe almacenar la información ingresada y mostrar un mensaje de confirmación indicando que los datos se han registrado exitosamente\.$/, function (callback) {
        this.actionwords.elSistemaDebeAlmacenarLaInformacionIngresadaYMostrarUnMensajeDeConfirmacionIndicandoQueLosDatosSeHanRegistradoExitosamente();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y intenta registrar datos de crecimiento,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYIntentaRegistrarDatosDeCrecimiento();
        callback();
    });

    this.When(/^el agricultor intenta guardar la información con campos obligatorios vacíos o con datos inválidos \(como valores negativos para la altura\),$/, function (callback) {
        this.actionwords.elAgricultorIntentaGuardarLaInformacionConCamposObligatoriosVaciosOConDatosInvalidosComoValoresNegativosParaLaAltura();
        callback();
    });

    this.Then(/^el sistema debe mostrar un mensaje de error indicando qué datos son incorrectos o faltantes, y no debe permitir que se guarden los datos hasta que la información sea válida\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnMensajeDeErrorIndicandoQueDatosSonIncorrectosOFaltantesYNoDebePermitirQueSeGuardenLosDatosHastaQueLaInformacionSeaValida();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y tiene datos registrados sobre el uso de recursos,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYTieneDatosRegistradosSobreElUsoDeRecursos();
        callback();
    });

    this.Then(/^el sistema debe mostrar un gráfico que represente el historial de uso de agua y fertilizantes, permitiendo al agricultor observar las tendencias a lo largo del tiempo\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnGraficoQueRepresenteElHistorialDeUsoDeAguaYFertilizantesPermitiendoAlAgricultorObservarLasTendenciasALoLargoDelTiempo();
        callback();
    });

    this.When(/^el agricultor accede a la sección de visualización de gráficos y selecciona "(.*)",$/, function (p1, callback) {
        this.actionwords.elAgricultorAccedeALaSeccionDeVisualizacionDeGraficosYSeleccionaP1(p1);
        callback();
    });

    this.Given(/^que un agricultor está autenticado y tiene datos de rendimiento de cultivos registrados,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYTieneDatosDeRendimientoDeCultivosRegistrados();
        callback();
    });

    this.Then(/^el sistema debe mostrar un gráfico que represente el historial de rendimiento de los cultivos, permitiendo al agricultor comparar diferentes cultivos y épocas de crecimiento\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnGraficoQueRepresenteElHistorialDeRendimientoDeLosCultivosPermitiendoAlAgricultorCompararDiferentesCultivosYEpocasDeCrecimiento();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y ha registrado datos sobre el rendimiento y los recursos utilizados en sus cultivos,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYHaRegistradoDatosSobreElRendimientoYLosRecursosUtilizadosEnSusCultivos();
        callback();
    });

    this.When(/^el agricultor accede a la sección de análisis y selecciona "(.*)",$/, function (p1, callback) {
        this.actionwords.elAgricultorAccedeALaSeccionDeAnalisisYSeleccionaP1(p1);
        callback();
    });

    this.Then(/^el sistema debe proporcionar un análisis que muestre la relación entre el rendimiento de los cultivos y los recursos utilizados, destacando la eficiencia de cada cultivo\.$/, function (callback) {
        this.actionwords.elSistemaDebeProporcionarUnAnalisisQueMuestreLaRelacionEntreElRendimientoDeLosCultivosYLosRecursosUtilizadosDestacandoLaEficienciaDeCadaCultivo();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y desea obtener un análisis de eficiencia,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYDeseaObtenerUnAnalisisDeEficiencia();
        callback();
    });

    this.When(/^el agricultor intenta acceder a la sección de análisis pero no tiene suficientes datos registrados \(como rendimiento o uso de recursos\),$/, function (callback) {
        this.actionwords.elAgricultorIntentaAccederALaSeccionDeAnalisisPeroNoTieneSuficientesDatosRegistradosComoRendimientoOUsoDeRecursos();
        callback();
    });

    this.Then(/^el sistema debe mostrar un mensaje indicando que no hay suficientes datos para realizar el análisis y sugerir que registre más información\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnMensajeIndicandoQueNoHaySuficientesDatosParaRealizarElAnalisisYSugerirQueRegistreMasInformacion();
        callback();
    });

    this.Given(/^que un estudiante está autenticado y tiene acceso a un reporte que desea exportar,$/, function (callback) {
        this.actionwords.queUnEstudianteEstaAutenticadoYTieneAccesoAUnReporteQueDeseaExportar();
        callback();
    });

    this.When(/^el estudiante selecciona la opción "(.*)" y confirma la acción,$/, function (p1, callback) {
        this.actionwords.elEstudianteSeleccionaLaOpcionP1YConfirmaLaAccion(p1);
        callback();
    });

    this.Then(/^el sistema debe generar un archivo PDF del reporte y permitir que el estudiante lo descargue exitosamente\.$/, function (callback) {
        this.actionwords.elSistemaDebeGenerarUnArchivoPDFDelReporteYPermitirQueElEstudianteLoDescargueExitosamente();
        callback();
    });

    this.Given(/^que un estudiante está autenticado y tiene acceso a un conjunto de datos que desea exportar,$/, function (callback) {
        this.actionwords.queUnEstudianteEstaAutenticadoYTieneAccesoAUnConjuntoDeDatosQueDeseaExportar();
        callback();
    });

    this.Then(/^el sistema debe generar un archivo Excel del conjunto de datos y permitir que el estudiante lo descargue exitosamente\.$/, function (callback) {
        this.actionwords.elSistemaDebeGenerarUnArchivoExcelDelConjuntoDeDatosYPermitirQueElEstudianteLoDescargueExitosamente();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y navega a la sección de directorio de mercados,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYNavegaALaSeccionDeDirectorioDeMercados();
        callback();
    });

    this.When(/^el agricultor accede a la lista de mercados locales,$/, function (callback) {
        this.actionwords.elAgricultorAccedeALaListaDeMercadosLocales();
        callback();
    });

    this.Then(/^el sistema debe mostrar un directorio con información detallada de cada mercado, incluyendo nombre, ubicación, horario de operación y tipos de productos que se pueden vender\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnDirectorioConInformacionDetalladaDeCadaMercadoIncluyendoNombreUbicacionHorarioDeOperacionYTiposDeProductosQueSePuedenVender();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y accede a la sección de directorio de mercados,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYAccedeALaSeccionDeDirectorioDeMercados();
        callback();
    });

    this.When(/^el agricultor aplica un filtro de búsqueda por ubicación \(como ciudad o región\),$/, function (callback) {
        this.actionwords.elAgricultorAplicaUnFiltroDeBusquedaPorUbicacionComoCiudadORegion();
        callback();
    });

    this.Then(/^el sistema debe mostrar solo los mercados locales que se encuentren dentro de la ubicación seleccionada, y actualizar la lista de acuerdo con el filtro aplicado\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarSoloLosMercadosLocalesQueSeEncuentrenDentroDeLaUbicacionSeleccionadaYActualizarLaListaDeAcuerdoConElFiltroAplicado();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y accede a la sección de búsqueda de mercados,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYAccedeALaSeccionDeBusquedaDeMercados();
        callback();
    });

    this.When(/^el agricultor selecciona un tipo de producto agrícola y aplica los filtros disponibles \(como ubicación, tamaño del mercado y demanda\),$/, function (callback) {
        this.actionwords.elAgricultorSeleccionaUnTipoDeProductoAgricolaYAplicaLosFiltrosDisponiblesComoUbicacionTamanoDelMercadoYDemanda();
        callback();
    });

    this.Then(/^el sistema debe mostrar una lista de mercados que coincidan con los criterios de búsqueda, junto con detalles como ubicación, tamaño y condiciones de venta\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnaListaDeMercadosQueCoincidanConLosCriteriosDeBusquedaJuntoConDetallesComoUbicacionTamanoYCondicionesDeVenta();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y realiza una búsqueda de mercados por un tipo de producto específico,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYRealizaUnaBusquedaDeMercadosPorUnTipoDeProductoEspecifico();
        callback();
    });

    this.When(/^el agricultor selecciona un producto agrícola para el cual no existen mercados disponibles,$/, function (callback) {
        this.actionwords.elAgricultorSeleccionaUnProductoAgricolaParaElCualNoExistenMercadosDisponibles();
        callback();
    });

    this.Then(/^el sistema debe mostrar un mensaje indicando que no se encontraron mercados para ese tipo de producto y sugerir otros productos relacionados o modificar los filtros para obtener más resultados\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnMensajeIndicandoQueNoSeEncontraronMercadosParaEseTipoDeProductoYSugerirOtrosProductosRelacionadosOModificarLosFiltrosParaObtenerMasResultados();
        callback();
    });

    this.Given(/^que un usuario está autenticado y navega a la sección de videos y tutoriales,$/, function (callback) {
        this.actionwords.queUnUsuarioEstaAutenticadoYNavegaALaSeccionDeVideosYTutoriales();
        callback();
    });

    this.When(/^el usuario selecciona una categoría de prácticas agrícolas \(como riego, fertilización, control de plagas\),$/, function (callback) {
        this.actionwords.elUsuarioSeleccionaUnaCategoriaDePracticasAgricolasComoRiegoFertilizacionControlDePlagas();
        callback();
    });

    this.Then(/^el sistema debe mostrar una lista de videos y tutoriales relacionados con esa categoría, permitiendo al usuario ver los contenidos directamente desde la plataforma\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnaListaDeVideosYTutorialesRelacionadosConEsaCategoriaPermitiendoAlUsuarioVerLosContenidosDirectamenteDesdeLaPlataforma();
        callback();
    });

    this.Given(/^que un usuario está autenticado y desea buscar videos o tutoriales específicos,$/, function (callback) {
        this.actionwords.queUnUsuarioEstaAutenticadoYDeseaBuscarVideosOTutorialesEspecificos();
        callback();
    });

    this.When(/^el usuario ingresa un término de búsqueda relacionado con una práctica agrícola en el buscador \(por ejemplo, "(.*)"\),$/, function (p1, callback) {
        this.actionwords.elUsuarioIngresaUnTerminoDeBusquedaRelacionadoConUnaPracticaAgricolaEnElBuscadorPorEjemploP1(p1);
        callback();
    });

    this.Then(/^el sistema debe mostrar una lista de videos relevantes que coincidan con el término de búsqueda, proporcionando opciones filtradas para facilitar el acceso al contenido\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnaListaDeVideosRelevantesQueCoincidanConElTerminoDeBusquedaProporcionandoOpcionesFiltradasParaFacilitarElAccesoAlContenido();
        callback();
    });

    this.Given(/^que un estudiante está autenticado y navega a la sección de cursos virtuales,$/, function (callback) {
        this.actionwords.queUnEstudianteEstaAutenticadoYNavegaALaSeccionDeCursosVirtuales();
        callback();
    });

    this.When(/^el estudiante selecciona un curso o webinar de agronomía y hace clic en "(.*)",$/, function (p1, callback) {
        this.actionwords.elEstudianteSeleccionaUnCursoOWebinarDeAgronomiaYHaceClicEnP1(p1);
        callback();
    });

    this.Then(/^el sistema debe confirmar la inscripción mostrando un mensaje de éxito, y el estudiante debe recibir un correo electrónico con los detalles del curso y la fecha de inicio\.$/, function (callback) {
        this.actionwords.elSistemaDebeConfirmarLaInscripcionMostrandoUnMensajeDeExitoYElEstudianteDebeRecibirUnCorreoElectronicoConLosDetallesDelCursoYLaFechaDeInicio();
        callback();
    });

    this.Given(/^que un estudiante está autenticado y desea inscribirse a un curso o webinar de agronomía,$/, function (callback) {
        this.actionwords.queUnEstudianteEstaAutenticadoYDeseaInscribirseAUnCursoOWebinarDeAgronomia();
        callback();
    });

    this.When(/^el estudiante intenta inscribirse en un curso que ya está lleno o cuya fecha de inscripción ha expirado,$/, function (callback) {
        this.actionwords.elEstudianteIntentaInscribirseEnUnCursoQueYaEstaLlenoOCuyaFechaDeInscripcionHaExpirado();
        callback();
    });

    this.Then(/^el sistema debe mostrar un mensaje indicando que el curso está completo o que las inscripciones están cerradas, sugiriendo otros cursos disponibles o permitiendo que el estudiante se una a una lista de espera\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnMensajeIndicandoQueElCursoEstaCompletoOQueLasInscripcionesEstanCerradasSugiriendoOtrosCursosDisponiblesOPermitiendoQueElEstudianteSeUnaAUnaListaDeEspera();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y ha habilitado las notificaciones de eventos,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYHaHabilitadoLasNotificacionesDeEventos();
        callback();
    });

    this.When(/^un evento local de capacitación agrícola relacionado con los intereses o ubicación del agricultor es programado,$/, function (callback) {
        this.actionwords.unEventoLocalDeCapacitacionAgricolaRelacionadoConLosInteresesOUbicacionDelAgricultorEsProgramado();
        callback();
    });

    this.Then(/^el sistema debe enviar una notificación al agricultor con los detalles del evento, incluyendo fecha, ubicación y tipo de capacitación\.$/, function (callback) {
        this.actionwords.elSistemaDebeEnviarUnaNotificacionAlAgricultorConLosDetallesDelEventoIncluyendoFechaUbicacionYTipoDeCapacitacion();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y desea recibir notificaciones solo sobre eventos específicos,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYDeseaRecibirNotificacionesSoloSobreEventosEspecificos();
        callback();
    });

    this.When(/^el agricultor accede a la configuración de notificaciones y selecciona las preferencias de temas de interés o áreas geográficas,$/, function (callback) {
        this.actionwords.elAgricultorAccedeALaConfiguracionDeNotificacionesYSeleccionaLasPreferenciasDeTemasDeInteresOAreasGeograficas();
        callback();
    });

    this.Then(/^el sistema debe ajustar las notificaciones para que el agricultor solo reciba alertas sobre los eventos que coincidan con las preferencias configuradas\.$/, function (callback) {
        this.actionwords.elSistemaDebeAjustarLasNotificacionesParaQueElAgricultorSoloRecibaAlertasSobreLosEventosQueCoincidanConLasPreferenciasConfiguradas();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y necesita asesoramiento técnico,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYNecesitaAsesoramientoTecnico();
        callback();
    });

    this.When(/^el agricultor abre el chat de soporte técnico y escribe una consulta,$/, function (callback) {
        this.actionwords.elAgricultorAbreElChatDeSoporteTecnicoYEscribeUnaConsulta();
        callback();
    });

    this.Then(/^el sistema debe conectar al agricultor con un asesor o asistente automatizado, proporcionando una respuesta clara y relevante a la consulta dentro de un tiempo razonable\.$/, function (callback) {
        this.actionwords.elSistemaDebeConectarAlAgricultorConUnAsesorOAsistenteAutomatizadoProporcionandoUnaRespuestaClaraYRelevanteALaConsultaDentroDeUnTiempoRazonable();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y necesita hacer una consulta técnica,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYNecesitaHacerUnaConsultaTecnica();
        callback();
    });

    this.When(/^el agricultor intenta usar el chat fuera del horario de atención del soporte técnico en vivo,$/, function (callback) {
        this.actionwords.elAgricultorIntentaUsarElChatFueraDelHorarioDeAtencionDelSoporteTecnicoEnVivo();
        callback();
    });

    this.Then(/^el sistema debe notificar que el chat está fuera de servicio temporalmente y ofrecer la opción de enviar la consulta por correo electrónico o acceder a una base de conocimientos con respuestas frecuentes\.$/, function (callback) {
        this.actionwords.elSistemaDebeNotificarQueElChatEstaFueraDeServicioTemporalmenteYOfrecerLaOpcionDeEnviarLaConsultaPorCorreoElectronicoOAccederAUnaBaseDeConocimientosConRespuestasFrecuentes();
        callback();
    });

    this.Given(/^que un usuario está autenticado y desea contactar a un experto,$/, function (callback) {
        this.actionwords.queUnUsuarioEstaAutenticadoYDeseaContactarAUnExperto();
        callback();
    });

    this.When(/^el usuario selecciona la opción de contactar a un experto y elige una especialidad agrícola,$/, function (callback) {
        this.actionwords.elUsuarioSeleccionaLaOpcionDeContactarAUnExpertoYEligeUnaEspecialidadAgricola();
        callback();
    });

    this.Then(/^el sistema debe mostrar una lista de expertos disponibles y permitir al usuario enviar una solicitud de asesoramiento, que incluirá el problema o pregunta específica\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnaListaDeExpertosDisponiblesYPermitirAlUsuarioEnviarUnaSolicitudDeAsesoramientoQueIncluiraElProblemaOPreguntaEspecifica();
        callback();
    });

    this.Given(/^que un usuario está autenticado y desea contactar a un experto en una especialidad agrícola,$/, function (callback) {
        this.actionwords.queUnUsuarioEstaAutenticadoYDeseaContactarAUnExpertoEnUnaEspecialidadAgricola();
        callback();
    });

    this.When(/^el usuario selecciona una especialidad para la cual no hay expertos disponibles,$/, function (callback) {
        this.actionwords.elUsuarioSeleccionaUnaEspecialidadParaLaCualNoHayExpertosDisponibles();
        callback();
    });

    this.Then(/^el sistema debe mostrar un mensaje indicando que no hay expertos en esa área en ese momento y ofrecer la opción de recibir una notificación cuando esté disponible o sugerir temas relacionados con expertos accesibles\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnMensajeIndicandoQueNoHayExpertosEnEsaAreaEnEseMomentoYOfrecerLaOpcionDeRecibirUnaNotificacionCuandoEsteDisponibleOSugerirTemasRelacionadosConExpertosAccesibles();
        callback();
    });

    this.Given(/^que un estudiante está autenticado y accede a la sección de foros,$/, function (callback) {
        this.actionwords.queUnEstudianteEstaAutenticadoYAccedeALaSeccionDeForos();
        callback();
    });

    this.When(/^el estudiante selecciona un tema agrícola de interés y publica una pregunta o comentario,$/, function (callback) {
        this.actionwords.elEstudianteSeleccionaUnTemaAgricolaDeInteresYPublicaUnaPreguntaOComentario();
        callback();
    });

    this.Then(/^el sistema debe permitir que otros estudiantes y agricultores respondan o colaboren en la discusión, mostrando las respuestas en tiempo real y permitiendo que el autor marque una respuesta como útil o resuelta\.$/, function (callback) {
        this.actionwords.elSistemaDebePermitirQueOtrosEstudiantesYAgricultoresRespondanOColaborenEnLaDiscusionMostrandoLasRespuestasEnTiempoRealYPermitiendoQueElAutorMarqueUnaRespuestaComoUtilOResuelta();
        callback();
    });

    this.Given(/^que un estudiante está autenticado y busca información en el foro,$/, function (callback) {
        this.actionwords.queUnEstudianteEstaAutenticadoYBuscaInformacionEnElForo();
        callback();
    });

    this.When(/^el estudiante ingresa un término de búsqueda relacionado con un tema agrícola \(por ejemplo, "(.*)" o "(.*)"\),$/, function (p1, p2, callback) {
        this.actionwords.elEstudianteIngresaUnTerminoDeBusquedaRelacionadoConUnTemaAgricolaPorEjemploP1OP2(p1, p2);
        callback();
    });

    this.Then(/^el sistema debe mostrar una lista de discusiones previas que coincidan con el término de búsqueda, permitiendo al estudiante unirse a la discusión o iniciar un nuevo hilo si no encuentra información relevante\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnaListaDeDiscusionesPreviasQueCoincidanConElTerminoDeBusquedaPermitiendoAlEstudianteUnirseALaDiscusionOIniciarUnNuevoHiloSiNoEncuentraInformacionRelevante();
        callback();
    });

    this.Given(/^que un usuario está autenticado y tiene habilitada la opción de recibir alertas meteorológicas,$/, function (callback) {
        this.actionwords.queUnUsuarioEstaAutenticadoYTieneHabilitadaLaOpcionDeRecibirAlertasMeteorologicas();
        callback();
    });

    this.When(/^el usuario selecciona su ubicación o permite que el sistema determine su ubicación automáticamente,$/, function (callback) {
        this.actionwords.elUsuarioSeleccionaSuUbicacionOPermiteQueElSistemaDetermineSuUbicacionAutomaticamente();
        callback();
    });

    this.Then(/^el sistema debe enviar actualizaciones diarias sobre las condiciones meteorológicas \(como temperatura, precipitaciones y humedad\) para la ubicación seleccionada, incluyendo pronósticos a corto y largo plazo\.$/, function (callback) {
        this.actionwords.elSistemaDebeEnviarActualizacionesDiariasSobreLasCondicionesMeteorologicasComoTemperaturaPrecipitacionesYHumedadParaLaUbicacionSeleccionadaIncluyendoPronosticosACortoYLargoPlazo();
        callback();
    });

    this.Given(/^que un usuario está autenticado y ha activado las alertas de cambios climáticos,$/, function (callback) {
        this.actionwords.queUnUsuarioEstaAutenticadoYHaActivadoLasAlertasDeCambiosClimaticos();
        callback();
    });

    this.When(/^se detecta un cambio brusco en las condiciones meteorológicas \(como tormentas, heladas o sequías\) en la ubicación del usuario,$/, function (callback) {
        this.actionwords.seDetectaUnCambioBruscoEnLasCondicionesMeteorologicasComoTormentasHeladasOSequiasEnLaUbicacionDelUsuario();
        callback();
    });

    this.Then(/^el sistema debe enviar una notificación inmediata al usuario con detalles sobre el cambio y recomendaciones sobre cómo ajustar las actividades agrícolas según el nuevo pronóstico\.$/, function (callback) {
        this.actionwords.elSistemaDebeEnviarUnaNotificacionInmediataAlUsuarioConDetallesSobreElCambioYRecomendacionesSobreComoAjustarLasActividadesAgricolasSegunElNuevoPronostico();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y ha habilitado las alertas meteorológicas,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYHaHabilitadoLasAlertasMeteorologicas();
        callback();
    });

    this.When(/^el sistema detecta condiciones climáticas adversas como tormentas, granizo o heladas en la ubicación del agricultor,$/, function (callback) {
        this.actionwords.elSistemaDetectaCondicionesClimaticasAdversasComoTormentasGranizoOHeladasEnLaUbicacionDelAgricultor();
        callback();
    });

    this.Then(/^el sistema debe enviar una notificación inmediata al agricultor con detalles de las condiciones y sugerencias sobre las acciones preventivas que se pueden tomar para proteger los cultivos\.$/, function (callback) {
        this.actionwords.elSistemaDebeEnviarUnaNotificacionInmediataAlAgricultorConDetallesDeLasCondicionesYSugerenciasSobreLasAccionesPreventivasQueSePuedenTomarParaProtegerLosCultivos();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y desea recibir solo ciertos tipos de alertas,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYDeseaRecibirSoloCiertosTiposDeAlertas();
        callback();
    });

    this.When(/^el agricultor accede a la configuración de alertas y selecciona las condiciones climáticas de interés \(por ejemplo, heladas, sequías, tormentas\),$/, function (callback) {
        this.actionwords.elAgricultorAccedeALaConfiguracionDeAlertasYSeleccionaLasCondicionesClimaticasDeInteresPorEjemploHeladasSequiasTormentas();
        callback();
    });

    this.Then(/^el sistema debe ajustar las notificaciones para que solo se envíen alertas relacionadas con las condiciones seleccionadas\.$/, function (callback) {
        this.actionwords.elSistemaDebeAjustarLasNotificacionesParaQueSoloSeEnvienAlertasRelacionadasConLasCondicionesSeleccionadas();
        callback();
    });

    this.Given(/^que un estudiante está autenticado y desea consultar informes de clima,$/, function (callback) {
        this.actionwords.queUnEstudianteEstaAutenticadoYDeseaConsultarInformesDeClima();
        callback();
    });

    this.When(/^el estudiante selecciona un cultivo y un período de tiempo en la sección de informes,$/, function (callback) {
        this.actionwords.elEstudianteSeleccionaUnCultivoYUnPeriodoDeTiempoEnLaSeccionDeInformes();
        callback();
    });

    this.Then(/^el sistema debe generar un informe detallado sobre el impacto de las condiciones climáticas \(como precipitaciones, temperatura y humedad\) en ese cultivo, mostrando gráficos y datos históricos relevantes\.$/, function (callback) {
        this.actionwords.elSistemaDebeGenerarUnInformeDetalladoSobreElImpactoDeLasCondicionesClimaticasComoPrecipitacionesTemperaturaYHumedadEnEseCultivoMostrandoGraficosYDatosHistoricosRelevantes();
        callback();
    });

    this.Given(/^que un estudiante está autenticado y desea descargar un informe sobre el impacto del clima en los cultivos,$/, function (callback) {
        this.actionwords.queUnEstudianteEstaAutenticadoYDeseaDescargarUnInformeSobreElImpactoDelClimaEnLosCultivos();
        callback();
    });

    this.When(/^el estudiante visualiza el informe detallado en la plataforma,$/, function (callback) {
        this.actionwords.elEstudianteVisualizaElInformeDetalladoEnLaPlataforma();
        callback();
    });

    this.Then(/^el sistema debe permitir la descarga del informe en formato PDF para facilitar su uso en proyectos académicos o estudios\.$/, function (callback) {
        this.actionwords.elSistemaDebePermitirLaDescargaDelInformeEnFormatoPDFParaFacilitarSuUsoEnProyectosAcademicosOEstudios();
        callback();
    });

    this.Given(/^que un usuario está autenticado y navega por la sección de grupos,$/, function (callback) {
        this.actionwords.queUnUsuarioEstaAutenticadoYNavegaPorLaSeccionDeGrupos();
        callback();
    });

    this.When(/^el usuario encuentra un grupo que le interesa, ya sea por región o tipo de cultivo, y hace clic en "(.*)",$/, function (p1, callback) {
        this.actionwords.elUsuarioEncuentraUnGrupoQueLeInteresaYaSeaPorRegionOTipoDeCultivoYHaceClicEnP1(p1);
        callback();
    });

    this.Then(/^el sistema debe añadir al usuario al grupo y permitirle ver las publicaciones y participar en las discusiones del grupo\.$/, function (callback) {
        this.actionwords.elSistemaDebeAnadirAlUsuarioAlGrupoYPermitirleVerLasPublicacionesYParticiparEnLasDiscusionesDelGrupo();
        callback();
    });

    this.Given(/^que un usuario está autenticado y desea compartir experiencias sobre un tipo de cultivo específico o en una región particular,$/, function (callback) {
        this.actionwords.queUnUsuarioEstaAutenticadoYDeseaCompartirExperienciasSobreUnTipoDeCultivoEspecificoOEnUnaRegionParticular();
        callback();
    });

    this.When(/^el usuario selecciona la opción de "(.*)" y completa la información requerida \(nombre del grupo, descripción, tipo de cultivo o región\),$/, function (p1, callback) {
        this.actionwords.elUsuarioSeleccionaLaOpcionDeP1YCompletaLaInformacionRequeridaNombreDelGrupoDescripcionTipoDeCultivoORegion(p1);
        callback();
    });

    this.Then(/^el sistema debe crear el nuevo grupo y permitir al usuario invitar a otros agricultores a unirse, así como publicar contenido en el grupo\.$/, function (callback) {
        this.actionwords.elSistemaDebeCrearElNuevoGrupoYPermitirAlUsuarioInvitarAOtrosAgricultoresAUnirseAsiComoPublicarContenidoEnElGrupo();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y desea organizar un evento,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYDeseaOrganizarUnEvento();
        callback();
    });

    this.When(/^el agricultor selecciona la opción de "(.*)" y completa la información necesaria \(nombre del evento, fecha, hora, ubicación y descripción\),$/, function (p1, callback) {
        this.actionwords.elAgricultorSeleccionaLaOpcionDeP1YCompletaLaInformacionNecesariaNombreDelEventoFechaHoraUbicacionYDescripcion(p1);
        callback();
    });

    this.Then(/^el sistema debe guardar el evento y enviar notificaciones a otros agricultores de la región invitándolos a participar\.$/, function (callback) {
        this.actionwords.elSistemaDebeGuardarElEventoYEnviarNotificacionesAOtrosAgricultoresDeLaRegionInvitandolosAParticipar();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y navega por los eventos locales disponibles,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYNavegaPorLosEventosLocalesDisponibles();
        callback();
    });

    this.When(/^el agricultor encuentra un evento que le interesa y hace clic en "(.*)",$/, function (p1, callback) {
        this.actionwords.elAgricultorEncuentraUnEventoQueLeInteresaYHaceClicEnP1(p1);
        callback();
    });

    this.Then(/^el sistema debe confirmar la inscripción del agricultor en el evento y permitirle recibir recordatorios y actualizaciones sobre el mismo\.$/, function (callback) {
        this.actionwords.elSistemaDebeConfirmarLaInscripcionDelAgricultorEnElEventoYPermitirleRecibirRecordatoriosYActualizacionesSobreElMismo();
        callback();
    });

    this.Given(/^que un usuario está autenticado y desea compartir fotos de sus cultivos,$/, function (callback) {
        this.actionwords.queUnUsuarioEstaAutenticadoYDeseaCompartirFotosDeSusCultivos();
        callback();
    });

    this.When(/^el usuario selecciona la opción de "(.*)" y sube una imagen junto con una descripción de los cultivos,$/, function (p1, callback) {
        this.actionwords.elUsuarioSeleccionaLaOpcionDeP1YSubeUnaImagenJuntoConUnaDescripcionDeLosCultivos(p1);
        callback();
    });

    this.Then(/^el sistema debe publicar la foto en el feed de la comunidad, permitiendo que otros usuarios comenten y den retroalimentación\.$/, function (callback) {
        this.actionwords.elSistemaDebePublicarLaFotoEnElFeedDeLaComunidadPermitiendoQueOtrosUsuariosComentenYDenRetroalimentacion();
        callback();
    });

    this.Given(/^que un usuario está autenticado y ha compartido previamente resultados de sus cultivos,$/, function (callback) {
        this.actionwords.queUnUsuarioEstaAutenticadoYHaCompartidoPreviamenteResultadosDeSusCultivos();
        callback();
    });

    this.When(/^otros usuarios visitan el perfil del agricultor,$/, function (callback) {
        this.actionwords.otrosUsuariosVisitanElPerfilDelAgricultor();
        callback();
    });

    this.Then(/^el sistema debe mostrar una sección con las fotos y resultados compartidos, incluyendo las descripciones y comentarios de la comunidad\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnaSeccionConLasFotosYResultadosCompartidosIncluyendoLasDescripcionesYComentariosDeLaComunidad();
        callback();
    });

    this.Given(/^que un agricultor está autenticado y accede al directorio de proveedores,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaAutenticadoYAccedeAlDirectorioDeProveedores();
        callback();
    });

    this.When(/^el agricultor utiliza filtros para buscar proveedores por categoría de insumo \(por ejemplo, semillas, fertilizantes, pesticidas\),$/, function (callback) {
        this.actionwords.elAgricultorUtilizaFiltrosParaBuscarProveedoresPorCategoriaDeInsumoPorEjemploSemillasFertilizantesPesticidas();
        callback();
    });

    this.Then(/^el sistema debe mostrar una lista de proveedores que ofrecen los insumos seleccionados, incluyendo información relevante como precios y ubicaciones\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnaListaDeProveedoresQueOfrecenLosInsumosSeleccionadosIncluyendoInformacionRelevanteComoPreciosYUbicaciones();
        callback();
    });

    this.Given(/^que un agricultor está navegando en el directorio de proveedores,$/, function (callback) {
        this.actionwords.queUnAgricultorEstaNavegandoEnElDirectorioDeProveedores();
        callback();
    });

    this.When(/^el agricultor selecciona un proveedor de la lista,$/, function (callback) {
        this.actionwords.elAgricultorSeleccionaUnProveedorDeLaLista();
        callback();
    });

    this.Then(/^el sistema debe mostrar una página con detalles sobre el proveedor, incluyendo información de contacto, productos ofrecidos, y reseñas de otros agricultores\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnaPaginaConDetallesSobreElProveedorIncluyendoInformacionDeContactoProductosOfrecidosYResenasDeOtrosAgricultores();
        callback();
    });

    this.When(/^el agricultor selecciona su región en el filtro de búsqueda,$/, function (callback) {
        this.actionwords.elAgricultorSeleccionaSuRegionEnElFiltroDeBusqueda();
        callback();
    });

    this.Then(/^el sistema debe mostrar una lista de proveedores que operan en esa región, con información sobre los insumos agrícolas que ofrecen\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnaListaDeProveedoresQueOperanEnEsaRegionConInformacionSobreLosInsumosAgricolasQueOfrecen();
        callback();
    });

    this.Given(/^que un agricultor ha aplicado el filtro de región,$/, function (callback) {
        this.actionwords.queUnAgricultorHaAplicadoElFiltroDeRegion();
        callback();
    });

    this.When(/^el agricultor revisa la lista de proveedores,$/, function (callback) {
        this.actionwords.elAgricultorRevisaLaListaDeProveedores();
        callback();
    });

    this.Then(/^el sistema debe confirmar que todos los proveedores mostrados están ubicados en la región seleccionada, y no debe incluir proveedores de otras regiones\.$/, function (callback) {
        this.actionwords.elSistemaDebeConfirmarQueTodosLosProveedoresMostradosEstanUbicadosEnLaRegionSeleccionadaYNoDebeIncluirProveedoresDeOtrasRegiones();
        callback();
    });

    this.Given(/^que un usuario está autenticado y navega por la configuración de la aplicación,$/, function (callback) {
        this.actionwords.queUnUsuarioEstaAutenticadoYNavegaPorLaConfiguracionDeLaAplicacion();
        callback();
    });

    this.When(/^el usuario selecciona el idioma deseado \(español o quechua\) y guarda los cambios,$/, function (callback) {
        this.actionwords.elUsuarioSeleccionaElIdiomaDeseadoEspanolOQuechuaYGuardaLosCambios();
        callback();
    });

    this.Then(/^el sistema debe cambiar el idioma de la interfaz de la aplicación al seleccionado y confirmar el cambio con un mensaje\.$/, function (callback) {
        this.actionwords.elSistemaDebeCambiarElIdiomaDeLaInterfazDeLaAplicacionAlSeleccionadoYConfirmarElCambioConUnMensaje();
        callback();
    });

    this.Given(/^que un usuario ha seleccionado un idioma y cerrado la aplicación,$/, function (callback) {
        this.actionwords.queUnUsuarioHaSeleccionadoUnIdiomaYCerradoLaAplicacion();
        callback();
    });

    this.When(/^el usuario vuelve a iniciar sesión,$/, function (callback) {
        this.actionwords.elUsuarioVuelveAIniciarSesion();
        callback();
    });

    this.Then(/^el sistema debe recordar la elección de idioma y mostrar la interfaz en el idioma previamente seleccionado\.$/, function (callback) {
        this.actionwords.elSistemaDebeRecordarLaEleccionDeIdiomaYMostrarLaInterfazEnElIdiomaPreviamenteSeleccionado();
        callback();
    });

    this.Given(/^que un usuario está autenticado y accede a la sección de configuración de notificaciones,$/, function (callback) {
        this.actionwords.queUnUsuarioEstaAutenticadoYAccedeALaSeccionDeConfiguracionDeNotificaciones();
        callback();
    });

    this.When(/^el usuario selecciona las categorías de notificaciones que desea recibir \(por ejemplo, alertas de clima, recordatorios de eventos, actualizaciones de proveedores\),$/, function (callback) {
        this.actionwords.elUsuarioSeleccionaLasCategoriasDeNotificacionesQueDeseaRecibirPorEjemploAlertasDeClimaRecordatoriosDeEventosActualizacionesDeProveedores();
        callback();
    });

    this.Then(/^el sistema debe guardar las preferencias y confirmar los cambios con un mensaje\.$/, function (callback) {
        this.actionwords.elSistemaDebeGuardarLasPreferenciasYConfirmarLosCambiosConUnMensaje();
        callback();
    });

    this.Given(/^que un usuario ha configurado sus preferencias de notificaciones,$/, function (callback) {
        this.actionwords.queUnUsuarioHaConfiguradoSusPreferenciasDeNotificaciones();
        callback();
    });

    this.When(/^el usuario decide desactivar todas las notificaciones o alguna categoría específica,$/, function (callback) {
        this.actionwords.elUsuarioDecideDesactivarTodasLasNotificacionesOAlgunaCategoriaEspecifica();
        callback();
    });

    this.Then(/^el sistema debe permitir la desactivación y notificar al usuario que las notificaciones han sido desactivadas según su solicitud\.$/, function (callback) {
        this.actionwords.elSistemaDebePermitirLaDesactivacionYNotificarAlUsuarioQueLasNotificacionesHanSidoDesactivadasSegunSuSolicitud();
        callback();
    });

    this.Given(/^que un usuario está autenticado y experimenta un problema con la aplicación,$/, function (callback) {
        this.actionwords.queUnUsuarioEstaAutenticadoYExperimentaUnProblemaConLaAplicacion();
        callback();
    });

    this.When(/^el usuario accede a la sección de soporte técnico, completa un formulario de contacto con detalles del problema y presiona "(.*)",$/, function (p1, callback) {
        this.actionwords.elUsuarioAccedeALaSeccionDeSoporteTecnicoCompletaUnFormularioDeContactoConDetallesDelProblemaYPresionaP1(p1);
        callback();
    });

    this.Then(/^el sistema debe enviar la solicitud al equipo de soporte y mostrar un mensaje de confirmación indicando que la solicitud ha sido recibida y que recibirán una respuesta en breve\.$/, function (callback) {
        this.actionwords.elSistemaDebeEnviarLaSolicitudAlEquipoDeSoporteYMostrarUnMensajeDeConfirmacionIndicandoQueLaSolicitudHaSidoRecibidaYQueRecibiranUnaRespuestaEnBreve();
        callback();
    });

    this.Given(/^que un usuario ha enviado una solicitud de soporte técnico,$/, function (callback) {
        this.actionwords.queUnUsuarioHaEnviadoUnaSolicitudDeSoporteTecnico();
        callback();
    });

    this.When(/^el usuario accede a la sección de "(.*)" en la aplicación,$/, function (p1, callback) {
        this.actionwords.elUsuarioAccedeALaSeccionDeP1EnLaAplicacion(p1);
        callback();
    });

    this.Then(/^el sistema debe mostrar una lista de las solicitudes enviadas, incluyendo el estado actual de cada una \(pendiente, en proceso, resuelta\) y la opción de agregar comentarios si es necesario\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnaListaDeLasSolicitudesEnviadasIncluyendoElEstadoActualDeCadaUnaPendienteEnProcesoResueltaYLaOpcionDeAgregarComentariosSiEsNecesario();
        callback();
    });

    this.Given(/^que un usuario está navegando por la aplicación,$/, function (callback) {
        this.actionwords.queUnUsuarioEstaNavegandoPorLaAplicacion();
        callback();
    });

    this.When(/^el usuario selecciona la opción de "(.*)" en el menú principal,$/, function (p1, callback) {
        this.actionwords.elUsuarioSeleccionaLaOpcionDeP1EnElMenuPrincipal(p1);
        callback();
    });

    this.Then(/^el sistema debe mostrar una lista de preguntas comunes y sus respectivas respuestas organizadas por categorías relevantes\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarUnaListaDePreguntasComunesYSusRespectivasRespuestasOrganizadasPorCategoriasRelevantes();
        callback();
    });

    this.Given(/^que un usuario está en la sección de preguntas frecuentes,$/, function (callback) {
        this.actionwords.queUnUsuarioEstaEnLaSeccionDePreguntasFrecuentes();
        callback();
    });

    this.When(/^el usuario utiliza la barra de búsqueda para ingresar una palabra clave relacionada con su problema,$/, function (callback) {
        this.actionwords.elUsuarioUtilizaLaBarraDeBusquedaParaIngresarUnaPalabraClaveRelacionadaConSuProblema();
        callback();
    });

    this.Then(/^el sistema debe mostrar las preguntas y respuestas que coinciden con la búsqueda, permitiendo al usuario encontrar la información que necesita de manera eficiente\.$/, function (callback) {
        this.actionwords.elSistemaDebeMostrarLasPreguntasYRespuestasQueCoincidenConLaBusquedaPermitiendoAlUsuarioEncontrarLaInformacionQueNecesitaDeManeraEficiente();
        callback();
    });

    this.Given(/^que un usuario está autenticado y encuentra un error en la aplicación,$/, function (callback) {
        this.actionwords.queUnUsuarioEstaAutenticadoYEncuentraUnErrorEnLaAplicacion();
        callback();
    });

    this.When(/^el usuario accede a la sección de "(.*)", completa el formulario con los detalles del error y presiona "(.*)",$/, function (p1, p2, callback) {
        this.actionwords.elUsuarioAccedeALaSeccionDeP1CompletaElFormularioConLosDetallesDelErrorYPresionaP2(p1, p2);
        callback();
    });

    this.Then(/^el sistema debe registrar el reporte y mostrar un mensaje de confirmación indicando que el error ha sido reportado y que recibirán actualizaciones sobre su estado\.$/, function (callback) {
        this.actionwords.elSistemaDebeRegistrarElReporteYMostrarUnMensajeDeConfirmacionIndicandoQueElErrorHaSidoReportadoYQueRecibiranActualizacionesSobreSuEstado();
        callback();
    });

    this.Given(/^que un usuario ha enviado un reporte de error,$/, function (callback) {
        this.actionwords.queUnUsuarioHaEnviadoUnReporteDeError();
        callback();
    });

    this.When(/^el estado del reporte cambia \(por ejemplo, de "(.*)" a "(.*)" o "(.*)"\),$/, function (p1, p2, p3, callback) {
        this.actionwords.elEstadoDelReporteCambiaPorEjemploDeP1AP2OP3(p1, p2, p3);
        callback();
    });

    this.Then(/^el sistema debe enviar notificaciones al usuario informando sobre el cambio de estado y permitiendo que el usuario consulte el estado actual en la sección de "(.*)"\.$/, function (p1, callback) {
        this.actionwords.elSistemaDebeEnviarNotificacionesAlUsuarioInformandoSobreElCambioDeEstadoYPermitiendoQueElUsuarioConsulteElEstadoActualEnLaSeccionDeP1(p1);
        callback();
    });

    this.Given(/^que se está desarrollando la aplicación,$/, function (callback) {
        this.actionwords.queSeEstaDesarrollandoLaAplicacion();
        callback();
    });

    this.When(/^se implementa el sistema de cifrado para los datos personales de los usuarios en la base de datos,$/, function (callback) {
        this.actionwords.seImplementaElSistemaDeCifradoParaLosDatosPersonalesDeLosUsuariosEnLaBaseDeDatos();
        callback();
    });

    this.Then(/^todos los datos sensibles \(como contraseñas, correos electrónicos y datos de contacto\) deben ser almacenados de manera cifrada y no deben ser legibles sin el uso de la clave de cifrado adecuada\.$/, function (callback) {
        this.actionwords.todosLosDatosSensiblesComoContrasenasCorreosElectronicosYDatosDeContactoDebenSerAlmacenadosDeManeraCifradaYNoDebenSerLegiblesSinElUsoDeLaClaveDeCifradoAdecuada();
        callback();
    });

    this.Given(/^que los datos personales están cifrados en la base de datos,$/, function (callback) {
        this.actionwords.queLosDatosPersonalesEstanCifradosEnLaBaseDeDatos();
        callback();
    });

    this.When(/^un usuario intenta acceder a su información personal,$/, function (callback) {
        this.actionwords.unUsuarioIntentaAccederASuInformacionPersonal();
        callback();
    });

    this.Then(/^el sistema debe descifrar los datos en tiempo real para mostrarlos en la interfaz de usuario, asegurando que solo los usuarios autenticados y autorizados puedan acceder a su propia información\.$/, function (callback) {
        this.actionwords.elSistemaDebeDescifrarLosDatosEnTiempoRealParaMostrarlosEnLaInterfazDeUsuarioAsegurandoQueSoloLosUsuariosAutenticadosYAutorizadosPuedanAccederASuPropiaInformacion();
        callback();
    });

    this.Given(/^que un usuario está utilizando la aplicación en una conexión a Internet limitada,$/, function (callback) {
        this.actionwords.queUnUsuarioEstaUtilizandoLaAplicacionEnUnaConexionAInternetLimitada();
        callback();
    });

    this.When(/^el usuario accede a la página de inicio o a cualquier sección de la aplicación,$/, function (callback) {
        this.actionwords.elUsuarioAccedeALaPaginaDeInicioOACualquierSeccionDeLaAplicacion();
        callback();
    });

    this.Then(/^la aplicación debe cargar completamente en un tiempo máximo de 3 segundos, asegurando que la experiencia de usuario sea fluida\.$/, function (callback) {
        this.actionwords.laAplicacionDebeCargarCompletamenteEnUnTiempoMaximoDe3SegundosAsegurandoQueLaExperienciaDeUsuarioSeaFluida();
        callback();
    });

    this.Given(/^que la aplicación se está ejecutando en una red con baja velocidad,$/, function (callback) {
        this.actionwords.queLaAplicacionSeEstaEjecutandoEnUnaRedConBajaVelocidad();
        callback();
    });

    this.When(/^se carga un recurso pesado \(como imágenes o datos\),$/, function (callback) {
        this.actionwords.seCargaUnRecursoPesadoComoImagenesODatos();
        callback();
    });

    this.Then(/^el sistema debe utilizar técnicas de optimización \(como carga diferida o compresión de datos\) para reducir el tamaño de los archivos y minimizar el tiempo de carga, manteniendo la usabilidad de la aplicación\.$/, function (callback) {
        this.actionwords.elSistemaDebeUtilizarTecnicasDeOptimizacionComoCargaDiferidaOCompresionDeDatosParaReducirElTamanoDeLosArchivosYMinimizarElTiempoDeCargaManteniendoLaUsabilidadDeLaAplicacion();
        callback();
    });

    this.Given(/^que un usuario tiene la aplicación instalada en su dispositivo móvil,$/, function (callback) {
        this.actionwords.queUnUsuarioTieneLaAplicacionInstaladaEnSuDispositivoMovil();
        callback();
    });

    this.When(/^el usuario abre la aplicación,$/, function (callback) {
        this.actionwords.elUsuarioAbreLaAplicacion();
        callback();
    });

    this.Then(/^la aplicación debe cargarse correctamente y ofrecer todas las funcionalidades disponibles, adaptadas a la interfaz y tamaño de pantalla del dispositivo móvil\.$/, function (callback) {
        this.actionwords.laAplicacionDebeCargarseCorrectamenteYOfrecerTodasLasFuncionalidadesDisponiblesAdaptadasALaInterfazYTamanoDePantallaDelDispositivoMovil();
        callback();
    });

    this.Given(/^que un usuario accede a la aplicación a través de un navegador web en su computadora,$/, function (callback) {
        this.actionwords.queUnUsuarioAccedeALaAplicacionATravesDeUnNavegadorWebEnSuComputadora();
        callback();
    });

    this.When(/^el usuario inicia sesión,$/, function (callback) {
        this.actionwords.elUsuarioIniciaSesion();
        callback();
    });

    this.Then(/^la aplicación debe cargarse completamente y permitir el acceso a todas las funcionalidades, asegurando que la experiencia de usuario sea coherente con la versión móvil\.$/, function (callback) {
        this.actionwords.laAplicacionDebeCargarseCompletamenteYPermitirElAccesoATodasLasFuncionalidadesAsegurandoQueLaExperienciaDeUsuarioSeaCoherenteConLaVersionMovil();
        callback();
    });

    this.Given(/^que la aplicación se está utilizando por un número creciente de usuarios,$/, function (callback) {
        this.actionwords.queLaAplicacionSeEstaUtilizandoPorUnNumeroCrecienteDeUsuarios();
        callback();
    });

    this.When(/^la cantidad de usuarios simultáneos aumenta en un 50% en comparación con la carga base,$/, function (callback) {
        this.actionwords.laCantidadDeUsuariosSimultaneosAumentaEnUn50EnComparacionConLaCargaBase();
        callback();
    });

    this.Then(/^la aplicación debe seguir funcionando sin tiempos de carga prolongados o caídas en el servicio, y los recursos del servidor deben ajustarse automáticamente para manejar el aumento\.$/, function (callback) {
        this.actionwords.laAplicacionDebeSeguirFuncionandoSinTiemposDeCargaProlongadosOCaidasEnElServicioYLosRecursosDelServidorDebenAjustarseAutomaticamenteParaManejarElAumento();
        callback();
    });

    this.Given(/^que la aplicación está implementada en una infraestructura de nube,$/, function (callback) {
        this.actionwords.queLaAplicacionEstaImplementadaEnUnaInfraestructuraDeNube();
        callback();
    });

    this.When(/^se detecta un aumento significativo en el tráfico,$/, function (callback) {
        this.actionwords.seDetectaUnAumentoSignificativoEnElTrafico();
        callback();
    });

    this.Then(/^el sistema debe poder escalar horizontalmente \(añadiendo más instancias de servidor\) o verticalmente \(mejorando la capacidad de las instancias existentes\) de manera automática, sin necesidad de intervención manual\.$/, function (callback) {
        this.actionwords.elSistemaDebePoderEscalarHorizontalmenteAnadiendoMasInstanciasDeServidorOVerticalmenteMejorandoLaCapacidadDeLasInstanciasExistentesDeManeraAutomaticaSinNecesidadDeIntervencionManual();
        callback();
    });

    this.Given(/^que el usuario no completa todos los campos obligatorios en el formulario de registro$/, function (callback) {
        this.actionwords.queElUsuarioNoCompletaTodosLosCamposObligatoriosEnElFormularioDeRegistro();
        callback();
    });

    this.When(/^el usuario intenta enviar el formulario con información faltante$/, function (callback) {
        this.actionwords.elUsuarioIntentaEnviarElFormularioConInformacionFaltante();
        callback();
    });

    this.Then(/^el sistema muestra un mensaje de error indicando qué campos deben completarse\.$/, function (callback) {
        this.actionwords.elSistemaMuestraUnMensajeDeErrorIndicandoQueCamposDebenCompletarse();
        callback();
    });
}
