<template>
<main>
  <div class="container mt-5 text-left">
    <h3>SERVICES</h3>
  </div>
 <section style="background-color:#efefef;"> 
<div class="container">
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item col-md-3" v-for="put in tabs" :key="put.index">
    <a  class="nav-link" :class="{'active' : put.selected === true}"  :id="put.id" data-toggle="pill" :href="'#'+put.href" role="tab" :aria-controls="put.href" :aria-selected="put.selected"><img :src="put.link">
    <h3 class="pt-2" :class="{'active': put.selected == true}">{{put.title}}</h3> </a>
  </li>
 
</ul>
</div>
</section>
<section class="mt-2">
  <div class="container">
<div class="tab-content" id="pills-tabContent" style="min-height:100px">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros.</p></div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">Pellentesque pellentesque arcu a elit congue lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris.</div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla.</div>
  <div class="tab-pane fade" id="pills-app" role="tabpanel" aria-labelledby="pills-app-tab">SuspendisseWWWWW non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla.</div>
  </div>
  </div>
</section>
</main>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from "vue" 
Vue.use(VueAxios, axios)
export default {

  data(){
    return{
      tabs: null
    }
  },
  mounted(){
     axios
    .get('https://project-ponovo.firebaseio.com/tabs.json')
    .then(response =>(this.tabs=response.data))
  }


}
</script>

<style>
 .nav-pills .nav-item{
   padding: 0;
   margin: 0;
 }
  .nav-pills .nav-item .nav-link{
    padding-top: 50px;
    padding-bottom: 0;
   margin-bottom: 0;
   
  }
 .nav-pills .nav-item:hover{
  background-color:#dadada;    
 } 
 .nav-pills .nav-link.active, .nav-pills .show > .nav-link {  
  color: #737373; 
  background-color:black;
  margin-bottom: 0px;
  padding-bottom: 0px;
 }
 .nav-pills .nav-item .nav-link.active{
   background-color: #dadada;/* ACTIVE TAB */
   padding-top: 50px;

   padding-bottom: 50px;
   margin-bottom: 0px;
 }
 .nav-pills .nav-link{
  color:#737373;
    padding-bottom: 0px;

 }
</style>
