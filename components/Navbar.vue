<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-light px-3 header">
    <a class="navbar-brand" href="/">The Cat Shelter</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggler"
      aria-controls="navbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarToggler">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li
          v-for="(navItem, navItemIndex) of headerList"
          :key="`navItem${navItemIndex}`"
          class="nav-item"
        >
          <nuxt-link :to="navItem.path" class="nav-link">
            {{ navItem.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>-->
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-3">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Navbar brand -->

      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item btn-danger">
            <a class="nav-link text-dark font-weight-bold pl-3 pr-3" href="/">&nbsp;alit&nbsp;</a>
          </li>
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

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- list of items in headerList to display in the navbar -->
          <li
          v-for="(navItem, navItemIndex) of headerList"
          :key="`navItem${navItemIndex}`"
          class="nav-item"
        >
          <nuxt-link :to="navItem.path" class="nav-link">
            {{ navItem.name }}
          </nuxt-link>
        </li>
        </ul>

<!-- if we have an user we don't display the buttons but the username -->
        <!-- <div class="d-flex align-items-center">
          <button
          v-for="(item, index) of loginList"
          :key="`navItem${index}`"
          class="btn btn-light me-3"
          type="button"
        >
        <nuxt-link v-if="index==0" :to="item.path" class="text-danger">
          {{item.name}}
        </nuxt-link>
        <nuxt-link v-if="index==1" :to="item.path" class="text-muted">
          {{item.name}}
        </nuxt-link>
          </button>
        </div> -->

      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>

<style scoped>
.navbar-brand{
  font-weight: lighter!important;
  font-size: 1.9em;
  font-family:  Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.navbar-brand  .btn-danger:hover{
    background: #f93154!important;
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
          name: 'List',
          path: '/list',
        },
        {
          name: 'About',
          path: '/about',
        },
      ],
      loginList: [{
        name : 'Login',
        path: '/login',
      },
      {
        name : 'Sign Up',
        path: '/signup',
      }],
    }
  },
}
</script>
