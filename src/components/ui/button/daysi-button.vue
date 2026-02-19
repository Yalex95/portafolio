
<script lang="ts" setup>
import { Icon } from '@iconify/vue'
withDefaults(defineProps<{
  label:string,
  icon?: string
  btnType?: 'btn-primary' |'btn-secondary';
}>(),{
  btnType:'btn-primary'
});
const emit = defineEmits<{
  btnClick: [value: string]
}>()
</script>
<template>
<button @click="emit('btnClick',label)" :class="[btnType,'btn ']">
<Icon v-if="icon" :icon="icon" :width="24" />
{{ label }}
</button>
</template>