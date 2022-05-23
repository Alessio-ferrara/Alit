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
        <span v-if class="badge badge-pill badge-primary">{{getDateTime(item.datetime)}}</span>
        <br />
        {{item.description}}
      </p>
    </div>
  </div>
</template>

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
  },
  methods :{
    getDateTime(datetime){
        var date = new Date(datetime)
        var d = date.getDate()+"/"+(date.getMonth() + 1)+"/"+date.getFullYear()
        var time = date.getHours() +":"+((date.getMinutes()<10?'0':'') + date.getMinutes())
        return d + " "+ time
    }
  }
}
</script>