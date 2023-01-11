<template>
  <!-- fixes SSR bug, do not remove -->
  <client-only>
    <section class="flex flex-col items-center">
      <div class="flex gap-2">
        <h2 class="text-center">
          <text class="text-green">Wow!</text> These are some awesome
        </h2>
        <h2 class="animate-spin">🐶</h2>
        <h2>!</h2>
      </div>
      <ul v-if="images.length" class="dogList my-8">
        <li v-for="(image, index) in images" :key="`dog_${index}`">
          <ImageDisplay :picture="image" />
        </li>
      </ul>
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
