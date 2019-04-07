<template>
  <div class="flex flex-col">
    <input
      class="px-8 py-4 mx-8 mt-8 self-center shadow-none w-1/3 bg-transparent text-center text-3xl border-purple-dark animate text-purple-dark "
      :class="(!found) ? 'border-b-4' : 'border-b-0' "
      placeholder="Type your friend name here" @keyup.enter="search()"
      v-model="searchedPhrase">
    <div v-if="found"
         class="bg-white px-8 py-4 mx-8 mt-4 shadow-lg rounded-lg flex align-start anim2">
      <div
        class="left_column self-center text-5xl font-black mr-6 text-purple-dark">
        {{found.number || 'N/A'}}
      </div>
      <div class="right_column flex flex-col align-stretch">
        <p
          class="mb-2 text-purple-dark font-semibold text-xl self-start whitespace-no-wrap">
          {{found.name}}</p>
        <div class="flex justify-between">
          <p class="text-grey-light">common messages:</p>
          <p class="text-grey-dark font-semibold">{{found.messages ||
            'N/A'}}</p>
        </div>
      </div>
      <div class="right_column flex flex-col align-stretch">
        <p
          class="mx-8 mb-3 text-grey font-semibold text-xl self-start whitespace-no-wrap">
          sentiment</p>
        <div class="sentiment h-3 w-48 self-center mx-8 rounded-full flex">
          <div
            class="w-5 h-5 border-4 border-purple-dark rounded-full self-center relative"
            :style="{left: `${found.sentiment}%`}">

          </div>
        </div>
      </div>
      <div class="right_column flex flex-col align-stretch">
        <p
          class="mb-3 text-grey font-semibold text-xl self-start whitespace-no-wrap">
          last messaged at</p>
        <p class="text-grey-dark font-semibold self-start">{{toMyDate(found.lastMessageDate) ||
          'N/A'}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'

  import { mapGetters } from 'vuex'
  import { GET_PARTICIPANTS } from '../store/getters'

  export default {
    name: 'MessagesWithChoosen',
    data() {
      return {
        searchedPhrase: '',
        found: null,
      }
    },
    computed: {
      ...mapGetters({getParticipants: GET_PARTICIPANTS}),
    },
    watch: {
      searchedPhrase(val) {
        if (val === '') {
          this.found = null
        }
      },
    },
    methods: {
      search() {
        if (this.searchedPhrase === '') {
          return
        }

        const participants = this.getParticipants
        const index = participants.map(p => _.toLower(_.deburr(p.name))).indexOf(_.toLower(_.deburr(this.searchedPhrase)))

        if (index === -1) {
          this.found = {
            name: null,
            messages: null,
            number: null,
            sentiment: 0,
            lastMessageDate: null,
          }
        } else {
          console.log(participants[index]);
          this.found = {
            name: participants[index].name,
            messages: participants[index].messages,
            number: `#${index + 1}`,
            sentiment: this.scaleSentiment(participants[index].sentiment),
            lastMessageDate: new Date(participants[index].date),
          }
        }
      },
      scaleSentiment(sentiment) {
        const score = (sentiment * 350 + 7) * 9
        if (score < 0) return 0
        if (score > 90) return 90
        return score
      },
      toMyDate(date){
        if (!date) return null
        return date.toLocaleDateString()
      },
    },
  }
</script>

<style scoped>
  .sentiment {
    background: linear-gradient(90deg, rgb(219, 0, 0) 0%, rgb(219, 69, 0) 25%, rgb(234, 222, 0) 50%, rgb(0, 214, 21) 75%, rgb(14, 224, 0) 100%);
  }

  .animate {
    outline: 0;
    box-shadow: none;
    transition: border 0.4s ease;
  }

  .anim2 {
    animation: slide-in 0.5s forwards;
    opacity: 0;
  }

  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateY(-20px)
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>
