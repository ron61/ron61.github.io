import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fd41a8ea = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _ea640966 = () => interopDefault(import('../pages/blog/posts/world-history-of-chocolate.vue' /* webpackChunkName: "pages/blog/posts/world-history-of-chocolate" */))
const _2551925c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _fd41a8ea,
    name: "blog"
  }, {
    path: "/blog/posts/world-history-of-chocolate",
    component: _ea640966,
    name: "blog-posts-world-history-of-chocolate"
  }, {
    path: "/",
    component: _2551925c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
