<template>
    <div>
    <Top title="Customize everything"/>
    <div class="container mt-2">
        <input type="file"  class="form-control-file">
        <button @click.prevent="$store.dispatch('logout')">Logout</button>
    </div>
    </div>
</template>

<script>
import Top from "../components/Top.vue";
import store from "../store"
export default {
    name:"Admin", 
    data(){
      return{
       
      }
    },
components:{
    Top
    },
       
}
</script>

<style>

</style>
