<template>
  <section class="my-16 p-2">
    <h2 class="text-center">My Starred Dogs</h2>
    <div v-if="myDogs.length">
      <ul class="dogList my-8">
        <li v-for="picture in myDogs" :key="picture">
          <image-display :picture="picture" />
        </li>
      </ul>
      <button>share <img src="" /></button>
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
