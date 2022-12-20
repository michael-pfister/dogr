<template>
  <section class="flex justify-center items-center flex-wrap p-2">
    <img src="~/assets/img/404 Page Not Found _Outline.svg" alt="Error" />
    <div class="flex flex-col items-center gap-6">
      <h1>Oops!</h1>
      <p v-if="error.statusCode === 404">
        We couldn't find the page you were looking for.
      </p>
      <p v-else>An error occurred.</p>
      <NuxtLink to="/" class="bg-green p-2 rounded-full text-black"
        >Return Home</NuxtLink
      >
    </div>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
