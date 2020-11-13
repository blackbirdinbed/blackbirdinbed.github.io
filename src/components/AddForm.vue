<template>
  <b-container class="mt-5 add-form">
    <b-row>
      <b-col cols="12" md="5" class="mt-5">
        <b-form @submit.prevent="addAnimation">
          <b-form-select
            v-model="animation.sectionId"
            :options="sections"
            class="mb-3"
            required
          ></b-form-select>
          <b-form-input
            v-model="animation.title"
            placeholder="Título de la animación"
            class="mb-3"
            required
          ></b-form-input>
          <b-form-input
            v-model="animation.subtitle"
            placeholder="Subtítulo de la animación"
            class="mb-3"
            required
          ></b-form-input>
          <b-form-textarea
            id="textarea"
            class="mb-3"
            v-model="animation.details"
            placeholder="Descripción de la animación (para poner negritas cursivas o código utiliza las etiquetas html <span class='bold'>, <span class='italic'> y <code> respectivamente)"
            rows="6"
            max-rows="10"
            required
          ></b-form-textarea>
          <b-form-input
            v-model="animation.url"
            placeholder="URL de la animación"
            class="mb-3"
            required
          ></b-form-input>
          <b-button
            type="submit"
            variant="secondary"
            class="form-button mt-3 mb-5"
            >Enviar</b-button
          >
        </b-form>
      </b-col>
      <b-col cols="12" md="7">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets6.lottiefiles.com/packages/lf20_scpucyck.json"
        >
        </lottie-player>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import swal from "sweetalert";
export default {
  data: () => ({
    animation: {
      sectionId: null,
      title: "",
      subtitle: "",
      details: "",
      url: "",
    },
    sections: [
      {
        value: null,
        text: "Selecciona una sección",
      },
    ],
  }),
  created() {
    this.$http
      .get("/sections")
      .then((response) => {
        if (
          response.data.sections !== undefined &&
          response.data.sections.length
        ) {
          response.data.sections.forEach((section) => {
            let item = {
              value: section.id,
              text: section.name,
            };
            this.sections.push(item);
          });
        }
      })
      .catch((err) => {
        swal({
          text: "Imposibla cargar las secciones...",
          icon: "error",
        });
        console.log(err.response);
      });
  },
  methods: {
    addAnimation() {
      this.$http
        .post(`/animation/new`, this.animation)
        .then(() => {
          this.animation = {
            sectionId: null,
            title: "",
            subtitle: "",
            details: "",
            url: "",
          };
          swal({
            text: "Animación creada!",
            icon: "success",
          });
        })
        .catch((err) => {
          swal({
            text: "Algo fue mal...",
            icon: "error",
          });
          console.log(err.response);
        });
    },
  },
};
</script>
<style lang="scss">
@import "../assets/scss/login.scss";
</style>
