<template>
  <div>
    <Top title="ADD NEW PORTFOLIO"/>
    <div class="container form-group mt-3 pt-3">
      <span>
        <div class="error" v-if="isActive">Title is required</div>
      </span>
      <input
        type="text"
        class="form-control mb-3"
        v-model.trim="$v.title.$model"
        placeholder="Enter title"
      >
      <span>
        <div class="error" v-if="isActive">Text is required</div>
      </span>
     <input
        type="text"
        class="form-control mb-3"
        v-model.trim="$v.text.$model"
        placeholder="Enter text"
      >
     
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
          <button class="dropdown-item" type="button" @click="setCategory('print')">PRINT</button>
          <button
            class="dropdown-item"
            type="button"
            @click="setCategory('PHOTOGRAPHY')"
          >PHOTOGRAPHY</button>
          <button class="dropdown-item" type="button" @click="setCategory('WEB')">WEB</button>
          <button
            class="dropdown-item"
            type="button"
            @click="setCategory('APPLICATIONS')"
          >APPLICATIONS</button>
        </div>
      </div>
      <div class="row no-gutters justify-content-center">
      <img v-if="image" :src="imageUrl" alt="Picture" height="100px">
</div>
      <Button text="Upload Image" :onClick="onPickFile"/>
      <Button text="Add new portfolio" :onClick="fireInsert"/>
      <h5 class="error" v-if="isImgActive">IMAGE IS REQUIRED</h5>
      <input
        type="file"
        style="display:none"
        ref="fileInput"
        accept="image/*"
        @change="onFilePicked"
      >
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  email,
  maxLength
} from "vuelidate/lib/validators";
import Top from "@/components/Common/Top.vue";
import Button from "@/components/Common/Button.vue";
import firebase from "firebase";
export default {
  data() {
    return {
      title: "",
      text: "",
      url: "",
      category: "",
      imageUrl: "",
      image: null,
      storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
      myImageURL: "",
      isActive: false,
      isImgActive: false
    };
  },
  
  validations: {
    title: {
      required,
      minLength: minLength(4)
    },
    text: {
      required,
      minLength: minLength(20)
    }
  },
  components: {
    Top,
    Button
  }
  ,
  methods: {
    fireInsert() {
      if (!this.image) {
        //alert('Izaberi SLIKU')
        this.isImgActive = true;
        return;
      }
      // console.log(this.$v.title.$model)
      if (this.$v.title.$model === "" || this.$v.text.$model === "") {
        // alert('DOPUNITE POLJA')
        this.isActive = true;
        return;
      }
      const portfolio = {
        title: this.$v.title.$model,
        text: this.$v.text.$model,
        category: this.category
      };
      this.isImgActive = false;
      this.isActive = false;
      let key = "";
      let ext = "";
      firebase
        .firestore()
        .collection("portfolio")
        .add(portfolio)
        .then(data => {
          key = data.id;
          //console.log(key + ": KEY")
          return key;
        })
        .then(key => {
          //console.log(key + "2 PROMIS")
          const fileName = this.image.name;
          ext = fileName.slice(fileName.lastIndexOf("."));
          // console.log(ext)
          //console.log(this.image)

          return firebase
            .storage()
            .ref("portfolio/" + key + ext)
            .put(this.image);
        })
        .then(fileData => {
          var urlImage = "";
          //console.log(fileData.metadata + "FILE DATA")
          firebase
            .storage()
            .ref("portfolio/" + key + ext)
            .getDownloadURL()
            .then(downLoadUrl => {
              this.myImageURL = downLoadUrl;

              return firebase
                .firestore()
                .collection("portfolio")
                .doc(key)
                .update({ url: this.myImageURL });
            });
        });
      this.$router.push("/work");
    },
    setCategory(str) {
      console.log(str);
      this.category = str.toUpperCase();
      console.log(this.category);
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a valid file");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
      console.log(this.image);
    }
  }
  
};
</script>

<style>
.form-control {
  margin: 0 auto;
  width: 500px;
}
.error {
  color: red;
}
</style>
