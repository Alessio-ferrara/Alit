<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-3">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Navbar brand -->
      <a class="navbar-brand  mt-2 mt-lg-0" href="/">
        <img src="../static/icon.png" height="10px" width="15px" alt loading="lazy" />
        <ul class="navbar-nav me-auto mb-2 ml-2 mb-lg-0">
          <a
            class="nav-link text-darnger mb-2 font-weight-bold pl-3 pr-3"
            href="/"
          >&nbsp;Dua Tiranën&nbsp;</a>
        </ul>
      </a>
      <!-- <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item btn-danger">
            <a class="nav-link text-dark font-weight-bold pl-3 pr-3" href="/">&nbsp;alit&nbsp;</a>
          </li>
        </ul>
      </a>-->
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
          <!-- list of items in headerList to display in the navbar -->
          <li
            v-for="(navItem, navItemIndex) of headerList"
            :key="`navItem${navItemIndex}`"
            class="nav-item"
          >
            <nuxt-link :to="navItem.path" class="nav-link">{{ navItem.name }}</nuxt-link>
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
  font-size: 32px;
}
</style>

<script>
export default {
  name: 'Nav_bar',
  data() {
    return {
      headerList: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Services',
          path: '/services',
        },
        {
          name: 'Events',
          path: '/events',
        },
        {
          name: 'Points of Interest',
          path: '/pois',
        },
        {
          name: 'Itineraries',
          path: '/itineraries',
        },
        {
          name: 'Contacts',
          path: '/contacts',
        },
        {
          name: 'About us',
          path: '/about',
        },
      ],
    }
  },
}
</script>
