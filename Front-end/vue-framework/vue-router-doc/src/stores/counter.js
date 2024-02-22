import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user'


//not setup
export const useCounterStore = defineStore('counter', {
    state: () => {
        return {
            count: 1,
            name: 'Nitiwat Chawkanha'
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2,
        doubleCountPlusOne(state) {
            return (value) => {
                return state.count + value
            }
        }
    },
    actions: {
        increment() {
            this.count++
        },
    },
})


//setup

export const useCounterStoreSetup = defineStore('counterSetup', () => {
    const count = ref(5)
    const doubleCount = computed(() => count.value * 2)
    const doubleCountPlusOne = computed(() => count.value * 2)
    const incrementSetup = () => {
        count.value++
    }

    const userStore = useUserStore()

    const getUserById = computed(() => {
        return (id) => userStore.users.find(user => user.id === id)
    })

    return {
        count,
        doubleCount,
        incrementSetup,
        doubleCountPlusOne,
        getUserById
    }

})




