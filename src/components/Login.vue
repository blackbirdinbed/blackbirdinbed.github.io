<template>
  <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div class="container">
      <div class="card login-card">
        <div class="row no-gutters">
          <div class="col-md-5 card-left">
            <img
              src="../assets/images/login.png"
              alt="login"
              class="card-img-top login-img"
            />
          </div>
          <div class="col-md-7 d-flex justify-content-center">
            <div class="card-body">
              <div class="brand-wrapper">
                <img
                  src="../assets/images/logos/logo_transparent_background.png"
                  alt="logo"
                  class="logo"
                />
              </div>
              <p class="login-card-description">Inicia sesión para continuar</p>
              <form @submit.prevent="loginUser">
                <div class="form-group">
                  <input
                    type="text"
                    id="username"
                    class="form-control"
                    placeholder="Nombre de usuario"
                    v-model="login.username"
                    required
                  />
                </div>
                <div class="form-group mb-4">
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    placeholder="**********"
                    v-model="login.password"
                    required
                  />
                </div>
                <input
                  name="login"
                  id="login"
                  class="btn btn-block login-btn mb-4"
                  type="submit"
                  value="Entrar"
                />
              </form>
              <p class="login-card-footer-text">
                ¿Aún no tienes una cuenta?
                <router-link to="/register" class="text-reset bold"
                  >Regístrate</router-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import swal from "sweetalert";
export default {
  data: () => ({
    login: {
      username: "",
      password: "",
    },
  }),
  methods: {
    async loginUser() {
      try {
        let response = await this.$http.post("/login", this.login);
        console.log(response.data);
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          swal({
            text: "Bienvenido!",
            icon: "success",
          });
          this.$router.push("/");
        } else {
          swal({
            text: "Ups...",
            icon: "error",
          });
        }
      } catch (err) {
        swal({
          text: "Algo fue mal...",
          icon: "error",
        });
        console.log(err.response);
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/login.scss";
</style>
