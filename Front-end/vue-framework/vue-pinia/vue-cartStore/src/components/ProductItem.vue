<script setup>

const props = defineProps({
    product: {
        type: Object,
        require: true
    },
})


import { useCartStore } from '@/stores/useCartStore';

const data = useCartStore()


</script>
<template >
    <div class="col-md-4 mb-2">
        <div class="card">
            <img :src="product?.image" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-body">
                    <h5 class="card-title">
                        {{ product.name }}
                    </h5>
                    <p class="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nisi harum ad, similique eligendi
                        velit, unde beatae recusandae veritatis placeat laudantium eaque ea explicabo dicta vitae ipsam?
                        Exercitationem, recusandae architecto?
                    </p>
                    <p>
                        <span class="badge bg-danger">
                            {{ product.price }}
                        </span>
                    </p>
                    <button @click="data.addToCart(product)" class="btn btn-primary">
                        <i class="bi bi-cart-check"></i>
                        Add to cart
                    </button>
                </h5>
            </div>
        </div>
    </div>
</template>
<style scoped>
img {
    width: 100%;
    height: 450px;
    object-fit: cover;
}
</style>