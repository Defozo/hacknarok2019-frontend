<template>
  <div class="words_used">
    <h2 class="p-4 text-grey">Words Used</h2>

    <div class="flex align-middle justify-between flex-wrap">
      <div
        class="m-8 w-32 h-32 rounded-full shadow"
        v-bind:key="word.text" v-for="(word, index) in topWordsUsed">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <path :style="{'animation-duration': calculateDurationTime(word.amount)}" ref="path" class="dash" d="M83.5 416.5c-92-92-92-241 0-333s241-92 333 0 92 241 0 333" fill="none" stroke="#794acf" stroke-width="30" stroke-miterlimit="10"/>
        </svg>
        <div class="word_amount" :ref="`word${index}`">{{animateNumbers(`word${index}`, word.amount)}}</div>
        <div class="word_text">{{word.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WordsUsedWidget',
    data() {
      return {
        numbers: [],
        topWordsUsed: [
          {
            text: 'dupa',
            amount: 9600,
          },
          // {
          //   text: 'siema',
          //   amount: 4570,
          // },
          // {
          //   text: 'dzionek',
          //   amount: 1230,
          // },
          // {
          //   text: 'ozor',
          //   amount: 960,
          // },
          // {
          //   text: 'XD',
          //   amount: 340,
          // },
        ],
      }
    },
    methods: {
      animateNumbers(ref, number){
        console.log(this.$refs)
        const el = this.$refs[ref]
        console.log(el)
        const seconds = this.calculateDuration(number)
        const dt = seconds / number * 1000
        setInterval(function () {
          el.innerHTML += 1
        }, dt)

      },
      calculateDurationTime(number){
        return `${this.calculateDuration(number)}s`
      },
      calculateDuration(number) {
        return Math.log(number * 0.0001 + 1) * 10
      },
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