// fetch.js
import { ref, watchEffect, toValue } from 'vue'

export function useFetch(url) {
    const data = ref(null)
    const error = ref(null)

    const fetchData = async () => {
        // reset state before fetching..
        data.value = null
        error.value = null
        try {
            const res = await fetch(toValue(url))
            data.value = await res.json()
        }
        catch (error) {
            error.value = err
        }
 
    }

    watchEffect(() => {
        fetchData()
    })

    return { data, error }
}