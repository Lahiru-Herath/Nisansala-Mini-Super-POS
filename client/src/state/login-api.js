import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (username, password) => {
    try {
        const res = await axios.post(`${API_URL}/auth/login`, {
            username: username,
            password: password,
        }, { withCredentials: true });
        localStorage.setItem("user_token", res.data.token);
        return res.data;
    } catch (err) {
        throw err;
    }
}