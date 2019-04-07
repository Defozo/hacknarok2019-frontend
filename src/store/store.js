import Vue from 'vue'
import Vuex from 'vuex'

import { SET_STATUS, SET_OWNER, SET_FRIENDS, SET_TOP_WORDS, SET_TOP_EMOJIS } from '@/store/mutations'
import { GET_STATUS, GET_OWNER, GET_FRIENDS, GET_TOP_WORDS, GET_TOP_EMOJIS } from '@/store/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    owner: '',
    friends: [],
    topWords: [],
    topEmojis: [],
    status: '',
  },
  getters: {
    [GET_OWNER](state) {
      return state.owner
    },
    [GET_FRIENDS](state) {
      return state.friends
    },
    [GET_TOP_WORDS](state) {
      return state.topWords
    },
    [GET_TOP_EMOJIS](state) {
      return state.topEmojis
    },
    [GET_STATUS](state) {
      return state.status
    },
  },
  mutations: {
    [SET_OWNER](state, owner) {
      state.owner = owner
    },
    [SET_FRIENDS](state, friends) {
      state.friends = friends
    },
    [SET_TOP_WORDS](state, topWords) {
      state.topWords = topWords
    },
    [SET_TOP_EMOJIS](state, topEmojis) {
      state.topEmojis = topEmojis
    },
    [SET_STATUS](state, status) {
      state.status = status
    },
  },
  actions: {},
})
