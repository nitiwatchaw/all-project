
<script  lang="ts">
import axios from 'axios'
import { type restaurantsType } from '../types/index'
import ListRestaurant from '@/components/ListRestaurant.vue'

export default {

    components: {
        ListRestaurant
    },

    name: 'Home',
    data() {
        return {
            name: '' as string,
            restaurants: [] as restaurantsType[]
        }
    },
    methods: {
        async loadData() {
            try {
                const response = await axios.get('http://localhost:3000/restaurants')
                this.restaurants = response.data

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


<template >
    <ListRestaurant :restaurants="restaurants" :loadData="loadData" />
</template>
<style ></style>