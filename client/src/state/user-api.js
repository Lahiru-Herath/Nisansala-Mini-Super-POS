import axios from "axios";
import { getCookie } from "../auth/cookie";
import { jwtDecode } from "jwt-decode";

const API_URL = import.meta.env.VITE_API_URL;

export const getUser = async (userId) => {
    try {
        const res = await axios.get(`${API_URL}/users/${userId}`);
        console.log(res.data);
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const getUserByAuthToken = async () => {
    try {
        // console.log("getUserByAuthToken: Calling getCookie");
        const token = getCookie("access_token");
        // console.log(token);
        if (!token) {
            console.log("Token not found");
        }
        const decodedToken = jwtDecode(token);
        // console.log(decodedToken);
        // console.log(decodedToken.id);
        const user = await getUser(decodedToken.id);
        // console.log(user);
        return user;
    } catch (err) {
        throw err;
    }
}

export const getUserByToken = async () => {
    try {
        const token = localStorage.getItem("user_token");
        const decodedToken = jwtDecode(token);
        console.log("Decoded token: ", decodedToken);
        console.log("userId: ", decodedToken.id);
        const user = await getUser(decodedToken.id);
        return user;
    } catch (err) {
        console.log(err);
    }
}

