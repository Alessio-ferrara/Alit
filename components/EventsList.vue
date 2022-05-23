<template>
  <span>
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-3 pt-3">
      <div
        v-for="(eventItem, eventItemIndex) of GroupList"
        :key="`eventItem${eventItemIndex}`"
        class="col-lg-4 col-md-12"
      >
      <nuxt-link :to="`/${eventItem.path}`">
        <div class="card">
          <img
            v-bind:src="require(`/static/images/${eventItem.image}`)"
            class="card-img-top"
            alt="Events Image"
          />
          <div class="card-body">
            <h5 class="card-title lead text-center text-black">{{eventItem.name}}</h5>
            <p class="card-text text-center text-muted">
              <!-- control of all the attributes to display according to the type passed -->
            </p>
          </div>
        </div>
      </nuxt-link>
      </div>
    </div>
    <div class="text-center display-4 mt-4">
        All Events
        <!-- shall display the eventItem.name whose index == the one received from props -->
      </div>
  </span>
</template>



<script>
// take content from props passed to the page to check what content to display according to the request
// ie. summer = 1 comes from the props, we display all of the elements in GroupList except the one with id 1


// store in the eventList all the events fetched from the backend and displaying them
</script>

<style scoped>
.card {
  margin-right: 1%;
  margin-left: 1%;
}
</style>

<script>
export default {
  name: 'EventsList',
  data(){
      return{
        // list of the items to display in the events group
          GroupList : [
            {
               name: "Summer Events",
               path: '/events?summer',
               image: "events/summer-events.jpeg",
            },
            {
               name: "This year's Events",
               path: '/events?year',
               image: "events/year-events.jpeg"
            },
            {
               name: "Winter Events",
               path: '/events?winter',
               image: "events/winter-events.jpeg"

            },
          ]
      }
  }
}
</script>