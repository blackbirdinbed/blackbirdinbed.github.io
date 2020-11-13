<template>
  <div class="dashboard">
    <Navbar />
    <Who />
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Who from "../components/Who";
import Footer from "../components/Footer";
export default {
  beforeCreate: function() {
    document.body.className = 'home';
  },
  components: {
    Navbar,
    Who,
    Footer
  }
};
</script>
