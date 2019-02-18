<template>
    <div>
    <Top title="Customize everything"/>
    <div class="container mt-2">
        <input type="file"  class="form-control-file">
    </div>
    </div>
</template>

<script>
import Top from "../components/Top.vue";
import store from "../store.js";
export default {
    name:"Admin",
    store,
components:{
    Top
           },
        beforeRouteEnter(to,from,next){
        // console.log(store.state.tokenId + " --- prvi token")
        //    console.log(store.state.tokenId + " drugi token")  

        if(store.state.tokenId){ 
          
        //    console.log(store.state.tokenId + "-- treci token")       
          next();
        }else{
          next('/signup');
        }
}
}
</script>

<style>

</style>
