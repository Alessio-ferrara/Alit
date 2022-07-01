<template>
  <span>
    <!-- link passing all the info of the selected item to the  -->
    <div v-if="name == 'event'" class="card h-100">
      <nuxt-img
        v-bind:src="'/' + item.main_image"
        class="card-img-top"
        alt="Image"
        format="webp"
      />
      <div class="card-body">
        <h5 class="card-title lead text-center text-black">{{ item.name }}</h5>
        <p class="card-text text-center text-muted">
          <span class="text-danger lead">
            <!-- <i class="fas fa-solid fa-calendar-day"></i> -->
            <strong>{{ getDateTime(item.datetime) }}</strong>
            &nbsp;
          </span>
          <br />
          <span v-if="item.description">{{ item.description | truncate(200) }}</span>
        </p>
      </div>
    </div>
    <div v-if="name == 'poi'" class="card h-100">
       <nuxt-img
        v-bind:src="'/' + item.main_image"
        class="card-img-top"
        alt="Image"
        format="webp"
      />
      <div class="card-body">
        <h5 class="card-title lead text-center text-black">{{ item.name }}</h5>
        <p class="card-text text-center text-muted">
          <!-- control of all the attributes to display according to the type passed -->
          <span v-if="name == 'events'" class="text-primary lead">{{
            getDateTime(item.datetime)
          }}</span>
          <br />
          {{ item.description | truncate(200) }}
        </p>
      </div>
    </div>
    <div id="service-cards" v-if="name == 'service' && item.name != 'Emergecy numbers'" class="card d-flex">
      <div class="card-body align-items-center d-flex justify-content-center">
        <h4 class="card-title lead text-center text-black align-middle">
          {{ item.name }}
          <p class="card-text text-center text-danger">
            <i :class="item.icon"></i>
            <br />
          </p>
        </h4>
      </div>
    </div>
    <div id="service-cards" v-else-if="name == 'service'" class="card border border-danger d-flex">
      <div class="card-body align-items-center d-flex justify-content-center">
        <h4 class="card-title lead text-center text-black align-middle">
          {{ item.name }}
          <p class="card-text text-center text-danger">
            <i :class="item.icon"></i>
            <br />
          </p>
        </h4>
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
img {
  height: 300px;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card:hover {
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 20%), 0 4px 6px -2px rgb(0 0 0 / 15%) !important;
  background-color: rgb(247, 246, 246) !important;
}
#service-cards {
  height: 30vh;
}
#service-cards .card-title {
  font-size: 30px !important;
}
#service-cards:hover {
  background-color: rgb(247, 246, 246) !important;
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
