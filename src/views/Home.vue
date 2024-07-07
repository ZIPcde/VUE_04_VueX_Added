<template>
<div class="lines">
        <NavComponent />
        <main>
          <HomeHeader />
          <HomeSection1 />
          <HomeSection2 />
          <HomeSection3 />
        </main>
        <HomeFooter />
    </div>
</template>

<script>
import NavComponent from '../components/nav.vue';
import HomeHeader from '../components/HomeHeaderComponent.vue';
import HomeSection1 from '../components/HomeSection1Component.vue';
import HomeSection2 from '../components/HomeSection2Component.vue';
import HomeSection3 from '../components/HomeSection3Component.vue';
import HomeFooter from '../components/HomeFooterComponent.vue';

export default {
  name: 'HomePage',
  components: {
    NavComponent,
    HomeHeader,
    HomeSection1,
    HomeSection2,
    HomeSection3,
    HomeFooter,
  }
}

</script>