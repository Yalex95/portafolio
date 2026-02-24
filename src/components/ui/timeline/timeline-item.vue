<script lang="ts" setup>
import { useThemeStore } from "@/stores/theme";

import type { eventItem } from "@/utils/types";
import AppIcon from "../app-icon.vue";
import UiBadgeIcon from "../badge/icon.vue";
import { computed } from "vue";
const themeStore = useThemeStore();

const props = defineProps<{
  event: eventItem;
  position?: "end" | "start";
}>();
const position = computed(() =>
  props.position === "end" ? "timeline-end " : "timeline-start md:text-end",
);
</script>
<template>
  <li>
    <slot />
    <div class="timeline-middle">
      <AppIcon icon="ic:round-circle" size="14" />
    </div>
    <div :class="['md:mb-10', position]">
      <time class="font-semibold text-primary italic block">{{
        event.time
      }}</time>
      <p class="text-sm inline-flex items-center gap-1">
        <AppIcon icon="ic:round-location-on" size="12" /> {{ event.location }}
      </p>
      <p class="text-lg font-black">{{ event.event }}</p>
      <p class="text-sm italic text-gray-500">{{ event.company }}</p>
      <p class="text-sm text-start">{{ event.eventDescription }}</p>
      <div class="flex gap-2 flex-wrap mt-4">
        <UiBadgeIcon
          :is-dark="themeStore.isDark"
          v-for="badge in event.tech"
          :key="badge.label"
          :badge="badge"
        />
      </div>
    </div>
    <hr class="bg-primary" />
  </li>
</template>
