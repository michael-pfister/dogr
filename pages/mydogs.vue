<template>
  <section class="my-16 p-2">
    <h2 class="text-center">My Starred Dogs</h2>
    <ul v-if="myDogs.length" class="dogList my-8">
      <li v-for="picture in myDogs" :key="picture">
        <image-display :picture="picture" />
      </li>
    </ul>
    <p v-else class="text-center my-16">
      Oops! You currently do not have any starred dogs.
    </p>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Pusher from 'pusher-js'

export default defineComponent({
  transition: 'slide',
  setup() {
    const myDogs = ref([])

    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    const pusher = new Pusher('0bd97ca688d0795c80e3', {
      cluster: 'eu',
    })

    const channel = pusher.subscribe('chat');

    /* channel.bind('my-event', function(data: {}) {
      alert(JSON.stringify(data));
    }); */

    // works
    /* channel.emit('my-event', {
      message: 'hello world'
    }); */

    return { myDogs, pusher, channel }
  },
  mounted() {
    // Check for myDogs localStorage
    this.checkForMyDogsStorage()

    // Get myDogs from localStorage
    this.myDogs = JSON.parse(localStorage.getItem('myDogs') || '[]')

    /* --- Pusher --- */

    // Check for successful subscription
    this.channel.bind('pusher:subscription_succeeded', () => {
      console.log('Successfully connected to Pusher')
    })

    // Check for errors
    this.channel.bind('pusher:subscription_error', (status: {}) => {
      console.log('Error connecting to Pusher', status)
    })
  },
  methods: {
    checkForMyDogsStorage() {
      const myDogs = localStorage.getItem('myDogs')
      !myDogs && localStorage.setItem('myDogs', JSON.stringify([]))
    },
  },
})
</script>
