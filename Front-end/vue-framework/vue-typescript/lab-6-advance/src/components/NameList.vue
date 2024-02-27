<script setup lang="ts">
import { reactive } from 'vue';


const names = reactive([
    {
        firstname: 'Bruce',
        lastname: 'Wayne'
    },
    {
        firstname: 'Clark',
        lastname: 'Kent'
    },
    {
        firstname: 'Princess',
        lastname: 'Diana'
    },
])

</script>

<template>
    <div>
        <h3 v-for="name in names" :key="name.firstname">
            <slot :firstname="name.firstname" :lastname="name.lastname">

            </slot>
        </h3>
        
    </div>
</template>

<style lang="css" scoped></style>