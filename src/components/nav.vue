<template>
    <nav class="navHolder">
        <div class="logoHolder">
            <img src="../../public/images/logo.svg" alt="logo">
            <h1 class="logotext dm-serif-display-regular font_40">Interno</h1>
        </div>
        <ul class="nav_links-holder jost-font font_20">
            <li><router-link to="/">Домой</router-link></li>
            <li><router-link to="/project">Проект</router-link></li>
            <li><router-link to="/blog">Блог</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'NavComponent'
}
</script>