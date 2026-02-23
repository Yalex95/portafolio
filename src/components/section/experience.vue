<script setup lang="ts">
import Header from "../ui/header.vue";
import SectionBase from "../section/base.vue";
import Timeline from "../ui/timeline/index.vue";
import UiButton from "../ui/button/index.vue";
import { downloadCV } from "@/composables/download";

const events = [
  {
    time: "2023 - Present",
    location: "Tijuana, BC Mexico",
    company: "Telsur S.A",
    event: "Frontend web develeoper",
    eventDescription:
      "Developed and maintained responsive web aplication using Vue.js, Nuxt.js and Tailwind CSS, ensuring optimal performance and user experience.",
    tech: [
      { label: "Vue.js", icon: "mdi:vuejs" },
      { label: "TypeScript", icon: "mdi:language-typescript" },
      { label: "Nuxt", icon: "mdi:nuxt" },
      { label: "Tailwind CSS", icon: "mdi:tailwind" },
      { label: "Pinia", icon: "simple-icons:pinia" },
    ],
  },
  {
    time: "2022 - 2023",
    location: "Remote",
    company: "Horsepower Brands",
    event: "Frontend web developer",
    eventDescription:
      "Developed custom themes to meet the specific needs of the company, ensuring a unique and engaging user experience.",
    tech: [
      { label: "Vue.js", icon: "mdi:vuejs" },
      { label: "TypeScript", icon: "mdi:language-typescript" },
      { label: "Nuxt", icon: "mdi:nuxt" },
      { label: "Tailwind CSS", icon: "mdi:tailwind" },
      { label: "Pinia", icon: "simple-icons:pinia" },
    ],
  },
  {
    time: "2021 - 2021",
    location: "Chiapas Mexico",
    company: "Xenio",
    event: "Frontend web developer",
    eventDescription:
      "Maintained and updated existing web pages using php , js and css, ensuring optimal performance and user experience.",
    tech: [
      { label: "Vue.js", icon: "mdi:vuejs" },
      { label: "TypeScript", icon: "mdi:language-typescript" },
      { label: "Nuxt", icon: "mdi:nuxt" },
      { label: "Tailwind CSS", icon: "mdi:tailwind" },
      { label: "Pinia", icon: "simple-icons:pinia" },
    ],
  },
];
</script>

<template>
  <SectionBase id="experience" class="bg-base-200">
    <Header
      component="h2"
      label="Experience"
      class="text-center"
      position="center"
    />
    <div class="lg:w-1/2 w-full mx-auto mt-10 relative">
      <div class="bg-blur"></div>
      <Timeline :events />
    </div>
    <UiButton
      class="w-fit mx-auto"
      @click="downloadCV()"
      label="Download CV"
      icon="tabler:download"
      type="button"
    />
  </SectionBase>
</template>
<style scoped>
.bg-blur {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10rem;
  background: linear-gradient(
    to top,
    var(--color-base-200),
    rgba(255, 255, 255, 0)
  );
  z-index: 1;
}
</style>
