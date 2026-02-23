<script lang="ts" setup>
import type { Contact } from "@/utils/types";
import { useToast } from "@/composables/use-toast";
import { ref } from "vue";
import type { ZodType } from "zod";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import getFetchErrorMessage from "@/utils/get-fetch-error-message";
import Toast from "../Toast.vue";
import UiButton from "../button/index.vue";
const props = defineProps<{
  initialValues: Contact;
  schema: ZodType<Contact>;
  onSubmit: (contact: Contact) => Promise<any>;
  submitLabel?: string;
}>();
const submitted = ref(false);
const loading = ref(false);

const { setToast, toast } = useToast();

const { handleSubmit, errors, setErrors, meta } = useForm({
  validationSchema: toTypedSchema(props.schema),
  initialValues: props.initialValues,
});
const onSubmit = handleSubmit(async (values: Contact) => {
  loading.value = true;

  try {
    await props.onSubmit(values);
    submitted.value = true;

    setToast({
      message: "Message sent successfully!",
      type: "success",
      show: true,
    });
  } catch (e: unknown) {
    const error = e as any;

    if (error?.data?.data) {
      setErrors(error.data.data);
    }

    setToast({
      message: getFetchErrorMessage(e),
      type: "error",
      show: true,
    });
  }

  loading.value = false;
});
</script>

<template>
  <div class="transparent-bg p-14 rounded-xl shadow-md w-full md:w-2/3 mx-auto">
    <Toast :show="toast.show" :label="toast.message" :alert-type="toast.type" />
    <div class="text-center">
      <slot name="header" />
    </div>
    <form class="grid grid-cols-2 gap-4 mt-10" @submit.prevent="onSubmit">
      <slot name="inputs" :errors="errors" :loading="loading" />
      <div class="flex justify-center items-center col-span-2">
        <UiButton :label="props.submitLabel || 'submit'" type="submit" variant="gradient" />
      </div>
    </form>
  </div>
</template>
