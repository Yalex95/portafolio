<script lang="ts" setup>
import type { Badge } from "@/utils/types";
import BadgeBase from "./base.vue";
import AppIcon from "../app-icon.vue";
defineProps<{
  badge: Badge;
  isDark?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}>();
</script>
<template>
  <BadgeBase :dark-theme="isDark" :size>
    <AppIcon v-if="badge.icon" :icon="badge.icon" width="16" class="badge-text"/>
    {{ badge.label }}
  </BadgeBase>
</template>
