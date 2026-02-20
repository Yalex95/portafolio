<script setup lang="ts">
import type { eventItem } from '@/utils/types';
import TimelineBase from './timeline-base.vue';
import TimelineItem from './timeline-item.vue';
defineProps<{
events: eventItem[];
}>()
</script>

<template>
<TimelineBase>
  <TimelineItem v-for="(event,index) in events" :key="index" :event="event" :position="index+1 === events.length-1? 'start': 'end'">
    <!-- <hr v-if="index !== 0"  class="bg-primary"/> -->
  </TimelineItem>
</TimelineBase>
</template>
