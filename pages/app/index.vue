<template>
  <div>
    <section class="my-8 p-2">
      <ul class="dogList">
        <li v-for="picture in getPictures()" :key="picture">
          <ImageDisplay
            :picture="picture"
            :alt="getPictureDescription(picture)"
          />
        </li>
      </ul>
    </section>
    <PageNavigation
      :display-count="10"
      :item-count="100"
      :initial-selected-page="1"
      @page-selected="onPageSelected"
    />
    {{ index }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImageDisplay from '~/components/ImageDisplay.vue'

export default defineComponent({
  components: { ImageDisplay },
  async asyncData({
    $axios,
  }): Promise<{ pictures: { breed: string; pictures: string[] }[] }> {
    // Filter out bad requests
    const response: { message: {}; status: string } = await $axios
      .$get('https://dog.ceo/api/breeds/list/all')
      .catch(() => {
        return { message: {}, status: 'error' }
      })

    const breeds = Object.keys(response.message)
    const pictures = await Promise.all(
      breeds.map(async (breed) => {
        const response = await $axios.$get(
          `https://dog.ceo/api/breed/${breed}/images`
        )
        return {
          breed,
          pictures: response.message,
        }
      })
    )

    return { pictures }
  },
  data() {
    const pictures: { breed: string; pictures: string[] }[] = []
    const index: [number, number] = [0, 10]

    return {
      pictures,
      index,
    }
  },
  methods: {
    getPictures() {
      const images = []
      let numberOfDisplayedPictures = 0

      for (let i = 0; i < this.pictures.length; i++) {
        for (let j = 0; j < this.pictures[i].pictures.length; j++) {
          if (
            numberOfDisplayedPictures < Math.abs(this.index[0] - this.index[1])
          ) {
            images.push(this.pictures[i].pictures[j])
            numberOfDisplayedPictures++
          }
        }
      }

      return images
    },
    getPictureDescription(source: string) {
      const breed = source.split('/')[4]

      return breed
    },
    onPageSelected(page: number) {
      this.index[0] = (page - 1) * 10
      this.index[1] = page * 10
      console.log(page)
      console.log(this.index)
    },
  },
})
</script>
