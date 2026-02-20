<script lang="ts" setup >
import type {Contact} from '@/utils/types';
import { useToast } from '@/composables/use-toast';
import { ref } from 'vue';
import type { ZodType } from 'zod';
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import getFetchErrorMessage from '@/utils/get-fetch-error-message';
import Toast from '../Toast.vue';
const props = defineProps<{
  initialValues:Contact;
  schema: ZodType<Contact>;
  onSubmit: (contact: Contact) => Promise<any>;
  submitLabel?: string;
}>()
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
      message: "information updated successfully",
      type: "success",
      show: true,
    });
  }
 catch (e: unknown) {
  const error = e as any

  if (error?.data?.data) {
    setErrors(error.data.data)
  }

  setToast({
    message: getFetchErrorMessage(e),
    type: 'error',
    show: true,
  })
}

  loading.value = false;
});
</script>

<template>
 <Toast
    :show="toast.show"
    :label="toast.message"
    :alert-type="toast.type"
  />
  <form
    class="grid grid-cols-2 gap-6"
    @submit.prevent="onSubmit"
  >
    <slot :errors="errors" :loading="loading" />
    <div class="col-span-2 flex justify-end gap-3">
      <button
        class="btn btn-info text-white w-fit "
        :disabled="loading "
      >
        {{ submitLabel }}
        <span v-if="loading" class="loading loading-spinner loading-xs" />
      </button>
    </div>
  </form>
</template>