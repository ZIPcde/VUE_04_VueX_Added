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
// import HomeHeader from '../components/HomeHeaderComponent.vue';
// import HomeSection1 from '../components/HomeSection1Component.vue';
// import HomeSection2 from '../components/HomeSection2Component.vue';
// import HomeSection3 from '../components/HomeSection3Component.vue';
import HomeFooter from '../components/HomeFooterComponent.vue';

  export default {
    name: 'BlogDetailsPage',
    components: {
    NavComponent,
    BlogDetailsHeaderComponent,
    BlogDetailsMainNewsComponent,
    // HomeHeader,
    // HomeSection1,
    // HomeSection2,
    // HomeSection3,
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
  /* Ваши стили */
  </style>
  