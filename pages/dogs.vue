<template>
  <!-- prevents SSR bug, do not remove -->
  <client-only>
    <section class="flex flex-col items-center">
      <div v-if="images.length">
        <div class="flex gap-2 justify-center p-2">
          <h2>
            <span class="text-green">Wow!</span> These are some awesome<span
              class="md:hidden"
            >
              dogs!</span
            >
          </h2>
          <h2 class="hidden md:inline-block animate-spin" aria-label="dogs">
            🐶
          </h2>
          <h2 class="hidden md:inline-block">!</h2>
        </div>
        <ul class="dogList my-8">
          <li v-for="(image, index) in images" :key="`dog_${index}`">
            <ImageDisplay :picture="image" />
          </li>
        </ul>
      </div>
      <p v-else class="text-center my-16">
        Oops! Seems like your link got corrupted.
      </p>
      <NuxtLink to="/" class="bg-green p-2 rounded-full text-black"
        >Return Home</NuxtLink
      >
    </section>
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

function isImage(url: string) {
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null
}

export default defineComponent({
  data() {
    let images = this.$route.query.images || []

    try {
      images = (images as string).split(',')
      images = images.map((image) => `https://images.dog.ceo/breeds/${image}`)
    } catch (error) {
      images = []
    }

    // filter out any non-image urls
    images = images
      ? (images as string[]).filter((url: string) => isImage(url))
      : []

    return { images }
  },
})
</script>
