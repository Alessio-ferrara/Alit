export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  target: "server",
  serverMiddleware: [
    {
      path: "/api",
      handler: "~/server/api.js",
    },
  ],
  head: {
    title: "Dua Tiranën",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Let's discover Tirana, the capital city of Albania and one of the most important cities from the economic, political, historical and nature point of view. Tirana, chosen also The European Youth Capital, is a touristic gem.",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/icon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
      }, //Bootstrap
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.0.0/mdb.min.css",
      }, //MDB
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
      }, //FontAwesome
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
      }, //GoogleFonts
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
      }, //Bootstrap
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.0.0/mdb.min.js",
      }, //MDB
    ],
  },
  env: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/truncate.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    [
      "nuxt-gmaps",
      {
        key: "AIzaSyDX_OSdMYc79SeKrOLBh7VqZ5_n-mdexew",
        //you can use libraries: ['places']
      },
    ],
    "@nuxtjs/axios",
    '@nuxt/image'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    //baseURL: 'http://localhost:3000'
    baseURL:
      process.env.NODE_ENV == "development"
        ? "http://localhost:3000"
        : "https://dua-tiranen.herokuapp.com",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  image: {
    // Options
  }
};
