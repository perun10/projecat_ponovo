import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";
Vue.use(Vuex);
import VueSweetalert2 from 'vue-sweetalert2';
import router from './router.js'
import axios from "axios"
Vue.use(VueSweetalert2);
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
}
 
Vue.use(VueSweetalert2, options)

export default new Vuex.Store({

  state: {  
    loading: false,
    error: null,
    tokenId: null,
    user: null,
  },
  mutations: {
    setAuthId(state,id){
      state.authId = id
    },
    setItem(state,{item,id,resource}){
      item['.key'] = id
      Vue.set(state[resource],id,item)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload;
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    setTokenId(state,payload){
     // console.log(payload);
      state.tokenId = payload;
    },

    
  },
  actions: {
    clearError ({commit}) {
      commit('clearError')
    },
    setError ({commit}, payload) {
      commit('setError', payload)
    },  
    createUser ({commit}, payload) {
      commit("setLoading", true)
      commit("clearError")
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .catch((error)=>{
        Vue.swal(error.message)
        router.push('/signup')
      })
        .then((user) => {
          Vue.swal(" Account created for "+ payload.email);
          const newUser = {
            id : user.id
          }
          commit('setUser',newUser)
        },err=>{
          Vue.swal(err.message);
        })
          },   
          signInUser ({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
              .then(
                user => {
                  commit('setLoading', false)
                  const newUser = {
                    id: user.uid,                  
                  }
                  commit('setUser', newUser)
                  Vue.swal("Logged in succesfully "+payload.email)
                  router.push('/admin')
                  
                }
              )
              .catch(
                error => {
                  commit('setLoading', false)
                  commit('setError', error)
                  Vue.swal(error.message)
                  router.push('/signup')
                }
              )
          },
      autoSignIn({commit},payload){
        commit('setUser',{id:payload.uid})
      },
      logout({commit}){
        firebase.auth().signOut().then(() => {
          router.push('/signup');
           commit('setUser',{id:null})
        })
        
      },
      send(payload){
        //https://localhost:44377/swagger/ui/index.html#/EmailService/Send
        axios.post('api/EmailService/Send',
        payload.name,payload.mail,payload.subject,payload.message,{headers:{
          'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
            'Content-Type': 'application/json-patch+json',
            'Accept': 'application/json'
        }})
        .then(function (response){
          console.log(response)
        })   

      }
    },
    getters: {
      loading (state) {
        return state.loading
      },
      error (state) {
        return state.error
      },
      token(state){
        return state.tokenId
      },
      user (state) {
        return state.user
      }
    }
});
