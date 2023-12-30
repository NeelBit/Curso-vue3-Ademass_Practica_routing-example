<script setup>



</script>


<template>

<div class="container">
    <div class="row justify-content-center">
        <h2 class="h2 text-center">Blog view</h2>

        <div v-for="p in 10" :key="p"  class="card m-2">
            <div class="card-body">
                <h3 class="card-title">Título {{ p }}</h3>
                <h4 class="card-subtitle mb-2 text-muted ">Card subtitle {{ p }}</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
                <RouterLink :to="{name: 'post', params: {id: p}}"> {{ p }} </RouterLink>

            </div>
        </div>


    </div>
</div>



</template>


<style scoped>



</style>