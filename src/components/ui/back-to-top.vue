<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import UIButton from "./button/index.vue";
import { useScrollTop } from "@/composables/use-scroll-top";

const { showButton, scrollToTop } = useScrollTop();
</script>

<template>
  <Transition>
    <UIButton
      v-if="showButton"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 shadow-lg z-50"
      icon="heroicons:arrow-up-20-solid"
    />
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
