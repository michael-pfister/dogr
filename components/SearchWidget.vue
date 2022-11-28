<template>
  <section class="flex justify-center my-16">
    <div class="searchWidget">
        <div>
            <img src="~/assets/img/search-svgrepo-com.svg" aria-hidden="true" />
            <input
                v-model="searchTerm"
                type="text"
                placeholder="Search for a breed"
            />
        </div>
        <ul v-if="searchTerm.length > 0 && !searchOptions.includes(searchTerm)">
            <li v-for="result in getResults()" :key="`search_result_${result}`">
                <button @click="onResultSelected(result)">
                    {{ result }}
                </button>
            </li>
        </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SearchWidget',
    props: {
        searchOptions: {
            type: Array,
            required: true,
        },
    },
    emits: ['search-result-selected'],
    data() {
        return {
            searchTerm: '',
        }
    },
    methods: {
        onResultSelected(result: string) {
            this.$emit('search-result-selected', result)
        },
        getResults(): string[] {
            return (this.searchOptions.filter((option) => (option as string).toLowerCase().includes(this.searchTerm.toLowerCase())) as string[])
        },
    },
})
</script>


<style>

</style>