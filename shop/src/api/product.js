import api from "./index.js";

// 取用產品列表
export const getProducts = async () => {
    const response = await api.get('/products');
    // 模擬loading...
    // await new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve();
    //     }, 3000);
    // })
    return response.data;
}

// 取用單一產品, 帶入 id
export const getProduct = async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
}

// 取用分類列表
export const getCategories = async () => {
    const response = await api.get('/products/categories');
    return response.data;
}

// 由分類取用產品列表
export const getProductsByCategory = async (category) => {
    const response = await api.get(`/products/category/${category}`);
    return response.data;
}

