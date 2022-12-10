<template>
  <div :id="picture" :class="`imageDisplay${!loaded ? ' animate-pulse' : ''}`">
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
  methods: {
    setloaded() {
      this.loaded = true
    },
    star() {
      this.starred = !this.starred

      document.getElementById(this.picture)?.classList.toggle('starred')
    },
  },
})
</script>
