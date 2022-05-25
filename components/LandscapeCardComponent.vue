<template>
  <span>
    <div v-if="name == 'itinerary'" class="card h-200">
      <div class="card-body row border-3">
        <div class="col-md-8">
          <h1 class="card-title text-black text-left display-6">{{ item.name }}</h1>
          <h3 class="card-text text-muted">
            <span class="badge bg-danger text-white p-2 mb-3">{{item.duration }} hours</span>
            <p class="text-muted lead mt-3">{{ item.description }}</p>
          </h3>
        </div>
        <!-- left part of the card -->
        <div id="itinerary" class="col-md-4">
          <!-- <div class="row d-flex">
            <div class="card-text text-muted text-center col-12" v-if="item.point_of_interests[0]">
              <i style="color:red;" class="fa fa-flag d-block"></i>
              {{item.point_of_interests[0].name}}
            <hr class="align-center" style="width: 1px; height: 20px; display: block;">
            </div>
          </div>-->
          <div class="container">
            <div class="wrapper">
              <ul class="sessions">
                <li>
                  <div class="time" v-if="item.point_of_interests[0]">
                    <!-- poi nmae e icon -->
                    <i class="fa fa-solid fa-location-dot text-danger"></i>
                  </div>
                  <p>POI DI PROVA</p>
                  <!-- <p>{{item.point_of_interests[0]}}</p> -->
                </li>
                <li>
                  <div class="time">...</div>
                </li>
                <li>
                  <div class="time" v-if="item.point_of_interests[0]">
                    <!-- poi nmae e icon -->
                    <i class="fa-solid fa-flag-checkered text-danger"></i>
                  </div>
                  <!-- <p>POI DI PROVA</p> -->
                  <!-- <p>{{item.point_of_interests[1]}}</p> -->
                  <p>POI DI PROVA</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- right part of the card -->
      </div>
    </div>
  </span>
</template>

<style scoped>
.card {
  position: relative;
  /* text-align: center; */
  color: white;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#itinerary {
  border-left: dotted rgb(44, 42, 43);
}

@mixin tablet-and-up {
  @media screen and (min-width: 769px) {
    @content;
  }
}
@mixin mobile-and-up {
  @media screen and (min-width: 601px) {
    @content;
  }
}
@mixin tablet-and-down {
  @media screen and (max-width: 768px) {
    @content;
  }
}
@mixin mobile-only {
  @media screen and (max-width: 600px) {
    @content;
  }
}

ul,
li {
  list-style: none;
  padding: 0;
}

.card .container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  padding: 3rem 0;
}
.card .wrapper {
  background: #eaf6ff;
  padding: 2rem;
  border-radius: 15px;
}
h1 {
  font-size: 1card 0.1rem;
  font-family: sans-serif;
}
.card .sessions {
  margin-top: 2rem;
  border-radius: 12px;
  position: relative;
}
li {
  padding-bottom: 1.5rem;
  border-left: 3px solid rgb(249, 49, 84);
  position: relative;
  padding-left: 20px;
  margin-left: 10px;
}

li:before {
  content: "";
  width: 15px;
  height: 15px;
  background: rgb(249, 49, 84);
  box-shadow: 3px 3px 0px rgba(5, 5, 5, 0.288);
  border-radius: 50%;
  position: absolute;
  left: -10px;
  top: 0px;
}

.card .time {
  color: #2a2839;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  @include mobile-and-up {
    font-size: 0.9rem;
  }
  @include mobile-only {
    margin-bottom: 0.3rem;
    font-size: 0.85rem;
  }
}
p {
  color: #4f4f4f;
  font-family: sans-serif;
  line-height: 1.5;
  margin-top: 0.4rem;
  @include mobile-only {
    font-size: 0.9rem;
  }
}
li:last-child {
  border: 0px;
  margin-left: 14px !important;
  padding-bottom: 0;
}
i {
  display: inline;
}
</style>

<script>
export default {
  name: "LandscapeCardComponent",
  props: {
    item: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    getDateTime(datetime) {
      var date = new Date(datetime);
      var d =
          date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      var time =
          date.getHours() +
          ":" +
          ((date.getMinutes() < 10 ? "0" : "") + date.getMinutes());
      return " " + d; //+ " "+ time
    },
  },
};
</script>
