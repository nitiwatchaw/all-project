<script>
export default {

}
</script>


<template >
    <slot name="card-img"></slot>
    <slot name="card-header"> </slot>
    <slot name="card-content"> </slot>
    <slot name="card-button"> </slot>
</template>

<style scoped>
img {
    border-radius: 100%;
    padding: 20px;
}
</style>