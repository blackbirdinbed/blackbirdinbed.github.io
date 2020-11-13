<template>
  <b-container class="sections">
    <b-breadcrumb :items="items" class="breadcrumb mt-3 mb-4"></b-breadcrumb>
    <div v-for="(obj, key) in this.objects" :key="key">
      <b-card
        type="button"
        border-variant="primary"
        class="mb-4 pointer card-option"
        v-on:click="goToAnimations(`${obj.id}`)"
        ><b-card-text>{{ obj.name }}</b-card-text></b-card
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
        active: true,
      },
    ],
  }),
  mounted() {
    this.$http
      .get("/sections")
      .then((response) => {
        this.objects = response.data.sections;
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
    goToAnimations(id) {
      this.$router.push({
        name: "section",
        query: {
          id: id,
        },
      });
    },
  },
  props: {
    id: Number
  }
};
</script>

<style lang="scss"></style>
