<template>
  <div>
    <Top title="Edit blog"/>
    <div class="container">
      <h1 class="mt-3">{{blog.title}}</h1>
      <h4 v-if="blog.title">URL :localhost:8080/blogs/{{escapeRegExp(blog.title)}}</h4>
      <div class="mb-5 mt-5">
        <label class="text-left">Change your blog's title</label>
        <input type="text" v-model="blog.title" class="form-control">
      </div>
      <ckeditor :editor="editor" :config="editorConfig" v-model="blog.text"></ckeditor>
      <Button text="Submit changes" :onClick="editThisBlog"/>
    </div>
    <Bottom class="mt-3"/>
  </div>
</template>

<script>
import Vue from "vue";
import { store } from "@/store/index.js";
import Top from "@/components/Common/Top.vue";
import Bottom from "@/components/Common/Bottom";
import Button from "@/components/Common/Button";
import Editor from "@ckeditor/ckeditor5-vue";
Vue.use(Editor);
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData:
        "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
      editorConfig: {
        // The configuration of the editor.
      }
    };
  },
  components: {
    Top,
    Bottom,
    Button
  },
  beforeRouteEnter(to, from, next) {
    const urlID = to.params.id;
    store.dispatch("blogs/importBlogPost", urlID);
    next();
  },
  computed: {
    blog() {
      return this.$store.getters["blogs/getBlog"];
    }
  },
  methods: {
    escapeRegExp(str) {
      var stringReg = str.toLowerCase().replace(/\s/g, "-");
      var str2 = stringReg.toLowerCase().replace("?", "");
      var str3 = str2.toLowerCase().replace(",", "");
      var str4 = str3.toLowerCase().replace(".", "");
      return str4;
    },
    editThisBlog() {
    //   this.$router.push("/blogs/"+escapeRegExp(blog.title));
    console.log(this.blog.title)
    console.log(this.blog.text)
    console.log('/blogs/'+this.escapeRegExp(this.blog.title))
    this.$store.dispatch('blogs/editBlog',{
        title:this.blog.title,
        url:this.escapeRegExp(this.blog.title),
        text:this.blog.text
    })
      this.$router.push("/blogs/"+this.escapeRegExp(this.blog.title));

    }
  }
};
</script>

<style>
</style>
