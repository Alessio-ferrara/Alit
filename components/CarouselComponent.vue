<template>
  <!-- this component is used to display a carousel of images-->
  <div v-if="images.length" id="canvas" class="container-fluid">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-mdb-ride="carousel"
    >
      <div class="carousel-inner shadow-4-strong">
        <div class="carousel-item active">
          <!-- we use nuxt-img to display the first (active) image by binding the
               first element of the images array to the src attribute -->
          <nuxt-img
            v-bind:src="'/' + images[0].path"
            format="webp"
            class="d-block w-100"
            style="object-fit: cover; height: 70vw; max-height: 70vh"
            alt="Image"
          />
        </div>
        <!-- loop through the array to display the remaining images -->
        <div
          v-for="(imageItem, imageIndex) of images.slice(1)"
          :key="`imageItem${imageIndex}`"
          class="carousel-item"
        >
          <nuxt-img
            v-bind:src="'/' + imageItem.path"
            format="webp"
            class="d-block w-100"
            style="object-fit: cover; height: 70vw; max-height: 70vh"
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
  </div>
</template>

<script>
import "../assets/style.css";
import "../assets/details.css";

export default {
  name: "CarouselComponent",
  props: {
    images: {
      type: Array,
      required: true,
    },//images is an array of images paths
      // that was retrieved from the database
  },
};
</script>
