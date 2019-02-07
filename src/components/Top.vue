<template>
    <section id="top" class="mt-3">
        <div class="container pt-3 pb-3">           
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
    }
}
</script>

<style>
 #top {
        background-color: #2ecc71;
         color:white;
        text-align: left;
        font-size: 1.875rem;
        line-height: 1.125rem;
        text-transform: uppercase;
 }
  @media screen and (max-width: 480px) {
 #top {
    text-align: center;
}
}
</style>
