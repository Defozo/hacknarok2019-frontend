import Vue from 'vue'
import Vuex from 'vuex'

import { SET_STATUS, SET_OWNER, SET_FRIENDS, SET_MESSAGES } from '@/store/mutations'
import { GET_STATUS, GET_OWNER, GET_FRIENDS, GET_MESSAGES } from '@/store/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    owner: '',
    friends: [],
    messages: [],
    status: '',
  },
  getters: {
    [GET_OWNER](state) {
      return state.owner
    },
    [GET_FRIENDS](state) {
      return state.friends
    },
    [GET_MESSAGES](state) {
      return state.messages
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
    [SET_MESSAGES](state, messages) {
      state.messages = messages
    },
    [SET_STATUS](state, status) {
      state.status = status
    },
  },
  actions: {},
})
