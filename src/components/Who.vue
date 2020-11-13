<template>
  <b-container class="home">
    <b-row>
      <b-col cols="12" md="5" class="mt-5">
        <p class="bold header-text">E.T.S.I.I.T. UGR</p>
        <p class="details-text">
          Este proyecto está desarrollado por mí, Iván Pérez Fernández, alumno
          del Grado en Ingeniería Informática por la Universidad de Granada.<br /><br />El
          objetivo de esta web es dar a los alumnos un mecanismo para que
          aprendan de manera más sencilla los contenidos de la asignatura
          <span class="bold">Sistemas Concurrentes y Distribuidos</span> como
          iniciativa del profesor de la Escuela José Miguel Mantas Ruiz.
        </p>
      </b-col>
      <b-col cols="12" md="7">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets5.lottiefiles.com/packages/lf20_fihetjef.json"
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
