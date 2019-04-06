<template>
  <div class="dashboard">
    <div class="flex">
      <div class="w-3/5 h-64"></div>
      <most-messaged></most-messaged>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  import MostMessaged from '../widgets/MostMessaged'

  export default {
    name: 'Dashboard',
    components: { MostMessaged },
  }
</script>
