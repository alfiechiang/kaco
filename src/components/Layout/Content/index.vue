<template>
    <div class="header"></div>
    <div class="warapper">
        <router-view></router-view>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
 .header {
    height: 50px;
    width: 100%;
    background: pink;
 }

 .warapper {
    margin: 20px;
    height: 100%;
    width: 100%;
 }
    
</style>