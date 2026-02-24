<script lang="ts" setup>
import { useThemeStore } from "@/stores/theme";
import AppIcon from "./app-icon.vue";

const themeStore = useThemeStore();
</script>
<template>
  <label class="swap swap-rotate mx-4 flex items-center cursor-pointer">
    <input v-model="themeStore.isDark" type="checkbox" />
    <span class="sr-only">Toggle dark mode</span>
     <AppIcon v-if="themeStore.isDark" icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition" size="26" class="swap-on"/>
     <AppIcon v-else icon="line-md:moon-rising-filled-loop" size="26" class="swap-off"/>
  </label>
</template>
