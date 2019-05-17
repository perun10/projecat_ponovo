<template>
  <div>
    <Top title="Blogs"/>
    <div class="container">
      <div class="row no-gutters justify-content-between">
        
      <ul class="categories float-left">
        <li><a href="#" :class="[ category=='all' ? 'activeCategory':'']" @click="pickCategory('all')">All</a></li>
        <li><a href="#" :class="[ category=='tech' ? 'activeCategory':'']" @click="pickCategory('tech')">Tech</a></li>
        <li><a href="#" :class="[ category=='social' ? 'activeCategory':'']" @click="pickCategory('social')">Social</a></li>
        <li><a href="#" :class="[ category=='travel' ? 'activeCategory':'']" @click="pickCategory('travel')">Travel</a></li>
        <li><a href="#" :class="[ category=='environment' ? 'activeCategory':'']" @click="pickCategory('environment')">Environment</a></li>
        <li><a href="#" :class="[ category=='gaming' ? 'activeCategory':'']" @click="pickCategory('gaming')">Gaming</a></li>
      </ul>
      <a class="float-right" @click="sortByDate">
        <svg
          class="sort"
          xmlns:dc="http://purl.org/dc/elements/1.1/"
          xmlns:cc="http://creativecommons.org/ns#"
          xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          xmlns:svg="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
          xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
          width="16px"
          height="16px"
          viewBox="0 0 16 16"
          id="svg2"
          version="1.1"
          inkscape:version="0.91 r13725"
          sodipodi:docname="160.svg"
        >
          <defs id="defs4">
            <pattern
              y="0"
              x="0"
              height="6"
              width="6"
              patternUnits="userSpaceOnUse"
              id="EMFhbasepattern"
            ></pattern>
            <pattern
              y="0"
              x="0"
              height="6"
              width="6"
              patternUnits="userSpaceOnUse"
              id="EMFhbasepattern-4"
            ></pattern>
          </defs>
          <sodipodi:namedview
            id="base"
            pagecolor="#ffffff"
            borderColor="#666666"
            borderopacity="1.0"
            inkscape:pageopacity="0.0"
            inkscape:pageshadow="2"
            inkscape:zoom="32"
            inkscape:cx="9.5739202"
            inkscape:cy="8.2968932"
            inkscape:document-units="px"
            inkscape:current-layer="g3877"
            showgrid="true"
            inkscape:window-width="1366"
            inkscape:window-height="715"
            inkscape:window-x="-8"
            inkscape:window-y="-8"
            inkscape:window-maximized="1"
            units="px"
          >
            <inkscape:grid type="xygrid" id="grid3360"></inkscape:grid>
          </sodipodi:namedview>

          <g
            inkscape:label="Layer 1"
            inkscape:groupmode="layer"
            id="layer1"
            transform="translate(0,-1036.3622)"
          >
            <g transform="translate(-2.5265734,1.0312727)" id="g3877">
              <path
                style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
                d="M 2.0058594 4.0019531 L 2.0058594 5.0019531 L 3.0058594 5.0019531 L 3.0058594 4.0019531 L 2.0058594 4.0019531 z M 4.0058594 4.0039062 L 4.0058594 5.0039062 L 13.005859 5.0039062 L 13.005859 4.0039062 L 4.0058594 4.0039062 z M 12.505859 5.7226562 L 10.605469 8.0039062 L 11.673828 8.0039062 L 12.005859 8.0039062 L 12.005859 11.003906 L 13.005859 11.003906 L 13.005859 8.0039062 L 14.412109 8.0039062 L 12.505859 5.7226562 z M 2.0058594 7.0019531 L 2.0058594 8.0019531 L 3.0058594 8.0019531 L 3.0058594 7.0019531 L 2.0058594 7.0019531 z M 4.0058594 7.0039062 L 4.0058594 8.0039062 L 10.005859 8.0039062 L 10.005859 7.0039062 L 4.0058594 7.0039062 z M 2.0058594 10.001953 L 2.0058594 11.001953 L 3.0058594 11.001953 L 3.0058594 10.001953 L 2.0058594 10.001953 z M 4.0058594 10.003906 L 4.0058594 11.003906 L 9.0058594 11.003906 L 9.0058594 10.003906 L 4.0058594 10.003906 z "
                transform="translate(2.5265734,1035.3309)"
                id="path4969"
              ></path>
            </g>
          </g>
        </svg>
      </a>
    
      </div>
      <div class="row no-gutters" v-if="author && user">
       
      <Button text="Add new blog" :onClick="goToNew"/>
        
      </div>
    </div>
 
    <div id="blog" class="container">
     
      <div v-for="blg in blogs" :key="blg.index">
        <div
          class="box-blog mt-5"
          v-if="user||blg.isPublished"
          :class="[!blg.isPublished ? 'unPublished':'']"
        >
          <div class="row no-gutters p-3">
            <div class="col-md-4 col-xs-12">
              <img style="object-fit:cover;height:300px;width:100%;border-radius:4%;" :src="blg.imgURL">
            </div>

            <div class="col-md-8 col-xs-12 p-3">
              <div class="text-left">
                <router-link :to="/blogs/+blg.url">
                <p style="background-color:#2ECC71;width:90px;border-radius:47%;color:white;text-align:center;padding:5px;">{{blg.category}}</p>
                  <h3>{{blg.title}}</h3>
                </router-link>
              </div>

              <div class="row no-gutters justify-content center">
                <div
                  id="description"
                  class="text-left wrap-text"
                  v-html="blg.text"
                  style="display:inline;"
                ></div>
                <!-- <div v-for="b in blog.text" :key="b.index">{{b.split('p')[0]}}</div> -->
              </div>

              <div class="row no-gutters justify-content-between mt-5">
                <label class="text-left" v-if="blg.isPublished">{{format(blg.time.toDate())}}</label>
                <label class="text-left" v-else>This blog unpublished</label>
                <label class="text-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path id="like" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path>
                  </svg>
                  {{blg.likes}}
                </label>
              </div>
              <!-- HERE COLMN Ends -->
            </div>
          </div>
        </div>
      </div>
      
      <div class="row no-gutters justify-content-center mt-5 mb-5" v-if="this.size!=0">
        <a @click="loadMore" >
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    <Bottom class="mt-5"/>
  </div>
</template>

<script>
import Top from "@/components/Common/Top.vue";
import Bottom from "@/components/Common/Bottom.vue";
import Button from "@/components/Common/Button.vue";
import { store } from "@/store/index.js";
import axios from "axios"
import BlogPost from "@/components/Blog/BlogPost.vue";
import AuthService from '@/services/AuthService'

// import firebase from "firebase"
import Vue from "vue";
import moment from "moment";
Vue.use(moment);
export default {
  data() {
    return {
      category:'all',
      sortBy: "desc",
      aLink:
        ' <router-link style="display:inline;" :to="/blogs/+blg.url">Read more</router-link>',
        mgr : new AuthService()
    };
  },
  components: {
    Top,
    Bottom,
    BlogPost,
    Button
  },
  created() {
    this.$store.dispatch("blogs/importBlogSize");
    this.$store.dispatch("blogs/importBlogs",''); // OVDJE NA POCETKU UVIJEK IDE IMPORTA - ALL BLOGS
  },
  computed: {
    size(){
      return this.$store.getters["blogs/getSize"]
    },
    blogs() {
      return this.$store.getters["blogs/getBlogs"];
    },
    user() {
      return this.$store.getters.user;
    },
    author(){
      return this.$store.getters.singleAuthor
    }
  },
  methods: {
    loadMore(){    
    // this.$store.dispatch("blogs/importBlogs",this.category == 'all' ? '' : this.category); // OVDJE NA POCETKU UVIJEK IDE IMPORTA - ALL BLOG
      this.$store.dispatch("blogs/loadMore",this.category == 'all' ? '' : this.category)
    },
    forwardLink(value) {},
    format(date) {
      moment(date)
        .utc()
        .startOf("day")
        .format();
      return moment(date).format("DD MMMM YYYY");
    },
    sortByDate() {     
      if (this.sortBy.toLowerCase() === "asc") {
       this.sortBy = "desc";
      //   this.$store.dispatch("blogs/importBlogs", this.sortBy);
      } else {
         this.sortBy = "asc";
        //this.$store.dispatch("blogs/importBlogs", this.sortBy);
       }      
      // this.$store.dispatch("importBlogs", this.sorting);
    },
    pickCategory(categoryValue){      
      this.$store.dispatch("blogs/importBlogSize",categoryValue == 'all'? '' : categoryValue );
      this.$store.dispatch("blogs/importBlogs",categoryValue == 'all'? '' : categoryValue)
     
      this.category = categoryValue
    },
    goToNew(){
      // var idtoken = 0
      // this.mgr.getAcessToken().then(token => {
        
      //   var config = {
      //      headers: {'Authorization-Code': 'Bearer ' + token}
      //    };
   
      //      // axios.get('https://api.github.com/users/codeheaven-io', config);
      //      axios.post('/save', { firstName: 'Marlon' }, config);
      // })
      // console.log(idtoken)
      //this.$router.push('/blogs/new')
      axios.interceptors.response.use(undefined, function (err) {
    return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            serviceRefreshLogin(
                this.mgr.renewToken(),
                success => { 
                        setTokens(success.access_token, success.refresh_token) 
                        err.config.__isRetryRequest = true
                        err.config.headers.Authorization = 'Bearer ' + this.mgr.getAcessToken();
                        axios(err.config).then(resolve, reject);
                },
                error => { 
                    console.log('Refresh login error: ', error);
                    reject(error); 
                }
            );
        }
        throw err;
    });
});
  }
  }
};
</script>

<style>
#like:hover {
  fill: red;
}
.ultimate {
  fill: purple;
}
#blog {
  min-height: 50vh;
}
.sort {
  height: 30px;
  width: 30px;
}
.box-blog {
  height: auto;
}
#description p:first-child {
  display: inline;
}
#description > * {
  display: none;
}
#inactive {
  background-color: gray;
}
.published {
  background-color: green;
}
.unPublished > * {
  color: white;
  background-color: indianred;
}
.unPublished a {
  color: white !important;
}
.unPublished a:hover {
  color: gray !important;
}
.wrap-text {
  min-height: 35%;
}
a {
  color: #8a8888;
  text-decoration: none;
}
a:hover {
  color: gray;
  text-decoration: none;
}
.categories li > a{
  margin-right:10px;
}
.activeCategory{
  color:#2ECC71 !important;
  pointer-events: none;
}
</style>
