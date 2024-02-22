<script setup >
import { inject } from 'vue';
const message = inject('message')
const main = inject('mainn')

const { searchText, updateSearchText } = inject('search')

</script>

<template>
    <div>
        <div class="">
            Message: {{ message }}
        </div>
        <div class="">
            Main:{{ main }}
        </div>
        <div class="">
            Search: {{ searchText }}
        </div>
        <button @click="updateSearchText">Click</button>
    </div>
</template>

<style lang="css" scoped></style>