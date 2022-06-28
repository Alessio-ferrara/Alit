<template>
<!-- passing the static data to the jumbotron -->
  <custom-page :title="title" :image="image" :description="description" :details="details" />
</template>



<script>
import CustomPage from '~/components/CustomPage.vue'
export default {
  name: 'IndexPage',
  components: {
    CustomPage,
  },
}
</script>
