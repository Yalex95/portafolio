<script lang="ts" setup>
import type { Contact, ContactSchema } from "@/utils/schema";
import SectionBase from "../section/base.vue";
import ContactForm from "../ui/form/contact.vue";


async function submit(values: Contact) {
  try {
    
  } catch (error) {
    
  }
}
</script>
<template>
<SectionBase id="contact-me" class="bg-overlay ">
    <ContactForm 
    :on-submit="submit"
    submit-label="Send Message"
    />
</SectionBase>
</template>