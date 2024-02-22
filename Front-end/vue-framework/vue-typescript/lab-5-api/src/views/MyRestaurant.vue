<script  lang="ts">
import axios from 'axios'
import { type restaurantsType } from '../types/index'
import ListRestaurant from '@/components/ListRestaurant.vue'
import { useCurrentUser } from '@/hook/getCurrentUser'
export default {

    components: {
        ListRestaurant
    },

    name: 'Home',
    data() {
        const currentUser = useCurrentUser();

        return {
            name: '' as string,
            restaurants: [] as restaurantsType[],
            MyRestaurant: [] as restaurantsType[],
            currentUser
        }
    },
    methods: {
        async loadData() {
            try {
                const response = await axios.get('http://localhost:3000/restaurants')
                this.restaurants = response.data
                this.MyRestaurant = this.restaurants.filter((restaurant) => restaurant.userId === this.currentUser.id)


            } catch (error) {
                console.error('Error fetching restaurants:', error)
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info')
        if (!user) {
            this.$router.push({ name: 'Login' })
        }


        this.loadData()

    }
}

</script>

<template>
    <div>
        <div class="max-w-screen-xl mx-auto ">
            <div class="pt-11 text-xl font-bold underline ">
                My Restaurant
            </div>
            <ListRestaurant :restaurants="MyRestaurant" :loadData="loadData" />
        </div>
    </div>
</template>

<style lang="css" scoped></style>