<script lang="ts" setup>
import { useThemeStore } from '@/stores/theme';
import { computed,} from 'vue';


const themeStore = useThemeStore();
const theme = computed(() => themeStore.isDark ? 'dark' : 'light');

</script>

<template>
<div :data-theme ="theme">
  <slot/>
</div>
</template>