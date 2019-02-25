<template>
    <div style="margin-bottom:100px">
    <Top title="Customize everything"/>
    <div class="container mt-5">
      <h3>LOGO switch</h3>
      <div class="row no-gutters justify-content-around mt-3">
     
      <div class="col-md-6">
  <div class="form-group">
    <input type="text" class="form-control" v-model="logolink" placeholder="Your logo Link" required>    
  </div>
 <!-- <button  type="submit" class="btn btn-success wid" style="background-color:#2ecc71;border-color:#2ecc71;" @click="updateItem">Submit LOGO</button> -->
    <Button text="Submit logo" :onClick="updateItem"/>

 </div>
 <div class="col-md-6 pl-5">
    <div class="col-12"> YOUR LOGO : <img :src="logo" > </div>
   
 </div>
 </div>

   <h3>Video Change</h3>
   <div class="row no-gutters justify-content-around mt-5">
     <div class="col-md-6">
           <div class="form-group">
    <input type="text" class="form-control" v-model="videoLink" placeholder="Youtube Video" required>    
  </div>
 <!-- <button  type="submit" class="btn btn-success wid" style="background-color:#2ecc71;border-color:#2ecc71;" @click="updateVideo">Change video</button>     -->
    <Button text="Change video" :onClick="updateVideo"/>


     </div>
     <div class="col-md-6">
       <iframe id="iframe" :src="videoLink" frameborder="0"></iframe>
     </div>

   </div>
   <h3>Pages Name Change</h3>
  <div class="row no-gutters justify-content-around">
    <div class="col-md-12">
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select Page
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2" >
    <button class="dropdown-item"  type="button" v-for="page in pages" :key="page.index" @click="getPageName(page.text)">{{page.text}}</button>
  </div>
</div>
      <input class="mt-3 mb-3" type="text" v-model="onchange" :placeholder="single" required></div>
  </div>
  <label v-if="exists" >PAGE EXISTS</label>
  <label v-else>PAGE DOESNT EXIST</label>
   <!-- <button  type="submit" class="btn btn-success" style="border-color:none;" :style="{background:'red'}" @click="updatePages">Update Page</button>     -->
    <Button text="Update Page" :onClick="updatePages"/>
    <Button text="Page existing" :onClick="existing"/>

    <!-- <Button text="Test BUTTON" :onClick="test"/> -->

    <div class="mt-5">
      <h3>THEMES</h3>
     <div class="row no-gutters justify-content-around">
        <h5>DEFAULT COLOR : #2ecc71</h5>
        <div class="themes">
         <button class="blue-bg btn" @click="applyTheme('blue')"></button>
         <button class="mint-bg btn" @click="applyTheme('mint')"></button>
         <button class="red-bg btn" @click="applyTheme('red')"></button>
         <button class="orange-bg btn" @click="applyTheme('orange')"></button>
         <button class="violet-bg btn" @click="applyTheme('violet')"></button>
         <button class="biege-bg btn" @click="applyTheme('biege')"></button>
        </div>
        <h5>Fonts : </h5>
     </div>
    </div>
    </div>
    </div>
</template>

<script>
import Top from "../components/Top.vue";
import Button from "../components/Button.vue";
import store from "../store"
import axios from "axios"
import Vue from "vue"
import firebase from "firebase"
export default {
    name:"Admin",    
    data(){
      return{
       logolink:null,
       logo:"",
       videoLink:null,
       pages:null,
       single:null,
       onchange:null,
       colorCode:null,
       exists:null
      }
    },
components:{
    Top,
    Button
    },
    created(){
    //     axios
    // .get('https://project-ponovo.firebaseio.com/logo.json')
    // .then(response =>(this.logo=response.data.img) )
     this.onLoad();
     firebase.database().ref('/pages/').once("value")
            .then((snapshot) =>{
            var child_changed = snapshot.val();
           //console.log(child_changed.img)
           //console.log(this.logo)
            this.pages = child_changed
          // console.log(this.pages)
           
          
        })

       
    },
    methods:{
        updateItem(id , link){
            link = this.logolink
            
           //console.log(link);
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
           //console.log(this.logo)
            this.logo = child_changed.img
          // console.log(this.logo)
           
           
        })
        
        },
        updateVideo(video){
         // alert('Video change')
            video = this.videoLink
           // console.log(video+" OVAJ VIDEO")
            var li = video.replace('watch?v=','embed/')
            //console.log(li+"  ali je OVAJ VIDEO")

            this.videoLink = li;
            //console.log(this.videoLink+"?autoplay=1")

             firebase.database().ref('/video/').set({
                title:"Video",
                link:this.videoLink+"?autoplay=1"
            });

        },
        getPageName(myPageName){
         this.single = myPageName
         console.log(this.single)
     },
     updatePages(){
       console.log(this.pages)
       for (let i = 0; i < this.pages.length; i++) {
         const page = this.pages[i];
        // console.log(page.text)
          //console.log(this.single)
          if(page.text == this.single){
          //  console.log("Matched")
            var textName = this.onchange
             var textLink = "/" +this.onchange.toLowerCase()
            // console.log("TU SAM")
             if(this.onchange.toUpperCase() == "HOME"){
           //  console.log("TU SAM 2")

               //console.log(textName)
              // console.log(textLink)
            //console.log(this.onchange.toLowerCase())
              textLink = "/"
             }
              firebase.database().ref('/pages/'+i).set({      
              link:textLink,
              text:textName
          });
             
          }
       }
               

   
     },
     applyTheme(color){
       var nav = document.querySelector('#navbarNavDropdown a.router-link-exact-active')
       console.log(nav)
       
       
       if(color.toUpperCase()=="BLUE"){
         this.colorCode = "#19a8ea"
         nav.classList.toggle('blue')
       }else if(color.toUpperCase()=="MINT"){
         this.colorCode = "#2ecc71"
       }else if(color.toUpperCase()=="RED"){
         this.colorCode = "#E62117"
       }else if(color.toUpperCase()=="ORANGE"){
         this.colorCode = "#FFAB00"
       }else if(color.toUpperCase()=="VIOLET"){
         this.colorCode = "#563D7C"
       }else if(color.toUpperCase()=="BIEGE"){
         this.colorCode = "#E9E6DF"
       }else{
         this.colorCode = "#2ecc71"
       }
       firebase.database().ref('/themes/').set({      
              color:this.colorCode,
              backgroundColor:this.colorCode
          });
          console.log(this.colorCode)
     },
     test(){
       alert('TEST')
     },
     existing(page){
       page = this.single
       console.log(page)
       var componentExists = page in Vue.options.components
      
        //  for (var i = 0; i < this.$children.length; i++) {
        //     if (
        //            this.$children[i].$options.name == 'NotFound'
        //         || this.$children[i].$options.name == 'Top'
        //         || this.$children[i].$options.name == 'Carousel'
        //     ) {
        //         //do stuff
        //         console.log( this.$children[i].$options.name=="Carousel")
                
        //     }
        // }


      // console.log(componentExists);
        //return this.exists = componentExists;
     }
        
    },
    
       
}
</script>

<style>

.blue-bg{
  background-color:#19a8ea;
}
.blue{
  color:#19a8ea;
}
.mint-bg{
  background-color: #2ecc71;
}
.red-bg{
  background-color: #E62117;
}
.red{
  color:#E62117;
}
.violet-bg{
  background-color: #563D7C;
}
.violet{
  color : #563D7C
  }
.orange-bg{
  background-color: #FFAB00;
}
.orange{
  color :#FFAB00;
  }
.biege-bg{
  background-color: #E9E6DF;
}
.biege{
  color :#E9E6DF;
  }
  
</style>
