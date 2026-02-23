<script lang="ts" setup>
import AppIcon from './app-icon.vue';

const socialLinks = [
  {
    name: "Github",
    url: "https://github.com/Yalex95",
    icon:"mdi:github-face"
  },
  {
    name: "linkedIn",
    url: "https://www.linkedin.com/in/yeris-aguilar/",
    icon:"mdi:linkedin"
  },
  {
    name: "Mail",
    url: "mailto:yerisaguilarg@gmail.com",
    icon:"mdi:email"
  },
];
</script>
<template>
  <ul class="inline-flex gap-4 items-center">
    <li v-for="(socialMedia,index) in socialLinks" :key="index" class="inline-flex">
      <a :href="socialMedia.url" target="_blank"><AppIcon :icon="socialMedia.icon" size="24"/></a>
    </li>
  </ul>
</template>
