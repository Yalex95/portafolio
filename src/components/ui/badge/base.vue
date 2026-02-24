<script lang="ts" setup>
import { computed } from 'vue';

 const props = withDefaults(
  defineProps<{
  darkTheme?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}>(),{
  size: 'lg',
}
)
const badgeSize= computed(()=>{
  return `badge-${props.size}`;
})
</script>
<template>
  <div
    :class="[
      'badge  uppercase font-semibold',
      { 'badge-outline': darkTheme },
      'badge-success',badgeSize
    ]"
  >
    <slot />
  </div>
</template>
