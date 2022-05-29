<template>
  <nav>
    <ol class="breadcrumb">
      <li
        v-for="(crumb, ci) in crumbs"
        :key="ci.name"
        class="breadcrumb-item align-items-center"
      >
        <button
          class="btn btn-link"
          :class="{ disabled: isLast(ci) }"
          @click="selected(crumb.path)"
        >
          {{ crumb.name }}
        </button>
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
  },
};
</script>

<style scoped>
.breadcrumb {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.37rem;
}
</style>
