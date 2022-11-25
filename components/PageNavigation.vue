<template>
  <section class="pageNavigation my-8">
    <ul v-for="page in pages" :key="`navigation-page-${page}`">
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
    displayCount: {
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
    const pages = Array.from(
      { length: Math.ceil(this.itemCount / this.displayCount) },
      (_, i) => i + 1
    )

    return {
      pages,
      selectedPage: this.initialSelectedPage,
    }
  },
  methods: {
    selectPage(page: number) {
      this.selectedPage = page
      this.$emit('page-selected', page)
    },
  },
})
</script>

<style></style>
