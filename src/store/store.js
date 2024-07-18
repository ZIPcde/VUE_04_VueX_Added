import Vue from 'vue';
import Vuex from 'vuex';
import { articlesExport } from '@/data/articles'; // Adjust the path if necessary

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: []
  },
  mutations: {
    setArticles(state, articles) {
      state.articles = articles;
    }
  },
  actions: {
    loadArticles({ commit }) {
      commit('setArticles', articlesExport);
    }
  },
  getters: {
    allArticles: state => state.articles,
    articleById: state => id => state.articles.find(article => article.id === id)
  }
});
