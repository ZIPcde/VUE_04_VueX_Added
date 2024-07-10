<template>
    <div class="lines">
      <NavComponent />
      <main>
        <BlogDetailsHeaderComponent />
        <BlogDetailsMainNewsComponent />
      </main>
      <HomeFooter />
    </div>
  </template>
  
  <script>
// import { articlesExport } from '@/data/articles.js';
import NavComponent from '../components/nav.vue';
import BlogDetailsHeaderComponent from '../components/BlogDetailsHeaderComponent.vue';
import BlogDetailsMainNewsComponent from '../components/BlogDetailsMainNewsComponent.vue';
import HomeFooter from '../components/HomeFooterComponent.vue';

  export default {
    name: 'BlogDetailsPage',
    components: {
    NavComponent,
    BlogDetailsHeaderComponent,
    BlogDetailsMainNewsComponent,
    HomeFooter
  },
    data() {
      return {
        data: [
          
        ]
      };
    },
    computed: {
      extendedNews() {
        return this.data[this.data.length - 1];
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  