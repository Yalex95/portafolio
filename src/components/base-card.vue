<script lang="ts" setup>

defineProps<{
 variant: 'experience' | 'project';
}>()
</script>
<template>
<div :class="['card card-border bg-base-100 ', {'shadow-sm':variant==='experience'},{'hover:shadow-primary':variant==='project'}]">
  <slot />
</div>
</template>