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
        <p class="text-grey-dark font-semibold self-start">{{found.lastMessageDate.toLocaleDateString() ||
          'N/A'}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MessagesWithChoosen',
    data() {
      return {
        searchedPhrase: '',
        found: null,
      }
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
        // sentiment min 0 max 90 scale it properly
        // tutaj szukasz
        const found = {
          name: 'Imie i nazwisko',
          messages: 890,
          number: `#${25}`, // miejsce od najwiecej wiadomości
          sentiment: 90,
          lastMessageDate: new Date(1539452456572)
        }
        // jak nie znaleziono to  ustaw
        // found: {
        //   name: null,
        //     messages: null,
        //     number: null,
        //     sentiment: 0,
        //     lastMessageDate: null,
        // },
        this.found = found
      },
      formatDate(date){


        let delta = Math.round((new Date - date) / 1000);

        const minute = 60,
          hour = minute * 60,
          day = hour * 24,
          week = day * 7;

        let fuzzy;

        if (delta < 30) {
          fuzzy = 'just now.';
        } else if (delta < minute) {
          fuzzy = delta + ' seconds ago.';
        } else if (delta < 2 * minute) {
          fuzzy = 'a minute ago.'
        } else if (delta < hour) {
          fuzzy = Math.floor(delta / minute) + ' minutes ago.';
        } else if (Math.floor(delta / hour) == 1) {
          fuzzy = '1 hour ago.'
        } else if (delta < day) {
          fuzzy = Math.floor(delta / hour) + ' hours ago.';
        } else if (delta < day * 2) {
          fuzzy = 'yesterday';
        }
        return fuzzy
      }
    },
  }
</script>

<style scoped>
  .sentiment {
    background: linear-gradient(90deg, rgb(219, 0, 0) 0%, rgb(219, 69, 0) 25%, rgb(234, 222, 0) 50%, rgb(0, 214, 21) 75%, rgb(14, 224, 0) 100%);
  }

  .animate {
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
