import Vue from 'vue'
import Vuex from 'vuex'

import { SET_STATUS, SET_OWNER, SET_FRIENDS, SET_TOP_WORDS, SET_TOTAL_WORDS, SET_TOTAL_MESSAGES, SET_TOP_EMOJIS, SET_TOP_PARTICIPANTS, SET_PARTICIPANTS, SET_TIMING } from '@/store/mutations'
import { GET_STATUS, GET_OWNER, GET_FRIENDS, GET_TOP_WORDS, GET_TOTAL_WORDS, GET_TOTAL_MESSAGES, GET_TOP_EMOJIS, GET_TOP_PARTICIPANTS, GET_PARTICIPANTS, GET_TIMING } from '@/store/getters'
import {SET_TOTAL_CONVERSATION} from "./mutations";
import {GET_TOTAL_CONVERSATION} from "./getters";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    owner: '',
    friends: [],
    timing: [],
    totalWords: '',
    totalMessages: '',
    totalConversation: '',
    topWords: [],
    topEmojis: [],
    topParticipants: [],
    participants: [],
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
    [GET_TIMING](state) {
      return state.timing
    },
    [GET_TOTAL_WORDS](state) {
      return state.totalWords
    },
    [GET_TOTAL_MESSAGES](state) {
      return state.totalMessages
    },
    [GET_TOTAL_CONVERSATION](state) {
      return state.totalConversation
    },
    [GET_TOP_EMOJIS](state) {
      return state.topEmojis
    },
    [GET_TOP_PARTICIPANTS](state) {
      return state.topParticipants
    },
    [GET_PARTICIPANTS](state) {
      return state.participants
    },
    [GET_STATUS](state) {
      return state.status
    },
  },
  mutations: {
    [SET_OWNER](state, owner) {
      state.owner = owner
    },
    [SET_TIMING](state, timing) {
      state.timing = timing
    },
    [SET_FRIENDS](state, friends) {
      state.friends = friends
    },
    [SET_TOP_WORDS](state, topWords) {
      state.topWords = topWords
    },
    [SET_TOTAL_WORDS](state, totalWords) {
      state.totalWords = totalWords
    },
    [SET_TOTAL_MESSAGES](state, totalMessages) {
      state.totalMessages = totalMessages
    },
    [SET_TOTAL_CONVERSATION](state, totalConversation) {
      state.totalConversation = totalConversation
    },
    [SET_TOP_EMOJIS](state, topEmojis) {
      state.topEmojis = topEmojis
    },
    [SET_TOP_PARTICIPANTS](state, topParticipants) {
      state.topParticipants = topParticipants
    },
    [SET_PARTICIPANTS](state, participants) {
      state.participants = participants
    },
    [SET_STATUS](state, status) {
      state.status = status
    },
  },
  actions: {},
})
