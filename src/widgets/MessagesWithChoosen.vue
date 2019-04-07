<template>
  <div class="flex flex-col">
    <input
      class="px-8 py-4 mx-8 mt-8 self-center w-1/3 bg-grey-lightest text-center text-xl border-purple-dark animate text-purple-dark "
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
          <p class="text-grey-light">messages: </p>
          <p class="text-grey-dark font-semibold">{{found.messages ||
            'N/A'}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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

        console.log('search')
        const participants = this.getParticipants
        const index = participants.map(p => p.name).indexOf(this.searchedPhrase)

        if (index === -1) {
          this.found = {
            name: null,
            messages: null,
            number: null,
            sentiment: 0,
            lastMessageDate: null,
          }
        } else {
          this.found = {
            name: participants[index].name,
            messages: participants[index].messages,
            number: `#${index + 1}`,
            sentiment: (participants[index].sentiment + 5) * 9,
            lastMessageDate: new Date(participants[index].date),
          }
        }
        // // tutaj szukasz
        // const found = {
        //   name: 'Imie i nazwisko',
        //   messages: 890,
        //   number: `#${25}`, // miejsce od najwiecej wiadomości
        // }
        // jak nie znaleziono to  ustaw
        // found: {
        //   name: null,
        //     messages: null,
        //     number: null,
        // },
      },
    },
  }
</script>

<style scoped>
  .animate{
    transition: border 0.4s ease;
  }
  .anim {
    animation: slide-in 0.5s forwards;
    animation-delay: 1.5s;
    opacity: 0;
  }
  .anim2{
    animation: slide-in2 0.5s forwards;
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
  @keyframes slide-in2 {
    0% {
      opacity: 0;
      transform: translateX(-40px)
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
</style>
