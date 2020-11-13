<template>
  <div class="dashboard">
    <Navbar />
    <SectionAnimations :id="id" />
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import SectionAnimations from "../components/SectionAnimations";
import Footer from "../components/Footer";
export default {
  beforeCreate: function() {
    document.body.className = "home";
  },
  components: {
    Navbar,
    SectionAnimations,
    Footer,
  },
  data: () => ({
    id: String,
  }),
  beforeMount: function() {
    const urlParams = new URLSearchParams(window.location.search);
    this.id = urlParams.get("id");
  },
};
</script>
