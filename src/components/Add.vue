<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-5"
          style="margin-top:70px;height:auto;padding-top:100px !important;"
          @submit.prevent="addAnimation"
        >
          <input
            type="text"
            id="section-id"
            class="form-control mb-5"
            placeholder="Section"
            v-model="login.sectionId"
            required
          />
          <input
            type="text"
            id="title"
            class="form-control mb-5"
            placeholder="Title"
            v-model="login.title"
            required
          />
          <input
            type="text"
            id="subtitle"
            class="form-control mb-5"
            placeholder="Subtitle"
            v-model="login.subtitle"
            required
          />
          <input
            type="text"
            id="details"
            class="form-control mb-5"
            placeholder="Details"
            v-model="login.details"
            required
          />
          <input
            type="text"
            id="data"
            class="form-control mb-5"
            placeholder="Data"
            v-model="login.data"
            required
          />

          <!-- Send button -->
          <center>
            <button class="btn btn-primary btn-block w-75 my-4" type="submit">
              Send
            </button>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  data() {
    return {
      animation: {
        sectionId: "",
        title: "",
        subtitle: "",
        details: "",
        data: "",
      },
    };
  },
  methods: {
    async addAnimation() {
      try {
        let response = await this.$http.post("/add", this.animation);
        console.log(response);
      } catch (err) {
        swal("Error", "Something Went Wrong", "error");
        console.log(err.response);
      }
    },
  },
};
</script>
