<script setup>

import { onBeforeMount, ref } from 'vue';

/* recuperar información de los parametros */
import { useRoute } from 'vue-router';

const postId = ref(null);
const fullPath = ref(null);

onBeforeMount(() => {
    /* recuperar enformación de los parametros */
    const route = useRoute();

    postId.value = route.params.id;
    fullPath.value = route.fullPath;

    //console.log(postId.value);
})


</script>


<template>

<h2>Post view</h2>

<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">full path: {{ fullPath }}</li>
    </ol>
</nav>

<div class="container">
    <div class="row justify-content-center">

        <div class="card">
            <img src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" class="card-img-top mx-auto d-block img" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title {{ postId }}</h5>
                <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

    </div>
</div></template>


<style scoped>

.img {
    max-width: 500px;
}

</style>