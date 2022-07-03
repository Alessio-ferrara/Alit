<template>
  <div class="container-fluid">
    <div id="background" class="row mt-3">
      <about-us :scroll="scrollDown" :about_us_data="about" />
      <div id="content" class="row m-0">
        <about-charts id="charts" :about_us_data="about" />
        <about-cards :about_us_data="about" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#background {
  /* background: rgb(218, 81, 104); */
  background: rgb(249, 49, 84);
  cursor: default;
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
  margin-bottom: 8vh;
}
img {
  height: 25vh !important;
  max-width: 30vh !important;
  margin: 5px;
}
p {
  color: whitesmoke;
}
</style>

<script>
import "../assets/style.css";
import AboutUs from "~/components/AboutUs.vue";
import AboutCharts from "~/components/AboutCharts.vue";
import AboutCards from "~/components/AboutCards.vue";

export default {
  name: "AboutUsPage",
  async asyncData({ route, $axios }) {
    //Getting content from database to fill the components of about us
    const { data } = await $axios.get("api/content/about_us");
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
  components: { AboutUs, AboutCards, AboutCharts },
  methods: {
    scrollDown() {
      const el = document.querySelector('#content');
      el.scrollIntoView()
    },
  },
};
</script>
