export const getCookie = (name) => {
    const regex = new RegExp(`(^| )${name}=([^;]+)`);
    const match = document.cookie.match(regex);
    if (match) {
        console.log("getCookie: token found");
        return match[2];
    } else {
        console.log("getCookie: unable to find token")
        return null;
    }
}