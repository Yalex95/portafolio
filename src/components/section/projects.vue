<script setup lang="ts">
import Header from "../ui/header.vue";
import SectionBase from "../section/base.vue";
import ProjectCard from "../ui/card/project-card.vue";
import type { Card } from "@/utils/types";

const projects: Card[] = [
  {
    title: "Travel log",
    description:
      "A travel log app built with Vue.js and TypeScript, allowing users to document and share their travel experiences with an intuitive interface.Part of a CJ's video tutorial - Full stack app build",
    image: "/travel_Log.png",
    href: "https://nuxt-travel-log-fawn.vercel.app",
    githubLink: "https://github.com/Yalex95/nuxt-travel-log",
    badges: [
      { label: "Vue.js", icon: "mdi:vuejs" },
      { label: "TypeScript", icon: "mdi:language-typescript" },
      { label: "Nuxt", icon: "mdi:nuxt" },
      {label: "Tailwind", icon: "mdi:tailwind" },
      {label: "DaisyUI", icon: "logos:daisyui-icon" },
      {label: "Zod", icon: "simple-icons:zod"},
      {label: "Vee-validate", icon: "devicon:veevalidate"},
      {label: "drizzle", icon: "simple-icons:drizzle"},
    ],
  },
  {
    title: "Movie Reservation System",
    description:
      "A movie reservation system built with Vue.js and TypeScript, allowing users to browse movies, select showtimes, and reserve seats. ",
    image: "/movie_reservation_system.png",
    href: "https://movie-reservation-eight.vercel.app",
    githubLink: "https://github.com/Yalex95/movie_reservation",
    badges: [
      { label: "Vue.js", icon: "mdi:vuejs" },
      { label: "TypeScript", icon: "mdi:language-typescript" },
      { label: "Nuxt", icon: "mdi:nuxt" },
      {label: "Tailwind", icon: "mdi:tailwind" },
      {label: "DaisyUI", icon: "logos:daisyui-icon" },
      {label: "Zod", icon: "simple-icons:zod"},
      {label: "Vee-validate", icon: "devicon:veevalidate"},
      {label: "drizzle", icon: "simple-icons:drizzle"},
      {label: "Better Auth", icon: "simple-icons:betterauth"},
    ],
  },
  {
    title: "Ticket Snipper",
    description:
      "Redesign of a landing page for ticket snipper build with WP and elementor, improving user experience through a modern and responsive design.",
    image: "/Ts.png",
    href: "https://www.ticketsnipers.com/",
    badges: [
      { label: "Wordpress", icon: "mdi:wordpress" },
      { label: "PHP", icon: "mdi:language-php" },
      { label: "Elementor", icon: "fa7-brands:elementor" },
      {label: "Figma", icon: "solar:figma-bold-duotone" },
    ],
  },
  {
    title: "D4L",
    description:
      "Redesign of DUI landing page build with WP and elementor, improving user experience through a modern and responsive design.",
    image: "/dui_landing.png",
    href: "https://www.dismissed4less.com/dui-dismissal/",
    badges: [
      { label: "Wordpress", icon: "mdi:wordpress" },
      { label: "PHP", icon: "mdi:language-php" },
      { label: "Elementor", icon: "fa7-brands:elementor" },
      {label: "Figma", icon: "solar:figma-bold-duotone" },
    ],
  },
];
</script>

<template>
  <SectionBase id="projects">
    <Header component="h2" label="Featured Projects" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-4 lg:gap-10">
      <!-- TODO: add vue carrousel -->
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :card="project"
      />
    </div>
  </SectionBase>
</template>
