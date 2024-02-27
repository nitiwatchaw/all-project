
<script setup lang="ts">
import { defineProps, ref, defineSlots } from 'vue'

const props = defineProps<{ url: string }>()

let res = ref('')
let loading = ref(true)

fetch(props.url)
    .then((response) => response.json())
    .then((response) => {
        res.value = response
        loading.value = false
        console.log(res.value)
    })

defineSlots()


</script>

<template>
    <div>
        <div v-if="loading" class="">
            <h1>Loading...</h1>
        </div>
        <div v-else-if="res && res[0]" class="">
            <slot :res="res" :loading="loading"></slot>
        </div>
    </div>
</template>

<style lang="css" scoped></style>