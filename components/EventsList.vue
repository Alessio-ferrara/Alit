<template>
  <span>
    <div class="text-center mt-4 pt-3">
      <p class="text-center text-muted lead">
        Explore different categories of events...
        </p>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <!-- for each event in the GroupList we display the three groups of events (Summer,Winter,Year) -->
      <div
        v-for="(eventItem, eventItemIndex) of GroupList"
        :key="`eventItem${eventItemIndex}`"
        class="col-lg-4 col-md-12"
      >
      <!-- on selection change we change the page accordingly and show the remaining elements of the previous GroupList -->
        <div
          class="card border bg-light text-muted"
          @click="handleChange(eventItem.c, eventItem.name)"
        >
        <nuxt-img
        v-bind:src="'/images/' + eventItem.image"
        class="card-img-top"
        alt="Events Image"
        format="webp"
      />
     
          <div class="card-body">
            <h5 class="card-title lead text-center">{{ eventItem.name }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center display-4 mt-4">{{name}}</div>
  </span>
</template>

<script>
</script>

<style scoped>
.card {
  margin-right: 1%;
  margin-left: 1%;
}
.card:hover {
  cursor: pointer;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 20%), 0 4px 6px -2px rgb(0 0 0 / 15%) !important;
}
img {
  height: 100px;
  object-fit: cover;
}
</style>

<script>
export default {
  name: "EventsList",
  props: {
    changeSelection: {
      type: Function
    }
  },
  data() {
    return {
      // list of the items to display in the events group
      selection: "all_events",
      name: "All Events",
      GroupList: [
        {
          name: "Summer Events",
          image: "events/summer-events.jpeg",
          c: "summer_events"
        },
        {
          name: "2022 Events",
          image: "events/year-events.jpeg",
          c: "year_events"
        },
        {
          name: "Winter Events",
          image: "events/winter-events.jpeg",
          c: "winter_events"
        },
      ],
    };
  },
  // on change of the event group to show we dynamically update the group list with the correct content to show
  methods: {
    handleChange: function (choice, name) {
      this.selection = choice;
      this.name = name;
      this.changeSelection(choice)
    },
  },
};
</script>
