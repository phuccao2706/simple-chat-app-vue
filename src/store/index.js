import Vue from "vue";
import Vuex from "vuex";
import { COMMIT_KEYS } from "../appConstants";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentSong: {},
    isLoggedIn: false,
  },
  mutations: {
    [COMMIT_KEYS.SET_CURRENT_SONG](state, song) {
      state.currentSong = song;
    },
    [COMMIT_KEYS.LOGIN](state) {
      state.isLoggedIn = true;
    },
    [COMMIT_KEYS.LOGOUT](state) {
      state.isLoggedIn = false;
    },
  },
  getters: {
    getIsLoggedIn: (state) => state.isLoggedIn,
  },
});

export default store;
