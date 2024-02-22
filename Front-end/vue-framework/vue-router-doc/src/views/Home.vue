<script setup>
import { computed, defineProps } from 'vue'
import { storeToRefs } from 'pinia';
import { useCounterStore, useCounterStoreSetup } from '../stores/counter'

import Mapstate from './Mapstate.vue';
const props = defineProps(['name'])
const counter = useCounterStore()
const { count, doubleCount, name, doubleCountPlusOne } = storeToRefs(counter)
const counterSetup = useCounterStoreSetup()

// Now you can log props
console.log(props)


const handleincreaseCount = () => {
    counter.increment()
    counterSetup.incrementSetup()

    counter.$patch({
        count: counter.count + 1,
        name: counter.name + 'asdfasd'
    })

}

counter.$subscribe((mutation, state) => {
    console.log(mutation)
    console.log(state)
})



</script>

<template>
    <div class="">
        <div>
            Home
        </div>
        <h1>Setup</h1>
        <div class="">
            <div class="">
                Counter: {{ count }} || CounterSetUp: {{ counterSetup.count }}
            </div>
            <div class="">
                Doutble Counter: {{ doubleCount }}|| DoubleCounterSetUp: {{ counterSetup.doubleCount }}

            </div>
            <div class="">
                DoubleCountWithParameter: {{ doubleCountPlusOne(10) }}
            </div>
            <div class="">
                Name:{{ name }}
            </div>
            <button @click="handleincreaseCount">IncreaseCount++</button>
            <button @click="counter.$reset">Reset</button>
        </div>
        <hr>
        <Mapstate />
        <hr>
        <div class="">
            User: {{ counterSetup.getUserById(1).name }}
        </div>

    </div>
</template>

<style lang="css" scoped></style>
