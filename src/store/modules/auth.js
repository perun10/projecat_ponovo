import firebase from "firebase"
import Vue from "vue"
import VueSweetalert2 from 'vue-sweetalert2';
import router from '@/router.js'

Vue.use(VueSweetalert2);
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
}

Vue.use(VueSweetalert2, options)
const state = {
    user: null,
 }
 const getters = {    
    user(state) {
        return state.user
      }
 }
 const mutations = {
    setUser(state, payload) {
        state.user = payload
      }
 }
 const actions = {
    createUser({ commit }, payload) {
<<<<<<< HEAD
       
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
          .then((user) => {
            Vue.swal(" Account created for " + payload.email);
            firebase.auth().currentUser.sendEmailVerification().then(()=>{
              console.log('Email sent')
            })
=======
        commit("setLoading", true)
        commit("clearError")
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
          .then((user) => {
            Vue.swal(" Account created for " + payload.email);
>>>>>>> 1951d06ab0b844194f8c70635eab643cafd5cf2e
            const newUser = {
              id: user.id
            }
            commit('setUser', newUser)
          }, err => {
            commit('setUser', null)
            Vue.swal(err.message)
          })
      },
      signInUser({ commit }, payload) {
<<<<<<< HEAD
       
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
          .then(
            user => {
           
=======
        commit('setLoading', true)
        commit('clearError')
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
          .then(
            user => {
              commit('setLoading', false)
>>>>>>> 1951d06ab0b844194f8c70635eab643cafd5cf2e
              const newUser = {
                id: user.user.uid,
              }
              commit('setUser', newUser)
              Vue.swal("Logged in succesfully " + payload.email)
              router.push('/admin')
  
            }
          )
          .catch(
<<<<<<< HEAD
            error => {              
=======
            error => {
              commit('setLoading', false)
              commit('setError', error)
>>>>>>> 1951d06ab0b844194f8c70635eab643cafd5cf2e
              Vue.swal(error.message)
              router.push('/signup')
            }
          )
      },
      autoSignIn({ commit }, payload) {
        commit('setUser', { id: payload.uid })
      },
      logout({ commit }) {
        firebase.auth().signOut().then(() => {
          router.push('/signup');
<<<<<<< HEAD
          commit('setUser', '')
=======
          commit('setUser', null)
>>>>>>> 1951d06ab0b844194f8c70635eab643cafd5cf2e
        })
  
      }
 }
 export default {
    state,
    getters,
    mutations,
    actions
 };