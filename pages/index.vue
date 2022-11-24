<template>
  <!-- Hero -->
  <section
    class="relative overflow-hidden w-full px-4 my-32 h-full flex flex-wrap justify-end items-center gap-8"
  >
    <div class="absolute w-full h-full -z-10" aria-hidden="true">
      <img
        src="~/assets/img/blob-haikei.svg"
        class="scale-[2] -translate-y-8"
      />
    </div>
    <div class="max-w-2xl mx-auto">
      <h1 class="text-center">
        Find Pictures of
        <span class="text-green text-6xl md:text-7xl">Any Dog Breed</span> in
        Seconds.
      </h1>
    </div>
    <img
      src="~/assets/img/hero_dog.webp"
      class="w-[300px] md:w-2/5 rounded"
      aria-label="a cute dog"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
