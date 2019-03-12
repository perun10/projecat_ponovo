const state = {
    lat: null,
    lon: null,
 }
 const getters = {    
    latitude(state) {
      return state.lat
    },
    longitude(state) {
      return state.lon
    }
 }
 const mutations = {
    setLatitude(state, payload) {
        state.lat = payload
      },
      setLongitude(state, payload) {
        state.lon = payload
      }
 }
 const actions = {
    mapPost({ commit }, payload) {

        console.log("Dokument postoji")
        commit('setLatitude', payload.lat)
        commit('setLongitude', payload.lon)
         
        console.log("IZ STORA - " + payload.lat + " " + payload.lon)
      }
 }
 export default {
    state,
    getters,
    mutations,
    actions
 };