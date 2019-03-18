<template>
    
        <ul :class=" {'social-mobile-nav' : classForMobile == 'mobile'} " class="col-md-6 pt-3 text-right "> 
          
          <li class="mr-2 inline" v-for="a in arr" :key="a.index">
              <a :href="a.url">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="34" height="34" viewBox="0 0 34 34"><defs><path 
                     :id="a.id" 
                     :d="a.d"/></defs><g><g 
                     :transform="a.x"><use fill='#dadada' 
                     :xlink:href="'#'+a.id"/></g></g></svg>
              </a>
          </li>        
         
          </ul>  
         
</template>
<style>
    .social{
    float: right;
    }
    ul li{
    display: inline-block;
    list-style: none;         
    }
    svg:hover #dribble{
    fill:#DF3E7B;
    }
    svg:hover #facebook{
    fill:#3D5B99;
    }
    svg:hover #googleplus{
    fill:#EAAF34;
    }
    svg:hover #pinterest{
    fill: #BD081B;
    }
    svg:hover #rss{
    fill:#E87931;
    }
    svg:hover #twitter{
    fill: #1DA1F2;
    }

    .social-mobile-nav{
        display: none;
    }
     
    @media screen and (max-width: 480px) {
 .social-mobile-nav:only-child{
     text-align: left;
     margin-left:auto;
     margin-right: auto;
     padding: 0;
     display: grid;
     grid-template-columns: auto auto auto;
   }
    
    }
</style>
<script>
import firebase from "firebase"

export default {
    name : "Social",
    props:{
        classForMobile:{
            type:String,
            required:true
        }
    },
    data(){
        return{
            id:null,
            d:null,
            x:null,           
            url:null,
            arr:null

        }
    },
    mounted(){
            this.loadSocials();
       
}
    ,
    methods:{
        loadSocials(){
              firebase.database().ref('/social/').once("value")
            .then((snapshot) =>{
            this.arr = snapshot.val();
            //console.log(this.arr)
            this.id = this.arr.id
            this.d = this.arr.d
            this.x = this.arr.x
            this.url = this.arr.url
           //console.log(child_changed.img)
           //console.log(this.logo)
            //this.logo = child_changed.img
            })
        }
       
    }
};
</script>