<script lang="ts" setup>
import { Field } from "vee-validate";

const props = withDefaults(
  defineProps<{
    error?: string;
    label: string;
    type?: "text" | "textarea" | "number" | "password";
    name: string;
    disabled?: boolean;
    placeholder?: string;
  }>(),
  {
    placeholder: "Type here",
  },
);
</script>

<template>
  <fieldset class="fieldset">
    <legend class="fieldset-legend">
      {{ props.label }}
    </legend>
    <label :for="props.name" class="sr-only">
      {{ props.label }}
    </label>
    <Field
      :as="type === 'number' || 'password' ? 'input' : type || 'input'"
      :name="props.name"
      :type="type || 'text'"
      :placeholder
      class="w-full rounded-xl"
      :class="{
        'input-error': props.error,
        input:
          !type || type === 'text' || type === 'number' || type === 'password',
      }"
      :autocomplete="name"
      :disabled="props.disabled"
    />
    <p v-if="props.error" class="label text-error" v-html="props.error" />
  </fieldset>
</template>
