<template>
  <div id="page" class="container-fluid">
    <div class="container">
      <div class="text-center display-4 mt-4">{{ name }}</div>
      <p class="text-center text-muted mb-3">
        View all the services under the
        <strong class="text-italic">{{ name }}</strong>
        category
      </p>
      <bread-crumb :crumbs="crumbs" @selected="selected" />
      <hr />
      <!-- end of title -->
      <div class="row row-cols-1 row-cols-md-3 g-4 mt-3 pt-3">
        <div
          v-for="(item, itemIndex) of services"
          :key="`${name}${itemIndex}`"
          class="col-lg-4 col-md-12"
        >
          <div class="card h-100">
            <div class="card-body">
              <p class="card-title text-center lead text-danger">
                <i :class="icon"></i>
              </p>
              <h3 class="card-title text-opacity-75 text-center text-black">{{ item.name }}</h3>
              <p class="text-center">
                <span v-if="item.address">Address:</span>
                <span class="text-muted">{{ item.address }}</span>
                <br />Telephone:
                <span class="text-muted">{{ item.telephone }}</span>
              </p>
              <p class="text-center" v-if="item.op_hours.length" >
                <i class="fa fa-lg fa-clock"></i>
              </p>
              <p
                v-for="(opening, openingIndex) of item.op_hours"
                :key="`${name}${openingIndex}`"
                class="text-muted d-inline"
              >
                {{ opening.day }}&nbsp;{{
                opening.s_hour.split(":", 2).join(":")
                }}-{{ opening.c_hour.split(":", 2).join(":") }}
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="Object.keys(services).length == 0">
        <div class="alert alert-warning" role="alert">
          <i class="fa fa-lg fa-warning">&nbsp;</i>
          No services matching the choice were found. Try again later &#9203;
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-weight: 400;
}
.card ul,
.card li {
  border-left: none;
}
.card li:before {
  width: 0;
  height: 0;
  background: none;
  box-shadow: none;
  position: absolute;
  left: 0;
  top: 0;
}
</style>

<script>
import BreadCrumb from '~/components/BreadCrumb.vue';
// import CustomPage from '~/components/CustomPage.vue'
import CarouselComponent from "~/components/CarouselComponent.vue";

export default {
  name: "ServicePage",
  components: {BreadCrumb},
  data() {
    return {};
  },
  methods: {
    selected(crumbPath) {
      this.$router.push(crumbPath);
    },
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params;
    const { data } = await $axios.get(`api/services/${id}`);
    return {
      services: data.services,
      name: data.name,
      icon: data.icon,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: data.name, path: "" },
      ],
    };
  },
};
</script>
