<template>
<div id="contact">
    <Top :title="$t('contact')"/>
    <Map/>
    <div class="container">
   <div class="row no-gutters">
      <Form />
      <div class="col-md-1"></div>
      <Info />
   </div>
</div> {{test}}
    <Bottom/>    
</div>
    
</template>

<script>
import Top from "@/components/Common/Top.vue";
import Bottom from "@/components/Common/Bottom.vue";
import Map from "@/components/Contact/Map.vue";
import Form from "@/components/Contact/ContactForm.vue";
import Info from "@/components/Contact/ContactInfo.vue";
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
  created(){
    this.$logger.error('GRESKA NA STRANICI KONTAKT')
  }
  
}
</script>

<style>

</style>
