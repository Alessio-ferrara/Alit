<template>
  <div>
    <iframe
            width="650"
            height="450"
            frameborder="0"
            style="border:0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDX_OSdMYc79SeKrOLBh7VqZ5_n-mdexew&q=Tirana,AL"
            allowfullscreen
          ></iframe>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  // props: {
  //   address: {
  //     type: String,  //string that gets passed in order to display the correct location on the website
  //     required: true,
  //   }
  // },
}
</script>