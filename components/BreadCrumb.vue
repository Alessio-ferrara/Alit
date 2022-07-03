<template>
  <nav aria-label="bradcrumb">
    <ol class="breadcrumb">
      <!-- Displaying the breadcrumb, making the last one (the page where we are at the moment) as disabled -->
      <li v-for="(crumb, ci) in crumbs" :key="ci.name" class="breadcrumb-item">
        <a
          class=""
          :class="{ disabled: isLast(ci) }"
          @click="selected(crumb.path)"
          v-bind:href="generateURL(crumb.path)"
        >
          {{ crumb.name }}
        </a>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "BreadCrumb",
  props: {
    crumbs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    isLast(index) {
      return index === this.crumbs.length - 1;
    },
    selected(crumbPath) {
      this.$emit("selected", crumbPath);
    },
    //Generating the full url in order to jump to insert an href
    generateURL(path) {
      return process.env.baseURL + path;
    },
  },
};
</script>

<style scoped>
.breadcrumb {
  background-color: white;
  border-radius: 0.37rem;
}
a:hover {
  cursor: pointer;
}
a {
  color: rgb(255, 83, 112);
}
.disabled,
.disabled:hover {
  color: grey;
  cursor: default;
}
</style>
