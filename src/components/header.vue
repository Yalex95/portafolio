<script lang="ts" setup>
withDefaults(defineProps<{
  component?: 'h2' | 'h3' | 'h4';
  className?: string;
  label?: string;
}>(),{
  component:'h2',
  className:'text-2xl ',
  label:'title'
})
</script>
<template>
<component :is="component" :class="[className, 'font-bold text-base-content header-underline']">{{ label }}</component>
</template>
<style scoped>
.header-underline{
  position: relative;
  display: inline-block;
  padding-bottom: 0.8rem;
}
.header-underline:after{
  content: '';
  position: absolute;
  width: 6rem;
  height: 6px;
  background-color: var(--color-blue-500);
  left: 0;
  bottom: 0;
  border-radius: 1rem;
}

</style>