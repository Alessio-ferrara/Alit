<template>
    <div
        class="bg-image align-content-center h-auto"
        v-bind:style="{ 'backgroundImage': 'url(' + require('@/static/' + about.image) + ')', 'height': '100vh' }"
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
    </div>
</template>
<script>
import '../assets/style.css';
export default {
  name: 'AboutUsPage',
  async asyncData({ route, $axios }) {
    const { data } = await $axios.get(`api/content/about_us`);
    return {
      about: data,
    }
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
  }
};
</script>
