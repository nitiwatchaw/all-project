import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useUserStore = defineStore('userStore', () => {
    const users = reactive([
        {
            id: 1, name: 'leela',
        },
        {
            id: 2, name: 'dfff'
        }
    ])
    return {
        users
    }
})