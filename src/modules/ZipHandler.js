'use strict'

import JSZip from 'jszip'

import EncodingFixer from '@/modules/EncodingFixer'

export default class ZipHandler {
  constructor() {
    this.files = []
  }

  async processFile(zipFile) {
    const jszip = new JSZip()
    const loaded = await jszip.loadAsync(zipFile)

    this.files = loaded.files

    return true
  }

  async getFriends() {
    this._verifyReadiness()

    const friendsFileName = 'friends/friends.json'

    if (!(friendsFileName in this.files)) {
      throw `There is no ${friendsFileName} file in given zip file. Have you exported it correctly?`
    }

    const file = this.files[friendsFileName]
    const data = await file.async('binarystring')

    return JSON.parse(data).friends.map(this._formatFriend)
  }

  async getAllMessages() {

  }

  async getOwner() {
    this._verifyReadiness()

    const profileInformationFileName = 'profile_information/profile_information.json'

    if (!(profileInformationFileName in this.files)) {
      throw `There is no ${profileInformationFileName} file in given zip file. Have you exported it correctly?`
    }

    const file = this.files[profileInformationFileName]
    const data = await file.async('binarystring')
    const { profile: { name: { full_name: fullName } } } = JSON.parse(data)

    return EncodingFixer.fixText(fullName)
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
