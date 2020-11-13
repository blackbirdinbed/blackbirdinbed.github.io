<template>
  <div class="dashboard">
    <Navbar />
    <Sections />
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Sections from "../components/Sections";
import Footer from "../components/Footer";
export default {
  beforeCreate: function() {
    document.body.className = 'home';
  },
  components: {
    Navbar,
    Sections,
    Footer
  }
};
</script>
