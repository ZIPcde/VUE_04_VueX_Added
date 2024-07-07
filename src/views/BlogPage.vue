<!-- src/components/BlogPage.vue -->
<template>
    <div class="lines">
    <NavComponent />
    <main>
        <BlogHeader />
        <section class="blog_news_holder">
          <h2 class="blog_news_last-h2 dm-serif-display-regular font_50">Последний пост</h2>
          <article class="extended-news">
            <img :src="extendedNews.img" alt="img" class="news_extended_img-1" />
            <div class="blog_ext-article-text">
              <h2 class="extended-news-h2 dm-serif-display-regular font_25">{{ extendedNews.title }}</h2>
              <p class="jost-font font_22">{{ extendedNews.text }}</p>
              <p class="jost-font font_22">{{ extendedNews.largeText }}</p><br />
              <div class="news_time-and-button-holder">
                <time class="jost-font font_16">{{ extendedNews.date }}</time>
                <svg class="news_btn" width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="26" cy="26.267" r="26" fill="currentColor" />
                  <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </article>
          <div class="blog_news_card-holder">
            <article v-for="(item, index) in data.slice(0, 6)" :key="index">
              <div class="news_article-holder">
                <div class="news_img-holder">
                  <div class="news_img_text-holder">
                    <p class="news_img_text jost-font font_16">{{ item.title }}</p>
                  </div>
                  <img :src="item.img" alt="img" class="news_article_img-1" />
                </div>
                <div class="news_text-holder">
                  <h3 class="jost font_25 main_theme-text">{{ item.text }}</h3>
                  <div class="news_time-and-button-holder">
                    <time class="time jost-font font_16" :datetime="item.date">{{ item.date }}</time>
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
// import HomeHeader from '../components/HomeHeaderComponent.vue';
// import HomeSection1 from '../components/HomeSection1Component.vue';
// import HomeSection2 from '../components/HomeSection2Component.vue';
// import HomeSection3 from '../components/HomeSection3Component.vue';
import HomeFooter from '../components/HomeFooterComponent.vue';

  export default {
    name: 'BlogPage',
    components: {
    NavComponent,
    BlogHeader,
    // HomeHeader,
    // HomeSection1,
    // HomeSection2,
    // HomeSection3,
    HomeFooter
  },
    data() {
      return {
        data: [
          {
            title: 'Дизайн кухни',
            img: '/images/Img1.png',
            text: 'Создадим лучший макет перепланировки',
            date: '26 Декабрь,2022'
          },
          {
            title: 'Дизайн для жизни',
            img: '/images/Img2.png',
            text: 'Лучшие интерьерные идеи по низкой цене',
            date: '22 Декабрь,2022'
          },
          {
            title: 'Дизайн Интерьера',
            img: '/images/Img3.png',
            text: 'Лучшие интерьерные решения для офисов',
            date: '25 Декабрь,2022'
          },
          {
            title: 'Дизайн кухни',
            img: '/images/Img4.png',
            text: 'Создадим лучший макет перепланировки',
            date: '26 Декабрь,2022'
          },
          {
            title: 'Дизайн для жизни',
            img: '/images/Img5.png',
            text: 'Лучшие интерьерные идеи по низкой цене',
            date: '22 Декабрь,2022'
          },
          {
            title: 'Дизайн Интерьера',
            img: '/images/Img6.png',
            text: 'Лучшие интерьерные решения для офисов',
            date: '25 Декабрь,2022'
          },
          {
            title: 'Дизайн кухни',
            img: '/images/Img7.png',
            text: 'Low Cost Latest Invented Interior Designing Ideas',
            date: '26 Декабрь,2022',
            largeText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности.'
          }
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
  