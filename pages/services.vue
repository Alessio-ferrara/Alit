<template>
  <div id="page" class="container-fluid">
    <div class="container">
      <!-- passing everything to the component that will automatically display all the event groups at the top and elle the events fetched -->
      <div class="text-center display-4 mt-4">
        Services
        <!-- shall display the eventItem.name whose index == the one received from props -->
      </div>
      <p
        class="text-center text-muted mb-3"
      >Select a service to get useful informations and contacts</p>
      <bread-crumb :crumbs="crumbs" @selected="selected" />
      <grid-cards :items="services" :name="'service'" />
    </div>
  </div>
</template>

<style scoped>
#EventGroup {
  max-height: 100vh;
}
</style>

<script>
import BreadCrumb from '~/components/BreadCrumb.vue';
// import CustomPage from '~/components/CustomPage.vue'
import '../assets/style.css';
import GridCards from '../components/GridCards.vue';

export default {
  components: { GridCards, BreadCrumb },
  name: 'ServicesPage',
  data() {
    return {}
  },
  methods: {
    selected(crumbPath) {
      this.$router.push(crumbPath);
    },
  },
  async asyncData({ $axios }) {
    // get all the data from the backend and pass it to the component in order to be printed
    const { data } = await $axios.get('api/services/');
    console.log(data)
    return {
      services : data,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Services", path: "" },
      ],
    }
  },
}
</script>
