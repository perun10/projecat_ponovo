import * as firebase from 'firebase'
import 'firebase/firestore';
var blogObject = ''
let lastVisible = null
let allBlogs = ''
let sizeBlog = ""
let arr = []
const state = {
    blogs: [],
    blog: "",
    likes: "",
    url: "",
    avatar: "",
    author: '',
    published: '',
    size:"",
    id:''
}
const getters = {
    getBlogs(state) {
        return state.blogs
    },
    getBlog(state) {
        return state.blog
    },
    getLikes(state) {
        return state.likes
    },
    getUrl(state) {
        return state.url
    },
    getAvatar(state) {
        return state.avatar
    },
    getAuthor(state) {
        return state.author
    },
    getPublished(state) {
        return state.published
    },
    getSize(state){
        return state.size
    },
    getId(state){
        return state.id
    }
}
const mutations = {
    SET_BLOGS(state, payload) {
        state.blogs = payload
    },
    SET_BLOG(state, payload) {
        state.blog = payload
    },
    SET_LIKE(state, payload) {
        state.likes = payload
    },
    SET_URL(state, payload) {
        state.url = payload
    },
    SET_AVATAR(state, payload) {
        state.avatar = payload
    },
    SET_AUTHOR(state, payload) {
        state.author = payload
    },
    SET_PUBLISHED(state, payload) {
        state.published = payload
    },
    SET_SIZE(state,payload){
        state.size = payload
    },
    SET_ID(state,payload){
        state.id = payload
    }
}
const actions = {
    importBlogs({ commit }, payload) {
        let arrNow = []
        arrNow.length = 0
        var query = firebase.firestore().collection('blogs').orderBy('time','desc').limit(3)
        if(payload){
            // console.log(payload + ' JE ')
            query =  firebase.firestore().collection('blogs').orderBy('time','desc').where('category','==',payload).limit(3)         
        }
            query
                .get()
                .then(snapshot => {
                    allBlogs = snapshot
                   // console.log(allBlogs)
                    // console.log(allBlogs)
                    lastVisible = snapshot.docs[snapshot.docs.length - 1];
                    // console.log(lastVisible)
                    snapshot.docs.forEach(doc => {
                        arrNow.push(doc.data())
                        arr = arrNow
                        sizeBlog --;
                        // console.log(sizeBlog)
                        commit('SET_SIZE',sizeBlog)
                    })
                    commit('SET_BLOGS', arrNow)
                })
          
            
    },
    loadMore({commit},payload){
        var query = firebase.firestore().collection('blogs').orderBy('time','desc').startAfter(lastVisible).limit(3)
        if(payload){         
            query =  firebase.firestore().collection('blogs').orderBy('time','desc').where('category','==',payload).startAfter(lastVisible).limit(3)         
        }
        query
        .get()
        .then(snapshot => {
            lastVisible = snapshot.docs[snapshot.docs.length - 1];
            // console.log(snapshot.docs.length)
            snapshot.docs.forEach(doc => {
                arr.push(doc.data())
                sizeBlog --;
                // console.log(sizeBlog)

                commit('SET_SIZE',sizeBlog)
                // console.log(sizeBlog)
                
            })
        })
        commit('SET_BLOGS', arr)
    }
    ,
    importBlogPost({ commit }, payload) {
        let arrBlog = {}
        firebase.firestore().collection('blogs').where('url', '==', payload).onSnapshot(snapshot => {
            snapshot.docs.forEach(doc => {
                blogObject = doc
               
                arrBlog = doc.data()
                console.log(blogObject.id)
                commit('SET_ID',blogObject.id)
                commit('SET_LIKE', doc.data().likes)
                commit('SET_URL', doc.data().url)
                commit('SET_AVATAR', doc.data().description)
                commit('SET_AUTHOR', doc.data().author)
                commit('SET_PUBLISHED', doc.data().isPublished)
            })
            commit('SET_BLOG', arrBlog)
        })
    },
    addNewBlog({ commit }, payload) {

        const newBlog = {
            title: payload.title,
            author: payload.author,
            url: payload.url,
            time: payload.time,
            imgURL: payload.imgURL,
            likes: payload.likes,
            isPublished: payload.isPublished,
            text: payload.text,
            description: payload.description
        }
        commit('SET_BLOG', newBlog)
        firebase.firestore().collection('blogs').add(newBlog)
    },
    updateLikes({ commit }, payload) {
        console.log(payload.id + "Updateovani blog")
        firebase.firestore().collection('blogs').doc(payload.id).update({ likes: payload.likes }) //ZAMJENA AVATARA ZA AUTORE
        commit('SET_LIKE', payload.likes)
    },
    importBlogSize({commit},payload){
        var query =  firebase.firestore().collection('blogs')
        if(payload) {
            query = firebase.firestore().collection('blogs').where('category','==',payload)
        }
        query
        .get()
        .then(snapshot=>{
            sizeBlog = snapshot.docs.length
            commit('SET_SIZE',snapshot.docs.length)
        })
    },
    replaceAvatar({ commit }, payload) {
        const imgFile = payload.image;
        const url = payload.url;
        const ext = imgFile.name.slice(imgFile.name.lastIndexOf('.'))
        const author = payload.author;

        return firebase.storage().ref('avatar/' + author + ext).put(imgFile)
            .then(fileData => {
                console.log(fileData)
                var urlImage = "";
                firebase.storage().ref('avatar/' + author + ext).getDownloadURL().then((downloadURL) => {
                    urlImage = downloadURL
                    commit('SET_AVATAR', urlImage)                  
                    firebase.firestore().collection('blogs').doc(blogObject.id).update({ description: urlImage })



                })
            })
    },
    unPublishBlog({ commit }, payload) {
        commit('SET_PUBLISHED', payload)
        firebase.firestore().collection('blogs').doc(blogObject.id).update({ isPublished: payload }) //Deaktivacija ili aktivacija Bloga
    },
    editBlog({ commit }, payload) {
        commit('SET_URL', payload.url)
        firebase.firestore().collection('blogs').doc(blogObject.id).update({ title: payload.title, url: payload.url, text: payload.text })
    },
    deleteBlog({commit}){
        console.log(blogObject.id)
        firebase.firestore().collection('blogs').doc(blogObject.id).delete().then(()=>{console.log("deleted")}).catch(error=>{console.log('EROR'+error.message)})
        commit('SET_BLOG',null)
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};