<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import UiButton from "../ui/button/index.vue";
import UiBadgeStatus from "../ui/badge/status.vue";
import { downloadCV } from "@/composables/download";
const themeStore = useThemeStore();
</script>

<template>
  <section class="py-20" id="hero">
    <div
      class="flex flex-col md:flex-row gap-10 container mx-auto px-10 2xl:px-0"
    >
      <article class="w-full md:w-1/2 flex flex-col gap-6">
        <div class="gap-4 flex flex-col">
          <UiBadgeStatus
            :is-dark="themeStore.isDark"
            :badge="{ label: 'Available for work' }"
          />
          <h2 class="text-primary-content">Hi, I'm Yeris <br />Aguilar —</h2>
        </div>
        <h1 class="gradient-text">
          Frontend <br />
          Developer
        </h1>
        <p class="text-base text-secondary-content">
          I build high-performance, value-driven web interfaces with a focus on
          modern user experiences and technical excellence.
        </p>
        <div class="hidden md:flex gap-6">
          <UiButton label="View Projects" type="button" href="#projects" />
          <UiButton
            variant="secondary"
            label="Download CV"
            icon="tabler:download"
            type="button"
              @click="downloadCV()"
          />
        </div>
      </article>
      <div class="flex-1 flex flex-col md:flex-row justify-center items-center">
        <img
          src="../../assets/yeris_aguilar.png"
          alt="Yeris Aguilar Frontend web developer"
        />
        <div class="flex flex-col w-full md:hidden gap-6">
          <UiButton label="View Projects" type="button" href="#projects" />
          <UiButton
            variant="secondary"
            label="Download CV"
            icon="tabler:download"
            type="button"
            @click="downloadCV()"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#hero {
  background-image:
    url("../assets/hero_background.png"),
    linear-gradient(280deg, #ffffff00 20%, #8e55e30e 100%);
  background-position: top left;
  background-repeat: no-repeat;
  background-size: contain;
}
#hero h2 {
  font-family: "Inter", sans-serif;
  line-height: 36px;
  letter-spacing: -1.6px;
  font-weight: 800;
  font-size: 2rem;
}
#hero .gradient-text {
  background: linear-gradient(290deg, #9333ea 0%, #6366f1 40%, #1313ec 100%);

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  display: inline-block;

  font-family: "Inter", sans-serif;
  font-size: 4rem;

  letter-spacing: -3px;
  line-height: 1;
  font-weight: 800;
}
@media (min-width: 768px) {
  #hero h2 {
    line-height: 72px;
    letter-spacing: -3.6px;
    font-size: 72px;
  }
  #hero .gradient-text {
    font-size: 102px;
    letter-spacing: -6px;
    line-height: 1;
    font-weight: 800;
  }
}
</style>
