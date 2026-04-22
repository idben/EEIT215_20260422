<script setup>
import { ref, onMounted } from 'vue';
import { getProducts, getProduct } from '@/api/product';

const products = ref([]);
const product = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchProducts = async () => {
    loading.value = true;

    try {
        // 有可能會有錯誤的放在 try
        products.value = await getProducts();
    } catch (err) {
        // 補獲錯誤
        error.value = err.message || "載入失敗";
    } finally {
        // 最後一定會觸發的區域
        loading.value = false;
    }
}

const fetchProduct = async (id) => {
    product.value = await getProduct(id);
    console.log(product.value);

}

onMounted(() => {
    fetchProducts();
})
</script>
<template>
    <div>
        <h1>商品列表</h1>
        <!-- 載入中 -->
        <div v-if="loading" class="text-center py-5">載入中...</div>

        <!-- 錯誤區塊 -->
        <div v-else-if="error" class="text-center text-danger py-5">
            <p>error: {{ error }}</p>
            <button class="btn btn-danger mt-2">重試</button>
        </div>

        <!-- 商品卡片 -->
        <ul v-else>
            <li v-for="product in products" :key="product.id" @click="fetchProduct(product.id)" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
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
                    <h1>{{ product.title }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img class="img-fluid" :src="product.image" alt="">
                    <div class="d-flex">
                        <p class="flex-shrink-1">{{ product.description }}</p>
                        <div class="w100px">$ {{ product.price }}</div>
                    </div>
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
li img {
    width: 100px;
    height: 100px;
    object-fit: contain;
}

.w100px {
    flex-basis: 100px;
}
</style>