<template>
    <div>
        <Top :title="author.name"/>
        <div class="container">

        </div>
        <Bottom/>
    </div>
</template>

<script>
import Top from "@/components/Common/Top"
import Bottom from "@/components/Common/Bottom"
export default {
    data(){
        return{

        }
    },
components:{
    Top,
    Bottom
},
mounted(){
      this.$store.dispatch('takeAuthor',this.email)
    },
  computed: {
    user(){
      return this.$store.getters.user;
    },
    email(){
      return this.$store.getters.getEmail
    },
    author(){
      return this.$store.getters.singleAuthor
     }
  }
}
</script>

<style>

</style>
