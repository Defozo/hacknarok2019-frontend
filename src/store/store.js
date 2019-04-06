import Vue from 'vue'
import Vuex from 'vuex'
import {GET_ZIP} from "./getters";
import {SET_ZIP} from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    zip: null
  },
  getters: {
    [GET_ZIP]: function (state) {
      return state.zip
    }
  },
  mutations: {
    [SET_ZIP]: function (state, newZip) {
      state.zip = newZip
    }
  },
  actions: {}
})
