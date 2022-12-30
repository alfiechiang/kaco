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
    background: aqua;
    height: 50px;
    width: 100%;
 }

 .warapper {
    margin: 20px;
    height: 100%;
    width: 100%;
    background: red;
 }
    
</style>