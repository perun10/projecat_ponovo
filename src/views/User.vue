<template>
    <div>
        <Top :title="author.name"/>
        <div class="container">
           <div class="row no-gutters justify-content-center mt-3">
              <img style="border-radius:50%;" :src="author.avatarImg" alt="">
            <p>{{author.about}}</p>
            <p>Liked pages:</p>
            <ul v-for="like in author.liked" :key="like.index">
              <li>{{like}}</li>
            </ul>
           </div>
        </div>
        <Bottom/>
    </div>
</template>

<script>
import Top from "@/components/Common/Top"
import Popup from "@/components/Common/Popup"
import Bottom from "@/components/Common/Bottom"
import Button from "@/components/Common/Button"
export default {
    data(){
        return{

        }
    },
components:{
    Top,
    Bottom,
    Popup,
    Button
},
created(){
      this.$store.dispatch('blogs/importBlogs','')
},
mounted(){
      this.$store.dispatch('takeAuthor',this.email)
    },
    methods:{
      checkPages(val){
      console.log(val)
      },
      logovanje(){
        console.log('test')
      }
    }
    ,
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
