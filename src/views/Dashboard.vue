<template>
  <div class="dashboard">
    <div class="flex">
      <div class="w-3/5 h-64"></div>
      <most-messaged></most-messaged>
    </div>
    <words-used-widget></words-used-widget>
  </div>
</template>

<script>
  import MostMessaged from '../widgets/MostMessaged'
  import WordsUsedWidget from '../widgets/WordsUsedWidget'

  export default {
    name: 'Dashboard',
    components: { WordsUsedWidget, MostMessaged },
  }
</script>
