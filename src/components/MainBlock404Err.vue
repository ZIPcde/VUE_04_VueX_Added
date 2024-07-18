<template>
    <main class="Err404_holder">
        <div class="text_and_button-holder-404">
            <h1 class="error-h1-404 dm-serif-display-regular font_250">404</h1>
            <p class="error-text-404 jost-font font_35">Приносим извинения, но страница, которую вы искали, не найдена</p>
            <button class="btn_404 jost-font font_18" autofocus type="button" @click="goHome">Домой <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
</svg>
</button>
        </div>
        <img class="Err404_img" src="../../public/images/404.png" alt="Error_404_img">
    </main>
</template>

<script>
export default {
  name: 'NavComponent',
  methods: {
    goHome() {
      this.$router.push('/');
    }
}
}
</script>