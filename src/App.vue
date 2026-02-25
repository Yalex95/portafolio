<script setup lang="ts">
import Nav from "./components/ui/nav.vue";
import HeroSection from "./components/section/hero.vue";
import TechSection from "./components/section/tech.vue";
import ExperienceSection from "./components/section/experience.vue";
import ProjectsSection from "./components/section/projects.vue";
import ThemeProvider from "./components/providers/theme-provider.vue";
import ContactSection from "./components/section/contact.vue";
import Logo from "./components/ui/logo.vue";
import Links from "./components/ui/links.vue";
import BackToTop from "./components/ui/back-to-top.vue";

const date = new Date();
const year = date.getFullYear();
</script>

<template>
  <ThemeProvider>
    <header>
      <Nav />
    </header>
    <main>
      <HeroSection />
      <TechSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
    <footer class="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 container mx-auto py-10 px-10">
      <Logo />

      <p class="text-center  text-sm text-secondary-content order-3 md:order-2">
        © {{ year }} Yeris Aguilar. Built with love ♥.
      </p>
      <Links class="order-2 md:order-3"/>
    </footer>
    <BackToTop/>
  </ThemeProvider>
</template>

<style scoped></style>
