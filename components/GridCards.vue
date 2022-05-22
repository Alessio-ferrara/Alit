<template>
  <span>
    <hr />
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-3 pt-3">
      <!-- v-for in the col element to display all the events fetched -->
      <div
        v-for="(item, itemIndex) of items"
        :key="`${name}${itemIndex}`"
        class="col"
      >
      <!-- link passing all the info of the selected item to the  -->
        <nuxt-link :to="`/${name}/${item.id}`">
          <card-component :item="item" :name="name"/>
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
import CardComponent from "./Card.vue"
export default {
  name: 'GridCards',
  components:{
    CardComponent,
  },
  props : {
    items : {
      type : Array,
      required : true,
    },
    name:{
      type : String,
      required : true
    }
  },
  data(){
      return{
        // list of the objects to display
          ItemList :[
            {
              id: "0",
              name: "Evento 0",
              date: "11/02/1999",
              description: "Lorem ipsum dolor sit amet docet sbadoink",
              path: ""
            },
            {
              id: "1",
              name: "Evento Bello",
              date: "11/02/2023",
              description: "Lorem ipsum dolor sit amet docet sbadoink",
              path: ""
            },
            {
              id: "3",
              name: "Evento più bello",
              date: "11/02/2023",
              description: "Lorem ipsum dolor sit amet docet sbadoink",
              path: ""
            },
            {
              id: "4",
              name: "Evento più bello",
              date: "11/02/2023",
              description: "Lorem ipsum dolor sit amet docet sbadoink",
              path: ""
            },
            {
              id: "5",
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