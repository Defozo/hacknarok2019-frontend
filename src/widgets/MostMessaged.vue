<template>
  <div class="most_messaged">
    <h2 class="p-4 text-grey">Most Messaged</h2>
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
            <p class="text-grey-light">messages: </p>
            <p class="text-grey-dark font-semibold">{{friend.messages}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MostMessaged",
    data() {
      return {
        mostMessaged: [
          {
            name: 'Darek Czajkowski',
            messages: 84120
          },
          {
            name: 'Michał Dziedzic',
            messages: 64032
          },
          {
            name: 'Michał Kiełtyka',
            messages: 78021
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .label {
    animation: slide-in 0.5s forwards;
    opacity: 0;
  }
  .label:nth-child(2) { animation-delay: .5s }
  .label:nth-child(3) { animation-delay: 1s }

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