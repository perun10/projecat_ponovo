<template>
  <div class="about">
    <top title="About my business"/>
    <main>
      <section>
        <div class="container">
           <div class="row no-gutters justify-content-center mt-3 mb-3">
             <div class="col-md-5 col-sm-1 pt-1">
               <img src="@/assets/images/business.svg" alt="Biznis" style="width:340px">
             </div>

             <div class="col-md-7 col-sm-1 text-left">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                 Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. 
                 Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. 
                 Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p>
               <p>
                 Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. 
                 Pellentesque pellentesque arcu a elit congue lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. 
                 Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               </p>
             </div>

           </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row no-gutters justify-content-center">
            <div class="col-md-6 col-sm-1 pr-2 text-left">
              <h3>MISSION STATEMENT</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. 
                Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. 
                Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. 
                Pellentesque pellentesque arcu a elit congue lacinia.</p>
            </div>
            <div class="col-md-6 col-sm-1 pl-2 text-left">
              <h3>FUN FACTS</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. 
                Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. 
                Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. 
                Pellentesque pellentesque arcu a elit congue lacinia.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container justify-content-start text-left">
         
          <h3>SERVICES</h3>
        
        </div>
      </section>
      <section id="tabs">
        <div class="container">
          
          <div class="row no-gutters justify-content-center">
            <div class="col-md-3 col-sm-1 hovertab">
              <img src="@/assets/images/icons/websites.svg" alt="Websites">
               <h5>WEBSITES</h5>
            </div>
            <div class="col-md-3 col-sm-1 hovertab">
              <img src="@/assets/images/icons/photography.svg" alt="Photography">
               <h5>Photography</h5>
            </div>
            <div class="col-md-3 col-sm-1 hovertab">
              <img src="@/assets/images/icons/seo.svg" alt="Seo">
               <h5>Seo</h5>
            </div>
            <div class="col-md-3 col-sm-1 hovertab">
              <img src="@/assets/images/icons/applications.svg" alt="Applications">
               <h5>Applications</h5>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Bottom/>
  </div>
</template>
<script>
import Top from "../components/Top.vue";

import Bottom from "../components/Bottom.vue";

export default {
  
  data(){
    return{

    }
  },
  components:{
    Top,
    Bottom
  }
}
</script>
<style>
 #tabs{
   background-color:#efefef;
   height: 12.5rem;
 }
 
 .hovertab:hover{
   background-color: gray;
 }
</style>
