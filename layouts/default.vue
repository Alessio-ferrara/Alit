<template>
  <div class="main-page">
    <nav-bar />
    <nuxt class="min-vh-100" />
    <foo-ter />
  </div>
</template>

<script>
function zoom() {
  document.body.style.zoom = "90%";
}

import NavBar from "~/components/Navbar.vue";
import FooTer from "~/components/Footer.vue";
export default {
  name: "DefaultLayout",
  components: {
    NavBar,
    FooTer,
  },
};
</script>
