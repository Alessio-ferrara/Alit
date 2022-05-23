<template>
  <div>
    <iframe
            width="650"
            height="450"
            frameborder="0"
            style="border:0"
            v-bind:src="'https://www.google.com/maps/embed/v1/place?key=AIzaSyDX_OSdMYc79SeKrOLBh7VqZ5_n-mdexew&q=' + lat + ',' + lang" 
            allowfullscreen
          ></iframe>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  props: {
    lat: {
      type: String,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  },
}
</script>