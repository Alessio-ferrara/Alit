<template>
  <div id="page" class="container-fluid">
    <div class="container">
      <div class="text-center display-4 mt-4">
        {{ contact.title }}
      </div>
      <p class="text-center text-muted mb-3">
        Do you have any questions? We would love to hear from you!
      </p>
      <bread-crumb :crumbs="crumbs" @selected="selected" />
      <hr />
      <contact-form></contact-form>
    </div>
  </div>
</template>

<script>
import ContactForm from "~/components/ContactForm.vue";
import "../assets/style.css";
import BreadCrumb from "~/components/BreadCrumb.vue";

export default {
  name: "ContactUsPage",
  components: {
    ContactForm,
    BreadCrumb
},
  methods: {
    selected(crumbPath) {
      this.$router.push(crumbPath);
    },
  },
  async asyncData({ route, $axios }) {
    //Retrieving the content's data from the database content table, passing the page as a parameter of the request.
    const { data } = await $axios.get("api/content/contact_us");
    return {
      contact: data,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Contact us", path: "/contact_us" },
      ],
    };
  },
  head() {
    return {
      title: "Contact us Dua Tiranën",
      meta: [
        { charset: "utf-8" },
        {
          hid: "description",
          name: "description",
          content:
            "If you have any questions or doubts, contact us here and our team of Dua Tiranën will reach out to you immediately to help.",
        },
      ],
    };
  },
};
</script>