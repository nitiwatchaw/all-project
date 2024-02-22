
<script  lang="ts">
import axios from 'axios'


import { type User } from '../types/index'

export default {
    name: 'SignUp',
    data() {
        return {
            name: '' as string,
            email: '' as string,
            password: '' as string,
            passwordCheck: '' as string
        }
    },
    methods: {
        async signUp() {
            // Password matching check
            if (this.password !== this.passwordCheck) {
                alert('Passwords do not match');
                return;
            }
            // Empty field check
            if (this.name.trim() === '' || this.email.trim() === '' || this.password.trim() === '') {
                alert('Please fill in all fields');
                return;
            }

            const userAll = await axios.get('http://localhost:3000/users?name=' + this.name)


            const hasExitUser = userAll.data.find((user: User) => user?.name === this.name)
            if (hasExitUser) {
                alert('username already exist')
                return
            }


            axios.post('http://localhost:3000/users', {
                email: this.email,
                password: this.password,
                name: this.name
            })
                .then((response) => {

                    if (response.status === 201) {
                        alert('Sign Up success');
                        window.location.reload(); // Refresh the page
                        localStorage.setItem('user-info', JSON.stringify(response.data));
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('An error occurred during sign up. Please try again later.');
                });
        }

    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if (user) {
            this.$router.push({ name: 'Home' })
        }


    }
}
</script>

<template >
    <div class="overflow-hidden">

        <div class="mx-auto max-w-2xl flex flex-col gap-6 justify-center mt-[120px] ">
            <div class=" flex items-center justify-center">
                <img src="../assets/logo.png" class="w-[200px] h-full" alt="">
            </div>
            <h1 class="text-center text-xl font-bold">Sign UP</h1>
            <div class="flex flex-col gap-6">
                <div class="">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <div class="flex">
                        <span
                            class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span>
                        <input type="text" v-model="name"
                            class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="username">
                    </div>
                </div>
                <div class="">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        Email</label>
                    <div class="relative ">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path
                                    d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path
                                    d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                        </div>
                        <input type="text" v-model="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@email.com">
                    </div>
                </div>
                <div class="">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        Password</label>
                    <div class="relative mb-6">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path
                                    d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                            </svg>
                        </div>
                        <input type="text" v-model="password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="password">

                    </div>
                    <div class="relative mb-6">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path
                                    d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                            </svg>
                        </div>
                        <input type="text" v-model="passwordCheck"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="password again">

                    </div>
                </div>


            </div>

            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your
                details. Read our <a class="font-medium text-blue-600 hover:underline dark:text-blue-500">

                    <router-link to="/login">
                        Login</router-link>
                </a>.</p>
            <button type="button" @click="signUp"
                class="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign
                Up</button>


        </div>

    </div>
</template>
<style ></style>