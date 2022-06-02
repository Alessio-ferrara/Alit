<template>
  <div class="container-fluid w-50 mt-5 pt-5">
    <h4 class="lead text-center text-black">{{ contact.title }}</h4>
      
    <contact-form></contact-form>
  </div>
</template>


<script>
import ContactForm from '~/components/ContactForm.vue'

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