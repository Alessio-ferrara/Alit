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
        <div class="col-md-8 col-sm-12">
          <div class="lead">
            {{event.description}} Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laborum nobis aspernatur ad ullam sed, vitae repudiandae velit magnam eos quos, perspiciatis aliquam dolores odit itaque et totam nulla saepe?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor iure rerum vel enim id ab praesentium, suscipit laboriosam incidunt modi assumenda a asperiores veritatis sapiente impedit dolores quia necessitatibus.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt assumenda culpa aliquid accusantium officia adipisci sit consequuntur, neque iste cupiditate magni nobis tempore quae recusandae, dignissimos vitae soluta facere consequatur!
          </div>
          <br />

          <!-- Collapsed content -->
        </div>
        <!-- put a line and the thimbnail of the card -->
        <div id="side-info" class="col-md-4 col-sm-12">
          <ul class="lead text-danger pl-0">
            <li>
              <i class="fa-solid fa-calendar-day"></i>
              <strong>{{getDateTime(event.datetime)}}</strong>
            </li>
            <li>
              <nuxt-link class="text-danger text-decoration-underline" :to="`/poi/${event.poi_id}`">
                <!-- diventerà nuxt link to poi -->
                <i class="fa-solid fa-location-dot"></i>
                <!-- <mark> -->
                {{event.point_of_interest.name}}
                <!-- </mark> -->
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="row">
          <div class="mt-3 text-muted lead">
            <!-- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nihil quaerat, voluptas quo quam non quasi nobis magnam deleniti, odit dicta maxime, error veniam accusamus! Quo eveniet ex ullam aliquid. -->
            {{event.info}}
          </div>
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
import BreadCrumb from '~/components/BreadCrumb.vue';


export default {
  name: 'EventsPage',
  components: {
    CarouselComponent,
    BreadCrumb,
  },
  data() {
    return {}
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
    }
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
