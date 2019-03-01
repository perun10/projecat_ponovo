<template>
       <button  type="submit" class="btn" :style="{background:this.$store.getters.color}" @click="onClick">{{text}}</button>    

</template>

<script>
import firebase from "firebase"
export default {
    name:"Button",
    props:{
        text:String,  
        onClick:{
            type:Function,           
        }        
    },
    
    data(){
    return{
        bgcolor:null,
        tcolor:null
    }
},
created(){
    firebase.database().ref('/themes/').once("value")
            .then((snapshot) =>{
            var child_changed = snapshot.val();
           //console.log(child_changed.img)
           //console.log(this.logo)
            this.bgcolor = child_changed.backgroundColor
            this.tcolor = child_changed.color
           //console.log(this.bgcolor)
           //console.log(this.tcolor)
            })
            this.$emit('created');
            
},methods:{
    just(){
        alert('WWW')
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
