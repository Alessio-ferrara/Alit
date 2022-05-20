<template>
  <span>
    <div class="card-group mb-3 pb-3 mt-3 pt-3">
      <!-- v-for="(eventItem) of headerList-->
      <div
        v-for="(eventItem, eventItemIndex) of GroupList"
        :key="`eventItem${eventItemIndex}`"
        class="card"
      >
        <img
          v-bind:src="require(`/static/${eventItem.image}`)"
          class="card-img-top"
          alt="Events Image"
        />
        <nuxt-link :to="eventItem.path">
          <div class="card-title nav-link text-center text-center text-black lead">
            <strong>{{ eventItem.name }}</strong>
          </div>
        </nuxt-link>
      </div>
    </div>
    <hr />
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-3 pt-3">
      <!-- v-for in the col element to display all the events fetched -->
      <div
        v-for="(eventItem, eventItemIndex) of EventsList"
        :key="`eventItem${eventItemIndex}`"
        class="col"
      >
        <nuxt-link :to="eventItem.path">
          <div class="card h-100">
            <!--      in image element
              v-bind:src="require(`/static/event/${eventItem.image}`)"
            -->
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
              class="card-img-top"
              alt="Event Image"
            />
            <div class="card-body">
              <h5 class="card-title lead text-center text-black">{{eventItem.name}}</h5>
              <p class="card-text text-center text-muted">
                <span class="badge badge-pill badge-danger">{{eventItem.date}}</span>
                <br />
                {{eventItem.description}}
              </p>
            </div>
          </div>
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
export default {
  name: 'EventsList',
  data(){
      return{
        // list of the items to display in the events group
          GroupList : [
            {
               name: "Summer Events",
               path: '/events?summer',
               image: "summer-events.jpeg",
               path: ""
            },
            {
               name: "This year's Events",
               path: '/events?year',
               image: "year-events.jpeg"


            },
            {
               name: "Winter Events",
               path: '/events?winter',
               image: "winter-events.jpeg"

            },
          ] ,
        // list of the events to display
          EventsList :[
            {
              id: "",
              name: "Evento 0",
              date: "11/02/1999",
              description: "Lorem ipsum dolor sit amet docet sbadoink",
              path: ""
            },
            {
              id: "",
              name: "Evento Bello",
              date: "11/02/2023",
              description: "Lorem ipsum dolor sit amet docet sbadoink",
              path: ""
            },
            {
              id: "",
              name: "Evento più bello",
              date: "11/02/2023",
              description: "Lorem ipsum dolor sit amet docet sbadoink",
              path: ""
            },
            {
              id: "",
              name: "Evento più bello",
              date: "11/02/2023",
              description: "Lorem ipsum dolor sit amet docet sbadoink",
              path: ""
            },
            {
              id: "",
              name: "Evento più bello",
              date: "11/02/2023",
              description: "Lorem ipsum dolor sit amet docet sbadoink",
              path: ""
            },
            
          ],
      }
  }
}
</script>