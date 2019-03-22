<template>
       <button  type="submit" class="btn" @click="onClick" :style="{background:colorTop}">{{text}}</button>    
            <!-- :style={background:color}" -->
</template>

<script>
import firebase from "firebase"
export default {
    name:"Button",
    props:{
        text:String,  
        onClick:{
            type:Function, 
            required:false          
        }        
    },
    
    data(){
    return{
       color:""
    }
},
firestore() {
    return {
      color: firebase
        .firestore()
        .collection("themes")
        .doc("LIoaPVCBvEX1xOvMscWb")
    };
  },
  created() {
    this.$firestore.color.get().then(doc => {
       // console.log(doc.data().color)
       this.color = doc.data().color
        this.$store.commit('setColor',doc.data().color)
    });

    // this.$store.dispatch('setColor',this.color)
  },
  computed: {
    colorTop() {
    //   console.log(this.$store.getters.color + "TOP PROMJENA");
      return this.$store.getters.color;
    }

  }
    
}
</script>

<style>
.btn{
   border-color:none; 
   color:white;
   margin:5px;
}
</style>
