<template>
  <span class="row">
    <div class="col-xl-6 col-12 mb-0 mt-0 text-center">
      <nuxt-img
        id="illustration"
        src="images/about/connect.png"
        style="max-width: 100%; height: auto; object-fit: scale-down"
        alt="Connect"
        format="webp"
      />
    </div>
    <div class="col-xl-6 col-12 mt-3 mb-0">
      <h1 id="intro" class="container mt-3 display-5">
        {{ about_us_data.title }}
      </h1>
      <div
        class="container lead text-light"
        v-html="about_us_data.description"
      ></div>
    </div>
    <div class="col-12 text-center mt-4" @click="scroll" style="cursor: pointer;">
      <p class="text-center" >
        {{ about_us_data.find_out_more }}
        <i class="fa fa-solid fa-circle-arrow-down"></i>
      </p>
    </div>
    <div style="min-width: 100vw;" id="gradient" class="col-12 m-0 p-0">
      <nuxt-img
        v-bind:src="'/' + about_us_data.image"
        alt="Gradient"
        style="width: 100%; max-height: 30vh; margin: 0 0 0 0;"
      />
    </div>
  </span>
</template>

<style scoped>
#illustration {
  transform: scaleX(-1);
  max-height: 60vh;
}
#gradient {
  background-color: none;
  width: 100%;
}
div >>> p mark {
  color: rgb(44, 37, 184);
  background-color: inherit;
  font-weight: normal;
  border-radius: 0;
}
img {
  height: 80vh !important;
  max-height: 80vh;
}
#intro {
  font-weight: normal;
  color: white;
}
#content {
  background-color: white;
}
#content .col-12 {
  /* margin-bottom: 15vh; */
  margin-bottom: 8vh;
}
/* #description {
  text-align: justify;
}
#description:after {
  text-align: justify;
  word-spacing: -2px;
} */
#content img {
  height: 25vh !important;
  max-width: 30vh !important;
  /* float: left; */
  margin: 5px;
}
p {
  color: whitesmoke;
}
.media {
  justify-content: space-evenly;
}
</style>

<script>
export default {
  name: "About-us",
  props: {
    about_us_data: {
      type: Object,
      required: true,
    },
    scroll: {
      type: Function,
    },
  },
};
</script>
