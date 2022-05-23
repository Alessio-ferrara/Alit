import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0125926d = () => interopDefault(import('../pages/events.vue' /* webpackChunkName: "pages/events" */))
const _b5e2931c = () => interopDefault(import('../pages/list.vue' /* webpackChunkName: "pages/list" */))
const _70da3fbd = () => interopDefault(import('../pages/pois.vue' /* webpackChunkName: "pages/pois" */))
const _78efb832 = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _c93a126e = () => interopDefault(import('../pages/details/_id.vue' /* webpackChunkName: "pages/details/_id" */))
const _37533fbe = () => interopDefault(import('../pages/event/_id.vue' /* webpackChunkName: "pages/event/_id" */))
const _36eaf0d1 = () => interopDefault(import('../pages/poi/_id.vue' /* webpackChunkName: "pages/poi/_id" */))
const _183c97ae = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/events",
    component: _b0fd6178,
    name: "events"
  }, {
    path: "/list",
    component: _0011bd09,
    name: "list"
  }, {
    path: "/pois",
    component: _70da3fbd,
    name: "pois"
  }, {
    path: "/services",
    component: _1160c96e,
    name: "services"
  }, {
    path: "/details/:id?",
    component: _1842af5c,
    name: "details-id"
  }, {
    path: "/event/:id?",
    component: _31f2dfea,
    name: "event-id"
  }, {
    path: "/poi/:id?",
    component: _36eaf0d1,
    name: "poi-id"
  }, {
    path: "/",
    component: _1d9a63f7,
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
