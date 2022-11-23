<template>
  <header>
    <nuxt-link class="flex gap-2 items-center h-12" to="/">
      <NuxtLogo class="w-8" />
      <h3>Dogr.</h3>
    </nuxt-link>
    <nav>
      <ul class="flex gap-4 text-xl">
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {},
})
</script>
