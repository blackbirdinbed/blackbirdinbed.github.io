<template>
  <div class="dashboard">
    <Navbar />
    <Animation :id="id" :userId="userId" />
    <Footer class="mt-5" />
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Animation from "../components/Animation";
import Footer from "../components/Footer";
import { TokenUtilities } from '../router/token-utilities';
export default {
  beforeCreate: function() {
    document.body.className = "home";
  },
  components: {
    Navbar,
    Animation,
    Footer,
  },
  data: () => ({
    id: String,
    userId: TokenUtilities.getUserId()
  }),
  beforeMount: function() {
    const urlParams = new URLSearchParams(window.location.search);
    this.id = urlParams.get("id");
  },
};
</script>
