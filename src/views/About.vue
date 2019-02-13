<template>
  <div class="about">
    <Top title="About my business"/>
    <main>
      <section>
        <div class="container">
           <div class="row no-gutters justify-content-center mt-5 mb-3">
             <div class="col-md-5 col-sm-1 pl-0 pt-0">
               <img src="@/assets/images/business.svg" alt="Biznis" class="img-fluid">
             </div>

             <div class="col-md-7 col-sm-1 pl-3 text-left">
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
      <Tabs/>
    </main>
    <Bottom/>
  </div>
</template>
<script>
import Top from "../components/Top.vue";

import Bottom from "../components/Bottom.vue";
import Tabs from "../components/Tabs.vue";

export default {
  
  data(){
    return{

    }
  },
  components:{
    Top,
    Bottom,
    Tabs
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
