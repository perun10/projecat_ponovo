<template>
  <div class="about">
    <Top :title="$t('about')"/>
    <main>
      <section>
        <div class="container">
          
           
           <div v-if="user" class="row no-gutters justify-content-center mt-5 mb-3">
             <ckeditor :editor="editor" :config="editorConfig" v-model="editorData"></ckeditor>
        
           </div>  <Button v-if="user" text="Apply text" :onClick="textReplacement"/>
           <div class="row no-gutters justify-content-center mt-5 mb-3">
               

             <div class="col-md-5 col-sm-12 pl-0 pt-0">
               <img src="@/assets/images/business.svg" alt="Biznis" class="img-fluid">
             </div>
             
             <div class="col-md-7 col-sm-12  pl-3 text-left">
             
              
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                 Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. 
                 Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. 
                 Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p>
               <p>
                 Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. 
                 Pellentesque pellentesque arcu a elit congue lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. 
                 Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               </p>
              

             </div>
             
           </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row no-gutters justify-content-center">
            <div class="col-md-6 col-sm-12 col-12 pr-2 text-left">
              <h3>MISSION STATEMENT</h3>
              <div v-html="appliedText"></div>
            </div>
            <div class="col-md-6 col-sm-12 pl-2 text-left">
              <h3>FUN FACTS</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. 
                Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. 
                Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. 
                Pellentesque pellentesque arcu a elit congue lacinia.</p>
            </div>
          </div>
        </div>
      </section>
      <Tabs/>
    </main>
    <Bottom/>
  </div>
</template>
<script>
import Top from "@/components/Common/Top.vue";
import firebase from "firebase"
import Bottom from "@/components/Common/Bottom.vue";
import Tabs from "@/components/About/Tabs.vue";
import Button from "@/components/Common/Button.vue";
import Vue from "vue"
import Editor from "@ckeditor/ckeditor5-vue"
Vue.use(Editor)
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// import Editor from '@tinymce/tinymce-vue';
// var Editor = require('@tinymce/tinymce-vue').default;
export default {
  
  data(){
    return{
    // editorKey: process.env.VUE_APP_TEXT_EDITOR_API,
    editorText:null,
    text : null,
    appliedText : null,
    editor: ClassicEditor,
                editorData: "<p>Test</p>",
                editorConfig: {
                    // The configuration of the editor.
                }
    }
  },
  created(){
    
    this.$firestore.text
   .get()
   .then((doc) =>{
     this.appliedText = doc.data().text          
    //console.log("IZ FIRESTORA : "+this.appliedText)
    this.editorData = this.appliedText
   
   }
   
   )
    
  },
  firestore(){
    return{
      text: firebase.firestore().collection('about').doc('UWpSHPiPrU47994aUdiR')
    }
  },
  methods:{
    textReplacement(){
     // console.log("FUNCTION")
      //console.log(this.editorData)
   
        this.$firestore.text.update({
        // position: new firebase.firestore.GeoPoint(parseFloat(this.latitude),parseFloat(this.longitud))
        text: this.editorData
      }
      )
  }
  },
  components:{
    Top,
    Bottom,
    Tabs,
    "ckeditor":Editor.component,
    Button    
  },
  computed:{
    user(){
      return this.$store.getters.user
    }
  }
}
</script>
<style >
p:hover{
  content: "EDIT"
}
 #tabs{
   background-color:#efefef;
   height: 12.5rem;
 }
 
 .hovertab:hover{
   background-color: gray;
 }
</style>
