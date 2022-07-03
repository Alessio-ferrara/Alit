<template>
  <span>
    <div class="container row row-cols-1 g-4 mt-4 m-lg-auto pt-3 w-100 ">
      <!-- v-for the item in itemlist to display the card in a grid that is different from the one of events/pois/services displaying the cards in full rows -->
      <div
          v-for="(item, itemIndex) of items"
          :key="`${name}${itemIndex}`"
          class="row-cols-2"
      >
        <!-- link passing all the info of the selected item in order to have dynamic links inside landscape-cards in order to be ready for any future implememtation
        of this component with items differents from itineraries  -->
        <nuxt-link :to="`/${name}/${item.id}`">
        <!-- passinf to the landscape card component the item itself and the name for any future implementations as above -->
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
