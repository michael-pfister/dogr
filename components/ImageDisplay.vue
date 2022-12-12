<template>
  <div :id="picture" class="imageDisplay animate-pulse bg-[rgba(0,0,0,0.3)]">
    <button @click="star">
      <img :src="picture" @load="setloaded()" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ImageDisplay',
  props: {
    picture: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loaded: false,
      starred: false,
    }
  },
  mounted() {
    // Check if picture is in myDogs storage
    const myDogs = JSON.parse(localStorage.getItem('myDogs') || '[]')

    if (myDogs.includes(this.picture)) {
      this.starred = true
      document.getElementById(this.picture)?.classList.add('starred')
    }
  },
  methods: {
    setloaded() {
      this.loaded = true
      document.getElementById(this.picture)?.classList.remove('animate-pulse')
    },
    star() {
      // Toggle star
      this.starred = !this.starred
      document.getElementById(this.picture)?.classList.toggle('starred')

      // Add to myDogs storage
      const myDogs = JSON.parse(localStorage.getItem('myDogs') || '[]')

      if (this.starred) {
        myDogs.push(this.picture)
      } else {
        myDogs.splice(myDogs.indexOf(this.picture), 1)
      }

      localStorage.setItem('myDogs', JSON.stringify(myDogs))
    },
  },
})
</script>
