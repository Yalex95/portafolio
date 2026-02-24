<script lang="ts" setup>
import AppIcon from "../app-icon.vue";
import { computed } from "vue";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "success"|"gradient";
type ButtonSize = "sm" | "md" | "lg";
type ButtonType = "button" | "submit" | "reset";

const props = withDefaults(
  defineProps<{
    label?: string;
    icon?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    outline?: boolean;
    block?: boolean;
    loading?: boolean;
    disabled?: boolean;
    href?: string;
    type?: ButtonType;
  }>(),
  {
    variant: "primary",
    size: "md",
    type: "button",
    outline: false,
    block: false,
    loading: false,
    disabled: false,
  },
);
const emit = defineEmits<{
  click: [event: MouseEvent];
}>();
const isLink = computed(() => !!props.href);
const componentType = computed(() => {
  if (props.href) return "a";
  return "button";
});
const buttonClasses = computed(() => {
  const classes = ['btn', ];
  
  // Variante principal
  if (props.variant === 'gradient') {
    classes.push('bg-gradient');
  } else if (props.variant === 'ghost') {
    classes.push('btn-ghost');
  } else if (props.outline) {
    classes.push(`btn-outline btn-${props.variant}`);
  } else {
    classes.push(`btn-${props.variant}`);
  }
  
  // Modificadores
  if (props.block) classes.push('btn-block');
  if (props.loading) classes.push('loading');
  if (props.disabled) classes.push('btn-disabled');
  
  return classes;
});
const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit("click", event);
  }
};

const linkAttributes = computed(() => {
  if (!isLink.value) return {
    disabled: props.disabled || props.loading,
    type: props.type,
  };
  
  return {
    'aria-disabled': props.disabled || props.loading,
    'tabindex': (props.disabled || props.loading) ? -1 : 0,
    'role': 'button' ,
    'aria-label': props.label || 'Link Button',
    'target': '_blank',
    'rel': 'noopener noreferrer',
  };
});
</script>
<template>
  <component
    :is="componentType"
    :href
    :class="buttonClasses"
     v-bind="linkAttributes" 
    @click="handleClick"
  >
    <AppIcon
      v-if="icon && !loading"
      :icon
      :width="size === 'lg' ? 24 : size === 'md' ? 20 : 16"
      class="mr-2"
    />
    <span v-if="loading" class="loading-spinner mr-2" />

    {{ label }}
  </component>
</template>
