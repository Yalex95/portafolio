<script setup lang="ts">
import DaysiButton from "./daysi-button.vue";
import { Icon } from "@iconify/vue";
</script>

<template>
  <section class="flex gap-10 py-20 " id="hero">
    <article class="w-1/2 flex flex-col">
      <div class="badge badge-success uppercase text-white font-semibold">
        <Icon icon="tabler:circle-check-filled" width="14" />Available for work
      </div>
      <h2>Hi, I'm Yeris <br />Aguilar —</h2>
      <h1 class="gradient-text">
        Frontend <br />
        Developer
      </h1>
      <p class="text-base text-base-content">
        I build high-performance, value-driven web interfaces with a focus on
        modern user experiences and technical excellence.
      </p>
      <div class="flex gap-10">
        <DaysiButton label="View Projects" />
        <DaysiButton
          label="Download"
          icon="tabler:download"
          btn-type="btn-secondary"
        />
      </div>
    </article>
    <div class="flex-1 flex justify-center items-center">
      <img
        src="../assets/yeris_aguilar.png"
        alt="Yeris Aguilar Frontend web developer"
      />
    </div>
  </section>
</template>
<style scoped>
#hero {
  background-image: url("../assets/hero_background.png");
  background-position: top left;
  background-repeat: no-repeat;
  background-size: contain;
}
#hero h2 {
  font-family: "Inter", sans-serif;
  line-height: 72px;
  letter-spacing: -3.6px;
  font-weight: 800;
  font-size: 72px;
  color: #0f172a;
}
#hero .gradient-text {
  background: linear-gradient(290deg, #9333ea 0%, #6366f1 40%, #1313ec 100%);

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  display: inline-block;

  font-family: "Inter", sans-serif;
  font-size: 102px;
  letter-spacing: -6px;
  line-height: 1;
  font-weight: 800;
}
</style>
