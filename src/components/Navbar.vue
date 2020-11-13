<template>
  <div class="container-custom navbar">
    <b-navbar toggleable="md" type="dark" variant="primary" class="container">
      <b-navbar-brand class="" href="#">
        <img
          class="navbar-logo"
          src="../assets/images/logos/white_logo_transparent_background.png"
          alt="Inamutex"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/sections">Explora</b-nav-item>
          <b-nav-item href="/who">¿Quiénes somos?</b-nav-item>
          <b-nav-item href="/add" v-if="roleId === 2">Añadir</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="username !== 0">Hola, {{ username }}</b-nav-item>
          <b-button
            v-if="userId === 0"
            href="/login"
            class="my-2 my-sm-0"
            type="submit"
            >Log in</b-button
          >
          <b-button
            v-else
            v-on:click="logOut()"
            class="my-2 my-sm-0"
            type="submit"
            >Log out</b-button
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import "../assets/scss/navbar.scss";
import { TokenUtilities } from "../router/token-utilities";
export default {
  data: () => ({
    username: TokenUtilities.getUsername(),
    userId: TokenUtilities.getUserId(),
    roleId: TokenUtilities.getRoleId()
  }),
  methods: {
    logOut() {
      TokenUtilities.logOut();
      location.reload();
    },
  },
};
</script>
