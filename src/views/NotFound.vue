<template>
  <div class="lines">
    <NavComponent />
    <MainBlock404Err />
  </div>
</template>

<script>
import NavComponent from '../components/nav.vue';
import MainBlock404Err from '../components/MainBlock404Err.vue';

export default {
  name: 'NotFound',
  components: {
    NavComponent,
    MainBlock404Err
  },
};
</script>

<style scoped>

</style>
