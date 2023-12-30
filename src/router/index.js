import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            /* 
                La ruta/url
            */
            path: '/',
            /* 
                Nombre de la ruta
            */
            name: 'home',
            /* 
                Componente que se va a estar ejecutando cuando entremos a esa ruta
             */
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/qr-generator',
            name: 'qr-generator',
            component: () => import('../views/QRGeneratorView.vue')
        },
        {
            path: '/curso-sass',
            name: 'curso-sass',
            component: () => import('../views/CursoSassView.vue')
        },
        {
            path: '/servicios',
            name: 'servicios',
            component: () => import('../views/ServicesView.vue')
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: () => import('../views/ContactoView.vue')
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import('../views/BlogView.vue')
        },
        {
            path: '/blog/:id',
            name: 'post',
            component: () => import('../views/PostView.vue')
        }
    ],
    linkActiveClass: 'active',
})

export default router