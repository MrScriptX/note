import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import { Activity } from 'types/activity';

const activity = new Vuex.Store({
    state: {
        group: '',
        name: ''
    },
    mutations: {}
});

export default activity;
