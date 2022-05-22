<template>
  <div id="canvas" class="container-fluid">
    <div id="carouselExampleControls" class="carousel slide" data-mdb-ride="carousel">
      <div class="carousel-inner shadow-4-strong">
        <div class="carousel-item active">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
            class="d-block w-100"
            alt="Image"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
            class="d-block w-100"
            alt="Image"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
            class="d-block w-100"
            alt="Image"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselExampleControls"
        data-mdb-slide="prev"
      >
        <span class="pt-0 carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-mdb-target="#carouselExampleControls"
        data-mdb-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- !carousel -->

    <div id="content" class="container row display-4 mt-4 ml-4 mr-4 pò-4 pr-4">
      <h2 class="display-5">
        <strong>{{ $route.query.item.name }}</strong>
      </h2>
      <h2>
        <span class="badge badge-pill badge-danger">{{$route.query.item.date}}</span>
      </h2>
      <!-- shall display the eventItem.name whose index == the one received from props -->
    </div>
    <p class="text-center text-muted mb-3">{{$route.query.description}}</p>

    <!-- Carousel wrapper -->

    <!-- Carousel wrapper -->
  </div>
</template>

<style scoped>
</style>

<script>
// import CustomPage from '~/components/CustomPage.vue'
import '../../assets/style.css';
import '../../assets/details.css';

export default {
  name: 'EventsPage',
  // components: {
  //   CustomPage,
  // },
  data() {
    return {}
  },
  async asyncData({ $axios }) {
    // get all the data from the backend and pass it to the component in order to be printed
    const { data } = []
    const title = "Milan"
    const image = "ciao"
    const details = "details"
    const description = "description"
    return {
      title,
      description,
      image,
      details
    }
  },
}
</script>
