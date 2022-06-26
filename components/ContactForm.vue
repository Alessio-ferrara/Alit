<template>

  <div class="mb-3">

    <form class="input-field" @submit.prevent="handleSubmit" @reset="onReset">
      <div class="form-group">
        <input placeholder="Full name" id="name" type="text"  v-model="name" class="form-control" required />
      </div>

      <div class="form-group">
        <input placeholder="Email" id="email" type="email" v-model="email" class="form-control" required />
      </div>
      
      <div class="form-group">
        <input placeholder="Subject" id="subject" type="text" v-model="subject" class="form-control" required />
      </div>
      
      <div class="form-group">
        <textarea placeholder="Message" id="message" v-model="message" class="form-control" rows="4" max-rows="10" required ></textarea>
      </div>
      
      <button type="submit" value="submit" class="btn btn-primary"> Submit </button>
      <button type="reset" value="reset" class="btn btn-danger"> Reset </button>
    </form>

  </div>
</template>



<script>

  import axios from 'axios';

  export default {
    name: "ContactForm",
    data() {
      return {
          name: '',
          email: '',
          subject: '',
          message: ''
      }
    },
    methods: {
      onSubmit(event) {
        axios.post("/api/contact-us", {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      })
      },
      onReset(event) {
        event.preventDefault()
        this.name = ''
        this.email = ''
        this.subject = ''
        this.message = ''
      }
    }
  }
</script>
