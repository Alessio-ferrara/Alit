<template>
  <span class="row">
    <div class="col-xl-6 col-12 mb-0 mt-0 text-center">
      <img
        id="illustration"
        src="@/static/images/about/connect.png"
        style="max-width: 100%; height: auto; object-fit: scale-down"
        alt="Connect"
      />
    </div>
    <div class="col-xl-6 col-12 mt-3 mb-0">
      <h1 id="intro" class="container mt-3 display-5">About us</h1>
      <div class="container lead">
        <p>
          Albania is considered the <mark>bridge</mark> between western and
          easter Europe, mixing the two different culture in an unique one.
        </p>
        <p>
          <mark>Tirana</mark> is the capital of Albania and also the main
          economic, social and cultural center of the country. Tirana is one of
          the country's <mark> leading business </mark> and cultural centers
          including
          <mark> entertainment, music, media, fashion, </mark>
          and the arts all contribute to its status as Albania's largest city.
        </p>
        <p>
          The city environment and its attraction provide one of the most
          fascinating places to <mark> visit </mark> in eastern Europe.
          <mark>Explore</mark> some the faces of this polyedric
          <mark>city</mark>, feel welcomed thanks to the
          <mark>hospitality</mark> of the city and his inhabitants.
        </p>
        <p class="pt-3">What are you waiting for?</p>
      </div>
    </div>
    <div class="col-12 text-center mt-4">
      <p class="text-center">
        Find out more below
        <i class="fa fa-solid fa-circle-arrow-down"></i>
      </p>
    </div>
    <div id="gradient" class="col-12 m-0 p-0">
      <img
        src="@/static/images/about/gradient.png"
        style="width: 100vw; max-height: 40vh"
        alt="Gradient"
      />
    </div>
  </span>
</template>
<style scoped>
#illustration {
  transform: scaleX(-1);
  max-height: 60vh;
}
#background {
  background: rgb(249, 49, 84);
  /* background: linear-gradient(180deg, rgba(249,49,84,1) 0%, rgba(249,49,84,1) 80%, rgba(254,254,254,1) 100%); */
  cursor: default;
}
mark {
  color: rgb(57, 47, 245);
  background-color: inherit;
  font-weight: normal;
  border-radius: 0;
}
img {
  height: 80vh !important;
  max-height: 80vh;
}
#intro {
  font-weight: normal;
  color: white;
}
#content {
  background-color: white;
}
#content .col-12 {
  /* margin-bottom: 15vh; */
  margin-bottom: 8vh;
}
/* #description {
  text-align: justify;
}
#description:after {
  text-align: justify;
  word-spacing: -2px;
} */
#content img {
  height: 25vh !important;
  max-width: 30vh !important;
  /* float: left; */
  margin: 5px;
}
p {
  color: whitesmoke;
}
.media {
  justify-content: space-evenly;
}
</style>

<script>
export default {
  name: "About-us",
  data() {},
};
</script>
