<script setup>
  const props = defineProps(['title','description'])
  const emits = defineEmits(['click-button'])
</script>

<template>
  <h2>{{ title }}</h2>
  <p class="blog-article-description">{{ description }}</p>
  <button class="more" type="button" @click="emits('click-button')">Читать дальше</button>
</template>