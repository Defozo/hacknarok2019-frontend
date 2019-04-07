<template>
  <div>
    <img id="blob1" src="../assets/Blob.svg">
    <img id="blob2" src="../assets/tache-dencre.png">
    <img id="blob3" src="../assets/tache-dencre.png">

    <div class="dashboard">
      <div class="flex justify-between">
        <profile></profile>
        <most-messaged></most-messaged>
      </div>
      <messages-with-choosen></messages-with-choosen>
      <words-used-widget></words-used-widget>
    </div>
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

<style scoped>
  #blob1 {
    position: absolute;
    top: -475px;
    right: -299px;
    max-height: 1080px;
    max-width: 800px;
    z-index: -3;
  }
  #blob2 {
    position: absolute;
    transform: rotate(60deg);
    top: 100px;
    left: -160px;
    max-height: 800px;
    max-width: 700px;
    z-index: -3;
  }
  #blob3 {
    position: absolute;
    -webkit-transform: rotate(260deg);
    transform: rotate(260deg);
    top: -190px;
    left: 100px;
    max-height: 800px;
    max-width: 700px;
    z-index: -3;
  }

</style>

