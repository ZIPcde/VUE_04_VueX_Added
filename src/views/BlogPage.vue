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
          <article v-for="(item, index) in paginatedArticles" :key="index">
            <div class="news_article-holder">
              <div class="news_img-holder">
                <div class="news_img_text-holder">
                  <p class="news_img_text jost-font font_16">{{ truncateText(item.theme) }}</p>
                </div>
                <img :src="item.image_path" alt="img" class="news_article_img-1" />
              </div>
              <div class="news_text-holder">
                <h3 class="jost-font font_25 main_theme-text">{{ truncateText(item.main_text) }}</h3>
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
        <div class="pagination">
          <button @click="prevSet" v-if="buttonSet > 0" :class="['jost-font', 'font_16']"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 1.6286L1.55714 8.31432L7.5 15" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg></button>
          <button
            v-for="page in buttons"
            :key="page"
            @click="currentPage = page"
            :class="[{ 'active-button': currentPage === page }, 'jost-font', 'font_16']"
          >
            {{ page + 1 }}
          </button>
          <button @click="nextSet" v-if="(buttonSet + 1) * 3 < totalPages" :class="['jost-font', 'font_16']"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.55714 15L7.5 8.31429L1.55714 1.62857" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg></button>
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
      articles: articlesExport,
      currentPage: 0,
      articlesPerPage: 6,
      buttonSet: 0
    };
  },
  computed: {
    sortedArticles() {
      return [...this.articles].sort((a, b) => new Date(b.article_date) - new Date(a.article_date));
    },
    extendedNews() {
      return this.sortedArticles[0];
    },
    paginatedArticles() {
      const start = this.currentPage * this.articlesPerPage + 1;
      const end = start + this.articlesPerPage;
      return this.sortedArticles.slice(start, end);
    },
    totalPages() {
      return Math.ceil((this.articles.length - 1) / this.articlesPerPage);
    },
    buttons() {
      const start = this.buttonSet * 3;
      const end = Math.min(start + 3, this.totalPages);
      const pages = Array.from({ length: end - start }, (_, i) => i + start);
      return pages;
    }
  },
  methods: {
    nextSet() {
      this.buttonSet++;
      this.currentPage = this.buttonSet * 3;
    },
    prevSet() {
      this.buttonSet--;
      this.currentPage = this.buttonSet * 3;
    },
    truncateText(text) {
      const maxLength = 37;
      if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
      } else {
        return text;
      }
    }
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  background-color: #ffffff;
  color: #292F36;
  border: 1px solid #CDA274;
  border-radius: 50%;
  /* padding: 10px 20px; */
  width: 52px;
  height: 52px;
  margin: 0 10px;
  cursor: pointer;
}

.pagination button.active-button {
  background-color: #F4F0EC;
  border: none;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
