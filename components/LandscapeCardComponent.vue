<template>
  <span>
    <!-- link passing all the info of the selected item to the  -->
    <div v-if="name == 'itinerary'" class="card h-200">
      <div class="card-body row border-3">
        <div class="col-md-8 border-right">
          <p class="card-title text-black display-6">{{ item.name }}</p>
          <p class="card-text text-muted">
            <span class="badge bg-danger text-white rounded-pill p-2">{{item.duration }} hours</span><br>
            <span v-if="name == 'itineraries'" class="text-primary lead"></span>
              <br />
              {{ item.description }}
              <br />
          </p>
        </div>
        <div class="col-md-4 border-left">
          <div class="row">
           <p class="card-text text-muted" v-if="item.point_of_interests[0]">
             <i style = "color:red;" class="fa fa-flag"></i><br>{{item.point_of_interests[0].name}}<br>
           |<br>
          |<br>
          |<br>
          |<br>
          |</p>
          </div>

          <div class="row">
           <p class="card-text text-muted" v-if="item.point_of_interests[1]">
            <i style = "color:red;" class="fa fa-flag flag-mr"></i><br> {{item.point_of_interests[1].name}}</p><br>
          </div>
        </div>
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
