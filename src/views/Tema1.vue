<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 ¿Por qué es necesario probar los juegos?
    .mn.p-5.adorno(style="background-color:#eff0fd ").mb-5
      .contenido
        .row.justify-content-center.align-items-center

          .col-lg-7.mb-lg-0.mb-3
            p.mb-0 Las empresas de desarrollo de juegos deben invertir lo suficiente en las pruebas de los videojuegos para garantizar que el producto final no tenga errores o #[em bugs]. Eso haría decaer la experiencia del jugador y la parte central de los juegos es la experiencia del consumidor. Con una buena experiencia de usuario, un juego prosperará. Hay millones de juegos en la App Store y la Play Store, pero ser un ganador entre esta dura competencia requiere mucha paciencia y trabajo. 
              br
              br
              |Con tantos juegos llegando al mercado diariamente, hay que ser diferente para destacar y dejar huella. Los niveles complejos no son suficientes para que los usuarios se enganchen a un juego y lo recomienden a sus amigos, ya que si el juego no funciona como los usuarios esperan, no tardarán en desinstalarlo y pasarse a otro.
          .col-lg-5.col-8: img(src='@/assets/curso/temas/1.png', alt='')
      .adorno--1.d-none.d-lg-block: img(src='@/assets/curso/temas/adorno1.png', alt='')
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1  Tipos de técnicas de pruebas de juegos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/2.svg', alt='')
      .col-lg-9
        p.mb-0 Los encargados de las pruebas de control de calidad en un estudio de videojuegos (QA, #[em Quality Assurance]) buscan los problemas y los puntos débiles que se pueden pulir antes de lanzar el producto al público, además, deben asegurarse, a través de diversas técnicas, que aspectos como la conectividad emocional con el juego o el nivel de diversión estén en óptimas condiciones.
          br
          br
          |A continuación, detallamos algunas de las técnicas más comunes utilizadas por los estudios de videojuegos y los QA #[em testers] especialistas en pruebas de control de calidad de juegos:
    .bg-1.mn.adorno.p-5
      .adorno--2: img(src='@/assets/curso/temas/adorno2.png', alt='')
      .contenido
        TabsC.color-acento-botones.mb-5
          .p-5.py-md-5(titulo="Pruebas de Funcionalidad").bg-white
            .row
              .col-lg-6.mb-4.mb-md-0
                h4 Pruebas de Funcionalidad
                p La función de esta técnica de pruebas de juegos es comprobar si el videojuego funciona de acuerdo con las especificaciones. Algunos de los problemas que sigue la técnica de pruebas de funcionalidad son los gráficos genéricos, la interfaz, la estabilidad o los problemas mecánicos. Además, con esta técnica se pueden resolver errores como el #[em freezing], el #[em crashing] o los bloqueos de progresión.
                  br
                  br
                  |Los #[em testers] del juego están atentos a cualquier fallo gráfico en la interfaz, como gráficos ausentes, colores faltantes, problemas de ubicación o problemas de animación y recortes. Después de identificar todos los fallos y errores, los #[em testers] del juego hacen una lista y los envían a los desarrolladores del juego para que los arreglen. Una vez que los desarrolladores resuelven los problemas, envían el juego al equipo de control de calidad para que lo vuelvan a probar.
              .col-lg-6: img(src='@/assets/curso/temas/2.png', alt='')
          .p-5.py-md-5(titulo="Pruebas Combinatorias").bg-white
            .row
              .col-lg-6.mb-4.mb-md-0
                h4 Pruebas Combinatorias
                p Con esta técnica de pruebas de juegos, se puede comprobar inicialmente cuántas pruebas necesita el juego. La técnica de pruebas combinatorias, analiza y escudriña todas las salidas y entradas del juego para que pueda obtener una imagen clara sobre las distintas combinaciones y resultados concebibles. Este hallazgo tiene importantes implicaciones para las pruebas, ya que sugiere que probar combinaciones de parámetros puede proporcionar una detección de fallos muy eficaz.
              .col-lg-6: img(src='@/assets/curso/temas/3.png', alt='')
          .p-5.py-md-5(titulo="Pruebas Ad Hoc").bg-white
            .row
              .col-lg-6.mb-4.mb-md-0
                h4 Pruebas Ad Hoc
                p Este método no es algo formal, sino que, por el contrario, todos los procedimientos se realizan de forma aleatoria. Esta técnica de pruebas de juego también se denomina “adivinación de errores” y consiste en detectar los fallos mediante un enfoque aleatorio. Por lo tanto, no es necesaria ninguna documentación especial, como documentos de requisitos, planes de pruebas, casos de prueba, ni una planificación adecuada de las pruebas en cuanto a su calendario y orden de realización.
                  br
                  br
                  |Dado que las pruebas ad hoc son más bien una técnica de prueba “salvaje” que no tiene que estar estructurada, la recomendación general es que se realicen después de la ejecución del conjunto de pruebas correspondiente. Otro punto de vista es que se puede realizar cuando no se pueden realizar pruebas detalladas por falta de tiempo.
              .col-lg-6: img(src='@/assets/curso/temas/4.png', alt='')
          .p-5.py-md-5(titulo="Pruebas de Compatibilidad").bg-white
            .row
              .col-lg-6.mb-4.mb-md-0
                h4 Pruebas de Compatibilidad
                p Esta técnica de prueba de juegos te ayuda a validar si la interfaz de usuario es compatible con todos los tamaños de pantalla en los que se puede jugar. Cada dispositivo es único y puede presentar diferentes problemas, como el uso del #[em hardware], los detalles gráficos, el tamaño de la pantalla o las aplicaciones de fondo. 
                  br
                  br
                  |Tras la verificación, el videojuego debe cumplir los requisitos esenciales del #[em software], el #[em hardware] y los gráficos. Realizar las pruebas de compatibilidad en dispositivos físicos es la mejor manera de determinar el rendimiento con precisión y conocer la experiencia del usuario final.
              .col-lg-6: img(src='@/assets/curso/temas/5.png', alt='')
          .p-5.py-md-5(titulo="Pruebas de Cleanroom").bg-white
            .row
              .col-lg-6.mb-4.mb-md-0
                h4 Pruebas de Cleanroom
                p La técnica de pruebas de cleanroom válida y mejora el rendimiento de la consistencia y la fiabilidad del #[em software] de juegos. Mediante el uso de las pruebas de cleanroom, se puede identificar la causa principal detrás de los #[em bugs] y pequeños errores. 
                  br
                  br
                  |El plan es que los #[em testers] de juegos creen pruebas que jueguen al juego igual que los jugadores. Lo que significa que les resultará más fácil averiguar qué hacen los jugadores.
              .col-lg-6: img(src='@/assets/curso/temas/6.png', alt='')
          .p-5.py-md-5(titulo="Pruebas de Regresión").bg-white
            .row
              .col-lg-6.mb-4.mb-md-0
                h4 Pruebas de Regresión
                p El propósito de esta técnica de prueba del juego es comprobar de nuevo si las funciones del juego operan de forma óptima, lo que ayuda a controlar la calidad que es tan importante para la experiencia de los jugadores. En la práctica, los #[em testers] de juegos vuelven a comprobar el juego y comparan los resultados actuales con los obtenidos en las pruebas. Quieren ver si se han producido nuevos errores debido a los cambios y ver si hay algún fallo antiguo.
              .col-lg-6: img(src='@/assets/curso/temas/7.png', alt='')
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2  Métodos de prueba de juegos
    p.mb-5(data-aos='fade-right') Aquí es donde entramos en uno de los puntos más relevantes y nos centramos en los diferentes tipos de metodologías de prueba de control de calidad de juegos disponibles.
    .titulotres.mb-4
      h3.mb-0 Pruebas de funcionalidad del juego
    p.mb-5(data-aos='fade-right') Las pruebas funcionales son una actividad que tiene como objetivo determinar si un juego funciona de acuerdo con las especificaciones e identificar cualquier error o problema que pueda afectar negativamente la experiencia del jugador. Esto se aplica tanto a las pruebas de juegos móviles como a las de otras plataformas, incluidas PC, consolas, web y VR/AR.
    .mn.bg-1.p-5.adorno 
      .contenido
        .row.justify-content-center.align-items-center
          .col-lg-3.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/8.svg', alt='')
          .col-lg-9 
            p Podemos ordenar las pruebas en múltiples subtipos:
            .tarjeta.bg-white.p-5
              SlyderA(tipo='b').p-4
                .divslyde
                  h4.mb-0 Subtipos
                  p Pruebas de juego de interoperabilidad

                  h4.mb-0 Descripción
                  p Se utiliza para probar cómo un juego interactúa con otras aplicaciones. Los probadores buscan cualquier problema de compatibilidad, incluida la inaccesibilidad de las funciones, el bajo rendimiento y los retrasos en la comunicación.

                  h4.mb-0 Cuándo se necesita
                  p Se utiliza principalmente para juegos multijugador y aquellos que hacen uso de funciones avanzadas del dispositivo (por ejemplo, enlace ascendente de Internet, Bluetooth, cámara, etc.).
                .divslyde
                  h4.mb-0 Subtipos
                  p Pruebas de juegos de regresión
                  h4.mb-0 Descripción
                  p Este ciclo se aplica después de las principales actualizaciones de código para asegurarse de que la actualización no haya afectado negativamente la funcionalidad existente (por ejemplo, rompiendo una función, agregando numerosos errores nuevos, etc.). El objetivo es asegurarse de que el código aún funcione.
                  h4.mb-0 Cuándo se necesita
                  p Esta es una práctica muy común tanto durante el desarrollo (cuando se crean nuevas compilaciones) como en el período posterior al lanzamiento, cuando se implementan el mantenimiento y las actualizaciones. Puede automatizar muchas de estas pruebas.
                .divslyde
                  h4.mb-0 Subtipos
                  p Pruebas de juegos de humo
                  h4.mb-0 Descripción
                  p La prueba de humo se trata de verificar la estabilidad después de una actualización de código. Sin embargo, tiende a ser una evaluación realmente simple, verificando cosas básicas como si el juego se inicia, si la interfaz de usuario sigue respondiendo. Puede ser realizado tanto por desarrolladores como por probadores.
                  h4.mb-0 Cuándo se necesita
                  p La prueba de humo tiende a realizarse justo antes de la prueba de regresión, por lo que podemos decir que es igual de común y esencial para todos los proyectos. Se considera una buena práctica para realizar todos los días del proyecto.
                .divslyde
                  h4.mb-0 Subtipos
                  p Pruebas de juego de localización
                  h4.mb-0 Descripción
                  p Este método tiene como objetivo garantizar que un juego sea totalmente utilizable y agradable para los jugadores de diferentes países y regiones. En primer lugar, todas las mismas características y funcionalidades deben ser accesibles en diferentes ubicaciones (a menos que se planifique lo contrario). En segundo lugar, el contenido debe adaptarse a los idiomas y culturas donde se presenta.
                  h4.mb-0 Cuándo se necesita
                  p Este tipo de prueba es vital si planeas lanzar tu juego en varios idiomas, o si planeas hacer que el contenido esté disponible en diferentes regiones. Por lo tanto, es preferible que los evaluadores tengan un amplio conocimiento de los idiomas/culturas asociados antes de comenzar a evaluar el #[em software].
                .divslyde
                  h4.mb-0 Subtipos
                  p Pruebas de juego de control de acceso de seguridad
                  h4.mb-0 Descripción
                  p Una práctica muy importante que verifica si existen lagunas o puertas de enlace no autorizadas que puedan permitir que alguien acceda al #[em backend] del juego o a elementos/características que de otro modo estarían restringidas. Por ejemplo, algunos jugadores intentan piratear juegos para obtener recompensas o dinero gratis en el juego, hacerse invencibles, etc. y el control de acceso lo impide o al menos reduce la probabilidad.

                  h4.mb-0 Cuándo se necesita
                  p Aunque esta forma de prueba rara vez conduce a cambios que afecten la experiencia del usuario o que sean incluso perceptibles, se recomienda realizarla al menos una vez antes del lanzamiento y cada actualización posterior al lanzamiento. Puede ser realizado por ingenieros generales de control de calidad del juego o probadores de pluma (penetración) experimentados.
                .divslyde
                  h4.mb-0 Subtipos
                  p Pruebas de juego de aceptación del usuario

                  h4.mb-0 Descripción
                  p Esta es una de las últimas etapas de prueba antes de lanzar un juego en producción. A veces, se lleva a cabo como una prueba beta, atrayendo a jugadores fuera del equipo de desarrollo. Rara vez se encuentran grandes problemas, por lo que la atención se centra principalmente en pulir los errores menores restantes y realizar pequeñas mejoras en la experiencia del usuario.

                  h4.mb-0 Cuándo se necesita
                  p Al involucrar a probadores beta externos, puede obtener una nueva perspectiva sobre la experiencia del jugador y recopilar comentarios valiosos sobre posibles mejoras que el equipo de desarrollo no conocía o no prestó suficiente atención. Por ejemplo, las pruebas beta de juegos móviles pueden atraer a un grupo de edad con ideas y deseos únicos que su equipo de pruebas de adultos no tuvo en cuenta.

      .adorno--1.d-none.d-lg-block: img(src='@/assets/curso/temas/adorno1.png', alt='')
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 ¿Qué es la automatización de pruebas de juegos?
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        p #[b.azul La automatización se da en dos enfoques:] en el control de calidad del juego y el otro es la prueba manual. Con la automatización, ciertas pruebas de rendimiento se pueden realizar muchas veces seguidas sin la participación del evaluador, esto ahorra tiempo y hace que sea mucho más probable detectar errores.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/10.png', alt='')
      .col-lg-5
        p Aunque este enfoque es más conveniente que pedirles a los probadores que completen los mismos niveles muchas veces de forma manual, es bastante difícil crear herramientas de automatización adaptadas a una aplicación individual. 
        .tarjeta(style="background-color: #1425dd").p-4
          p.mb-0.text-white Según una encuesta de empresas de desarrollo de juegos, la mayoría prefiere probar manualmente sus juegos, citando la falta de recursos y tiempo para crear #[em software] de automatización.
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4 ¿Qué hacen los QA #[em testers] de juegos?
    p.mb-5 Muchos jóvenes sueñan con convertirse en probadores de juegos porque pueden jugar todo el día, pero esto solo rasca la superficie de las responsabilidades del puesto. Aparte de revisar la mecánica del juego, tienen tareas menos románticas y dinámicas como:
    .mn(style="background-color: #fae2fd ").p-4.my-5
      .row.justify-content-center
        .col-lg-4.col-7: img(src='@/assets/curso/temas/11.svg', alt='' style="margin-top: -3rem")
        .col-lg-6
          ol.lista-ol--cuadro
            li
              .lista-ol--cuadro__vineta
                span a
              | Navegación y muestreo de todas las opciones del menú.
            li
              .lista-ol--cuadro__vineta
                span b
              | Ejecución de análisis de rendimiento y CPU.
            li
              .lista-ol--cuadro__vineta
                span c
              | Muestreo de todas las opciones de personalización.
            li
              .lista-ol--cuadro__vineta
                span d
              | Fallar intencionalmente en el juego y probar obstáculos.
            li
              .lista-ol--cuadro__vineta
                span e
              | Comprobación y análisis de las especificaciones del sistema.
            li
              .lista-ol--cuadro__vineta
                span f
              | Compilar informes y completar formularios de comentarios.
            li
              .lista-ol--cuadro__vineta
                span g
              | Ejecución de scripts de prueba y casos de prueba para aplicaciones de juegos.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0 Como se puede observar, hay muchas repeticiones involucradas en las pruebas de funcionalidad del juego y los expertos tienen que dedicar gran parte de su tiempo a otras tareas como hacer informes y trabajar con código y scripts. Para cualquiera que esté considerando este tipo de trabajo, no solo debe amar los juegos, sino también estar preparado para verlos desde un punto de vista analítico y constructivo.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/12.svg', alt='')
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.5  ¿Cómo funciona la prueba de juegos?
    p.mb-5(data-aos='fade-right') Como mencionamos anteriormente, las pruebas de juegos implican más que solo iniciar un juego y jugarlo de principio a fin para asegurarse de que funcione sin problemas. Hay docenas de complejidades en el proceso de prueba del juego, así que echemos un vistazo más de cerca.
    .titulotres.mb-4
      h3.mb-0 Etapas de la prueba del juego
    p.mb-5(data-aos='fade-right') La estructura general del proceso de control de calidad es simple, esto es:
    .mn.p-4(style="background-color:  #ADB3F3").mb-5
      .row.justify-content-center
        .col-lg-10
          .tarjeta.bg-2.p-5(style="margin: -2rem 0")
            .row.justify-content-center.align-items-center
              .col-lg-6.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/13.svg', alt='La imagen presenta un diagrama circula, cada segmento representa una fase distinta en el ciclo de pruebas de un videojuego. El ciclo comienza con la fase de prueba inicial y avanza a través de la retroalimentación, la implementación de mejoras y la repetición del proceso según sea necesario.')
              .col-lg-6
                p Sin embargo, #[span.morado ¿dónde encaja la revisión de control de calidad en el gran esquema de desarrollo?] Durante las fases iniciales de desarrollo (planificación y producción), los ingenieros de control de calidad tienden a tener muy poca participación. Estas etapas son manejadas principalmente por gerentes de proyecto, expertos en desarrollo comercial y desarrolladores. Aun así, se les puede pedir comentarios sobre cosas como la lógica y el flujo del juego, el diseño de UX y el diseño de interacción.
                  br
                  br
                  |La mayor parte del trabajo realizado por los ingenieros comienza cuando está lista una compilación jugable de la aplicación. Esto a veces se denomina prueba alfa de videojuegos. 
                  br
                  br
                  |La revisión se lleva a cabo dentro de los límites de una empresa, con el objetivo de solucionar la mayoría de los problemas y brindar una experiencia de juego completa y de alta calidad.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-4(data-aos="fade-right"): img(src='@/assets/curso/temas/14.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        p.mb-0 Algunas compañías optan por agregar también juegos de prueba beta al expediente. Con este enfoque, se pide a personas ajenas a la empresa que realicen una vista previa y una prueba beta de los juegos y lanzamientos de PC en otras plataformas (las consolas también son comunes). Esto brinda una comprensión mucho mejor de la impresión general que se puede esperar de los jugadores que la que una empresa podría obtener de unos pocos ingenieros de control de calidad.
    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.6  Métricas clave de las pruebas funcionales de control de calidad
    p.mb-5(data-aos='fade-right') La retroalimentación sobre la calidad del juego no es algo formulado ampliamente como “El juego funciona sin problemas”. Incluye cifras concretas, estadísticas y terminología que ofrece información mucho más útil.
      br
      br
      |Repasemos algunas de las métricas clave de control de calidad del juego:
    .bg-3.mn.p-4.mb-5
      .contenido(style="margin: -3rem 0")
        .row.justify-content-center.mb-5
          .col-lg-3.mb-lg-0.mb-3
            .tarjeta.tarjeta-up
              .tarjeta-up_portada
                img(src='@/assets/curso/temas/15.svg', alt='') 
                .tarjeta.rounded-pill.d-inline-block.bg-white.p-3
                  h4.mb-0.mx-2.text-center Eficacia de la prueba
              .tarjeta-up_contenido.p-4
                img.m-auto.mb-3(src='@/assets/curso/temas/20.svg', alt='' style="width: 85px")   
                .text-center
                  h4 Eficacia de la prueba
                  p Esta métrica se recopila en función de docenas de otras medidas, incluida la cantidad de pruebas realizadas, la cantidad de errores encontrados/corregidos y la cantidad de problemas que persisten después de la corrección. 
          .col-lg-3.mb-lg-0.mb-3
            .tarjeta.tarjeta-up
              .tarjeta-up_portada
                img(src='@/assets/curso/temas/16.svg', alt='') 
                .tarjeta.rounded-pill.d-inline-block.bg-white.p-3
                  h4.mb-0.mx-2.text-center Variables económicas
              .tarjeta-up_contenido.p-4
                img.m-auto.mb-3(src='@/assets/curso/temas/21.svg', alt='' style="width: 85px")   
                .text-center
                  h4 Variables económicas
                  p Los cambios aplicados durante las pruebas se analizan para determinar cuántos problemas se solucionaron, qué nuevos problemas surgieron y cuántos, y otros cambios estadísticamente significativos a lo largo del tiempo.  
          .col-lg-3.mb-lg-0.mb-3
            .tarjeta.tarjeta-up
              .tarjeta-up_portada
                img(src='@/assets/curso/temas/17.svg', alt='') 
                .tarjeta.rounded-pill.d-inline-block.bg-white.p-3
                  h4.mb-0.mx-2.text-center Métricas del equipo
              .tarjeta-up_contenido.p-4
                img.m-auto.mb-3(src='@/assets/curso/temas/22.svg', alt='' style="width: 85px")   
                .text-center
                  h4 Métricas del equipo
                  p En este caso, se mide el trabajo del equipo de pruebas, tanto como unidad única como individualmente.
        .row.justify-content-center
          .col-lg-3.mb-lg-0.mb-3
            .tarjeta.tarjeta-up
              .tarjeta-up_portada
                img(src='@/assets/curso/temas/18.svg', alt='') 
                .tarjeta.rounded-pill.d-inline-block.bg-white.p-3
                  h4.mb-0.mx-2.text-center Variables económicas
              .tarjeta-up_contenido.p-4
                img.m-auto.mb-3(src='@/assets/curso/temas/23.svg', alt='' style="width: 85px")   
                .text-center
                  h4 Variables económicas
                  p Esta métrica se refiere al costo general de las pruebas y el costo por corrección de errores, la variación del costo planificado y real, y la diferencia entre el tiempo planificado y el tiempo real.       
          .col-lg-3.mb-lg-0.mb-3
            .tarjeta.tarjeta-up
              .tarjeta-up_portada
                img(src='@/assets/curso/temas/19.svg', alt='') 
                .tarjeta.rounded-pill.bg-white.p-3
                  h4.mb-0.mx-2.text-center  Y muchos otros
              .tarjeta-up_contenido.p-4
                img.m-auto.mb-3(src='@/assets/curso/temas/24.svg', alt='' style="width: 85px")   
                .text-center
                  h4 Y muchos otros
                  p  Dependiendo de a quién le pregunte, puede haber hasta cientos de métricas que una empresa registra y analiza.      
    Separador
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.7  Informes de errores 
    p.mb-5(data-aos='fade-right') Los informes de errores #[span.morado son una parte indeleble de la revisión de control de calidad] y representan la información/los comentarios recopilados en función de las pruebas de los ingenieros que se pueden utilizar para realizar mejoras adicionales.
      br
      br
      |Un informe de error tradicional incluirá los siguientes detalles:    
            
    .mn.bg-1.p-5.adorno
      .adorno--3.d-none.d-lg-block: img(src='@/assets/curso/temas/adorno3.png', alt='')
      .adorno--4.d-none.d-lg-block: img(src='@/assets/curso/temas/adorno1.png', alt='')
      .contenido 
        .row.justify-content-center.mb-5
          .col-lg-10
            img.d-lg-block.d-none(src='@/assets/curso/temas/26.svg', alt='La figura muestra un Informe de errores en cinco pasos: descripción del problema, información general de la plataforma, instrucciones para reproducir el error, comparación de resultados reales y esperados, y solicitud de detalles adicionales para su solución.')
            img.d-block.d-lg-none(src='@/assets/curso/temas/26a.svg', alt='La figura muestra un Informe de errores en cinco pasos: descripción del problema, información general de la plataforma, instrucciones para reproducir el error, comparación de resultados reales y esperados, y solicitud de detalles adicionales para su solución.')
    Separador
    #t_1_8.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.8  Tipos principales de métodos de prueba de juegos
    p.mb-5(data-aos='fade-right') Cada empresa tiene sus propias percepciones sobre qué pruebas son necesarias para un juego, y la lista incluso puede variar de un proyecto a otro. Aun así, podemos delinear las pruebas más comunes, dividiéndolas en funcionales (pruebas de funcionalidad del juego) y no funcionales (asociadas con el rendimiento general y UX), veamos esto de una manera más detallada:
    .row.justify-content-center.mb-5
      .col-lg-10
        .tabla
          .tabla-b__header(style="background-color: #8979F3")
            h5.mb-0 Principales métodos de #[em testing]
          table
            tr(style="background-color: #E7E4FD").text-center
              td.fw-bold Pruebas funcionales
              td.fw-bold Pruebas no funcionales
            tr.text-center
              td Componente/módulo (comprobación del rendimiento de las unidades de software más pequeñas).
              td Rendimiento (velocidad de carga del juego en tiempo real).
            tr.text-center
              td Integración (encontrar defectos en interfaces e interacciones de componentes).
              td Carga/Estrés (comprobación del rendimiento en condiciones de gran actividad/tráfico de usuarios).
            tr.text-center
              td Humo (determinando la estabilidad de construcción).
              td Instalación (qué tan bien se guarda el juego en diferentes dispositivos).
            tr.text-center
              td Regresión (verificación de correcciones de errores).
              td Usabilidad (conveniencia de los mecanismos de juego).
            tr.text-center
              td Localización (verificación de la consistencia del contenido traducido).
              td Recuperación (cómo funciona la aplicación después de fallar).
            tr.text-center
              td Seguridad y control de acceso (identificación de vulnerabilidades y verificación de permisos de usuarios).
              td
    Separador
    #t_1_9.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.9  Cómo funcionan las pruebas en diferentes plataformas
    p.mb-5(data-aos='fade-right') Los juegos a menudo se lanzan en varias plataformas a la vez e incluso dentro del alcance de una plataforma, los evaluadores deben asegurarse de que todo funcione en diferentes dispositivos. Por lo tanto, hay muchas peculiaridades en lo que respecta a la revisión de control de calidad en diferentes plataformas, esto se entenderá de manera más detallada a continuación:
    TabsB.color-acento-botones.mb-5
      .p-4(titulo=" PC / Ordenador Personal" :icono="require('@/assets/curso/temas/27.svg')" style="background-color: #E8EAFF")
        .row
          .col-lg-9.mb-4.mb-lg-0
            h5 PC / Ordenador Personal
            p Los dispositivos de escritorio tienden a tener más potencia y más flexibilidad en términos de resolución de pantalla/gráficos. Por lo tanto, si un juego se crea con varias opciones de personalización y optimización en mente, gran parte del trabajo de prueba del juego de PC se centra en asegurarse de que cada jugador con el #[em hardware] compatible con el juego pueda elegir las opciones de personalización (o configurarlas automáticamente) para aprovechar al máximo la experiencia.
              br
              br
              |Además, los juegos de escritorio a menudo aprovechan los teclados grandes al admitir docenas de combinaciones de teclas. El trabajo de un probador de juegos de computadora es asegurarse de que estos comandos funcionan de manera consistente en computadoras con diferentes nombres y composiciones de teclas (por ejemplo, dispositivos macOS, Linux y Windows).
          .col-lg-3: img(src='@/assets/curso/temas/31.png', alt='')
      .p-4(titulo=" Consola" :icono="require('@/assets/curso/temas/28.svg')" style="background-color: #E8EAFF")
        .row
          .col-lg-9.mb-4.mb-lg-0
            h5 Consola
            p Los dos aspectos únicos más importantes de la revisión por parte de un probador de consolas de juegos son: 1) garantizar el cumplimiento y la compatibilidad con los estándares de los fabricantes de consolas; 2) brindar una experiencia de juego uniforme en todas las plataformas y generaciones de consolas. En el primer caso, Xbox, Sony y Nintendo tienen pautas estrictas sobre los parámetros y el contenido de los juegos que se pueden ejecutar en su plataforma, por lo que los evaluadores deben asegurarse de que el producto cumpla con todos los requisitos.
              br
              br
              |En lo que respecta a la jugabilidad multiplataforma y multi generacional, recientemente hemos visto un ejemplo de trabajo deficiente por parte de un probador de videojuegos de PlayStation con el lanzamiento de Cyberpunk 2077 en PS4. Los desarrolladores tienen un trabajo muy difícil para asegurarse que su aplicación se ejecute tanto en las consolas de generación anterior más débiles, como en la próxima generación, sin mencionar los lanzamientos multiplataforma que son varias veces más complejos.
              br
              br
              |A su vez, un probador de juegos funcional puede pasar meses eliminando los errores y problemas de rendimiento que surgen antes y después del lanzamiento.
          .col-lg-3: img(src='@/assets/curso/temas/32.png', alt='')
      .p-4(titulo=" Móvil" :icono="require('@/assets/curso/temas/29.svg')" style="background-color: #E8EAFF")
        .row
          .col-lg-9.mb-4.mb-lg-0
            h5 Móvil
            p Una de las mayores dificultades en el desarrollo para dispositivos móviles es hacer uso del espacio de pantalla limitado, por lo que cualquier persona que pruebe juegos móviles de AB debe trabajar duro para verificar que los jugadores puedan acceder a todas las funciones del juego incluso en las pantallas de teléfonos inteligentes más pequeñas.
              br
              br
              |Otra peculiaridad de estas aplicaciones es que suelen tener funciones multijugador y de redes sociales, que son notoriamente difíciles de desarrollar correctamente. Por lo tanto, las pruebas de carga de juegos móviles y la evaluación multiplataforma son parte integral de la experiencia de control de calidad móvil tradicional.
              br
              br
              |Por último, es más probable que las aplicaciones móviles utilicen código y elementos de fuente abierta que otras plataformas, lo que las deja vulnerables a piratas informáticos y actores malintencionados. Los desarrolladores a menudo desconocen estos problemas, pero el probador de control de calidad del juego móvil debe estar atento para encontrar y cubrir cualquier vulnerabilidad.
          .col-lg-3: img(src='@/assets/curso/temas/33.png', alt='')
      .p-4(titulo=" VR/AR/MR" :icono="require('@/assets/curso/temas/30.svg')" style="background-color: #E8EAFF")
        .row
          .col-lg-9.mb-4.mb-lg-0
            h5 VR/AR/MR
            p Las aplicaciones inmersivas presentan desafíos únicos para los probadores, pero que se pueden superar. Por ejemplo, el elemento de movimiento de la mayoría de los juegos de realidad virtual puede causar mareos y mareos en algunos jugadores, lo que los desarrolladores a menudo no tienen en cuenta. 
              br
              br
              |Además de eso, quienes prueban los juegos de realidad virtual deben asegurarse de que el juego transmita adecuadamente las recomendaciones de seguridad, como despejar el área donde el usuario está jugando. De lo contrario, existe la posibilidad de que se lastimen.
          .col-lg-3: img(src='@/assets/curso/temas/34.png', alt='')



























      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass">
.bg-1
  background-image: url('../assets/curso/temas/bg-1.png')
  background-position: 100%
  background-repeat: no-repeat
  background-size: cover
.bg-2
  background-image: url('../assets/curso/temas/bg-2.svg')
  background-position: 100%
  background-repeat: no-repeat
  background-size: cover
.bg-3
  background-image: url('../assets/curso/temas/bg-3.svg')
  background-position: 100%
  background-repeat: no-repeat
  background-size: contain
</style>
