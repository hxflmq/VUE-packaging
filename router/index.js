import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
// 引入元数据管理路由
import metaData from './metaData.js'
// 引入资源管理的路由
import resource from './resource.js'
// 引入权限管理的路由
import management from './management.js'

Vue.use(Router)

const myRouter = new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/views/login/Login.vue'], resolve)
    },
    {
      path: '/dashboard',
      component: resolve => require(['@/components/Dashboard/Dashboard.vue'], resolve),
      meta: {
        requiresAuth: true
      },
      children: [...metaData, ...resource, ...management]
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
myRouter.beforeEach((to, from, next) => {
  store.dispatch('changRouteLoading', true)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (sessionStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})
myRouter.afterEach((to, from) => {
  store.dispatch('changRouteLoading', false)
})
export default myRouter
