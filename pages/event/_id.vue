<template>
  <div>
    <carousel-component :images="event.event_images" />
    <div class="container">
      
    </div>
  </div>
</template>


<script>
// import CustomPage from '~/components/CustomPage.vue'
import '../../assets/style.css';
import '../../assets/details.css';
import CarouselComponent from "~/components/CarouselComponent.vue";


export default {
  name: 'EventsPage',
  components: {
    CarouselComponent,
  },
  data() {
    return {}
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params;
    const { data } = await $axios.get(`api/events/event/${id}`);
    console.log(data)
    return {
      event: data,
    }
  },
}
</script>
