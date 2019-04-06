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
    [GET_ZIP]: function () {
        return this.state.zip
    }
  },
  mutations: {
    [SET_ZIP]: function (newZip) {
        this.state.zip = newZip
    }
  },
  actions: {}
})
