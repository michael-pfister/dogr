<template>
  <div>
    <!-- Hero -->
    <section
      class="relative overflow-hidden w-full px-4 h-full flex flex-wrap justify-end items-center gap-8"
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
    <section
      class="my-8 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16"
    >
      <div
        class="w-full flex flex-wrap gap-4 items-center justify-center p-4 xl:p-0"
      >
        <step-display
          :step="1"
          title="Add Filters"
          description="Look for specific breeds through the search bar."
          :icon-src="require('~/assets/img/search-svgrepo-com.svg')"
        />
        <step-display
          :step="2"
          title="Star Your Favorites"
          description="Click on an image to add it to your dog list."
          :icon-src="require('~/assets/img/favorite-svgrepo-com.svg')"
          background-color="bg-green"
          text-color="text-black"
        />
        <step-display
          :step="3"
          title="Share With Friends"
          description="Use the share button to send your dog list to friends."
          :icon-src="require('~/assets/img/share-svgrepo-com.svg')"
          background-color="bg-gray-700"
        />
      </div>
      <div class="px-4 flex flex-col gap-2">
        <h4 class="text-gray-500 dark:text-gray-400 font-bold">HOW IT WORKS</h4>
        <h1 class="font-bold">About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
          assumenda doloremque et at minima recusandae sit iusto adipisci maxime
          exercitationem in doloribus ipsum, earum perferendis rerum facere
          quasi velit iure?
        </p>
        <nuxt-link
          to="/app"
          class="text-black text-xl py-2 px-4 rounded-full bg-green w-36 text-center mt-4"
          >Get Started</nuxt-link
        >
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  transition: 'slide',
})
</script>
