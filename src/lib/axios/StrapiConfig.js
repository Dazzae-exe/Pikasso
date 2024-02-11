import axios from "axios";

export const StrapiInstance = axios.create({
    baseURL: "http://localhost:1337/api/",
    timeout: 1000,
})