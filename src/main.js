import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'


const app = createApp(App)

app.use(router)

app.mount('#app')