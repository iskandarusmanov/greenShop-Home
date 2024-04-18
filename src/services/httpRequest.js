import axios from "axios";

export const request = axios.create({
    baseURL: "http://localhost:3000/",
    timeout: 10000,
});

const errorHandler = (error) => {
    if (error && error.response) {
        console.log("error", error)
    }

    return Promise.reject(error.response);
}

request.interceptors.response.use((response) => response.data, errorHandler)