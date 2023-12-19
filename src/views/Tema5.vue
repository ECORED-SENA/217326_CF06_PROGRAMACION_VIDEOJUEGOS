<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Emprendimiento tecnológico
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p El emprendimiento tecnológico es la creación y desarrollo de nuevas empresas o startups que se centran en innovaciones tecnológicas. Estas empresas buscan resolver problemas o satisfacer necesidades a través de la tecnología, y pueden abarcar una amplia gama de industrias como la informática, biotecnología, robótica, inteligencia artificial, y más.
        .tarjeta(style="background-color: #ADB3F3 ").p-4
          p.mb-0 En el núcleo del emprendimiento tecnológico se encuentra la innovación. Las startups en este campo a menudo se basan en descubrimientos tecnológicos y buscan introducir productos o servicios novedosos o mejorar significativamente los ya existentes. Este enfoque innovador no está exento de desafíos, especialmente en términos de financiación. Las empresas emergentes tecnológicas generalmente requieren una inversión considerable para desarrollar y comercializar sus productos, recurriendo a fuentes como capital de riesgo, inversores ángeles, financiamiento colectivo y subvenciones gubernamentales.
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/68.png', alt='')
    p.mb-5(data-aos='fade-right') Para profundizar más sobre el emprendimiento tecnológico, puede ver el siguiente video.
    .video-adorno.color--1.mn.p-5.mb-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.1  El proceso emprendedor
    p.mb-5(data-aos='fade-right') El proceso emprendedor es una secuencia de pasos que los emprendedores siguen para transformar una idea en una empresa viable. Este proceso puede variar en función del tipo de negocio y del mercado, pero generalmente incluye las siguientes fases:
    .video-adorno.color--2.mn.p-5.mb-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.2  Identificación y evaluación de oportunidades de negocio
    p.mb-5(data-aos='fade-right') La identificación y evaluación de oportunidades de negocio son procesos clave en el emprendimiento y la gestión empresarial. Estas etapas son fundamentales para el éxito de cualquier empresa, ya que permiten dirigir esfuerzos y recursos hacia opciones prometedoras y sostenibles a largo plazo. A continuación, se explica en detalle:
    .video-adorno.color--3.mn.p-5.mb-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video
    Separador|
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.3  Monetización
    p.mb-5(data-aos='fade-right') La monetización es un término ampliamente utilizado en el ámbito empresarial y digital, que se refiere al proceso de convertir algo en dinero o generar ingresos a partir de un activo, servicio, producto o cualquier otra entidad que inicialmente no producía beneficios económicos directos. Hay varias estrategias y modelos de monetización, dependiendo del tipo de negocio o actividad. Algunos de los enfoques más comunes se presentan en el siguiente video:
    .video-adorno.color--4.mn.p-5.mb-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video


</template>

<script>
export default {
  name: 'Tema5',
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
