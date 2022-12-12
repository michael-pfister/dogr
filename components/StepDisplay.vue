<template>
  <div :class="`${backgroundColor} p-4 flex flex-col gap-2 rounded w-64`">
    <div class="flex items-center gap-2">
      <img
        :src="iconSrc"
        class="icon p-2 bg-gray-800 rounded"
        aria-hidden="true"
      />
      <span :class="`${textColor} text-xl font-bold`">STEP {{ step }}</span>
    </div>
    <h2 :class="`${textColor} font-bold`">{{ title }}</h2>
    <p :class="`${textColor}`">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StepDisplay',
  props: {
    step: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    iconSrc: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: 'bg-gray-600',
    },
    textColor: {
      type: String,
      default: 'text-white',
    },
  },
})
</script>
