<template>
<<<<<<< HEAD
  <div>
    <Top title="check out what i can do"/>
=======
  <div>    
    <Top title="check out what i can do"/>     
>>>>>>> 1951d06ab0b844194f8c70635eab643cafd5cf2e
    <div class="container">
      <div class="row no-gutters justify-content-between">
        <div class="col-md-6 text-left">
          <ul class="filters" style="padding-inline-start:0;">
            <li>
<<<<<<< HEAD
              <a
                class="filter-pointer"
                :class="[isDisabled == 'All' ? 'active':'']"
                @click.prevent="filter('All')"
              >ALL</a>
            </li>
            <li>
              <a
                class="filter-pointer"
                :class="[isDisabled == 'PRINT' ? 'active':'']"
                 @click.prevent="filter('PRINT')"
              >PRINT</a>
            </li>
            <li>
              <a
                class="filter-pointer"
                :class="[isDisabled == 'PHOTOGRAPHY' ? 'active':'']"
                 @click.prevent="filter('PHOTOGRAPHY')"
              >PHOTOGRAPHY</a>
            </li>
            <li>
              <a
                class="filter-pointer"
                :class="[isDisabled == 'WEB' ? 'active':'']"
                 @click.prevent="filter('WEB')"
              >WEB</a>
            </li>
            <li>
              <a
                class="filter-pointer"
                :class="[isDisabled == 'APPLICATIONS' ? 'active':'']"
                 @click.prevent="filter('APPLICATIONS')"
              >APPLICATIONS</a>
=======
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
>>>>>>> 1951d06ab0b844194f8c70635eab643cafd5cf2e
            </li>
          </ul>
        </div>
        <div class="col-md-6 text-right">
          <a href="#" class="svgLinks" @click="switchView('grid')">
<<<<<<< HEAD
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid"
              width="15"
              height="15"
              viewBox="0 0 15 15"
            >
              <defs></defs>
              <path
                d="M8.967,15.000 L8.967,8.905 L15.000,8.905 L15.000,15.000 L8.967,15.000 ZM8.946,0.000 L15.000,0.000 L15.000,6.012 L8.946,6.012 L8.946,0.000 ZM0.000,0.000 L6.033,0.000 L6.033,5.929 L0.000,5.929 L0.000,0.000 ZM6.012,15.000 L0.000,15.000 L0.000,8.905 L6.012,8.905 L6.012,15.000 Z"
                :class="[storeCookie ==='grid' ? 'cls-hovered' : 'cls-1']"
              ></path>
            </svg>
          </a>
          <a href="#" class="svgLinks" @click="switchView('list')">
            <span class="list-layout">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
                width="15"
                height="15.031"
                viewBox="0 0 15 15.031"
              >
                <defs></defs>
                <g>
                  <rect
                    y="12.031"
                    width="15"
                    height="3"
                    :class="[storeCookie =='list' ? 'cls-hovered' : 'cls-1']"
                  ></rect>
                  <rect
                    y="6"
                    width="15"
                    height="3.031"
                    :class="[storeCookie =='list' ? 'cls-hovered' : 'cls-1']"
                  ></rect>
                  <rect
                    width="15"
                    height="3.031"
                    :class="[storeCookie  ==='list'? 'cls-hovered' : 'cls-1']"
                  ></rect>
                </g>
              </svg>
            </span>
=======
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
>>>>>>> 1951d06ab0b844194f8c70635eab643cafd5cf2e
          </a>
        </div>
      </div>
      <div v-if="user" class="row no-gutters">
        <Button text="Insert in portfolio" :onClick="fireInsert"/>
      </div>
      <div class="row no-gutters mt-1">
<<<<<<< HEAD
        <div :class="[storeCookie =='grid'? gridViewClass : listViewClass]">
          <div class="image-block pr-3 pt-3" v-for="port in portfolios" :key="port.index">
            <div class="divHover">
              <a class="onHover">
                <span class="hoverIMG" @click="fireSweetAlert(port.text)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="97"
                    height="97"
                    viewBox="0 0 97 97"
                  >
                    <defs>
                      <path
                        id="6b08a"
                        d="M698.5 1529c26.786 0 48.5 21.714 48.5 48.5s-21.714 48.5-48.5 48.5-48.5-21.714-48.5-48.5 21.714-48.5 48.5-48.5z"
                      ></path>
                      <path
                        id="6b08b"
                        d="M713.546 1568.358l-6.02 10.472a3.431 3.431 0 0 1-4.698 1.265l-1.49-.864 1.72-2.992a1.716 1.716 0 0 0 2.35-.632l4.3-7.48a1.731 1.731 0 0 0-.63-2.36l-5.958-3.455a1.715 1.715 0 0 0-2.35.632l-4.299 7.48a1.732 1.732 0 0 0 .63 2.36l-1.72 2.992-1.49-.864a3.464 3.464 0 0 1-1.259-4.72l6.02-10.472a3.431 3.431 0 0 1 4.699-1.264l8.936 5.182a3.464 3.464 0 0 1 1.26 4.72zM693.2 1586.48a1.732 1.732 0 0 1-.63-2.36l6.88-11.968a1.716 1.716 0 0 1 2.35-.633 1.732 1.732 0 0 1 .629 2.36l-6.88 11.969a1.716 1.716 0 0 1-2.35.632zm-1.26-4.72a1.716 1.716 0 0 0-2.348.633l-4.3 7.48a1.732 1.732 0 0 0 .63 2.36l5.957 3.455a1.716 1.716 0 0 0 2.35-.632l4.3-7.48a1.732 1.732 0 0 0-.63-2.36l1.72-2.993 1.49.864a3.464 3.464 0 0 1 1.258 4.72l-6.02 10.472a3.431 3.431 0 0 1-4.698 1.265l-8.937-5.183a3.464 3.464 0 0 1-1.259-4.72l6.02-10.472a3.431 3.431 0 0 1 4.698-1.264l1.49.863z"
                      ></path>
                    </defs>
                    <g>
                      <g transform="translate(-650 -1529)">
                        <use fill="#2ecc71" xlink:href="#6b08a"></use>
                      </g>
                      <g transform="translate(-650 -1529)">
                        <use fill="#fff" xlink:href="#6b08b"></use>
                      </g>
                    </g>
                  </svg>
                  <img id="image-generator" class="img-fluid" :src="port.url" alt>
                </span>
              </a>
              <div :class="[storeCookie  =='list' ? listViewClass : none]">
                <p>Category : {{port.category}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row no-gutters no-gutters mb-5">
        <Button
          style="margin:0 auto;"
          id="loadMore"
          text="Load more"
          v-if="!this.size==0 && this.category =='All'"
          :onClick="loadMore"
        />
        <Button
          style="margin:0 auto;"
          text="Load more"
          v-if="!this.size==0 && this.category != 'All'"
          :onClick="loadMoreCategory"
        />

        <p v-if="this.size!=0">{{this.size}} <strong v-if="this.size===0">- No more results</strong> </p>
      </div>
=======
          <div :class="[storeCookie? activeClass : secondClass]">
          <div class="image-block pr-3 pt-3" v-for="port in portfolios" :key="port.index">
            <div> 
             <a class="onHover" href="#"> <span></span><img :src="port.url" alt> </a> <div :class="[storeCookie ? none :secondClass]">
               <h5>{{port.name}}</h5>
               <p>{{port.text}}</p>
               <p>{{port.category}}</p>
             </div>
            </div>
          </div>
          
        </div>
      </div>
      <div class="row no-gutters no-gutters mb-3">
            <Button style="margin:0 auto;" id="loadMore" text="Load more" v-if="!this.size==0" :onClick="loadMore"/>
            <h2 style="margin:0 auto;" v-if="this.size==0"> No more results </h2>
            <!-- <div v-cloak><h5 v-if="this.size==0">No more results</h5></div>  v-if="!this.size==0"-->
          </div>
>>>>>>> 1951d06ab0b844194f8c70635eab643cafd5cf2e
    </div>
    <Bottom/>
  </div>
</template>

<script>
<<<<<<< HEAD
import Top from "@/components/Common/Top.vue";
import Bottom from "@/components/Common/Bottom.vue";
import Button from "@/components/Common/Button.vue";
import VueSweetalert2 from "vue-sweetalert2";
import Vue from "vue";
Vue.use(VueSweetalert2);
const options = {
  confirmButtonColor: "#41b882",
  cancelButtonColor: "#ff7674"
};

Vue.use(VueSweetalert2, options);
import { mapGetters } from "vuex";
=======
import Button from "@/components/Button.vue";
import Top from "@/components/Top.vue";
import Bottom from "@/components/Bottom.vue";
import firebase from "firebase";
import { mapGetters } from 'vuex'
>>>>>>> 1951d06ab0b844194f8c70635eab643cafd5cf2e
export default {
  name: "Work",
  components: {
    Top,
    Bottom,
    Button
  },
  data() {
    return {
<<<<<<< HEAD
      gridViewClass: "grid-view",
      listViewClass: "list-view",
      none: "none",
      activeClass: "active",
      category: "All"
    };
  },
  created() {
    this.$Progress.start()
    console.log('Loading...')
    this.$store.dispatch("fetchAllData");
    this.$store.dispatch("fetchData");
    console.log('Loading ended...')    
    this.$Progress.finish();
  },
  methods: {
    loadMore() {
      this.$Progress.start();
      this.$store.dispatch("loadMore");
      this.$Progress.finish();
    },
    loadMoreCategory() {
      this.$Progress.start();
      this.$store.dispatch("loadMoreCategory");
      this.$Progress.finish();
=======
      activeClass: 'grid-view',
      secondClass:'list-view',     
      lastVisible: "",
      none:"none"
     
    };
  },
  mounted() {
    this.$store.dispatch('fetchAllData')
    if(this.portfolios.length===0){
      this.$store.dispatch('fetchData')
    }
    // console.log(this.portfolios.length)
    // this.$firestore.ports.onSnapshot(snapshot => {
    //   this.size = snapshot.docs.length;
    // });
    // this.getArray();   
    
  },
  firestore(){
    return {
      ports: firebase.firestore().collection("portfolio")
    };
  },
  methods: {     
    
    loadMore() {
      this.$Progress.start()
      this.$store.dispatch('loadMore')
      this.$Progress.finish();
      // this.$firestore.ports
      //   .startAfter(this.lastVisible)
      //   .limit(3)
      //   .onSnapshot(snapshot => {
      //     if (snapshot.docs.length > 0) {
      //       this.lastVisible = snapshot.docs[snapshot.docs.length - 1];
      //       snapshot.docs.forEach(doc => {
      //         this.$Progress.finish() 
      //         this.portfolios.push(doc.data());
      //         this.size--;      
      //                   console.log(this.size)
        
      //       }); 
      //     }         
      //   });
>>>>>>> 1951d06ab0b844194f8c70635eab643cafd5cf2e
    },
    fireInsert() {
      this.$router.push("/work/edit");
    },
<<<<<<< HEAD
    filter(category) {
      this.$Progress.start();
      this.$store.dispatch("categoryFilter", category);
      this.category = category;
      this.$Progress.finish();
    },
    switchView(viewType) {
      this.$store.dispatch("switchView", viewType);
    },
    fireSweetAlert(portfolioText) {
      Vue.swal(portfolioText);
    }
  },
  computed: {
    ...mapGetters(["portfolios"]),
    user() {
      return this.$store.getters.user;
    },
    storeCookie() {
      return this.$store.getters.viewSwitch;
    },
    color() {
      return this.$store.getters.color;
    },
    size() {
      return this.$store.getters.size;
    },
    isDisabled() {
      return this.$store.getters.disabled;
    }
=======
    getArray() {
      this.$firestore.ports.limit(3).onSnapshot(snapshot => {
        this.lastVisible = snapshot.docs[snapshot.docs.length - 1];        
        snapshot.docs.forEach(doc => {          
          this.portfolios.push(doc.data());
          this.size--;         
          console.log(this.size)
        });
      });
    },
    filter(category) {      
      this.portfolios = [];
      if (category.toUpperCase() == "ALL") {
        this.portfolios = [];
         this.$firestore.ports.onSnapshot(snapshot => {
      this.size = snapshot.docs.length;
    });
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
   ...mapGetters(['portfolios']),
    user() {
      return this.$store.getters.user;
    },
    storeCookie(){        
        return this.$store.getters.viewSwitch           
    },
      color(){
        return this.$store.getters.color
      },
      size(){
        return this.$store.getters.size
      }
>>>>>>> 1951d06ab0b844194f8c70635eab643cafd5cf2e
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
<<<<<<< HEAD
.cls-1 {
  fill: #737373;
}
.list-layout svg:hover .cls-1,
.cls-1:hover {
  fill: #2ecc71;
}
.cls-hovered {
  fill: #2ecc71;
}
.cls-1:focus {
  fill: #2ecc71;
}
.svgLinks {
  margin-left: 10px;
=======
[v-cloak] {
  display: none;
}
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
>>>>>>> 1951d06ab0b844194f8c70635eab643cafd5cf2e
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
<<<<<<< HEAD

=======
>>>>>>> 1951d06ab0b844194f8c70635eab643cafd5cf2e
.grid-view {
  display: grid;
  grid-template-columns: auto auto auto;
  padding-bottom: 15px;
<<<<<<< HEAD
  min-height: 35vh;
  max-height: 100vh;
}
.active {
  color: #2ecc71 !important;
  pointer-events: none;
=======
>>>>>>> 1951d06ab0b844194f8c70635eab643cafd5cf2e
}
.list-view {
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto auto auto;
  padding-bottom: 15px;
}
<<<<<<< HEAD
.onHover {
  position: relative;
}
.none {
  display: none;
}
.hoverIMG > svg {
  opacity: 0;
  position: absolute;
  top: -30px;
  right: 90px;
}
.divHover:hover .hoverIMG > svg {
  opacity: 1;
}
img .img-fluid:hover {
  opacity: 0.6;
}
#image-generator{
  width: 330px;
  height: 200px;
}
=======
.onHover:hover > img{
  opacity: 0.4;
}
.none{
  display: none;
}
>>>>>>> 1951d06ab0b844194f8c70635eab643cafd5cf2e
</style>
