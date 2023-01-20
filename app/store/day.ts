import Vue from 'nativescript-vue';
import { Activity } from 'types/activity';
import Vuex from 'vuex';

Vue.use(Vuex);

const day = new Vuex.Store({
    state: {
        date: '',
        activities: Array<Activity>()
    },
    mutations: {}
});

export default day;
