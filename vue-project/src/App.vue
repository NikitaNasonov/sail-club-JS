<script setup>
import Services from './components/Services.vue'
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import Articles from './components/Articles.vue'
import Rent from './components/Rent.vue'
import Gallery from './components/Gallery.vue'
import News from './components/News.vue'
import Contacts from './components/Contacts.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <header class="page-header">
    <Services />
    <Navigation />
  </header>
  <main class="main-content">
    <section class="hero">
      <Hero />
    </section>
    <Articles />
    <section class="rent">
      <Rent />
    </section>
    <section class="gallery">
      <Gallery />
    </section>
    <section class="news">
      <News />
    </section>
    <section class="contacts">
      <Contacts />
    </section>
  </main>
  <footer class="main-footer">
    <Footer /> <!-- переделать компонет, выводить ссылки через v-for в шаблоне? -->
  </footer>
</template>

<style>
/* Выделение активной кнопки */
/* эти стили не работают, если находятся в main.css,
хотя остальные работают */
.active {
  background-color: #00c6bd;
  color: #fdfdff;
}
</style>