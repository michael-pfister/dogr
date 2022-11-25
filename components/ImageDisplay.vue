<template>
  <div class="imageDisplay">
    <img :src="picture" />
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
})
</script>
