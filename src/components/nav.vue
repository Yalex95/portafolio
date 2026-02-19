<script setup lang="ts">
import { Icon } from "@iconify/vue";
import ThemeToggle from "./theme-toggle.vue";
import Drawer from "./drawer.vue";
import type { NavItem } from "@/utils/types";

const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
</script>

<template>
  <div class=" bg-base-100 shadow-sm ">
    <div class="container mx-auto navbar">
      <div class="navbar-start">
      <div
        class="text-base font-bold text-primary-content inline-flex items-center"
      >
        <img
          src="../assets/icones/mdi_console.png"
          class="inline-block object-fit w-8 h-8 mr-2"
        />Yeris.dev
      </div>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li v-for="item in navItems" :key="item.label">
          <a :href="item.href">{{ item.label }}</a>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <ThemeToggle />
      <Drawer :navItems/>
    </div>
    </div>
  </div>
</template>
