<script setup>

import { useCartStore } from '@/stores/useCartStore';

const data = useCartStore()

</script>

<template >
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark ">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Vue shopping Cart</router-link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/"><i class="b bi-house"></i>
                            Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/cart"><i class="b bi-cart-check"></i>Cart{{ data.countCartItems
                        }}</router-link>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
</template>

<style ></style>