<script setup >

import { computed, ref } from 'vue';


const props = defineProps({
    somethings: String
})


const changeProps = computed(() => props.somethings.trim().toUpperCase())


</script>

<template>
    <div>
        This is test component
        
        {{ changeProps }}
    </div>
</template>

<style lang="scss" scoped></style>