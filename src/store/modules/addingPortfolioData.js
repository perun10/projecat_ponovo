import firebase from "firebase"
import router from '@/router/index.js'

const state = {
   rawImage : ""
 }
 const getters = {    
   getImage(state){
    return state.rawImage
   } 
 }
 const mutations = {
   SET_RAWIMAGE(state,payload){
      state.rawImage = payload 
   }
 }
 const actions = {
   postImage({commit},payload){
      let raw = payload.image
      let portfolio = payload.portfolio
    let key = "";
    let ext = "";
    firebase
      .firestore()
      .collection("portfolio")
      .add(portfolio)
      .then(data => {
        key = data.id;
        //console.log(key + ": KEY")
        return key;
      })
      .then(key => {
        //console.log(key + "2 PROMIS")
        const fileName = raw.name;
        ext = fileName.slice(fileName.lastIndexOf("."));
        // console.log(ext)
        //console.log(this.image)
        commit('SET_RAWIMAGE',raw)
        return firebase
          .storage()
          .ref("portfolio/" + key + ext)
          .put(raw);
      })
      .then(fileData => {
        //var urlImage = "";
        console.log(fileData + "FILE DATA")
        firebase
          .storage()
          .ref("portfolio/" + key + ext)
          .getDownloadURL()
          .then(downLoadUrl => {
            const myImageURL = downLoadUrl;

            return firebase
              .firestore()
              .collection("portfolio")
              .doc(key)
              .update({ url: myImageURL });
          }              
          );
      
      }).then((response) =>{
        response =console.log("Succesful")
        router.push('/work')
        return response
      })
   }
 }

 export default {
    state,
    getters,
    mutations,
    actions
 };