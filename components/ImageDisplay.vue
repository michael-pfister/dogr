<template>
  <div :class="`imageDisplay${!loaded ? ' animate-pulse' : ''}`">
    <img :src="picture" @load="setloaded()" />
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
    }
  },
  methods: {
    setloaded() {
      this.loaded = true
    },
  },
})
</script>
