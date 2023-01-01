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
    height: 7%;
    width: 100%;
    background: pink;
 }

 .warapper {
    height: 93%;
    width: 100%;
 }
    
</style>