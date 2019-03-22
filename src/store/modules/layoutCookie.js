import Vue from 'vue'
import VueCookie from 'vue-cookie'
Vue.use(VueCookie);
<<<<<<< HEAD
var cookieTemp = Vue.cookie.get('contentView') === null ? Vue.cookie.set('contentView','list'): Vue.cookie.get('contentView');
const state = {
    viewSwitch: cookieTemp
 }
 const getters = {    
    viewSwitch(state){       
        return state.viewSwitch         
=======
const state = {
    viewSwitch: Vue.cookie.get('isActive')
 }
 const getters = {    
    viewSwitch(){
        if(state.viewSwitch === null){
            Vue.cookie.set('isActive',false,999)
        }else if(state.viewSwitch.toString().toUpperCase() === 'TRUE'){
           return true
        }else{
           return false
        }        
>>>>>>> 1951d06ab0b844194f8c70635eab643cafd5cf2e
    }
 }
 const mutations = {
    setViewSwitch(state, payload) {
        state.viewSwitch = payload
      }
 }
<<<<<<< HEAD
 const actions = {     
    switchView({commit},payload){           
        commit('setViewSwitch', payload)
       Vue.cookie.set("contentView" , payload,999)
=======
 const actions = {
     
    switchView({commit},payload){           
        commit('setViewSwitch', payload)
       Vue.cookie.set("isActive" , payload,999)
>>>>>>> 1951d06ab0b844194f8c70635eab643cafd5cf2e
    }
 }
 export default {
    state,
    getters,
    mutations,
    actions
 };