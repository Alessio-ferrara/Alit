<template>
  <div>
    <GMap
  ref="gMap"
  language="en"
  :cluster="{options: {styles: clusterStyle}}"
  :center="{lat: locations[0].lat, lng: locations[0].lng}"
  :options="{fullscreenControl: false}"
  :zoom="5"
>
  <GMapMarker
    v-for="location in locations"
    :key="location.id"
    :position="{lat: location.lat, lng: location.lng}"
    :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"
    @click="currentLocation = location"
  >
    <GMapInfoWindow :options="{minWidth: 200}">
      <code>
        lat: {{ location.lat }},
        lng: {{ location.lng }}
      </code>
    </GMapInfoWindow>
  </GMapMarker>
</GMap>
    <br>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      center: { lat: 41.324, lng: 19.818 },
      currentLocation: {},
    locations: [
      {
        lat: 41.933076,
        lng: 15.629058
      },
      {
        lat: 45.815,
        lng: "15.9819"
      },
      {
        lat: "45.12",
        lng: "16.21"
      }
    ],
    pins: {
      selected: "data:image/png;base64,iVBORw0KGgo...",
      notSelected: "data:image/png;base64,iVBORw0KGgo..."
    },
    clusterStyle: [
      {
        url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
        width: 56,
        height: 56,
        textColor: "#fff"
      }
    ]
    }
  },
  mounted() {
    this.geolocate();
  },
  methods: {
      setPlace(place) {
      this.currentPlace = place;
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
}
</script>