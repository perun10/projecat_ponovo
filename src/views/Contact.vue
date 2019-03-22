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
<<<<<<< HEAD
import Top from "@/components/Common/Top.vue";
import Bottom from "@/components/Common/Bottom.vue";
import Map from "@/components/Contact/Map.vue";
import Form from "@/components/Contact/ContactForm.vue";
import Info from "@/components/Contact/ContactInfo.vue";
=======
import Top from "../components/Top.vue";
import Bottom from "../components/Bottom.vue";
import Map from "../components/Contact/Map.vue";
import Form from "../components/Contact/ContactForm.vue";
import Info from "../components/Contact/ContactInfo.vue";
>>>>>>> 1951d06ab0b844194f8c70635eab643cafd5cf2e
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
