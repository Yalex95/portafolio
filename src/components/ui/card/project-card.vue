<script setup lang="ts">
import type { Card } from "@/utils/types";
import BaseCard from "./base-card.vue";
import UiBadgeIcon from "../badge/icon.vue";
import { useThemeStore } from "@/stores/theme";
import UiButton from "../button/index.vue";
defineProps<{
  card: Card;
}>();
const themeStore = useThemeStore();
</script>

<template>
  <BaseCard variant="project" class=" lg:w-96">
    <figure >
      <img :src="card.image" :alt="card.title" class="h-48 w-96 object-cover object-top"/>
    </figure>
    <div class="card-body flex-col gap-8">
      <div class="flex gap-4 flex-col">
        <h2 class="card-title">{{ card.title }}</h2>
        <p>{{ card.description }}</p>
        <div class="flex gap-2 flex-wrap">
          <UiBadgeIcon
            v-for="badge in card.badges"
            :key="badge.label"
            :badge
            :is-dark="themeStore.isDark"
            size="xs"
          />
        </div>
      </div>
      <div v-if="card.href" class="card-actions">
        <UiButton
          variant="primary"
          label="View Project"
          type="button"
          :href="card.href"
        />
        <UiButton
          v-if="card.githubLink"
          variant="secondary"
          icon="mdi:github-face"
          type="button"
          :href="card.githubLink"
        />
      </div>
    </div>
  </BaseCard>
</template>
