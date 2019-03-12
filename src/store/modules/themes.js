import firebase from "firebase"
const state = {
    color: null,
    logo: null
}
const getters = {
    color(state) {
        return state.color
    },
    logo(state) {
        return state.logo
    }
}
const mutations = {
    setColor(state, payload) {
        state.color = payload
    },
    setLogo(state, payload) {
        state.logo = payload
    }
}
const actions = {
    getColor({ commit }, payload) {

        firebase.firestore().collection("themes").doc("LIoaPVCBvEX1xOvMscWb").update({
            color: payload
        }
        )
        commit('setColor', payload)
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
    }
}
export default {
    state,
    getters,
    mutations,
    actions
};