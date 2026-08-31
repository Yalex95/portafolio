<script setup lang="ts">
import type { Card } from "@/utils/types";
import TechCard from "../ui/card/tech-card.vue";
import Header from "../ui/header.vue";
import SectionBase from "../section/base.vue";
import { ref, onMounted, onUnmounted } from "vue";

const section = ref<HTMLElement | null>(null);
const isVisible = ref(false);

let observer: IntersectionObserver | null = null;

onMounted(() => {
  const target = section.value;

  if (!target) return;

  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

      if (entry?.isIntersecting) {
        isVisible.value = true;
        observer?.disconnect();
      }
    },
    {
      threshold: 0.2,
    },
  );

  observer.observe(target);
});

onUnmounted(() => {
  observer?.disconnect();
});

// Cards...
const coreStack: Card = {
  title: "Core Stack",
  description:
    "Architecting modern, scalable frontends with precision and performance in mind.",
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
    { label: "Jira", icon: "mdi:jira" },
    { label: "ClickUp", icon: "lineicons:clickup" },
    { label: "Figma", icon: "solar:figma-bold-duotone" },
  ],
};

const learning: Card = {
  title: "Learning",
  icon: "mdi:book-open-variant",
  badges: [
    { label: "AWS", icon: "mdi:aws" },
    { label: "Docker", icon: "mdi:docker" },
  ],
};
</script>

<template>
  <div ref="section" class="section" :class="{ 'is-visible': isVisible }">
    <SectionBase id="tech">
      <Header component="h2" label="Technical Expertise" />

      <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-6">
        <TechCard class="md:col-span-1 lg:row-span-2" :card="coreStack" />

        <TechCard :card="tools" />

        <TechCard :card="learning" />
      </div>
    </SectionBase>
  </div>
</template>

<style scoped>
.section {
  opacity: 0;
  transform: translateY(50px);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

.section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
