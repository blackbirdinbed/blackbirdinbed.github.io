<template>
  <b-container class="animation">
    <b-breadcrumb :items="items" class="breadcrumb mt-3 mb-4"></b-breadcrumb>
    <div class="container-animation mt-4">
      <p class="bold header-text">{{ animation.title }}</p>
      <p class="bold subheader-text">{{ animation.subtitle }}</p>
      <p class="details-text"></p>
      <div class="container-player mx-auto">
        <lottie-player controls mode="normal" :speed="speed" class="player">
        </lottie-player>
        <b-row
          class="container-controls rounded d-flex justify-content-between mt-2"
        >
          <b-col
            cols="12"
            md="4"
            class="container-speed d-flex justify-content-center"
          >
            <font-awesome-icon
              @click.prevent="setSpeed(-0.1)"
              type="button"
              :icon="['fas', 'caret-right']"
              size="2x"
              class="icon speed-minus"
            />
            <div class="separator bold">Velocidad</div>
            <font-awesome-icon
              @click.prevent="setSpeed(0.1)"
              type="button"
              :icon="['fas', 'forward']"
              size="lg"
              class="icon speed-plus"
            />
          </b-col>
          <b-col
            cols="12"
            md="4"
            class="container-size d-flex justify-content-center"
          >
            <font-awesome-icon
              @click.prevent="setSize(-50)"
              type="button"
              :icon="['fas', 'search-minus']"
              size="lg"
              class="icon size-minus"
            />
            <div class="separator bold">Tamaño</div>
            <font-awesome-icon
              @click.prevent="setSize(50)"
              type="button"
              :icon="['fas', 'search-plus']"
              size="lg"
              class="icon size-plus"
            />
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="container-comments mt-5 mx-auto">
      <b-form-textarea
        v-if="userId !== 0"
        id="textarea"
        class="mb-4"
        v-model="newComment"
        placeholder="Escribe algo y pulsa enter..."
        rows="3"
        max-rows="6"
        v-on:keyup.enter.prevent="addComment"
      ></b-form-textarea>
      <div v-for="(obj, key) in this.comments" :key="key">
        <b-card :header="obj.username" class="mb-4 pointer card-text"
          ><b-card-text>{{ obj.comment }}</b-card-text
          ><b-card-text class="small text-muted">{{
            new Date(obj.created_at).toLocaleDateString("es-ES", options)
          }}</b-card-text></b-card
        >
      </div>
    </div>
    <!-- <div v-for="(obj, key) in this.comments" :key="key">
      <b-card
        type="button"
        border-variant="primary"
        class="mb-4 pointer card-option"
        v-on:click="goToAnimation(`${obj.id}`)"
        ><b-card-text>{{ obj.title }}</b-card-text></b-card
      >
    </div> -->
  </b-container>
</template>

<script>
import swal from "sweetalert";
export default {
  data: () => ({
    player: HTMLElement,
    animation: [],
    comments: [],
    newComment: "",
    speed: 0.5,
    size: 700,
    options: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
    items: [
      {
        text: "Home",
        href: "/",
      },
      {
        text: "Secciones",
        href: "/sections",
      },
      {
        text: "Animación",
        active: true,
      },
    ],
  }),
  mounted() {
    this.$http
      .get(`/animation/${this.id}`)
      .then((response) => {
        this.animation = response.data.animation[0];
        if (
          response.data.comments !== undefined &&
          response.data.comments.length
        )
          this.comments = response.data.comments;
        this.player = document.querySelector("lottie-player");
        document.querySelector(
          ".details-text"
        ).innerHTML = this.animation.details;
        this.player.load(this.animation.url);
      })
      .catch((err) => {
        swal({
          text: "Algo fue mal...",
          icon: "error",
        });
        console.log(err.response);
      });
  },
  methods: {
    updateDetails() {
      document.querySelector(
        ".details-text"
      ).innerHTML = this.animation.details;
    },
    setSpeed(n) {
      const currentSpeed = this.speed;
      this.speed += n;
      if (this.speed < 0.1 || this.speed > 1.5) {
        this.speed = currentSpeed;
      } else {
        this.player.setSpeed(this.speed);
      }
    },
    setSize(n) {
      const currentSize = this.size;
      this.size += n;
      if (this.size < 600 || this.size > 1000) {
        this.speed = currentSize;
      } else {
        document.querySelector(
          ".container-player"
        ).style.width = `${this.size}px`;
      }
    },
    addComment() {
      const params = {
        comment: this.newComment,
        userId: this.userId,
      };

      this.$http
        .post(`/animation/${this.id}/new-comment`, params)
        .then((response) => {
          if (
            response.data.comments !== undefined &&
            response.data.comments.length
          ) {
            this.comments = response.data.comments;
            this.newComment = "";
            swal({
              text: "Comentario añadido!",
              icon: "success",
            });
          }
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
  props: {
    id: String,
    userId: Number,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/animation.scss";
</style>
