<script setup>
import { ref } from 'vue'

const topics = ref([
  {
    id: 1,
    title: "Компания",
    links: ["О нас", "Команда", "Новости", "Блог", "Галерея"]
  },
  {
    id: 2,
    title: "Яхт-клуб",
    links: ["Правила", "Стоимость", "Анкета", "FAQ", "Партнеры"]
  },
  {
    id: 3,
    title: "Услуги",
    links: ["Аренда яхты", "Свадьба на яхте", "День рождения", "Бизнес-встречи", "Прогулки"]
  },
  {
    id: 4,
    title: "Регаты",
    links: ["Корпоративные регаты", "Календарь мероприятий", "Стать участником", "Результаты регат", "Обучение"]
  }
])
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

<style>
.main-footer {
  padding-top: 60px;
  padding-bottom: 60px;
  margin-top: 120px;
  font-size: 10px;
  line-height: 12px;
  border-top: 1px solid rgba(22, 49, 82, 0.1);
}

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

.main-footer .logo {
  width: 100px;
  height: 106px;
  margin-bottom: 30px;
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
}

.footer-navigation-topic h2 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
}

.footer-navigation {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-navigation-item {
  margin-bottom: 12px;
}

.footer-navigation-item:last-child {
  margin-bottom: 0;
}

.footer-navigation-item a {
  color: #163152;
  text-decoration: none;
}

.footer-navigation-item a:hover {
  color: rgba(22, 49, 82, 0.5);
}

.footer-navigation-item a:active {
  color: rgba(22, 49, 82, 0.3);
}

.policy {
  margin: 0;
  margin-bottom: 8px;
}

.policy a {
  color: #163152;
  text-decoration: none;
}

.policy a:hover {
  color: rgba(22, 49, 82, 0.5);
}

.policy a:active {
  color: rgba(22, 49, 82, 0.3);
}

.copyright {
  margin: 0;
}
</style>