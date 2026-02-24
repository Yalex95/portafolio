<script lang="ts" setup>
import type { Badge } from "@/utils/types";
import BadgeBase from "./base.vue";
import AppIcon from "../app-icon.vue";
import { computed } from "vue";
const props = withDefaults(
  defineProps<{
  badge: Badge;
  isDark?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}>(),{
  size: 'lg'
}
)
const iconSize = computed(() => {
  if (props.size === 'xs') return 10;
  if (props.size === 'lg') return 16;
  return 24;
});
</script>
<template>
  <BadgeBase :dark-theme="isDark" :size>
    <AppIcon v-if="badge.icon" :icon="badge.icon" :width="iconSize" class="badge-text"/>
    {{ badge.label }}
  </BadgeBase>
</template>
