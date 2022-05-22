import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0125926d = () => interopDefault(import('../pages/events.vue' /* webpackChunkName: "pages/events" */))
const _b5e2931c = () => interopDefault(import('../pages/list.vue' /* webpackChunkName: "pages/list" */))
const _45962626 = () => interopDefault(import('../pages/poi.vue' /* webpackChunkName: "pages/poi" */))
const _78efb832 = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _c93a126e = () => interopDefault(import('../pages/details/_id.vue' /* webpackChunkName: "pages/details/_id" */))
const _37533fbe = () => interopDefault(import('../pages/event/_id.vue' /* webpackChunkName: "pages/event/_id" */))
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
    component: _0125926d,
    name: "events"
  }, {
    path: "/list",
    component: _b5e2931c,
    name: "list"
  }, {
    path: "/poi",
    component: _45962626,
    name: "poi"
  }, {
    path: "/services",
    component: _78efb832,
    name: "services"
  }, {
    path: "/details/:id?",
    component: _c93a126e,
    name: "details-id"
  }, {
    path: "/event/:id?",
    component: _37533fbe,
    name: "event-id"
  }, {
    path: "/",
    component: _183c97ae,
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
