<template>
  <div class="container-custom footer pt-4 pb-4">
    <b-container>
      <b-row>
        <b-col cols="12" md="4">
          <p class="footer-header">Conócenos</p>
          <p class="footer-text">
            Echa un vistazo por el apartado de quiénes somos para descubrir
            quién hay detrás de esto.
            <router-link class="bold footer-link" to="/who">Conoce</router-link>
          </p>
        </b-col>
        <b-col cols="12" md="4">
          <p class="footer-header">Descúbrelas</p>
          <p class="footer-text">
            Paséate por nuestra lista de animaciones en aumento para aprender lo
            que aún te costaba un poco.
            <router-link class="bold footer-link" to="/sections">Descubre</router-link>
          </p>
        </b-col>
        <b-col cols="12" md="4">
          <p class="footer-header">Regístrate</p>
          <p class="footer-text">
            Crea un usuario en menos de lo que canta un gallo para poder
            comentar en las animaciones todo lo que quieras.
            <router-link class="bold footer-link" to="/register">Registro</router-link>
          </p>
        </b-col>
      </b-row>
      <hr />
      <img
        class="footer-logo"
        src="../assets/images/logos/dark_logo_transparent_background.png"
        alt="Inamutex"
      />
    </b-container>
  </div>
</template>

<script>
import "../assets/scss/footer.scss";
export default {};
</script>
