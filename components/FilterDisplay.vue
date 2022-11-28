<template>
  <section>

  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FilterDisplay',
  props: {
    filter: {
      type: Array,
      required: true,
    },
  },
  emits: ['filter-changed'],
  methods: {
    onFilterChanged() {
      this.$emit('filter-changed')
    },
  },
})