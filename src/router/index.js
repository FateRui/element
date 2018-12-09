import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods/goods'
import ratings from '../components/ratings/ratings'
import seller from '../components/seller/seller'
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.use(Router)

let routes = [
  {name: 'goods', path: '/goods', component: goods},
  {name: 'ratings', path: '/ratings', component: ratings},
  {name: 'seller', path: '/seller', component: seller, meta: {requireAuth: true}},
  {path: '*', redirect: {name: 'goods'}}
]
let router = new Router({
  routes
})

export default router

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    next()
  } else {
    window.localStorage.setItem('token', '31ih1ihhhi3hiih2')
    next()
  }
})

axios.interceptors.request.use((config) => {
  if (window.localStorage.getItem('token')) {
    config.headers.token = window.localStorage.getItem('token')
  }
  return config
},
(err) => {
  return Promise.reject(err)
})

axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // 返回 401 清除token信息并跳转到登录页面
        router.replace({
          path: 'login',
          query: {redirect: router.currentRoute.fullPath}
        })
    }
  }
  return Promise.reject(error.response.data)
})
