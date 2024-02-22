
<script lang="ts">
import axios from 'axios';

export default {
    props: ['restaurants', 'loadData'],

    data() {
        return {

        }
    },
    methods: {
        async deleteRestaurant(id: string) {
            try {
                await axios.delete(`http://localhost:3000/restaurants/${id}`)
            }
            catch (error) {
                console.log(error)
            }
            this.loadData()
        },

    }
}
</script>
<template >
    <div class="max-w-screen-xl mx-auto">

        <div class="pt-11 text-xl font-bold underline ">
            The list of all restaurant
        </div>
        <div class="w-full pt-11 flex justify-center ">
            <div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                Id
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                Contact
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" class="px-6 py-3 text-center bg-gray-50 dark:bg-gray-800">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index ) in restaurants" :key="item.id"
                            class="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {{ index + 1 }}
                            </th>
                            <td class="px-6 py-4 capitalize">
                                {{ item.name }}
                            </td>
                            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                {{ item.contact }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.address }}
                            </td>
                            <td class="px-6 py-4 flex justify-center bg-gray-50 dark:bg-gray-800">
                                <div class="flex justify-center gap-3">
                                    <router-link :to="`/update/${item.id}`">
                                        <button type="button"
                                            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Update
                                        </button>
                                    </router-link>
                                    <button @click="deleteRestaurant(item.id)"
                                        class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                        Delete
                                    </button>
                                </div>

                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<style ></style>