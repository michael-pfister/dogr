<template>
  <div>
    <SearchWidget
      :search-options="getBreeds()"
      @search-result-selected="addFilter"
    />
    <section id="control_section" class="flex justify-between p-2">
      <FilterDisplay :filter="filter" @filter-removed="removeFilter" />
      <IndexSelector @index-selected="onIndexSelected" />
    </section>
    <section class="p-2">
        <transition-group name="fade" class="dogList" tag="ul">
          <li v-for="picture in getPictures()" :key="picture">
              <ImageDisplay
                :picture="picture"
                :alt="getPictureDescription(picture)"
              />
          </li>
        </transition-group>
    </section>
    <PageNavigation
      v-if="!infiniteScroll"
      :nav-item-count="Math.abs(index[1] - index[0])"
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
  transition: 'fade',
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
      infiniteScroll: false,
    }
  },
  mounted() {
    // Align control section
    this.alignControlSection()

    // Infinte Scroll
    window.addEventListener('scroll', this.handleScroll)

    // Check for myDogs Cookie
    this.checkForMyDogsStorage()
  },
  methods: {
    getPictures() {
      const images = []
      const filteredPictures = this.getFilteredPictures()
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

      const interval = Math.abs(this.index[1] - this.index[0])

      this.index.splice(0, 1, (page - 1) * interval)
      this.index.splice(1, 1, page * interval)
    },
    getPictureLength() {
      let length = 0
      const filteredPictures = this.getFilteredPictures()

      for (let i = 0; i < filteredPictures.length; i++) {
        const breed = filteredPictures[i]
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
    getFilteredPictures() {
      return this.filter.length
        ? this.pictures.filter((picture) => this.filter.includes(picture.breed))
        : this.pictures
    },
    onIndexSelected(value: number | '♾') {
      if (value === '♾') {
        this.infiniteScroll = true
        this.index.splice(1, 1, 50)
      } else {
        this.infiniteScroll = false
        this.index.splice(1, 1, value)
      }
    },
    handleScroll() {
      if (this.infiniteScroll) {
        const scrollHeight = document.documentElement.scrollHeight
        const scrollTop = document.documentElement.scrollTop
        const clientHeight = document.documentElement.clientHeight

        if (scrollTop + clientHeight >= scrollHeight - clientHeight) {
          this.index.splice(1, 1, this.index[1] + 20)
        }
      }
    },
    alignControlSection() {
      // Horizontally align the control section to the doglist
      if (window.screen.width > 640 /* = sm */) {
        let dogListWidth = document.querySelector('.dogList')?.clientWidth

        dogListWidth = dogListWidth ? (dogListWidth % 256) / 2 : 0 // Rule out undefined values

        document
          .querySelector('#control_section')
          ?.setAttribute(
            'style',
            `padding-left: ${dogListWidth}px; padding-right: ${dogListWidth}px`
          ) // Set padding to align the control section to the doglist
      }
    },
    checkForMyDogsStorage() {
      const myDogs = localStorage.getItem('myDogs')
      !myDogs && localStorage.setItem('myDogs', JSON.stringify([]))
    },
  },
})
</script>

<style scoped>
.fade-enter-active{
  transition: 0.2s all 0.2s ease;
}

.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter{
  transform: translateX(-100vw);
}
.fade-enter-to{
  transform: translateX(0);
}

.fade-leave-to {
  transform: translateX(-100vw);
}
</style>