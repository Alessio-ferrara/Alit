<template>
  <span>
    <hr />
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-3 pt-3">
      <!-- v-for in the col element to display all the events fetched -->
      <div
        v-for="(item, itemIndex) of items"
        :key="`${name}${itemIndex}`"
        class="col-lg-4 col-md-12"
      >
        <!-- link passing all the info of the selected item to the  -->
        <nuxt-link :to="`/${name}/${item.id}`">
          <card-component :item="item" :name="name" />
        </nuxt-link>
      </div>
    </div>
  </span>
</template>

<script>
// take content from props passed to the page to check what content to display according to the request
// ie. summer = 1 comes from the props, we display all of the elements in GroupList except the one with id 1

// store in the eventList all the events fetched from the backend and displaying them
</script>

<script>
import CardComponent from "./CardComponent.vue";
export default {
  name: "GridCards",
  components: {
    CardComponent,
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
