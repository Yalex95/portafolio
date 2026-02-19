<script lang="ts" setup>
import { useThemeStore } from "@/stores/theme";
import type { Badge } from "@/utils/types";
import { Icon } from "@iconify/vue";
import { computed } from "vue";
defineProps<{
  badge: Badge;
}>()
const themeStore = useThemeStore();
const status = computed(() =>
  themeStore.isDark ? "status-success" : "status-primary",
);
</script>
<template>
  <div
    :class="[
      'badge  uppercase font-semibold',
      { 'badge-outline': themeStore.isDark },
      'badge-success',
    ]"
  >
    <div v-if="!badge.icon" class="inline-grid *:[grid-area:1/1]">
      <div :class="['status', status, 'animate-ping']"></div>
      <div :class="['status', status]"></div>
    </div>
    <Icon v-else :icon="badge.icon" width="16" class="text-base-content"/>
    {{ badge.label }}
  </div>
</template>
