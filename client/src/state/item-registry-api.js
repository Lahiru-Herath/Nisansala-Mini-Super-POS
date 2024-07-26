import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const createItem = async ({ name, barcode, desc, bp, sp, category, stock, status }) => {
    try {
        const res = await axios.post(`${API_URL}/products`, {
            name: name,
            barcode: barcode,
            description: desc,
            buyingPrice: bp,
            sellingPrice: sp,
            category,
            stockQuantity: stock,
            status
        });
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const updateItem = async (id, { name, barcode, desc, bp, sp, category, stock, status }) => {
    try {
        const res = await axios.put(`${API_URL}/products/${id}`, {
            name,
            barcode,
            description: desc,
            buyingPrice: bp,
            sellingPrice: sp,
            category,
            stockQuantity: stock,
            status
        });
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const deleteItem = async (id) => {
    try {
        const res = await axios.delete(`${API_URL}/products/${id}`);
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const getItem = async (id) => {
    try {
        const res = await axios.get(`${API_URL}/products/${id}`);
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const getItems = async () => {
    try {
        const res = await axios.get(`${API_URL}/products`);
        return res.data;
    } catch (err) {
        throw err;
    }
}
