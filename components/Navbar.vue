<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-3">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Navbar brand -->
      <a class="navbar-brand mt-2 mt-lg-0" href="/">
        <img
          src="../static/icon.png"
          height="10px"
          width="15px"
          alt="Dua Tiranen"
          loading="lazy"
        />
        <ul class="navbar-nav me-auto mb-2 ml-2 mb-lg-0">
          <a
            class="nav-link text-darnger mb-2 font-weight-bold pl-3 pr-3"
            href="/"
            >&nbsp;Dua Tiranën&nbsp;</a
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
          <li
            v-for="(navItem, navItemIndex) of headerList"
            :key="`navItem${navItemIndex}`"
            class="nav-item"
          >
            <nuxt-link :to="navItem.path" class="nav-link">{{
              navItem.name
            }}</nuxt-link>
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
.navbar-brand {
  font-weight: lighter !important;
  font-size: 1.5em;
  padding-top: 6px;
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
</style>

<script>
export default {
  name: "Nav_bar",
  data() {
    return {
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
          name: "Contacts",
          path: "/contacts",
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
