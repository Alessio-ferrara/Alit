<template>
  <span class="row mt-3"> 
    <!-- <hr/> -->
    <h1 class="text-center text-danger fw-light mt-3">Tirana's faces</h1>
     <div class="col-12 card mt-4">
          <div class="card-body">
            <p class="lead text-danger m-3">Museums</p>

            <div class="mr-3">
              <img
                src="@/static/images/about/museums.jpeg"
                alt="Museum"
                class="rounded"
                style="float: left"
              />
            </div>
            <p id="description" class="text-black p-3 h5 lead text-justify">
              Tirana's museums and monuments are among its most highly esteemed
              attractions. The National Historical Museum is the largest Museum
              in the country and details the history of the country. The Natural
              Sciences Museum was founded in 1948 is affiliated with the
              University of Tirana and has branches in zoology, botany and
              geology. The former Enver Hoxha Museum is a pyramid-shaped
              structure dedicated to the communist dictator Enver Hoxha.It
              served as a museum about his legacy, but after the Fall of
              communism in Albania, it became a conference center and exhibition
              venue.
            </p>
          </div>
        </div>
        <div class="col-12 card">
          <div class="card-body">
            <p class="lead text-danger m-3">Tourism</p>
            <div class="mr-3">
              <img
                src="@/static/images/about/tourism.jpeg"
                alt="Museum"
                class="img-thumbnail rounded"
                style="float: right"
              />
            </div>
            <p id="description" class="text-black p-3 h5 lead">
              Tourism in Tirana is developing year by year and the capital city
              of Tirana become a very popular tourist destinations after the
              southern Albanian Riviera and northern part of the country. Tirana
              has a majority of luxury hotels, modern restaurants, bars, pubs
              and very big nightclubs. Tirana is a place that is known as a
              university center of students from regional countries like Kosovo,
              Macedonia, Montenegro and Greece. According to the Polish Tour
              Operators Association, Tirana has entered into the 10th most
              visited cities by the Poles. The French Télérama ranked Tirana
              also to the Top 10 of best destination to be visited in 2017.
            </p>
          </div>
        </div>
        <div class="col-12 card">
          <div class="card-body">
            <p class="lead text-danger m-3">Festivals</p>
            <div class="mr-3">
              <img
                src="@/static/images/about/festivals.jpeg"
                alt="Museum"
                class="rounded"
                style="float: left"
              />
            </div>
            <p id="description" class="text-black p-3 h5 lead text-justify">
              Festivals are one of several things that locals enjoy well. The
              diversity of festivals makes it possible for people of different
              tastes to find themselves in a city this small. Festivals in the
              city provide entertainment for the youth as well as for adults.
              The Summer Festival takes place every year on March 14,
              celebrating the Spring Day, the country's largest pagan festival.
              It is widely celebrated in Tirana and as well as in other cities
              in Albania and the Arbëresh colonies in Italy. Another major
              event, the Tirana International Film Festival takes place in
              Tirana each year, which brings a large number of artists to
              produce a wide range of interesting film works.
            </p>
          </div>
        </div>
        <div class="col-12 card">
          <div class="card-body">
            <p class="lead text-danger m-3">Nightlife</p>
            <div class="mr-3">
              <img
                src="@/static/images/about/nightlife.webp"
                alt="Museum"
                class="img-thumbnail rounded"
                style="float: right"
              />
            </div>
            <p id="description" class="text-black p-3 h5 lead">
              Tirana has a diverse and vibrant nightlife. Among the youth, the
              most popular destination is the Blloku area. There are many pubs,
              bars, clubs, cafes, restaurants can be found throughout the area.
              Blloku is quite a small, walking neighborhood, easily accessible
              from different parts of the city. The entrance is only 10 minutes
              by foot from the city centre. Among the most popular nightclubs
              are Folie Terrace, Cinco Cavalli, Lollipop, Moscow, Arena and
              Mumja Club, where world-famous disc jockeys and idiosyncratic
              local performances are frequent. Some of the most popular cafés in
              Tirana are Mon Chéri Coffee Shop, Sophie Caffe, Cioccolatitaliani
              Tirana, D'angelo Coffee Shop and The Tea Room.
            </p>
          </div>
        </div>
  </span>
</template>

<style scoped>
img {
  height: 80vh !important;
  max-height: 80vh;
}
#content {
  background-color: white;
}
#content .col-12 {
  /* margin-bottom: 15vh; */
  margin-bottom: 8vh;
}
#content img {
  height: 25vh !important;
  max-width: 30vh !important;
  /* float: left; */
  margin: 5px;
}
p {
  color: whitesmoke;
}
</style>

<script>
export default {
  name: "About-Cards",
  data() {},
};
</script>
