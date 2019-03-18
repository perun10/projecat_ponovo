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
       
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
          .then((user) => {
            Vue.swal(" Account created for " + payload.email);
            firebase.auth().currentUser.sendEmailVerification().then(()=>{
              console.log('Email sent')
            })
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
       
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
          .then(
            user => {
           
              const newUser = {
                id: user.user.uid,
              }
              commit('setUser', newUser)
              Vue.swal("Logged in succesfully " + payload.email)
              router.push('/admin')
  
            }
          )
          .catch(
            error => {              
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
          commit('setUser', '')
        })
  
      }
 }
 export default {
    state,
    getters,
    mutations,
    actions
 };