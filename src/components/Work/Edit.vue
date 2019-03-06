<template>
    <div>
        <Top title="ADD NEW PORTFOLIO"/>
        <div class="container form-group mt-3 pt-3">
            
        <input type="text" class="form-control mb-3" v-model="title" placeholder="Enter title">
        <input type="text"  class="form-control mb-3" v-model="text" placeholder="Enter text">
        <input type="text" class="form-control mb-3" v-model="url" placeholder="Enter url">
        <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle mb-5"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Choose category</button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button
                  class="dropdown-item"
                  type="button"
                  @click="setCategory('print')"
                >PRINT</button>
                <button
                  class="dropdown-item"
                  type="button"
                  @click="setCategory('PHOTOGRAPHY')"
                >PHOTOGRAPHY</button>
                <button
                  class="dropdown-item"
                  type="button"
                  @click="setCategory('WEB')"
                >WEB</button>
                <button
                  class="dropdown-item"
                  type="button"
                  @click="setCategory('APPLICATIONS')"
                >APPLICATIONS</button>
              </div>
            </div>
            <Button text="Add new portfolio" :onClick="fireInsert"/>
</div>
    </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Button from "@/components/Button.vue";
import firebase from "firebase"
export default {
    data(){
        return{
            title:"",
            text:"",
            url:"",
            category:""
        }
    },
components:{
    Top,
    Button
},
methods:{
    fireInsert(){
       firebase.firestore().collection("portfolio").add({
           name:this.title,
           text:this.text,
           url:this.url,
           category:this.category
       })
       this.$router.push("/work")
    },
    setCategory(str){
        console.log(str)
        this.category = str.toUpperCase();
        console.log(this.category)
    }
}
}
</script>

<style>
.form-control{
    margin:0 auto;
    width: 500px;
}
</style>
