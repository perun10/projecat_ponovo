<template>
    <section id="top" class="mt-1">
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
    }
}
</script>

<style>
 #top {
        background-color: #2ecc71;
         color:white;
        text-align: left;
        font-size: 1.875rem;
        font-weight: bold;
        line-height: 1.125rem;
        text-transform: uppercase;
        padding-top:40px;
        padding-bottom:40px;
 }
  @media screen and (max-width: 480px) {
 #top {
    text-align: center;
}
}
</style>
