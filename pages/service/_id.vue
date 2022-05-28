<template>
  <div id="page">
    <div>
      <div v-for="(service, serviceIndex) of services" :key="`service${serviceIndex}`" class="row">
        <div class="card">
          <p>
            {{service.name}}
          </p>
        </div>
      </div>
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
      services : data.services
    }
  }
};
</script>
