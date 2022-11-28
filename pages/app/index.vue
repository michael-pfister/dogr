<template>
  <div>
    <SearchWidget
      :search-options="getBreeds()"
      @search-result-selected="addFilter"
    />
    <FilterDisplay :filter="filter" @filter-removed="removeFilter" />
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
      :nav-item-count="10"
      :item-count="getPictureLength()"
      :initial-selected-page="1"
      @page-selected="onPageSelected"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImageDisplay from '~/components/ImageDisplay.vue'
import SearchWidget from '~/components/SearchWidget.vue'

export default defineComponent({
  components: { ImageDisplay, SearchWidget },
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
    const filter: string[] = []

    return {
      pictures,
      index,
      filter,
    }
  },
  methods: {
    getPictures() {
      const images = []
      const filteredPictures = this.filter.length ? this.pictures.filter((picture) =>
        this.filter.includes(picture.breed)
      ) : this.pictures
      let numberOfDisplayedPictures = 0

      for (let i = 0; i < filteredPictures.length; i++) {
        const breed = filteredPictures[i]
        for (let j = 0; j < breed.pictures.length; j++) {
          const picture = breed.pictures[j]
          if (
            numberOfDisplayedPictures >= this.index[0] &&
            numberOfDisplayedPictures < this.index[1]
          ) {
            images.push(picture)
          }
          numberOfDisplayedPictures++
        }
      }

      return images
    },
    getPictureDescription(source: string) {
      const breed = source.split('/')[4]

      return breed
    },
    onPageSelected(page: number) {
      /* 
      
      Doesn't work because the index is not reactive.

      this.index[0] = (page - 1) * 10
      this.index[1] = page * 10 
      
      */

      this.index.splice(0, 1, (page - 1) * 10)
      this.index.splice(1, 1, page * 10)
    },
    getPictureLength() {
      let length = 0

      for (let i = 0; i < this.pictures.length; i++) {
        const breed = this.pictures[i]
        length += breed.pictures.length
      }

      return length
    },
    getBreeds() {
      const breeds = this.pictures.map((breed) => breed.breed)
      return breeds
    },
    addFilter(filter: string) {
      this.filter.push(filter)
    },
    removeFilter(filter: string) {
      const index = this.filter.indexOf(filter)
      this.filter.splice(index, 1)
    },
  },
})
</script>
