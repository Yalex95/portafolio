<script setup lang="ts">
import Header from "../ui/header.vue";
import SectionBase from "../section/base.vue";
import Timeline from "../ui/timeline/index.vue";

const events = [
  {
    time: "2020 - 2021",
    event: "Software Engineer at Company A",
    eventDescription:
      "Worked on developing web applications using Vue.js and Node.js.",
  },
  {
    time: "2021 - Present",
    event: "Senior Software Engineer at Company B",
    eventDescription:
      "Leading a team of developers in building scalable applications with microservices architecture.",
  },
  {
    time: "2021 - Present",
    event: "Senior Software Engineer at Company B",
    eventDescription:
      "Leading a team of developers in building scalable applications with microservices architecture.",
  },
];
</script>

<template>
  <SectionBase id="experience" class="bg-base-200">
    <Header component="h2" label="Experience" class="text-center" position="center"/>
    <Timeline :events/>
      
  </SectionBase>
</template>
