<template>
<div id="contact">
    <Top title="GOT A QUESTION OR INQUIRY?"/>
    <Map/>
    <Form />
    <Bottom/>    
</div>
    
</template>

<script>
import Top from "../components/Top.vue";
import Bottom from "../components/Bottom.vue";
import Map from "../components/Map.vue";
import Form from "../components/Form.vue";

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
    Form
  }
}
</script>

<style>

</style>
