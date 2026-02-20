<script lang="ts" setup>
import type { eventItem } from '@/utils/types';
import AppIcon from '../app-icon.vue';
import { computed } from 'vue';


const props = defineProps<{
event: eventItem;
position?: 'end' | 'start';
}>()
const position = computed(()=> props.position ==='end'? 'timeline-end': 'timeline-start')
</script>
<template>
<li>
   <slot />
    <div class="timeline-middle">
      <AppIcon icon="ic:round-circle" size="14"/>
    </div>
    <div :class="['md:mb-10',position]">
      <time class="font-mono italic">{{ event.time }}</time>
      <div class="text-lg font-black">{{ event.event }}</div>
      {{ event.eventDescription }}
    </div>
    <hr  class="bg-primary"/>
  </li>
</template>