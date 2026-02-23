<script lang="ts" setup>
import type { Badge } from "@/utils/types";
import BadgeBase from "./base.vue";
import AppIcon from "../app-icon.vue";
defineProps<{
  badge: Badge;
  isDark?: boolean;
}>();
</script>
<template>
  <BadgeBase :dark-theme="isDark">
    
    <AppIcon v-if="badge.icon" :icon="badge.icon" width="16" class="badge-text"/>
    {{ badge.label }}
  </BadgeBase>
</template>
