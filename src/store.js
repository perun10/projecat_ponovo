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
    logo: null,
    color: null,
    lat: null,
    lon: null,
  },
  mutations: {
    setLatitude(state, payload) {
      state.lat = payload
    },
    setLongitude(state, payload) {
      state.lon = payload
    },
    setAuthId(state, id) {
      state.authId = id
    },
    setItem(state, { item, id, resource }) {
      item['.key'] = id
      Vue.set(state[resource], id, item)
    },
    setUser(state, payload) {
      state.user = payload
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload
    },
    clearError(state) {
      state.error = null
    },
    setTokenId(state, payload) {
      // console.log(payload);
      state.tokenId = payload;
    },
    setLogo(state, payload) {
      state.logo = payload
    },
    setColor(state, payload) {
      state.color = payload
    }


  },
  actions: {
    clearError({ commit }) {
      commit('clearError')
    },
    setError({ commit }, payload) {
      commit('setError', payload)
    },
    createUser({ commit }, payload) {
      commit("setLoading", true)
      commit("clearError")
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          Vue.swal(" Account created for " + payload.email);
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
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
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
            commit('setLoading', false)
            commit('setError', error)
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
        commit('setUser', null)
      })

    },
    send(payload) {
      console.log(payload)
      //https://localhost:44377/swagger/ui/index.html#/EmailService/Send
      axios.post('api/EmailService/Send',
      payload,
        // payload.name, payload.mail, payload.subject, payload.message, 
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
            'Content-Type': 'application/json-patch+json',
            'Accept': 'application/json'
          }
        })
        .then(function (response) {
          console.log(response)
        })

    },
    getLogo({ commit }, payload) {
      firebase.database().ref('/logo/-LZFL7s0ALMOUh8jiE9k').once("value")
        .then((snapshot) => {
          var child_changed = snapshot.val();
          //console.log(child_changed.img)
          //  console.log(this.logo)
          payload = child_changed.img
          //  console.log(payload + "LOOOOOGO")
          commit('setLogo', payload)
        })
    },
    getColor({ commit }, payload) {   
      
      // firebase
      //   .database()
      //   .ref("/themes/")
      //   .set({
      //     color: payload,
      //     backgroundColor: payload
      //   });
      
      firebase.firestore().collection("themes").doc("LIoaPVCBvEX1xOvMscWb").update({color : payload
        }        
        )
        commit('setColor',payload)
      
    },
    mapPost({ commit }, payload) {

      console.log("Dokument postoji")
      commit('setLatitude', payload.lat)
      commit('setLongitude', payload.lon)
      //  var doc = firebase.firestore().collection('map').doc('sP2d4xnFzZRuyfps2pSO')
      //  doc.get()




      console.log("IZ STORA - " + payload.lat + " " + payload.lon)
    }
  },
  getters: {
    loading(state) {
      return state.loading
    },
    error(state) {
      return state.error
    },
    token(state) {
      return state.tokenId
    },
    user(state) {
      return state.user
    },
    logo(state) {
      return state.logo
    },
    color(state) {
      return state.color
    },
    latitude(state) {
      return state.lat
    },
    longitude(state) {
      return state.lon
    }
  }

});
