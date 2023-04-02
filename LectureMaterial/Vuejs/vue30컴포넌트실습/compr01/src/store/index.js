import { createStore } from 'vuex';

import counterStore from './modules/counterStore.js';

export default createStore({
  // state: {},
  // getters: {},
  // mutations: {},
  // actions: {},
  modules: {
    // 모듈명 : store명 형태로 저장
    counterStore: counterStore,
  },
});
