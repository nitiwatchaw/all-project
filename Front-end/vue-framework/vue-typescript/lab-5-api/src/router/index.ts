import { createRouter, createWebHistory } from "vue-router";


const Home = () => import('../views/Home.vue')
const SignUp = () => import('../views/SignUp.vue')
const Login = () => import('../views/Login.vue')
const Add = () => import('../views/Add.vue')
const Update = () => import('../views/Update.vue')
const MyRestaurant = () => import('../views/MyRestaurant.vue')
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/signUp",
            name: "SignUp",
            component: SignUp
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/add",
            name: "Add",
            component: Add
        },
        {
            path: "/update/:id",
            name: "Update",
            component: Update
        },
        {
            path: "/myRestaurant",
            name: "MyRestaurant",
            component: MyRestaurant
        },
    ]
})

export default router