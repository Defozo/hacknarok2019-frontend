<template>
  <div class="flex w-full items-center">
    <p class="text-purple-dark m-4 font-semibold text-xl">Check number of occurrences: </p>
    <input
      class="px-4 py-2 m-4 self-start shadow-lg w-1/6 rounded bg-white text-center text-xl animate outline-none text-purple-dark "
      placeholder="Enter searched word" @keyup.enter="search()"
      v-model="searchedPhrase">
    <div v-if="found" class="bg-purple-dark text-white font-extrabold rounded-full px-8 py-3"> {{ found }}</div>
  </div>
</template>

<script>

  import {mapGetters} from 'vuex'
  import {
    GET_WORDS,
  } from '../store/getters'
  export default {
    name: 'ChooseWordWidget',
    data() {
      return {
        searchedPhrase: '',
        found: null,
      }
    },
    computed: {
      ...mapGetters([GET_WORDS]),
    },
    watch: {
      searchedPhrase(val){
        if (val === ''){
          this.found = null
        }
      }
    },
    methods: {
      search() {
        const words = this.getWords
        const count = words[this.searchedPhrase]
        console.log(count)
        this.found = (count !== undefined) ? count : 'Not found'
      },
    },
  }
</script>

<style scoped>

</style>
