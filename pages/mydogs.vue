<template>
  <section class="my-16 p-2">
    <h2 class="text-center">My Starred Dogs</h2>
    <div v-if="myDogs.length">
      <ul class="dogList my-8">
        <li v-for="picture in myDogs" :key="picture">
          <image-display :picture="picture" />
        </li>
      </ul>
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        target="_blank"
        class="bg-[#1DA1F2] p-2 rounded text-black text-xl flex gap-2 items-center w-40 justify-center mx-auto transition hover:scale-110"
        data-size="large"
        data-text="I just found a couple of cool looking 🐶 on Dogr. Check them out!"
        :data-url="`https://dogr.vercel.app/dogs?images[]=${JSON.stringify(
          myDogs
        )}`"
        data-hashtags="dogs"
        data-show-count="false"
        ><img src="~/assets/img/twitter-svgrepo-com.svg" class="w-8" />Tweet</a
      >
    </div>
    <p v-else class="text-center my-16">
      Oops! You currently do not have any starred dogs.
    </p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  transition: 'slide',
  data() {
    return {
      myDogs: [] as string[],
    }
  },
  mounted() {
    // Check for myDogs localStorage
    this.checkForMyDogsStorage()

    // Get myDogs from localStorage
    this.myDogs = JSON.parse(localStorage.getItem('myDogs') || '[]')
  },
  methods: {
    checkForMyDogsStorage() {
      const myDogs = localStorage.getItem('myDogs')
      !myDogs && localStorage.setItem('myDogs', JSON.stringify([]))
    },
  },
})
</script>
