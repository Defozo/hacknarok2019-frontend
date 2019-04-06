import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    owner: '',
    friends: [],
    messages: [],
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
  },
  actions: {},
})
