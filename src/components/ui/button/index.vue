<script lang="ts" setup>
import AppIcon from "../app-icon.vue";
import { computed } from "vue";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger"
  | "success"
  | "gradient";
type ButtonSize = "xs" | "sm" | "md" | "lg";
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
    target?: "_blank" | "_self" | "_parent" | "_top";
  }>(),
  {
    variant: "primary",
    size: "md",
    type: "button",
    outline: false,
    block: false,
    loading: false,
    disabled: false,
    target: "_self",
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
  const classes = ["btn"];

  // Variante principal
  if (props.variant === "gradient") {
    classes.push("bg-gradient");
  } else if (props.variant === "ghost") {
    classes.push("btn-ghost");
  } else if (props.outline) {
    classes.push(`btn-outline btn-${props.variant}`);
  } else {
    classes.push(`btn-${props.variant}`);
  }

  // Modificadores
  if (props.block) classes.push("btn-block");
  if (props.loading) classes.push("loading");
  if (props.disabled) classes.push("btn-disabled");

  return classes;
});
const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit("click", event);
  }
};

const linkAttributes = computed(() => {
  if (!isLink.value)
    return {
      disabled: props.disabled || props.loading,
      type: props.type,
    };

  return {
    "aria-disabled": props.disabled || props.loading,
    tabindex: props.disabled || props.loading ? -1 : 0,
    role: "button",
    "aria-label": props.label || "Link Button",
    target: props.target,
    rel: props.target === "_blank" ? "noopener noreferrer" : undefined,
  };
});
const iconSize = computed(() => {
  if (props.size === "xs") return 12;
  if (props.size === "sm") return 16;
  if (props.size === "md") return 20;
  if (props.size === "lg") return 24;
  return 20;
});
const iconClass = computed(() => {
  return props.label ? "mr-2" : "";
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
      :size="iconSize"
      :class="iconClass"
    />
    <span v-if="loading" class="loading-spinner mr-2" />

    {{ label }}
  </component>
</template>
