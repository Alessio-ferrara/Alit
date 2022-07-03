<template>
  <div>
    <!-- creating an iframe with the full width and specified height in order to display the map according to our form factor -->
    <iframe
      title="map"
      width="100%"
      height="300"
      frameborder="0"
      style="border: 0"
      v-bind:src="
        'https://www.google.com/maps/embed/v1/place?key=AIzaSyDX_OSdMYc79SeKrOLBh7VqZ5_n-mdexew&q=' +
        lat +
        ',' +
        lang +
        '&zoom=14'
      "
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
// can add to the url the '&maptype=satellite' in order to display the satellite view but looks too dispersive

export default {
  name: "GoogleMap",
  props: {
    lat: {
      type: String,
      required: true,
    },
    lang: {
      type: String,
      required: true,
    },
  },
};
</script>
