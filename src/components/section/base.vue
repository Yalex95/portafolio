<script lang="ts" setup>
defineProps<{
  id: string
}>();
</script>
<template>
<section :id class="py-20">
  <div class="flex flex-col container mx-auto px-10 2xl:px-0 gap-10 ">
    <slot/>
  </div>
  </section>
</template>