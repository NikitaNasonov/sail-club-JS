<script setup>
import { ref } from 'vue'
import cardsArr from '../assets/cards.json'

const isGridActive = ref(true)

/* Смена вида блока карточек */
function changeView(view) {
  view === 'list' ? isGridActive.value = false : isGridActive.value = true
}

/* Контент карточек */
const cards = ref(cardsArr)
</script>

<template>
  <section class="rent">
    <header>
      <h2>Аренда яхты</h2>
      <ul class="card-view-buttons">
        <li class="card-view-item">
          <button class="card-view-button-grid" :class="{ active: isGridActive }" @click="changeView('grid')" type="button"></button>
        </li>
        <li class="card-view-item">
          <button class="card-view-button-list" :class="{ active: !isGridActive }" @click="changeView('list')" type="button"></button>
        </li>
      </ul>
    </header>
    <ul class="cards" :class="{ list: !isGridActive}">
      <li class="card" v-for="card in cards" :key="card.id">
        <img class="card-img" :src="card.src" width="310" height="141" :alt="card.alt">
        <div class="card-content">
          <h3 class="card-title">{{ card.title }}</h3>
          <p class="card-description">{{ card.description }}</p>
          <ul class="card-features">
            <li v-for="feature in card.features">{{ feature }}</li>
          </ul>
        </div>
        <p class="card-price">
          <span class="card-price-name">Цена:</span>
          <span class="card-price-value">{{ card.price }} ₽/час</span>
        </p>
      </li>
    </ul>
  </section>
</template>


<style lang="scss">
.rent {
  margin-bottom: 120px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 45px;
  }

  h2 {
    margin: 0;
    font-size: 24px;
    line-height: 34px;
    text-decoration: underline;
    text-decoration-color: #00c6bd;
    text-decoration-thickness: 2px;
    text-underline-offset: 15px;
    text-underline-position: under;
  }
}

.card-view-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  gap: 15px;
  padding: 0;
  margin: 0;
  max-width: 800px;
  list-style: none;
}

.card-view-button-grid {
  width: 40px;
  height: 40px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  background-image: url("../assets/img/grid.svg");
  border: 1px solid #00c6bd;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.3;
  }
  &.active {
    background-image: url("../assets/img/grid-light.svg");
  }
}

.card-view-button-list {
  width: 40px;
  height: 40px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  background-image: url("../assets/img/list.svg");
  border: 1px solid #00c6bd;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.3;
  }
  &.active {
    background-image: url("../assets/img/list-light.svg");
  }
}

.cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
  gap: 30px;
}

.card {
  width: 310px;
  padding: 30px;
  box-shadow: 0 4px 30px rgba(22, 49, 82, 0.12);
}

.card-img {
  display: block;
  margin-bottom: 21px;
}

.card-title {
  margin: 0;
  margin-bottom: 18px;
  font-size: 20px;
  line-height: 23px;
}

.card-description {
  margin: 0;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 24px;
}

.card-features {
  padding: 0;
  margin: 0;
  margin-left: 18px;
  margin-bottom: 29px;
  list-style-type: disc;

  li {
    margin-bottom: 4px;
    font-size: 14px;
    line-height: 19px;
  }
}

.card-price {
  display: flex;
  justify-content: space-between;
  margin: 0;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
}

/* Вертикальная раскладка карточек списком */

.cards.list {
  flex-direction: column;

  .card {
    display: flex;
    width: 1110px;
    margin: 0;
    margin-bottom: 30px;
  }

  .card-img {
    width: 340px;
    height: 211px;
    margin: 0;
    margin-right: 30px;
    object-fit: cover;
  }

  .card-title {
    margin: 0;
    margin-bottom: 10px;
  }

  .card-features {
    margin: 0;
    margin-left: 18px;
  }

  .card-content {
    margin-right: auto;
    max-width: 345px;
  }

  .card-price {
    margin: 0;
  }

  .card-price-name {
    display: none;
  }
}
</style>