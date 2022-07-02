<template>
  <!-- passing the static data to the jumbotron -->
  <custom-page
    :title="content.title"
    :short_description="content.short_description"
    :description="content.description"
  />
</template>

<script>
import CustomPage from "~/components/CustomPage.vue";
export default {
  name: "IndexPage",
  data() {
    return {
      content: {},
    };
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get("api/content/index");
    console.log(data)
    return {
      content: data,
    };
  },
  components: {
    CustomPage,
  },
};
</script>
