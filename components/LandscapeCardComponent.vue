<template>
  <span>
    <!-- link passing all the info of the selected item to the  -->
    <div v-if="name == 'itinerary'" class="card h-200">
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
  name: "LandscapeCardComponent",
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
