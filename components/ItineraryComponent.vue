<template>
  <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
  <div id="container" class="container-fluid">
    <div v-if="items" class="wrapper">
      <ul class="sessions">
        <li>
          <div class="time">
            <i class="fa fa-solid fa-location-dot text-danger"></i>
            {{poi_start.name}}
          </div>
        </li>
        <li v-for="(item) in items" :key="item.id" class="time">
          <div class="time">{{item.name}}</div>
        </li>
        <li>
          <div class="time">
            <i class="fa-solid fa-flag-checkered text-danger"></i>
          </div>
          {{poi_end.name}}
        </li>
      </ul>
    </div>
    <div v-else class="wrapper">
      <ul class="sessions">
        <li>
          <div class="time">
            <i class="fa fa-solid fa-location-dot text-danger"></i>
            {{poi_start.name}}
          </div>
        </li>
        <li v-for="(item) in items" :key="item.id" class="time">
          <div class="time">{{item.name}}</div>
        </li>
        <li>
          <div class="time">...</div>
        </li>
        <li>
          <div class="time">
            <i class="fa-solid fa-flag-checkered text-danger"></i>
            {{poi_end.name}}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "ItineraryComponent",
  props: {
    items: {
      type: Array,
      required: false,
    },
    poi_start: {
      type: Array,
      required: true,
    },
    poi_end: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}

</script>

<style scoped>
</style>