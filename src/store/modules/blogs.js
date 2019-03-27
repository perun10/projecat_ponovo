import * as firebase from 'firebase'
import 'firebase/firestore';
var blogObject = ''
const state = {
   blogs:[],
   blog:"",
   likes:"",
   url:"",
   avatar:"",
   author:'',
   published:''
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
    },
    getAvatar(state){
        return state.avatar
    },
    getAuthor(state){
        return state.author
    },
    getPublished(state){
        return state.published
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
    },
    SET_AVATAR(state,payload){
        state.avatar = payload
    },
    SET_AUTHOR(state,payload){
        state.author = payload
    },
    SET_PUBLISHED(state,payload){
        state.published = payload
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
                blogObject = doc   
                arrBlog = doc.data()
                commit('SET_LIKE',doc.data().likes)
                commit('SET_URL',doc.data().url)
                commit('SET_AVATAR',doc.data().description)
                commit('SET_AUTHOR',doc.data().author)
                commit('SET_PUBLISHED',doc.data().isPublished)
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
            isPublished: payload.isPublished,
            text : payload.text,
            description : payload.description
        }
        commit('SET_BLOG',newBlog)
        firebase.firestore().collection('blogs').add(newBlog)
    },
    updateLikes({commit},payload){
        commit('SET_LIKE',payload.likes)
        firebase.firestore().collection('blogs').doc(blogObject.id).update({likes:payload.likes}) //ZAMJENA AVATARA ZA AUTORE
        //  firebase.firestore().collection('blogs').where('url','==',payload.title)
        //  .get()
        //  .then(querySnapshot=>{
        //      querySnapshot.forEach((doc)=>{                
        //      })
        //  })
         
    },
    replaceAvatar({commit},payload){
        const imgFile = payload.image;
        const url = payload.url;
        const ext = imgFile.name.slice(imgFile.name.lastIndexOf('.'))
        const author = payload.author;
        
        return firebase.storage().ref('avatar/'+author+ext).put(imgFile)
        .then(fileData =>{
            console.log(fileData)
            var urlImage = "";
            firebase.storage().ref('avatar/'+author+ext).getDownloadURL().then((downloadURL)=>{
                urlImage = downloadURL
                commit('SET_AVATAR',urlImage)       
                // return firebase.firestore().collection('blogs').where('url','==',url).
                // get().then(querySnapshot =>{
                //     querySnapshot.forEach((doc)=>{        
                            firebase.firestore().collection('blogs').doc(blogObject.id).update({description:urlImage})
                        
                    

            })
        })
    },
    unPublishBlog({commit},payload){
        commit('SET_PUBLISHED',payload)     
        firebase.firestore().collection('blogs').doc(blogObject.id).update({isPublished:payload}) //Deaktivacija ili aktivacija Bloga
        }
 }
 export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
 };