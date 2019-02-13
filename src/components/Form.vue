<template>
    <div class="container">
       <form class="col-md-6 mt-5 pl-0 text-left mb-3">
           <h3>Contact form</h3>
           <p class="text-left">Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. </p>
  <div class="form-group">
      <input type="text" class="form-control instyle" placeholder="Name" required>
  </div>
  <div class="form-group">  
    <input type="email" class="form-control instyle"  id="exampleFormControlInput1" placeholder="Email Address" required>
  </div>
   <div class="form-group">
      <input type="text" class="form-control instyle"  placeholder="Subject" required>
  </div>
  <div class="form-group">    
    <textarea class="form-control form-control-lg  texta" id="exampleFormControlTextarea1" rows="3" cols="8"></textarea>
  </div>
 <button type="submit" class="btn btn-success" style="background-color:#2ecc71;border-color:#2ecc71;">Send message</button>
   <!--<div class="form-group">
    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>-->
</form>
    </div>
</template>

<script>
export default {
 name:"Form"
}
</script>

<style>
 .instyle {
    width:60%;
    border:1px solid #8a8888;
    border-radius:0;
 }
 .texta {
   border:1px solid #8a8888;
   border-radius:0;
 }
</style>
