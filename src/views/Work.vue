<template>
  <div>
    <Top title="check out what i can do"/>
    <div class="container">
      <div class="row no-gutters justify-content-between">
        <div class="col-md-6 mt-2">
          <ul class="filters">
            <li>
              <a class="filter-pointer" @click="filter('All')">ALL</a>
            </li>
            <li>
              <a class="filter-pointer" @click="filter('PRINT')">PRINT</a>
            </li>
            <li>
              <a class="filter-pointer"  @click="filter('PHOTOGRAPHY')">PHOTOGRAPHY</a>
            </li>
            <li>
              <a class="filter-pointer" @click="filter('WEB')">WEB</a>
            </li>
            <li>
              <a class="filter-pointer" @click="filter('APPLICATIONS')">APPLICATIONS</a>
            </li>
          </ul>
        </div>
        <div class="col-md-6">
            <a href="">GRID</a>
            <a href="">List</a>
        </div>
      </div>
      <div v-if="user" class="row no-gutters">
          <Button text="Insert in portfolio" :onClick="fireInsert"/>
      </div>
      <div class="row no-gutters mt-1">
          <div class="grid-view">
              <div class="image-block pr-3 pt-3" v-for="port in portfolios" :key="port.index">
                <div>
                 <!-- <h5>Category : {{port.category}} </h5> -->
                 <!-- <p>{{port.text}}</p> -->
                  <img :src="port.url" alt="">
                </div>
              </div>
          </div>
      </div>
    </div>
    <Bottom/>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import Top from "@/components/Top.vue";
import Bottom from "@/components/Bottom.vue";
import firebase from "firebase"
export default {
  name: "Work",
  components: {
    Top,
    Bottom,
    Button
  },
  data(){
      return{
        portfolios : []
      }
  },
  created(){
     this.getArray()
  },
  firestore(){
    return{
      ports : firebase.firestore().collection('portfolio').limit(5)
    }
  },
  methods:{
      fireInsert(){
            this.$router.push('/work/edit')
       },
       getArray(){
        firebase.firestore().collection("portfolio").onSnapshot((snapshot)=>{
        snapshot.docs.forEach(doc =>{
        this.portfolios.push(doc.data())     

      })
    })
       },
       filter(str){
        //  console.log(str)
        this.portfolios= []
        if(str.toUpperCase() == "ALL"){
          this.getArray();
        }
         firebase.firestore().collection("portfolio").where("category","==",str).onSnapshot((snapshot)=>{
           snapshot.docs.forEach(doc =>{
           
             this.portfolios.push(doc.data())
             //console.log(this.portfolios)
           })
       })
  }
  }
  ,
  computed: {
    array(){
 firebase.firestore().collection("portfolio").onSnapshot((snapshot)=>{
        snapshot.docs.forEach(doc =>{
        this.portfolios.push(doc.data())     

      })
    })
    },
    user() {
      return this.$store.getters.user;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        // this.$router.push("/admin");
      }
    }
  }
};
</script>

<style scoped>
.filters a {
  color: #8a8888;  
}
.filters li::after{
 content: "\00a0 / \00a0";
}
.filters li:last-child::after{
    content: "";
}
.filter-pointer{
  cursor: pointer;
}
.grid-view{
  display:grid;
  grid-template-columns:auto auto auto;
  padding-bottom:15px;
}
</style>
