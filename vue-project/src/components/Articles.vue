<script setup>
import { ref } from 'vue'
import Article from './Article.vue'

const shortArticle1 = ref(true)
const shortArticle2 = ref(true)

/* Разворачивание текста статьи */
function moreText(numArticle) {
  numArticle === 1 ? shortArticle1.value = false : shortArticle2.value = false
}
</script>

<template>
  <article class="blog-article blog-article-1" :class="{ short : shortArticle1}">
    <div class="blog-article-content">
      <p class="blog-article-date"><time datetime="2021-10-20">20 октября</time> - <time datetime="2021-04-19">19 апреля</time></p>
      <Article
        title="Стань частью команды"
        description="Если вы давно хотели попробовать себя в яхтинге – сейчас самое лучшее время! Мы набираем команду будущих шкиперов. За 6 вы станете настоящим капитаном и уже в следующем сезоне сможете самостоятельно выйти в море!"
        @click-button="moreText(1)"
      />
    </div>
    <img class="blog-article-img" src="../assets/img/blog-photo-1.jpg" width="600" height="262" alt="Мужчина на яхте смотрит в бинокль">
  </article>
  <article class="blog-article blog-article-2" :class="{ short : shortArticle2}">
    <div class="blog-article-content">
      <p class="blog-article-date"><time datetime="2021-07-16">16 июля</time> - <time datetime="2021-07-23">23 июля</time></p>
      <Article
        title="Рожденные в воде"
        description="Подарите детям настоящее приключение! День с морскими пиратами на корабле – это лучшая команда, веселые аниматоры, игры, соревнования, работа в команде и, конечно, море!"
        @click-button="moreText(2)"
      />
    </div>
    <img class="blog-article-img" src="../assets/img/blog-photo-2.jpg" width="600" height="252" alt="Дети и взрослые на яхте">
  </article>
</template>

<style lang="scss">
.blog-article {
  display: flex;
  justify-content: space-between;
  width: 1030px;
  margin: 0 auto;
}

.blog-article-content {
  width: 400px;
}

.blog-article-img {
  width: 600px;
}

.blog-article-1 {
  margin-bottom: 100px;

  .blog-article-content {
    margin-right: 30px;
  }
}

.blog-article-2 {
  flex-direction: row-reverse;
  margin-bottom: 120px;

  .blog-article-content {
    text-align: right;
  }

  .blog-article-img {
    margin-right: 30px;
  }
}

.blog-article h2 {
  margin-top: 0;
  margin-bottom: 35px;
  font-size: 24px;
  line-height: 34px;
  text-decoration: underline;
  text-decoration-color: #00c6bd;
  text-decoration-thickness: 2px;
  text-underline-offset: 15px;
  text-underline-position: under;
}

.blog-article-date {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
}

.blog-article-description {
  margin-top: 0;
  margin-bottom: 15px;
}

.more {
  padding: 0;
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  color: inherit;
  text-decoration-line: underline;
  background-color: transparent;
  border: none;

  /* Элемент скрыт в развернутой статье */
  display: none;

  &:hover {
    text-decoration: none;
    opacity: 0.5;
  }

  &:active {
    text-decoration: none;
    opacity: 0.3;
  }
}

/* Сокращенное отображение статьи */

.blog-article.short .blog-article-description {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.blog-article.short .more {
  /* Показываем элемент в свернутой статье */
  display: inline-block;
}
</style>