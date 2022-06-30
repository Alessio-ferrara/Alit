<template>
  <!-- <div
        class="bg-image align-content-center h-auto"
        v-bind:style="{ 'backgroundImage': 'url(' + require('@/static/' + about.image) + ')', 'height': '100vh' }"
    > <div
        class="bg-image align-content-center h-auto"
        v-bind:style="{ 'backgroundImage': 'url(' + require('@/static/About.png'), 'height': '100vh' }"
    >
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
        <div class="container-fluid mt-5 w-75 h-75" id="content">
          <div class="p-5 m-5 border">
          <div class="p-2 rounded" id="text" style="background-color: rgba(70, 70, 70, .6);">
            <h1 class="display-1 white">{{ about.title }}</h1>
            <hr class="white-horizontal" />
            <blockquote class="blockquote text-center"><p class="mb-0 lead white p-2">{{about.description}}</p></blockquote>
          </div></div>
        </div>
      </div>
    </div> -->
  <div class="container-fluid mt-3">
    <div class="row mt-3">
      <div class="col-lg-6 col-4">
        <img
          src="@/static/Saly-31.png"
          style="max-width: 100%; height: auto"
          alt="Royal Enfield Motorcycle"
        />
      </div>
      <div class="col-lg-6 col-8 mt-3">
        <h1 id="intro" class="container mt-3">
          About us
        </h1>
        <p>
          we are  a team
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  background-color: rgba(255, 149, 84, 0.957);
}
#intro{
  font-weight: normal;
  color: white;
}
p{
  color: whitesmoke;
}
</style>

<script>
import { styles } from "object-inspect/util.inspect";
import "../assets/style.css";
export default {
  name: "AboutUsPage",
  async asyncData({ route, $axios }) {
    const { data } = await $axios.get(`api/content/about_us`);
    return {
      about: data,
    };
  },
};
</script>
