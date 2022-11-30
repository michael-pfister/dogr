<template>
  <section class="flex justify-end p-2 items-center">
    <div class="selectdiv">
      <select v-model="selectedOption" @change="onIndexSelected">
        <option
          v-for="option in $options.options"
          :key="`dog_amount_${option}`"
        >
          {{ option }}
        </option>
      </select>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexSelector',
  emits: ['index-selected'],
  data() {
    return {
      selectedOption: 10,
    }
  },
  created() {
    this.$options.options = [10, 25, 50, '♾']
  },
  methods: {
    onIndexSelected() {
      this.$emit('index-selected', this.selectedOption)
    },
  },
})
</script>
