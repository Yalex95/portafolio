<script lang="ts" setup>
import type { Badge } from "@/utils/types";
import BadgeBase from "./base.vue";
import { computed } from "vue";
const props = defineProps<{
  badge: Badge;
  isDark: boolean;
}>();
const statusClass = computed(()=> props.isDark? 'status-success' : 'status-primary')
</script>
<template>
  <BadgeBase :dark-theme="props.isDark">
    <div class="inline-grid *:[grid-area:1/1]">
      <div :class="['status', statusClass, 'animate-ping']"></div>
      <div :class="['status', statusClass]"></div>
    </div>
    {{ badge.label }}
  </BadgeBase>
</template>
