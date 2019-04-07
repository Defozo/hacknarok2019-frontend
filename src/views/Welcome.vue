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
        >
      </label>
      <div class="lds-ring m-4" v-else>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>{{ getStatus }}</div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { mapGetters, mapMutations } from 'vuex'
  import sentiment from 'sentiment-polish'


  import { SET_FRIENDS, SET_OWNER, SET_TOP_WORDS, SET_TOP_EMOJIS, SET_STATUS, SET_TOP_PARTICIPANTS, SET_PARTICIPANTS } from '@/store/mutations'
  import { GET_STATUS } from '@/store/getters'
  import ZipHandler from '@/modules/ZipHandler'
  import BatchProcessor from '@/modules/BatchProcessor'

  export default {
    name: 'Welcome',
    data() {
      return {
        zip: null,
      }
    },
    computed: mapGetters([GET_STATUS]),
    methods: {
      ...mapMutations([SET_STATUS, SET_FRIENDS, SET_OWNER, SET_TOP_WORDS, SET_TOP_EMOJIS, SET_TOP_PARTICIPANTS, SET_PARTICIPANTS]),
      processTopWords(messages, owner) {
        const processor = new BatchProcessor(messages, owner)
        processor.setup()
        const count = processor.countWords()
        return {
          words: _.take(count.wordArray, 5).map(({ key, value }) => ({ text: key, amount: value })),
          emojis: _.take(count.emojiArray, 5).map(({ key, value }) => ({ text: key, amount: value })),
        }
      },

      calculateSentiment(messages){
        const tokenizedWords = messages.map( message => message.content).join(' ').split(' ');
        const getAverageSentiment = (texts) => {
          let scoreSum = 0
          for (let i = 0; i < texts.length; i++) {
            scoreSum += sentiment(texts[i]).score
          }

          return scoreSum / texts.length
        }
        return getAverageSentiment(tokenizedWords);
      },

      processParticipants(messages) {
        return _.reverse(_.sortBy(messages.map(({ name, messages, date }) => ({
          name,
          messages: messages.length,
          sentiment: this.calculateSentiment(messages),
          date
        })), 'messages'))
      },

      async handleFileUpload() {
        this.zip = this.$refs.zip.files[0]

        const zipHandler = new ZipHandler(this.$store)
        const wasSuccessful = await zipHandler.processFile(this.zip)

        if (!wasSuccessful) {
          console.log('Shit happened.') // @todo handle error
          return
        }

        // this.setFriends(await zipHandler.getFriends())

        const owner = await zipHandler.getOwner()

        this.setOwner(owner)

        const allMessages = await zipHandler.getAllMessages(owner)

        const { words, emojis } = this.processTopWords(allMessages, owner)

        this.setTopWords(words)
        this.setTopEmojis(emojis)

        const participants = this.processParticipants(allMessages)

        this.setParticipants(participants)
        this.setTopParticipants(_.take(participants, 3))

        this.$router.push('/dashboard')
      },
    },
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
