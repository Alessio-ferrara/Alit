<template>
  <div class="container-fluid">
    <div id="background" class="row mt-3">
      <!-- <about-us /> -->
      <div id="content" class="row m-0">
        <!-- <about-charts /> -->
        <!-- <about-cards /> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
#background {
  background: rgb(249, 49, 84);
  /* background: linear-gradient(180deg, rgba(249,49,84,1) 0%, rgba(249,49,84,1) 80%, rgba(254,254,254,1) 100%); */
  cursor: default;
}
mark {
  color: rgb(57, 47, 245);
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
import { styles } from "object-inspect/util.inspect";
import "../assets/style.css";
import AboutUs from "~/components/AboutUs.vue";
import AboutCharts from "~/components/AboutCharts.vue";
import AboutCards from "~/components/AboutCards.vue";

export default {
  name: "AboutUsPage",
  async asyncData({ route, $axios }) {
    const { data } = await $axios.get(`api/content/about_us`);
    return {
      about: data,
    };
  },
  head() {
    return {
      title: "About the city of Tirana",
      meta: [
        { charset: "utf-8" },
        {
          hid: "description",
          name: "description",
          content:
            "Find here a general overview of Tirana, the capital city of Albania.",
        },
      ],
    };
  },
  components: {  },
};
</script>
