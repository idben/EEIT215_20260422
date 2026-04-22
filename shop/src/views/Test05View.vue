<script setup>
import { ref, onMounted, watch } from 'vue';
import { getProducts, getProduct, getCategories, getProductsByCategory } from '@/api/product';

const products = ref([]);
const product = ref([]);
const categories = ref([]);
const selectedCategory = ref('');
const loading = ref(true);
const error = ref(null);

const fetchProducts = async () => {
    loading.value = true;
    try {
        // 有可能會有錯誤的放在 try
        if (selectedCategory.value) {
            products.value = await getProductsByCategory(selectedCategory.value)
        } else {
            products.value = await getProducts();
        }
    } catch (err) {
        // 補獲錯誤
        error.value = err.message || "載入失敗";
    } finally {
        // 最後一定會觸發的區域
        loading.value = false;
    }
}

const fetchProduct = async (id) => {
    try {
        product.value = await getProduct(id);
    } catch (err) {
        error.value = err.message || "載入失敗";
    }
}

const fetchCategories = async () => {
    try {
        categories.value = await getCategories();
    } catch (err) {
        error.value = err.message || "載入失敗";
    }
}

watch(selectedCategory, () => {
    fetchProducts();
});

onMounted(() => {
    fetchProducts();
    fetchCategories();
})
</script>
<template>
    <div>
        <div class="d-flex">
            <h1>商品卡片列表(篩選)</h1>
            <!-- 分類下拉選單 -->
            <div class="ms-auto">
                <select v-model="selectedCategory" class="form-select">
                    <option value="">全部</option>
                    <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
                </select>
            </div>

        </div>

        <!-- 載入中 -->
        <div v-if="loading" class="text-center py-5">載入中...</div>

        <!-- 錯誤區塊 -->
        <div v-else-if="error" class="text-center text-danger py-5">
            <p>error: {{ error }}</p>
            <button class="btn btn-danger mt-2">重試</button>
        </div>

        <!-- 商品卡片 -->
        <div v-else class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6- g-2">
            <div class="col" v-for="product in products" :key="product.id" @click="fetchProduct(product.id)"
                data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div class="h400px">
                    <div class="card h-100">
                        <img :src="product.image" class="h200px card-img-top object-fit-contain" alt="">
                        <div class="card-body">
                            <div>{{ product.title }}</div>

                        </div>
                        <div class="card-footer d-flex align-items-center">
                            <div class="price">$ {{ product.price }}</div>
                            <button class="btn btn-primary ms-auto">加入購物車</button>
                        </div>
                        <div class="badge text-light bg-success position-absolute st1">{{ product.category }}</div>
                    </div>
                </div>
            </div>
        </div>
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

.h200px {
    height: 200px;
}

.h400px {
    height: 400px;
}

.st1 {
    left: 5px;
    top: 5px;
}

.ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>