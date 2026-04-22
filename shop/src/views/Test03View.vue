<script setup>
import { ref, onMounted } from 'vue';
import { getProducts, getProduct } from '@/api/product';

const products = ref([]);

const fetchProducts = async () => {
    products.value = await getProducts();
}

onMounted(() => {
    fetchProducts();
})
</script>
<template>
    <div>
        <h1>商品列表</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                <img :src="product.image" alt="">
                <br>
                {{ product.title }} - {{ product.price }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
img {
    width: 100px;
    height: 100px;
    object-fit: contain;
}
</style>