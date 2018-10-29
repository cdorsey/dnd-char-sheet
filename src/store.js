import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const syncToLocalStorage = function (store) {
  store.subscribe((mutation, state) => {
    if (localStorage === undefined) {
      return;
    }

    localStorage.setItem('store', JSON.stringify(state));
  });
};

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
    INITIALIZE_STATE(state) {
      const storedState = localStorage && JSON.parse(localStorage.getItem('store'));

      if (storedState) {
        this.replaceState(Object.assign(state, storedState));
      }
    },
    SET_THEME(state, payload) {
      state.appTheme = payload.appTheme;
    },
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
  plugins: [createLogger(), syncToLocalStorage],
});
