<template>
  <div>
    <input v-model="searchedPhrase" placeholder="find">
      <button v-on:click="findWord()">Add 1</button>
    <p> Word count is: {{ wordCount }}</p>
  </div>
</template>

<script>

  import Processor from '@/module/Processor'
  import Sanitizer from '@module/Sanitizer'

  export default {
    name: "CounterWidget",
    data() {
      return {
        processor: new Processor(),
        sanitizer: new Sanitizer(),
        searchedPhrase: null,
        wordCount: null,
        wordArray: null,
        emojiArray: null,
        words: null,
      }

    },
    mounted() {
      let rawWords = this.$store.getWords();
      const cleanedWords = this.sanitizer.prepareMessages(rawWords);
      this.processor.setup(cleanedWords)
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
