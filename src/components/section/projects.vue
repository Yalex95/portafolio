<script setup lang="ts">
import Header from "../ui/header.vue";
import SectionBase from "../section/base.vue";
import ProjectCard from "../ui/card/project-card.vue";
import type { Card } from "@/utils/types";

const projects: Card[] = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    href: "#",
    badges: [
      { label: "Vue.js", icon: "mdi:vuejs" },
      { label: "TypeScript", icon: "mdi:language-typescript" },
    ],
  },
];
</script>

<template>
  <SectionBase id="projects">
    <Header component="h2" label="Featured Projects" />
    <div>
      <!-- TODO: add vue carrousel -->
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :card="project"
      />
    </div>
  </SectionBase>
</template>
