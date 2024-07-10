import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/Home.vue'
import BlogPage from '../views/BlogPage.vue'
import BlogDetailsPage from '../views/BlogDetailsPage.vue'
import ProjectPage from '../views/ProjectPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage
  },
  {
    path: '/blogDetails',
    name: 'BlogDetails',
    component: BlogDetailsPage
  },
  {
    path: '/project',
    name: 'Project',
    component: ProjectPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
