import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _501b684c = () => interopDefault(import('../pages/about_us.vue' /* webpackChunkName: "pages/about_us" */))
const _194d7359 = () => interopDefault(import('../pages/contact_us.vue' /* webpackChunkName: "pages/contact_us" */))
const _13bf4d55 = () => interopDefault(import('../pages/events.vue' /* webpackChunkName: "pages/events" */))
const _f0be2d46 = () => interopDefault(import('../pages/itineraries.vue' /* webpackChunkName: "pages/itineraries" */))
const _512a0b5a = () => interopDefault(import('../pages/list.vue' /* webpackChunkName: "pages/list" */))
const _1cf594a5 = () => interopDefault(import('../pages/pois.vue' /* webpackChunkName: "pages/pois" */))
const _4c06591a = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _7413dc39 = () => interopDefault(import('../pages/event/_id.vue' /* webpackChunkName: "pages/event/_id" */))
const _8131a8ac = () => interopDefault(import('../pages/itinerary/_id.vue' /* webpackChunkName: "pages/itinerary/_id" */))
const _778892e9 = () => interopDefault(import('../pages/poi/_id.vue' /* webpackChunkName: "pages/poi/_id" */))
const _f0730358 = () => interopDefault(import('../pages/service/_id.vue' /* webpackChunkName: "pages/service/_id" */))
const _20e84074 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _501b684c,
    name: "about_us"
  }, {
    path: "/contact_us",
    component: _194d7359,
    name: "contact_us"
  }, {
    path: "/events",
    component: _13bf4d55,
    name: "events"
  }, {
    path: "/itineraries",
    component: _f0be2d46,
    name: "itineraries"
  }, {
    path: "/list",
    component: _512a0b5a,
    name: "list"
  }, {
    path: "/pois",
    component: _1cf594a5,
    name: "pois"
  }, {
    path: "/services",
    component: _4c06591a,
    name: "services"
  }, {
    path: "/event/:id?",
    component: _7413dc39,
    name: "event-id"
  }, {
    path: "/itinerary/:id?",
    component: _8131a8ac,
    name: "itinerary-id"
  }, {
    path: "/poi/:id?",
    component: _778892e9,
    name: "poi-id"
  }, {
    path: "/service/:id?",
    component: _f0730358,
    name: "service-id"
  }, {
    path: "/",
    component: _20e84074,
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
