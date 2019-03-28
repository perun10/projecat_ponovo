<template>
<div>  
    <div>
        <!-- <p style="display:none;">{{takeTitle(b.url)}}</p> :class="[disable ? '' : acitve]"-->
     <Top :title="blog.title"/>
     <div id="blogs"  class="container">
          <div class="row no-gutters justify-content-between p-3">
              <!-- <v-icon name="comment" style="width:24px;height:24px;"/>  -->
      <div class="col-md-4 col-xs-12 pt-2">        
            
             <a @click.once="upVote" >  <v-icon name="hearts" :class="[disable?'':'like']" style="width:24px;height:24px;"/> </a> {{getLike}}   </div>

      <div class="col-md-4 col-xs-12"> <a href="#" @click="onPickFile"><img class="author" :src="avatar" alt="" v-if="avatar"></a> <input
        type="file"
        style="display:none"
        ref="authorAvatar"
        accept="image/*"
        @change="onFilePicked"
      > {{blog.author}}
      
      <div v-if="user&&blog.isPublished">
        Blog is published, click this to : <a href="#" @click="unPublishBlogPublish">Deactivate</a>
      </div>
      <div v-else-if="user">Blog is unpublished, click this to : <a href="#" @click="unPublishBlogPublish">Activate</a></div>
      </div>
      <div class="col-md-4 col-xs-12 pr-5 pt-3" v-if="blog">Published : {{ format(blog.time) }}</div>
     </div>
     <div class="row no-gutters justify-content-center p-3">
         <router-link :to="/blogs/+getUrl+'/edit'" style="color:#8A8888;text-decoration:none;">EDIT</router-link>
         <div class="col-md-12 col-xs-12">
             <img class="img-fluid" :src="blog.imgURL" alt="">
         </div>         
     </div>
     <div class="row no-gutters justify-content-center p-3">
         <div class="col-md-12 col-xs-12 text-left pl-3">
           <div id="btext" v-html="blog.text"></div>
         </div>
     </div>
    </div>
    </div>
    <div style="background-color:grey;height:90px;" class="pt-4 mb-5"><h3 style="color:white;">Comments</h3></div>   
    <div class="container">
        <div class="comments">

    <vue-disqus ref="disqus" shortname="localhost-hl7314xvql" :identifier="getUrl" :url="urlWatch" language="en" :api_key="disquisAPI" v-if="getUrl"></vue-disqus>
        </div>
        <!-- <CommentGrid
        :baseURL="fbURL"
        :apiKey="apiBase"
        nodeName="commentsGrid"
        >

        </CommentGrid> -->
    </div>
   <div> <a href="#">Go to the top</a> </div>
    <Bottom/>
</div>

</template>

<script>
import Top from "@/components/Common/Top"
import Bottom from "@/components/Common/Bottom"
import { store } from "@/store/index.js";
import Vue from 'vue'
import CommentGrid from 'vue-comment-grid'
import moment from "moment"
import Icon from 'vue-awesome/components/Icon'

import VueDisqus from "vue-disqus"
Vue.use(VueDisqus)

Icon.register({
    hearts:{
        width:24,
        height:24,
        raw:'<path id="like" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"/>'
    }
})

Vue.use(moment)
Vue.use(CommentGrid)

export default {
    data(){
        return{
          likes : '',
          title : "",
          disable : true,
          acitve:'none',
          image:"",
          imageUrl:"",
          apiBase: process.env.VUE_APP_FIRE_KEY,
          fbURL: process.env.VUE_APP_DATABASE_URL,
          disquisAPI : process.env.VUE_APP_DISQUS
        }
    },
components:{
    Top,
    Bottom,
    'v-icon':Icon
    
},
methods:{
dummy(){
    alert('DummyFunction')
},
onPickFile(){
      this.$refs.authorAvatar.click()
    },
    onFilePicked(event){
      const files = event.target.files
      let filename = files[0].name
      if(filename.lastIndexOf('.')<=0){
        return alert('Please add a valid file')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load',()=>{
        this.imageUrl = fileReader.result
       // return this.imageUrl
      })
     // console.log(this.imageUrl)
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
      //console.log(this.image);
      this.replaceAvatar()

    },
format(date){   
  let date1 =  date.toDate()
  moment(date1).utc().startOf('day').format();
  return moment(date1).format('DD MMMM YYYY')  
},
upVote(){
    let myNum = this.getLike
    myNum++
    this.$store.dispatch('blogs/updateLikes',{title:this.getUrl,likes:myNum})
    this.disable = false
},
replaceAvatar(){
    if(this.image){
        // console.log('Slika postoji'+this.image)
        // console.log('Slika URL : '+this.imageUrl)
        // console.log(this.getUrl+" , URL")
        this.$store.dispatch('blogs/replaceAvatar',{image :this.image , url:this.getUrl , author:this.author})
    }else{
        console.log('slika nije preuzeta')
    }
},
unPublishBlogPublish(value){
    if(this.published===true){
        value = false
    }else{
        value= true
    }
    //console.log('This is '+value)
    this.$store.dispatch('blogs/unPublishBlog',value)
}
},
beforeRouteEnter(to,from,next){
    const urlID  = to.params.id   
    store.dispatch('blogs/importBlogPost',urlID)
    next();    
}
,
beforeDestroy(){
        // this.$refs.disqus.reset(this)

}
,
computed:{
    user(){
        return this.$store.getters.user
    },
    blog(){
        return this.$store.getters['blogs/getBlog']
    },
    getLike(){
        return this.$store.getters['blogs/getLikes']
    },getUrl(){
        return this.$store.getters['blogs/getUrl']
    },
    avatar(){
        return this.$store.getters['blogs/getAvatar']
    },
    author(){
        return this.$store.getters['blogs/getAuthor']
    },
    published(){
        return this.$store.getters['blogs/getPublished']
    }
    
    

},
watch:{
    urlWatch(url){
        url = this.getUrl
        // this.$refs.disqus.reset()
        if(url){
            
         return 'localhost:8080/blogs/'+url
        }
    }
}


}
</script>

<style>
#like{
    fill: red;
}
.like{
    fill: red;
}
#blogs{
    min-height: 50vh;
}
#btext img{
    width: 100%;
}
.author{
    height: 50px;
    width: 50px;
    border-radius: 50%;
}
.none{
    pointer-events: none;
}
</style>
