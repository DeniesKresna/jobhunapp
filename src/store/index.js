import Vue from 'vue';
import Vuex from 'vuex';
import {state} from './state';
import {actions} from './actions';
import {mutations} from './mutations';
import {getters} from './getters'; 

import jaclass from './modules/jaclass'
/*
import donatur from './modules/donatur'
import clients from './modules/clients'*/

Vue.use(Vuex);
export default new Vuex.Store({
  	state,
  	mutations,
  	actions,
  	getters,
    modules: {
    	jaclass
    	/*
        donatur,
        clients,*/
    }
});