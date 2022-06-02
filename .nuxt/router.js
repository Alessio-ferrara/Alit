import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
const _1ededf8f = () => interopDefault(import('..\\pages\\about_us.vue' /* webpackChunkName: "pages/about_us" */))
const _451025dc = () => interopDefault(import('..\\pages\\contact_us.vue' /* webpackChunkName: "pages/contact_us" */))
const _546db958 = () => interopDefault(import('..\\pages\\events.vue' /* webpackChunkName: "pages/events" */))
const _5796f18c = () => interopDefault(import('..\\pages\\itineraries.vue' /* webpackChunkName: "pages/itineraries" */))
const _310cc7c6 = () => interopDefault(import('..\\pages\\list.vue' /* webpackChunkName: "pages/list" */))
const _9975b530 = () => interopDefault(import('..\\pages\\pois.vue' /* webpackChunkName: "pages/pois" */))
const _1ac9d05d = () => interopDefault(import('..\\pages\\services.vue' /* webpackChunkName: "pages/services" */))
const _0cf0851f = () => interopDefault(import('..\\pages\\event\\_id.vue' /* webpackChunkName: "pages/event/_id" */))
const _4e942a4e = () => interopDefault(import('..\\pages\\itinerary\\_id.vue' /* webpackChunkName: "pages/itinerary/_id" */))
const _1b13692f = () => interopDefault(import('..\\pages\\poi\\_id.vue' /* webpackChunkName: "pages/poi/_id" */))
const _eca0dcb8 = () => interopDefault(import('..\\pages\\service\\_id.vue' /* webpackChunkName: "pages/service/_id" */))
const _232e6763 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
=======
const _7d04c764 = () => interopDefault(import('../pages/about_us.vue' /* webpackChunkName: "pages/about_us" */))
const _0125926d = () => interopDefault(import('../pages/events.vue' /* webpackChunkName: "pages/events" */))
const _1d5bd976 = () => interopDefault(import('../pages/itineraries.vue' /* webpackChunkName: "pages/itineraries" */))
const _b5e2931c = () => interopDefault(import('../pages/list.vue' /* webpackChunkName: "pages/list" */))
const _70da3fbd = () => interopDefault(import('../pages/pois.vue' /* webpackChunkName: "pages/pois" */))
const _78efb832 = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _37533fbe = () => interopDefault(import('../pages/event/_id.vue' /* webpackChunkName: "pages/event/_id" */))
const _fd1508dc = () => interopDefault(import('../pages/itinerary/_id.vue' /* webpackChunkName: "pages/itinerary/_id" */))
const _36eaf0d1 = () => interopDefault(import('../pages/poi/_id.vue' /* webpackChunkName: "pages/poi/_id" */))
const _1d10af88 = () => interopDefault(import('../pages/service/_id.vue' /* webpackChunkName: "pages/service/_id" */))
const _183c97ae = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
>>>>>>> 088047ccb237daf92ecb33a8ed5565b90e81b377

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about_us",
<<<<<<< HEAD
    component: _1ededf8f,
=======
    component: _7d04c764,
>>>>>>> 088047ccb237daf92ecb33a8ed5565b90e81b377
    name: "about_us"
  }, {
    path: "/contact_us",
    component: _451025dc,
    name: "contact_us"
  }, {
    path: "/events",
<<<<<<< HEAD
    component: _546db958,
    name: "events"
  }, {
    path: "/itineraries",
    component: _5796f18c,
    name: "itineraries"
  }, {
    path: "/list",
    component: _310cc7c6,
    name: "list"
  }, {
    path: "/pois",
    component: _9975b530,
    name: "pois"
  }, {
    path: "/services",
    component: _1ac9d05d,
    name: "services"
  }, {
    path: "/event/:id?",
    component: _0cf0851f,
    name: "event-id"
  }, {
    path: "/itinerary/:id?",
    component: _4e942a4e,
    name: "itinerary-id"
  }, {
    path: "/poi/:id?",
    component: _1b13692f,
    name: "poi-id"
  }, {
    path: "/service/:id?",
    component: _eca0dcb8,
    name: "service-id"
  }, {
    path: "/",
    component: _232e6763,
=======
    component: _0125926d,
    name: "events"
  }, {
    path: "/itineraries",
    component: _1d5bd976,
    name: "itineraries"
  }, {
    path: "/list",
    component: _b5e2931c,
    name: "list"
  }, {
    path: "/pois",
    component: _70da3fbd,
    name: "pois"
  }, {
    path: "/services",
    component: _78efb832,
    name: "services"
  }, {
    path: "/event/:id?",
    component: _37533fbe,
    name: "event-id"
  }, {
    path: "/itinerary/:id?",
    component: _fd1508dc,
    name: "itinerary-id"
  }, {
    path: "/poi/:id?",
    component: _36eaf0d1,
    name: "poi-id"
  }, {
    path: "/service/:id?",
    component: _1d10af88,
    name: "service-id"
  }, {
    path: "/",
    component: _183c97ae,
>>>>>>> 088047ccb237daf92ecb33a8ed5565b90e81b377
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
