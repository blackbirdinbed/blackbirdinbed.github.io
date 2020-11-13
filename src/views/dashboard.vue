<template>
  <div class="dashboard">
    <Navbar />
    <Home />
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";
export default {
  beforeCreate: function() {
    document.body.className = 'home';
  },
  components: {
    Navbar,
    Home,
    Footer
  }
};
</script>
