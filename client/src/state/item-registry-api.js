import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const createItem = async ({ name, barcode, description, buyingPrice, sellingPrice, category, stockQuantity, status }) => {
    // console.log({ name, barcode, description, buyingPrice, sellingPrice, category, stockQuantity, status });
    try {
        const res = await axios.post(`${API_URL}/products`, {
            name,
            barcode,
            description,
            buyingPrice,
            sellingPrice,
            category,
            stockQuantity,
            status,
        });
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const updateItem = async (id, { name, barcode, description, buyingPrice, sellingPrice, category, stockQuantity, status }) => {
    console.log({ name, barcode, description, buyingPrice, sellingPrice, category, stockQuantity, status });
    try {
        const res = await axios.put(`${API_URL}/products/${id}`, {
            name,
            barcode,
            description,
            buyingPrice,
            sellingPrice,
            category,
            stockQuantity,
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
