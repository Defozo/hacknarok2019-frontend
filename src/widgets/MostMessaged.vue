<template>
  <div class="most_messaged flex flex-col mr-6">
    <h2 class="p-4 text-grey text-right text-white">Most Messaged</h2>
    <div class="flex flex-col">
      <div
        class="bg-white px-8 py-4 m-2 shadow-lg rounded-lg flex align-start label"
        v-bind:key="friend.name"
        v-for="(friend, index) in mostMessaged">
        <div
          class="left_column self-center text-5xl font-black mr-6 text-purple-dark">
          #{{index+1}}
        </div>
        <div class="right_column flex flex-col align-stretch flex-1">
          <p
            class="mb-2 text-purple-dark font-semibold text-xl self-start whitespace-no-wrap">
            {{friend.name}}</p>
          <div class="flex justify-between">
            <p class="text-grey-dark mr-1">common messages: </p>
            <p class="text-grey-darker font-semibold">{{friend.messages}}</p>
            <p class="text-grey-dark mx-1">since</p>
            <p class="text-grey-darker font-semibold">{{becameFriends(friend.name)}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { GET_TOP_PARTICIPANTS, GET_FRIENDS } from '@/store/getters'
  // import MessagesWithChoosen from './MessagesWithChoosen'

  export default {
    name: 'MostMessaged',
    // components: {
    //   MessagesWithChoosen,
    // },
    computed: {
      ...mapGetters([GET_TOP_PARTICIPANTS, GET_FRIENDS]),
      mostMessaged() {
        return this.getTopParticipants
      },
      becameFriends() {
        return name => new Date(this.getFriends.filter(friend => friend.name === name)[0].timestamp * 1000).getFullYear()
      },
    },
  }
</script>

<style scoped>
  .label {
    animation: slide-in 0.5s forwards;
    opacity: 0;
  }

  .label:nth-child(1) {
    animation-delay: .5s
  }
  .label:nth-child(2) {
    animation-delay: 1.0s
  }

  .label:nth-child(3) {
    animation-delay: 1.5s
  }
  /*.most_messaged{*/
    /*background-image: url("../assets/Blob.svg");*/
  /*}*/

  @keyframes slide-in {
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
