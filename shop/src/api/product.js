import api from "./index.js";

// 取用產品列表
export const getProducts = async () => {
    const response = await api.get('/products');
    return response.data;
}

// 取用單一產品, 帶入 id
export const getProduct = async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
}