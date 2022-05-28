<template>
  <div id="page" class="container-fluid">
    <div class="container">
      <div class="text-center display-4 mt-4">{{name}}</div>
      <p class="text-center text-muted mb-3">
        View all the services under the 
        <strong class="text-italic">
        {{name}}
        </strong>
         category
      </p>
      <grid-cards :items="pois" :name="'poi'" />
    </div>
  </div>
</template>


<script>
// import CustomPage from '~/components/CustomPage.vue'
import '../../assets/style.css';
import '../../assets/details.css';
import CarouselComponent from "~/components/CarouselComponent.vue";


export default {
  name: 'ServicePage',
  components: {
  },
  data() {
    return {}
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params;
     const { data } = await $axios.get(`api/services/${id}`);
     console.log(data)
    return {
      services : data.services,
      name: data.name,
      icon: data.icon
    }
  }
};
</script>
