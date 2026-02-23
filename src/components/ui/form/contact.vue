<script lang="ts" setup>
import { ContactSchema, type Contact } from "@/utils/schema";
import UiFormField from "./field.vue";
import Baseform from "./base.vue";
import { Field } from "vee-validate";

defineProps<{
  initialValues?: Contact;
  onSubmit: (contact: Contact) => Promise<any>;
  submitLabel: string;
}>();
</script>
<template>
  <Baseform
    :initial-values="
      initialValues || {
        name: '',
        email: '',
        message: '',
      }
    "
    :schema="ContactSchema"
    :on-submit="onSubmit"
    :submit-label="submitLabel"
  >
    <template #header>
      <h2>Let’s build something impactful together.</h2>
      <p class="text-base">
        Have a project in mind? Reach out and let's turn your vision into a
        high- performance reality.
      </p>
    </template>

    <template #inputs="{ errors, loading }">
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
        :disabled="loading"
      />
    
      <fieldset class="fieldset  col-span-2">
        <legend class="fieldset-legend">
          Message
        </legend>

        <Field
          name="message"
          as="textarea"
          id="message"
          cols="30"
          rows="10"
          class="w-full rounded-xl textarea min-h-36"
          :class="{'input-error': errors.message,  }"
          :disabled="loading"
        />
        <p
          v-if="errors.message"
          class="label text-error"
          v-html="errors.message"
        />
      </fieldset>
    </template>
  </Baseform>
</template>
<style scoped>
#contact-me h2 {
  font-family: "Inter", sans-serif;
  line-height: 40px;
  letter-spacing: -1.6px;
  font-weight: 900;
  font-size: 36px;
  margin-bottom: 10px;
}
</style>
