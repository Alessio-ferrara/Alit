<template>
  <div class="mb-3 container ml-3 mr-3">
    <form class="" @submit.prevent="handleSubmit" @reset="onReset">
      <div class="row">
        <div class="input-group mb-3 col">
          <input
            id="name"
            placeholder="Full name"
            type="text"
            v-model="name"
            class="form-control rounded-5"
            required
          />
        </div>
        <div class="input-group mb-3 col">
          <input
            placeholder="Email"
            id="email"
            type="email"
            v-model="email"
            class="form-control rounded-5"
            required
          />
        </div>
      </div>
      <div class="input-group mb-3 mt-3">
        <input
          placeholder="Subject"
          id="subject"
          type="text"
          v-model="subject"
          class="form-control"
          required
        />
      </div>

      <div class="input-group mb-3">
        <textarea
          placeholder="Message..."
          id="message"
          v-model="message"
          class="form-control"
          rows="6"
          max-rows="10"
          required
        ></textarea>
      </div>
      <div class="align-center justify-center text-center">
        <button
          type="submit"
          value="submit"
          class="btn btn-danger btn-rounded mb-3"
        >
          Submit
          <i class="fas fa-solid fa-arrow-right"></i>
        </button>
        <br/>
        <!-- <a class="btn btn-light btn-sm" type="reset" value="reset" >Reset Fields</a> -->
        <!-- <button type="reset" value="reset" class="btn rounded-pill btn-danger">
          Reset
        </button> -->
      </div>
    </form>
  </div>
</template>

<style scoped>
.input-group {
  width: auto;
}
.input-group-text {
  background-color: rgb(249, 49, 82);
  color: white;
}
</style>

<script>
import axios from "axios";

export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    onSubmit(event) {
      axios.post("/api/contact-us", {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      });
    },
    onReset(event) {
      event.preventDefault();
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },
  },
};
</script>
