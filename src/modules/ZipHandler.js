'use strict'

import _ from 'lodash'
import JSZip from 'jszip'

import EncodingFixer from '@/modules/EncodingFixer'
import { SET_STATUS, SET_TOTAL_CONVERSATION } from '@/store/mutations'

export default class ZipHandler {
  constructor(store) {
    this.files = []
    this.store = store
  }

  async processFile(zipFile) {
    this._status('Processing .zip file...')

    const jszip = new JSZip()
    const loaded = await jszip.loadAsync(zipFile)

    this.files = loaded.files

    return true
  }

  async getFriends() {
    this._verifyReadiness()

    this._status('Getting friends information...')

    const friendsFileName = 'friends/friends.json'

    if (!(friendsFileName in this.files)) {
      throw `There is no ${friendsFileName} file in given zip file. Have you exported it correctly?`
    }

    const file = this.files[friendsFileName]
    const data = await file.async('binarystring')

    this._status('Fixing encoding in friends information...')

    return JSON.parse(data).friends.map(this._formatFriend)
  }

  async getAllMessages(owner) {
    this._verifyReadiness()

    this._status('Fetching all conversations...')

    const regex = new RegExp('^messages/inbox/.+/message_1.json$')
    const messagesFileNames = _.keys(this.files).filter(fileName => regex.test(fileName))
    const result = []
    const totalMessages = messagesFileNames.length

    this.store.commit(SET_TOTAL_CONVERSATION, totalMessages);

    let i = 0

    for (const fileName of messagesFileNames) {
      if (i % 20 === 0) {
        this._status(`Fetched conversations ${i} out of ${totalMessages}.`)
      }

      const fileContents = await this.files[fileName].async('binarystring')
      const { participants, messages, title } = JSON.parse(fileContents)

      if (participants.length != 2) {
        continue
      }

      const maybeParticipant = participants.filter(({ name }) => EncodingFixer.fixText(name) !== owner)
      console.log('<owner>', owner);
      console.log('<maybe>', maybeParticipant);
      console.log('<parti>', participants);
      if (maybeParticipant.length !== 1) {
        // throw `An error occurred parsing conversation with ${title}`
        continue
      }

      const participant = maybeParticipant[0].name

      result.push({
        name: EncodingFixer.fixText(participant),
        messages: messages.map(this._formatMessage),
      })

      i += 1
    }

    return result
  }

  async getOwner() {
    this._verifyReadiness()

    this._status('Getting owner information...')

    const profileInformationFileName = 'profile_information/profile_information.json'

    if (!(profileInformationFileName in this.files)) {
      throw `There is no ${profileInformationFileName} file in given zip file. Have you exported it correctly?`
    }

    const file = this.files[profileInformationFileName]
    const data = await file.async('binarystring')

    this._status('Parsing owner information...')

    const { profile: { name: { full_name: fullName } } } = JSON.parse(data)

    this._status('Fixing encoding in owner information...')

    return EncodingFixer.fixText(fullName)
  }

  _status(status) {
    this.store.commit(SET_STATUS, status)
  }

  _formatMessage({ sender_name: sender, content, timestamp_ms }) {
    return {
      sender: EncodingFixer.fixText(sender),
      content: EncodingFixer.fixText(content),
      date: timestamp_ms,
    }
  }

  _formatFriend({ name, timestamp }) {
    return {
      name: EncodingFixer.fixText(name),
      timestamp,
    }
  }

  _verifyReadiness() {
    if (this.files.length === 0) {
      throw 'There was no zip processed. Make sure to run processFile(file) before you run any other functions.'
    }
  }
}
