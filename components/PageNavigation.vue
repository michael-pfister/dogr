<template>
  <section class="pageNavigation my-8">
    <h2>d{{ 'o'.repeat(getIndexLength()) }}gr</h2>
    <ul
      v-for="page in getPages().slice(index[0], index[1])"
      :key="`navigation-page-${page}`"
    >
      <li>
        <button
          :disabled="page === selectedPage"
          :class="page === selectedPage ? 'selected' : ''"
          @click="selectPage(page)"
        >
          {{ page }}
        </button>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageNavigation',
  props: {
    navItemCount: {
      type: Number,
      required: true,
    },
    itemCount: {
      type: Number,
      required: true,
    },
    initialSelectedPage: {
      type: Number,
      required: true,
    },
  },
  emits: ['page-selected'],
  data() {
    return {
      selectedPage: this.initialSelectedPage,
      index: [0, 10], // change number of pages shown here
    }
  },
  methods: {
    getPages() {
      return Array.from(
        { length: Math.ceil(this.itemCount / this.navItemCount) },
        (_, i) => i + 1
      )
    },
    selectPage(page: number) {
      this.selectedPage = page
      this.$emit('page-selected', page)

      this.selectedPage === this.index[1] && this.incrementIndex()
      this.selectedPage === this.index[0] + 1 &&
        this.index[0] &&
        this.decrementIndex()
    },
    incrementIndex() {
      const indexLength = this.getIndexLength()
      this.index[0] += Math.ceil(indexLength / 2)
      this.index[1] += Math.ceil(indexLength / 2)
    },
    decrementIndex() {
      const indexLength = this.getIndexLength()
      this.index[0] -= Math.ceil(indexLength / 2)
      this.index[1] -= Math.ceil(indexLength / 2)
    },
    getIndexLength() {
      return Math.abs(this.index[1] - this.index[0])
    },
  },
})
</script>
