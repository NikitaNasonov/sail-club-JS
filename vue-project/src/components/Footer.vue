<script setup>
import { ref } from 'vue'
import arrLinks from '../assets/footer-links.json'

const topics = ref(arrLinks);
</script>

<template>
  <div class="footer-container">
    <div class="footer-column">
        <p class="logo">
        <img src="../assets/img/logo.svg" width="100" height="106" alt="Логотип яхт клуба">
        </p>
        <p class="policy"><a href="#">Политика конфиденциальности</a></p>
        <p class="copyright">Яхтклуб ©2020 Все права защищены</p>
    </div>
    <ul class="footer-navigation-topics">
        <li class="footer-navigation-topic" v-for="topic in topics" :key="topic.id">
          <h2>{{ topic.title }}</h2>
          <ul class="footer-navigation">
            <li class="footer-navigation-item" v-for="link in topic.links">
              <a href="#">{{ link }}</a>
            </li>
          </ul>
        </li>
    </ul>
  </div>
</template>

<style lang="scss">
.footer-container {
  width: 1170px;
  margin: 0 auto;
  padding: 0 55px;
  display: flex;
  justify-content: space-between;
}

.footer-column {
  width: 175px;
}

.footer-navigation-topics {
  display: flex;
  justify-content: space-between;
  width: 870px;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
  line-height: 16px;
}

.footer-navigation-topic {
  width: 165px;

  h2 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
  }
}

.footer-navigation {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-navigation-item {
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }

  a {
    color: #163152;
    text-decoration: none;

    &:hover {
      color: rgba(22, 49, 82, 0.5);
    }

    &:active {
      color: rgba(22, 49, 82, 0.3);
    }
  }
}

.policy {
  margin: 0;
  margin-bottom: 8px;

  a {
    color: #163152;
    text-decoration: none;

    &:hover {
      color: rgba(22, 49, 82, 0.5);
    }

    &:active {
      color: rgba(22, 49, 82, 0.3);
    }
  }
}

.copyright {
  margin: 0;
}
</style>