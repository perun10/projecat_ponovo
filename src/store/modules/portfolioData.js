require('firebase/firestore')
import firebase from "firebase"
let lastVisible = 0;
let temporaryDocSize = 0;
let portArr = [];
let catFilterPay = 0;
const state = {
  portfolios: [],
  size: 0,
  disabledCategory:"All"
}
const getters = {
  portfolios(state) {
    return state.portfolios
  },
  size(state) {
    return state.size
  },
  disabled(state){
    return state.disabledCategory
  }
}
const mutations = {
  ADD_PORTFOLIO(state, portfolio) {
    state.portfolios = portfolio
  },
  SET_SIZE(state, payload) {
    state.size = payload
  },
  SET_DISABLED(state,payload){
    state.disabledCategory = payload
  }
}
const actions = {
  fetchAllData({ commit }) {
    portArr.length = 0
    firebase.firestore().collection('portfolio').onSnapshot(snapshot => {
      temporaryDocSize = snapshot.docs.length
      
      commit('SET_SIZE', temporaryDocSize)
           
      
    })
  },
  fetchData({ commit }) {
    portArr.length = 0
    firebase.firestore().collection('portfolio').limit(3).onSnapshot(snapshot => {
      lastVisible = snapshot.docs[snapshot.docs.length - 1];    
      snapshot.docs.forEach(doc => {
        portArr.push(doc.data())       
        console.log(temporaryDocSize," - ",doc.data().name)
        commit('SET_SIZE', temporaryDocSize)
        temporaryDocSize--       
      });
    });
    commit('ADD_PORTFOLIO', portArr)
  },

  loadMore({ commit }) {
    firebase.firestore().collection('portfolio')
      .startAfter(lastVisible)
      .limit(3)
      .onSnapshot(snapshot => {
        lastVisible = snapshot.docs[snapshot.docs.length - 1]
        snapshot.docs.forEach(doc => {
          portArr.push(doc.data())
          console.log(temporaryDocSize," - ",doc.data().name )
          temporaryDocSize--
          commit('SET_SIZE', temporaryDocSize)
          commit('ADD_PORTFOLIO', portArr)        
        });
      });
  },
  categoryFilter({ commit, dispatch }, payload) {

    catFilterPay = payload
   
    portArr.length = 0;
    if (payload) {    
      if (payload.toUpperCase() == "ALL") {
       
        dispatch('fetchAllData')
        dispatch('fetchData')
        commit('SET_DISABLED',payload)
      }else{
      const query = firebase.firestore().collection("portfolio").where("category", "==", payload)
      query.onSnapshot(snapshot =>{
        temporaryDocSize = snapshot.docs.length            
        commit('SET_SIZE',temporaryDocSize)
      })
      query
        .limit(1)
        .onSnapshot(snapshot => {
          lastVisible = snapshot.docs[snapshot.docs.length - 1]          
          snapshot.docs.forEach(doc => {
            temporaryDocSize--
            portArr.push(doc.data())
            commit('SET_SIZE', temporaryDocSize)
            commit('SET_DISABLED',payload)
          });
        });
      commit("ADD_PORTFOLIO", portArr)     
    }
  }
  },
  loadMoreCategory({commit}){   
    
    firebase.firestore().collection('portfolio')
      .startAfter(lastVisible)
      .where("category","==",catFilterPay)
      .limit(1)
      .onSnapshot(snapshot => {
        lastVisible = snapshot.docs[snapshot.docs.length - 1]
        snapshot.docs.forEach(doc => {
          portArr.push(doc.data())
          temporaryDocSize--
          commit('SET_SIZE', temporaryDocSize)
          commit('ADD_PORTFOLIO', portArr)        
        });
      });
  }
}
export default {
  state,
  getters,
  mutations,
  actions
};
