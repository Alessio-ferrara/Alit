<template>
  <div>
    <carousel-component :images="event.event_images" />
    <div id="details" class="container mt-4">
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
            <div class="collapse mt-3 text-muted" id="moreDetails">
              {{event.info}}
            </div>
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
              <!-- diventerà nuxt link to poi -->
              <i class="fa-solid fa-location-dot"></i>
              {{event.point_of_interest.name}}
            </li>
          </ul>
        </div>
        
        <div class="row">
          <div class="col-md-8 col-sm-12">
            <a
              class="col-lg-3 btn btn-danger"
              data-mdb-toggle="collapse"
              href="#moreDetails"
              role="button"
              aria-expanded="false"
              aria-controls="moreDetails"
            >
              <i class="fa fa-circle-info"></i>
              Show more details
            </a>
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
  methods: {
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
