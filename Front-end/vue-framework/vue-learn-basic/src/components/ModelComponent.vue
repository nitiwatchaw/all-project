<script setup>
const [model, modifiers] = defineModel({
    set(value) {
        if (modifiers.capitalize) {
            return (
                value.charAt(0).toUpperCase() + value.slice(1)
            )
        }
        return value
    },
})


const firstName = defineModel('firstname')
const lastName = defineModel('lastname')

</script>

<template>
    <input type="text" v-model="model" />
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
</template>
