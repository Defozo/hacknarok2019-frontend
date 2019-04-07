<template>
  <div
    class=" p-8 mx-8 mb-2 mt-4 bg-white rounded-lg flex flex-col anim">
    <div class="flex">
      <div
        class="photo rounded-full h-24 w-24 bg-purple flex items-center text-5xl text-white font-extrabold justify-center">
        {{getNameLetter()}}
      </div>
      <div class="flex flex-col ml-8 mr-8 text-left flex-1">
        <div class="text-purple-dark text-3xl font-semibold">{{profile.name}}
        </div>
        <div class=""></div>
      </div>
    </div>
    <div
      class="px-4 py-2 mt-6 border-b text-grey font-semibold border-grey-lighter flex justify-between">
      <p>Total conversations:</p>
      <p class="text-purple-dark">{{this.getTotalConversation}}</p>
    </div>
    <div
      class="px-4 py-2 border-b text-grey font-semibold border-grey-lighter flex justify-between">
      <p>Total messages:</p>
      <p class="text-purple-dark">{{this.getTotalMessages}}</p>
    </div>
    <div
      class="px-4 py-2 border-b text-grey font-semibold border-grey-lighter flex justify-between">
      <p>Total words:</p>
      <p class="text-purple-dark">{{this.getTotalWords}}</p>
    </div>
    <div
      class="px-4 py-2 border-b text-grey font-semibold border-grey-lighter flex justify-between">
      <p>Account created:</p>
      <p class="text-purple-dark">{{this.getTiming}} </p>
    </div>
  </div>
</template>

<script>
  import {
    GET_TOTAL_WORDS,
    GET_TOTAL_MESSAGES,
    GET_TOTAL_CONVERSATION,
    GET_TIMING
  } from '../store/getters'
  import {mapGetters} from 'vuex'

  export default {
    name: "Profile",
    data() {
      return {
        profile: {
          name: 'Grzegorz Tłuszcz',
          conversations: 12343,
          messages: 44552,
          totalWords: 99912,
          years: 4
        },
      }
    },
    computed: {
      ...mapGetters([GET_TOTAL_WORDS, GET_TOTAL_MESSAGES, GET_TOTAL_CONVERSATION, GET_TIMING]),
    },
    methods: {
      getNameLetter() {
        return this.profile.name[0]
      },
    },
  }
</script>

<style scoped>

  .anim {
    animation: slide-in 0.5s forwards;
    opacity: 0;
  }

  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateX(-20px)
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
</style>
