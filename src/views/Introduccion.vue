<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .mn.bg-intro.p-5
      .tarjeta.p-4.mb-5(style="background-color: #E8EAFF")
        .row.justify-content-center.align-items-center.g-0
          .col-lg-2.col-7: img.img-tarjeta(src='@/assets/curso/temas/intro.png', alt='')
          .col-lg-10
            p.mb-0 Estimado aprendiz, continuando con este maravilloso aprendizaje, reflexione sobre lo siguiente: #[span.resaltado Antes de que una mariposa pueda tomar su primer vuelo, debe empujar y luchar para salir de un capullo. Sin este desafiante obstáculo, sería demasiado débil para sobrevivir en el mundo exterior.] ¿Qué tiene esto que ver con las pruebas de juego? Bueno, como una mariposa, cada juego debe someterse a una prueba seria que lo fortalezca antes de lanzarlo al mundo. Por lo anterior le invitamos a revisar el siguiente video para identificar el contexto de aprendizaje de este componente formativo:
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video
        
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.bg-intro
  background-image: url('../assets/curso/temas/bg-intro.svg')
  background-position: 100%
  background-repeat: no-repeat
  background-size: cover
</style>
