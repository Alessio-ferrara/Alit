<template>
    <div id="page" class="container-fluid">
    <div class="container">
      <div class="text-center display-4 mt-4">
       {{ contact.title }}
      </div>

    <p class="text-center text-muted mb-3">
        Reach out for anything!
    </p>
    
    <hr />
      
    <contact-form></contact-form>

    </div>
  </div>
</template>


<script>
import ContactForm from '~/components/ContactForm.vue'
import '../assets/style.css';

export default {
    name: "ContactUsPage",
    components: {
        ContactForm,
    },
    async asyncData({ route, $axios }) {
        const { data } = await $axios.get(`api/content/contact_us`);
        return {
            contact: data,
        };
    }
};
</script>