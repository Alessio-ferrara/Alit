<template>
  <span>
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-3 pt-3">
      <div
        v-for="(eventItem, eventItemIndex) of getList()"
        :key="`eventItem${eventItemIndex}`"
        class="col-lg-4 col-md-12"

      >
        <div class="card" @click="handleChange(eventItem.c, eventItem.name)">
          <img
            v-bind:src="require(`/static/images/${eventItem.image}`)"
            class="card-img-top"
            alt="Events Image"
          />
          <div class="card-body">
            <h5 class="card-title lead text-center text-black">
              {{ eventItem.name }}
            </h5>
            <p class="card-text text-center text-muted">
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center display-4 mt-4">
      {{name}}
    </div>
  </span>
</template>

<script>
</script>

<style scoped>
.card {
  margin-right: 1%;
  margin-left: 1%;
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
          name: "This year's Events",
          image: "events/year-events.jpeg",
          c: "year_events"
        },
        {
          name: "Winter Events",
          image: "events/winter-events.jpeg",
          c: "winter_events"
        },
        {
          name: "All Events",
          image: "events/winter-events.jpeg",
          c: "all_events"
        },
      ],
    };
  },
  methods: {
    handleChange: function (choice, name) {
      this.selection = choice;
      this.name = name;
      this.changeSelection(choice)
    },
    getList:  function(){
      var array = []                            //array to get all the correct cards to display in the EventList
      for (var i = 0; i < this.GroupList.length; i++) {   //get all the elements of GroupList except my selection
        if(this.selection != this.GroupList[i].c){
          array.push(this.GroupList[i]);
        }
      }
      return array
    }
  },
};
</script>
