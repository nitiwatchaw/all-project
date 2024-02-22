import { createRouter, createWebHistory } from "vue-router";
import { createApp } from 'vue';
import HomeVue from "../views/Home.vue";
import AboutVue from "../views/About.vue";
import SinglePost from '../views/SinglePost.vue'
import Posts from '../views/Posts.vue'
import LeftSideBar from '../components/LeftSideBar.vue'
import RightSideBar from '../components/RightSideBar.vue'
import SearchUserVue from "@/views/SearchUser.vue";
import UserVue from "@/views/User.vue";
import { provide } from "vue";


function auth1(to, from) {
    console.log('auth1')
    return true
}

function auth2(to, from) {
    console.log('auth2 from', from.path)
    return true
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            components: {
                default: HomeVue,
                LeftSideBar,
                RightSideBar
            },
            props: {
                default: { name: 'This is props from index' }, // This will pass route params as props to HomeVue
                LeftSideBar: { name: 'Left Sidebar Prop Value' }, // Pass props directly to LeftSideBar
                RightSideBar: { name: 'Right Sidebar Prop Value' } // Pass props directly to RightSideBar
            },
            beforeEnter: [auth1, auth2]
        },
        {
            path: '/searchUser',
            name: 'searchUser',
            component: SearchUserVue,
            props: (route) => ({ query: route.query.q })

        },
        {
            path: "/about",
            name: "about",
            components: {
                default: AboutVue,
                LeftSideBar,
                RightSideBar
            },
        },
        {
            path: "/user",
            name: "user",
            component: UserVue,
            children: [
                {
                    path: '/user/:id',
                    name: 'usersingle',
                    component: () => import('../views/UserSingle.vue'),
                    props: true
                },

            ],
            beforeEnter(to) {
                const reply = window.confirm('Want to change to next page ?')
                if (!reply) return '/'

            }
        },
        {
            path: "/posts",
            component: Posts,
            name: 'posts',
            children: [
                {
                    path: ':id',
                    name: 'post',
                    component: SinglePost,
                    props: true
                },
            ]
        },
        {
            path: "/:postId(\\d+)",
            name: "postId",
            component: () => import('../views/PostComponent.vue')
        },
        {
            path: "/:productName+",
            name: "product",
            component: () => import('../views/ProductComponent.vue')
        },
        {
            path: "/:pathMatch(.*)",
            name: "notfound",
            component: () => import('../views/Notfound.vue')
        },
    ],
    strict: true
})

router.beforeEach(() => {
    console.log('Before route loaded')

})

router.beforeResolve(async (to, from) => {
    console.log('User Authenticated')
    console.log('Coming from ', from.path)
    console.log('Going to:', to.path)

})

router.afterEach(() => {
    console.log('After navigation')
})


export default router