
<script lang="ts">
import axios from 'axios'
export default {
    name: 'Login',
    data() {
        return {
            email: '' as string,
            password: '' as string,
        }
    },
    methods: {
        async login() {
            if (this.email.trim() === '' || this.password.trim() === '') {
                alert('Please fill in all input fields')
                return
            }
            try {
                const res = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
                if (res.data.length === 0) {
                    alert('No user found with the provided credentials')
                    return
                }
                localStorage.setItem('user-info', JSON.stringify(res.data[0]))
                alert('Login successful')
                window.location.reload(); // Refresh the page

                this.$router.push({ name: 'Home' })

            }
            catch (error) {
                console.log(error)
                alert('An error occurred during login. Please try again later.')
            }
        }
    }, mounted() {
        if (localStorage.getItem('user-info')) {
            this.$router.push({ name: 'Home' })

        }
    }
}
</script>

<template >
    <div class="mx-auto max-w-2xl flex flex-col gap-6  justify-center mt-[120px]">
        <div class=" flex items-center justify-center">
            <img src="../assets/logo.png" class="w-[200px] h-full" alt="">
        </div>
        <h1 class="text-center text-xl font-bold">Login</h1>
        <div class="flex flex-col gap-6">
            <div class="">

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
                        placeholder="name@flowbite.com">
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

            </div>


        </div>

        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Do you have an account?
            <a class="font-medium text-blue-600 hover:underline dark:text-blue-500">
                <router-link to="/signUp">
                    Sign Up
                </router-link>

            </a>.
        </p>
        <button type="button" @click="login"
            class="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Login
        </button>




    </div>
</template>

<style ></style>