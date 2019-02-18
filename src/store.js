import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";
Vue.use(Vuex);
import VueSweetalert2 from 'vue-sweetalert2';
 
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
    tokenId: null
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
      console.log(payload);
      state.tokenId = payload;
    }
  },
  actions: {
    clearError ({commit}) {
      commit('clearError')
    },
    setError ({commit}, payload) {
      commit('setError', payload)
    },
    
    // createUser({state,commit}, {id,email,name,username}){
    //   return new Promise((resolve) =>{
    //     const registeredAt = Math.floor(Date.now()/1000)
    //     const usernameLower = username.toLowerCase()
    //     email = email.toLowerCase()
    //     const user = {email,name,username,usernameLower,registeredAt}
    //     firebase.database().ref('users').child(id).set(user)
    //     .then(() => {
    //       commit('setItem',{resource:'users',id:id, item:user})//'setItem', 
    //       resolve(state.users[id])
    //     })
    //   })
    // },
    createUser ({commit}, payload) {
      commit("setLoading", true)
      commit("clearError")
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          Vue.swal(" Account created for "+ payload.email);
          
        },err=>{
          Vue.swal(err.message);
        })
          // user => {
          //   commit("setLoading", false)
          //   const newUser = {
          //     id: user.id,
          //     name: user.name,
          //     email: user.email,
          //     username: user.username,
          //     registeredAt : Math.floor(Date.now()/1000),
          //     usernameLower : this.username.toLowerCase()
          //   }
           
            // firebase.database().ref('users').child(id).set(newUser)
            // .then(()=>{
            //   commit({resource:"users",id:id,item:newUser});
            
            // })
           
        //   }
        // )
        // .catch(
        //   error => {
        //     commit('setLoading', false)
        //     commit('setError', error)
        //     console.log(error)
        //   }
        // )
    }
    ,
    registerUserWithEmailAndPassword(dispatch, {email,password}){
      
        firebase.auth().createUserWithEmailAndPassword(email ,password)
      
        // .then(() =>{
        //   return dispatch('createUser',{email,name,username,})
        // })
     
      },
      signInUser({commit},{email,password}){
      
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(
            firebase.auth().currentUser.getIdToken()
            .then((data) => { 
              this.tokenId = data
              console.log(this.tokenId)
            
              commit("setTokenId",this.tokenId)
              // return this.tokenId
            })
           
            
          )
          
       
      },
      logout(){
        firebase.auth().signOut().then(() => {
          this.$router.push('/work');
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
      }
    }
});
