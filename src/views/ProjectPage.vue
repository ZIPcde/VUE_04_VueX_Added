<template>
  <div class="lines">
    <NavComponent />
    <main>
      <ProjectHeader />

      <section class="filters">
        <button
          v-for="tag in uniqueTags"
          :key="tag"
          @click="filterByTag(tag)"
          :class="['filter-button', { active: currentFilter === tag }]"
        >
          {{ tag }}
        </button>
        <button @click="clearFilter" :class="['filter-button', { active: currentFilter === null }]">
          Все
        </button>
      </section>

      <section class="project_news_holder">
        <div class="project_news_card-holder">
          <article v-for="(item, index) in paginatedArticles" :key="index">
            <div class="project_article-holder">
              <div class="news_img-holder">
                <img :src="item.image_path" alt="img" class="project_article_img-1" />
                <!-- <div class="project_img_text-holder">
                  <p class="project_img_text jost-font font_16">{{ truncateText(item.theme) }}</p>
                </div> -->
              </div>
              <div class="project_text-holder">
                <div>
                  <h3 class="dm-serif-display-sserif font_25 main_theme-text">{{ truncateText(item.theme) }}</h3>
                  <p class="jost-font font_18">Декор / Планировка</p>
                </div>
                <svg @click="goToProjectDetails(item.id)" class="news_btn" width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="26" cy="26.267" r="26" fill="currentColor" />
                  <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </article>
        </div>
        <div class="pagination">
          <button @click="prevSet" v-if="buttonSet > 0" :class="['jost-font', 'font_18']">
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 1.6286L1.55714 8.31432L7.5 15" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button
            v-for="page in buttons"
            :key="page"
            @click="currentPage = page"
            :class="[{ 'active-button': currentPage === page }, 'jost-font', 'font_16']"
          >
            {{ page + 1 }}
          </button>
          <button @click="nextSet" v-if="(buttonSet + 1) * 3 < totalPages" :class="['jost-font', 'font_16']">
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.55714 15L7.5 8.31429L1.55714 1.62857" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </section>
    </main>
    <HomeFooter />
  </div>
</template>

<script>
import NavComponent from '../components/nav.vue';
import ProjectHeader from '../components/ProjectHeaderComponent.vue';
import HomeFooter from '../components/HomeFooterComponent.vue';
import { articlesExport } from '@/data/articles.js';

export default {
  name: 'ProjectPage',
  components: {
    NavComponent,
    ProjectHeader,
    HomeFooter
  },
  data() {
    return {
      articles: articlesExport,
      currentPage: 0,
      articlesPerPage: 6,
      buttonSet: 0,
      currentFilter: null
    };
  },
  computed: {
    sortedArticles() {
      return [...this.articles].sort((a, b) => new Date(b.article_date) - new Date(a.article_date));
    },
    filteredArticles() {
      if (this.currentFilter) {
        return this.sortedArticles.filter(article => article.themeFilter === this.currentFilter);
      }
      return this.sortedArticles;
    },
    paginatedArticles() {
      const start = this.currentPage * this.articlesPerPage;
      const end = start + this.articlesPerPage;
      return this.filteredArticles.slice(start, end);
    },
    totalPages() {
      return Math.ceil((this.filteredArticles.length - 1) / this.articlesPerPage);
    },
    buttons() {
      const start = this.buttonSet * 3;
      const end = Math.min(start + 3, this.totalPages);
      const pages = Array.from({ length: end - start }, (_, i) => i + start);
      return pages;
    },
    uniqueTags() {
      const tags = this.articles.map(article => article.themeFilter);
      return [...new Set(tags)];
    }
  },
  methods: {
    goToProjectDetails(id) {
      this.$router.push({ name: 'ProjectDetails', params: { id } });
    },
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
    },
    filterByTag(tag) {
      this.currentFilter = tag;
      this.currentPage = 0;
      this.buttonSet = 0;
    },
    clearFilter() {
      this.currentFilter = null;
      this.currentPage = 0;
      this.buttonSet = 0;
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

.filters {
  border: 1px solid #CDA274;
  border-radius: 13px;
  width: fit-content;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 20px;
}

.filter-button {
  background-color: #ffffff;
  color: #292F36;
  height: 55px;
  /* border: 1px solid #CDA274; */
  /* border-radius: 20px; */
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  font-weight: 600;
}

.filter-button.active {
  background-color: #CDA274;
  border: none;
  border-radius: 10px;
  color: #ffffff
}
</style>
