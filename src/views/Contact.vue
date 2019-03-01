<template>
<div id="contact">
    <Top title="GOT A QUESTION OR INQUIRY?"/>
    <Map/>
    <div class="container">
   <div class="row no-gutters">
      <Form />
      <div class="col-md-1"></div>
      <Info />
   </div>
</div>
    <Bottom/>    
</div>
    
</template>

<script>
import Top from "../components/Top.vue";
import Bottom from "../components/Bottom.vue";
import Map from "../components/Map.vue";
import Form from "../components/Form.vue";
import Info from "../components/Info.vue";
import firebase from "firebase";

export default {
  name : "Contact",
  data(){
    return{
     
    }
  },
  components:{
    Top,
    Bottom,
    Map,
    Form,
    Info
  }, 
  
}
</script>

<style>

</style>
