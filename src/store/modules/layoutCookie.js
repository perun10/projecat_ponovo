import Vue from 'vue'
import VueCookie from 'vue-cookie'
Vue.use(VueCookie);
var cookieTemp = Vue.cookie.get('contentView') === null ? Vue.cookie.set('contentView','list'): Vue.cookie.get('contentView');
const state = {
    viewSwitch: cookieTemp
 }
 const getters = {    
    viewSwitch(state){       
        return state.viewSwitch         
    }
 }
 const mutations = {
    setViewSwitch(state, payload) {
        state.viewSwitch = payload
      }
 }
 const actions = {     
    switchView({commit},payload){           
        commit('setViewSwitch', payload)
       Vue.cookie.set("contentView" , payload,999)
    }
 }
 export default {
    state,
    getters,
    mutations,
    actions
 };