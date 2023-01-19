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
          description="Click on an image to save it under My Dogs."
          :icon-src="require('~/assets/img/favorite-svgrepo-com.svg')"
          background-color="bg-green"
          text-color="text-black"
        />
        <step-display
          :step="3"
          title="Share With Friends"
          description="Use the share button to send your favorites to friends."
          :icon-src="require('~/assets/img/share-svgrepo-com.svg')"
          background-color="bg-gray-700"
        />
      </div>
      <div class="px-4 flex flex-col gap-2">
        <h4 class="text-gray-500 dark:text-gray-400 font-bold">HOW IT WORKS</h4>
        <h1 class="font-bold">About</h1>
        <p>
          Dogr is a powerful tool that allows you to find pictures of any dog in
          a matter of seconds. You can search for specific breeds, or just
          browse through the list of dogs. You can also star your favorites and
          share them with friends.
        </p>
        <nuxt-link
          to="/app"
          class="text-black text-xl py-2 px-4 rounded-full bg-green w-36 text-center mt-4"
          >Get Started</nuxt-link
        >
      </div>
    </section>
    <section>
      <img
        src="~/assets/img/layered-waves-haikei.svg"
        class="w-full"
        aria-hidden="true"
      />
      <div
        class="flex flex-wrap-reverse justify-evenly items-center p-2 gap-4 bg-green text-black"
      >
        <img src="~/assets/img/tweet.webp" class="w-[500px] rounded-lg" />
        <h2 class="max-w-md text-center">
          Share Your Favorite Images on Any Platform.
        </h2>
      </div>
      <img
        src="~/assets/img/layered-waves-haikei.svg"
        class="w-full rotate-180"
        aria-hidden="true"
      />
    </section>
    <section class="flex justify-around items-center gap-12 my-8 flex-wrap">
      <div>
        <h2 class="max-w-md text-center">
          <span class="font-bold">Click</span> on any image to save it under
          <nuxt-link to="/mydogs" class="text-green font-bold"
            >My Dogs</nuxt-link
          >.
        </h2>
        <p class="text-center mt-2 text-xl">
          ( Click for a second time to
          <span class="text-green font-bold">remove</span> it. )
        </p>
      </div>
      <div class="relative scale-150 mx-16">
        <ImageDisplay :picture="require('~/assets/img/shiba_inu.webp')" />
        <img
          src="~/assets/img/click-svgrepo-com.svg"
          class="w-16 absolute right-2 bottom-2 animate-bounce"
        />
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
