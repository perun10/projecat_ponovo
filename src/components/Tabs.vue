<template>
<div>
    <section class="container text-left">
        <div class="row no-gutters">
            <h3>SERVICES</h3>
        </div>
    </section>
<section style="background-color:#efefef;">
<div class="container">
   <ul class="nav nav-pills nav-fill" >
  <li class="nav-item col-md-3 col-xs-12" v-for="put in videoLink" :key="put.index">
    <a class="nav-link" style="padding-top:50px;" href="#"><img :src="put.link" alt=""></a>
    <h5 class="nav-link" style="margin-bottom:0px;padding-bottom:50px;">{{put.title}}</h5>
  </li>
  
</ul>
</div>
</section>
</div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from "vue" 
Vue.use(VueAxios, axios)
export default {

  data(){
    return{
      videoLink: null
    }
  },
  mounted(){
     axios
    .get('https://project-ponovo.firebaseio.com/tabs.json')
    .then(response =>(this.videoLink=response.data))
  }


}
</script>

<style>
 .nav-pills .nav-link.active:hover, .nav-pills .show > .nav-link{
     background-color:#dadada;
     color:#737373;
 }
 .nav-pills .nav-item:hover{
      background-color:#dadada;
     color:#737373;
 }
</style>
