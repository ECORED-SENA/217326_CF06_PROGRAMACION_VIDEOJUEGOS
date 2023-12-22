<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Utilizando el #[em Framework Test Runner - Unit testing] en unity
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0 Se ha decidido crear un solo epígrafe para las pruebas tanto unitarias como de integración dado que, por la naturaleza del propio programa, Unity y de los juegos como #[em software] desarrollado es casi imposible encontrar elementos aislados de código que funcionen sin depender de otros.
      .col-lg-3.col-6: img(src='@/assets/curso/temas/44.svg', alt='')
      .col-lg-5
        p Es importante mencionar que en este apartado aparte de las pruebas realizadas también se han considerado como pruebas los logs generados durante el desarrollo del proyecto, así como las ejecuciones en el editor como parte de la integración porque al tratarse de un juego, los elementos debían coordinarse a la perfección para no obtener #[em bugs] indeseados.
          br
          br
          | De esta manera se subsanan errores que aparecían al producirse excepciones en el código. Para llevar a cabo estas pruebas se ha hecho uso de una funcionalidad implementada por Unity llamada #[em Test Runner] que permite su configuración y ejecución. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/45.svg', alt='')
      .col-lg-9(data-aos="fade-right")
        .tarjeta.p-4(style="background-color: #E8EAFF")
          p.mb-0 Algo que la mayoría de las veces solemos dejar completamente de lado a la hora de desarrollar nuevas #[em features] en nuestros juegos son, sin duda, los Unit Tests.
            br
            br
            |El Unity Test Runner hace uso de la #[span.rosa librería NUnit que es una  librería de pruebas de #[em software] libre para lenguajes .Net.] El #[em Test Runner] permite ejecutar los test tanto en modo editor (#[em edit mode]) como en modo de juego (#[em play mode]). 
    p.mb-5(data-aos='fade-right') Sin embargo, el uso de estas herramientas que proporciona el #[em software] de Unity 3D se deja casi siempre de lado ya sea por poco conocimiento sobre el uso de este #[em framework], ya que este posee muchas bondades. De esta manera cabe resaltar que la implementación de estos test en nuestros proyectos siempre nos va a demandar un buen gasto de tiempo y esfuerzo extra que no siempre podemos o estamos dispuestos a perder, sumado a la falsa sensación de pérdida de tiempo por estar invirtiendo una parte importante de nuestro trabajo en desarrollar código que ni siquiera pertenece al producto final, puede que el hacer un repaso de algunos de sus pros y contras nos haga verlo de otro modo. Al respecto:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/46.svg', alt='')
        h4 Ventajas
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-gamepad(style="color: #DC40ED")
            p.mb-0 Aplicar #[em test] en nuestro código nos da seguridad y confianza en el comportamiento esperado de las lógicas que implementamos.
          li.d-flex
            i.fas.fa-gamepad(style="color: #DC40ED")
            p.mb-0 Algo muy importante es que sirve como documentación para nuevos desarrolladores que trabajen en tu código.
          li.d-flex
            i.fas.fa-gamepad(style="color: #DC40ED")
            p.mb-0 Nos obliga a implementar las cosas enfocándonos siempre a su testeo.
          li.d-flex
            i.fas.fa-gamepad(style="color: #DC40ED")
            p.mb-0 Nos ayuda a anticipar y localizar posibles #[em bugs] de manera más rápida y eficiente.
          li.d-flex
            i.fas.fa-gamepad(style="color: #DC40ED")
            p.mb-0 Nos convierte en mejores profesionales.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/47.svg', alt='')
        h4 Desventajas
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-gamepad(style="color: #DC40ED")
            p.mb-0 Inversión de tiempo extra de desarrollo (a veces puede llegar a ser demasiado).
          li.d-flex
            i.fas.fa-gamepad(style="color: #DC40ED")
            p.mb-0 No siempre es fácil testear todo (por ejemplo, comportamientos de UI).
          li.d-flex
            i.fas.fa-gamepad(style="color: #DC40ED")
            p.mb-0 No implementarlos de manera adecuada puede crearnos una falsa seguridad que puede ser peligrosa.
    p.mb-5(data-aos='fade-right') La clave está en mantener el equilibrio que las propias circunstancias de nuestro proyecto nos permitan. No se trata de hacer #[em testing] de todo o de nada, siempre va a ser mejor hacerlo de algunas partes que no hacerlo de nada. 
      br
      br
      |Por ello, creo que es posible buscar siempre un balance que nos permita llevar adelante el desarrollo de nuestro proyecto de manera que encaje en tiempos/planificaciones y, a su vez, tenga en cuenta la implementación de test en la medida de lo posible (un enfoque correcto sería por ejemplo priorizar #[em Unit testing] para aquellas mecánicas que consideremos más importantes o prioritarias).
    .titulotres.mb-4
      h3.mb-0 Configurar #[em Test Runner]
    p.mb-5(data-aos='fade-right') Antes de comenzar a desarrollar el código para los respectivos #[em tests], se debe inicialmente configurar #[em Test Runner], que es la herramienta que viene integrada con Unity para gestionar todo lo relacionado con #[em Unit testing] y la cual utiliza el #[em framework] NUnit. Veamos los siguientes pasos:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/gSoR1TygKv0?si=-e91mX10u8o92aVD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Framework Test Runner
    .p-4(style="background-color: #FAE2FD ").adorno.mb-5
      .contenido
        p #[span.morado Ejercicio práctico:] querido aprendiz, con el fin de iniciar la práctica de los temas que se abordan y las herramientas, le invitamos a desarrollar este ejercicio, atendiendo los siguientes puntos:
        .row.justify-content-center.mb-5
          .col-lg-10
            .tarjeta.bg-white.p-4 
              p Es momento de abrir su propio script #[span.cyan «CheckPointTests» ]y limpiarlo para partir de cero, así:
              .row.justify-content-center.align-items-center
                .col-lg-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/48.png', alt='La imagen contiene un código en C# para pruebas unitarias en Unity. Se incluyen cuatro ‘using’ directives que importan librerías necesarias para las pruebas. La estructura incluye un ‘namespace’ llamado ‘Tests’ y una clase pública ‘CheckPointTests’, que está vacía y lista para que se añadan pruebas unitarias.')
                .col-lg-5: img(src='@/assets/curso/temas/49.png', alt='')
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-1.col-3: img(src='@/assets/curso/temas/50.svg', alt='')
          .col-lg-9
            p.mb-0 En este ejercicio, a modo de ejemplo, se abordará la implementación de los siguientes casos de prueba que, aunque por definición no puedan considerarse 100 % #[em tests] unitarios, ya que contemplan el testeo de #[em features] más generales, son perfectamente válidos y servirán para ilustrar el desarrollo de tests (queda a criterio propio el plantear todos los casos que estimes necesarios):
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/51.png', alt='')
          .col-lg-6
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-gamepad(style="color: #DC40ED")
                p.mb-0 Caso de prueba para que un checkpoint se cree correctamente.
              li.d-flex
                i.fas.fa-gamepad(style="color: #DC40ED")
                p.mb-0 Caso de prueba para que un checkpoint sea activado por el player correctamente.
              li.d-flex
                i.fas.fa-gamepad(style="color: #DC40ED")
                p.mb-0 Caso de prueba para que el player, tras morir, sea teletransportado al último #[em checkpoint] activado.
        .row.justify-content-center.mb-5
          .col-lg-10
            .tarjeta.bg-white.p-5
              p.fw-bold.text-center Debe iniciar entonces por declarar dentro de la clase, las siguientes variables que son necesarias a lo largo de las pruebas:
              img(src='@/assets/curso/temas/52.png', alt='La imagen muestra una parte de código que pertenece a una clase en C# llamada CheckPointTests. Dentro de la clase, se declaran tres variables privadas de instancia: player y enemy, ambas del tipo GameObject, y newCheckPoint. Estas variables se usan en pruebas unitarias relacionadas con puntos de control en un juego, donde player y enemy son objetos del juego.')
        p Antes de iniciar a escribir el código del primer caso de prueba conviene señalar la existencia de 2 atributos especiales que van a ser útiles a la hora de implementar sus funciones de test en Unity.    
      .adorno--5.d-none.d-lg-block: img(src='@/assets/curso/temas/adorno1.png', alt='' )
    p.mb-5(data-aos='fade-right') Se trata de <span class="rosa"> #[em [SetUp]] y <em> [TearDown].</em> </span>
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-5.mb-lg-0.mb-3(fader): img(src='@/assets/curso/temas/53.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        p.mb-0 <span class="morado"> [SetUp]:</span> este atributo, colocado encima de una de las funciones de su script de tests, específica a Unity que dicha función debe ser ejecutada antes de la ejecución de cada una de las funciones de test normales. 
    p.mb-5(data-aos='fade-right') Esto permite, por ejemplo, crear e inicializar objetos comunes a todas las pruebas sin tener que estar realizándose al inicio de cada prueba. Por tanto, empiece por crear la función de SetUp:
    .row.justify-content-center.mb-5
      .col-lg-10
        img(src='@/assets/curso/temas/54.png', alt='Texto alternativo El código muestra el método Setup en C# para inicializar objetos de prueba en Unity. Se crean dos instancias de GameObject, player y enemy, sin gravedad, preparados para ser utilizados en pruebas unitarias.')
    p.mb-5(data-aos='fade-right') En este caso se hace lo siguiente:
    .mn.p-5.bg-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/55.svg', alt='')
        .col-lg-6
          ol.lista-ol--cuadro
            li
              .lista-ol--cuadro__vineta(style="background-color: #DC40ED")
                span.fw-bold a
              | Instanciar el prefab del player en el punto (0, 0, 0) de la escena.
            li
              .lista-ol--cuadro__vineta(style="background-color: #DC40ED")
                span.fw-bold b
              | Desactivar la gravedad (esto se hace para facilitar las pruebas, ya que en esta escena de prueba no se cuenta con un suelo).

            li
              .lista-ol--cuadro__vineta(style="background-color: #DC40ED")
                span.fw-bold c
              | Instanciar el prefab del enemigo en un punto alejado al player (200, 0, 0).
            li
              .lista-ol--cuadro__vineta(style="background-color: #DC40ED")
                span.fw-bold d
              | Desactivar la gravedad (por el mismo motivo de antes).
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/56.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        p.mb-0 <span class="morado "> <em> [TearDown]:</em> </span> este atributo, colocado encima de una de las funciones del script de tests, específica a Unity que dicha función debe ser ejecutada después de la ejecución de cada una de las funciones de test normales. Esto permite, por ejemplo, destruir o limpiar objetos comunes a todas las pruebas sin tener que estar realizándose al final de cada prueba. Por tanto, debe crear la función de #[em TearDown:]
    .row.justify-content-center.mb-5
      .col-lg-10
        img(src='@/assets/curso/temas/57.png', alt='El código muestra un método Teardown en C#, etiquetado con [TearDown], que se usa para limpiar recursos después de que se ejecutan las pruebas unitarias. Se destruyen los objetos player, enemy, y newCheckPoint, y se limpia una lista de ')
    p.mb-5(data-aos='fade-right') En este caso se hace lo siguiente:
    .mn.p-5.bg-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/58.png', alt='' style="margin-top: -4rem")
        .col-lg-6
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color: #DC40ED")
                span.fw-bold a
              p.mb-0 Destruir el objeto instanciado del player.

            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color: #DC40ED")
                span.fw-bold b
              p.mb-0 Destruir el objeto instanciado del enemigo.

            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color: #DC40ED")
                span.fw-bold c
              p.mb-0 Destruir el objeto instanciado del #[em checkpoint.]

            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color: #DC40ED")
                span.fw-bold d
              p.mb-0 Limpiar la lista de #[em checkpoints] en escena.
    p.mb-5(data-aos='fade-right') Bien, ya puede empezar a escribir sus 3 casos de prueba.
      br
      br
      |#[span.morado Empecemos con el primero:] la creación correcta de un checkpoint en escena.
    .row.justify-content-center.mb-5
      .col-lg-10: img(src='@/assets/curso/temas/59.png', alt='El fragmento de código es una prueba unitaria en Unity que valida si un punto de control se crea y se inicializa correctamente como inactivo, con verificaciones específicas para cantidad y estado.')
    p.mb-5(data-aos='fade-right') En este caso se hace lo siguiente:
    .mn.p-5.bg-4.mb-5
      .bg-white.p-4
        .row.justify-content-center.align-items-center
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/60.svg', alt='' style="margin-top: -3rem")
          .col-lg-6
            ol.lista-ol--cuadro
              li.d-flex
                .lista-ol--cuadro__vineta(style="background-color: #DC40ED")
                  span.fw-bold a
                p.mb-0 Instanciar el prefab del #[em checkpoint] en el punto (100, 0, 0) de la escena, para que no esté tocando al #[em player].

              li.d-flex
                .lista-ol--cuadro__vineta(style="background-color: #DC40ED")
                  span.fw-bold b
                p.mb-0 Obtener su componente #[em CheckPoint], que es donde está el código que se quiere probar del juego (producción).

              li.d-flex
                .lista-ol--cuadro__vineta(style="background-color: #DC40ED")
                  span.fw-bold c
                p.mb-0 Esperar 0.1 segundos (esto es bastante común hacerlo en los tests cuando se quiere asegurar de darle tiempo a Unity para que refleje ciertas operaciones en la escena, en este caso la instancia del #[em checkpoint]).

              li.d-flex
                .lista-ol--cuadro__vineta(style="background-color: #DC40ED")
                  span.fw-bold d
                .contenido
                  p.mb-0 Esperar 0.1 segundos (esto es bastante común hacerlo en los #[em tests] cuando se quiere asegurar de darle tiempo a Unity para que refleje ciertas operaciones en la escena, en este caso la instancia del #[em checkpoint]).
                  p.ms-4 - El número de objetos en la lista de #[em checkpoints] en escena debe ser 1.
                    br
                    |- El nuevo #[em checkpoint] debe estar desactivado.
    p.mb-5(data-aos='fade-right') Sobre lo anterior, veamos el siguiente análisis del código:
    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/61.png', alt='Texto que describa la imagen')
      .tarjeta.p-3(x="8%" y="30%" numero="1" style="background-color: #E8EAFF ")
        .h5.mb-2 1. UnityTest
        p Este atributo lo usará en cada una de las funciones de test y le indica a Unity que es uno de los test y que debe ejecutarlo dentro de su Test Suite correspondiente.
      .tarjeta.p-3(x="13%" y="33%" numero="2" style="background-color: #E8EAFF ")
        .h5.mb-2 2. heckPointIsCreatedProperly
        p Es el nombre de la función y siempre es recomendable que los nombres de las funciones referentes a sus tests sean lo más claros e intuitivos posible, por tanto no se preocupe si queda un nombre demasiado largo.
      .tarjeta.p-3(x="10%" y="38%" numero="3" style="background-color: #E8EAFF ")
        .h5.mb-2 3. IEnumerator
        p Las funciones de test pueden no devolver nada o pueden también devolver un IEnumerator (convirtiéndose en corrutinas). En este caso hemos necesitado que se comporte como corrutina debido a la espera de 0.1 segundos que hacemos en el paso 3 de nuestra lógica.
      .tarjeta.p-3(x="10%" y="60%" numero="4" style="background-color: #E8EAFF ")
        .h5.mb-2 
        p 
    p.mb-5(data-aos='fade-right') A partir de ahora ya maneja lo básico y necesario para realizar cualquier tipo de test. Así que acabemos de ver los siguientes casos de prueba: 
    p.fw-bold «La activación correcta de un #[em checkpoint»] y «El posicionamiento del #[em player] al último #[em checkpoint] después de morir»
    .row.justify-content-center.mb-5
      .col-lg-10: img(src='@/assets/curso/temas/62.png', alt='La imagen contiene dos métodos de prueba unitaria en Unity. El primero verifica que un punto de control se activa cuando el jugador entra en él. El segundo método prueba que el jugador reaparece en el punto de control correcto después de una “muerte” en el juego. Ambos utilizan aserciones para validar el comportamiento esperado.')
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4(style="background-color: #1425DD ")
          .row.justify-content-center.align-items-center
            .col-lg-1.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/63.svg', alt='')
            .col-lg-11
              p.mb-0.text-white #[b Nota:] como vemos, dentro de una función de test, podemos perfectamente hacer llamadas a otras funciones de test siempre y cuando tenga sentido para nuestras pruebas.
    .titulotres.mb-4
      h3.mb-0 Ejecutar #[em tests]
    p En este punto, lo único que nos queda es realizar la ejecución de las pruebas. Para ello, tenga en cuenta lo que se indica en el siguiente video:
    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/hEGeWfpCATE?si=pqevcBg7B827ailO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Script TestRunner
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta(style="background-color: #E8EAFF").p-5
          p.text-center.fw-bold.mb-0 ¡Disfruta del testing!


















          
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
