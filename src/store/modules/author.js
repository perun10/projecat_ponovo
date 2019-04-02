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
    // console.log("USLI")
    // console.log("USLI" + payload)
    let author = {}
    // console.log('EMAIL' , payload)
    firebase.firestore().collection('Author').where('email','==',payload).onSnapshot(snapshot=>{
        snapshot.docs.forEach(doc=>{
            objAuthor = doc
            // console.log(objAuthor)
            author = doc.data()      
            liked = doc.data().liked     
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
    console.log(newAuthor)
    firebase.firestore().collection('Author').add(newAuthor)    
},
liked({commit,dispatch},payload){
    
    commit('SET_SINGLE_AUTHOR',objAuthor)
    liked.push(payload.url)
    firebase.firestore().collection('Author').doc(objAuthor.id).update({liked:liked})

   dispatch('blogs/updateLikes',{id: payload.url ,likes:payload.num})
},
unlike({commit , dispatch},payload){
    commit('SET_SINGLE_AUTHOR',objAuthor)
    console.log(liked)
    // delete liked[liked.indexOf(payload.url)]
    liked.splice(liked.indexOf(payload.url),1)//payload.url je u stvar ID
    console.log(liked)
    console.log(payload.num)
    dispatch('blogs/updateLikes',{id: payload.url ,likes:payload.num})
    firebase.firestore().collection('Author').doc(objAuthor.id).update({liked:liked})


}
}
export default {
    state,
    getters,
    mutations,
    actions
};