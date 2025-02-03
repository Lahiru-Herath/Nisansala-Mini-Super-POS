import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export const getCookie = (name) => {
    const regex = new RegExp(`(^| )${name}=([^;]+)`);
    const match = document.cookie.match(regex);
    if (match) {
        // console.log("getCookie: token found");
        return match[2];
    } else {
        // console.log("getCookie: unable to find token")
        return null;
    }
}

export const removeCookie = (name) => {
    Cookies.remove(name);
}

export const decodeToken = (token) => {
    return jwtDecode(token);
}