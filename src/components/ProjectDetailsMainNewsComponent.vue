<template>
  <header class="project_details-holder">
    <div class="project_details-holder-flex">
      <div class="project_details-news-holder-main" v-if="expandedArticle">
        <div class="main_news">
          <h2 class="dm-serif-display-regular font_50">{{ expandedArticle.theme }}</h2>
          <p class="jost-font font_22">{{ expandedArticle.main_text }}</p>
          <div class="slider">
            <div class="slider-container" :style="{ transform: 'translateX(' + transformValue + ')' }">
              <div class="slider-item" v-for="(image, index) in images" :key="index">
                <img class="slider_img" :src="image" :alt="'Image ' + (index + 1)">
              </div>
            </div>
            <div class="pagination">
              <span
                class="pagination-point"
                v-for="(point, index) in paginationPoints"
                :key="index"
                @click="goToSlide(index)"
                :class="{ active: index === currentIndex }"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProjectDetailsMainNewsComponent',
  props: ['id'],
  data() {
    return {
      currentIndex: 0
    };
  },
  computed: {
    ...mapGetters(['allArticles', 'articleById']),
    expandedArticle() {
      return this.articleById(this.id);
    },
    images() {
      if (this.expandedArticle) {
        const basePath = this.expandedArticle.image_path;
        const basePathWithoutExt = basePath.slice(0, basePath.lastIndexOf('.'));
        const extension = basePath.slice(basePath.lastIndexOf('.'));
        return [
          basePath,
          `${basePathWithoutExt}-2${extension}`,
          `${basePathWithoutExt}-3${extension}`
        ];
      }
      return [];
    },
    transformValue() {
      return `-${this.currentIndex * 100}%`;
    },
    paginationPoints() {
      return Array.from({ length: this.images.length }, (_, i) => i);
    }
  },
  methods: {
    ...mapActions(['loadArticles']),
    setInitialExpandedArticle() {
      if (this.allArticles.length > 0) {
        const articleIndex = this.allArticles.findIndex(article => article.id === this.id);
        if (articleIndex !== -1) {
          this.expandedIndex = articleIndex;
        }
      }
    },
    goToSlide(index) {
      this.currentIndex = index;
    }
  },
  watch: {
    allArticles(newValue) {
      if (newValue.length > 0) {
        this.setInitialExpandedArticle();
      }
    }
  },
  created() {
    this.loadArticles();
  }
};
</script>

<style scoped>

.slider {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.slider-container {
  display: flex;
  transition: transform 0.5s ease;
}

.slider-item {
  flex: 0 0 100%;
  width: 100%;
  height: 53vw;
}

.slider_img {
  max-height: 53vw;
  overflow: hidden;
  object-fit: cover;
}

.pagination {
  text-align: center;
  margin-top: 10px;
}

.pagination-point {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 5px;
}

.pagination-point.active {
  background-color: #333;
  transform: scale(1.2);
}
</style>
