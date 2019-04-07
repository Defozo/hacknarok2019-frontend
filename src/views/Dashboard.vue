<template>
  <div class="dashboard">
    <div class="flex justify-between">
      <profile></profile>
      <most-messaged></most-messaged>
    </div>
    <messages-with-choosen></messages-with-choosen>
    <words-used-widget></words-used-widget>
  </div>
</template>

<script>
  import MostMessaged from '../widgets/MostMessaged'
  import WordsUsedWidget from '../widgets/WordsUsedWidget'
  import MessagesWithChoosen from '../widgets/MessagesWithChoosen'
  import Profile from "../widgets/Profile";

  export default {
    name: 'Dashboard',
    components: {
      Profile,
      MessagesWithChoosen,
      WordsUsedWidget,
      MostMessaged,
    },
  }
</script>
