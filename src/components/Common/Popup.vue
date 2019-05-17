<template>
    <div class="modal fade" :id="identifier" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{name}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {{description}}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeFunction">{{closeButton}}</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="primaryFunction">{{primaryButton}}</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props:{
        identifier:{
            type:String,
            required:false,
            default:'exampleModal'
        },
        name:{
            type:String,
            required:true
        },
        primaryFunction:{
            type:Function,
            required:false
        }
        ,
        closeFunction:{
            type:Function,
            required:false,
        }
        ,
        primaryButton:{
            type:String,
            required:true,
        },
        closeButton:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        }
    },
    methods:{
       
    }
}
</script>

<style>

</style>
