import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import * as types from './types';

Vue.use(Vuex);

// Não usei baseUrl pois existe um problema no axios que impede sua predefinição
// nos interceptadores. link: https://github.com/mzabriskie/axios/issues/949
axios.defaults.baseURL = 'https://private-979ab-testefrontend.apiary-mock.com/';
axios.interceptors.response.use(
  ({ data }) => data,
  error => Promise.reject(error)
);

export default new Vuex.Store({
  state: {
    params: {
      origin: null,
      destiny: null,
      minutes: null,
    },
    plans: [],
    prices: [],
    details: []
  },
  getters: {
    [types.PLANS]: state => {
      return state.plans;
    },
    [types.PRICES]: state => {
      return state.prices;
    },
    [types.DETAILS]: state => {
      const details = Object.keys(state.details).map(
        detail => ({
          value: detail,
          label: state.details[detail]
        })
      );
      return details;
    },
    [types.CALC_PARAMS]: state => {
      return state.params;
    },
    [types.CALC_RESULTS]: state => {
      const { origin, destiny, minutes } = state.params;

      const normal = state.prices.find(price => {
        const isEquals = (price.origin === origin && price.destiny === destiny);
        return isEquals;
      });

      const isInvalid = (!origin || !destiny || !minutes || !normal);

      const results = [
        ...state.plans.map(plan => {
          if (isInvalid)
            return {
              plan: plan.plan_name,
              price: null
            };

          const time = minutes - plan.time;
          return {
            plan: plan.plan_name,
            price: (time > 0 ? time : 0) * normal.price * 1.1
          };
        }),
        {
          plan: 'Normal',
          price: isInvalid ? null : minutes * normal.price
        }
      ];

      return results;
    }
  },
  mutations: {
    [types.PLANS]: (state, payload) => {
      state.plans = payload;
    },
    [types.PRICES]: (state, payload) => {
      state.prices = payload;
    },
    [types.DETAILS]: (state, payload) => {
      state.details = payload;
    },
    [types.CALC_PARAMS]: (state, payload) => {
      state.params = payload;
    }
  },
  actions: {
    [types.FETCH]: async ({ dispatch }) => {
      await Promise.all([
        dispatch(types.PLANS_FETCH),
        dispatch(types.PRICES_FETCH),
        dispatch(types.DETAILS_FETCH)
      ]);
    },
    [types.PLANS_FETCH]: async ({ commit }) => {
      const { data: plans } = await axios.get('ddd/plans');
      commit(types.PLANS, plans);
    },
    [types.PRICES_FETCH]: async ({ commit }) => {
      const { data: prices } = await axios.get('ddd/prices');
      commit(types.PRICES, prices);
    },
    [types.DETAILS_FETCH]: async ({ commit }) => {
      const { data: details } = await axios.get('ddd/details');
      commit(types.DETAILS, details);
    }
  }
});
