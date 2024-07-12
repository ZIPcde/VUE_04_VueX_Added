<template>
  <header class="blog_details-holder">
    <div class="blog_details-holder-flex">
      <div class="blog_details-news-holder-main" v-if="expandedArticle">
        <div class="main_news">
          <h2 class="dm-serif-display-regular font_50">{{ expandedArticle.theme }}</h2>
          <img :src="expandedArticle.image_path" alt="Article Image">
          <div class="blog_details_main_news-timeholder">
            <p class="jost-font font_16">{{ expandedArticle.article_date }}</p>
            <ul class="nav_links-holder jost-font font_16">
              <li><a href="./index.html">Интерьер /</a></li>
              <li><a href="about.php"> Домой /</a></li>
              <li><a href="./blog.html"> Декор</a></li>
            </ul>
          </div>
          <p class="jost-font font_22">{{ expandedArticle.main_text }}</p>
        </div>
      </div>
      <ol class="blog_details-news-holder">
        <li 
          v-for="(article, index) in filteredArticles" 
          :key="index" 
          @click="toggleArticleExpansion(index)"
          :class="{ selected: article.expanded }">
          <div class="simple_news">
            <h2>{{ article.theme }}</h2>
            <p>{{ article.article_date }}</p>
          </div>
        </li>
      </ol>
    </div>
    <div class="blog_details-button-holder">
      <h2 class="dm-serif-display-regular font_25">Тэги</h2>
      <button class="jost-font font_18"
        v-for="tag in uniqueTags" 
        :key="tag" 
        @click="filterByTag(tag)"
        :class="{ active: currentTag === tag }">
        {{ tag }}
      </button>
      <button class="jost-font font_18"
        v-if="currentTag" 
        @click="resetFilter" 
        :class="{ active: !currentTag }">
        Сбросить фильтр
      </button>
      <p>Child Component Received ID: {{ id }}</p>
    </div>
  </header>
</template>

<script>
import { articlesExport } from '@/data/articles.js';

export default {
  name: 'BlogDetailsMainNewsComponent',
  props: ['id'],
  data() {
    return {
      articles: articlesExport,
      filteredArticles: articlesExport.map(article => ({
        ...article,
        expanded: false
      })),
      currentTag: null,
      expandedIndex: null
    };
  },
  computed: {
    uniqueTags() {
      return [...new Set(this.articles.map(article => article.themeFilter))];
    },
    expandedArticle() {
      return this.expandedIndex !== null ? this.filteredArticles[this.expandedIndex] : null;
    }
  },
  methods: {
    toggleArticleExpansion(index) {
      this.filteredArticles.forEach((article, idx) => {
        article.expanded = idx === index ? !article.expanded : false;
      });
      this.expandedIndex = this.filteredArticles[index].expanded ? index : null;
    },
    filterByTag(tag) {
      this.currentTag = tag;
      this.filteredArticles = this.articles
        .filter(article => article.themeFilter === tag)
        .map(article => ({ ...article, expanded: false }));
      this.expandedIndex = null; 
    },
    resetFilter() {
      this.currentTag = null;
      this.filteredArticles = this.articles.map(article => ({ ...article, expanded: false }));
      this.expandedIndex = null; 
    },
    setInitialExpandedArticle() {
      const articleIndex = this.filteredArticles.findIndex(article => article.id === this.id);
      if (articleIndex !== -1) {
        this.filteredArticles.forEach((article, idx) => {
          article.expanded = idx === articleIndex;
        });
        this.expandedIndex = articleIndex;
      }
    }
  },
  mounted() {
    this.setInitialExpandedArticle();
  }
};
</script>

<style scoped>
.selected {
  border: 2px solid rgba(255, 166, 0, 0.233);
  border-radius: 23px;
  background-color: bisque;
}
</style>