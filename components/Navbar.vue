<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-3">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Navbar brand -->
      <a class="navbar-brand mt-2 mt-lg-0" href="/">
        <nuxt-img
          src="/icon.png"
          format="webp"
          alt="Dua Tiranen"
          loading="lazy"
        />
        <ul class="navbar-nav me-auto mb-2 ml-2 mb-lg-0">
          <span class="text-danger mb-2 pl-3 pr-3"
            >&nbsp;Dua Tiranën&nbsp;</span
          >
        </ul>
      </a>
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarButtonsExample">
        <ul class="navbar-nav me-auto mb-2 ml-2 mb-lg-0">
          <!-- looping trough the headerList in order to display all the elements of the navbar using the item name and path to correctly navigate to the desired part -->
          <li
            v-for="(navItem, navItemIndex) of headerList"
            :key="`navItem${navItemIndex}`"
            class="nav-item"
          >
            <a v-bind:href="navItem.path" class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">
              {{ navItem.name }}
            </a>
          </li>
        </ul>
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>

<style scoped>
.navbar-nav > .active > a {
  color: rgb(255, 83, 112) !important;
}
.navbar-brand {
  font-weight: light !important;
  font-size: 1em;
  padding-top: 6px;
  padding-bottom: 0;
  /* font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif; */
}
.navbar-brand .btn-danger:hover {
  background: #f93154 !important;
}
.header {
  background: orange;
}
.logo {
  color: white;
  /* font-size: 32px; */
}
.navbar-brand img {
  /* for the navbar brand logo */
  height: 60px !important;
  width: 60px !important;
}
</style>

<script>
export default {
  name: "Nav_bar",
  data() {
    return {
      activeItem: "",
      headerList: [
        {
          name: "Points of Interest",
          path: "/pois",
        },
        {
          name: "Events",
          path: "/events",
        },
        {
          name: "Itineraries",
          path: "/itineraries",
        },
        {
          name: "Services",
          path: "/services",
        },
        {
          name: "Contact us",
          path: "/contact_us",
        },
        {
          name: "About us",
          path: "/about_us",
        },
      ],
    };
  },
};
</script>
