<template>
  <!-- Footer -->
  <footer class="bg-dark text-center text-white mt-4">
    <!-- Grid container -->
    <div class="container-fluid p-4">
      <!-- section Socials -->
      <section class="mb-4">
        <!-- Facebook -->
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #3b5998"
          href="#!"
          role="button"
        >
          <i class="fab fa-facebook-f"></i>
        </a>

        <!-- Twitter -->
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #55acee"
          href="#!"
          role="button"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <!-- Instagram -->
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #ac2bac"
          href="#!"
          role="button"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </section>

      <!-- Section: Text -->
      <section class="mb-4">
        <p>
          This website was developed thanks to the efforts of the students of the course of HyperMedia Applications of the
          Master Degree in Computer Science of the Politecnico di Milano
        </p>
      </section>
      <!-- Section: Text -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2022 Copyright:
      <a class="text-danger" href="/">Alit Group</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>


<script>
export default {
  name: 'FooterComponent',
  data(){
      return{
          info:[
              {
                  name: "City",
                  content: "Milano",
              },
          ]
      }
  }
}
</script>