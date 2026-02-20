<script lang="ts" setup>
defineProps<{
  darkTheme?: boolean;
}>();
</script>
<template>
  <div
    :class="[
      'badge  uppercase font-semibold',
      { 'badge-outline': darkTheme },
      'badge-success',
    ]"
  >
    <slot />
  </div>
</template>
