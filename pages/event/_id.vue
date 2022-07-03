<template>
  <div>
    <carousel-component :images="event.event_images" />
    <div id="details" class="container mt-4">
      <bread-crumb :crumbs="crumbs" @selected="selected" />
      <h1 class="mt-2 mb-2">
        {{ event.name }}
        <br />
      </h1>

      <!-- <div class="label inline text-danger">{{ event.event_type.name }}</div> -->
      <hr />
      <div class="row mt-4">
        <!-- description -->
        <div id="presentation" class="col-md-8 col-sm-12 text-justify">
          <div class="lead">
            {{ event.description }} 
          </div>
          <div class="mt-3 text-muted lead">
            <!-- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nihil quaerat, voluptas quo quam non quasi nobis magnam deleniti, odit dicta maxime, error veniam accusamus! Quo eveniet ex ullam aliquid. -->
            {{ event.info }}
        </div>
          <br />

          <!-- Collapsed content -->
        </div>
        <!-- put a line and the thimbnail of the card -->
        <div id="side-info" class="col-md-4 col-sm-12">
          <p class="lead text-danger mb-0">
            Event information
          </p>
          <ul class="lead text-danger pl-0">
            <li>
              <mark class="text-danger">
              <i class="fa-solid fa-calendar-day"></i>
                {{ getDateTime(event.datetime) }}</mark>
            </li>
            <li class="mt-1">
              <mark>
              <nuxt-link
                class="text-danger text-decoration-underline"
                :to="`/poi/${event.poi_id}`"
              >
                <!-- diventerà nuxt link to poi -->
                <i class="fa-solid fa-location-dot"></i>
                <!-- <mark> -->
                {{ event.point_of_interest.name }}
                <!-- </mark> -->
              </nuxt-link>
              </mark>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#presentation {
  text-align: justify;
}
#presentation:after {
  text-align: justify;
}
@media screen and (max-width: 800px) {
  .row {
    display: flex;
    flex-direction: column-reverse;  
  }
}
</style>

<script>
// import CustomPage from '~/components/CustomPage.vue'
import "../../assets/style.css";
import "../../assets/details.css";
import CarouselComponent from "~/components/CarouselComponent.vue";
import BreadCrumb from "~/components/BreadCrumb.vue";

export default {
  name: "EventsPage",
  components: {
    CarouselComponent,
    BreadCrumb,
  },
  data() {
    return {};
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params;
    const { data } = await $axios.get(`api/events/event/${id}`);
    return {
      event: data,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Events", path: "/events" },
        { name: data.name, path: "" },
      ],
    };
  },
  methods: {
    selected(crumbPath) {
      this.$router.push(crumbPath);
    },
    getDateTime(datetime) {
      var date = new Date(datetime);
      var d =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      var time =
        date.getHours() +
        ":" +
        ((date.getMinutes() < 10 ? "0" : "") + date.getMinutes());
      return " " + d; //+ " "+ time
    },
  },
};
</script>
