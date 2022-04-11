import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/SignInView.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/MainLayoutView.vue'),
    children:[
      {
        path: '',
        name: 'postlist',
        component: () => import('../views/PostListView.vue')
      },
      {
        path: '/favorite',
        name: 'favorite',
        component: () => import('../views/FavoriteView.vue')
      },
      {
        path: '/mylist',
        name: 'mylist',
        component: () => import('../views/MyListingView.vue')
      },
      {
        path: '/addnew',
        name: 'addnew',
        component: () => import('../views/AddNewView.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      }
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
