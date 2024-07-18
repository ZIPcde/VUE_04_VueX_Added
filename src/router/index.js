import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/Home.vue';
import BlogPage from '../views/BlogPage.vue';
import BlogDetailsPage from '../views/BlogDetailsPage.vue';
import ProjectPage from '../views/ProjectPage.vue';
import ProjectDetailsPage from '../views/ProjectDetailsPage.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

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
    path: '/blogDetails/:id',
    name: 'BlogDetails',
    component: BlogDetailsPage,
    props: true
  },
  {
    path: '/project',
    name: 'Project',
    component: ProjectPage
  },
  {
    path: '/ProjectDetails/:id',
    name: 'ProjectDetails',
    component: ProjectDetailsPage,
    props: true
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
