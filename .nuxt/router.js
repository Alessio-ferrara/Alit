import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
const _dbe5e968 = () => interopDefault(import('../pages/about_us.vue' /* webpackChunkName: "pages/about_us" */))
const _b53b534e = () => interopDefault(import('../pages/contact_us.vue' /* webpackChunkName: "pages/contact_us" */))
const _5bbdb055 = () => interopDefault(import('../pages/events.vue' /* webpackChunkName: "pages/events" */))
const _7e28665d = () => interopDefault(import('../pages/itineraries.vue' /* webpackChunkName: "pages/itineraries" */))
const _0730b7a5 = () => interopDefault(import('../pages/pois.vue' /* webpackChunkName: "pages/pois" */))
const _e41007cc = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _70569939 = () => interopDefault(import('../pages/event/_id.vue' /* webpackChunkName: "pages/event/_id" */))
const _320368aa = () => interopDefault(import('../pages/itinerary/_id.vue' /* webpackChunkName: "pages/itinerary/_id" */))
const _2f568fe9 = () => interopDefault(import('../pages/poi/_id.vue' /* webpackChunkName: "pages/poi/_id" */))
const _7e4dfb54 = () => interopDefault(import('../pages/service/_id.vue' /* webpackChunkName: "pages/service/_id" */))
const _4cb51cc6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
=======
const _1ededf8f = () => interopDefault(import('..\\pages\\about_us.vue' /* webpackChunkName: "pages/about_us" */))
const _451025dc = () => interopDefault(import('..\\pages\\contact_us.vue' /* webpackChunkName: "pages/contact_us" */))
const _546db958 = () => interopDefault(import('..\\pages\\events.vue' /* webpackChunkName: "pages/events" */))
const _5796f18c = () => interopDefault(import('..\\pages\\itineraries.vue' /* webpackChunkName: "pages/itineraries" */))
const _9975b530 = () => interopDefault(import('..\\pages\\pois.vue' /* webpackChunkName: "pages/pois" */))
const _1ac9d05d = () => interopDefault(import('..\\pages\\services.vue' /* webpackChunkName: "pages/services" */))
const _0cf0851f = () => interopDefault(import('..\\pages\\event\\_id.vue' /* webpackChunkName: "pages/event/_id" */))
const _4e942a4e = () => interopDefault(import('..\\pages\\itinerary\\_id.vue' /* webpackChunkName: "pages/itinerary/_id" */))
const _1b13692f = () => interopDefault(import('..\\pages\\poi\\_id.vue' /* webpackChunkName: "pages/poi/_id" */))
const _eca0dcb8 = () => interopDefault(import('..\\pages\\service\\_id.vue' /* webpackChunkName: "pages/service/_id" */))
const _232e6763 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
>>>>>>> 462b89b5f2aed373ba582835d6725338b39c4af3

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
    component: _dbe5e968,
    name: "about_us"
  }, {
    path: "/contact_us",
    component: _b53b534e,
    name: "contact_us"
  }, {
    path: "/events",
    component: _5bbdb055,
    name: "events"
  }, {
    path: "/itineraries",
    component: _7e28665d,
    name: "itineraries"
  }, {
    path: "/pois",
    component: _0730b7a5,
    name: "pois"
  }, {
    path: "/services",
    component: _e41007cc,
    name: "services"
  }, {
    path: "/event/:id?",
    component: _70569939,
    name: "event-id"
  }, {
    path: "/itinerary/:id?",
    component: _320368aa,
    name: "itinerary-id"
  }, {
    path: "/poi/:id?",
    component: _2f568fe9,
    name: "poi-id"
  }, {
    path: "/service/:id?",
    component: _7e4dfb54,
    name: "service-id"
  }, {
    path: "/",
    component: _4cb51cc6,
=======
    component: _1ededf8f,
    name: "about_us"
  }, {
    path: "/contact_us",
    component: _451025dc,
    name: "contact_us"
  }, {
    path: "/events",
    component: _546db958,
    name: "events"
  }, {
    path: "/itineraries",
    component: _5796f18c,
    name: "itineraries"
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
>>>>>>> 462b89b5f2aed373ba582835d6725338b39c4af3
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
