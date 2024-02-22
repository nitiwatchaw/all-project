
<script lang="ts">
import { useCurrentUser } from '../hook/getCurrentUser';
import { type User } from '@/types';

export default {
    name: 'Header',
    data() {
        return {
            currentUser: {} as User
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('user-info');

            this.currentUser = useCurrentUser().value
            this.$router.push({ name: "Login" });

        }
    },
    mounted() {
        this.currentUser = useCurrentUser().value;
    },
    watch: {
        currentUser(newValue) {
            console.log('currentUser changed:', newValue);
        }
    }
}
</script>
<template >
    <nav class="bg-white border-gray-200 dark:bg-gray-900 fixed w-full shadow-lg">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="../assets//logo.png" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Restament</span>
            </div>
            <button data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul
                    class="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <router-link to="/"
                            class="block py-2  px-3  bg-blue-700 rounded md:bg-transparent text-black md:p-0 dark:text-white md:dark:text-blue-500"
                            aria-current="page">Home</router-link>

                    </li>
                    <li>
                        <router-link to="/add"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add
                            Restaurant</router-link>
                    </li>
                    <li>
                        <router-link to="/myRestaurant"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            My Restaurant</router-link>
                    </li>

                    <li v-if="currentUser" class="flex items-center gap-6">
                        <a @click="logout"
                            class="block cursor-pointer py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Logout
                        </a>
                    </li>
                    <li v-if="currentUser" class="bg-indigo-400 w-[120px] text-center rounded-full py-2">
                        <div class=" text-white">
                            {{ currentUser.name }}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style scoped>
.router-link-exact-active {

    color: blue;
    font-weight: bold;
}
</style>../hook/getCurrentUser.ts