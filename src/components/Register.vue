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
              <p class="login-card-description">Completa con tus datos</p>
              <form @submit.prevent="registerUser">
                <div class="form-group">
                  <input
                    type="text"
                    id="username"
                    class="form-control"
                    placeholder="Nombre de usuario"
                    v-model="register.username"
                    required
                  />
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    placeholder="Nombre"
                    v-model="register.name"
                    required
                  />
                  <input
                    type="text"
                    id="surname"
                    class="form-control"
                    placeholder="Apellidos"
                    v-model="register.surname"
                    required
                  />
                </div>
                <div class="form-group mb-4">
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    placeholder="**********"
                    v-model="register.password"
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
                ¿Ya tienes una cuenta?
                <router-link to="/login" class="text-reset bold"
                  >Inicia sesión</router-link
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
    register: {
      name: "",
      surname: "",
      username: "",
      password: "",
    },
  }),
  methods: {
    async registerUser() {
      try {
        let response = await this.$http.post("/register", this.register);
        console.log(response);
        let token = response.data.token;
        if (token) {
          this.$router.push("/");
          swal("Success", "Registration correctamente", "success");
        } else {
          swal("Error", "Algo fue mal...", "Error");
        }
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          swal("Error", error.data.message, "error");
        } else {
          swal("Error", error.data.err.message, "error");
        }
      }
    },
  },
};
</script>
<style lang="scss">
@import "../assets/scss/login.scss";
</style>
