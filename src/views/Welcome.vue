<template>
  <div class="welcome">
    this is welcome
    <div class="container">
      <label>File
        <input
          type="file"
          id="file"
          ref="file"
          @change="handleFileUpload()"
        />
      </label>

      <img src="https://nolanlawson.github.io/database-comparison/kirby.gif" alt="Kirby">
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  import { SET_ZIP } from "@/store/mutations";
  import ZipHandler from '@/modules/ZipHandler'

  export default {
    name: "Welcome",
    data() {
      return {
      file: null
      }
    },
    methods: {
      ...mapMutations([SET_ZIP]),
      async handleFileUpload() {
        const file = this.$refs.file.files[0]
        const zipHandler = new ZipHandler()
        const wasSuccessful = await zipHandler.processFile(file)

        if (! wasSuccessful) {
          console.log('Shit happened.') // @todo handle error
          return
        }

        const friends = await zipHandler.getFriends()

        console.log(friends)
      }
    }
  }
</script>
