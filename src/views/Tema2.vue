<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Cómo iniciar las pruebas o #[em testing] en un videojuego
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0 En teoría, cualquiera puede aprender a probar un juego, incluso si no está capacitado para ser un ingeniero de control de calidad. Sin embargo, tener éxito y eficacia en las pruebas es otra cuestión, y los proyectos a gran escala generalmente necesitan evaluadores calificados para tener éxito. Por lo tanto, puede considerar contratar a estos profesionales o delegar las pruebas a una empresa con amplia experiencia en el campo.
          br
          br
          |Cualquiera que sea la opción que elija, el proceso de prueba será más o menos el mismo. Entendemos que las docenas de tipos de pruebas que enumeramos son únicas y requieren #[em software], metodología y conocimientos diferentes, pero las etapas de las pruebas suelen ser uniformes como se observa a continuación:
      .col-lg-5.col-7.d-lg-block.d-none(data-aos="fade-left"): img(src='@/assets/curso/temas/35.png', alt='')
    .mn.p-5.bg-4.mb-4
      .row.justify-content-center
        .col-lg-10
          PasosA.color-acento-contenido.mb-5(tipo="n")
            .row(titulo="").text-start
              .col-lg-3.mb-lg-0.mb-3.order-lg-2: img(src='@/assets/curso/temas/36.svg', alt='')
              .col-lg-9
                h4(style="color: #1425DD ") Planificación
                p Tienes que caminar antes de correr y las pruebas no son diferentes. En lugar de probar cuando surge la necesidad, puede hacer que el proceso sea más eficiente creando un plan integral con una lista de casos de prueba y cronología.
            .row(titulo="").text-start
              .col-lg-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/37.svg', alt='')
              .col-lg-9
                h4(style="color: #1425DD ") Pruebas
                p No hay mucho que decir sobre esta etapa. Una prueba puede durar entre unos minutos y varios días. No es raro que se realicen varias pruebas simultáneamente.
            .row(titulo="").text-start
              .col-lg-3.mb-lg-0.mb-3.order-lg-2: img(src='@/assets/curso/temas/38.svg', alt='')
              .col-lg-9
                h4(style="color: #1425DD ") Informes de errores y correcciones
                p Los ingenieros de control de calidad encuentran muchos tipos de errores en las pruebas de juegos y es su trabajo documentarlos todos. Los datos de la prueba y los errores/problemas identificados se empaquetan en un informe de errores y se envían a los desarrolladores para que los corrijan en una compilación futura.
            .row(titulo="").text-start
              .col-lg-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/39.svg', alt='')
              .col-lg-9
                h4(style="color: #1425DD ") Finalización y beta
                p Llega un punto en cada ciclo de desarrollo de juegos en el que un juego está más o menos completo y solo quedan algunos problemas menores. En este punto, algunos editores lanzan una versión beta y recopilan comentarios de las pruebas de los usuarios del juego, mientras que otros se enfocan en pulir el título por su cuenta. A veces, debido a limitaciones de tiempo, los juegos se lanzan con algunos problemas/errores menores sin resolver, pero las correcciones se implementan en una actualización posterior al lanzamiento.
    .titulotres.mb-4
      h3.mb-0 Evaluación y pruebas
    p.mb-5(data-aos='fade-right') Este apartado tiene como objetivo comentar las pruebas realizadas en el juego desarrollado. Las pruebas son un elemento fundamental en un desarrollo #[em software] y deben realizarse siempre para evitar fallos no deseados. Existen los siguientes tipos de pruebas: 
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/40.svg', alt='Texto que describa la imagen')
        h4.text-center Pruebas unitarias

        p.text-center Estas pruebas tienen como objetivo verificar la funcionalidad y estructura de cada componente individual de código realizado. Son pruebas a nivel de métodos codificados.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/41.svg', alt='Texto que describa la imagen')
        h4.text-center Pruebas de integración
        p.text-center Su objetivo es comprobar el correcto ensamblaje entre los distintos componentes del código, cubren la funcionalidad establecida y se ajustan, en mayor medida, a los requisitos funcionales.
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/42.svg', alt='Texto que describa la imagen')
        h4.text-center Pruebas de sistema
        p.text-center Están destinadas a probar el sistema como un todo y se centran en los requisitos no funcionales como por ejemplo la gestión de recursos, compatibilidad, usabilidad. Suelen estar enfocadas a la gestión de los recursos como el procesador o la memoria.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/43.svg', alt='Texto que describa la imagen')
        h4.text-center Pruebas de aceptación
        p.text-center Se usan para validar que el sistema cumple con el funcionamiento esperado y permitir al usuario del sistema que determine su aceptación sobre la funcionalidad y el rendimiento. 

</template>

<script>
export default {
  name: 'Tema2',
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
.bg-4
  background-image: url('../assets/curso/temas/bg-4.png')
  background-position: 100%
  background-repeat: no-repeat
  background-size: cover
</style>
