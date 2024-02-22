<script setup>
import ProductItem from './ProductItem.vue';
import { useCartStore } from '@/stores/useCartStore'

const data = useCartStore()


</script>

<template >
    <div class="row my-4">
        <ProductItem v-for="product in data.products" :key="product.id" :product="product" />
    </div>
</template>

<style ></style>