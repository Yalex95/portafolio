<script setup lang="ts">
import type { Card } from "@/utils/types";
import TechCard from "../ui/card/tech-card.vue";
import Header from "../ui/header.vue";
import SectionBase from "../section/base.vue";



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
    { label: "VS Code", icon: "mdi:microsoft-visual-studio-code", },
    { label: "Git", icon: "mdi:git", },
    { label: "GitHub", icon: "mdi:github",  },
    { label: "Figma", icon: "solar:figma-bold-duotone",  },
  ],
};
const learning: Card = {
  title: "Learning",
  icon: "mdi:book-open-variant",
};
</script>

<template>
 <SectionBase id="tech">
  <Header component="h2" label="Technical Expertise" />
      <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-6">
        <TechCard class="md:col-span-1 lg:row-span-2 " :card="coreStack" />
        <TechCard :card="tools" />
        <TechCard :card="learning" />
       
      </div>
 </SectionBase>
</template>
