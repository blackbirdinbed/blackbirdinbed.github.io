<template>
  <b-container class="home">
    <b-row>
      <b-col cols="12" md="5" class="mt-5">
        <p class="bold header-text">El aprendizaje definitivo</p>
        <p class="details-text">
          Descubre como aplanar la curva del aprendizaje en el ámbito de los
          Sistemas Concurrentes Distribuídos con el método más sencillo que
          existe. Date un paseo por las animaciones y coméntanos lo que no
          entiendas.
        </p>
        <div class="w-100 mt-5 text-center">
          <b-button href="/sections" variant="secondary" class="details-btn"
            >Descúbrelo</b-button
          >
        </div>
      </b-col>
      <b-col cols="12" md="7">
        <lottie-player
          autoplay
          mode="normal"
          src="https://assets1.lottiefiles.com/datafiles/6WfDdm3ooQTEs1L/data.json"
        >
        </lottie-player>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/scss/home.scss";
</style>
