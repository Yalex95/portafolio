<script lang="ts" setup>
withDefaults(defineProps<{
  component?: 'h2' | 'h3' | 'h4';
position?: 'start' | 'end' | 'center';
  label?: string;
}>(),{
  component:'h2',
  position:'start',
  label:'title'
})
</script>
<template>
<component :is="component"   v-bind="$attrs" :class="['font-bold text-2xl text-base-content header-underline',position]">{{ label }}</component>
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
  bottom: 0;
  border-radius: 1rem;
}
.header-underline.start:after{
  left: 0;
}
.header-underline.center:after{
  left: 50%;
  transform: translateX(-50%);
}

</style>