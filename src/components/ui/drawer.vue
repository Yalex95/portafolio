<script setup lang="ts">
import type { NavItem } from '@/utils/types';
import { Icon } from '@iconify/vue';
defineProps<{
  navItems:NavItem[]
}>()
</script>

<template>
<div class="drawer lg:hidden w-fit">
  <input id="my-drawer-1" type="checkbox"  class=" w-full drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-1" class="btn drawer-button bg-transparent rounded-none shadow-none"> <Icon for="my-drawer-1" icon="heroicons:bars-3-16-solid" width="24" class=""/></label>
     

  </div>
  <div class="drawer-side">
    <label for="my-drawer-1" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 min-h-full w-80 p-4">
      <!-- Sidebar content here -->
      <li v-for="item in navItems" :key="item.label">
          <a :href="item.href">{{ item.label }}</a>
        </li>
    </ul>
  </div>
</div>
</template>