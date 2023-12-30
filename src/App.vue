<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import { RouterView } from 'vue-router';




</script>


<template>


    <HeaderComponent></HeaderComponent>

    <RouterView />


</template>


<style scoped lang="scss">

/* quitar scoped si se quiere aplicar */
/* #app {
    background-color: #ff0000;
} */

</style>
