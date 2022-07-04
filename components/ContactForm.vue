<template>
  <!-- We use this component to display the contact form -->
  <div class="container">
    <div class="row mb-3 mt-3 ml-3 mr-3 pb-3 gx-3">
      <form
        class="col-lg-6 mt-3 card bg-white rounded-5"
        @submit="onSubmit"
        method="post"
      >
        <div class="card-header text-center text-muted lead h4">Reach out by filling in the form below.</div>

        <!-- code to display field validation errors -->
        <span class="form-error" v-if="e.name">{{ e.name }}</span>
        <div class="col-xl-6 col-12 mr-3 mt-3">
          <div class="input-group mb-3">
            <!-- we bind the input field to the model attribute -->
            <input
              id="name"
              type="text"
              class="form-control rounded-5"
              placeholder="Name"
              v-model="contact.name"
              aria-label="name"
              aria-describedby="basic-addon1"
              required
            />
          </div>
        </div>

        <span class="form-error" v-if="e.email">{{ e.email }}</span>
        <div class="col-xl-6 col-12">
          <div class="input-group mb-3">
            <input
              id="email"
              v-model="contact.email"
              type="email"
              class="form-control rounded-5"
              placeholder="E-mail"
              aria-label="email"
              aria-describedby="basic-addon1"
              required
            />
          </div>
        </div>

        <span class="form-error" v-if="e.subject">{{ e.subject }}</span>
        <div class="col-12">
          <div class="input-group mb-3">
            <input
              id="subject"
              type="text"
              v-model="contact.subject"
              class="form-control rounded-5"
              placeholder="Subject"
              aria-label="subject"
              aria-describedby="basic-addon1"
              required
            />
          </div>
        </div>

        <span class="form-error" v-if="e.message">{{ e.message }}</span>
        <div class="col-12 mb-0">
          <div class="md-form mb-4 pink-textarea active-pink-textarea">
            <textarea
              id="message"
              v-model="contact.message"
              placeholder="Message..."
              class="md-textarea form-control rounded-5"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div class="col-12 mb-3 mt-3">
          <div class="align-center justify-center text-center mt-3">
            <button
              type="submit"
              value="submit"
              class="btn btn-block btn-danger btn-rounded"
            >
              Submit
              <i class="fas fa-solid fa-arrow-right"></i>
            </button>
            <br />
          </div>
        </div>
      </form>
      <div id="illustration" class="col-lg-6 col-12 text-center mt-3 p-3">
        <img
          src="@/static/images/avatar2.png"
          alt="..."
          class="img-thumbnail"
        />
        <img
          src="@/static/images/avatar1.png"
          alt="..."
          class="img-thumbnail"
        />
        <br />
        <p class="lead text-center">
          Our team is always waiting for feedback to help our users!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
span.form-error {
  color: red;
  padding: 4px;
  font-size: 14px;
}

textarea {
  height: 4vh !important;
}
img {
  max-width: 100%;
  max-height: 40vh;
  border: none;
}
#image {
  height: 50%;
  width: 100%;
}
.input-group {
  width: auto;
}
.input-group-text {
  background-color: rgb(249, 49, 82);
  color: white;
}
textarea {
  padding: 8px;
  border: 1px solid #aeaeae;
  resize: none;
  height: 15% !important;
  overflow: hidden;
  font-size: 16px;
}
#illustration img {
  background: none;
}
#illustration img:first-child {
  transform: scaleX(-1);
}
</style>

<script>
import axios from "axios";

export default {
  name: "ContactForm",
  data() {
    return {
      contact: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      e: {
        name: undefined,
        email: undefined,
        subject: undefined,
        message: undefined,
      },//initialize the form fields and error messages to be displayed
    };
  },
  methods: {
    onSubmit: async function (event) {
      event.preventDefault();
      try {
        await axios.post("/api/contact-us", { ...this.contact });
        // Redirect
        location.reload();
      } catch (error) {
        error.response.data.errors.forEach(
          (er) => (this.e[er.name] = er.message)
        );//catch and display errors
        
      }
    },
  },
};
</script>
