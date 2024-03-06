<script setup>
import { ref } from 'vue'
const isGridActive = ref(true)

/* Смена вида блока карточек */
function changeView(view) {
  view === 'list' ? isGridActive.value = false : isGridActive.value = true
}

/* Контент карточек */
const cards = ref([
  {
    id: 1,
    src: "/src/assets/img/photo-card-1.jpg",
    alt: "Белая двухпалубная яхта",
    title: "Катер Meridian 401",
    description: "Яхта 401 длиной 12.5 метров и шириной 4.2 метра, вместимостью 11 человек",
    features: ["2 каюты","4 спальных места","аудиосистема, кондиционер","холодильник, микроволновка","душ, туалет"],
    price: "14 000"
  },
  {
    id: 2,
    src: "/src/assets/img/photo-card-2.jpg",
    alt: "Белая двухпалубная яхта",
    title: "Катер 60 Manhattan",
    description: "Двухпалубное судно VIP уровня длиной 20 метров, вместимостью 10 человек",
    features: ["6 кают","носовая часть с огромной подушкой","просторный флайбридж","оборудованная кухня","джакузи"],
    price: "25 000"
  },
  {
    id: 3,
    src: "/src/assets/img/photo-card-3.jpg",
    alt: "Белая яхта",
    title: "Катер Starfisher 34",
    description: "Моторная яхта длиной 11 метров и вместимостью до 8 человек",
    features: ["4 каюты","6 спальных мест","аудиосистема, кондиционер","холодильник, микроволновка","душ, туалет"],
    price: "18 000"
  },
  {
    id: 4,
    src: "/src/assets/img/photo-card-4.jpg",
    alt: "Белый катер",
    title: "Катер Pacific 7-13",
    description: "Катер Pacific длиной 12 метров и шириной 4.6 метра, вместимостью 8 человек",
    features: ["1 каюта","2 спальных места","аудиосистема, кондиционер","холодильник, микроволновка","туалет"],
    price: "11 000"
  },
  {
    id: 5,
    src: "/src/assets/img/photo-card-5.jpg",
    alt: "Белый катер",
    title: "Катер Atlantic 3000",
    description: "Катер Atlantic длиной 14 метров и вместимостью до 6 человек",
    features: ["2 каюты","4 спальных места","просторный флайбридж","оборудованная кухня","душ, туалет"],
    price: "15 000"
  }
])

</script>

<template>
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
</template>


<style>
.rent {
  margin-bottom: 120px;
}

.rent header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;
}

.rent h2 {
  margin: 0;
  font-size: 24px;
  line-height: 34px;
  text-decoration: underline;
  text-decoration-color: #00c6bd;
  text-decoration-thickness: 2px;
  text-underline-offset: 15px;
  text-underline-position: under;
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
}

.card-view-button-grid:hover {
  opacity: 0.5;
}

.card-view-button-grid:active {
  opacity: 0.3;
}

.card-view-button-grid.active {
  background-image: url("../assets/img/grid-light.svg");
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
}

.card-view-button-list:hover {
  opacity: 0.5;
}

.card-view-button-list:active {
  opacity: 0.3;
}

.card-view-button-list.active {
  background-image: url("../assets/img/list-light.svg");
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
}

.card-features li {
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 19px;
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
}

.cards.list .card {
  display: flex;
  width: 1110px;
  margin: 0;
  margin-bottom: 30px;
}

.cards.list .card-img {
  width: 340px;
  height: 211px;
  margin: 0;
  margin-right: 30px;
  object-fit: cover;
}

.cards.list .card-title {
  margin: 0;
  margin-bottom: 10px;
}

.cards.list .card-features {
  margin: 0;
  margin-left: 18px;
}

.cards.list .card-content {
  margin-right: auto;
  max-width: 345px;
}

.cards.list .card-price {
  margin: 0;
}

.cards.list .card-price-name {
  display: none;
}
</style>