<template>
<div>  
    <div>
        <!-- <p style="display:none;">{{takeTitle(b.url)}}</p> :class="[disable ? '' : acitve]"-->
     <Top :title="blog.title"/>
     <div id="blogs"  class="container">
          <div class="row no-gutters justify-content-between p-3">
              <!-- <v-icon name="comment" style="width:24px;height:24px;"/>  @click="onPickFile" funkcija zaa promjenu avatara-->
      <div class="col-md-4 col-xs-12 pt-2">        
           
             <a @click="likedDisliked" v-if="meAuthor.liked">  <v-icon name="hearts" :class="[isLiked ?'like':'']" style="width:24px;height:24px;" /> </a> {{getLike}}   </div>
      <div class="col-md-4 col-xs-12"> <a><img class="author" :src="avatar" alt="" v-if="avatar"></a> <input
        type="file"
        style="display:none"
        ref="authorAvatar"
        accept="image/*"
        @change="onFilePicked"
      ><span v-if="blog.author === meAuthor.name"> You</span>
      <span v-else> {{blog.author}}</span>
      
      
      </div>
      <div class="col-md-4 col-xs-12 pr-5 pt-3" v-if="blog.time">Published : {{ format(blog.time) }}</div>
     </div>
     <div class="row no-gutters justify-content-between p-3">
        <div class="col-md-4">
         
             <router-link :to="/blogs/+getUrl+'/edit'" style="color:#8A8888;text-decoration:none;"><v-icon style="width:70px;height:70px;" name="edit" v-if="user"/></router-link>
            
      </div>
        <div class="col-md-4">
         <a title="Delete blog" href="#"><v-icon style="width:70px;height:70px;" data-toggle="modal" data-target="#exampleModal" name="delete" v-if="user"/></a>
        <Popup name="Deleting Blog" primaryButton="Delete" closeButton="Close" :primaryFunction="this.true" :closeFunction='this.false' :description="'Do you really want to delete this blog '+ '&quot;' + blog.title +'&quot;'"  />

      </div>
        <div class="col-md-4">
          <div v-if="user&&blog.isPublished">
        Blog is published, click this to : <a href="#" @click="unPublishBlogPublish">Deactivate</a>
      </div>
      <div v-else-if="user">Blog is unpublished, click this to : <a href="#" @click="unPublishBlogPublish">Activate</a></div>
      </div>
        
     </div>
         <div class="col-md-12 col-xs-12">
             <img class="img-fluid" :src="blog.imgURL" alt="">
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
            <vue-disqus ref="disqus" shortname="localhost-hl7314xvql" :title="blog.title" :identifier="myPageId" :url="blog.url" language="en" :api_key="disquisAPI"></vue-disqus>
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
import Popup from "@/components/Common/Popup"

Vue.use(VueDisqus)

Icon.register({
    hearts:{
        width:24,
        height:24,
        raw:'<path id="like" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"/>'
    }
})
Icon.register({
    delete:{
        width:100,
        height:100,
        raw:'<path d="M25,3C12.87,3,3,12.87,3,25s9.87,22,22,22s22-9.87,22-22S37.13,3,25,3z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42 C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29 c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29 c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"/>'
    }
})
Icon.register({
    edit:{
        width:100,
        height:100,
        raw:'<g id="surface1"><path style=" " d="M 46.574219 3.425781 C 45.625 2.476563 44.378906 2 43.132813 2 C 41.886719 2 40.640625 2.476563 39.691406 3.425781 C 39.691406 3.425781 39.621094 3.492188 39.53125 3.585938 C 39.523438 3.59375 39.511719 3.597656 39.503906 3.605469 L 4.300781 38.804688 C 4.179688 38.929688 4.089844 39.082031 4.042969 39.253906 L 2.035156 46.742188 C 1.941406 47.085938 2.039063 47.453125 2.292969 47.707031 C 2.484375 47.898438 2.738281 48 3 48 C 3.085938 48 3.171875 47.988281 3.257813 47.964844 L 10.746094 45.957031 C 10.917969 45.910156 11.070313 45.820313 11.195313 45.695313 L 46.394531 10.5 C 46.40625 10.488281 46.410156 10.472656 46.417969 10.460938 C 46.507813 10.371094 46.570313 10.308594 46.570313 10.308594 C 48.476563 8.40625 48.476563 5.324219 46.574219 3.425781 Z M 45.160156 4.839844 C 46.277344 5.957031 46.277344 7.777344 45.160156 8.894531 C 44.828125 9.222656 44.546875 9.507813 44.304688 9.75 L 40.25 5.695313 C 40.710938 5.234375 41.105469 4.839844 41.105469 4.839844 C 41.644531 4.296875 42.367188 4 43.132813 4 C 43.898438 4 44.617188 4.300781 45.160156 4.839844 Z M 5.605469 41.152344 L 8.847656 44.394531 L 4.414063 45.585938 Z "/></g>'
    }
})

Vue.use(moment)
Vue.use(CommentGrid)

export default {
    data(){
        return{
          dataURL : '',  
          likes : '',
          title : "",
          disable : false,
          acitve:'none',
          image:"",
          imageUrl:"",
          apiBase: process.env.VUE_APP_FIRE_KEY,
          fbURL: process.env.VUE_APP_DATABASE_URL,
          disquisAPI : process.env.VUE_APP_DISQUS,
          myPageId: this.getID,
        }
    },
components:{
    Top,
    Bottom,
    'v-icon':Icon,
    Popup
    
},
beforeRouteEnter(to,from,next){
    const urlID  = to.params.id   
    
    
    store.dispatch('blogs/importBlogPost',urlID)
    next();    
}
,
mounted(){
//    this.dataURL = this.getUrl
        // this.$refs.disqus.reset(this)
    // console.log(this.dataURL)
        //    console.log(this.getUrl)
    // this.disable = this.meAuthor.liked.includes(this.getUrl)
    // console.log(this.meAuthor.liked.includes(this.getUrl))
    // console.log(this.disable)
    // this.disable = this.meAuthor.liked.includes(this.getID)
     this.meAuthor.liked.includes(this.getID) ? this.disable = true : this.disable = false;
      //console.log('MOJ BLOG : '+ this.getID)
},
beforeDestroy(){
    //this.$store.dispatch('blogs/importBlogPost',null)
},
methods:{
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
deleteBlog(){
   this.$store.dispatch('blogs/deleteBlog')
  this.$router.push('/blogs')
       console.log('BRISANJE')
        
   //this.$modal.show('HELLO WORLD')

},
unPublishBlogPublish(value){
    if(this.published===true){
        value = false
    }else{
        value= true
    }
    //console.log('This is '+value)
    this.$store.dispatch('blogs/unPublishBlog',value)
},
likedDisliked(){

    this.$store.dispatch('likedDisliked',{id:this.getID,count:this.getLike})
},
true(){
    this.deleteBlog()
},
false(){
    console.log('Nista')
}
}
,
computed:{
    user(){
        return this.$store.getters.user
    },
    blog(){
        return this.$store.getters['blogs/getBlog']
    },
    getID(){
        return this.$store.getters['blogs/getId']
    }
    ,
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
    },
    email(){
        return this.$store.getters.getEmail
    },
    meAuthor(){
        return this.$store.getters.singleAuthor
    },
    isLiked(){     
         return this.meAuthor.liked.includes(this.getID) ? true : false    
    }

    
    

},
watch:{
    urlWatch(url){
        url = 'localhost:8080/blogs/'+this.getUrl     
        return url
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
