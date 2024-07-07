<template>
  <div class="lines">
    <NavComponent />
    <main>
      <BlogHeader />
      <section class="blog_news_holder">
        <h2 class="blog_news_last-h2 dm-serif-display-regular font_50">Последний пост</h2>
        <article class="extended-news">
          <img :src="extendedNews.image_path" alt="img" class="news_extended_img-1" />
          <div class="blog_ext-article-text">
            <h2 class="extended-news-h2 dm-serif-display-regular font_25">{{ extendedNews.theme }}</h2>
            <p class="jost-font font_22">{{ extendedNews.main_text }}</p>
            <p class="jost-font font_22">{{ extendedNews.largeText }}</p><br />
            <div class="news_time-and-button-holder">
              <time class="jost-font font_16">{{ extendedNews.article_date }}</time>
              <svg class="news_btn" width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="26" cy="26.267" r="26" fill="currentColor" />
                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </article>
        <div class="blog_news_card-holder">
          <article v-for="(item, index) in sortedArticles.slice(1, 7)" :key="index">
            <div class="news_article-holder">
              <div class="news_img-holder">
                <div class="news_img_text-holder">
                  <p class="news_img_text jost-font font_16">{{ item.theme }}</p>
                </div>
                <img :src="item.image_path" alt="img" class="news_article_img-1" />
              </div>
              <div class="news_text-holder">
                <h3 class="jost font_25 main_theme-text">{{ item.main_text }}</h3>
                <div class="news_time-and-button-holder">
                  <time class="time jost-font font_16" :datetime="item.article_date">{{ item.article_date }}</time>
                  <svg class="news_btn" width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26" cy="26.267" r="26" fill="currentColor" />
                    <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
    <HomeFooter />
  </div>
</template>

<script>
import NavComponent from '../components/nav.vue';
import BlogHeader from '../components/BlogHeaderComponent.vue';
import HomeFooter from '../components/HomeFooterComponent.vue';
import { articlesExport } from '@/data/articles.js';

export default {
  name: 'BlogPage',
  components: {
    NavComponent,
    BlogHeader,
    HomeFooter
  },
  data() {
    return {
      articles: articlesExport
    };
  },
  computed: {
    sortedArticles() {
      return [...this.articles].sort((a, b) => new Date(b.article_date) - new Date(a.article_date));
    },
    extendedNews() {
      return this.sortedArticles[0];
    }
  }
};
</script>

<style scoped>
/* Ваши стили */
</style>
