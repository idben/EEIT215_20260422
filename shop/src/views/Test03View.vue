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
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>
        <ul>
            <li v-for="product in products" :key="product.id">
                <img :src="product.image" alt="">
                <br>
                {{ product.title }} - {{ product.price }}
            </li>
        </ul>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    width: 100px;
    height: 100px;
    object-fit: contain;
}
</style>