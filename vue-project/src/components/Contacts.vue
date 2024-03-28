<template>
  <section class="contacts">
    <div class="contacts-content">
      <h2>Контакты</h2>
      <ul class="contact-items">
        <li class="contact-item">
          <h3>Адрес:</h3>
          <address>г. Сочи, ул. Бзугу, 9</address>
        </li>
        <li class="contact-item">
          <h3>Телефон:</h3>
          <a href="tel:+7622620563">8 (622) 62-05-63</a>
        </li>
        <li class="contact-item">
          <h3>E-mail:</h3>
          <a href="mailto:yachtclub-sochi@mail.ru">yachtclub-sochi@mail.ru</a>
        </li>
        <li class="contact-item">
          <h3>Мы в социальных сетях:</h3>
          <ul class="social-list">
            <li class="social-item">
              <a href="#">
              <img src="../assets/img/facebook.svg" alt="Facebook" width="9" height="16">
              </a>
            </li>
            <li class="social-item">
              <a href="#">
              <img src="../assets/img/twitter.svg" alt="Twitter" width="18" height="16">
              </a>
            </li>
            <li class="social-item">
              <a href="#">
              <img src="../assets/img/instagram.svg" alt="Instagram" width="18" height="18">
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <img class="contacts-img" src="../assets/img/map.png" width="670" height="351" alt="Карта с адресом яхт клуба">
  </section>
</template>

<style lang="scss">
.contacts {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

.contacts h2 {
  margin: 0;
  margin-bottom: 35px;
  font-size: 24px;
  line-height: 34px;
  text-decoration: underline;
  text-decoration-color: #00c6bd;
  text-decoration-thickness: 2px;
  text-underline-offset: 15px;
  text-underline-position: under;
}

.contacts-content {
  width: 400px;
  padding-top: 50px;
}

.contacts-img {
  width: 670px;
}

.contact-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-item {
  margin: 0;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 22px;

  h3 {
    display: inline;
    margin: 0;
    margin-right: 8px;
    font-size: 16px;
    line-height: 22px;
  }

  address {
    display: inline;
    font-style: normal;
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

.social-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  margin-top: 15px;
  list-style: none;
}

.social-item {
  margin-right: 15px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1px solid #00c6bd;

    &:hover {
      opacity: 0.5;
    }

    &:active {
      opacity: 0.3;
    }
  }
}
</style>