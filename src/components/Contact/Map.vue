<template>
  <section id="contact-map" class>
    <div>      
      <GmapMap
  :center="{lat:parseFloat(lat), lng:parseFloat(lon)}"
  :zoom="15"
  map-type-id="terrain"
  style="width: 100%; height: 500px"
>
  <GmapMarker  ref=""      
    :position="{lat:parseFloat(lat), lng:parseFloat(lon)}"
    :clickable="true"
    :draggable="false"
    
  />
</GmapMap>
    </div>
    <br>
  </section>
</template>

<script>
import firebase from "firebase"
export default {
  name: "Map",
  data() {
    return {  
      lat:null,
      lon:null
    };
  },
  firestore(){
    return{
      map : firebase.firestore().collection('map').doc('sP2d4xnFzZRuyfps2pSO')
    }
  }
  ,
  mounted(){
   //console.log()
   this.$firestore.map
   .get()
   .then((doc) =>{
     //console.log(doc.data())
      this.lat = doc.data().position.latitude
     this.lon = doc.data().position.longitude
    // console.log(this.lat+ " "+ this.lon)
   })
  //console.log(this.$store.getters.latitude , this.$store.getters.longitude + "Postoje")
  }
};
</script>

<style>

</style>
