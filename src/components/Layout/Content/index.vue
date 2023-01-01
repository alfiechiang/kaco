<template>
    <div class="header">
        <div class="icon" @click="collapse">
            <el-icon><Fold /></el-icon>
        </div>
    </div>
    <div class="warapper">
        <router-view></router-view>
    </div>
</template>
<script setup lang="ts">

const props = defineProps({
    isOpen: Boolean
})



const emits = defineEmits(['collapseEvent'])

const collapse = () =>{
    emits('collapseEvent')
}



</script>
<style lang="scss">
 .header {
    height: 7%;
    width: 100%;
    background: #1D79C1;
    .icon{
        height: 50px;
        font-size: 22px;
        font-weight: 200;
        line-height: 60px;
        margin-left: 80px;
        color: #fff;
        cursor: pointer;
    }
 }

 

 .warapper {
    padding: 10px 10px 10px 80px;
    height: 93%;
    width: 100%;
 }


    
</style>