
<script lang="ts">
import axios from 'axios'
import { useGetAllRestaurant } from '../hook/getAllRestaurant'
import { type restaurantsType } from '@/types'
import { useCurrentUser } from '@/hook/getCurrentUser'



export default {



    name: "Add",

    data() {

        const currentUser = useCurrentUser();

        return {
            restaurant: {
                name: '' as string,
                address: '' as string,
                contact: '' as string
            },
            currentUser
        }
    },
    methods: {
        async addRestaurant() {

            try {

                const allRestaurant = await useGetAllRestaurant()

                const isExist = allRestaurant.find((restaurant: restaurantsType) =>
                    restaurant.name === this.restaurant.name)

                if (isExist) {
                    alert('the restaurantname is already exist')
                    return
                }

                await axios.post('http://localhost:3000/restaurants', {
                    name: this.restaurant.name,
                    address: this.restaurant.address,
                    contact: this.restaurant.contact,
                    userId: this.currentUser?.id

                })
                this.restaurant.name = '';
                this.restaurant.address = '';
                this.restaurant.contact = '';

                alert('Added')
            }
            catch (error) {
                console.log(error)
            }

        }
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if (!user) {
            this.$router.push({ name: 'Login' })
        }
    }
}
</script>
<template >
    <div class="mx-auto max-w-2xl pt-[120px]">
        <h1 class="py-6 text-2xl">
            Add Restaurant
        </h1>
        <hr class="py-6">
        <form @submit.prevent="addRestaurant">
            <div class="mb-5">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Restaurant</label>
                <input v-model="restaurant.name"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    type="text" name="name" placeholder="Enter Name">
            </div>

            <div class="mb-5">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address
                    Restaurant</label>
                <input v-model="restaurant.address" placeholder="Enter Address" name="address"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required>
            </div>

            <div class="mb-5">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Restaurant</label>
                <input v-model="restaurant.contact" type="text" name="contact" placeholder="Enter Contact"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required>
            </div>

            <button type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add new Restaurant</button>
        </form>
    </div>
</template>
<style ></style>