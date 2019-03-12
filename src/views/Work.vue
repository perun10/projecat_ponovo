<template>
  <div>    
    <Top title="check out what i can do"/>     
    <div class="container">
      <div class="row no-gutters justify-content-between">
        <div class="col-md-6 text-left">
          <ul class="filters" style="padding-inline-start:0;">
            <li>
              <a class="filter-pointer" @click="filter('All')">ALL</a>
            </li>
            <li>
              <a class="filter-pointer" @click="filter('PRINT')">PRINT</a>
            </li>
            <li>
              <a class="filter-pointer" @click="filter('PHOTOGRAPHY')">PHOTOGRAPHY</a>
            </li>
            <li>
              <a class="filter-pointer" @click="filter('WEB')">WEB</a>
            </li>
            <li>
              <a class="filter-pointer" @click="filter('APPLICATIONS')">APPLICATIONS</a>
            </li>
          </ul>
        </div>
        <div class="col-md-6 text-right">
          <a href="#" class="svgLinks" @click="switchView('grid')">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="15" height="15" viewBox="0 0 15 15">
  <defs>
    
  </defs>
  <path d="M8.967,15.000 L8.967,8.905 L15.000,8.905 L15.000,15.000 L8.967,15.000 ZM8.946,0.000 L15.000,0.000 L15.000,6.012 L8.946,6.012 L8.946,0.000 ZM0.000,0.000 L6.033,0.000 L6.033,5.929 L0.000,5.929 L0.000,0.000 ZM6.012,15.000 L0.000,15.000 L0.000,8.905 L6.012,8.905 L6.012,15.000 Z" :class="[storeCookie ? 'cls-hovered' : 'cls-1']" />

</svg>
            
          </a>
          <a href="#" class="svgLinks" @click="switchView('list')" >
          <span class="list-layout">  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="15" height="15.031" viewBox="0 0 15 15.031">
  <defs>    
  </defs>
  <g>
    <rect y="12.031" width="15" height="3" :class="[!storeCookie ? 'cls-hovered' : 'cls-1']"/> 
    <rect y="6" width="15" height="3.031" :class="[!storeCookie ? 'cls-hovered' : 'cls-1']" />
    <rect width="15" height="3.031" :class="[!storeCookie ? 'cls-hovered' : 'cls-1']"/>
  </g>
</svg></span>
          </a>
        </div>
      </div>
      <div v-if="user" class="row no-gutters">
        <Button text="Insert in portfolio" :onClick="fireInsert"/>
      </div>
      <div class="row no-gutters mt-1">
          <div :class="[storeCookie? activeClass : secondClass]">
          <div class="image-block pr-3 pt-3" v-for="port in portfolios" :key="port.index">
            <div>            
             <a class="onHover" href="#"> <span></span><img :src="port.url" alt> </a> 
            </div>
          </div>
          
        </div>
      </div>
      <div class="row no-gutters no-gutters mb-3">
            <Button style="margin:0 auto;" id="loadMore" text="Load more" v-if="!this.size==0" :onClick="loadMore"/>
          </div>
    </div>
    <Bottom/>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Top from "@/components/Top.vue";
import Bottom from "@/components/Bottom.vue";
import firebase from "firebase";

export default {
  name: "Work",
  components: {
    Top,
    Bottom,
    Button
  },
  data() {
    return {
      activeClass: 'grid-view',
      secondClass:'list-view',
      portfolios: [],
      lastVisible: "",
      size: 0,
    };
  },
  mounted() {   
    this.$firestore.ports.onSnapshot(snapshot => {
      this.size = snapshot.docs.length;
    });
    this.getArray();   
  },
  firestore(){
    return {
      ports: firebase.firestore().collection("portfolio")
    };
  },
  methods: {     
    loadMore() {
      this.$Progress.start()
      this.$firestore.ports
        .startAfter(this.lastVisible)
        .limit(3)
        .onSnapshot(snapshot => {
          if (snapshot.docs.length > 0) {
            this.lastVisible = snapshot.docs[snapshot.docs.length - 1];
            snapshot.docs.forEach(doc => {
              this.$Progress.finish() 
              this.portfolios.push(doc.data());
              this.size--;              
            }); 
          }         
        });
    },
    fireInsert() {
      this.$router.push("/work/edit");
    },
    getArray() {
      this.$firestore.ports.limit(3).onSnapshot(snapshot => {
        this.lastVisible = snapshot.docs[snapshot.docs.length - 1];        
        snapshot.docs.forEach(doc => {          
          this.portfolios.push(doc.data());
          this.size--;         
        });
      });
    },
    filter(category) {      
      this.portfolios = [];
      if (category.toUpperCase() == "ALL") {
        this.getArray();    
      }
      firebase
        .firestore()
        .collection("portfolio")
        .where("category", "==", category)
        .onSnapshot(snapshot => {               
          snapshot.docs.forEach(doc => {
            this.portfolios.push(doc.data());         
          });
        });
    },
     switchView(viewType){
      if(viewType=='grid'){    
    this.$store.dispatch('switchView',true)
     }else if(viewType=='list'){     
    this.$store.dispatch('switchView',false)
     }
    }
  },
  computed: {    
    user() {
      return this.$store.getters.user;
    },
    storeCookie(){      
      if(this.$store.getters.viewSwitch.toString().toUpperCase() == "TRUE" ){
        return true
      }else{
        return false
      }      
    },
      color(){
        return this.$store.getters.color
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
.cls-1 {
  fill: #737373;
}

.list-layout svg:hover .cls-1 , .cls-1:hover{
  fill:#2ECC71;
}
.cls-hovered {
  fill:#2ECC71;
}
.cls-1:focus {
  fill:#2ECC71;
}
.svgLinks{
  margin-left:10px;
}
.filters a {
  color: #8a8888;
}
.filters li::after {
  content: "\00a0 / \00a0";
}
.filters li:last-child::after {
  content: "";
}
.filter-pointer {
  cursor: pointer;
}
.grid-view {
  display: grid;
  grid-template-columns: auto auto auto;
  padding-bottom: 15px;
}
.list-view {
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto auto auto;
  padding-bottom: 15px;
}
.onHover:hover > img{
  opacity: 0.4;
}
 
</style>
