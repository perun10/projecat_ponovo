<template>
    <section id="top" class="mt-1 defaultStyle" :style="{background:this.$store.getters.color}">
        <div class="container">           
                    <h2>{{title}}</h2>                
        </div>
    </section>
</template>

<script>
export default {
    name:"Top",
    props:{
        title:{
            type:String,
            required:true,
            default:"TEST"}
    },
    data(){
        return{
            bgcolor:null,
            tcolor:null
        }
    },
    created(){
    this.$store.dispatch('getColor',this.color)       
    }
}
</script>

<style>
.defaultStyle{
    /* background-color: #2ecc71; */
}
 #top {
        /* background-color: #2ecc71; */
         color:white;
        text-align: left;
        font-size: 1.875rem;
        font-weight: bold;
        line-height: 1.125rem;
        text-transform: uppercase;
        padding-top:30px;
        padding-bottom:30px;
 }
  @media screen and (max-width: 480px) {
 #top {
    text-align: center;
}
}
</style>
