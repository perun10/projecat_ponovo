require('firebase/firestore')
import firebase from "firebase"
let lastVisible = 0 ;
let temp = 0;
const state = {
    portfolios:[],
    size:0
 }
 const getters = {    
   portfolios(state){
        return state.portfolios
   },
   size(state){
       return state.size
   }
 }
 const mutations = {
   ADD_PORTFOLIO(state,portfolio){
       state.portfolios.push(portfolio)
   },
   SET_SIZE(state,payload){
    state.size = payload
   }
 }
 const actions = {
     fetchAllData({commit}){
        firebase.firestore().collection('portfolio').onSnapshot(snapshot => {
            temp = snapshot.docs.length
            console.log(temp)
            commit('SET_SIZE',temp)
            
        })
     },
     
    fetchData({commit}){
      
         firebase.firestore().collection('portfolio').limit(3).onSnapshot(snapshot => {
            lastVisible = snapshot.docs[snapshot.docs.length - 1];
             snapshot.docs.forEach(doc => {      
                 commit('SET_SIZE',temp)    
                 temp--
                 console.log(temp)
                commit('ADD_PORTFOLIO',doc.data())
                

             });
           });
         
    },
    loadMore({commit}){
        firebase.firestore().collection('portfolio')
        .startAfter(lastVisible)
        .limit(3)
        .onSnapshot(snapshot => {           
            lastVisible = snapshot.docs[snapshot.docs.length - 1]                  
             snapshot.docs.forEach(doc => { 
                commit('ADD_PORTFOLIO',doc.data())
               temp--
               commit('SET_SIZE',temp)
               console.log(temp)
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
