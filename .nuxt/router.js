import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

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
