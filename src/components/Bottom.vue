<template>
    <section id="bottom">
        <div class="container">
           <div class="row no-gutters justify-content-between pt-5 pb-5">
                <div class="col-md-7 col-sm-1 txta">
                <h4>ARE YOU READY TO BE BLOWN AWAY?</h4>
               </div> 
                <div class="col-md-5 col-sm-1">
                          <button type="button" class="btn btn-success" style="background-color:#2ecc71;border-color:#2ecc71;">CLICK HERE TO FIND OUT</button>
                </div>
            </div> 
        </div>
    </section>
</template>

<script>
export default {
 name: "Bottom"
}
</script>

<style>
#bottom{
    background-color: #322f2f;
    height:140px ;
    color:white;
    margin-bottom: 60px;
   
}
.txta{
    text-align: left;
}
@media screen and (max-width: 480px) {
 #bottom{
   height:auto ;
 }
 .txta{
     text-align: center;
 }
}
</style>
