<template>
  <div class="lines">
    <NavComponent />
    <main>
      <ProjectDetailsHeader />

      <ProjectDetailsMainNewsComponent :id="projectId" />

    </main>
    <HomeFooter />
  </div>
</template>

<script>
import NavComponent from '../components/nav.vue';
import ProjectDetailsHeader from '../components/ProjectDetailsHeaderComponent.vue';
import HomeFooter from '../components/HomeFooterComponent.vue';
import ProjectDetailsMainNewsComponent from '../components/ProjectDetailsMainNewsComponent.vue';

export default {
  name: 'ProjectDetails',
  components: {
    NavComponent,
    ProjectDetailsHeader,
    ProjectDetailsMainNewsComponent,
    HomeFooter
  },
  computed: {
    projectId() {
      return this.$route.params.id;
    }
  }
};
</script>

<style scoped>
/* Your styles here */
</style>
