import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: 'kkk eae men'
  },
  getters: {
    [types.MESSAGE]: state => {
      return state.message;
    }
  }
});
