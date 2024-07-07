import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/Home.vue'
// import About from '../views/About.vue'
import BlogPage from '../views/BlogPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About
  // },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
