<template>
  <section class="news">
    <h2>Новости</h2>
    <article class="post">
      <figure class="post-img">
        <img src="../assets/img/news-photo.jpg" width="770" height="301" alt="Человек в форме моряка на морском судне">
        <figcaption>Победитель регаты шкипер Иван Кулешов</figcaption>
      </figure>
      <div class="post-content">
        <h3>Итоги регаты Sochi Race Week 2020</h3>
        <p>Свыше сотни участников собирались на побережье Сочи, чтобы посоревноваться за главный приз. В соревнованиях приняли участие как новички, так и <del>профессионалы</del> <ins>моряки</ins>, имеющие за плечами немалый опыт.</p>
        <p>На протяжении всего плавания нас сопровождало солнце прекрасная погода, в отдельные дни ветер до 20 узлов. Регата была прекрасно организована, 135 яхтсменов, 7 экипажей, 9 стран участниц, 4 гоночных дня, 3 дивизиона.</p>
        <h4>Команды-участники:</h4>
        <ul>
          <li>Восток 35</li>
          <li>Fortune Sailing</li>
          <li>Сибирь</li>
          <li>Левиафан</li>
          <li>Черный лебедь</li>
          <li>White Pepper</li>
          <li>Pearl</li>
        </ul>
        <p>Чемпионом регаты Sochi Race Week 2020 стала команда Fortune Sailing, в прошлом году остановившаяся в одном шаге от победы, а в этом сезоне опередившая ближайшего соперника — экипаж «Восток 35» — на <del>12 баллов</del> <ins>5 баллов</ins>.</p>
        <blockquote>Мы в команде очень дружны и понимаем друг друга без слов, думаю, поэтому мы и победили</blockquote>
        <p>Поздравляем победителей и ждем все участников снова на осенних регатах!</p>
      </div>
      <footer class="post-footer">
        <img class="post-author-img" src="../assets/img/author.jpg" width="60" height="60" alt="Артем Колесников">
        <p class="post-meta">
          <a href="#">Артем Колесников</a>
          <time datetime="2021-06-20">20.06.2021</time>
        </p>
        <a class="post-share" href="#">
          <img src="../assets/img/share.svg" width="26" height="26" alt="Поделиться">
        </a>
      </footer>
    </article>
  </section>
</template>

<style lang="scss">
.news {
  width: 770px;
  margin: 0 auto;
  margin-bottom: 120px;

  h2 {
    margin: 0;
    margin-bottom: 55px;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    text-decoration: underline;
    text-decoration-color: #00c6bd;
    text-decoration-thickness: 2px;
    text-underline-offset: 15px;
    text-underline-position: under;
  }
}

.post-img {
  margin: 0;
  margin-bottom: 33px;

  img {
    display: block;
    margin-bottom: 17px;
  }

  figcaption {
    margin: 0;
    font-size: 16px;
    line-height: 19px;
    color: #8693a4;
  }
}

.post-content {

  h3 {
    margin-top: 33px;
    margin-bottom: 27px;
    font-size: 22px;
    line-height: 26px;
  }

  h4 {
    margin-top: 24px;
    margin-bottom: 15px;
    font-size: 20px;
    line-height: 26px;
  }

  p {
    margin: 12px 0;
    font-size: 18px;
    line-height: 26px;
  }

  ins {
    text-decoration: none;
  }

  ul {
    padding: 0;
    margin: 0;
    margin-top: 15px;
    margin-bottom: 30px;
    margin-left: 19px;
    font-size: 18px;
    line-height: 26px;
  }

  li {
    margin-bottom: 8px;
  }

  blockquote {
    padding: 0 20px;
    margin: 0;
    margin-top: 38px;
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 26px;
    line-height: 36px;
    border-left: 2px solid #00c6bd;
  }
}

.post-footer {
  display: flex;
  margin-top: 40px;
}

.post-author-img {
  width: 60px;
  margin-right: 15px;
  border-radius: 50%;
}

.post-meta {
  width: 500px;
  margin: 0;
  margin-top: 7px;
  margin-right: auto;

  a {
    display: block;
    margin-bottom: 9px;
    font-size: 16px;
    line-height: 19px;
    font-weight: bold;
    color: #163152;
    text-decoration: none;

    &:hover {
      color: rgba(22, 49, 82, 0.5);
    }

    &:active {
      color: rgba(22, 49, 82, 0.3);
    }
  }

  time {
    font-size: 16px;
    line-height: 19px;
    color: #8693a4;
  }
}

.post-share {
  width: 26px;
  margin-top: 19px;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    opacity: 0.3;
  }
}
</style>