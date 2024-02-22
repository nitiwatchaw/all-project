import { createRouter, createWebHistory } from "vue-router";


const Home = () => import('../views/Home.vue')

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: () => import('../views/About.vue')
        },
        {
            path: "/movies",
            name: "movies",
            component: () => import('../views/Movies.vue')
        },
        {
            path: "/movies/:id",
            name: "movieDetail",
            component: () => import('../views/MovieDetail.vue')
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: () => import('../views/NotFound.vue')
        },
    ]
})

export default router