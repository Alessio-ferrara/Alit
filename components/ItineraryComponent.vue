<template>
  <div class="container">
    <div class="wrapper">
      <ul class="sessions">
        <li>
          <div class="time">
            <!-- poi name e icon -->
            <i class="fa fa-solid fa-location-dot text-danger"></i>
          </div>
          {{poi_start.name}}
        </li>
        <li v-if="items">
          <div v-for="(item) in items" :key="item.id" class="time">
          {{item.name}}
          </div>
        </li>
        <li v-else>
          <div class="time">...</div>
        </li>
        <li>
          <div class="time">
            <!-- poi name e icon -->
            <i class="fa-solid fa-flag-checkered text-danger"></i>
          </div>
          {{poi_end.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
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
  background: #f7f7f7;
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
name: "ItineraryComponent",
  props: {
    items: {
      type: Array,
      required: false,
    },
    poi_start: {
      type: Array,
      required: true,
    },
    poi_end: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}

</script>

<style scoped>

</style>