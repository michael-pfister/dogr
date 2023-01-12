<template>
  <Transition appear name="dig-up">
    <div v-if="show" class="fixed bottom-0 right-0 w-72 p-2">
      <div
        class="w-full border border-green rounded shadow-lg bg-white dark:bg-black p-2 flex gap-2 justify-center items-center"
      >
        <img
          class="w-16"
          aria-hidden="true"
          src="~/assets/img/dog-svgrepo-com.svg"
        />
        <div>
          <p class="font-bold">Somebody just shared some dogs!</p>
          <nuxt-link :to="link" class="text-green underline"
            >Check them out</nuxt-link
          >
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      show: false,
    }
  },
  computed: {
    link() {
      return this.$store.state.shareLink
    },
  },
  watch: {
    link() {
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 5000)
    },
  },
})
</script>

<style scoped>
.dig-up-enter-active {
  animation: digup 2s;
}

.dig-up-leave-active {
  animation: digup 2s reverse;
}

@keyframes digup {
  0% {
    transform: translateY(110%);
  }
  5% {
    transform: rotate(5deg) translateY(105%);
  }
  10% {
    transform: rotate(-5deg) translateY(100%);
  }
  15% {
    transform: rotate(5deg) translateY(95%);
  }
  20% {
    transform: rotate(-5deg) translateY(90%);
  }
  25% {
    transform: rotate(5deg) translateY(85%);
  }
  30% {
    transform: rotate(-5deg) translateY(80%);
  }
  35% {
    transform: rotate(5deg) translateY(75%);
  }
  40% {
    transform: rotate(-5deg) translateY(70%);
  }
  45% {
    transform: rotate(5deg) translateY(65%);
  }
  50% {
    transform: rotate(-5deg) translateY(60%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
