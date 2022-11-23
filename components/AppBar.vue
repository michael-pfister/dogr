<template>
  <header>
    <div class="flex gap-4 items-center">
      <nuxt-link class="flex gap-2 items-center h-12" to="/">
        <NuxtLogo class="w-8" />
        <h3>Dogr<text class="text-green">.</text></h3>
      </nuxt-link>
      <button aria-label="toggle theme" @click="toggleTheme">
        <img
          id="lightbulb"
          src="~/assets/img/light-bulb-svgrepo-com.svg"
          :class="`icon${theme === 'dark' ? ' invert' : ''}`"
        />
      </button>
    </div>
    <nav>
      <!-- App, Sign in, Sign Up, -->
      <ul class="flex gap-8 text-xl">
        <li>
          <nuxt-link to="/signup">Login</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/signup">Create Account</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/app" class="p-2 bg-green text-black rounded"
            >Find Images</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppBar',
  data() {
    return {
      theme: 'light',
    }
  },
  beforeMount() {
    this.theme = localStorage.getItem('theme') || 'light'

    document.documentElement.classList.add(this.theme)
    this.theme === 'dark' &&
      document
        .getElementById('lightbulb')
        ?.classList.add(this.theme && 'invert')
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'

      this.theme === 'dark'
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark')

      localStorage.setItem('theme', this.theme)
    },
  },
})
</script>
