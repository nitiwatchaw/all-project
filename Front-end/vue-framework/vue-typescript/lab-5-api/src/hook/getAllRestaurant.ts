import { ref, onMounted, type Ref } from 'vue'
import axios from 'axios'
import { type restaurantsType } from '@/types'

export async function useGetAllRestaurant() {


    try {
        let allRestaurant = []

        const res = await axios.get('http://localhost:3000/restaurants')
        allRestaurant = res.data
        console.log(res.data)

        return allRestaurant

    } catch (error) {
        console.error('Error fetching restaurants:', error)
    }


}