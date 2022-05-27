<template>
  <div class="container-fluid w-50 mt-5 pt-5">
      <h4 class="lead text-center text-black">{{ about.title }}</h4>
      <hr/>
      <img
          v-bind:src="require('@/static/' + about.image)"
          class="card-img"
          alt="Image"
      />
      <br>
      <br>
      <p class="text-center text-muted">
        {{about.description}}
      </p>
  </div>
</template>


<script>
// import CustomPage from '~/components/CustomPage.vue'
// import '../../assets/style.css';
// import '../../assets/details.css';

export default {
  name: 'AboutUsPage',
  async asyncData({ route, $axios }) {
    const { data } = await $axios.get(`api/content/about_us`);
    return {
      about: data,
    }
  },
};
</script>
