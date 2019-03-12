import Vue from 'vue'
import VueCookie from 'vue-cookie'
Vue.use(VueCookie);
const state = {
    viewSwitch: Vue.cookie.get('isActive')
 }
 const getters = {    
    viewSwitch(){
        if(state.viewSwitch === null){
            Vue.cookie.set('isActive',true)
        }else
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
       Vue.cookie.set("isActive" , payload)
    }
 }
 export default {
    state,
    getters,
    mutations,
    actions
 };