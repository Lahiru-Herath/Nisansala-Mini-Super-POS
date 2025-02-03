import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const createOrder = async (orderData) => {
    try {
        const res = await axios.post(`${API_URL}/orders`, orderData);
        console.log(res.data);
        return res.data;
    } catch (err) {
        throw err;
    }
}