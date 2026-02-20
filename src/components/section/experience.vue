<script setup lang="ts">
import Header from "../ui/header.vue";
import SectionBase from "../section/base.vue";
import Timeline from "../ui/timeline/index.vue";

const events = [
  {
    time: "2023 - Present",
    event: "Frontend web develeoper at Telsur S.A",
    eventDescription:
      "Developed and maintained responsive web aplication using Vue.js, Nuxt.js and Tailwind CSS, ensuring optimal performance and user experience.",
  },
  {
    time: "2022 - 2023",
    event: "Frontend web developer at Horsepower Brands",
    eventDescription:
      "Developed custom themes to meet the specific needs of the company, ensuring a unique and engaging user experience.",
  },
  {
    time: "2021 - 2021",
    event: "Frontend web developer at Xenio",
    eventDescription:
      "Maintained and updated existing web pages using php , js and css, ensuring optimal performance and user experience.",
  },
];
</script>

<template>
  <SectionBase id="experience" class="bg-base-200">
    <Header component="h2" label="Experience" class="text-center" position="center"/>
    <Timeline :events/>
      
  </SectionBase>
</template>
