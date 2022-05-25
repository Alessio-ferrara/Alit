<template>
  <span>
    <hr />
    <div class="row row-cols-1 g-4 mt-4 m-lg-auto pt-3 w-75 ">
      <!-- v-for in the col element to display all the events fetched -->
      <div
          v-for="(item, itemIndex) of items"
          :key="`${name}${itemIndex}`"
          class="row-cols-2"
      >
        <!-- link passing all the info of the selected item to the  -->
        <nuxt-link :to="`/${name}/${item.id}`">
          <landscape-card-component :item="item" :name="name" />
        </nuxt-link>
      </div>
    </div>
  </span>
</template>

<script>
import LandscapeCardComponent from "~/components/LandscapeCardComponent";
export default {
  components: {LandscapeCardComponent}
}
</script>

<script>
import LandscapeCardComponent from "./LandscapeCardComponent";
export default {
  name: "RowGridCards",
  components: {
    LandscapeCardComponent,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
