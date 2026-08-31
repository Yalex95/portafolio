<script setup lang="ts">
import type { eventItem } from "@/utils/types";
import TimelineBase from "./timeline-base.vue";
import TimelineItem from "./timeline-item.vue";
defineProps<{
  events: eventItem[];
  isVisible: boolean;
}>();
</script>

<template>
  <TimelineBase>
    <TimelineItem
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      class="timeline-item"
      :position="index + 1 === events.length - 1 ? 'start' : 'end'"
      :class="{ 'is-visible': isVisible }"
      :style="{
        transitionDelay: `${index * 250}ms`,
      }"
    >
      <hr v-if="index !== 0" class="bg-primary" />
    </TimelineItem>
  </TimelineBase>
</template>
<style scoped>
.timeline-item {
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.timeline-item.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
