<template>
  <!-- <div class="mb-3 row pb-3 container ml-3 mr-3">
    <form class="" @submit.prevent="handleSubmit" @reset="onReset">
      <div class="col-lg-4 mt-3">
        <div class="input-group mb-3">
          <input
            id="name"
            placeholder="Full name"
            type="text"
            v-model="name"
            class="form-control rounded-5"
            required
          />
        </div>
        <div class="input-group mb-3">
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
      <div class="col-lg-6 mt-3">
        <div class="input-group mb-3 mt-3">
          <input
            placeholder="Subject"
            id="subject"
            type="text"
            v-model="subject"
            class="form-control rounded-5"
            required
          />
        </div>
        <div class="input-group mb-3">
          <textarea
            placeholder="Message..."
            id="message"
            v-model="message"
            class="form-control rounded-5"
            required
          ></textarea>
        </div>
      </div>
      <div class="col-lg-">
        <div id="image" class="text-center mb-3 col-6">
      <img src="@/static/images/ok.png" alt="..." class="img-thumbnail" />
    </div>
      </div>
    <div class="row">

      <div class="align-center justify-center text-center">
        <button
          type="submit"
          value="submit"
          class="btn btn-danger btn-rounded mb-3"
        >
          Submit
          <i class="fas fa-solid fa-arrow-right"></i>
        </button>
        <br />
      </div>
        </div>
    </form>
  </div> -->
  <div class="container">
    <div class="row mb-3 mt-3 ml-3 mr-3 pb-3">
      <form
        class="col-lg-6 mt-3 card bg-white rounded-5"
        @submit.prevent="handleSubmit"
      >
        <div class="card-header text-center text-dark h4">Contact form</div>

        <div class="col-lg-6 col-12 mt-3">
          <div class="input-group mb-3 mt-3">
            <input
              id="name"
              type="text"
              class="form-control rounded-5"
              placeholder="Name"
              v-model="name"
              aria-label="name"
              aria-describedby="basic-addon1"
              required
            />
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="input-group mb-3">
            <input
              id="email"
              v-model="email"
              type="email"
              class="form-control rounded-5"
              placeholder="E-mail"
              aria-label="email"
              aria-describedby="basic-addon1"
              required
            />
          </div>
        </div>
        <div class="col-12">
          <div class="input-group mb-3">
            <input
              id="subject"
              type="text"
              v-model="subject"
              class="form-control rounded-5"
              placeholder="Subject"
              aria-label="subject"
              aria-describedby="basic-addon1"
              required
            />
          </div>
        </div>
        <div class="col-12 mb-0">
          <div class="md-form mb-4 pink-textarea active-pink-textarea">
            <textarea
              id="message"
              v-model="message"
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
      <div class="col-lg-6 col-12 text-center mt-3 pt-3">
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
        <p class="lead">
          Our team is always waiting for feedback to help our customers, we will
          contact you as soon as possible!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
