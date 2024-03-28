<script setup>
import { ref } from 'vue'

const isDarkActive = ref(false)
const isSansSerifActive = ref(true)

/* Смена темы сайта */
function changeTheme(theme) {
  theme === 'dark' ? (
    isDarkActive.value = true,
    document.body.classList.add('dark')
  ) : (
    isDarkActive.value = false,
    document.body.classList.remove('dark')
  )
}

/* Смена шрифта сайта */
function changeFont(font) {
  font === 'serif' ? (
    isSansSerifActive.value = true,
    document.body.classList.remove('serif')
  ) : (
    isSansSerifActive.value = false,
    document.body.classList.add('serif')
  )
}
</script>

<template>
  <div class="services">
    <div class="services-content">
      <a class="location" href="#">Сочи</a>
      <p class="caption">Тема</p>
      <ul class="theme-switcher">
        <li>
          <button class="theme-button-dark" :class="{ active: isDarkActive }" @click="changeTheme('dark')" type="button"></button>
        </li>
        <li>
          <button class="theme-button-light" :class="{ active: !isDarkActive }" @click="changeTheme('light')" type="button"></button>
        </li>
      </ul>
      <p class="caption">Шрифт</p>
      <ul class="fonts">
        <li>
          <button class="font-button-sans-serif" :class="{ active: isSansSerifActive }" @click="changeFont('serif')" type="button">А</button>
        </li>
        <li>
          <button class="font-button-serif" :class="{ active: !isSansSerifActive }" @click="changeFont('sans')" type="button">А</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.services {
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(22, 49, 82, 0.1);
}

.services-content {
  display: flex;
  align-items: center;
  width: 1170px;
  margin: 0 auto;
}

.location {
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 25px;
  margin-right: auto;
  font-size: 14px;
  line-height: 14px;
  color: inherit;
  text-decoration: none;
  background-image: url("../assets/img/pin.svg");
  background-repeat: no-repeat;
  background-position: left center;

  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.3;
  }
}

.caption {
  margin: 0;
  margin-right: 10px;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
}

.theme-switcher {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-right: 30px;
  display: flex;
  flex-wrap: wrap;
  
  li {
    margin-right: 10px;
  
    &:last-child {
      margin-right: 0;
    }
  }
}

.theme-button-light {
  display: block;
  width: 32px;
  height: 32px;
  padding: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  background-image: url("../assets/img/sun.svg");
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
    background-image: url("../assets/img/sun-light.svg");
  }
}

.theme-button-dark {
  display: block;
  width: 32px;
  height: 32px;
  padding: 0;
  background-image: url("../assets/img/moon.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  border: 1px solid #00c6bd;
  border-radius: 50%;
  cursor: pointer;

  &hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.3;
  }
  &.active {
    background-image: url("../assets/img/moon-light.svg");
  }
}

.fonts {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;

  li {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
}

.font-button-sans-serif {
  display: block;
  width: 32px;
  height: 32px;
  padding: 0;
  font-size: 16px;
  line-height: 14px;
  background-color: transparent;
  border: 1px solid #00c6bd;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.3;
  }
}

.font-button-serif {
  display: block;
  width: 32px;
  height: 32px;
  padding: 0;
  font-family: "Philosopher", serif;
  font-size: 16px;
  line-height: 14px;
  background-color: transparent;
  border: 1px solid #00c6bd;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.3;
  }
}
</style>