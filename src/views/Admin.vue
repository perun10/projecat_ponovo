<template>
    <div>
    <Top title="Customize everything"/>
    <div class="container mt-2">
  <div class="form-group">
    <input type="text" class="form-control" v-model="logolink" placeholder="Your logo Link">    
  </div>
 <button  type="submit" class="btn btn-success wid" style="background-color:#2ecc71;border-color:#2ecc71;" @click="updateItem">Submit LOGO</button>
 <div class="row no-gutters">
    <div class="col-4"> YOUR LOGO : <img :src="logo" > </div>
   
 </div>
    </div>
    </div>
</template>

<script>
import Top from "../components/Top.vue";
import store from "../store"
import axios from "axios"
import firebase from "firebase"
export default {
    name:"Admin", 
    data(){
      return{
        logolink:null,
       logo:""
      }
    },
components:{
    Top
    },
    created(){
    //     axios
    // .get('https://project-ponovo.firebaseio.com/logo.json')
    // .then(response =>(this.logo=response.data.img) )
     this.onLoad();
    },
    methods:{
        updateItem(id , link){
            link = this.logolink
           console.log(link);
            firebase.database().ref('/logo/-LZFL7s0ALMOUh8jiE9k').set({
                alt:"LOGO",
                img:link
            });
            this.onLoad();
             this.$router.push("/admin");
            // axios.post('https://project-ponovo.firebaseio.com/logo.json', {alt:this.logo , img: this.logo})
            // .then(response => console.log(response));
        },
        onLoad(){ 
            
             firebase.database().ref('/logo/-LZFL7s0ALMOUh8jiE9k').once("value")
            .then((snapshot) =>{
            var child_changed = snapshot.val();
           //console.log(child_changed.img)
           console.log(this.logo)
            this.logo = child_changed.img
           console.log(this.logo)
           
           
        })
        
        }
        
    },
    
       
}
</script>

<style>

</style>
