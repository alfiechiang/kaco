<template>

    <div class="sidebar">
        <Sidebar :isOpen="isOpen"></Sidebar>
    </div>
    <div :class="{active:isOpen,content:!isOpen}">
        <Content :isOpen="isOpen"  @collapseEvent="collapseEvent"></Content>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from "./Sidebar/index.vue"
import Content from "./Content/index.vue"


const isOpen  = ref(false)
const collapseEvent =()=>{
    isOpen.value =!isOpen.value
}


</script>
<style lang="scss">



.sidebar {
    height: 100%;
    background-color: #112F51;
    position: fixed;
    top: 0;
    left: 0;
}

.content {
    padding-left: 150px;
    width: 100%;
    height: 100%; 
}

.active {
    padding-left: 50px;
}
</style>