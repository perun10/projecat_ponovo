<template>
  <div>
    <Top title="check out what i can do"/>
    <div class="container">
      <div class="row no-gutters justify-content-between">
        <div class="col-md-6">
          <ul class="filters">
            <li>
              <a href>ALL</a>
            </li>
            <li>
              <a href>PRINT</a>
            </li>
            <li>
              <a href>PHOTOGRAPHY</a>
            </li>
            <li>
              <a href>WEB</a>
            </li>
            <li>
              <a href>APPLICATIONS</a>
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
      <div class="row no-gutters">
          <div class="col-md-12">
              <div class="image-block">

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

export default {
  name: "Work",
  components: {
    Top,
    Bottom,
    Button
  },
  data(){
      return{

      }
  },
  methods:{
      fireInsert(){
            
      }
  }
  ,
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/admin");
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
</style>
