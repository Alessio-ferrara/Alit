<template>
  <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
  <div id="container" class="container-fluid">
    <div v-if="items" class="wrapper">
      <ul class="sessions">
        <li>
          <div class="time">
            <nuxt-link class="text-danger text-decoration-underline" :to="`/poi/${poi_start.id}`">
              <i class="fa fa-solid fa-location-dot text-danger text-decoration-none"></i>
              {{poi_start.name}}
            </nuxt-link>
          </div>
        </li>
        <li v-for="(item) in items" :key="item.id" class="time text-danger">
          <nuxt-link class="text-danger text-decoration-underline" :to="`/poi/${item.id}`">
            <div>{{item.name}}</div>
          </nuxt-link>
        </li>
        <li>
          <div class="time">
            <nuxt-link class="text-danger text-decoration-underline" :to="`/poi/${poi_end.id}`">
              <i class="fa-solid fa-flag-checkered text-danger"></i>
              {{poi_end.name}}
            </nuxt-link>
          </div>
        </li>
      </ul>
    </div>
    <div v-else class="wrapper">
      <ul class="sessions">
        <li>
          <div class="time">
            <i class="fa fa-solid fa-location-dot text-danger"></i>
            {{poi_start.name}}
          </div>
        </li>
        <li v-for="(item) in items" :key="item.id" class="time">
          <div class="time">{{item.name}}</div>
        </li>
        <li>
          <div class="time">...</div>
        </li>
        <li>
          <div class="time">
            <i class="fa-solid fa-flag-checkered text-danger"></i>
            {{poi_end.name}}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "ItineraryComponent",
  props: {
    items: {
      type: Array,
      required: false,
    },
    poi_start: {
      type: Object,
      required: true,
    },
    poi_end: {
      type: Object,
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
.wrapper {
  background: #f7f7f7;
  padding: 2rem;
  border-radius: 15px;
}
h1 {
  font-size: 1card 0.1rem;
  font-family: sans-serif;
}
.sessions {
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

.time {
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