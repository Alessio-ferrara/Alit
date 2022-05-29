<template>
  <!-- Footer -->
  <footer class="bg-dark text-center text-white mt-4 pt-4">
    <!-- Grid container -->
    <div class="container-fluid p-4">
      <!-- Section: Text -->
      <section class="mb-4 row">
        <div class="col-md-9">
          <p class>
            This website was developed thanks to the efforts of the students of the course of HyperMedia Applications of the
            Master Degree in Computer Science of the
            <a
              class="text-danger text-decoration-underline"
              href="https://www.polimi.it/"
            >Politecnico di Milano</a>
          </p>
        </div>
        <div class="col-md-3">
          <img
            style="width: 90px;height: 90px;"
            src="../static/Schermata 2022-05-24 alle 18.17.31.png"
            alt="AlitGroup"
          />
          <img style="width: 90px;height: 90px;" src="../static/polimi.jpeg" alt="PoliMi" />
        </div>
      </section>
      <!-- Section: Text -->

      <!-- Section: Socials -->

      <section class="mb-4">
        <!-- Facebook -->
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #3b5998"
          href="https://www.facebook.com/pages/Tirana/102191273155324"
          role="button"
        >
          <i class="fab fa-facebook-f"></i>
        </a>

        <!-- Twitter -->
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #55acee"
          href="https://twitter.com/search?q=%23tirana&src=typeahead_click&f=top"
          role="button"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <!-- Instagram -->
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #ac2bac"
          href="https://www.instagram.com/visit_tirana/"
          role="button"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </section>

      <!-- Section: Landmarks -->
      <!-- <section class="text-left mb-4">
        <div class="col-md-3">
        <ul style="list-style-type:none;">
          <li
            v-for="(item, itemIndex) of footerList"
            :key="`item${itemIndex}`"
            class="text-white col-3"
          >
            <nuxt-link :to="item.path" class="text-danger">{{ item.name }}</nuxt-link>
          </li>
        </ul>
        </div>
      </section>-->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 1)">
      © 2022 Copyright:
      <a class="text-danger" href="/about_us">Alit Group</a>
      <!-- <a class="text-danger" href="/about">Alit Group </a>© -->
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<style scoped>
footer {
  margin-top: 30vh !important;
}
.multi-column {
  list-style-position: inside;
}
</style>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      footerList: [
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
      ]
    }
  },
}
</script>