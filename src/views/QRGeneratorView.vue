<script setup>
import QrcodeVue from 'qrcode.vue';
/* import ref from 'vue'; */
import { ref, onBeforeMount } from 'vue';

/* v-model */
const inputText = ref('');

/* result in qr */
/* const text = ref('');

const handleConvertQr = () => {
    text.value = inputText.value;
} */


/* 
    Leer en voz alto QR
*/
const speech = new SpeechSynthesisUtterance();
const voz = window.speechSynthesis;

const handleSpeak = () => {
    speech.text = inputText.value;
    voz.speak(speech);

    console.log(inputText.value);
}

/* 
    Reconocer voz y pasar a texto al input
*/
const placeGrabar = ref('');

const reconocimiento = ref(new webkitSpeechRecognition() || new SpeechRecognition()) ;
/* const reconocimiento = new reconocimiento_voz(); */
reconocimiento.value.lang = "es";

reconocimiento.value.onstart = () => {
    placeGrabar.value = 'Esta grabando...';
}

reconocimiento.value.onresult = (e) => {
    inputText.value = e.results[0][0].transcript;
}

reconocimiento.value.onspeechend = () => {
    placeGrabar.value = '';
    reconocimiento.value.stop();
}

const handleEscuchar = () => {
    reconocimiento.value.start();
} 


</script>


<template>

<main class="container ">

    <div class="row">
        <form class="col row g-3" @submit.prevent="handleConvertQr">
          <div class="col-auto">
            <button class="btn btn-primary" @click.prevent="handleEscuchar"><i class="bi bi-mic"></i>dictar</button> Ingrese texto
          </div>
        
          <div class="col-auto">
            <label for="texto" class="visually-hidden">Texto</label>
            <input type="text" class="form-control text-center" id="texto" placeholder="Texto" v-model="inputText">
            {{ placeGrabar }}
          </div>
        
        <!--       <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">Convertir a código QR</button>
          </div> -->
        </form>
        
        <div class="col text-center g-3">
            <qrcode-vue class="" :size=200 v-if="inputText.length" :value="inputText"></qrcode-vue>
            <div v-else class=" alert alert-primary text-center" role="alert">
                todavía no ingresaste nada
            </div>
        
            <div class=" text-center" v-show="inputText.length">{{ inputText }} <button class="btn btn-primary" @click.prevent="handleSpeak"><i class="bi bi-megaphone"></i>speak</button></div>
        </div>
    </div>
    
</main>


</template>


<style scoped>

.bi {
    color: black;
}

</style>