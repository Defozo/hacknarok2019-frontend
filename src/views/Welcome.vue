<template>
  <div class="welcome flex flex-col min-h-screen">
    <div class="mt-32">
      <h1 class="text-purple-dark m-8 text-5xl">
        Get your stats now
      </h1>
      <label
        v-if="!zip"
        class="p-4 m-4 shadow-lg text-white rounded bg-purple-dark white inline-block cursor-pointer"
      >
        Choose zip
        <input
          type="file"
          accept=".zip"
          id="zip"
          ref="zip"
          class="hidden"
          @change="handleFileUpload()"
        />
      </label>
      <div class="lds-ring m-4" v-else>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
  import ZipHandler from '@/modules/ZipHandler'

  export default {
    name: "Welcome",
    data() {
      return {
        zip: null,
      }
    },
    methods: {
      ...mapMutations([SET_ZIP]),
      async handleFileUpload() {
        this.zip = this.$refs.zip.files[0]

        const zipHandler = new ZipHandler()
        const wasSuccessful = await zipHandler.processFile(this.zip)

        if (! wasSuccessful) {
          console.log('Shit happened.') // @todo handle error
          return
        }

        const friends = await zipHandler.getFriends()

        console.log(friends)

        // this.$router.push('/dashboard') // @todo
      }
    }
  }
</script>

<style scoped>
  #zip {
    overflow: hidden;
  }

  input[type="file"] {
    display: none;
  }

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }

  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid #794acf;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #794acf transparent transparent transparent;
  }

  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }

  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }

  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
