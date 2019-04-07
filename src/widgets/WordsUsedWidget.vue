<template>
  <div class="words_used">
    <h2 class="p-8 text-grey">Most Used Words</h2>

    <div class="flex align-middle justify-between flex-wrap">
      <div
        class="mx-8 w-32 h-32 p-2 rounded-full bg-white shadow-lg"
        v-bind:key="word.text" v-for="(word, index) in topWordsUsed">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <path :style="{'animation-duration': calculateDurationTime(word.amount)}" ref="path" class="dash" d="M83.5 416.5c-92-92-92-241 0-333s241-92 333 0 92 241 0 333" fill="none" stroke="#794acf" stroke-width="30" stroke-miterlimit="10"></path>
        </svg>
        <div class="word_amount text-purple-dark font-extrabold" v-text="status(index)"></div>
        <div class="word_text font-medium text-grey-darker">{{word.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import _ from 'lodash'

  import { GET_MESSAGES, GET_OWNER } from '@/store/getters'
  import BatchProcessor from '@/modules/BatchProcessor'

  export default {
    name: 'WordsUsedWidget',
    data() {
      return {
        numbers: [],
        statusArray: [0, 0, 0, 0, 0],
      }
    },
    computed: {
      topWordsUsed() {
        // [{text: 'dupa',amount: 9600}]

        const processor = new BatchProcessor(this.$store.getters[GET_MESSAGES], this.$store.getters[GET_OWNER])

        processor.setup()

        const count = processor.countWords()

        return _.take(count.wordArray, 5).map(({ key, value }) => ({ text: key, amount: value }))
      },
      status() {
        return index => this.statusArray[index]
      },
    },
    methods: {
      calculateDurationTime(number) {
        return `${this.calculateDuration(number)}s`
      },
      calculateDuration(number) {
        return Math.log(number * 0.0001 + 1) * 10
      },
      initiateInterval(dt, index, maxAmount) {
        const timeout = setInterval(() => {
          Vue.set(this.statusArray, index, this.statusArray[index] + 100)

          if (this.statusArray[index] >= maxAmount) {
            Vue.set(this.statusArray, index, maxAmount)

            clearInterval(timeout)
          }
        }, dt * 100)
      },
    },
    created() {
      this.topWordsUsed.forEach((el, index) => {
        const duration = this.calculateDuration(el.amount)
        const dt = duration / el.amount * 1000

        this.initiateInterval(dt, index, el.amount)
      })
    },
  }
</script>

<style scoped>
  .dash {
    stroke-dasharray: 1109.8482666015625;
    stroke-dashoffset: 0;
    animation-name: dash;
  }

  .word_amount{
    position: relative;
    top: -75px;
  }
  .word_text{
    position: relative;
    top: -45px;
  }
  @keyframes dash {
    from {
      stroke-dashoffset: 1109.8482666015625;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
</style>
