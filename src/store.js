import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {

    createUser({state,commit}, {email,name,username}){
      return new Promise((resolve) =>{
        const registeredAt = Math.floor(Date.now()/1000)
        const usernameLower = username.toLowerCase()
        email = email.toLowerCase()
        const user = {email,name,username,usernameLower,registeredAt}
        const userId = firebase.database().ref('users').push().key
        firebase.database().ref('users').child(userId).set(user)
        .then(() => {
          commit({resource:'users',id:userId, item:user})//'setItem', 
          resolve(state.users[userId])
        })
      })
    }

  }
});
