<template>
  <!-- link passing all the info of the selected item to the  -->
  <div class="card h-100">
    <img
      src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
      class="card-img-top"
      alt="Image"
    />
    <div class="card-body">
      <h5 class="card-title lead text-center text-black">{{item.name}}</h5>
      <p class="card-text text-center text-muted">
        <span class="badge badge-pill badge-danger">{{item.datetime}}</span>
        <br />
        {{item.description}}
      </p>
    </div>
  </div>
</template>



<script>
// take content from props passed to the page to check what content to display according to the request
// ie. summer = 1 comes from the props, we display all of the elements in GroupList except the one with id 1 


// store in the eventList all the events fetched from the backend and displaying them 
</script>


<script>
export default {
  name: 'CardComponent',
  props:{
    item:{
      type: Object,
      required:true
    },
    name: {
      type: String,
      required:true
    }
  }
}
</script>