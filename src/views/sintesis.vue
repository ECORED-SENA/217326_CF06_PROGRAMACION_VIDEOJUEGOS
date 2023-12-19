<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .bg-sintesis.p-1.py-5
      p.mb-2.text-center En el siguiente esquema se resumen los pasos y temas claves para aplicar técnicas de testeo y pruebas para los videojuegos:


      .row.justify-content-center
        .col-lg-12.mb-5
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="La imagen es un diagrama del proceso de pruebas en el desarrollo de videojuegos y entornos interactivos, que destaca el “Informe de errores” como un procedimiento estructurado de cinco pasos dentro de las pruebas. Estos pasos abarcan desde la descripción concisa del problema y la recopilación de información general, hasta instrucciones para reproducir el error, comparación de resultados y solicitud de detalles adicionales. El diagrama también menciona herramientas como “Test Runner” y categorías como “No Reproducible”, así como pruebas a nivel de sistema y de producción, lo que sugiere un enfoque detallado y metódico para garantizar la calidad del software.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
