<script setup>
import { ref } from 'vue'

const activePhotoSrc = ref('/src/assets/img/gallery-photo-4.jpg')
let prevActivePreview = null

/* Смена главного изображения галереи */
function setActivePhoto(photo) {
    activePhotoSrc.value = photo.href
    findActivePreview()
    photo.isActive = true
}

/* Поиск предыдушего активного превью */
function findActivePreview() {
    let prevActivePreview = photos.value.find(item => item.isActive === true)
    prevActivePreview.isActive = false
}

const photos = ref([
  {
    id: 1,
    href: '/src/assets/img/gallery-photo-1.jpg',
    src: '/src/assets/img/preview-gallery-photo-1.jpg',
    isActive: false
  },
  {
    id: 2,
    href: '/src/assets/img/gallery-photo-2.jpg',
    src: '/src/assets/img/preview-gallery-photo-2.jpg',
    isActive: false
  },
  {
    id: 3,
    href: '/src/assets/img/gallery-photo-3.jpg',
    src: '/src/assets/img/preview-gallery-photo-3.jpg',
    isActive: false
  },
  {
    id: 4,
    href: '/src/assets/img/gallery-photo-4.jpg',
    src: '/src/assets/img/preview-gallery-photo-4.jpg',
    isActive: true
  },
])

</script>

<template>
    <h2>Галерея</h2>
    <div class="slider">
        <img class="active-photo" :src="activePhotoSrc" width="970" height="690" alt="">
        <ul class="preview-list">
            <li v-for="photo in photos" :key="photo.id">
                <a :class="{ 'active-item': photo.isActive }" :href="photo.href" @click.prevent="setActivePhoto(photo)">
                    <img :src="photo.src" width="170" height="150" alt="">
                </a>
            </li>
        </ul>
    </div>
</template>

<style>
.gallery {
  margin-bottom: 120px;
}

.gallery h2 {
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

.slider {
  display: flex;
  align-items: flex-start;
}

.active-photo {
  width: 970px;
  margin-right: 30px;
}

.preview-list {
  padding: 0;
  margin: 0;
  list-style: none;
  width: 170px;
}

.preview-list li {
  margin-bottom: 30px;
}

.preview-list li:last-child {
  margin-bottom: 0;
}

.preview-list a {
  position: relative;
  display: block;
}

.preview-list a::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.5);
}

.preview-list a.active-item::before {
  background-color: transparent;
  transition: background-color 0.5s ease;
}

.preview-list img {
  display: block;
}
</style>