<template>
  <div>
    <carousel-component :images="poi.poi_images" />
  </div>
</template>

<style scoped></style>

<script>
// import CustomPage from '~/components/CustomPage.vue'
import "../../assets/style.css";
import "../../assets/details.css";
import CarouselComponent from "~/components/CarouselComponent.vue";

export default {
  name: "PoiPage",
  components: {
    CarouselComponent,
  },
  data() {
    return {};
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params;
    const { data } = await $axios.get(`api/pois/poi/${id}`);
    console.log(data)
    return {
      poi: data,
    };
  },
};
</script>
