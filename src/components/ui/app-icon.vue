<script lang="ts" setup>
import { Icon } from '@iconify/vue';

defineProps<{
icon: string;
size?: number | string;
class?: string;
}>()
</script>
<template>
<Icon :icon :width="size" :class v-bind="$attrs" />
</template>