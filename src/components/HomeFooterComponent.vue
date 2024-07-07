<template>
    <footer class="footer blog_footer">
            <div class="logos-holder">
                <div class="logoHolder">
                    <img src="../../public/images/logo.svg" alt="logo">
                    <h2 class="logotext dm-serif-display-regular font_40">Interno</h2>
                </div>
                <div class="footer_social-holder">
                    <img src="../../public/images/twitter.svg" alt="twitter">
                    <img class="insta_logo" src="../../public/images/instagram.svg" alt="instagram">
                </div>
            </div>
            <nav class="pages">
                <h3 class="dm-serif-display-regular font_25">Страницы</h3>
                <ul class="nav_links-holder2 jost-font font_20">
                    <li><router-link to="/">Домой</router-link></li>
                    <li><router-link to="/about">Проект</router-link></li>
                    <li><router-link to="/blog">Блог</router-link></li>
                </ul>
            </nav>
            <section class="footer_contacts">
                <h3 class="dm-serif-display-regular font_25">Контакты</h3>
                <p>55 East Birchwood Ave.<br> Brooklyn, New York 11201</p>
                <p>contact@interno.com</p>
                <p>(123) 456 - 7890</p>
            </section>
    </footer>
</template>

<script>
export default {
  name: 'HomeSection3'
}
</script>