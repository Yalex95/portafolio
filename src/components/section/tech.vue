<script setup lang="ts">
import type { Card } from "@/utils/types";
import ExperienceCard from "../card-variants/experience-variant.vue";
import Header from "../header.vue";
const coreStack: Card = {
  title: "Core Stack",
  description: "Architecting modern, scalable frontends with precision and performance in mind.",
  icon: "mdi:code-braces",
  isCoreStack: true,
  badges: [
    { label: "Vue.js", icon: "mdi:vuejs" },
    { label: "TypeScript", icon: "mdi:language-typescript" },
    { label: "Nuxt", icon: "mdi:nuxt" },
    { label: "Tailwind CSS", icon: "mdi:tailwind" },
    { label: "Pinia", icon: "simple-icons:pinia" },
  ],
};
const tools: Card = {
  title: "Tools",
  icon: "mdi:tools",
  badges: [
    { label: "VS Code", icon: "mdi:microsoft-visual-studio-code" },
    { label: "Git", icon: "mdi:git" },
    { label: "GitHub", icon: "mdi:github" },
    { label: "Figma", icon: "solar:figma-bold-duotone" },
  ],
};
const learning: Card = {
  title: "Learning",
  icon: "mdi:book-open-variant",
};
</script>

<template>
  <section id="tech" class="py-20">
    <div class="flex flex-col container mx-auto px-10 2xl:px-0 gap-10">
      <Header component="h2" label="Technical Expertise" />
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ExperienceCard class="lg:col-span-1 lg:row-span-2 " :card="coreStack" />
        <ExperienceCard :card="tools" />
        <ExperienceCard :card="learning" />
       
      </div>
    </div>
  </section>
</template>
