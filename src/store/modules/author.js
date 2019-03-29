import firebase from "firebase"
let objAuthor = ""
let liked = []
const state = {
authors:"",
author:"",
emails:[]
}
const getters = {
getEmails(state){
    return state.emails
},
getAuthor(state){
    return state.authors
},
singleAuthor(state){
    return state.author
}
}
const mutations = {
SET_AUTHOR(state,payload){
    state.authors = payload
},
SET_SINGLE_AUTHOR(state,payload){
    state.author = payload
},
SET_EMAILS(state,payload){
    state.emails = payload
}
}
const actions = {
takeAllAuthors({commit}){
    let authorArr = []
    let emails = []
    firebase.firestore().collection('Author').onSnapshot(snapshot=>{
        snapshot.docs.forEach(doc=>{
            authorArr.push(doc.data())
            // console.log(doc.data().name + "WWW")
            // console.log(doc.data().email)
           emails.push(doc.data().email)
        })
        commit('SET_EMAILS',emails)
        commit('SET_AUTHOR',authorArr)
    })
},
takeAuthor({commit},payload){
    let author = {}
    // console.log('EMAIL' , payload)
    firebase.firestore().collection('Author').where('email','==',payload).onSnapshot(snapshot=>{
        snapshot.docs.forEach(doc=>{
            objAuthor = doc
            author = doc.data()           
            // console.log(objAuthor)
            // console.log(doc.data().liked)
            // console.log(doc.data().name)
        })
        commit('SET_SINGLE_AUTHOR',author)
       
    })
}
,
addingAuthor({commit},payload){
    commit('SET_SINGLE_AUTHOR',payload)
    const likedarr = []
    const newAuthor= {
        name:payload.name,
        email:payload.email,
        avatarImg:'http://www.inyogo.com/img/avatar/generic-avatar.png',
        about:payload.description,
        liked:likedarr
    }
    firebase.firestore().collection('Author').add(newAuthor)    
},
liked({commit},payload){
    
    console.log(objAuthor)
    liked.push(payload)
    commit('SET_SINGLE_AUTHOR',objAuthor)
    firebase.firestore().collection('Author').doc(objAuthor.id).update({liked:liked})
}
}
export default {
    state,
    getters,
    mutations,
    actions
};