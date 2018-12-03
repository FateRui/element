import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods/goods'
import ratings from '../components/ratings/ratings'
import seller from '../components/seller/seller'

Vue.use(Router)

let routes = [
  {name: 'goods', path: '/goods', component: goods},
  {name: 'ratings', path: '/ratings', component: ratings},
  {name: 'seller', path: '/seller', component: seller}
]

export default new Router({
  routes
})
