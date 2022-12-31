<template>

    <div class="sidebar">
        <Sidebar></Sidebar>
    </div>
    <div class="content">
        <Content></Content>
    </div>

</template>
<script setup lang="ts">
import Sidebar from "./Sidebar/index.vue"
import Content from "./Content/index.vue"


</script>
<style lang="scss">
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    background: red;
    height: 100%;
}

.content {
    width: 100%;
    height: 100%;    
}
</style>