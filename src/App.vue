<script setup lang="ts">
import { computed } from "vue";
import Nav from "./components/ui/nav.vue";
import { useThemeStore } from "./stores/theme";
import HeroSection from "./components/section/hero.vue";
import TechSection from "./components/section/tech.vue";
import ExperienceSection from "./components/section/experience.vue";
import ProjectsSection from "./components/section/projects.vue";
import ThemeProvider from "./components/providers/theme-provider.vue";
import ContactSection from './components/section/contact.vue';

const themeStore = useThemeStore();
</script>

<template>
  <ThemeProvider >
    <header>
      <Nav />
    </header>
    <main>
      <HeroSection />
      <TechSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection/>
    </main>
    <footer></footer>
  </ThemeProvider>
</template>

<style scoped></style>
