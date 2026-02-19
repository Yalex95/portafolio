<script setup lang="ts">
import type { Card } from "@/utils/types";
import BaseCard from "./base-card.vue";
defineProps<{
  card: Card;
}>();
</script>

<template>
  <BaseCard variant="project">
    <figure>
      <img :src="card.image" :alt="card.title" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ card.title }}</h2>
      <p>{{ card.description }}</p>
      <div class="flex gap-2">
        <div
          class="badge badge-outline"
          v-for="badge in card.badges"
          :key="badge.label"
        >
          <Icon v-if="badge.icon" :icon="badge.icon" width="16" />{{
            badge.label
          }}
        </div>
      </div>
      <div v-if="card.href" class="card-actions justify-end">
        <a :href="card.href" class="btn btn-primary">Case Study <Icon icon="mdi:arrow-right" width="16"/></a>
      </div>
    </div>
  </BaseCard>
</template>
