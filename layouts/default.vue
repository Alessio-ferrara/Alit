<template>
  <div class="main-page">
    <navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
  },
}
</script>