<script setup>

import { RouterLink } from 'vue-router'

</script>


<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-primary ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Routing example</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
    
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav ">
                        <RouterLink class="nav-link text-center" :to="{name: 'home'}">Home</RouterLink>
                        <RouterLink class="nav-link text-center" :to="{name: 'about'}">About</RouterLink>
                        <RouterLink class="nav-link text-center" :to="{name: 'qr-generator'}">QR Generator</RouterLink>
                        <RouterLink class="nav-link text-center" :to="{name: 'curso-sass'}">Curso Sass</RouterLink>
                        <RouterLink class="nav-link text-center" :to="{name: 'servicios'}">Servicios</RouterLink>
                        <RouterLink class="nav-link text-center" :to="{name: 'blog'}">Blog</RouterLink>
                        <RouterLink class="nav-link text-center" :to="{name: 'contacto'}">Contacto</RouterLink>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>


<style scoped>
.router-link-exact-active {
    text-decoration: underline;
}

</style>