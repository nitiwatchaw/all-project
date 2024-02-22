
<script lang="ts">
import axios from 'axios'
import { type restaurantsType } from '@/types'
import { useGetAllRestaurant } from '../hook/getAllRestaurant'
import { useRoute } from 'vue-router';
export default {
    name: "Update",
    data() {

        const router = useRoute()

        return {
            restaurant: {
                name: '' as string,
                address: '' as string,
                contact: '' as string
            },
            router,
        }
    },
    methods: {
        async update() {
            try {

                const allRestaurant = await useGetAllRestaurant()

                const isExist = allRestaurant?.find((restaurant: restaurantsType) =>
                    restaurant.name === this.restaurant.name && restaurant.id !== this.$route.params.id)

                if (isExist) {
                    alert('the restaurantname is already exist')
                    return
                }

                await axios.put(`http://localhost:3000/restaurants/${this.$route.params.id}`, {
                    ...this.restaurant,
                    name: this.restaurant.name,
                    address: this.restaurant.address,
                    contact: this.restaurant.contact
                })
            
                alert('Update success')
            }
            catch (error) {
                console.log(error)
            }
        }
    },
    async mounted() {


        let user = localStorage.getItem('user-info')
        if (!user) {
            this.$router.push({ name: 'Login' })
        }
        try {

            const res = await axios.get(`http://localhost:3000/restaurants/${this.$route.params.id}`)
            this.restaurant = res.data
        }
        catch (error) {
            console.log(error)
        }
    }
}
</script>
<template >
    <div class="mx-auto max-w-2xl pt-[120px]">
        <h1 class="py-6 text-2xl">
            Update Restaurant
        </h1>
        <hr class="py-6">
        <form @submit.prevent="update">
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
                Update Restaurant</button>
        </form>
    </div>
</template>
<style ></style>