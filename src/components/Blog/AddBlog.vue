<template>
  <div>
    <Top title="Add new blog"/>
    <div class="container">
      <form class="p-5">
        <input class="form-control" v-model="title" placeholder="Give your blog title">
        <label v-if="title">URL : {{this.escapeRegExp(this.title)}}</label>
        <input class="form-control mt-4" v-model="author" placeholder="Give your blog author">
        <input class="form-control mt-4" v-model="authorImg" placeholder="Give your author portfolio image (*optional)">
        <input
          class="form-control mt-4 mb-4"
          v-model="imgUrl"
          placeholder="Give your blog image link"
        >
        <ckeditor :editor="editor" :config="editorConfig" v-model="editorData"></ckeditor>
        <div>
          <p class="mt-3">Publish
            <label class="switch">
              <input type="checkbox" v-model="switchw" @change="changeIn">
              <span class="slider round"></span>
            </label>
          </p>

          Date :<datetime v-model="date"></datetime>
        </div>
      </form>
      <div class="row no-gutters justify-content-center">
          <Button text="Add" :onClick="postBlog"/>
      </div>
    </div>
    <Bottom/>
  </div>
</template>

<script>
import Button from "@/components/Common/Button";
import Top from "@/components/Common/Top";
import Bottom from "@/components/Common/Bottom";
import Vue from "vue";
import Editor from "@ckeditor/ckeditor5-vue";
Vue.use(Editor);
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "vue-datetime/dist/vue-datetime.css";
import { Datetime } from "vue-datetime";
Vue.use(Datetime);
import moment from "moment";
Vue.use(moment);
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData:
        "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
      editorConfig: {       
     
        // The configuration of the editor.
      },
      title: "",
      author: "",
      imgUrl: "",
      date: "",
      isPublsihed: "",
      switchw:false,
      authorImg:"" //portfolio slika za authora
    };
  },
  components: {
    Top,
    ckeditor: Editor.component,
    Bottom,
    datetime: Datetime,
    Button
  },
  methods:{

    changeIn(event){
      //console.log(event)
      console.log(this.switchw)
      return this.switchw
    },
      postBlog(){        
         var date1 = moment(this.date).utc().startOf('day').format();        
        var date2 = (new Date(date1))       
        this.$store.dispatch('blogs/addNewBlog',{ 
            title : this.title,//
            author:this.author,//
            url : this.escapeRegExp(this.title),//
            time : date2,//
            imgURL : this.imgUrl,//
            likes : 0,//
            isPublished: this.switchw,//
            text : this.editorData,//
            description : this.authorImg? this.authorImg : 'http://www.inyogo.com/img/avatar/generic-avatar.png'})//
            this.$router.push('/blogs')
      },
      escapeRegExp(str) {
        var stringReg =  str.toLowerCase().replace(/\s/g, "-");
        var str2 = stringReg.toLowerCase().replace('?','')
        var str3 = str2.toLowerCase().replace(',','')
        var str4 = str3.toLowerCase().replace('.','')
        return str4
        
}
  }
};
</script>

<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
