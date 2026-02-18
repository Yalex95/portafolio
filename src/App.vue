<script setup lang="ts">
import { computed } from 'vue';
import Nav from './components/nav.vue';
import { useThemeStore } from './stores/theme';
import Hero from './components/hero.vue';

const themeStore = useThemeStore()
const theme = computed(()=>themeStore.isDark?'dark':'light')
</script>

<template >
 <div :data-theme="theme" >
  <header>
   <Nav/>
 </header>
 <main >
<Hero/>
 </main>
 <footer>

 </footer>
 </div>
</template>

<style scoped></style>
