<template>
    <header class="blog_header">
        <div class="blog_header_img-holder">
            <img class="blog_header_img" src="../../public/images/project_header.png" alt="blog_kitchen">
        </div>
        <div class="blog_header_text">
            <h2 class="header_h2 dm-serif-display-sserif font_50">Наш проект </h2>
            <div class="blog_header_link-holder">
                <p class="blog_header_link jost-font font_22"><router-link to="/">Домой /</router-link><router-link to="/project">Проект</router-link></p>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>