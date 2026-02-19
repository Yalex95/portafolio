<script setup lang="ts">
import { computed } from "vue";
import Nav from "./components/nav.vue";
import { useThemeStore } from "./stores/theme";
import HeroSection from "./components/section/hero.vue";
import TechSection from "./components/section/tech.vue";
import ExperienceSection from "./components/section/experience.vue";
import ProjectsSection from "./components/section/projects.vue";

const themeStore = useThemeStore();
const theme = computed(() => (themeStore.isDark ? "dark" : "light"));
</script>

<template>
  <div :data-theme="theme">
    <header>
      <Nav />
    </header>
    <main>
      <HeroSection />
      <TechSection />
      <ProjectsSection />
      <ExperienceSection />
    </main>
    <footer></footer>
  </div>
</template>

<style scoped></style>
