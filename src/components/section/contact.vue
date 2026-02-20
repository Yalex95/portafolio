<script lang="ts" setup>
import type { ContactSchema } from "@/utils/schema";
import SectionBase from "../section/base.vue";
import ContactForm from "../ui/form/contact.vue";


async function submit(values: typeof ContactSchema) {
  console.log(values);
}
</script>
<template>
<SectionBase id="contact-me">
    <ContactForm 
    :on-submit="submit"
    submit-label="Send Message"
    />
</SectionBase>
</template>