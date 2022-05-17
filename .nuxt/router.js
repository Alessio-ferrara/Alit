import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _043aed9c = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _0011bd09 = () => interopDefault(import('../pages/list.vue' /* webpackChunkName: "pages/list" */))
const _1842af5c = () => interopDefault(import('../pages/details/_id.vue' /* webpackChunkName: "pages/details/_id" */))
const _1d9a63f7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _043aed9c,
    name: "about"
  }, {
    path: "/list",
    component: _0011bd09,
    name: "list"
  }, {
    path: "/details/:id?",
    component: _1842af5c,
    name: "details-id"
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
