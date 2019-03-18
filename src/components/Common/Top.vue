<template>
  <section id="top" class="mt-1 defaultStyle" :style="{backgroundColor:colorTop}">
    <div class="container">
      <h2>{{title}}</h2>
    </div>
  </section>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Top",
  data() {
    return {
      color: null
    };
  },
  props: {
    title: {
      type: String,
      required: true,
      default: "TEST"
    }
  },

  firestore() {
    return {
      color: firebase
        .firestore()
        .collection("themes")
        .doc("LIoaPVCBvEX1xOvMscWb")
    };
  },
  created() {
    // this.$firestore.color.get().then(doc => {
    //   //  console.log(doc.data().color)
    //     this.$store.commit('setColor',doc.data().color)
    // });

    // this.$store.dispatch('setColor',this.color)
  },
  computed: {
    colorTop() {
    //   console.log(this.$store.getters.color + "TOP PROMJENA");
      return this.$store.getters.color;
    }
  }
  // created(){
  // this.$store.dispatch('getColor',this.color)
  // }
};
</script>

<style>
.defaultStyle {
  /* background-color: #2ecc71; */
}
#top {
  /* background-color: #2ecc71; */
  color: white;
  text-align: left;
  font-size: 1.875rem;
  font-weight: bold;
  line-height: 1.125rem;
  text-transform: uppercase;
  padding-top: 30px;
  padding-bottom: 30px;
}
@media screen and (max-width: 480px) {
  #top {
    text-align: center;
  }
}
</style>
