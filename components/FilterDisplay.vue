<template>
  <div class="flex justify-center">
    <ul class="flex flex-wrap justify-center gap-4">
      <li
        v-for="searchterm in filter"
        :key="`filter_${searchterm}`"
        class="p-2 flex gap-1 items-center bg-green rounded-full animate-gainwidth"
      >
        <button @click="removeFilter(searchterm)">
          <img
            src="~/assets/img/remove-svgrepo-com.svg"
            aria-label="remove this filter"
            class="invert dark:invert-0"
          />
        </button>
        {{ searchterm }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PropType } from 'vue/types/v3-component-props'

export default defineComponent({
  name: 'FilterDisplay',
  props: {
    filter: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  emits: ['filter-removed'],
  methods: {
    removeFilter(searchTerm: string) {
      this.$emit('filter-removed', searchTerm)
    },
  },
})
</script>
