<template>
  <div>
    <AppBar />
    <main>
      <Nuxt />
      <ShareNotification :link="notificationLink" />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Pusher from 'pusher-js'
import ShareNotification from '~/components/ShareNotification.vue'

export default defineComponent({
  components: { ShareNotification },
  data() {
    return {
      notificationLink: '',
    }
  },
  mounted() {
    // Enable pusher logging - don't include this in production
    // Pusher.logToConsole = true

    const pusher = new Pusher(this.$config.pusherKey, {
      cluster: 'eu',
    })

    const channel = pusher.subscribe('notifications')

    channel.bind('share', (link: string) => {
      this.notificationLink = link
    })
  },
})
</script>
