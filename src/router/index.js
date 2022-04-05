import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShoppingView from '../views/ShoppingView.vue'
import ProductsView from '../views/ProductsView.vue'
import ReviewsView from '../views/ReviewsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: ShoppingView 
  },
  {
    path: '/products',
    name: 'shopping',
    component: ProductsView 
  },
  {
    path: '/reviews',
    name: 'shopping',
    component: ReviewsView 
  },
]

const router = new VueRouter({
  routes
})

export default router
