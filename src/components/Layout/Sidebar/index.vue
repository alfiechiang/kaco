<template>
    <el-menu :default-active="route.path"  background-color="#112F51" :collapse="isOpen" @open="handleOpen"
        @close="handleClose" text-color="#fff"	router >
        <div class="sidebar-icon">
            <span>首客生鮮採購系統</span>
        </div>
        <el-sub-menu index="/product">
            <template #title>
                <el-icon><Menu /></el-icon>
                <span>產品</span>
            </template>
                <el-menu-item index="/product/category">產品分類</el-menu-item>
                <el-menu-item index="/product/list">產品列表</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2">
            <el-icon><Menu /></el-icon>
            <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <el-icon>
                <document />
            </el-icon>
            <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <setting />
            </el-icon>
            <template #title>Navigator Four</template>
        </el-menu-item>
    </el-menu>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import {useRoute} from 'vue-router'

const props = defineProps({
    isOpen: Boolean
})



const isCollapse = ref(false)
const route =useRoute()
const isCollapseEvent = () =>{
    alert("Hello World")
}


const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}





</script>
<style lang="scss" scoped>

.el-menu-item{
    background-color: #112F51;
}

.el-menu{
    border: none;
}



.white-color{
    color: #fff;
}

.sidebar-icon{
    color: #fff;
    padding: 20px;
    font-size: small;
}
    
</style>