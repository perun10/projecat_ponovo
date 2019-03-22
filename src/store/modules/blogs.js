import * as firebase from 'firebase'
import 'firebase/firestore';
const state = {
   blogs:[],
   blog:"",
   likes:"",
   url:""
 }
 const getters = {    
    getBlogs(state){
        return state.blogs
    },
    getBlog(state){
        return state.blog
    },
    getLikes(state){
        return state.likes
    },
    getUrl(state){
        return state.url
    }
 }
 const mutations = {
    SET_BLOGS(state,payload){
        state.blogs = payload
    },
    SET_BLOG(state,payload){
        state.blog = payload
    },
    SET_LIKE(state,payload){
        state.likes = payload
    },
    SET_URL(state,payload){
        state.url = payload
    }
 }
 const actions = {
    importBlogs({commit},payload){
        let arr = [];        
        firebase.firestore().collection('blogs').orderBy('time',payload)
        .get()
        .then(snapshot=>{
            snapshot.docs.forEach(doc=>{
                arr.push(doc.data())
            })
        })
        commit('SET_BLOGS',arr)
    },
    importBlogPost({commit},payload){
        let arrBlog = {}
        firebase.firestore().collection('blogs').where('url','==',payload).onSnapshot(snapshot=>{
            snapshot.docs.forEach(doc=>{
                arrBlog = doc.data()
                commit('SET_LIKE',doc.data().likes)
                commit('SET_URL',doc.data().url)
            })
            commit('SET_BLOG',arrBlog)
        })
    },
    addNewBlog({commit},payload){
       
        const newBlog = {
            title : payload.title,
            author:payload.author,
            url : payload.url,
            time : payload.time,
            imgURL : payload.imgURL,
            likes : payload.likes,
            isPublished: true,
            text : payload.text,
            description : payload.description
        }
        commit('SET_BLOG',newBlog)
        firebase.firestore().collection('blogs').add(newBlog)
    },
    updateLikes({commit},payload){
        commit('SET_LIKE',payload.likes)
         firebase.firestore().collection('blogs').where('url','==',payload.title)
         .get()
         .then(querySnapshot=>{
             querySnapshot.forEach((doc)=>{                
                 firebase.firestore().collection('blogs').doc(doc.id).update({likes:payload.likes})
             })
         })
         
    }
 }
 export default {
    state,
    getters,
    mutations,
    actions
 };