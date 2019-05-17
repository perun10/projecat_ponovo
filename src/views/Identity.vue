<template>
<div>
    <iframe src="http://localhost:8080/" width="1000" height="600" frameborder="0">
    </iframe>
    <!-- <button @click="showMe">Show</button> -->
    <div id="results">{{getResults}}</div>
</div>
</template>

<script>

export default {
    data(){
        return{
            results : ''
        }
    },
    methods:{
        showMe(){
            //alert('Test')
            window.addEventListener("message",this.receviceMessage,false)
        },
        receviceMessage(event){
            if(event.origin === "http://localhost:8080"){
                console.log(event.data)
                // return (event.data)
               this.$store.dispatch("createUser",{email:event.data.given_name+"@test.com",password:'1234567T'})
              this.$store.dispatch("signInUser",{email:event.data.given_name+"@test.com",password:'1234567T'})
            }else{
                console.log('not 8080')
                return
            }
        }
        ,
        bindEvent(element, eventName, eventHandler) {
            if (element.addEventListener){
                element.addEventListener(eventName, eventHandler, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + eventName, eventHandler);
            }
        },

    },
    computed:{
        getResults(){
           window.addEventListener("message",this.receviceMessage,false)
        }
    }
}
</script>

<style>

</style>
