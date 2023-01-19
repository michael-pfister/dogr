<template>
  <header>
    <div class="flex gap-2 items-center">
      <nuxt-link class="flex gap-2 items-center h-12" to="/">
        <NuxtLogo class="w-8" />
        <h3>Dogr<span class="text-green">.</span></h3>
      </nuxt-link>
      <button aria-label="toggle theme" @click="toggleTheme">
        <img
          id="lightbulb"
          src="~/assets/img/light-bulb-svgrepo-com.svg"
          class="icon"
          :style="theme === 'dark' ? 'filter: invert(1);' : ''"
        />
      </button>
    </div>
    <nav>
      <ul class="flex gap-8 text-xl items-center">
        <li class="md:inline-block hidden">
          <nuxt-link to="/mydogs">My Dogs</nuxt-link>
        </li>
        <li>
          <div class="flex items-center gap-2">
            <nuxt-link to="/app" class="p-2 bg-green text-black rounded"
              >Find Images</nuxt-link
            >
            <button
              id="mobile_menu_toggle"
              class="p-3 rounded bg-black dark:bg-white md:hidden"
              @click="openMobileMenu"
            >
              <img
                src="~/assets/img/down-arrow-svgrepo-com.svg"
                class="h-[1.25rem]"
                :style="
                  theme === 'dark' ? 'filter: invert(0);' : 'filter: invert(1);'
                "
              />
            </button>
          </div>
          <!-- Mobile Menu -->
          <div
            id="mobile_menu"
            class="hidden absolute z-10 md:hidden mt-2 rounded w-[175px] bg-black text-white dark:bg-white dark:text-black"
          >
            <ul>
              <li>
                <nuxt-link to="/mydogs" class="block w-full p-2"
                  >My Dogs</nuxt-link
                >
              </li>
            </ul>
          </div>
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
      mobileMenuOpen: false,
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

      document.documentElement.classList.toggle('dark')

      localStorage.setItem('theme', this.theme)
    },
    openMobileMenu() {
      // Toggle Button

      document
        .getElementById('mobile_menu_toggle')
        ?.classList.toggle('rotate-180')
      document
        .getElementById('mobile_menu_toggle')
        ?.classList.toggle('animate-flip')

      !this.mobileMenuOpen &&
        document
          .getElementById('mobile_menu_toggle')
          ?.classList.remove('animate-flipreverse')
      this.mobileMenuOpen &&
        document
          .getElementById('mobile_menu_toggle')
          ?.classList.add('animate-flipreverse')

      // Menu

      document.getElementById('mobile_menu')?.classList.toggle('hidden')
      document
        .getElementById('mobile_menu')
        ?.classList.toggle('animate-gainheight')

      this.mobileMenuOpen = !this.mobileMenuOpen
    },
  },
})
</script>
