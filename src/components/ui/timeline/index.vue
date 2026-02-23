<script setup lang="ts">
import type { eventItem } from "@/utils/types";
import TimelineBase from "./timeline-base.vue";
import TimelineItem from "./timeline-item.vue";
defineProps<{
  events: eventItem[];
}>();
</script>

<template>
  <TimelineBase>
    <!-- <div class="timeline">
      <span class="line-gray"></span>
      <span class="line"></span> -->

      <TimelineItem
        v-for="(event, index) in events"
        :key="index"
        :event="event"
        :position="index + 1 === events.length - 1 ? 'start' : 'end'"
      >
        <hr v-if="index !== 0"  class="bg-primary"/>
      </TimelineItem>
      <!-- <div class="timeline-icon">
        <img src="assets/icons/job.svg" alt="" />
      </div> -->
    <!-- </div> -->
  </TimelineBase>
</template>
