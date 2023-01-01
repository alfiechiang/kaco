<template>
    <el-menu default-active="2"  background-color="#112F51" :collapse="isCollapse" @open="handleOpen"
        @close="handleClose" text-color="#fff"	>
        <div class="sidebar-icon">
            <span>首客生鮮採購系統</span>
        </div>
        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>首頁</span>
            </template>
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
                <el-menu-item index="1-3">item three</el-menu-item>
                <el-menu-item index="1-4-1">item one</el-menu-item>
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

const isCollapse = ref(false)
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