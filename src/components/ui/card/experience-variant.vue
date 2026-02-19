<script setup lang="ts">
import type { Card } from "@/utils/types";
import BaseCard from "./base-card.vue";
import { Icon } from "@iconify/vue";
import UiBadgeIcon from "../badge/icon.vue";
import { useThemeStore } from "@/stores/theme";

defineProps<{
  card: Card;
}>();

const themeStore = useThemeStore();
</script>

<template>
  <BaseCard variant="experience">
    <div
      :class="[
        'card-body ',
        card.isCoreStack ? ' flex md:flex-row lg:p-14 gap-10' : 'p-10',
      ]"
    >
      <div
        v-if="card.isCoreStack"
        class="rounded-lg w-fit bg-blue-200 text-primary-content p-6 flex items-center h-fit my-auto"
      >
        <Icon v-if="card.icon" :icon="card.icon" width="36" class="blue-500" />
      </div>
      <div class="flex flex-col gap-4">
        <div class="inline-flex gap-2 items-center">
          <Icon
            v-if="card.icon && !card.isCoreStack"
            :icon="card.icon"
            width="24"
            class="blue-500"
          />

          <h2
            :class="[
              'card-title ',
              { 'text-2xl font-bold': card.isCoreStack },
            ]"
          >
            {{ card.title }}
          </h2>
        </div>
        <p v-if="card.description">{{ card.description }}</p>
        <div class="card-actions" v-if="card.badges && card.badges?.length > 0">
          <UiBadgeIcon
            v-for="badge in card.badges"
            :key="badge.label"
            :badge
            :is-dark="themeStore.isDark"
          />
        </div>
      </div>
    </div>
  </BaseCard>
</template>
