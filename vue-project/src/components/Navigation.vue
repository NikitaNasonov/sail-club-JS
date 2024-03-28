<template>
  <nav class="main-nav">
    <p class="logo">
      <img src="../assets/img/logo.svg" width="64" height="68" alt="Логотип яхт-клуба Yacht Club">
    </p>
    <ul class="site-navigation">
      <li class="site-navigation-item">
        <a href="#">Наш клуб</a>
      </li>
      <li class="site-navigation-item">
        <a href="#">Регаты</a>
      </li>
      <li class="site-navigation-item">
        <a href="#">Команда</a>
      </li>
      <li class="site-navigation-item">
        <a href="#">Обучение</a>
      </li>
      <li class="site-navigation-item">
        <a href="#">Новости</a>
      </li>
      <li class="site-navigation-item">
        <a href="#">Контакты</a>
      </li>
    </ul>
    <a class="signin" href="#">
      <img src="../assets/img/user.svg" width="16" height="18" alt="Кабинет пользователя">
    </a>
  </nav>
</template>

<style>
.main-nav {
  display: flex;
  align-items: center;
  width: 1170px;
  margin: 0 auto;
  padding: 20px 55px;
}

.logo {
  width: 64px;
  height: 68px;
  margin: 0;
  margin-right: auto;
}

.site-navigation {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  margin-right: 40px;
  list-style: none;
  max-width: 990px;
}

.site-navigation-item {
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }

  a {
    font-size: 14px;
    line-height: 18px;
    color: #163152;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      color: rgba(22, 49, 82, 0.5);
    }
    &:active {
      color: rgba(22, 49, 82, 0.3);
    }
  }
}

.signin {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid #00c6bd;
  border-radius: 50%;

  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.3;
  }
}
</style>