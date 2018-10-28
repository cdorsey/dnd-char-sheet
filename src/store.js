import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: '',
    characterClass: '',
    background: '',
    race: '',
    alignment: '',
    experience: 0,
    level: 1,
  },
  mutations: {
    CHANGE_NAME(state, payload) {
      state.name = payload.name;
    },
    CHANGE_CLASS(state, payload) {
      state.characterClass = payload.characterClass;
    },
    CHANGE_BACKGROUND(state, payload) {
      state.background = payload.background;
    },
    CHANGE_RACE(state, payload) {
      state.race = payload.race;
    },
    CHANGE_ALIGNMENT(state, payload) {
      state.alignment = payload.alignment;
    },
    INCREASE_LEVEL(state) {
      state.characterLevel++;
    },
    UPDATE_EXP(state, payload) {
      state.experience += payload.amount;
    },
  },
  actions: {},
  plugins: [createLogger()],
});