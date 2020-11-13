<template>
  <b-container class="section">
    <b-breadcrumb :items="items" class="breadcrumb mt-3 mb-4"></b-breadcrumb>
    <div v-for="(obj, key) in this.objects" :key="key">
      <b-card
        type="button"
        border-variant="primary"
        class="mb-4 pointer card-option"
        v-on:click="goToAnimation(`${obj.id}`)"
        ><b-card-text>{{ obj.title }}</b-card-text></b-card
      >
    </div>
  </b-container>
</template>

<script>
import swal from "sweetalert";
export default {
  data: () => ({
    objects: [],
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
        text: "Lista de animaciones",
        active: true,
      },
    ],
  }),
  mounted() {
    this.$http
      .get(`/sections/${this.id}`)
      .then((response) => {
        this.objects = response.data.animations;
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
    goToAnimation(id) {
      this.$router.push({
        name: "animation",
        query: {
          id: id,
        },
      });
    },
  },
  props: {
    id: String
  }
};
</script>

<style lang="scss"></style>
