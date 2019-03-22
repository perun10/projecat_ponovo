<template>
<div>
  
    <div>
        <!-- <p style="display:none;">{{takeTitle(b.url)}}</p> -->
     <Top :title="blog.title"/>
     <div id="blogs"  class="container">
          <div class="row no-gutters justify-content-between p-3">
      <div class="col-md-4 col-xs-12"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path id="like" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"/></svg> {{getLike}}   <a @click="upVote" :class="[disable ? '' : acitve]">  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.037,28.426C45.629,29.123,46,30.015,46,31.001  c0,1.461-0.792,2.727-1.963,3.424C44.629,35.123,45,36.015,45,37.001c0,1.462-0.793,2.726-1.963,3.424  C43.629,41.122,44,42.014,44,43c0,2.209-1.791,4-4,4l-23.404-0.002v-0.024c-1.602-0.069-3.018-0.824-3.975-1.976H6  c-2.762,0-5-5.373-5-12s2.238-12,5-12h8.387L22,10v-5c0.541-3.262,3-3,3-3c2.212,0,3,1,3,1c3,3,3,8,3,8c0,6.608-3,10-3,10h15  c2.209,0,4,1.791,4,4C47,26.462,46.207,27.728,45.037,28.426z M6,22.998c-0.771,0-3,3.438-3,10s2.229,10,3,10h5.578  c-0.056-0.198-0.119-0.393-0.152-0.6C10.834,39.526,10,34.805,10,30.998c0-4.043,2.203-6.897,3-8h0.002l0,0H6z M43,23H23.561  l2.941-3.325C26.527,19.646,29,16.691,29,11.006c0-0.042-0.054-4.232-2.414-6.591l-0.117-0.105  c-0.673-0.423-1.599-0.314-1.599-0.314c-0.533,0-0.77,0.686-0.87,1.185v5.444l-9.379,13.543l-0.109,0.152  C13.696,25.441,12,27.773,12,30.998c0,3.714,0.867,8.484,1.398,11.073c0.268,1.611,1.648,2.833,3.285,2.904L40,45  c1.103,0,2-0.897,2-2c0-0.584-0.266-1.019-0.487-1.281l-1.529-1.801l2.028-1.211C42.631,38.338,43,37.7,43,37.001  c0-0.584-0.266-1.021-0.488-1.283l-1.528-1.803l2.03-1.209C43.631,32.339,44,31.701,44,31.001c0-0.584-0.266-1.019-0.487-1.281  l-1.529-1.801l2.028-1.211C44.631,26.339,45,25.701,45,25.001C45,23.897,44.103,23,43,23z M7.5,40.998c-0.828,0-1.5-0.672-1.5-1.5  s0.672-1.5,1.5-1.5S9,38.67,9,39.498S8.328,40.998,7.5,40.998z"/>
</svg></a></div>
      <div class="col-md-4 col-xs-12"> <img class="author" :src="blog.description" alt=""> {{blog.author}}</div>
      <div class="col-md-4 col-xs-12 pr-5" v-if="blog">Date : {{ format(blog.time) }}</div>
     </div>
     <div class="row no-gutters justify-content-center p-3">
         <div class="col-md-12 col-xs-12">
             <img class="img-fluid" :src="blog.imgURL" alt="">
         </div>         
     </div>
     <div class="row no-gutters justify-content-center p-3">
         <div class="col-md-12 col-xs-12 text-left pl-3">
           <div id="btext" v-html="blog.text"></div>
         </div>
     </div>
    </div>
    </div>    
   
    <Bottom/>
</div>

</template>

<script>
import Top from "@/components/Common/Top"
import Bottom from "@/components/Common/Bottom"
import { store } from "@/store/index.js";
import Vue from 'vue'
import moment from "moment"
Vue.use(moment)
export default {
    data(){
        return{
          likes : '',
          title : "",
          disable : true,
          acitve:'none'
        }
    },
components:{
    Top,
    Bottom
},
methods:{
dummy(){
    alert('DummyFunction')
},
format(date){   
  let date1 =  date.toDate()
  moment(date1).utc().startOf('day').format();
  return moment(date1).format('DD/MM/YYYY')  
},
upVote(){
    let myNum = this.getLike
    myNum++
    this.$store.dispatch('updateLikes',{title:this.getUrl,likes:myNum})
    this.disable = false
}
},
beforeRouteEnter(to,from,next){
    const urlID  = to.params.id   
    store.dispatch('importBlogPost',urlID)
    next();    
}
,
computed:{
    user(){
        return this.$store.getters.user
    },
    blog(){
        return this.$store.getters.getBlog
    },
    getLike(){
        return this.$store.getters.getLikes
    },getUrl(){
        return this.$store.getters.getUrl
    }
    
}
}
</script>

<style>
#like{
    fill: red;
}
#blogs{
    min-height: 50vh;
}
#btext img{
    width: 100%;
}
.author{
    height: 50px;
    border-radius: 50%;
}
.none{
    pointer-events: none;
}
</style>
