<script lang="ts" setup>
import { useThemeStore } from '@/stores/theme';

defineProps<{
  variant: 'experience' | 'project';
}>()
const themeStore = useThemeStore();
</script>
<template>
<div :class="['card card-border w-full md:w-96 shadow-md md:shadow-sm',themeStore.isDark?'bg-base-200':'bg-base-100',{'hover:shadow-primary':variant==='project'}]">
  <slot />
</div>
</template>