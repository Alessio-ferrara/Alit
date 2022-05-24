<template>
  <span>
    <!-- link passing all the info of the selected item to the  -->
    <div v-if="name == 'event'" class="card h-100">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
        class="card-img-top"
        alt="Image"
      />
      <div class="card-body">
        <h5 class="card-title lead text-center text-black">{{ item.name }}</h5>
        <p class="card-text text-center text-muted">
          <!-- control of all the attributes to display according to the type passed -->
          <span v-if="name == 'events'" class="text-danger lead">
            <i class="fas fa-solid fa-calendar-day"></i>
            <strong>{{ getDateTime(item.datetime) }}</strong>
            &nbsp;
          </span>
          <br />
          {{item.description | truncate 2}}
        </p>
      </div>
    </div>
    <div v-if="name == 'poi'" class="card h-100">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
        class="card-img-top"
        alt="Image"
      />
      <div class="card-body">
        <h5 class="card-title lead text-center text-black">{{ item.name }}</h5>
        <p class="card-text text-center text-muted">
          <!-- control of all the attributes to display according to the type passed -->
          <span v-if="name == 'events'" class="text-primary lead">{{
            getDateTime(item.datetime)
          }}</span>
          <br />
          {{ item.description }}
        </p>
      </div>
    </div>
    <div v-if="name == 'service'" class="card h-100">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
        class="card-img-top"
        alt="Image"
      />
      <!-- all configurations for all the different types of services we may have -->
      <!-- PHARMACY <div class="centered display-6">
        <i class="text-success fa-solid fa-hand-holding-medical"></i>
        <i class="text-success fa-solid fa-stethoscope"></i>
      </div> -->
      <!-- MONUMENT <div class="centered display-6">
        <i class="text-light fa-solid fa-landmark"></i>
      </div>  -->
      <!-- CINEMA <div class="centered display-6">
        <i class="text-light fa-solid fa-ticket"></i>
      </div>  -->
      <!-- WATER <div class="centered display-6">
        <i class="text-primary fa-solid fa-water"></i>
      </div>  -->
      <!-- SHOPPING <div class="centered display-6">
        <i class="text-secondary fa-solid fa-shop"></i>
      </div>  -->
      <!-- BAR <div class="centered display-6">
        <i class="text-secondary fa-solid fa-wine-glass"></i>
      </div>  -->
      <!-- PARK <div class="centered display-6">
        <i class="text-success fa-solid fa-tree"></i>
      </div>  -->
      <!-- METRO-TRAINS <div class="centered display-6">
        <i class="text-success fa-solid fa-train-subway"></i>
      </div>  -->
      <!-- RESTAURANT <div class="centered display-6">
        <i class="text-light fa-solid fa-utensils"></i>
      </div>  -->
      <!-- AIRPORT <div class="centered display-6">
        <i class="text-light fa-solid fa-plane"></i>
      </div>  -->
      <!-- <div class="display-6 centered">Centered</div> -->
      <div class="card-body">
        <h5 class="card-title lead text-center text-black">{{ item.name }}</h5>
        <p class="card-text text-center text-muted">
          <!-- control of all the attributes to display according to the type passed -->
          <span class="text-primary lead">{{ item.poi_type.name }}</span>
          <br />
          {{ item.description }}
        </p>
      </div>
    </div>
    <div v-if="name == 'itinerary'" class="card h-100">
      <img
          src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
          class="card-img-top"
          alt="Image"
      />
      <div class="card-body">
        <h5 class="card-title lead text-center text-black">{{ item.name }}</h5>
        <p class="card-text text-center text-muted">
          <!-- control of all the attributes to display according to the type passed -->
          <span v-if="name == 'itineraries'" class="text-primary lead"></span>
          <br />
          {{ item.description }}
          <br />
          <label>Duration :</label> {{item.duration }}
        </p>
      </div>
    </div>

  </span>
</template>

<style scoped>
.card {
  position: relative;
  text-align: center;
  color: white;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<script>
export default {
  name: "CardComponent",
  props: {
    item: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
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
