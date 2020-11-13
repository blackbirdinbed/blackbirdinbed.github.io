<template>
  <div class="dashboard add">
    <Navbar />
    <AddForm />
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import AddForm from "../components/AddForm";
import Footer from "../components/Footer";
export default {
  components: {
    Navbar,
    AddForm,
    Footer
  }
};
</script>
<style lang="scss">
@import "../assets/scss/addForm.scss";
</style>
