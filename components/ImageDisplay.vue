<template>
  <div :class="`imageDisplay${!loaded ? ' animate-pulse' : ''}`">
    <div
      class="w-[calc(50%-1rem)] sm:w-64 aspect-[inherit] rounded-[inherit] absolute z-10 hover:bg-[rgba(0,0,0,0.8)] transition-all group"
    >
      <button
        aria-label="add to favorites"
        class="hidden group-hover:flex w-full h-full justify-center items-center active:scale-90 transition-transform"
      >
        <img
          src="~/assets/img/heart-svgrepo-com.svg"
          class="w-12 aspect-auto"
        />
      </button>
    </div>
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
