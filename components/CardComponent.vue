<template>
  <!--this component contains code cards into different pages-->
  <span>
    <!-- if the page we are displaying is events, we add to the card the following elements :
         image, name, datetime and description-->
    <div v-if="name == 'event'" class="card h-100">
      <nuxt-img
        v-bind:src="'/' + item.main_image"
        class="card-img-top"
        alt="Image"
        format="webp"
      />
      <div class="card-body">
        <h5 class="card-title lead text-center text-black">{{ item.name }}</h5>
        <p id="presentation" class="card-text text-center text-muted">
          <span class="text-danger lead">
            <!-- <i class="fas fa-solid fa-calendar-day"></i> -->
            <mark>{{ getDateTime(item.datetime) }}</mark>
            &nbsp;
          </span>
          <br />
          <!--the v-if here is used to avoid getting an error in
              case description is null and we try to truncate a null element-->
          <span v-if="item.description">{{
            item.description | truncate(200)
          }}</span>
        </p>
      </div>
    </div>
    <!-- if the page we are displaying is points of interest, we add to the card the following elements :
         image, name, datetime and description-->
    <div v-if="name == 'poi'" class="card h-100">
      <nuxt-img
        v-bind:src="'/' + item.main_image"
        class="card-img-top"
        alt="Image"
        format="webp"
        sizes="sm:100vw md:50vw lg:400px"
      />
      <div class="card-body">
        <h5 class="card-title lead text-center text-black">{{ item.name }}</h5>
        <p
          id="presentation"
          class="card-text text-center text-justify text-muted"
        >
          <br />
          {{ item.description | truncate(200) }}
        </p>
      </div>
    </div>

    <!-- this is used to display all service cards except the emergency numbers card because it is stylized in a different way-->
    <div
      id="service-cards"
      v-if="name == 'service' && item.name != 'Emergency numbers'"
      class="card d-flex"
    >
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
    <!-- displays emergency number service card-->
    <div
      id="service-cards"
      v-if="item.name == 'Emergency numbers' && name == 'service'"
      class="card border border-danger d-flex"
    >
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
/* #presentation{
    text-align: justify!important;
}
#presentation:after{
    text-align: justify!important;
} */
mark {
  color: rgba(249, 49, 82, 0.9);
  /* color: white; */
}
</style>

<script>
export default {
  name: "CardComponent",
  props: {
    item: {
      type: Object,
      required: true,
    }, //item contains all the data we need to display on the page
    name: {
      type: String,
      required: true,
    }, //name contains the type of card we want to display,
    // whether it is an event, a poi or a service
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
      return " " + d;
    },
  },
}; //this function is used to display the date time in a string format
</script>
