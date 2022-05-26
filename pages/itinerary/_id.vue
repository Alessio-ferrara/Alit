<template>
  <!-- <div class="card w-50 container-fluid mt-5 pt-5 ">
    <div class="card-body row border-3">
      <div class="row">
      <h5 class="card-title lead text-black fw-semibold">{{ itinerary.name }}</h5>
        <hr />
        <div class="row">
          <div class="col-md-4">
            <span class="badge bg-danger text-white p-2 mb-3">{{itinerary.duration }} hours</span>
            <itinerary-component :items="itinerary.point_of_interests" :poi_start="itinerary.poi_start"  :poi_end="itinerary.poi_end" :name="'it'" />
          </div>
        <div id="itinerary" class="col-md-8 mt-5 pt-5">
          <div class="lead text-justify">
            {{itinerary.description}}</div>
        </div>
        </div>
      </div>
    </div>
  </div>-->
  <div>
    <carousel-component :images="itinerary.poi_images" />
    <div id="details" class="container mt-4">
      <h1 class="mt-2 mb-2">
        {{ itinerary.name }}
        <br />
      </h1>
      <!-- <div class="label inline text-danger">{{ event.event_type.name }}</div> -->
      <hr />
      <div class="row mt-4">
        <!-- description -->
        <div class="col-lg-8  col-sm-12">
          <div class="lead">
            {{itinerary.description}}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laborum nobis aspernatur ad ullam sed, vitae repudiandae velit magnam eos quos, perspiciatis aliquam dolores odit itaque et totam nulla saepe?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor iure rerum vel enim id ab praesentium, suscipit laboriosam incidunt modi assumenda a asperiores veritatis sapiente impedit dolores quia necessitatibus.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt assumenda culpa aliquid accusantium officia adipisci sit consequuntur, neque iste cupiditate magni nobis tempore quae recusandae, dignissimos vitae soluta facere consequatur!
            <!-- <div class="collapse mt-3 text-muted" id="moreDetails">
              More details that will be displayed on the website after the click of the
              user.
            </div>-->
          </div>
          <br />

        </div>
        <div id="side-info" class="col-lg-4 col-sm-12">
          <itinerary-component
              :items="itinerary.point_of_interests"
              :poi_start="itinerary.poi_start"
              :poi_end="itinerary.poi_end"
              :name="'it'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
span {
  display: inline-block;
  width: 75px;
}
#side-info{
  max-height: 20vh;
  margin-bottom: 10%;
  border-left: none;
}
</style>
<script>
// import CustomPage from '~/components/CustomPage.vue'
import "../../assets/style.css";
import "../../assets/details.css";
import ItineraryComponent from "~/components/ItineraryComponent";
import CarouselComponent from "~/components/CarouselComponent.vue";

export default {
  name: "ItineraryPage",
  components: {
    ItineraryComponent,
    CarouselComponent,
  },
  data() {
    return {};
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params;
    const { data } = await $axios.get(`api/itineraries/${id}`);
    console.log(data);
    return {
      itinerary: data,
    };
  },
};
</script>
