<script lang="ts" setup>
import { ContactSchema } from '@/utils/schema';
import UiFormField from './field.vue';
import Baseform from './base.vue';

defineProps<{
  initialValues?: typeof ContactSchema;
  onSubmit: (contact: typeof ContactSchema) => Promise<any>;
  submitLabel: string;
}>();
</script>
<template>
  <Baseform
    v-slot="{ errors, loading }"

    :initial-values="initialValues || {
      name: '',
      email: '',
      phone: '',
      image: '',
    }"
    :schema="ContactSchema"
    :on-submit="onSubmit"
    :submit-label="submitLabel"
  >
   <UiFormField
      :error="errors.name"
      label="Full Name"
      name="name"
      :disabled="loading"
      placeholder="Type full name"
    />
      <UiFormField
      :error="errors.email"
      label="Email Address"
      name="email"
      placeholder="example@gmail.com"
      :disabled="true"
    />
      <UiFormField
      :error="errors.message"
      label="Message"
      name="message"
      type="textarea"
      placeholder="Type your message here"
      :disabled="loading"/>
  </Baseform>
</template>