export const getCookie = (name) => {
    const regex = new RegExp(`(^| )${name}=([^;]+)`);
    const match = document.cookie.match(regex);
    if (match) {
        return match[2];
    } else {
        throw new Error("Token Not Found")
    }
}