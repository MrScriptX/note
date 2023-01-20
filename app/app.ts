import Vue from 'nativescript-vue'
import Home from './components/Home.vue'
import Vuex from 'vuex'

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

Vue.use(Vuex)

import routine from '~/store/day';

new Vue({
  render: (h) => h('frame', [h(Home)]),
  store: routine
}).$start()
