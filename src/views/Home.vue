<template><div>
  <div class="jumbatron jumbatron-fluid" >
    <section  id="banner" >
  <div class="container mt-3">
    <img  id="devices" src="../assets/images/slider-overimage.svg" alt="devices"/>
  </div> 
     </section>
  </div>
  <section class="mt-3">
    <div class="container container-fluid">
      <p class="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus eu.</p>
      <button type="button" class="btn btn-success" style="background-color:#2ecc71;border-color:#2ecc71;">BROWSE PORTFOLIO</button>
    </div>
  </section>
  <section class="mt-3 p-3" style="background-color:#efefef;">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-md-5">
          <img  id="devices" src="@/assets/images/icons/play.svg" alt="Video overlay" @click="show" style="cursor:pointer;"/>
          
          <modal name="video-popup" width="100%" height="60%" >
               <iframe
                id="video-popup"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/WEkSYw3o5is?autoplay=1"
                frameborder="0"
                allowfullscreen="1"
                data-video-id="202177974">
              </iframe>
     </modal>

        </div>

        <div class="col-md-7" style="text-align:left;">
          <h3>Get To Know Us a Little Better!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p>
          <p>Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p>
        </div>
      </div>
    </div>
  </section>
   <section class="mt-3">
    <div class="container container-fluid">
      <h3>A Couple of Our Featured Projects</h3>
      <p class="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus eu.</p>
      
    </div>
  </section>
 
    <Carousel/>
  <Bottom/>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import VModal from 'vue-js-modal'

Vue.use(VModal)
import Carousel from "../components/Carousel.vue";
import Bottom from "../components/Bottom.vue";

import jquery from "jquery";
var $ = require('jquery');
/**JQUERY IMPORT VERY IMPORTANT !!!!!!! */
window.JQuery= $
require('jquery.backstretch');
/** JQUERY IMPORT VERY IMPORTANT !!!!!!!*/




export default {
  name: "home",
  jquery,
  components: {
   Carousel,
   Bottom
  },
  methods:{
   show() {
       this.$modal.show("video-popup");
     },
     hide() {
       this.$modal.hide("video-popup");
     }
  }
};


</script>
<style>
#banner{
    background:#2ecc71 url("../assets/images/sunburst.png") no-repeat;
    background-size:cover;   
   
    height: 100%;
}
.container-fluid{
  padding: 0;
}
#devices{
  padding: 10px;
  width: 100%;  
}
.display-center {
    width:89.75rem;
    margin:0 auto;         
}

</style>
