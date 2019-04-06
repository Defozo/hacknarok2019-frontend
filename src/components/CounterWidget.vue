<template>
  <div>
    <input v-model="searchedPhrase" placeholder="find">
      <button v-on:click="findWord()">Add 1</button>
    <p> Word count is: {{ wordCount }}</p>
  </div>
</template>

<script>

  import Processor from '@/module/Processor'

  export default {
    name: "CounterWidget",
    data() {
      return {
        processor: new Processor(),
        searchedPhrase: null,
        wordCount: null,
        wordArray: null,
        emojiArray: null,
        words: null,
      }
    },
    mounted() {
      this.words = this.$store.getWords()
      this.processor.setup()
    },
    methods: {
      findWordCount(){
        this.wordCount = this.processor.findWordCount(this.searchedPhrase)
      },
      findPrevalentWords(){
        const { words, emojis } = this.processor.countWords()
        this.wordArray = words
        this.emojiArray = emojis
      }
    }
  }
</script>

<style scoped>

</style>
