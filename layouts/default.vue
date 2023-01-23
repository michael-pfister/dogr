<template>
  <div>
    <AppBar />
    <main>
      <Nuxt />
    </main>
    <footer
      class="flex flex-wrap gap-4 justify-center md:justify-between items-end p-2 m-2 mt-20 bg-[#000] rounded text-white"
    >
      <div class="max-w-md">
        <nuxt-link class="flex gap-2 items-center h-12" to="/">
          <NuxtLogo class="w-8" />
          <h3>Dogr<span class="text-green">.</span></h3>
        </nuxt-link>
        <p>
          Dogr is a powerful tool that allows you to find pictures of any dog in
          a matter of seconds.
        </p>
      </div>
      <div class="flex flex-wrap gap-2">
        <p>Found a bug? Submit an issue on</p>
        <a
          class="flex gap-2 items-center underline"
          href="https://github.com/michael-pfister/dogr"
          target="_blank"
        >
          GitHub
          <img
            class="w-6"
            src="~/assets/img/github-svgrepo-com.svg"
            aria-hidden="true"
          />
        </a>
      </div>
    </footer>
  </div>
</template>
